package com.yovvis.easyopenuserservice.service.impl;

import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yovvis.easyopenapi.model.entity.User;
import com.yovvis.easyopenapi.model.vo.LoginUserVO;
import com.yovvis.easyopenapi.model.vo.TokenLoginUserVO;
import com.yovvis.easyopenapi.model.vo.UserVO;
import com.yovvis.easyopencommon.common.ErrorCode;
import com.yovvis.easyopencommon.constant.CommonConstant;
import com.yovvis.easyopencommon.enums.UserRoleEnum;
import com.yovvis.easyopencommon.exception.BusinessException;
import com.yovvis.easyopencommon.utils.SqlUtils;
import com.yovvis.easyopenuserservice.dao.UserDAO;
import com.yovvis.easyopenuserservice.mapper.UserMapper;
import com.yovvis.easyopenuserservice.model.dto.user.UserQueryRequest;
import com.yovvis.easyopenuserservice.service.UserService;
import com.yovvis.easyopenuserservice.wxmp.model.bo.QrcodeInfoBO;
import com.yovvis.easyopenuserservice.wxmp.enums.QrcodeStatusEnum;
import com.yovvis.easyopenuserservice.wxmp.service.QrcodeService;
import lombok.extern.slf4j.Slf4j;
import me.chanjar.weixin.common.bean.WxOAuth2UserInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.yovvis.easyopencommon.constant.UserConstant.USER_LOGIN_STATE;


/**
 * 用户服务实现
 */
