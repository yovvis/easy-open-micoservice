package com.yovvis.easyopenappservice.service.impl;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yovvis.easyopenappservice.mapper.ScoringResultMapper;
import com.yovvis.easyopenappservice.service.AppService;
import com.yovvis.easyopenappservice.service.ScoringResultService;
import com.yovvis.easyopencommon.common.ErrorCode;
import com.yovvis.easyopencommon.constant.CommonConstant;
import com.yovvis.easyopencommon.exception.ThrowUtils;
import com.yovvis.easyopencommon.utils.SqlUtils;
import com.yovvis.easyopenmodel.dto.scoringresult.ScoringResultQueryRequest;
import com.yovvis.easyopenmodel.entity.App;
import com.yovvis.easyopenmodel.entity.ScoringResult;
import com.yovvis.easyopenmodel.entity.User;
import com.yovvis.easyopenmodel.vo.ScoringResultVO;
import com.yovvis.easyopenmodel.vo.UserVO;
import com.yovvis.easyopenserviceclient.service.UserFeignClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * 评分结果服务实现
 *
 * @author yovvis
 */
@Service
@Slf4j
public class ScoringResultServiceImpl extends ServiceImpl<ScoringResultMapper, ScoringResult>
    implements ScoringResultService {

    @Resource
    private UserFeignClient userFeignClient;

    @Resource
    private AppService appService;

    /**
     * 校验数据
     *
     * @param scoringResult
     * @param add 对创建的数据进行校验
     */
    @Override
    public void validScoringResult(ScoringResult scoringResult, boolean add) {
        ThrowUtils.throwIf(scoringResult == null, ErrorCode.PARAMS_ERROR);
        // 从对象中取值
        String resultName = scoringResult.getResultName();
        Long appId = scoringResult.getAppId();
        // 创建数据时，参数不能为空
        if (add) {
            // 补充校验规则
            ThrowUtils.throwIf(StrUtil.isBlank(resultName), ErrorCode.PARAMS_ERROR, "结果名称不能为空");
            ThrowUtils.throwIf(appId == null || appId <= 0, ErrorCode.PARAMS_ERROR, "appId 非法");
        }
        // 修改数据时，有参数则校验
        // 补充校验规则
        if (StrUtil.isNotBlank(resultName)) {
            ThrowUtils.throwIf(resultName.length() > 128, ErrorCode.PARAMS_ERROR, "结果名称不能超过 128");
        }
        // 补充校验规则
        if (appId != null) {
            App app = appService.getById(appId);
            ThrowUtils.throwIf(app == null, ErrorCode.PARAMS_ERROR, "应用不存在");
        }
    }

    /**
     * 获取查询条件
     *
     * @param scoringResultQueryRequest
     * @return
     */
    @Override
    public QueryWrapper<ScoringResult> getQueryWrapper(ScoringResultQueryRequest scoringResultQueryRequest) {
        QueryWrapper<ScoringResult> queryWrapper = new QueryWrapper<>();
        if (scoringResultQueryRequest == null) {
            return queryWrapper;
        }
        // 从对象中取值
        Long id = scoringResultQueryRequest.getId();
        String resultName = scoringResultQueryRequest.getResultName();
        String resultDesc = scoringResultQueryRequest.getResultDesc();
        String resultPicture = scoringResultQueryRequest.getResultPicture();
        String resultProp = scoringResultQueryRequest.getResultProp();
        Integer resultScoreRange = scoringResultQueryRequest.getResultScoreRange();
        Long appId = scoringResultQueryRequest.getAppId();
        Long userId = scoringResultQueryRequest.getUserId();
        Long notId = scoringResultQueryRequest.getNotId();
        String searchText = scoringResultQueryRequest.getSearchText();
        String sortField = scoringResultQueryRequest.getSortField();
        String sortOrder = scoringResultQueryRequest.getSortOrder();

        // 补充需要的查询条件
        // 从多字段中搜索
        if (StrUtil.isNotBlank(searchText)) {
            // 需要拼接查询条件
            queryWrapper.and(qw -> qw.like("resultName", searchText).or().like("resultDesc", searchText));
        }
        // 模糊查询
        queryWrapper.like(StrUtil.isNotBlank(resultName), "resultName", resultName);
        queryWrapper.like(StrUtil.isNotBlank(resultDesc), "resultDesc", resultDesc);
        queryWrapper.like(StrUtil.isNotBlank(resultProp), "resultProp", resultProp);
        // 精确查询
        queryWrapper.ne(ObjectUtils.isNotEmpty(notId), "id", notId);
        queryWrapper.eq(ObjectUtils.isNotEmpty(id), "id", id);
        queryWrapper.eq(ObjectUtils.isNotEmpty(userId), "userId", userId);
        queryWrapper.eq(ObjectUtils.isNotEmpty(appId), "appId", appId);
        queryWrapper.eq(ObjectUtils.isNotEmpty(resultScoreRange), "resultScoreRange", resultScoreRange);
        queryWrapper.eq(StrUtil.isNotBlank(resultPicture), "resultPicture", resultPicture);
        // 排序规则
        queryWrapper.orderBy(SqlUtils.validSortField(sortField), sortOrder.equals(CommonConstant.SORT_ORDER_ASC),
            sortField);
        return queryWrapper;
    }

    /**
     * 获取评分结果封装
     *
     * @param scoringResult
     * @param request
     * @return
     */
    @Override
    public ScoringResultVO getScoringResultVO(ScoringResult scoringResult, HttpServletRequest request) {
        // 对象转封装类
        ScoringResultVO scoringResultVO = ScoringResultVO.objToVo(scoringResult);

        // 可以根据需要为封装对象补充值，不需要的内容可以删除
        // region 可选
        // 1. 关联查询用户信息
        Long userId = scoringResult.getUserId();
        User user = null;
        if (userId != null && userId > 0) {
            user = userFeignClient.getById(userId);
        }
        UserVO userVO = userFeignClient.getUserVO(user);
        scoringResultVO.setUser(userVO);
        // endregion

        return scoringResultVO;
    }

    /**
     * 分页获取评分结果封装
     *
     * @param scoringResultPage
     * @param request
     * @return
     */
    @Override
    public Page<ScoringResultVO> getScoringResultVOPage(Page<ScoringResult> scoringResultPage,
        HttpServletRequest request) {
        List<ScoringResult> scoringResultList = scoringResultPage.getRecords();
        Page<ScoringResultVO> scoringResultVOPage =
            new Page<>(scoringResultPage.getCurrent(), scoringResultPage.getSize(), scoringResultPage.getTotal());
        if (CollUtil.isEmpty(scoringResultList)) {
            return scoringResultVOPage;
        }
        // 对象列表 => 封装对象列表
        List<ScoringResultVO> scoringResultVOList = scoringResultList.stream().map(scoringResult -> {
            return ScoringResultVO.objToVo(scoringResult);
        }).collect(Collectors.toList());

        // 可以根据需要为封装对象补充值，不需要的内容可以删除
        // region 可选
        // 1. 关联查询用户信息
        Set<Long> userIdSet = scoringResultList.stream().map(ScoringResult::getUserId).collect(Collectors.toSet());
        Map<Long, List<User>> userIdUserListMap =
            userFeignClient.listByIds(userIdSet).stream().collect(Collectors.groupingBy(User::getId));
        // 填充信息
        scoringResultVOList.forEach(scoringResultVO -> {
            Long userId = scoringResultVO.getUserId();
            User user = null;
            if (userIdUserListMap.containsKey(userId)) {
                user = userIdUserListMap.get(userId).get(0);
            }
            scoringResultVO.setUser(userFeignClient.getUserVO(user));
        });
        // endregion

        scoringResultVOPage.setRecords(scoringResultVOList);
        return scoringResultVOPage;
    }

}