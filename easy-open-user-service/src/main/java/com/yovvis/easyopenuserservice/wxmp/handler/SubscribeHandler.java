package com.yovvis.easyopenuserservice.wxmp.handler;

import com.yovvis.easyopenuserservice.wxmp.service.WxMessageService;
import lombok.extern.slf4j.Slf4j;
import me.chanjar.weixin.common.session.WxSessionManager;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.message.WxMpXmlMessage;
import me.chanjar.weixin.mp.bean.message.WxMpXmlOutMessage;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @Author Kkuil
 * @Date 2023/9/25
 * @Description 订阅处理器
 */
@Component
@Slf4j
public class SubscribeHandler extends AbstractHandler {
    @Resource
    private WxMessageService wxMessageService;

    @Override
    public WxMpXmlOutMessage handle(
            WxMpXmlMessage wxMpXmlMessage,
            Map<String, Object> context,
            WxMpService wxMpService,
            WxSessionManager sessionManager
    ) {
        this.logger.info("新关注用户 OPENID: " + wxMpXmlMessage.getFromUser());
        try {
            // 登录成功
            return wxMessageService.subscribe(wxMpService, wxMpXmlMessage);
        } catch (Exception e) {
            this.logger.error(e.getMessage(), e);
        }
        return null;
    }

}