@Service
@Slf4j
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    /**
     * 盐值，混淆密码
     */
    public static final String SALT = "yovvis";

    @Resource
    private QrcodeService qrcodeService;

    @Resource
    private UserDAO userDao;

    @Override
    public long userRegister(String userAccount, String userPassword, String checkPassword) {
        // 1. 校验
        if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "参数为空");
        }
        if (userAccount.length() < 4) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "用户账号过短");
        }
        if (userPassword.length() < 5 || checkPassword.length() < 5) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "用户密码过短");
        }
        // 密码和校验密码相同
        if (!userPassword.equals(checkPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "两次输入的密码不一致");
        }
        synchronized (userAccount.intern()) {
            // 账户不能重复
            QueryWrapper<User> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("userAccount", userAccount);
            long count = this.baseMapper.selectCount(queryWrapper);
            if (count > 0) {
                throw new BusinessException(ErrorCode.PARAMS_ERROR, "账号重复");
            }
            // 2. 加密
            String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
            // 3. 插入数据
            User user = new User();
            user.setUserAccount(userAccount);
            user.setUserPassword(encryptPassword);
            boolean saveResult = this.save(user);
            if (!saveResult) {
                throw new BusinessException(ErrorCode.SYSTEM_ERROR, "注册失败，数据库错误");
            }
            return user.getId();
        }
    }

    @Override
    public TokenLoginUserVO userLogin(String userAccount, String userPassword) {
        // 1. 校验
        if (StringUtils.isAnyBlank(userAccount, userPassword)) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "参数为空");
        }
        if (userAccount.length() < 4) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "账号错误");
        }
        if (userPassword.length() < 5) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "密码错误");
        }
        // 2. 加密
        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
        // 查询用户是否存在
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userAccount", userAccount);
        queryWrapper.eq("userPassword", encryptPassword);
        User user = this.baseMapper.selectOne(queryWrapper);
        // 用户不存在
        if (user == null) {
            log.info("user login failed, userAccount cannot match userPassword");
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "用户不存在或密码错误");
        }
        // 3. 记录用户的登录态
        StpUtil.login(user.getId());
        StpUtil.getTokenSession().set(USER_LOGIN_STATE, user);
        return this.getTokenLoginUserVO(user);
    }

    @Override
    public LoginUserVO userLoginByMpOpen(WxOAuth2UserInfo wxOAuth2UserInfo) {
        String unionId = wxOAuth2UserInfo.getUnionId();
        String mpOpenId = wxOAuth2UserInfo.getOpenid();
        // 单机锁
        synchronized (unionId.intern()) {
            // 查询用户是否已存在
            QueryWrapper<User> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("unionId", unionId);
            User user = this.getOne(queryWrapper);
            // 被封号，禁止登录
            if (user != null && UserRoleEnum.BAN.getValue().equals(user.getUserRole())) {
                throw new BusinessException(ErrorCode.FORBIDDEN_ERROR, "该用户已被封，禁止登录");
            }
            // 用户不存在则创建
            if (user == null) {
                user = new User();
                user.setUnionId(unionId);
                user.setMpOpenId(mpOpenId);
                user.setUserAvatar(wxOAuth2UserInfo.getHeadImgUrl());
                user.setUserName(wxOAuth2UserInfo.getNickname());
                boolean result = this.save(user);
                if (!result) {
                    throw new BusinessException(ErrorCode.SYSTEM_ERROR, "登录失败");
                }
            }
            // 记录用户的登录态
            // 获取token相关参数
            StpUtil.getTokenSession().set(USER_LOGIN_STATE, user);
            return getLoginUserVO(user);
        }
    }

    /**
     * 获取当前登录用户
     *
     * @return
     */
    @Override
    public User getLoginUser() {
        if (!StpUtil.isLogin()) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        // 先判断是否已登录
        Object userObj = StpUtil.getTokenSession().get(USER_LOGIN_STATE);
        User currentUser = (User) userObj;
        if (currentUser == null || currentUser.getId() == null) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        return currentUser;
    }

    /**
     * 获取当前登录用户
     *
     * @param user
     * @return
     */
    @Override
    public TokenLoginUserVO getTokenLoginUserVO(User user) {
        if (user == null) {
            return null;
        }
        TokenLoginUserVO tokenLoginUserVO = new TokenLoginUserVO();
        BeanUtils.copyProperties(user, tokenLoginUserVO);
        // 获取 Token  相关参数
        SaTokenInfo tokenInfo = StpUtil.getTokenInfo();
        tokenLoginUserVO.setSaTokenInfo(tokenInfo);
        return tokenLoginUserVO;
    }

    /**
     * 获取当前登录用户
     *
     * @param token
     * @return
     */
    @Override
    public User getLoginUser(String token) {
        if (StrUtil.isBlank(token)) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        // 先判断是否已登录
        Object userObj = StpUtil.getTokenSessionByToken(token).get(USER_LOGIN_STATE);
        User currentUser = (User) userObj;
        // 从数据库查询（追求性能的话可以注释，直接走缓存）
        long userId = currentUser.getId();
        currentUser = this.getById(userId);
        if (currentUser == null) {
            throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        return currentUser;
    }

    /**
     * 获取当前登录用户（允许未登录）
     *
     * @return
     */
    @Override
    public User getLoginUserPermitNull() {
        // 先判断是否已登录
        Object userObj = StpUtil.getTokenSession().get(USER_LOGIN_STATE);
        User currentUser = (User) userObj;
        if (currentUser == null || currentUser.getId() == null) {
            return null;
        }
        // 从数据库查询（追求性能的话可以注释，直接走缓存）
        long userId = currentUser.getId();
        return this.getById(userId);
    }

    /**
     * 是否为管理员
     *
     * @return
     */
    @Override
    public boolean isAdmin() {
        // 仅管理员可查询
        Object userObj = StpUtil.getTokenSession().get(USER_LOGIN_STATE);
        User user = (User) userObj;
        return isAdmin(user);
    }

    @Override
    public boolean isAdmin(User user) {
        return user != null && UserRoleEnum.ADMIN.getValue().equals(user.getUserRole());
    }

    /**
     * 用户注销
     */
    @Override
    public boolean userLogout() {
        if (!StpUtil.isLogin() || StpUtil.getTokenSession().get(USER_LOGIN_STATE) == null) {
            throw new BusinessException(ErrorCode.OPERATION_ERROR, "未登录");
        }
        // 移除登录态
        StpUtil.logout();
        return true;
    }

    @Override
    public LoginUserVO getLoginUserVO(User user) {
        if (user == null) {
            return null;
        }
        LoginUserVO loginUserVO = new LoginUserVO();
        BeanUtils.copyProperties(user, loginUserVO);
        return loginUserVO;
    }

    @Override
    public UserVO getUserVO(User user) {
        if (user == null) {
            return null;
        }
        UserVO userVO = new UserVO();
        BeanUtils.copyProperties(user, userVO);
        return userVO;
    }

    @Override
    public List<UserVO> getUserVO(List<User> userList) {
        if (CollUtil.isEmpty(userList)) {
            return new ArrayList<>();
        }
        return userList.stream().map(this::getUserVO).collect(Collectors.toList());
    }

    @Override
    public QueryWrapper<User> getQueryWrapper(UserQueryRequest userQueryRequest) {
        if (userQueryRequest == null) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "请求参数为空");
        }
        Long id = userQueryRequest.getId();
        String unionId = userQueryRequest.getUnionId();
        String mpOpenId = userQueryRequest.getMpOpenId();
        String userName = userQueryRequest.getUserName();
        String userProfile = userQueryRequest.getUserProfile();
        String userRole = userQueryRequest.getUserRole();
        String sortField = userQueryRequest.getSortField();
        String sortOrder = userQueryRequest.getSortOrder();
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq(id != null, "id", id);
        queryWrapper.eq(StringUtils.isNotBlank(unionId), "unionId", unionId);
        queryWrapper.eq(StringUtils.isNotBlank(mpOpenId), "mpOpenId", mpOpenId);
        queryWrapper.eq(StringUtils.isNotBlank(userRole), "userRole", userRole);
        queryWrapper.like(StringUtils.isNotBlank(userProfile), "userProfile", userProfile);
        queryWrapper.like(StringUtils.isNotBlank(userName), "userName", userName);
        queryWrapper.orderBy(SqlUtils.validSortField(sortField), sortOrder.equals(CommonConstant.SORT_ORDER_ASC),
                sortField);
        return queryWrapper;
    }

    /**
     * 使用微信登录
     *
     * @param code 微信二维码绑定的code
     * @param user 用户信息
     */
    @Override
    public void loginByWx(Integer code, User user) {
        TokenLoginUserVO tokenLoginUserVO = new TokenLoginUserVO();
        BeanUtils.copyProperties(user, tokenLoginUserVO);
        // 获取 Token  相关参数
        SaTokenInfo tokenInfo = StpUtil.getTokenInfo();
        tokenLoginUserVO.setSaTokenInfo(tokenInfo);
        // 记录用户的登录态
        StpUtil.login(user.getId());
        StpUtil.getTokenSession().set(USER_LOGIN_STATE, user);
        // 保存当前二维码扫描状态为已使用
        QrcodeInfoBO qrcodeInfoBO = new QrcodeInfoBO();
        qrcodeInfoBO.setStatus(QrcodeStatusEnum.AUTHORIZED.getCode());
        qrcodeInfoBO.setTokenLoginUserVO(tokenLoginUserVO);
        qrcodeService.saveLoginStatus(code, qrcodeInfoBO);
    }

    /**
     * 使用微信注册
     *
     * @param code 微信二维码绑定的code
     * @param user 需要保存的用户信息
     */
    @Override
    public void registerByWx(Integer code, User user) {
        String account = "qxkfpt_" + RandomUtil.randomNumbers(5);
        String password = "123456";
        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + password).getBytes());
        // 设置账户名和密码
        user.setUserAccount(account);
        user.setUserPassword(encryptPassword);
        // 保存用户信息
        userDao.save(user);
        // 登录
        loginByWx(code, user);
    }
}
