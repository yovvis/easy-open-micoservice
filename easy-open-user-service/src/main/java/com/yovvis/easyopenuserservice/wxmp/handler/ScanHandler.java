package com.yovvis.easyopenuserservice.wxmp.handler;

import com.yovvis.easyopenuserservice.wxmp.service.WxMessageService;
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
 * @Description 扫码处理器
 */
@Component
public class ScanHandler extends AbstractHandler {

    @Resource
    private WxMessageService wxMessageService;

    @Override
    public WxMpXmlOutMessage handle(
            WxMpXmlMessage wxMpXmlMessage,
            Map<String, Object> map,
            WxMpService wxMpService,
            WxSessionManager wxSessionManager
    ) {
        try {
            // 扫码事件处理
            return wxMessageService.scan(wxMpService, wxMpXmlMessage);
        } catch (Exception e) {
            this.logger.error(e.getMessage());
        }
        return null;
    }
}
