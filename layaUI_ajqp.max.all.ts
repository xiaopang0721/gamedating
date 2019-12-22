
module ui.ajqp.dating {
    export class BangDingUI extends View {
		public box_sk:Laya.Box;
		public clip:Laya.Clip;
		public btn_close:Laya.Button;
		public btn_bind:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":894,"height":510,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":54,"skin":"dating_ui/bangding/tu_3y.png"},"child":[{"type":"Image","props":{"y":115,"x":210,"skin":"dating_ui/bangding/tu_wz.png"}}]},{"type":"Box","props":{"y":248,"x":150,"width":104,"var":"box_sk","height":244,"anchorY":0,"anchorX":0}},{"type":"Image","props":{"y":302,"skin":"dating_ui/bangding/tu_yuan.png","centerX":207}},{"type":"Clip","props":{"y":251,"x":447,"var":"clip","skin":"dating_ui/bangding/clip_sz.png","index":9,"clipX":10}},{"type":"Image","props":{"y":307,"x":316,"skin":"dating_ui/bangding/tu_zeng.png"}},{"type":"Button","props":{"y":25,"x":875,"var":"btn_close","stateNum":1,"skin":"dating_ui/bangding/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":488,"width":350,"var":"btn_bind","height":96,"centerX":55,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":48,"x":175,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_tanchuanganniu.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":22,"x":94,"skin":"dating_ui/bangding/tu_msbd.png"}}]}]},{"type":"Image","props":{"y":-34,"x":293,"skin":"dating_ui/bangding/tu_bdsj.png"},"child":[{"type":"Image","props":{"y":23,"x":84,"skin":"dating_ui/bangding/tu_g.png","blendMode":"lighter"}}]},{"type":"Image","props":{"y":-82,"x":641,"skin":"dating_ui/bangding/tu_sg.png"}},{"type":"Image","props":{"y":254,"x":629,"skin":"dating_ui/bangding/tu_sg.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.BangDingUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ChongZhiUI extends View {
		public img_bgleft:Laya.Image;
		public box:Laya.Box;
		public box_yh:Laya.Box;
		public box_yh_type:Laya.Box;
		public list_yh:Laya.List;
		public box_yh_cz:Laya.Box;
		public txt_yh0:Laya.Label;
		public txt_yh1:Laya.Label;
		public txt_yh2:Laya.Label;
		public txt_yh3:Laya.Label;
		public btn_yh_copy0:Laya.Button;
		public btn_yh_copy1:Laya.Button;
		public btn_yh_copy2:Laya.Button;
		public btn_yh_copy3:Laya.Button;
		public ingput_yh0:Laya.TextInput;
		public ingput_yh1:Laya.TextInput;
		public txt_yh4:Laya.Label;
		public btn_back:Laya.Button;
		public btn_yh_tjcz:Laya.Button;
		public box_sm:Laya.Box;
		public box_sm_type:Laya.Box;
		public list_sm:Laya.List;
		public box_sm_cz:Laya.Box;
		public txt_sm_zh:Laya.Label;
		public txt_sm0:Laya.Label;
		public txt_sm1:Laya.Label;
		public txt_sm3:Laya.TextInput;
		public txt_sm2:Laya.TextInput;
		public btn_sm_copy0:Laya.Button;
		public btn_sm_copy1:Laya.Button;
		public img_sm_ewm:Laya.Image;
		public btn_back_sm:Laya.Button;
		public btn_sm_finish:Laya.Button;
		public box_wx:Laya.Box;
		public txt_wxsm4:Laya.Label;
		public box_zfb:Laya.Box;
		public txt_zfbsm4:Laya.Label;
		public box_ysf:Laya.Box;
		public txt_ysfsm4:Laya.Label;
		public box_zhuanzhang:Laya.Box;
		public box_cz:Laya.Box;
		public box_vip:Laya.Box;
		public btn_gotokefu:Laya.Button;
		public list_vip:Laya.List;
		public box_qudao:Laya.Box;
		public list_qudao:Laya.List;
		public list_money:Laya.List;
		public txt_input:Laya.TextInput;
		public btn_clear:Laya.Button;
		public btn_pay:Laya.Button;
		public box_kj:Laya.Box;
		public btn_kj:Laya.Button;
		public box_top_left:Laya.Box;
		public clip_money:Laya.Clip;
		public box_top_right:Laya.Box;
		public btn_close:Laya.Button;
		public btn_record:Laya.Button;
		public list_tab:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"skin":"dating_ui/chongzhi/zhezao.png","height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"dating_ui/chongzhi/tu_d.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_ding.png","right":-1,"left":-1}},{"type":"Image","props":{"width":266,"var":"img_bgleft","top":0,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,20,0","left":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":200,"top":0,"skin":"dating_ui/dating/tu_zzz.png","sizeGrid":"0,20,30,20","left":0}},{"type":"Box","props":{"width":1280,"var":"box","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":81,"x":258,"var":"box_yh"},"child":[{"type":"Box","props":{"y":1,"x":0,"width":1022,"var":"box_yh_type","pivotY":0,"pivotX":0,"height":639},"child":[{"type":"Image","props":{"y":17,"x":280,"skin":"dating_ui/chongzhi/tu_yhhw.png"}},{"type":"List","props":{"y":64,"x":11,"width":970,"var":"list_yh","pivotY":0,"pivotX":0,"height":571},"child":[{"type":"YingHangKa","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.YingHangKaUI"}}]}]},{"type":"Box","props":{"x":-12,"width":1022,"var":"box_yh_cz","height":639},"child":[{"type":"Box","props":{"y":22,"x":28,"width":521,"height":390},"child":[{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_yhxx.png"}},{"type":"Image","props":{"y":0,"x":259,"width":260,"skin":"dating_ui/chongzhi/tu_yhxx.png","scaleX":-1,"pivotX":260}},{"type":"Label","props":{"y":12,"x":201,"text":"收款银行","fontSize":30,"color":"#4b2401"}},{"type":"Label","props":{"y":85,"x":22,"text":"收款银行：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":165,"x":46,"text":"收款人：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":245,"x":22,"text":"收款账号：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":325,"x":22,"text":"开户支行：","fontSize":24,"color":"#cac09d"}},{"type":"Image","props":{"y":108,"x":135,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":188,"x":135,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":268,"x":135,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":348,"x":135,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Label","props":{"y":82,"x":142,"width":280,"var":"txt_yh0","text":"中国银行","height":24,"fontSize":24,"color":"#feb645"}},{"type":"Label","props":{"y":162,"x":142,"width":280,"var":"txt_yh1","text":"中国银行","fontSize":24,"color":"#feb645"}},{"type":"Label","props":{"y":242,"x":142,"width":280,"var":"txt_yh2","text":"中国银行","fontSize":24,"color":"#feb645"}},{"type":"Label","props":{"y":322,"x":142,"width":280,"var":"txt_yh3","text":"中国银行","fontSize":24,"color":"#feb645"}},{"type":"Button","props":{"y":72,"x":429,"var":"btn_yh_copy0","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}},{"type":"Button","props":{"y":152,"x":429,"var":"btn_yh_copy1","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}},{"type":"Button","props":{"y":232,"x":429,"var":"btn_yh_copy2","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}},{"type":"Button","props":{"y":312,"x":429,"var":"btn_yh_copy3","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}}]},{"type":"Box","props":{"y":22,"x":568,"width":427,"height":390},"child":[{"type":"Image","props":{"width":213,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"62,123,28,31","height":390}},{"type":"Image","props":{"y":0,"x":212,"width":213,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"62,123,28,31","scaleX":-1,"pivotX":213,"height":390}},{"type":"Label","props":{"y":12,"x":154,"text":"付款信息","fontSize":30,"color":"#4b2401"}},{"type":"Label","props":{"y":75,"x":15,"text":"充值金额：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":186,"x":15,"text":"充值凭证：","fontSize":24,"color":"#cac09d"}},{"type":"Image","props":{"y":104,"x":16,"width":397,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,40,10,40","height":52},"child":[{"type":"TextInput","props":{"y":3,"x":6,"width":387,"var":"ingput_yh0","promptColor":"#60594e","prompt":"请输入充值金额","height":48,"fontSize":24,"color":"#e9e9fb"}}]},{"type":"Image","props":{"y":215,"x":16,"width":397,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,40,10,40","height":52},"child":[{"type":"TextInput","props":{"y":3,"x":6,"width":387,"var":"ingput_yh1","promptColor":"#60594e","prompt":"请输入转账的姓名或卡号后4位","height":48,"fontSize":24,"color":"#e9e9fb"}}]},{"type":"Label","props":{"y":296,"x":15,"wordWrap":true,"width":399,"text":"注:以上银行账户限本次存款用,账户不定期更换,每次存款前请依照本页所显示的银行账户入款,如入款至已过期账号,无法查收.本公司恕不负责.","leading":10,"height":91,"fontSize":19,"color":"#bab9e1"}}]},{"type":"Label","props":{"y":414,"x":60,"width":400,"text":"第一步：复制收款银行前往充值","leading":10,"height":24,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":444,"x":60,"wordWrap":true,"width":463,"text":"第二步：充值完成，填写您的存款信息。最后提交充值","leading":10,"height":24,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":415,"x":600,"wordWrap":true,"width":362,"var":"txt_yh4","leading":10,"height":24,"fontSize":22,"color":"#bab9e1"}},{"type":"Button","props":{"y":522,"x":169,"width":242,"var":"btn_back","stateNum":1,"skin":"dating_ui/chongzhi/btn_shangyiye.png","sizeGrid":"12,13,15,16","height":72},"child":[{"type":"Label","props":{"y":18,"x":29,"text":"返回上一页","fontSize":36,"color":"#032444"}}]},{"type":"Button","props":{"y":520,"x":693,"width":230,"var":"btn_yh_tjcz","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","sizeGrid":"13,16,16,16","height":74},"child":[{"type":"Label","props":{"y":17,"x":42,"text":"提交充值","fontSize":36,"color":"#4b2401"}}]}]}]},{"type":"Box","props":{"y":81,"x":258,"width":1022,"var":"box_sm","height":639},"child":[{"type":"Box","props":{"y":1,"x":0,"width":1022,"var":"box_sm_type","pivotY":0,"pivotX":0,"height":639},"child":[{"type":"Image","props":{"y":17,"x":280,"skin":"dating_ui/chongzhi/tu_yhhw.png"}},{"type":"List","props":{"y":64,"x":11,"width":970,"var":"list_sm","pivotY":0,"pivotX":0,"height":571},"child":[{"type":"YingHangKa","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.YingHangKaUI"}}]}]},{"type":"Box","props":{"y":22,"x":16,"var":"box_sm_cz"},"child":[{"type":"Box","props":{"width":521,"height":390},"child":[{"type":"Image","props":{"width":260,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"20,20,20,20","height":390}},{"type":"Image","props":{"y":0,"x":259,"width":260,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"20,20,20,20","scaleX":-1,"pivotX":260,"height":390}},{"type":"Label","props":{"y":12,"x":201,"text":"收款信息","fontSize":30,"color":"#4b2401"}},{"type":"Label","props":{"y":82,"x":32,"text":"个人信息：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":163,"x":73,"width":129,"var":"txt_sm_zh","text":"支付宝账号：","height":24,"fontSize":24,"color":"#cac09d","anchorY":0.5,"anchorX":0.5,"align":"right"}},{"type":"Label","props":{"y":214,"x":32,"text":"存款金额：","fontSize":24,"color":"#cac09d"}},{"type":"Label","props":{"y":275,"x":32,"text":"凭证信息：","fontSize":24,"color":"#cac09d"}},{"type":"Image","props":{"y":105,"x":141,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":174,"x":141,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":237,"x":141,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Image","props":{"y":298,"x":141,"width":370,"skin":"dating_ui/chongzhi/tu_xxxt.png"}},{"type":"Label","props":{"y":79,"x":148,"width":281,"var":"txt_sm0","text":"中国银行","fontSize":24,"color":"#feb645"}},{"type":"Label","props":{"y":148,"x":148,"width":280,"var":"txt_sm1","text":"12121212","fontSize":24,"color":"#feb645"}},{"type":"Label","props":{"y":211,"x":486,"text":"元","fontSize":24,"color":"#cac09d"}},{"type":"TextInput","props":{"y":273,"x":148,"width":362,"var":"txt_sm3","promptColor":"#525157","prompt":"填写转账人姓名，点击我已转账","height":24,"fontSize":22,"color":"#e9e9fb"}},{"type":"TextInput","props":{"y":211,"x":148,"width":333,"var":"txt_sm2","promptColor":"#525157","prompt":"请输入扫码转入金额","height":24,"fontSize":22,"color":"#e9e9fb"}},{"type":"Button","props":{"y":69,"x":446,"var":"btn_sm_copy0","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}},{"type":"Button","props":{"y":138,"x":446,"var":"btn_sm_copy1","stateNum":1,"skin":"dating_ui/chongzhi/btn_fz.png"}}]},{"type":"Box","props":{"x":540,"width":427,"height":390},"child":[{"type":"Image","props":{"width":213,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"62,123,28,31","height":390}},{"type":"Image","props":{"y":0,"x":212,"width":213,"skin":"dating_ui/chongzhi/tu_yhxx.png","sizeGrid":"62,123,28,31","scaleX":-1,"pivotX":213,"height":390}},{"type":"Label","props":{"y":12,"x":137,"text":"扫描二维码","fontSize":30,"color":"#4b2401"}},{"type":"Label","props":{"y":314,"x":121,"wordWrap":true,"width":205,"text":"点击图片保存二维码","leading":10,"height":24,"fontSize":22,"color":"#bab9e1"}},{"type":"Image","props":{"y":65,"x":101,"width":230,"var":"img_sm_ewm","height":240}}]},{"type":"Button","props":{"y":499,"x":498,"width":212,"var":"btn_back_sm","stateNum":1,"skin":"dating_ui/chongzhi/btn_shangyiye.png","sizeGrid":"12,13,15,16","height":72},"child":[{"type":"Label","props":{"y":18,"x":51,"text":"上一页","fontSize":36,"color":"#032444","bold":false}}]},{"type":"Button","props":{"y":498,"x":755,"width":212,"var":"btn_sm_finish","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","sizeGrid":"13,16,16,16","height":72},"child":[{"type":"Label","props":{"y":17,"x":33,"width":146.8125,"text":"提交充值","height":36,"fontSize":36,"color":"#4b2401"}}]},{"type":"Box","props":{"y":342,"x":0,"width":960,"var":"box_wx","height":178},"child":[{"type":"Label","props":{"y":-23,"x":11,"wordWrap":true,"width":499,"var":"txt_wxsm4","leading":10,"height":24,"fontSize":17,"color":"#bab9e1","bold":true,"align":"left"}},{"type":"Label","props":{"y":14,"x":554,"wordWrap":true,"width":400,"text":"注：收款信息仅限本次使用。","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":14,"x":12,"wordWrap":true,"width":502,"text":"注：以上微信号限本次存款使用，账户不定期更换。","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":9,"wordWrap":true,"width":511,"text":"第一步：保存付款二维码，微信扫码转账到指定微信账号","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":76,"x":9,"wordWrap":true,"width":421,"text":"第二步：填写转账信息，点击我已转账。","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":543,"wordWrap":true,"width":420,"text":"如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！","leading":5,"height":55,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":113,"x":9,"wordWrap":true,"width":421,"text":"如何查询订单号：","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":141,"x":9,"wordWrap":true,"width":511,"text":"进入微信右下角“我”,点击钱包，点击右上角“+”。\\n进入“账单”，点击对应的转账信息即可查询订单号。","leading":3,"height":45,"fontSize":17,"color":"#bab9e1"}}]},{"type":"Box","props":{"y":342,"x":0,"width":960,"var":"box_zfb","height":178},"child":[{"type":"Label","props":{"y":-23,"x":11,"wordWrap":true,"width":499,"var":"txt_zfbsm4","leading":10,"height":24,"fontSize":17,"color":"#bab9e1","align":"left"}},{"type":"Label","props":{"y":14,"x":554,"wordWrap":true,"width":400,"text":"注：收款信息仅限本次使用。","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":14,"x":12,"wordWrap":true,"width":502,"text":"注：以上支付宝账号限本次存款用，账户不定期更换！","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":9,"wordWrap":true,"width":511,"text":"第一步：保存付款二维码，支付宝扫码转账到指定支付宝账号","leading":3,"height":49,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":100,"x":9,"wordWrap":true,"width":421,"text":"第二步：填写转账信息，点击我已转账。","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":543,"wordWrap":true,"width":420,"text":"如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！","leading":5,"height":55,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":136,"x":9,"wordWrap":true,"width":421,"text":"如何查询订单号：","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":164,"x":9,"wordWrap":true,"width":511,"text":"进入支付宝右下角“我”,点击钱包，点击右上角“+”。\\n进入“账单”，点击对应的转账信息即可查询订单号。","leading":3,"height":45,"fontSize":17,"color":"#bab9e1"}}]},{"type":"Box","props":{"y":342,"x":0,"width":960,"var":"box_ysf","height":211},"child":[{"type":"Label","props":{"y":-23,"x":11,"wordWrap":true,"width":499,"var":"txt_ysfsm4","leading":10,"height":24,"fontSize":17,"color":"#bab9e1","align":"left"}},{"type":"Label","props":{"y":14,"x":554,"wordWrap":true,"width":400,"text":"注：收款信息仅限本次使用。","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":14,"x":12,"wordWrap":true,"width":502,"text":"注：以上云闪付账号限本次存款用，账户不定期更换！","leading":10,"height":24,"fontSize":17,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":9,"wordWrap":true,"width":511,"text":"第一步：保存付款二维码，云闪付扫码转账到指定云闪付账号","leading":3,"height":49,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":100,"x":9,"wordWrap":true,"width":421,"text":"第二步：填写转账信息，点击我已转账。","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":48,"x":543,"wordWrap":true,"width":420,"text":"如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！","leading":5,"height":55,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":136,"x":9,"wordWrap":true,"width":421,"text":"如何查询订单号：","leading":10,"height":20,"fontSize":20,"color":"#bab9e1"}},{"type":"Label","props":{"y":164,"x":9,"wordWrap":true,"width":511,"text":"进入云闪付右上角“个人信息”,点击我的订单。\\n点击对应的转账信息即可查询订单号。","leading":3,"height":45,"fontSize":17,"color":"#bab9e1"}}]}]}]},{"type":"Box","props":{"y":81,"x":258,"var":"box_zhuanzhang"},"child":[{"type":"Box","props":{"width":1022,"var":"box_cz","height":639},"child":[{"type":"Box","props":{"y":0,"x":-10,"width":1022,"var":"box_vip","height":639},"child":[{"type":"Image","props":{"y":21,"x":21,"skin":"dating_ui/chongzhi/tu_vipczts.png"},"child":[{"type":"Button","props":{"y":53,"x":886,"var":"btn_gotokefu","stateNum":1,"skin":"dating_ui/chongzhi/btn_tsdl.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":134,"x":68,"width":888,"var":"list_vip","spaceY":20,"spaceX":30,"repeatY":2,"repeatX":3,"height":501},"child":[{"type":"ChongZhi_Vip","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.ChongZhi_VipUI"}}]}]},{"type":"Box","props":{"y":0,"x":-11,"width":1022,"var":"box_qudao","height":639},"child":[{"type":"List","props":{"y":12,"x":50,"width":917,"var":"list_qudao","spaceX":5,"height":78},"child":[{"type":"ChongZhiQuDao","props":{"y":-1,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.ChongZhiQuDaoUI"}}]},{"type":"Image","props":{"y":88,"x":33,"skin":"dating_ui/chongzhi/tu_czd.png"}},{"type":"List","props":{"y":117,"x":107,"var":"list_money","spaceY":30,"spaceX":40,"repeatY":2,"repeatX":4},"child":[{"type":"ChongZhiJingE","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.ChongZhiJingEUI"}}]},{"type":"Image","props":{"y":328,"x":61,"width":900,"skin":"dating_ui/chongzhi/tu_yhd.png","sizeGrid":"50,100,50,100","height":171},"child":[{"type":"Image","props":{"y":42,"x":219,"width":623,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":58}},{"type":"Label","props":{"y":53,"x":50,"text":"充值金额：","fontSize":34,"color":"#cfbf9b"}},{"type":"Label","props":{"y":120,"text":"第三方存在不稳定因素，建议使用VIP或银行卡充值。","fontSize":24,"color":"#b7b9de","centerX":0}},{"type":"TextInput","props":{"y":51,"x":230,"width":565,"var":"txt_input","promptColor":"#60594e","prompt":"请输入充值金额","height":48,"fontSize":28,"color":"#e9e9fb"}}]},{"type":"Button","props":{"y":400,"x":874,"var":"btn_clear","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":517,"x":370,"width":288,"var":"btn_pay","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","sizeGrid":"10,55,20,55","height":87},"child":[{"type":"Image","props":{"y":17,"x":58,"skin":"dating_ui/chongzhi/tu_tjcz.png"}}]}]}]}]},{"type":"Box","props":{"y":81,"x":258,"width":1022,"var":"box_kj","height":639},"child":[{"type":"Button","props":{"y":536,"x":371,"width":288,"var":"btn_kj","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","sizeGrid":"10,55,20,55","height":87},"child":[{"type":"Image","props":{"y":19,"x":96,"skin":"dating_ui/chongzhi/tu_cz.png"}}]},{"type":"Box","props":{"y":3,"x":0},"child":[{"type":"Image","props":{"width":1022,"skin":"dating_ui/chongzhi/tu_chjm.png","height":524}},{"type":"Image","props":{"y":11,"x":26,"width":970,"skin":"dating_ui/chongzhi/tu_kuang.png","sizeGrid":"40,40,40,40","height":514}},{"type":"Image","props":{"y":11,"x":26,"width":970,"skin":"dating_ui/chongzhi/tu_zz1.png","renderType":"mask"}}]}]}]},{"type":"Box","props":{"width":714,"var":"box_top_left","top":0,"left":0,"height":93},"child":[{"type":"Box","props":{"y":16,"x":418,"width":350,"height":62},"child":[{"type":"Image","props":{"y":12.5,"x":28,"skin":"dating_ui/tongyong/tu_k1ss.png"}},{"type":"Image","props":{"y":25.5,"x":43,"skin":"dating_ui/tongyong/icon_money1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":19.5,"x":67,"var":"clip_money","skin":"dating_ui/tongyong/clip_money1.png","clipX":11}}]},{"type":"Image","props":{"y":0,"x":0,"width":411,"skin":"dating_ui/chongzhi/tu_fhd.png","sizeGrid":"0,200,0,0","height":116}},{"type":"Image","props":{"y":13,"x":30,"skin":"dating_ui/chongzhi/tu_czbt.png"}}]},{"type":"Box","props":{"width":468,"var":"box_top_right","top":0,"right":0,"height":93},"child":[{"type":"Box","props":{"y":39,"x":408,"width":100,"top":7,"right":10,"height":64,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":32,"x":50,"var":"btn_close","stateNum":1,"skin":"dating_ui/chongzhi/btn_fh.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":41,"x":271,"width":151,"top":15,"right":122,"height":52,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":26,"x":76,"var":"btn_record","stateNum":1,"skin":"dating_ui/chongzhi/btn_czjl.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"List","props":{"y":720,"width":256,"var":"list_tab","selectedIndex":0,"selectEnable":true,"left":0,"height":617,"bottom":0,"anchorY":1},"child":[{"type":"TabItemRender2","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.TabItemRender2UI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.YingHangKaUI",ui.ajqp.dating.component.YingHangKaUI);
			View.regComponent("ui.ajqp.dating.component.ChongZhi_VipUI",ui.ajqp.dating.component.ChongZhi_VipUI);
			View.regComponent("ui.ajqp.dating.component.ChongZhiQuDaoUI",ui.ajqp.dating.component.ChongZhiQuDaoUI);
			View.regComponent("ui.ajqp.dating.component.ChongZhiJingEUI",ui.ajqp.dating.component.ChongZhiJingEUI);
			View.regComponent("ui.ajqp.dating.component.TabItemRender2UI",ui.ajqp.dating.component.TabItemRender2UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.ChongZhiUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ChongZhi_JLUI extends View {
		public txt_no:Laya.Image;
		public list_record:Laya.List;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"y":65,"width":819,"skin":"dating_ui/chongzhi/tu_czjlbtd.png","height":47,"centerX":0},"child":[{"type":"Label","props":{"y":14,"x":42,"text":"充值金额","fontSize":22,"color":"#f2f3ff"}},{"type":"Label","props":{"y":14,"x":257,"text":"充值方式","fontSize":22,"color":"#f2f3ff"}},{"type":"Label","props":{"y":14,"x":471,"text":"充值时间","fontSize":22,"color":"#f2f3ff"}},{"type":"Label","props":{"y":14,"x":686,"text":"充值状态","fontSize":22,"color":"#f2f3ff"}}]},{"type":"Image","props":{"top":22,"skin":"dating_ui/chongzhi/tu_czjl.png","centerX":0}},{"type":"Image","props":{"y":207,"x":361,"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png","centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":123,"x":-35,"text":"暂无充值记录哟~","fontSize":25,"color":"#58586d"}}]},{"type":"List","props":{"y":112,"x":11,"width":820,"var":"list_record","repeatY":10,"height":404},"child":[{"type":"ChongZhiJL","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.ChongZhiJLUI"}}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);
			View.regComponent("ui.ajqp.dating.component.ChongZhiJLUI",ui.ajqp.dating.component.ChongZhiJLUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.ChongZhi_JLUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ChuangJianUI extends View {
		public box_main:Laya.Box;
		public zhifu:Laya.Box;
		public txt_money:Laya.Label;
		public btn_create:Laya.Box;
		public box_1:Laya.Box;
		public btn_1:Laya.Button;
		public box_2:Laya.Box;
		public btn_2:Laya.Button;
		public box_3:Laya.Box;
		public btn_3:Laya.Button;
		public box_4:Laya.Box;
		public btn_4:Laya.Button;
		public box_renshu:Laya.Box;
		public lb_renshu:laya.display.Text;
		public btn_renshu:Laya.Button;
		public box_jushu:Laya.Box;
		public lb_jushu:laya.display.Text;
		public btn_jushu:Laya.Button;
		public box_wanfa:Laya.Box;
		public lb_wanfa:laya.display.Text;
		public btn_wanfa:Laya.Button;
		public lb_info_wanfa:laya.display.Text;
		public box_shunzi:Laya.Box;
		public lb_shunzi:laya.display.Text;
		public btn_shunzi:Laya.Button;
		public box_xianchu:Laya.Box;
		public lb_xianchu:laya.display.Text;
		public btn_xianchu:Laya.Button;
		public lb_info_xianchu:laya.display.Text;
		public box_qiangguan:Laya.Box;
		public lb_qiangguan:laya.display.Text;
		public btn_qiangguan:Laya.Button;
		public tab_renshu:Laya.Tab;
		public tab_jushu:Laya.Tab;
		public tab_wanfa:Laya.Tab;
		public tab_xianchu:Laya.Tab;
		public tab_shunzi:Laya.Tab;
		public tab_qiangguan:Laya.Tab;
		public btn_tc:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-93,"x":-219,"var":"box_main"},"child":[{"type":"ZhongKuang1","props":{"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"y":262,"x":230,"width":821,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":352}},{"type":"Image","props":{"y":512,"x":229,"width":820,"skin":"dating_ui/tongyong/di.png","height":81}},{"type":"Image","props":{"y":116,"skin":"dating_ui/fk/tit_pdk.png","centerX":0}}]},{"type":"Box","props":{"y":453,"x":623,"width":204,"var":"zhifu","height":37},"child":[{"type":"Image","props":{"y":-1,"x":115,"skin":"dating_ui/fk/tu_d3.png"}},{"type":"Image","props":{"y":-2,"x":100,"skin":"dating_ui/fk/icon_money.png"}},{"type":"Label","props":{"y":4,"x":149,"width":38,"var":"txt_money","text":"99","height":27,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":4,"x":-2,"text":"房主支付","fontSize":25,"color":"#c8bc9f"}}]},{"type":"Box","props":{"y":472,"var":"btn_create","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":2,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png"}},{"type":"Image","props":{"skin":"dating_ui/fk/tu_cjfj.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":87,"x":-4,"skin":"dating_ui/fk/tu_d2.png"}},{"type":"Text","props":{"y":-15,"x":-3,"width":196,"text":"请选择房间规则","height":30,"fontSize":26,"color":"#eadcb6","bold":true}},{"type":"Box","props":{"y":244,"x":-8,"width":188,"var":"box_1","height":48},"child":[{"type":"Button","props":{"y":-2,"x":88,"var":"btn_1","skin":"dating_ui/shezhi/btn_guan.png"}},{"type":"Label","props":{"y":12,"x":8,"text":"必须管上","fontSize":20,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":244,"x":185,"width":188,"var":"box_2","height":48},"child":[{"type":"Button","props":{"y":0,"x":89,"var":"btn_2","skin":"dating_ui/shezhi/btn_guan.png"}},{"type":"Label","props":{"y":12,"x":9,"text":"报单保底  ","fontSize":20,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":244,"x":380,"width":188,"var":"box_3","height":48},"child":[{"type":"Button","props":{"y":0,"x":73,"var":"btn_3","skin":"dating_ui/shezhi/btn_guan.png"}},{"type":"Label","props":{"y":12,"x":12,"text":"四带三","fontSize":20,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":244,"x":557,"width":188,"var":"box_4","height":48},"child":[{"type":"Button","props":{"y":0,"x":94,"var":"btn_4","skin":"dating_ui/shezhi/btn_guan.png"}},{"type":"Label","props":{"y":13,"x":9,"text":"3A为炸弹","fontSize":20,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":32,"x":-9,"var":"box_renshu"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":7,"x":34,"width":41,"var":"lb_renshu","text":"3人","height":24,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_renshu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"人数","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":32,"x":423,"var":"box_jushu"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":5,"x":16,"width":65,"var":"lb_jushu","valign":"middle","text":"5局","height":27,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_jushu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"局数","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":108,"x":-9,"width":194,"var":"box_wanfa","height":33},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":7,"x":26,"width":53,"var":"lb_wanfa","text":"13张","height":27,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_wanfa","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"玩法","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}},{"type":"Text","props":{"y":8,"x":190,"width":235,"var":"lb_info_wanfa","text":"无大小王|3个2|3个A|1个K","height":21,"fontSize":18,"color":"#d9e8ff","bold":true}}]},{"type":"Box","props":{"y":163,"x":-9,"var":"box_shunzi"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":4,"x":2,"width":84,"var":"lb_shunzi","valign":"middle","text":"5张起顺","height":28,"fontSize":20,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_shunzi","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":3,"x":3,"width":61,"text":"顺子","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}}]},{"type":"Box","props":{"y":108,"x":423,"width":193,"var":"box_xianchu","height":33},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":6,"x":14,"width":74,"var":"lb_xianchu","text":"赢家","height":26,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_xianchu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"先出","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}},{"type":"Text","props":{"y":8,"x":190,"width":180,"var":"lb_info_xianchu","text":"首局 ♠3(先出可任意)","height":21,"fontSize":18,"color":"#d9e8ff","bold":true}}]},{"type":"Box","props":{"y":163,"x":423,"var":"box_qiangguan"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":6,"x":25,"width":50,"var":"lb_qiangguan","text":"赢家","height":27,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_qiangguan","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"抢关","height":30,"fontSize":26,"color":"#c8bc9f","bold":true}}]},{"type":"Image","props":{"y":222,"x":-4,"skin":"dating_ui/fk/tu_d2.png"}},{"type":"Tab","props":{"y":69,"x":55,"width":122,"var":"tab_renshu","height":79},"child":[{"type":"Button","props":{"y":58,"x":61,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item1","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":37,"valign":"middle","text":"4人","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":19,"x":61,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item0","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":37,"valign":"middle","text":"3人","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":36,"x":3,"skin":"dating_ui/fk/tu_d4.png"}}]},{"type":"Tab","props":{"y":69,"x":489,"width":122,"var":"tab_jushu","height":154},"child":[{"type":"Button","props":{"y":113,"x":1,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item3","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"20局","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":75,"x":1,"width":120,"skin":"dating_ui/fk/btn_2.png","name":"item2","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"15局","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":36,"x":1,"width":120,"skin":"dating_ui/fk/btn_2.png","name":"item1","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"10局","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":38,"x":121,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item0","height":39},"child":[{"type":"Label","props":{"width":37,"valign":"middle","text":"5局","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":112,"x":3,"skin":"dating_ui/fk/tu_d4.png"}},{"type":"Image","props":{"y":74,"x":5,"skin":"dating_ui/fk/tu_d4.png"}},{"type":"Image","props":{"y":36,"x":5,"skin":"dating_ui/fk/tu_d4.png"}}]},{"type":"Tab","props":{"y":144,"x":59,"width":120,"var":"tab_wanfa","height":156},"child":[{"type":"Button","props":{"y":115,"x":0,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item3","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"12张","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":76,"x":0,"width":120,"skin":"dating_ui/fk/btn_2.png","name":"item2","height":39},"child":[{"type":"Label","props":{"width":55,"valign":"middle","text":"13张","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":37,"x":0,"width":120,"skin":"dating_ui/fk/btn_2.png","name":"item1","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"15张","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":38,"x":120,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item0","height":39},"child":[{"type":"Label","props":{"width":51,"valign":"middle","text":"16张","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":114,"x":3,"skin":"dating_ui/fk/tu_d4.png"}},{"type":"Image","props":{"y":75,"x":4,"skin":"dating_ui/fk/tu_d4.png"}},{"type":"Image","props":{"y":37,"x":3,"skin":"dating_ui/fk/tu_d4.png"}}]},{"type":"Tab","props":{"y":144,"x":491,"width":120,"var":"tab_xianchu","height":78},"child":[{"type":"Button","props":{"y":38,"x":-2,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item0","height":39},"child":[{"type":"Label","props":{"width":61,"valign":"middle","text":"黑桃3","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":39,"x":118,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":39},"child":[{"type":"Label","props":{"width":48,"valign":"middle","text":"赢家","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":37,"x":-1,"skin":"dating_ui/fk/tu_d4.png"}}]},{"type":"Tab","props":{"y":200,"x":56,"width":123,"var":"tab_shunzi","height":81},"child":[{"type":"Button","props":{"y":39,"x":1,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item0","height":39},"child":[{"type":"Label","props":{"width":85,"valign":"middle","text":"5张起顺","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":39,"x":121,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":39},"child":[{"type":"Label","props":{"width":85,"valign":"middle","text":"6张起顺","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":38,"x":3,"skin":"dating_ui/fk/tu_d4.png"}}]},{"type":"Tab","props":{"y":199,"x":489,"width":122,"var":"tab_qiangguan","height":79},"child":[{"type":"Button","props":{"y":39,"x":1,"width":120,"skin":"dating_ui/fk/btn_1.png","name":"item0","height":39},"child":[{"type":"Label","props":{"width":48,"valign":"middle","text":"抢关","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":39,"x":121,"width":120,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":39},"child":[{"type":"Label","props":{"width":48,"valign":"middle","text":"不抢","rotation":180,"height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":37,"x":4,"skin":"dating_ui/fk/tu_d4.png"}}]}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_tc","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.ChuangJianUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class BaoBiaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_type:Laya.Label;
		public txt_time:Laya.Label;
		public txt_money:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_index:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1140,"height":42},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1142,"height":42},"child":[{"type":"Image","props":{"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,200,0,200","right":0,"left":0,"height":42,"alpha":0.2}},{"type":"Label","props":{"y":10,"x":139,"width":271,"var":"txt_type","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":427,"width":263,"var":"txt_time","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":710,"width":232,"var":"txt_money","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":956,"width":154,"var":"txt_earn","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":27,"width":94,"var":"txt_index","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.BaoBiaoTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhiJingEUI extends View {
		public txt_num:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":169,"height":81},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":169,"skin":"dating_ui/chongzhi/btn_czje.png","name":"selectBox","index":1,"height":81,"clipY":3}},{"type":"Text","props":{"y":18,"x":5,"width":161,"var":"txt_num","valign":"middle","text":"999","height":40,"fontSize":40,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhiJingEUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhiJLUI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_type:Laya.Label;
		public txt_time:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":818,"height":42},"child":[{"type":"Image","props":{"y":0,"x":0,"width":818,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","height":42}},{"type":"Label","props":{"y":5,"x":36,"width":99,"var":"txt_money","valign":"middle","text":"100","height":31,"fontSize":22,"color":"#fffad7","align":"center"}},{"type":"Label","props":{"y":5,"x":249,"width":99,"var":"txt_type","valign":"middle","text":"支付宝","height":31,"fontSize":22,"color":"#fffad7","align":"center"}},{"type":"Label","props":{"y":5,"x":407,"width":218,"var":"txt_time","valign":"middle","text":"2020-12-12 22:22:55","height":31,"fontSize":22,"color":"#fffad7","align":"center"}},{"type":"Label","props":{"y":5,"x":673,"width":119,"var":"txt_zt","valign":"middle","text":"处理中","height":31,"fontSize":22,"color":"#fffad7","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhiJLUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhiQuDaoUI extends View {
		public txt_name:Laya.Label;
		public txt_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":80},"child":[{"type":"Clip","props":{"width":200,"skin":"dating_ui/chongzhi/btn_yhkxz.png","sizeGrid":"0,19,0,24","name":"selectBox","index":1,"height":80,"clipY":3},"child":[{"type":"Label","props":{"y":21,"x":22,"width":156,"var":"txt_name","text":"支付宝","height":30,"fontSize":30,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Label","props":{"y":52,"x":16,"width":168,"var":"txt_money","text":"10~10000","height":24,"fontSize":24,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhiQuDaoUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhiTUI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":630,"height":39},"child":[{"type":"Box","props":{"y":0,"x":0,"width":634,"height":39},"child":[{"type":"Image","props":{"y":0,"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,7,0,6","right":0,"left":0,"height":42,"alpha":0.2}},{"type":"Label","props":{"y":9,"x":14,"wordWrap":true,"width":105,"var":"txt_money","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"x":263,"wordWrap":true,"width":239,"var":"txt_time","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"x":134,"wordWrap":true,"width":113,"var":"txt_type","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"x":516,"wordWrap":true,"width":99,"var":"txt_zt","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhiTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhiT1UI extends View {
		public txt_money:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":847,"height":46},"child":[{"type":"Box","props":{"y":0,"x":0,"width":847,"height":46},"child":[{"type":"Label","props":{"y":4,"x":39,"width":105,"var":"txt_money","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":4,"x":394,"width":247,"var":"txt_time","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":4,"x":209,"width":130,"var":"txt_type","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":4,"x":689,"width":120,"var":"txt_zt","height":30,"fontSize":26,"color":"#1f7d39","align":"center"}}]},{"type":"Image","props":{"y":42,"x":0,"width":847,"skin":"dating_ui/chongzhi/tu_fg.png","height":4}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhiT1UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhi_dsfUI extends View {
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":264,"height":98},"child":[{"type":"Clip","props":{"y":48,"x":132,"width":203,"skin":"dating_ui/chongzhi/btn_kuang.png","sizeGrid":"27,29,11,33","scaleY":1.3,"scaleX":1.3,"name":"selectBox","index":1,"height":74,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":15,"width":232,"var":"txt_name","valign":"middle","text":"支付宝AYF支付宝支付宝","overflow":"hidden","height":34,"fontSize":30,"color":"#a54e00","bold":true,"align":"center"}},{"type":"Text","props":{"y":46,"x":24,"width":216,"var":"txt_money","valign":"middle","text":"单笔10~1500","height":25,"fontSize":23,"color":"#a54e00","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhi_dsfUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhi_skUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":264,"height":98},"child":[{"type":"Clip","props":{"y":48,"x":132,"skin":"dating_ui/chongzhi/btn_kuang.png","scaleY":1.3,"scaleX":1.3,"name":"selectBox","index":1,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":28,"x":28,"width":205,"var":"txt_name","valign":"middle","text":"支付宝AYF","overflow":"hidden","height":36,"fontSize":35,"color":"#a54e00","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhi_skUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhi_TUI extends View {
		public txt_name:Laya.Label;
		public txt_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":283,"height":25},"child":[{"type":"Label","props":{"y":0,"x":0,"width":128,"var":"txt_name","text":"那边那个用户","height":25,"fontSize":20,"font":"黑体","color":"#efda8b"}},{"type":"Label","props":{"y":0,"x":135,"width":66,"text":"充值了","height":25,"fontSize":20,"font":"黑体","color":"#c8bc9f"}},{"type":"Label","props":{"y":0,"x":197,"width":86,"var":"txt_money","text":" 10000元","height":25,"fontSize":20,"font":"黑体","color":"#00ff47"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhi_TUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ChongZhi_VipUI extends View {
		public btn_go:Laya.Button;
		public txt_name:Laya.Label;
		public txt_title:Laya.Label;
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":276,"height":228},"child":[{"type":"Image","props":{"y":0,"x":0,"width":276,"skin":"dating_ui/chongzhi/tu_vipk.png","height":228},"child":[{"type":"Button","props":{"y":155,"x":60,"width":156,"var":"btn_go","stateNum":1,"skin":"dating_ui/chongzhi/btn_qwcz.png","sizeGrid":"0,0,0,0","height":60},"child":[{"type":"Label","props":{"y":18,"x":33,"text":"前往充值","fontSize":22,"color":"#4b2401"}}]},{"type":"Image","props":{"y":102,"x":16,"width":243,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20"},"child":[{"type":"Label","props":{"y":1,"x":3,"width":238,"var":"txt_name","valign":"middle","text":"WEll321654","height":40,"fontSize":22,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Label","props":{"y":18,"x":100,"var":"txt_title","text":"好运来速充","fontSize":20,"color":"#cfbf9b","bold":true}},{"type":"Label","props":{"y":45,"x":100,"wordWrap":true,"width":166,"text":"支持微信，支付宝，银行卡，微信号","height":43,"fontSize":20,"color":"#cfbf9b","bold":true}},{"type":"Image","props":{"y":54,"x":60,"var":"img_icon","skin":"dating_ui/chongzhi/CX.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ChongZhi_VipUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class DaKuangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1088,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1088,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":600},"child":[{"type":"Image","props":{"x":161,"skin":"dating_ui/tongyong/di.png","bottom":60}},{"type":"Image","props":{"y":70,"x":12,"width":205,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,20,0","height":518}},{"type":"Image","props":{"x":8,"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","height":67}},{"type":"Image","props":{"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":67,"centerX":269}}]},{"type":"Image","props":{"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.DaKuangUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class DaKuang_0UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":10,"x":10,"width":1088,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1088,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":600},"child":[{"type":"Image","props":{"y":70,"x":12,"width":205,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,20,0","height":518}},{"type":"Image","props":{"x":8,"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","height":67}},{"type":"Image","props":{"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":67,"centerX":269}}]},{"type":"Image","props":{"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.DaKuang_0UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class DaKuang_1UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":10,"x":10,"width":1088,"height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1088,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":600},"child":[{"type":"Image","props":{"x":8,"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","height":67}},{"type":"Image","props":{"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":67,"centerX":269}}]},{"type":"Image","props":{"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.DaKuang_1UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_brUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public bairen:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"height":116},"child":[{"type":"Box","props":{"width":226,"var":"bairen","height":116},"child":[{"type":"Clip","props":{"y":0,"x":0,"var":"clip","skin":"dating_ui/dating/effect/anniu/btn_br.png","index":1,"clipY":3}},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":70,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_br.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":35,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":67}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":71,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_br.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":203,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":68}]},{"type":"Box","props":{"width":226,"height":116,"centerY":0,"centerX":0,"blendMode":"lighter","alpha":0},"compId":55,"child":[{"type":"Image","props":{"y":58,"x":113,"skin":"dating_ui/dating/effect/anniu/tu_guang.png","scaleY":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/effect/anniu/btn_br.png","renderType":"mask","clipY":3}}]},{"type":"Image","props":{"y":18,"x":117,"skin":"dating_ui/dating/effect/anniu/10013.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":66},{"type":"Image","props":{"y":51,"x":114,"var":"img1","skin":"dating_ui/dating/effect/anniu/tu_g.png","rotation":-4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.5227272727272727},"compId":124},{"type":"Image","props":{"y":46,"x":118,"var":"img2","skin":"dating_ui/dating/effect/anniu/ct10022.png","rotation":-4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":125}]}]}],"animations":[{"nodes":[{"target":55,"keyframes":{"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":55,"key":"blendMode","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":14}]}},{"target":67,"keyframes":{"x":[{"value":113,"tweenMethod":"linearNone","tween":true,"target":67,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":67,"key":"x","index":10}],"scaleX":[{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":10}]}},{"target":70,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":16}]}},{"target":68,"keyframes":{"x":[{"value":113,"tweenMethod":"linearNone","tween":true,"target":68,"key":"x","index":0},{"value":203,"tweenMethod":"linearNone","tween":true,"target":68,"key":"x","index":10}]}},{"target":71,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":71,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":71,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":71,"key":"alpha","index":16}]}},{"target":66,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":66,"label":null,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":66,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":66,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":66,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":66,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":66,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":66,"key":"alpha","index":33}]}}],"name":"ani1","id":1,"frameRate":40,"action":0},{"nodes":[{"target":125,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":2},{"value":"dating_ui/dating/effect/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":4},{"value":"dating_ui/dating/effect/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":32},{"value":"dating_ui/dating/effect/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":34},{"value":"dating_ui/dating/effect/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":36},{"value":"dating_ui/dating/effect/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":38},{"value":"dating_ui/dating/effect/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":40},{"value":"dating_ui/dating/effect/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":42},{"value":"dating_ui/dating/effect/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":44},{"value":"dating_ui/dating/effect/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":125,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":125,"key":"alpha","index":0}]}},{"target":124,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":124,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":124,"key":"alpha","index":24},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":124,"key":"alpha","index":46}]}}],"name":"ani2","id":5,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_brUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_dengdaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":66,"height":35},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/effect/dd/tu_dengdai.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":16,"x":33,"width":15,"skin":"dating_ui/dating/effect/dd/tu_zheng.png","pivotY":10,"pivotX":5,"height":15},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_dengdaiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_dwUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public dianwan:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"var":"dianwan","height":116},"child":[{"type":"Clip","props":{"var":"clip","skin":"dating_ui/dating/effect/anniu/btn_dw.png","index":1,"clipY":3}},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":114,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_dw.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":35,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":119}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":115,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_dw.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":203,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":121}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":116,"child":[{"type":"Image","props":{"y":58,"x":113,"skin":"dating_ui/dating/effect/anniu/tu_guang.png","scaleY":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/effect/anniu/btn_dw.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Image","props":{"y":15,"x":113,"skin":"dating_ui/dating/effect/anniu/10013.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":117},{"type":"Image","props":{"y":57,"x":110,"var":"img1","skin":"dating_ui/dating/effect/anniu/tu_g.png","rotation":-9,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":132},{"type":"Image","props":{"y":47,"x":114,"var":"img2","skin":"dating_ui/dating/effect/anniu/ct10000.png","rotation":-5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":133}]}]}],"animations":[{"nodes":[{"target":119,"keyframes":{"x":[{"value":119,"tweenMethod":"linearNone","tween":true,"target":119,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"x","index":10}],"scaleX":[{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":119,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"scaleX","index":10}]}},{"target":114,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":16}]}},{"target":121,"keyframes":{"x":[{"value":127,"tweenMethod":"linearNone","tween":true,"target":121,"key":"x","index":0},{"value":203,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"x","index":10}],"scaleX":[{"value":-0.4,"tweenMethod":"linearNone","tween":true,"target":121,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"scaleX","index":10}]}},{"target":115,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":16}]}},{"target":116,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":14}]}},{"target":117,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"label":null,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":117,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":33}]}}],"name":"ani1","id":4,"frameRate":40,"action":0},{"nodes":[{"target":133,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":2},{"value":"dating_ui/dating/effect/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":4},{"value":"dating_ui/dating/effect/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":32},{"value":"dating_ui/dating/effect/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":34},{"value":"dating_ui/dating/effect/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":36},{"value":"dating_ui/dating/effect/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":38},{"value":"dating_ui/dating/effect/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":40},{"value":"dating_ui/dating/effect/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":42},{"value":"dating_ui/dating/effect/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":44},{"value":"dating_ui/dating/effect/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":133,"key":"alpha","index":0}]}},{"target":132,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":46}]}}],"name":"ani2","id":9,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_dwUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_fkUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public fangka:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"var":"fangka","height":116},"child":[{"type":"Clip","props":{"var":"clip","skin":"dating_ui/dating/effect/anniu/btn_fk.png","index":1,"clipY":3}},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":104,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_fk.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":35,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":109}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":105,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_fk.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":203,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":111}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":106,"child":[{"type":"Image","props":{"y":58,"x":113,"skin":"dating_ui/dating/effect/anniu/tu_guang.png","scaleY":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/effect/anniu/btn_fk.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Image","props":{"y":25,"x":112,"skin":"dating_ui/dating/effect/anniu/10008.png","rotation":-3,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":107},{"type":"Image","props":{"y":67,"x":108,"var":"img1","skin":"dating_ui/dating/effect/anniu/tu_g.png","rotation":-12,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":130},{"type":"Image","props":{"y":53,"x":113,"var":"img2","skin":"dating_ui/dating/effect/anniu/ct10023.png","rotation":-8,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":131}]}]}],"animations":[{"nodes":[{"target":106,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":106,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":106,"key":"alpha","index":14}]}},{"target":111,"keyframes":{"x":[{"value":111,"tweenMethod":"linearNone","tween":true,"target":111,"key":"x","index":0},{"value":203,"tweenMethod":"linearNone","tween":true,"target":111,"label":null,"key":"x","index":10}],"scaleX":[{"value":-0.4,"tweenMethod":"linearNone","tween":true,"target":111,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":111,"label":null,"key":"scaleX","index":10}]}},{"target":105,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":16}]}},{"target":109,"keyframes":{"x":[{"value":124,"tweenMethod":"linearNone","tween":true,"target":109,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":109,"label":null,"key":"x","index":10}],"scaleX":[{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":109,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":109,"label":null,"key":"scaleX","index":10}]}},{"target":104,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":16}]}},{"target":107,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":107,"label":null,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":107,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":107,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":107,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":107,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":107,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":107,"key":"alpha","index":33}]}}],"name":"ani1","id":3,"frameRate":40,"action":0},{"nodes":[{"target":131,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":2},{"value":"dating_ui/dating/effect/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":4},{"value":"dating_ui/dating/effect/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":32},{"value":"dating_ui/dating/effect/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":34},{"value":"dating_ui/dating/effect/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":36},{"value":"dating_ui/dating/effect/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":38},{"value":"dating_ui/dating/effect/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":40},{"value":"dating_ui/dating/effect/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":42},{"value":"dating_ui/dating/effect/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":44},{"value":"dating_ui/dating/effect/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":131,"key":"alpha","index":0}]}},{"target":130,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":130,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":130,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":130,"key":"alpha","index":46}]}}],"name":"ani2","id":8,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_fkUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_gxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":80},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/effect/update/10000.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/update/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/dating/effect/update/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dating_ui/dating/effect/update/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dating_ui/dating/effect/update/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"dating_ui/dating/effect/update/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"dating_ui/dating/effect/update/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"dating_ui/dating/effect/update/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"dating_ui/dating/effect/update/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"dating_ui/dating/effect/update/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"dating_ui/dating/effect/update/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"dating_ui/dating/effect/update/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":30},{"value":"dating_ui/dating/effect/update/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":33}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_gxUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_huoreUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":64,"height":56},"child":[{"type":"Image","props":{"y":28,"x":32,"skin":"dating_ui/dating/effect/huore/tu_di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":42,"skin":"dating_ui/dating/effect/huore/10000.png","anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":33,"x":31,"skin":"dating_ui/dating/effect/huore/tu_hr.png","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":5,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/huore/10000.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":0},{"value":"dating_ui/dating/effect/huore/10001.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":3},{"value":"dating_ui/dating/effect/huore/10002.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":6},{"value":"dating_ui/dating/effect/huore/10003.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":9},{"value":"dating_ui/dating/effect/huore/10004.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":12},{"value":"dating_ui/dating/effect/huore/10005.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":15},{"value":"dating_ui/dating/effect/huore/10006.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":18},{"value":"dating_ui/dating/effect/huore/10007.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":21}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_huoreUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_jinbiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"y":60,"x":60,"skin":"dating_ui/hongbao/1.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/hongbao/1.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/hongbao/2.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"dating_ui/hongbao/3.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"dating_ui/hongbao/4.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dating_ui/hongbao/5.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"dating_ui/hongbao/6.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_jinbiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_newUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":54,"height":49},"child":[{"type":"Image","props":{"y":25,"x":28,"skin":"dating_ui/dating/effect/new/tu_di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"dating_ui/dating/effect/new/new10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":21,"skin":"dating_ui/dating/effect/new/10000.png","centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":3,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/new/new10000.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"dating_ui/dating/effect/new/new10001.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":3},{"value":"dating_ui/dating/effect/new/new10002.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":6},{"value":"dating_ui/dating/effect/new/new10003.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":9},{"value":"dating_ui/dating/effect/new/new10004.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":12},{"value":"dating_ui/dating/effect/new/new10005.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":15},{"value":"dating_ui/dating/effect/new/new10006.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":18},{"value":"dating_ui/dating/effect/new/new10007.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":21},{"value":"dating_ui/dating/effect/new/new10000.png","tweenMethod":"linearNone","tween":false,"target":3,"label":null,"key":"skin","index":24}]}},{"target":4,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/new/10000.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"dating_ui/dating/effect/new/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":3},{"value":"dating_ui/dating/effect/new/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"dating_ui/dating/effect/new/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"dating_ui/dating/effect/new/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"dating_ui/dating/effect/new/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"dating_ui/dating/effect/new/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"dating_ui/dating/effect/new/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"dating_ui/dating/effect/new/10000.png","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"skin","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_newUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_qdUI extends View {
		public ani1:Laya.FrameAnimation;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":138,"height":80},"child":[{"type":"Image","props":{"y":37,"x":71,"var":"img","skin":"dating_ui/qiandao/tu_lq.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":7}],"scaleX":[{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":7}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":3}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_qdUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_qdgxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":251,"height":319},"child":[{"type":"Box","props":{"y":0,"x":0,"width":251,"height":319},"child":[{"type":"Image","props":{"y":-15,"x":-38,"skin":"dating_ui/qiandao/g10000.png","scaleY":1.1,"scaleX":1.1,"blendMode":"lighter"},"compId":3},{"type":"Image","props":{"y":28,"x":-1,"skin":"dating_ui/qiandao/xx10000.png","scaleY":1.2,"scaleX":1.2},"compId":4}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"skin":[{"value":"dating_ui/qiandao/g10000.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"dating_ui/qiandao/g10001.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":2},{"value":"dating_ui/qiandao/g10002.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":4},{"value":"dating_ui/qiandao/g10003.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":6},{"value":"dating_ui/qiandao/g10004.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":8},{"value":"dating_ui/qiandao/g10005.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":10},{"value":"dating_ui/qiandao/g10006.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":12},{"value":"dating_ui/qiandao/g10007.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":14},{"value":"dating_ui/qiandao/g10008.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":16},{"value":"dating_ui/qiandao/g10009.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":18},{"value":"dating_ui/qiandao/g10010.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":20},{"value":"dating_ui/qiandao/g10011.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":22},{"value":"dating_ui/qiandao/g10012.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":24},{"value":"dating_ui/qiandao/g10013.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":26}]}},{"target":4,"keyframes":{"skin":[{"value":"dating_ui/qiandao/xx10000.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"dating_ui/qiandao/xx10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":2},{"value":"dating_ui/qiandao/xx10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":4},{"value":"dating_ui/qiandao/xx10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"dating_ui/qiandao/xx10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"dating_ui/qiandao/xx10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"dating_ui/qiandao/xx10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"dating_ui/qiandao/xx10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"dating_ui/qiandao/xx10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"dating_ui/qiandao/xx10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"dating_ui/qiandao/xx10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"dating_ui/qiandao/xx10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"dating_ui/qiandao/xx10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"dating_ui/qiandao/xx10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":26}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_qdgxUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_qpUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public qipai:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"var":"qipai","height":116},"child":[{"type":"Clip","props":{"var":"clip","skin":"dating_ui/dating/effect/anniu/btn_qp.png","index":1,"clipY":3}},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":96,"child":[{"type":"Image","props":{"y":58,"x":113,"skin":"dating_ui/dating/effect/anniu/tu_guang.png","scaleY":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/effect/anniu/btn_qp.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":94,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_qp.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":35,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":98}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":95,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_qp.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":203,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":100}]},{"type":"Image","props":{"y":14,"x":117,"skin":"dating_ui/dating/effect/anniu/10013.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":103},{"type":"Image","props":{"y":55,"x":116,"var":"img1","skin":"dating_ui/dating/effect/anniu/tu_g.png","rotation":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.5434782608695652},"compId":126},{"type":"Image","props":{"y":47,"x":117,"var":"img2","skin":"dating_ui/dating/effect/anniu/ct10022.png","rotation":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":127}]}]}],"animations":[{"nodes":[{"target":96,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":14}]}},{"target":98,"keyframes":{"x":[{"value":129,"tweenMethod":"linearNone","tween":true,"target":98,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":98,"label":null,"key":"x","index":10}],"scaleX":[{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":98,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":98,"label":null,"key":"scaleX","index":10}]}},{"target":94,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":94,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":94,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":94,"key":"alpha","index":16}]}},{"target":100,"keyframes":{"x":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":100,"key":"x","index":0},{"value":203,"tweenMethod":"linearNone","tween":true,"target":100,"label":null,"key":"x","index":10}],"scaleX":[{"value":-0.4,"tweenMethod":"linearNone","tween":true,"target":100,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":100,"label":null,"key":"scaleX","index":10}]}},{"target":95,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":95,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":95,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":95,"key":"alpha","index":16}]}},{"target":103,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":103,"label":null,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":103,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":103,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":103,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":103,"key":"alpha","index":33}]}}],"name":"ani1","id":1,"frameRate":40,"action":0},{"nodes":[{"target":127,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":2},{"value":"dating_ui/dating/effect/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":4},{"value":"dating_ui/dating/effect/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":32},{"value":"dating_ui/dating/effect/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":34},{"value":"dating_ui/dating/effect/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":36},{"value":"dating_ui/dating/effect/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":38},{"value":"dating_ui/dating/effect/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":40},{"value":"dating_ui/dating/effect/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":42},{"value":"dating_ui/dating/effect/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":44},{"value":"dating_ui/dating/effect/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":127,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":127,"key":"alpha","index":0}]}},{"target":126,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":126,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":126,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":126,"key":"alpha","index":46}]}}],"name":"ani2","id":6,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_qpUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_rmUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public remen:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"height":116},"child":[{"type":"Box","props":{"y":0,"x":0,"width":226,"var":"remen","height":116},"child":[{"type":"Clip","props":{"var":"clip","skin":"dating_ui/dating/effect/anniu/btn_rm.png","index":2,"clipY":3}},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":83,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_rm.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":35,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":87}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":84,"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/dating/effect/anniu/btn_rm.png","index":2,"clipY":3}},{"type":"Image","props":{"y":58,"x":203,"skin":"dating_ui/dating/effect/anniu/tu_sg.png","scaleY":2,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":89}]},{"type":"Box","props":{"width":226,"height":116,"blendMode":"lighter","alpha":0},"compId":85,"child":[{"type":"Image","props":{"y":58,"x":113,"skin":"dating_ui/dating/effect/anniu/tu_guang.png","scaleY":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/effect/anniu/btn_rm.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Image","props":{"y":23,"x":113,"skin":"dating_ui/dating/effect/anniu/10013.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":93},{"type":"Image","props":{"y":62,"x":117,"var":"img1","skin":"dating_ui/dating/effect/anniu/tu_g.png","rotation":4.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":128},{"type":"Image","props":{"y":53,"x":114,"var":"img2","skin":"dating_ui/dating/effect/anniu/ct10000.png","rotation":2,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":129}]}]}],"animations":[{"nodes":[{"target":87,"keyframes":{"x":[{"value":125,"tweenMethod":"linearNone","tween":true,"target":87,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":87,"label":null,"key":"x","index":10}],"scaleX":[{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":87,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":87,"label":null,"key":"scaleX","index":10}]}},{"target":83,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":14}]}},{"target":89,"keyframes":{"x":[{"value":125,"tweenMethod":"linearNone","tween":true,"target":89,"key":"x","index":0},{"value":203,"tweenMethod":"linearNone","tween":true,"target":89,"label":null,"key":"x","index":10}],"scaleX":[{"value":-0.4,"tweenMethod":"linearNone","tween":true,"target":89,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":89,"label":null,"key":"scaleX","index":10}]}},{"target":84,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":14}]}},{"target":85,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":85,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":85,"key":"alpha","index":14}]}},{"target":93,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":93,"label":null,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":93,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":93,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":93,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":93,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":93,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":93,"key":"alpha","index":33}]}}],"name":"ani1","id":2,"frameRate":40,"action":0},{"nodes":[{"target":129,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":0},{"value":"dating_ui/dating/effect/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":2},{"value":"dating_ui/dating/effect/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":4},{"value":"dating_ui/dating/effect/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":6},{"value":"dating_ui/dating/effect/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":8},{"value":"dating_ui/dating/effect/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":10},{"value":"dating_ui/dating/effect/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":12},{"value":"dating_ui/dating/effect/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":14},{"value":"dating_ui/dating/effect/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":16},{"value":"dating_ui/dating/effect/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":18},{"value":"dating_ui/dating/effect/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":20},{"value":"dating_ui/dating/effect/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":22},{"value":"dating_ui/dating/effect/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":24},{"value":"dating_ui/dating/effect/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":26},{"value":"dating_ui/dating/effect/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":28},{"value":"dating_ui/dating/effect/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":30},{"value":"dating_ui/dating/effect/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":32},{"value":"dating_ui/dating/effect/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":34},{"value":"dating_ui/dating/effect/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":36},{"value":"dating_ui/dating/effect/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":38},{"value":"dating_ui/dating/effect/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":40},{"value":"dating_ui/dating/effect/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":42},{"value":"dating_ui/dating/effect/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":44},{"value":"dating_ui/dating/effect/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":129,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":129,"key":"alpha","index":0}]}},{"target":128,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":128,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":128,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":128,"key":"alpha","index":46}]}}],"name":"ani2","id":7,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_rmUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_shuiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"y":60,"x":60,"skin":"dating_ui/dating/effect/gxz/10000.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/gxz/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/dating/effect/gxz/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dating_ui/dating/effect/gxz/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dating_ui/dating/effect/gxz/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"dating_ui/dating/effect/gxz/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"dating_ui/dating/effect/gxz/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"dating_ui/dating/effect/gxz/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"dating_ui/dating/effect/gxz/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"dating_ui/dating/effect/gxz/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"dating_ui/dating/effect/gxz/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"dating_ui/dating/effect/gxz/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":30},{"value":"dating_ui/dating/effect/gxz/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":33}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_shuiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Effect_tjUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":62,"height":49},"child":[{"type":"Image","props":{"y":25,"x":31,"skin":"dating_ui/dating/effect/tj/tu_di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":31,"skin":"dating_ui/dating/effect/tj/tu_tj.png","anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":23,"x":31,"skin":"dating_ui/dating/effect/tj/10000.png","anchorY":0.5,"anchorX":0.5},"compId":5}],"animations":[{"nodes":[{"target":5,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/tj/10000.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":0},{"value":"dating_ui/dating/effect/tj/10001.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":3},{"value":"dating_ui/dating/effect/tj/10002.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":6},{"value":"dating_ui/dating/effect/tj/10003.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":9},{"value":"dating_ui/dating/effect/tj/10004.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":12},{"value":"dating_ui/dating/effect/tj/10005.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":15},{"value":"dating_ui/dating/effect/tj/10006.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":18},{"value":"dating_ui/dating/effect/tj/10007.png","tweenMethod":"linearNone","tween":false,"target":5,"key":"skin","index":21}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":21}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":21}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Effect_tjUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class FanYongTUI extends View {
		public img_bg:Laya.Image;
		public txt_time:Laya.Label;
		public txt_money:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":760,"height":39},"child":[{"type":"Box","props":{"y":0,"x":0,"width":760,"height":39},"child":[{"type":"Image","props":{"y":0,"width":738,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,7,0,6","left":0,"height":39}},{"type":"Label","props":{"y":9,"x":19,"wordWrap":true,"width":190,"var":"txt_time","valign":"middle","text":"2019-8-30 00:46:42","height":20,"fontSize":20,"color":"#cfbf9b","align":"center"}},{"type":"Label","props":{"y":9,"x":273,"wordWrap":true,"width":195,"var":"txt_money","valign":"middle","text":"551.16","height":20,"fontSize":20,"color":"#cfbf9b","align":"center"}},{"type":"Label","props":{"y":9,"x":542,"wordWrap":true,"width":178,"var":"txt_zt","valign":"middle","text":"成功","height":20,"fontSize":20,"color":"#41fe69","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.FanYongTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class FenXiangT5UI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_type:Laya.Label;
		public txt_from_nickname:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":1,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,5,0,4","left":1,"height":40}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_money","valign":"middle","left":18,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":226,"width":198,"var":"txt_type","valign":"middle","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"x":433,"width":198,"var":"txt_from_nickname","valign":"middle","height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_time","valign":"middle","right":21,"height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.FenXiangT5UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class FenXiangT6UI extends View {
		public img_bg:Laya.Image;
		public txt_nickname:Laya.Label;
		public txt_bet:Laya.Label;
		public txt_selffy:Laya.Label;
		public txt_allfy:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"width":860,"height":40},"child":[{"type":"Image","props":{"y":1,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,5,0,4","left":1,"height":40}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_nickname","valign":"middle","left":18,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":226,"width":198,"var":"txt_bet","valign":"middle","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_selffy","valign":"middle","right":21,"height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":8,"x":433,"width":198,"var":"txt_allfy","valign":"middle","height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.FenXiangT6UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen1_ApiUI extends View {
		public list_bb:Laya.List;
		public txt_no:Laya.Image;
		public box_btn:Laya.Box;
		public btn_0:Laya.Box;
		public btn_select0:Laya.Button;
		public btn_day0:Laya.Button;
		public lb_0:Laya.Label;
		public btn_1:Laya.Box;
		public btn_select1:Laya.Button;
		public btn_day1:Laya.Button;
		public lb_1:Laya.Label;
		public btn_2:Laya.Box;
		public btn_select2:Laya.Button;
		public btn_day2:Laya.Button;
		public lb_2:Laya.Label;
		public btn_3:Laya.Box;
		public btn_select3:Laya.Button;
		public btn_day3:Laya.Button;
		public lb_3:Laya.Label;
		public btn_4:Laya.Box;
		public btn_select4:Laya.Button;
		public btn_day4:Laya.Button;
		public lb_4:Laya.Label;
		public btn_5:Laya.Box;
		public btn_select5:Laya.Button;
		public btn_day5:Laya.Button;
		public lb_5:Laya.Label;
		public btn_6:Laya.Box;
		public btn_select6:Laya.Button;
		public btn_day6:Laya.Button;
		public lb_6:Laya.Label;
		public btn_select:Laya.Box;
		public img_select:Laya.Image;
		public lb_time:Laya.Label;
		public btn_jiantou:Laya.Button;
		public list_title:Laya.List;
		public box_pt:Laya.Box;
		public img_bg:Laya.Image;
		public list_pt:Laya.List;
		public box_select:Laya.Box;
		public lb_pt:Laya.Label;
		public btn_jt:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":648,"height":451},"child":[{"type":"Box","props":{"width":648,"height":451,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":56,"x":0,"width":648,"skin":"dating_ui/tongyong/di/tu_di1.png","sizeGrid":"0,10,0,10","height":47}},{"type":"Image","props":{"y":409,"x":0,"width":648,"skin":"dating_ui/tongyong/di/tu_liebiao1.png","sizeGrid":"0,25,0,0","height":45,"bottom":0}},{"type":"Label","props":{"y":83,"x":63,"width":88,"valign":"middle","text":"派彩时间","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":83,"x":258,"width":128,"valign":"middle","text":"游戏—注单号","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":83,"x":455,"width":90,"valign":"middle","text":"投注金额","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":82.5,"x":586,"width":92,"valign":"middle","text":"已派奖","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":102,"x":1,"width":648,"var":"list_bb","spaceY":1,"repeatX":1,"height":304},"child":[{"type":"GeRen_TouZhuJL","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.GeRen_TouZhuJLUI"}}]},{"type":"Image","props":{"y":151,"x":264,"width":120,"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png","height":120},"child":[{"type":"Label","props":{"y":123,"x":10,"width":100,"text":"暂无数据","height":25,"fontSize":25,"color":"#58586d"}}]},{"type":"Box","props":{"y":277,"x":526,"width":200,"var":"box_btn","height":271,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"15,15,15,15","height":280}},{"type":"Box","props":{"y":0,"x":0,"width":200,"var":"btn_0","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day0","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_0","text":"2018-09-15","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":37,"x":14,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":39,"x":0,"width":200,"var":"btn_1","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day1","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_1","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":77,"x":0,"width":200,"var":"btn_2","height":40},"child":[{"type":"Button","props":{"y":7,"x":166,"width":27,"var":"btn_select2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day2","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_2","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":116,"x":0,"width":200,"var":"btn_3","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day3","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_3","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":154,"x":0,"width":200,"var":"btn_4","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day4","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_4","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":193,"x":0,"width":200,"var":"btn_5","height":40},"child":[{"type":"Button","props":{"y":9,"x":166,"width":27,"var":"btn_select5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day5","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_5","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":231,"x":0,"width":200,"var":"btn_6","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day6","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":11,"x":44,"width":119,"var":"lb_6","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]}]},{"type":"Box","props":{"y":413,"x":412,"width":226,"var":"btn_select","height":38},"child":[{"type":"Image","props":{"y":0,"x":0,"width":225,"var":"img_select","skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Button","props":{"y":19,"x":26,"width":40,"stateNum":1,"skin":"dating_ui/tongyong/btn_sj2.png","height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_time","text":"2018-09-15","fontSize":22,"color":"#bfbfbf","centerY":0,"centerX":0}},{"type":"Button","props":{"y":19,"x":199,"width":27,"var":"btn_jiantou","stateNum":1,"skin":"dating_ui/tongyong/btn_jt.png","rotation":0,"height":14,"anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":3,"x":1,"width":648,"var":"list_title","spaceX":5,"selectEnable":true,"repeatY":1,"height":58},"child":[{"type":"GeRen_TouZhu","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.GeRen_TouZhuUI"}}]},{"type":"Box","props":{"y":277,"x":103,"width":200,"var":"box_pt","height":271,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":5,"width":186,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"15,15,15,15","height":280}},{"type":"List","props":{"y":3,"x":19,"width":155,"var":"list_pt"},"child":[{"type":"TZPTRender","props":{"y":0,"x":-10,"renderType":"render","runtime":"ui.ajqp.dating.component.TZPTRenderUI"}}]}]},{"type":"Box","props":{"y":413,"x":12,"width":226,"var":"box_select","height":38},"child":[{"type":"Image","props":{"y":0,"x":0,"width":179,"skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Label","props":{"var":"lb_pt","text":"AE棋牌","fontSize":22,"color":"#bfbfbf","centerY":0,"centerX":-31}},{"type":"Button","props":{"y":19,"x":159,"width":27,"var":"btn_jt","stateNum":1,"skin":"dating_ui/tongyong/btn_jt.png","rotation":0,"height":14,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.GeRen_TouZhuJLUI",ui.ajqp.dating.component.GeRen_TouZhuJLUI);
			View.regComponent("ui.ajqp.dating.component.GeRen_TouZhuUI",ui.ajqp.dating.component.GeRen_TouZhuUI);
			View.regComponent("ui.ajqp.dating.component.TZPTRenderUI",ui.ajqp.dating.component.TZPTRenderUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen1_ApiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen_ApiUI extends View {
		public list_title:Laya.List;
		public clip_num:Laya.Clip;
		public lb_yxtz:Laya.Label;
		public lb_pc:Laya.Label;
		public lb_fd:Laya.Label;
		public box_btn:Laya.Box;
		public btn_0:Laya.Box;
		public btn_select0:Laya.Button;
		public btn_day0:Laya.Button;
		public lb_0:Laya.Label;
		public btn_1:Laya.Box;
		public btn_select1:Laya.Button;
		public btn_day1:Laya.Button;
		public lb_1:Laya.Label;
		public btn_2:Laya.Box;
		public btn_select2:Laya.Button;
		public btn_day2:Laya.Button;
		public lb_2:Laya.Label;
		public btn_3:Laya.Box;
		public btn_select3:Laya.Button;
		public btn_day3:Laya.Button;
		public lb_3:Laya.Label;
		public btn_4:Laya.Box;
		public btn_select4:Laya.Button;
		public btn_day4:Laya.Button;
		public lb_4:Laya.Label;
		public btn_5:Laya.Box;
		public btn_select5:Laya.Button;
		public btn_day5:Laya.Button;
		public lb_5:Laya.Label;
		public btn_6:Laya.Box;
		public btn_select6:Laya.Button;
		public btn_day6:Laya.Button;
		public lb_6:Laya.Label;
		public btn_select:Laya.Box;
		public img_select:Laya.Image;
		public lb_time:Laya.Label;
		public btn_jiantou:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":648,"height":451},"child":[{"type":"Box","props":{"width":648,"height":451,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":409,"x":0,"width":648,"skin":"dating_ui/tongyong/di/tu_liebiao1.png","sizeGrid":"0,25,0,0","height":45}},{"type":"List","props":{"y":3,"x":18,"width":613,"var":"list_title","spaceX":5,"selectEnable":true,"repeatY":1,"height":58},"child":[{"type":"GeRen_BaoBiao","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.GeRen_BaoBiaoUI"}}]},{"type":"Image","props":{"y":54,"x":6,"width":637,"skin":"dating_ui/yuebao/tu_di.png","height":260},"child":[{"type":"Label","props":{"y":63,"x":319,"text":"总金额 (元)","fontSize":23,"color":"#cfbf9b","bold":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"var":"clip_num","skin":"dating_ui/yuebao/clip_1-9.png","index":0,"clipX":11,"centerY":15,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":318,"x":1,"width":648,"skin":"dating_ui/tongyong/di.png","height":61},"child":[{"type":"Image","props":{"y":6,"x":216,"skin":"dating_ui/tongyong/di/tu_8.png"}},{"type":"Image","props":{"y":6,"x":432,"skin":"dating_ui/tongyong/di/tu_8.png"}}]},{"type":"Image","props":{"y":332,"x":499,"skin":"dating_ui/geren/tu_fdze.png"}},{"type":"Image","props":{"y":332,"x":283,"skin":"dating_ui/geren/tu_pcze.png"}},{"type":"Image","props":{"y":332,"x":40,"skin":"dating_ui/geren/tu_yxtzze.png"}},{"type":"Label","props":{"y":378,"x":110,"width":178,"var":"lb_yxtz","text":"0","height":30,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":378,"x":326,"width":178,"var":"lb_pc","text":"0","height":30,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":378,"x":543,"width":178,"var":"lb_fd","text":"0","height":30,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Box","props":{"y":277,"x":526,"width":200,"var":"box_btn","height":271,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"15,15,15,15","height":280}},{"type":"Box","props":{"y":0,"x":0,"width":200,"var":"btn_0","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day0","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_0","text":"2018-09-15","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":37,"x":14,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":39,"x":0,"width":200,"var":"btn_1","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day1","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_1","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":77,"x":0,"width":200,"var":"btn_2","height":40},"child":[{"type":"Button","props":{"y":7,"x":166,"width":27,"var":"btn_select2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day2","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_2","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":116,"x":0,"width":200,"var":"btn_3","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day3","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_3","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":154,"x":0,"width":200,"var":"btn_4","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day4","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_4","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":193,"x":0,"width":200,"var":"btn_5","height":40},"child":[{"type":"Button","props":{"y":9,"x":166,"width":27,"var":"btn_select5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day5","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_5","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":231,"x":0,"width":200,"var":"btn_6","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day6","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":11,"x":44,"width":119,"var":"lb_6","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]}]},{"type":"Box","props":{"y":413,"x":412,"width":226,"var":"btn_select","height":38},"child":[{"type":"Image","props":{"y":0,"x":0,"width":225,"var":"img_select","skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Button","props":{"y":19,"x":26,"width":40,"stateNum":1,"skin":"dating_ui/tongyong/btn_sj2.png","height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_time","text":"2018-09-15","fontSize":22,"color":"#bfbfbf","centerY":0,"centerX":0}},{"type":"Button","props":{"y":19,"x":199,"width":27,"var":"btn_jiantou","stateNum":1,"skin":"dating_ui/tongyong/btn_jt.png","rotation":0,"height":14,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.GeRen_BaoBiaoUI",ui.ajqp.dating.component.GeRen_BaoBiaoUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen_ApiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen_BaoBiaoUI extends View {
		public clip_bg:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":133,"height":58},"child":[{"type":"Clip","props":{"var":"clip_bg","skin":"dating_ui/geren/btn_bb.png","clipY":2}},{"type":"Label","props":{"y":20,"x":22,"var":"txt_name","text":"棋牌报表","fontSize":22,"color":"#ffffff","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen_BaoBiaoUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen_TabRenderUI extends View {
		public clip_name:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":169,"height":84},"child":[{"type":"Clip","props":{"y":0,"x":0,"var":"clip_name","skin":"dating_ui/geren/btn_grbb.png","index":0,"clipY":2}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen_TabRenderUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen_TouZhuUI extends View {
		public clip_bg:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":163,"height":58},"child":[{"type":"Clip","props":{"y":0,"x":0,"var":"clip_bg","skin":"dating_ui/geren/btn_jl.png","index":0,"clipY":2}},{"type":"Label","props":{"y":20,"x":15,"var":"txt_name","text":"棋牌投注记录","fontSize":22,"color":"#ffffff","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen_TouZhuUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class GeRen_TouZhuJLUI extends View {
		public img_bg:Laya.Image;
		public txt_time:Laya.Label;
		public lb_zd:Laya.Label;
		public lb_money:Laya.Label;
		public lb_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":648,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":648,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Label","props":{"y":7,"x":4,"width":115,"var":"txt_time","text":"16:18:41","height":27,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":7,"x":124,"width":260,"var":"lb_zd","text":"sadfasdasd12312312312312312312312","overflow":"hidden","height":27,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":7,"x":406,"width":97,"var":"lb_money","text":"99999999","overflow":"hidden","height":27,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":7,"x":536,"width":97,"var":"lb_num","text":"1","overflow":"hidden","height":27,"fontSize":20,"color":"#41fe69","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.GeRen_TouZhuJLUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class HeadRenderTUI extends View {
		public img_head:Laya.Image;
		public txt_time:Laya.Label;
		public img_select:Laya.Clip;
		public img_suo:Laya.Image;
		public img_jb:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":111,"height":132},"child":[{"type":"Image","props":{"y":1,"x":1,"width":110,"skin":"dating_ui/shouchong/tu_wpk.png","height":110},"child":[{"type":"Image","props":{"y":6,"x":6,"width":98,"var":"img_head","height":98}},{"type":"Label","props":{"y":111,"x":14,"var":"txt_time","text":"23:59:59","fontSize":20,"color":"#bc0101","centerX":0,"bold":true}},{"type":"Clip","props":{"y":88,"x":68,"var":"img_select","skin":"dating_ui/geren/Clip_xz.png","right":-1,"clipY":2,"bottom":0}},{"type":"Image","props":{"y":70,"x":74,"var":"img_suo","skin":"dating_ui/geren/tu_suo.png"}},{"type":"Image","props":{"y":1,"x":-1,"var":"img_jb"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.HeadRenderTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class HudOne_TUI extends View {
		public box:Laya.Box;
		public btn:Laya.Box;
		public tip:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":294,"height":235},"child":[{"type":"Box","props":{"y":26,"x":0,"width":294,"var":"box","height":235}},{"type":"Box","props":{"width":294,"var":"btn","height":235,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":24,"x":184,"width":80,"var":"tip","height":72}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.HudOne_TUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_Jbd1_APIUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":230,"height":210},"child":[{"type":"Box","props":{"width":230,"var":"btn_box","height":207,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":81,"x":100,"var":"img","skin":"dating_ui/sk/JDB/JDB_alpysm.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":23,"x":14,"skin":"dating_ui/sk/JDB/JDB_bz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_Jbd1_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_Jdb_APIUI extends View {
		public list_jdb:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":479},"child":[{"type":"List","props":{"y":41,"x":20,"var":"list_jdb","spaceY":-15,"spaceX":0,"repeatY":2},"child":[{"type":"Hud_Jbd1_API","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_Jbd1_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_Jbd1_APIUI",ui.ajqp.dating.component.Hud_Jbd1_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_Jdb_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_Qp_API1UI extends View {
		public panel_pt:Laya.Panel;
		public view_pt:ui.ajqp.dating.component.Hud_T1_APIUI;

        public static  uiView:any ={"type":"View","props":{"width":360,"height":479},"child":[{"type":"Panel","props":{"y":0,"x":-12,"width":1280,"var":"panel_pt","height":480},"child":[{"type":"Hud_T1_API","props":{"y":0,"x":0,"var":"view_pt","runtime":"ui.ajqp.dating.component.Hud_T1_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_T1_APIUI",ui.ajqp.dating.component.Hud_T1_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_Qp_API1UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_Sx1_APIUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":296,"height":197},"child":[{"type":"Box","props":{"width":296,"var":"btn_box","height":197,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":98,"x":169,"var":"img","skin":"dating_ui/sk/SX/SX_bjl.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_Sx1_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_Sx_APIUI extends View {
		public img_sx:Laya.Image;
		public list_sx:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1287,"height":402},"child":[{"type":"Image","props":{"x":0,"var":"img_sx","skin":"dating_ui/sk/SX/SX_zr.png","centerY":0}},{"type":"List","props":{"y":0,"x":314,"var":"list_sx","repeatY":2},"child":[{"type":"Hud_Sx1_API","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_Sx1_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_Sx1_APIUI",ui.ajqp.dating.component.Hud_Sx1_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_Sx_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_TUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;
		public txt_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":250,"height":250},"child":[{"type":"Box","props":{"y":125,"x":125,"width":250,"var":"btn_box","height":250,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":250,"var":"img","skin":"dating_ui/sk/DZ_baijiale.png","height":250}},{"type":"Box","props":{"y":207,"x":125,"width":90,"height":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":90,"skin":"dating_ui/dating/tu_rd.png","height":20}},{"type":"Image","props":{"y":10,"x":19,"skin":"dating_ui/dating/tu_ren.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":9.5,"x":56,"width":49,"var":"txt_num","valign":"middle","text":"9999","height":22,"fontSize":22,"color":"#b9b4c7","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_TUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_T1_APIUI extends View {
		public btn_box:Laya.Box;
		public img_pt:Laya.Image;
		public img_bz:Laya.Image;
		public list_yx:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":545,"height":479},"child":[{"type":"Box","props":{"y":240,"x":181,"width":332,"var":"btn_box","scaleY":1.1,"scaleX":1.1,"height":381,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_pt","skin":"dating_ui/sk/QP/QP_ae.png"}},{"type":"Image","props":{"y":23,"x":91,"var":"img_bz","skin":"dating_ui/sk/QP/tu_fh.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":19,"x":334,"var":"list_yx","spaceY":-15,"spaceX":0,"repeatY":2,"renderType":"render"},"child":[{"type":"Hud_T_API","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_T_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_T_APIUI",ui.ajqp.dating.component.Hud_T_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_T1_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class Hud_T_APIUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":225,"height":225},"child":[{"type":"Box","props":{"width":250,"var":"btn_box","scaleY":0.9,"scaleX":0.9,"height":250,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":250,"var":"img","skin":"dating_ui/sk/DZ_baijiale.png","height":250}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.Hud_T_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class KeFuRenderUI extends View {
		public img_logo:Laya.Image;
		public btn_link:Laya.Button;
		public txt_id:Laya.Label;
		public txt_name:Laya.Label;
		public txt_type:laya.display.Text;
		public img_head:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":850,"height":135},"child":[{"type":"Image","props":{"y":0,"x":0,"width":706,"skin":"dating_ui/tongyong/di/tu_0.png","sizeGrid":"26,25,25,24","scaleY":1.2,"scaleX":1.2,"height":113}},{"type":"Image","props":{"y":94,"x":193,"width":67,"var":"img_logo","skin":"dating_ui/chongzhi/WXSM.png","scaleY":0.9,"scaleX":0.9,"height":67,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":39,"x":659,"width":153,"var":"btn_link","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","labelStrokeColor":"#259c2f","labelStroke":3,"labelSize":30,"labelPadding":"-1","labelColors":"#ffffff","height":59},"child":[{"type":"Image","props":{"y":14,"x":9,"skin":"dating_ui/kehu/tu_fz.png"}}]},{"type":"Label","props":{"y":81,"x":305,"wordWrap":true,"width":162,"var":"txt_id","valign":"top","text":"123456789","leading":0,"height":28,"fontSize":28,"color":"#c8bc9f","align":"left"}},{"type":"Label","props":{"y":16,"x":165,"wordWrap":true,"width":365,"var":"txt_name","valign":"middle","text":"111","leading":8,"height":38,"fontSize":35,"color":"  #fff9bb","align":"left"}},{"type":"Text","props":{"y":80,"x":232,"width":96,"var":"txt_type","text":"微信：","height":30,"fontSize":28,"color":"#c8bc9f","bold":true}},{"type":"Image","props":{"y":-8,"x":17,"width":134,"var":"img_head","skin":"dating_ui/kehu/tx_1.png","height":134}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.KeFuRenderUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class List_JDB_APIUI extends View {
		public list_jdb:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1287,"height":479},"child":[{"type":"List","props":{"width":1287,"var":"list_jdb","spaceY":10,"repeatY":2,"height":479},"child":[{"type":"Hud_Jbd1_API","props":{"y":20,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_Jbd1_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_Jbd1_APIUI",ui.ajqp.dating.component.Hud_Jbd1_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.List_JDB_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class List_QP_APIUI extends View {
		public list_qp:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1287,"height":479},"child":[{"type":"List","props":{"width":1287,"var":"list_qp","spaceX":-10,"height":479},"child":[{"type":"Hud_Qp_API1","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_Qp_API1UI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_Qp_API1UI",ui.ajqp.dating.component.Hud_Qp_API1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.List_QP_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class List_Sx_APIUI extends View {
		public list_ag:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":402},"child":[{"type":"List","props":{"y":0,"x":0,"width":1280,"var":"list_ag","height":402},"child":[{"type":"Hud_Sx_API","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_Sx_APIUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_Sx_APIUI",ui.ajqp.dating.component.Hud_Sx_APIUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.List_Sx_APIUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class LoadingTipTUI extends View {
		public ani2:Laya.FrameAnimation;
		public box:Laya.Box;
		public img:ui.ajqp.dating.component.Effect_shuiUI;
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":74,"height":36},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/effect/gxz/tu_kd.png","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dating_ui/dating/effect/gxz/tu_kuang.png","centerY":0,"centerX":0}},{"type":"Box","props":{"width":74,"var":"box","height":36,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":1.5,"skin":"dating_ui/dating/effect/gxz/tu_zz1.png","renderType":"mask"}},{"type":"Effect_shui","props":{"y":61,"x":34,"var":"img","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_shuiUI"}}]},{"type":"Label","props":{"y":8,"width":45,"var":"txt","text":"0%","italic":true,"height":19,"fontSize":16,"color":"#7bff57","centerX":0,"bold":true,"align":"center"}},{"type":"Image","props":{"x":37,"skin":"dating_ui/dating/effect/gxz/gx10000.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":7}],"animations":[{"nodes":[{"target":7,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/gxz/gx10000.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":0},{"value":"dating_ui/dating/effect/gxz/gx10001.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":4},{"value":"dating_ui/dating/effect/gxz/gx10002.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":8},{"value":"dating_ui/dating/effect/gxz/gx10003.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":12},{"value":"dating_ui/dating/effect/gxz/gx10004.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":16},{"value":"dating_ui/dating/effect/gxz/gx10005.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":20},{"value":"dating_ui/dating/effect/gxz/gx10006.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":24},{"value":"dating_ui/dating/effect/gxz/gx10007.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":28}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Effect_shuiUI",ui.ajqp.dating.component.Effect_shuiUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.LoadingTipTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class QuKuanTUI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_type:Laya.Label;
		public txt_time:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":0,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,7,0,6","left":0,"height":40}},{"type":"Label","props":{"y":8,"wordWrap":true,"width":150,"var":"txt_money","left":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":192,"wordWrap":true,"width":200,"var":"txt_type","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":416,"wordWrap":true,"width":200,"var":"txt_time","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"wordWrap":true,"width":200,"var":"txt_zt","right":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.QuKuanTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TabItemRender1UI extends View {
		public clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":195,"height":100},"child":[{"type":"Clip","props":{"y":50,"x":97,"var":"clip","skin":"dating_ui/qukuan/btn_zfb.png","name":"selectBox","index":1,"clipY":3,"clipX":1,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TabItemRender1UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TabItemRender2UI extends View {
		public ani1:Laya.FrameAnimation;
		public img_icon:Laya.Clip;
		public box_rate:Laya.Box;
		public txt_rate:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":252,"height":98},"child":[{"type":"Clip","props":{"y":0,"x":0,"var":"img_icon","skin":"dating_ui/chongzhi/btn_vip.png","name":"selectBox","index":1,"clipY":3}},{"type":"Box","props":{"y":22,"x":231,"var":"box_rate","rotation":1.05,"anchorY":0.5,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"width":55,"skin":"dating_ui/tongyong/tu_qipao.png","height":55}},{"type":"Text","props":{"y":7,"x":5,"width":45,"var":"txt_rate","text":"+3%","height":21,"fontSize":20,"color":"#ffffff","align":"center"}}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":40},{"value":10,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.TabItemRender2UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TeblteRender4UI extends View {
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":195,"height":100},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":195,"skin":"dating_ui/tongyong/btn_an.png","name":"selectBox","index":1,"height":100,"clipY":3,"clipX":1}},{"type":"Label","props":{"y":50,"x":100,"width":191,"var":"txt_name","underline":false,"text":"活动内容","height":32,"fontSize":29,"color":"#ffffff","cacheAs":"normal","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TeblteRender4UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TextInputUI extends View {
		public prompt:laya.display.Text;
		public input:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":392,"height":40},"child":[{"type":"Text","props":{"y":7,"x":9,"width":188,"var":"prompt","text":"请输入转入金额...","height":26,"fontSize":24,"color":"#60594e","align":"left"}},{"type":"Text","props":{"y":-1,"x":10,"width":380,"var":"input","valign":"middle","height":40,"fontSize":24,"color":"#c8bc9f","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.TextInputUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TuiGuangMX_TUI extends View {
		public img_bg:Laya.Image;
		public txt_title:Laya.Label;
		public txt_yjed:Laya.Label;
		public txt_fyvalue:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"width":860,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,7,0,6","height":38,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":19,"x":133,"width":230,"var":"txt_title","valign":"middle","height":25,"fontSize":20,"color":"#cfc9b1","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":7,"x":271,"width":316,"var":"txt_yjed","valign":"middle","height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":7,"x":601,"width":244,"var":"txt_fyvalue","valign":"middle","height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TuiGuangMX_TUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TuiGuangTUI extends View {
		public img_bg:Laya.Image;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":740,"height":40},"child":[{"type":"Image","props":{"y":0,"width":856,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,5,0,4","left":0,"height":40}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":53,"var":"txt_type","left":20,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":335,"var":"txt_money","right":300,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":350,"var":"txt_time","right":-81,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Image","props":{"y":20,"x":50,"skin":"dating_ui/tongyong/tu_top1.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TuiGuangTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TuiGuang_DaiLiUI extends View {
		public img_bg:Laya.Image;
		public lb_jb:Laya.Label;
		public lb_yj:Laya.Label;
		public lb_ed:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":820,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":820,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Label","props":{"y":20,"x":91,"width":125,"var":"lb_jb","text":"代理V1","height":27,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":414,"width":163,"var":"lb_yj","text":"0+","overflow":"hidden","height":27,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":7,"x":643,"width":153,"var":"lb_ed","text":"每万返佣888元","overflow":"hidden","height":27,"fontSize":20,"color":"#ffffff","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TuiGuang_DaiLiUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TuiGuang_FanYongUI extends View {
		public clip_bg:Laya.Clip;
		public lb_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":133,"height":58},"child":[{"type":"Clip","props":{"y":0,"x":0,"var":"clip_bg","skin":"dating_ui/tuiguang/btn_dl.png","clipY":2}},{"type":"Label","props":{"y":20,"x":22,"var":"lb_name","text":"棋牌代理","fontSize":22,"color":"#ffffff","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TuiGuang_FanYongUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class TZPTRenderUI extends View {
		public btn_select:Laya.Button;
		public lb_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":174,"height":40},"child":[{"type":"Box","props":{"width":174,"renderType":"render","height":40},"child":[{"type":"Button","props":{"y":8,"x":143,"width":27,"var":"btn_select","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Label","props":{"y":9,"x":20,"width":119,"var":"lb_name","text":"AE棋牌","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}},{"type":"Image","props":{"y":-1,"x":1,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.TZPTRenderUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class VipSlideTUI extends View {
		public img_txk:Laya.Image;
		public img_tx:Laya.Image;
		public clip_Num:Laya.Clip;
		public img_yuan:Laya.Image;
		public clip_Lv:Laya.Clip;
		public btn_lingqu:Laya.Box;
		public box_lq:Laya.Box;
		public box_hd:Laya.Box;
		public box_yy:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":300},"child":[{"type":"Box","props":{"y":0,"x":0,"width":640,"height":300},"child":[{"type":"Image","props":{"y":56,"x":20,"skin":"dating_ui/vip/tu_dd.png"}},{"type":"Box","props":{"y":168,"x":96,"width":270,"height":148},"child":[{"type":"Image","props":{"y":-2,"x":13,"width":100,"skin":"dating_ui/vip/tu_wpk.png","height":100}},{"type":"Image","props":{"y":-2,"x":156,"width":100,"skin":"dating_ui/vip/tu_wpk.png","height":100}},{"type":"Image","props":{"y":47,"x":63,"width":87,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk1.png","height":87,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":48,"x":206,"width":76,"var":"img_tx","skin":"dating_ui/touxiang/tu_tx0.png","height":76,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":99,"x":0,"skin":"dating_ui/vip/tu_zstxk.png"}},{"type":"Image","props":{"y":99,"x":143,"skin":"dating_ui/vip/tu_zstx.png"}}]},{"type":"Box","props":{"y":45,"x":434,"width":128,"height":52},"child":[{"type":"Clip","props":{"y":1,"x":3,"var":"clip_Num","skin":"dating_ui/vip/clip_1-9.png","index":0,"clipX":10}},{"type":"Image","props":{"y":16,"x":153,"var":"img_yuan","skin":"dating_ui/vip/tu_yuan.png"}}]},{"type":"Box","props":{"y":39,"x":200,"width":79,"height":55},"child":[{"type":"Clip","props":{"var":"clip_Lv","skin":"dating_ui/vip/clip_1-9.png","index":0,"clipX":10,"centerY":3,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":210,"x":370,"width":254,"var":"btn_lingqu","height":82},"child":[{"type":"Box","props":{"y":0,"x":0,"width":213,"var":"box_lq","height":69},"child":[{"type":"Button","props":{"y":7,"x":8,"stateNum":1,"skin":"dating_ui/vip/btn_an.png"},"child":[{"type":"Image","props":{"y":12,"x":45,"skin":"dating_ui/vip/tu_zt.png"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":213,"var":"box_hd","height":69},"child":[{"type":"Button","props":{"y":7,"x":8,"stateNum":1,"skin":"dating_ui/vip/btn_an.png"},"child":[{"type":"Image","props":{"y":12,"x":45,"skin":"dating_ui/vip/tu_zt01.png"}}]}]},{"type":"Box","props":{"y":-31,"x":20,"var":"box_yy"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/vip/tu_ylq.png"}}]}]},{"type":"Image","props":{"y":45,"x":101,"skin":"dating_ui/vip/tu_vipwz.png"}},{"type":"Image","props":{"y":57,"x":281,"skin":"dating_ui/vip/tu_jjl.png"}},{"type":"Image","props":{"y":114,"x":143,"skin":"dating_ui/vip/tu_ewzsjl.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.VipSlideTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class XiaoKuangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":647,"height":451,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":647,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":451},"child":[{"type":"Image","props":{"x":10,"width":628,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":51}},{"type":"Image","props":{"y":14,"x":9,"width":314,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":637,"width":314,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":363,"top":11,"skin":"dating_ui/tongyong/tu_wzd3.png","sizeGrid":"0,152,0,174","height":59,"centerX":1}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.XiaoKuangUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class XiaoKuang0UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":134,"x":316,"width":647,"height":451,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":647,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":451},"child":[{"type":"Image","props":{"y":14,"x":9,"width":314,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":637,"width":314,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":363,"top":11,"skin":"dating_ui/tongyong/tu_wzd3.png","sizeGrid":"0,152,0,174","height":59,"centerX":1}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.XiaoKuang0UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class XinXi_lbUI extends View {
		public img_mail:Laya.Image;
		public btn_dingyue:Laya.Image;
		public txt_title:laya.display.Text;
		public txt_content:laya.display.Text;
		public txt_name:laya.display.Text;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1055,"height":123},"child":[{"type":"Box","props":{"width":1055,"height":123},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1055,"skin":"dating_ui/tongyong/di/tu_0.png","sizeGrid":"30,30,30,30","height":123}},{"type":"Image","props":{"y":63,"x":765,"width":225,"skin":"dating_ui/tongyong/di/tu_3.png","sizeGrid":"0,19,0,18","height":38}},{"type":"Image","props":{"y":-5,"x":157,"skin":"dating_ui/tongyong/di/tu_2.png"}},{"type":"Image","props":{"y":17,"x":80,"skin":"dating_ui/tongyong/di/tu_1.png"}},{"type":"Image","props":{"y":61,"x":62,"var":"img_mail","skin":"dating_ui/xinxi/tu_weidu.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":18,"x":623,"var":"btn_dingyue","skin":"dating_ui/xinxi/tu_yy.png"}},{"type":"Text","props":{"y":26,"x":131,"width":277,"var":"txt_title","text":"邮件标题可以显示12个字","height":28,"fontSize":25,"color":"#ffe8c7"}},{"type":"Text","props":{"y":74,"x":131,"wordWrap":true,"width":350,"var":"txt_content","text":"恭喜您,您已达到首次充值奖励条件","overflow":"hidden","height":30,"fontSize":22,"color":"#766752","align":"left"}},{"type":"Text","props":{"y":72,"x":765,"width":225,"var":"txt_name","text":"发件人：GM","height":20,"fontSize":20,"color":"#c0a072","align":"center"}},{"type":"Text","props":{"y":19,"x":775,"width":206,"var":"txt_time","text":"2020-8-15 22:11:11","height":24,"fontSize":24,"color":"#e2cdae","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.component.XinXi_lbUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class YingHangKaUI extends View {
		public img_icon:Laya.Image;
		public txt_title:Laya.Label;
		public txt_name:Laya.Label;
		public btn_go:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":970,"height":171},"child":[{"type":"Image","props":{"y":0,"x":0,"width":970,"skin":"dating_ui/chongzhi/tu_yhd.png","height":171},"child":[{"type":"Image","props":{"y":88,"x":114,"var":"img_icon","skin":"dating_ui/chongzhi/CX.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":43,"x":187,"width":520,"var":"txt_title","text":"中国银行","height":34,"fontSize":32,"color":"#cbbb98","bold":true,"align":"left"}},{"type":"Label","props":{"y":92,"x":187,"width":520,"var":"txt_name","text":"6666666666666666","height":34,"fontSize":32,"color":"#cbbb98"}},{"type":"Button","props":{"y":87,"x":840,"var":"btn_go","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_czje.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":17,"x":17,"width":131,"text":"前往充值","height":34,"fontSize":32,"color":"#4b2401"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.YingHangKaUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class YongHuTUI extends View {
		public img_bg:Laya.Image;
		public txt_name:Laya.Label;
		public txt_total:Laya.Label;
		public txt_tallage:Laya.Label;
		public txt_count:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":1,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,5,0,4","left":1,"height":40}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_name","valign":"middle","left":18,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":226,"width":198,"var":"txt_total","valign":"middle","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"x":433,"width":198,"var":"txt_tallage","valign":"middle","height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":8,"width":198,"var":"txt_count","valign":"middle","right":21,"height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.YongHuTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class YuEBaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_zt:Laya.Label;
		public txt_money_zr:Laya.Label;
		public txt_money_zc:Laya.Label;
		public txt_yue:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":646,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":646,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":646,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_6.png","sizeGrid":"0,7,0,6","alpha":1}},{"type":"Label","props":{"y":20,"x":50,"width":40,"var":"txt_zt","text":"取出","height":20,"fontSize":20,"color":"#fffad7","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":174,"width":118,"var":"txt_money_zr","text":"-99999999","height":22,"fontSize":20,"color":"#ad0000","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":174,"width":118,"var":"txt_money_zc","text":"-99999999","height":22,"fontSize":20,"color":"#28ff00","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":325,"var":"txt_yue","text":"999999999","fontSize":20,"color":"#fffad7","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":523,"var":"txt_time","text":"2019-12-31 23:59:59","fontSize":20,"color":"#fffad7","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.YuEBaoTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhongKuangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"x":166,"width":667,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":51}},{"type":"Image","props":{"y":70,"x":12,"width":179,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,19,0","height":450}},{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhongKuangUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhongKuang0UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":10,"x":10,"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"y":70,"x":12,"width":179,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,20,0","height":450}},{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhongKuang0UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhongKuang1UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":20,"x":20,"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhongKuang1UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhongKuang2UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"x":10,"width":823,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":51}},{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"dating_ui/tongyong/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"dating_ui/tongyong/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhongKuang2UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhuanPanTUI extends View {
		public img_reward:Laya.Image;
		public txt_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":20,"height":20},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/zhuanpan/tu_pb.png","anchorY":1,"anchorX":0.5,"alpha":0}},{"type":"Image","props":{"y":-197,"x":-3,"width":125,"visible":false,"var":"img_reward","skin":"dating_ui/tongyong/jb_4.png","scaleY":0.5,"scaleX":0.5,"height":125,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-134,"x":-1,"width":94,"visible":false,"var":"txt_num","text":"100","height":22,"fontSize":28,"color":"#f9e974","anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhuanPanTUI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhuanPanT2UI extends View {
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":319,"height":22},"child":[{"type":"Box","props":{"y":0,"x":0,"width":319,"height":22},"child":[{"type":"Label","props":{"y":12,"x":264,"wordWrap":true,"width":94,"var":"txt_time","text":"25:60:61","height":22,"fontSize":20,"color":"#cfcfcf","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":12,"x":50,"wordWrap":true,"width":56,"var":"txt_type","text":"铂金","height":22,"fontSize":20,"color":"#cfcfcf","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":129,"wordWrap":true,"width":58,"var":"txt_money","text":"88888","height":22,"fontSize":20,"color":"#41fe69","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhuanPanT2UI.uiView);
        }
    }
}

module ui.ajqp.dating.component {
    export class ZhuanPan_JiLuUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":264,"height":30},"child":[{"type":"Box","props":{"y":0,"x":0,"width":264,"height":30},"child":[{"type":"Label","props":{"y":5,"x":2,"text":"恭喜","fontSize":18,"color":"#808080","align":"left"}},{"type":"Label","props":{"y":5,"x":42,"width":133,"text":"「玩家名字...」","height":20,"fontSize":18,"color":"#808080","align":"left"}},{"type":"Label","props":{"y":5,"x":166,"width":42,"text":"中奖","height":20,"fontSize":18,"color":"#808080","align":"left"}},{"type":"Label","props":{"y":5,"x":207,"width":42,"text":"8888","height":20,"fontSize":18,"color":"#808080","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.component.ZhuanPan_JiLuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class DaTingUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public box_top:Laya.Box;
		public img_top:Laya.Image;
		public box_btn_top:Laya.Box;
		public btn_xiaoxi:Laya.Button;
		public btn_kefu:Laya.Button;
		public btn_fenxiang:Laya.Button;
		public btn_bangding:Laya.Button;
		public box_guanwang:Laya.Box;
		public btn_guanwang:Laya.Button;
		public img_copy_gw:Laya.Box;
		public img_gw:Laya.Image;
		public txt_gw_url:Laya.Label;
		public box_btn_top_left:Laya.Box;
		public img_name_bg:Laya.Image;
		public btn_gren:Laya.Image;
		public qifu_type:Laya.Image;
		public img_txk:Laya.Image;
		public txt_id:Laya.Label;
		public btn_vip:Laya.Button;
		public clip_vip:Laya.Clip;
		public btn_add:Laya.Box;
		public clip_money:Laya.Clip;
		public btn_cz:Laya.Button;
		public list_btns:Laya.List;
		public box_jdb:Laya.Box;
		public box_qp:Laya.Box;
		public box_sx:Laya.Box;
		public box_bottom:Laya.Box;
		public img_bottom_middle:Laya.Image;
		public box_btn_bottom:Laya.Box;
		public btn_chongzhi:Laya.Box;
		public btn_qukuan:Laya.Box;
		public box_bottomLeft:Laya.Box;
		public btn_yuebao:Laya.Box;
		public btn_daili:Laya.Box;
		public btn_qiandao:Laya.Box;
		public box_bottomRight:Laya.Box;
		public btn_shouchong:Laya.Box;
		public btn_qifu:Laya.Box;
		public btn_zhuanpan:Laya.Box;
		public btn_remen:Laya.Box;
		public box_tabs:Laya.Box;
		public box_items:Laya.Box;
		public item0:ui.ajqp.dating.component.Effect_rmUI;
		public item1:ui.ajqp.dating.component.Effect_qpUI;
		public item2:ui.ajqp.dating.component.Effect_brUI;
		public item3:ui.ajqp.dating.component.Effect_dwUI;
		public item4:ui.ajqp.dating.component.Effect_fkUI;
		public btn_enterRoom:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":361,"top":-1,"skin":"dating_ui/dating/tu_bj.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":1284,"var":"box_top","top":0,"right":-1,"left":-1,"height":97},"child":[{"type":"Image","props":{"y":-1,"var":"img_top","top":-1,"skin":"dating_ui/dating/tu_d1.png","sizeGrid":"20,20,20,20","right":-1,"left":-1}},{"type":"Box","props":{"width":468,"var":"box_btn_top","top":0,"right":0,"height":78,"anchorX":1},"child":[{"type":"Button","props":{"y":39,"x":246.5,"var":"btn_xiaoxi","stateNum":1,"skin":"dating_ui/dating/btn_xinxi.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":39,"x":415,"var":"btn_kefu","stateNum":1,"skin":"dating_ui/dating/btn_kehu.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":39,"x":170,"var":"btn_fenxiang","stateNum":1,"skin":"dating_ui/dating/btn_fenxiang1.png","name":"item2","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":39,"x":85,"var":"btn_bangding","stateNum":1,"skin":"dating_ui/dating/btn_fenxiang.png","name":"item4","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":39,"x":328,"width":90,"var":"box_guanwang","name":"item3","height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":35,"x":45,"var":"btn_guanwang","stateNum":1,"skin":"dating_ui/dating/btn_guanwang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":77,"x":25,"width":257,"visible":false,"var":"img_copy_gw","height":283,"anchorX":0.75},"child":[{"type":"Image","props":{"y":3,"x":208,"skin":"dating_ui/dating/tu_jrgw.png","pivotY":18,"pivotX":192},"child":[{"type":"Image","props":{"y":67,"x":31,"width":165,"skin":"dating_ui/dating/tu_erweima.png","height":162}},{"type":"Image","props":{"y":81,"x":46,"width":135,"var":"img_gw","height":135}},{"type":"Image","props":{"y":255,"x":53,"skin":"dating_ui/dating/tu_djfzgw.png"}},{"type":"Label","props":{"y":221,"x":-76,"width":384,"var":"txt_gw_url","text":"dazhongqp.com","strokeColor":"#0e336b","stroke":0.5,"height":35,"fontSize":25,"color":"#fafbda","bold":true,"align":"center"}}]}]}]}]},{"type":"Image","props":{"y":0,"x":1,"width":300,"top":0,"skin":"dating_ui/dating/tu_zzz.png","sizeGrid":"0,20,30,20","left":0}},{"type":"Box","props":{"width":714,"var":"box_btn_top_left","top":-1,"left":0,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"dating_ui/dating/tu_1_1.png","left":0}},{"type":"Image","props":{"y":29,"x":96,"width":252,"var":"img_name_bg","skin":"dating_ui/tongyong/tu_k1ss.png","height":37}},{"type":"Box","props":{"y":46,"x":75,"width":72,"height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":36,"x":36,"width":72,"var":"btn_gren","skin":"dating_ui/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"dating_ui/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":4,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":33,"x":36,"width":90,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk0.png","left":-9,"height":90,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Label","props":{"y":47,"x":234,"width":230,"var":"txt_id","valign":"middle","height":35,"fontSize":30,"color":"#f5fbb1","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Button","props":{"y":49,"x":342,"var":"btn_vip","stateNum":1,"skin":"dating_ui/dating/btn_top.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":12,"width":39,"height":36},"child":[{"type":"Clip","props":{"y":18,"x":20,"var":"clip_vip","skin":"dating_ui/dating/clip_vip.png","index":0,"clipX":10,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":16,"x":418,"width":350,"var":"btn_add","height":62},"child":[{"type":"Image","props":{"y":12.5,"x":28,"skin":"dating_ui/tongyong/tu_k1ss.png"}},{"type":"Clip","props":{"y":19.5,"x":67,"var":"clip_money","skin":"dating_ui/tongyong/clip_money1.png","index":0,"clipX":11}},{"type":"Button","props":{"y":30,"x":250,"var":"btn_cz","stateNum":1,"skin":"dating_ui/dating/btn_jq.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25.5,"x":43,"skin":"dating_ui/tongyong/icon_money1.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"List","props":{"y":131,"width":1287,"var":"list_btns","spaceY":-15,"spaceX":0,"repeatY":2,"left":229,"height":479},"child":[{"type":"Hud_T","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.Hud_TUI"}}]},{"type":"Box","props":{"y":135,"width":1287,"var":"box_jdb","left":229,"height":479}},{"type":"Box","props":{"y":135,"width":1287,"var":"box_qp","left":229,"height":479}},{"type":"Box","props":{"y":135,"width":1287,"var":"box_sx","left":229,"height":479}},{"type":"Box","props":{"y":588,"var":"box_bottom","right":-1,"left":-1,"height":105,"bottom":-1},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/tu_d2.png","sizeGrid":"0,600,0,593","right":-1,"left":-1,"height":78,"bottom":-1}},{"type":"Image","props":{"var":"img_bottom_middle","skin":"dating_ui/dating/tu_d3.png","sizeGrid":"0,0,0,0","centerX":0,"bottom":-1},"child":[{"type":"Image","props":{"y":26,"x":204,"skin":"dating_ui/dating/tu_d4.png"}}]},{"type":"Box","props":{"y":105,"var":"box_btn_bottom","right":-1,"left":-1,"height":101,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"width":118,"var":"btn_chongzhi","height":107,"centerX":-59,"bottom":8,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dating_ui/dating/effect/cz/10008.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":18,"x":37,"skin":"dating_ui/dating/effect/cz/tu_gg.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":466}]},{"type":"Box","props":{"width":112,"var":"btn_qukuan","height":107,"centerX":57,"bottom":6,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dating_ui/dating/effect/tx/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":109},{"type":"Image","props":{"y":27,"x":49,"skin":"dating_ui/dating/effect/tx/tu_ld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":418},{"type":"Image","props":{"y":68,"x":51,"skin":"dating_ui/dating/effect/tx/tu_jt.png","anchorY":0.9,"anchorX":0},"compId":467}]},{"type":"Box","props":{"y":101,"width":475,"var":"box_bottomLeft","left":0,"height":108,"bottom":0,"anchorY":1,"anchorX":0},"child":[{"type":"Image","props":{"top":53,"skin":"dating_ui/dating/tu_d4.png","left":168,"height":53}},{"type":"Image","props":{"width":2,"top":53,"skin":"dating_ui/dating/tu_d4.png","left":303,"height":53}},{"type":"Image","props":{"top":53,"skin":"dating_ui/dating/tu_d4.png","left":454,"height":53}},{"type":"Box","props":{"y":57,"width":110,"left":180,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_yuebao","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_baoxian.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":57,"x":88,"width":110,"left":33,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_daili","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_tuiguang.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":57,"width":110,"left":327,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_qiandao","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_qiandao.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"y":101,"width":475,"var":"box_bottomRight","right":0,"height":108,"bottom":0,"anchorY":1,"anchorX":1},"child":[{"type":"Image","props":{"top":53,"skin":"dating_ui/dating/tu_d4.png","right":303,"height":53}},{"type":"Image","props":{"width":2,"top":53,"skin":"dating_ui/dating/tu_d4.png","right":168,"height":53}},{"type":"Image","props":{"top":53,"skin":"dating_ui/dating/tu_d4.png","right":454,"height":53}},{"type":"Box","props":{"y":57,"width":110,"right":327,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_shouchong","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_bangding.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_qifu","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_qf.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":57,"width":110,"right":180,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_zhuanpan","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_zhuanpan.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":57,"width":110,"right":33,"height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":39,"x":55,"width":110,"var":"btn_remen","height":78,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":55,"stateNum":1,"skin":"dating_ui/dating/btn_huodong.png","anchorY":0.5,"anchorX":0.5}}]}]}]}]}]},{"type":"Box","props":{"y":134,"width":243,"var":"box_tabs","left":-11,"height":502},"child":[{"type":"Image","props":{"x":11,"skin":"dating_ui/dating/tu_di.png"}},{"type":"Box","props":{"y":18,"x":-9,"var":"box_items"},"child":[{"type":"Effect_rm","props":{"x":9,"var":"item0","left":-9,"runtime":"ui.ajqp.dating.component.Effect_rmUI"}},{"type":"Effect_qp","props":{"y":90,"x":9,"var":"item1","left":-9,"runtime":"ui.ajqp.dating.component.Effect_qpUI"}},{"type":"Effect_br","props":{"y":174,"x":9,"var":"item2","left":-9,"runtime":"ui.ajqp.dating.component.Effect_brUI"}},{"type":"Effect_dw","props":{"y":247,"x":9,"var":"item3","left":-9,"runtime":"ui.ajqp.dating.component.Effect_dwUI"}},{"type":"Effect_fk","props":{"y":321,"x":9,"var":"item4","left":-9,"runtime":"ui.ajqp.dating.component.Effect_fkUI"}}]},{"type":"Button","props":{"y":395,"x":142,"width":150,"visible":false,"var":"btn_enterRoom","stateNum":1,"skin":"dating_ui/dating/btn_jr.png","height":97}}]}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/cz/10000.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":0},{"value":"dating_ui/dating/effect/cz/10001.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":3},{"value":"dating_ui/dating/effect/cz/10002.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":6},{"value":"dating_ui/dating/effect/cz/10003.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":9},{"value":"dating_ui/dating/effect/cz/10004.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":12},{"value":"dating_ui/dating/effect/cz/10005.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":15},{"value":"dating_ui/dating/effect/cz/10006.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":18},{"value":"dating_ui/dating/effect/cz/10007.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":21},{"value":"dating_ui/dating/effect/cz/10008.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":24},{"value":"dating_ui/dating/effect/cz/10009.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":27},{"value":"dating_ui/dating/effect/cz/10010.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":30},{"value":"dating_ui/dating/effect/cz/10011.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":33}]}},{"target":466,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":466,"key":"rotation","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":466,"key":"rotation","index":70}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":466,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":466,"key":"alpha","index":21},{"value":1,"tweenMethod":"linearNone","tween":true,"target":466,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":466,"key":"alpha","index":50}]}}],"name":"ani1","id":12,"frameRate":24,"action":2},{"nodes":[{"target":109,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/tx/10000.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":0},{"value":"dating_ui/dating/effect/tx/10000.png","tweenMethod":"linearNone","tween":false,"target":109,"label":null,"key":"skin","index":27},{"value":"dating_ui/dating/effect/tx/10001.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":30},{"value":"dating_ui/dating/effect/tx/10002.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":33},{"value":"dating_ui/dating/effect/tx/10003.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":36},{"value":"dating_ui/dating/effect/tx/10004.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":39},{"value":"dating_ui/dating/effect/tx/10005.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":42},{"value":"dating_ui/dating/effect/tx/10006.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":45},{"value":"dating_ui/dating/effect/tx/10007.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":48},{"value":"dating_ui/dating/effect/tx/10008.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":51},{"value":"dating_ui/dating/effect/tx/10009.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":54},{"value":"dating_ui/dating/effect/tx/10010.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":57},{"value":"dating_ui/dating/effect/tx/10011.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":60},{"value":"dating_ui/dating/effect/tx/10000.png","tweenMethod":"linearNone","tween":false,"target":109,"label":null,"key":"skin","index":63}]}},{"target":418,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":418,"key":"rotation","index":0},{"value":171,"tweenMethod":"linearNone","tween":true,"target":418,"key":"rotation","index":47},{"value":171,"tweenMethod":"linearNone","tween":true,"target":418,"label":null,"key":"rotation","index":90}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":418,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":418,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":418,"key":"alpha","index":35},{"value":0,"tweenMethod":"linearNone","tween":true,"target":418,"key":"alpha","index":47},{"value":0,"tweenMethod":"linearNone","tween":true,"target":418,"label":null,"key":"alpha","index":90}]}},{"target":467,"keyframes":{"y":[{"value":68,"tweenMethod":"linearNone","tween":true,"target":467,"key":"y","index":0},{"value":67,"tweenMethod":"linearNone","tween":true,"target":467,"key":"y","index":35},{"value":68,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"y","index":62},{"value":67,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"y","index":90},{"value":68,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"y","index":115}],"x":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":467,"key":"x","index":0},{"value":56,"tweenMethod":"linearNone","tween":true,"target":467,"key":"x","index":35},{"value":51,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"x","index":62},{"value":56,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"x","index":90},{"value":51,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"x","index":115}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":467,"key":"rotation","index":0},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":467,"key":"rotation","index":35},{"value":0,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"rotation","index":62},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"rotation","index":90},{"value":0,"tweenMethod":"linearNone","tween":true,"target":467,"label":null,"key":"rotation","index":115}]}}],"name":"ani2","id":13,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Hud_TUI",ui.ajqp.dating.component.Hud_TUI);
			View.regComponent("ui.ajqp.dating.component.Effect_rmUI",ui.ajqp.dating.component.Effect_rmUI);
			View.regComponent("ui.ajqp.dating.component.Effect_qpUI",ui.ajqp.dating.component.Effect_qpUI);
			View.regComponent("ui.ajqp.dating.component.Effect_brUI",ui.ajqp.dating.component.Effect_brUI);
			View.regComponent("ui.ajqp.dating.component.Effect_dwUI",ui.ajqp.dating.component.Effect_dwUI);
			View.regComponent("ui.ajqp.dating.component.Effect_fkUI",ui.ajqp.dating.component.Effect_fkUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.DaTingUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class DaTingGgUI extends View {
		public box_notice:Laya.Box;
		public img_bg:Laya.Image;
		public panel:Laya.Box;
		public txt_label:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":109,"x":640,"width":737,"var":"box_notice","height":45,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-3,"x":-9,"width":751,"var":"img_bg","skin":"dating_ui/datinggg/tu_ggg.png","sizeGrid":"0,50,0,50","height":45},"child":[{"type":"Image","props":{"y":5,"x":13,"skin":"dating_ui/datinggg/tu_laba.png"}}]},{"type":"Box","props":{"y":-4,"x":55,"width":673,"var":"panel","height":45},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":673,"height":45},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":false,"width":673,"var":"txt_label","valign":"middle","text":"推广员系统”劲爆来袭 ，一次推广永久受益，月入百万不是梦！","height":45,"fontSize":24,"color":"#ffffff"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.DaTingGgUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class DengLuUI extends View {
		public btn_wx:Laya.Button;
		public btn_denglu:Laya.Button;
		public btn_youke:Laya.Box;
		public img_btn:Laya.Image;
		public box_qita:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"right":-1,"left":-1,"height":96,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":48.5,"var":"btn_wx","stateNum":1,"skin":"dating_ui/denglurk/btn_weixin.png","centerX":440,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":48.5,"var":"btn_denglu","stateNum":1,"skin":"dating_ui/denglurk/btn_shouji.png","centerX":281,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":50,"x":642,"var":"btn_youke","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":302,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":94,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"img_btn","skin":"dating_ui/denglurk/tu_ksks.png","centerY":-3,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":-12,"x":1138,"var":"box_qita"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.DengLuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class DengLuBD1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public box:Laya.Box;
		public box_bind:Laya.Box;
		public box_login_phone:Laya.Box;
		public lab_login_account:Laya.Label;
		public box_registered:Laya.Box;
		public txt_set_psd:Laya.TextInput;
		public btn_see_newpsd:Laya.Button;
		public lab_tip:Laya.Label;
		public btn_set_over:Laya.Button;
		public box_login_account:Laya.Box;
		public btn_login:Laya.Button;
		public btn_see_psd:Laya.Button;
		public btn_account_clear:Laya.Button;
		public txt_account:Laya.TextInput;
		public txt_psd:Laya.TextInput;
		public lab_login_phone:Laya.Label;
		public box_reset:Laya.Box;
		public box_set_psd:Laya.Box;
		public txt_set_newpsd:Laya.TextInput;
		public lab_tip1:Laya.Label;
		public btn_see_newpsd1:Laya.Button;
		public btn_sure:Laya.Button;
		public box_phone:Laya.Box;
		public box_send_over:Laya.Box;
		public lab_send_phone:Laya.Label;
		public lab_get_code:Laya.Label;
		public box_cold:Laya.Box;
		public lab_reget:Laya.Label;
		public btn_get_code:Laya.Button;
		public txt_phone:Laya.TextInput;
		public txt_code:Laya.TextInput;
		public txt_warn:Laya.Label;
		public btn_phone_clear:Laya.Button;
		public lab_kefu:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":360,"x":640,"width":664,"var":"box","height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"y":-141,"x":-308,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Image","props":{"y":64,"x":23,"width":623,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":263}},{"type":"Box","props":{"width":674,"var":"box_bind","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":20,"skin":"dating_ui/denglu/tit_shoujiBD.png","centerX":0}}]},{"type":"Box","props":{"x":337,"width":674,"var":"box_login_phone","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":20,"skin":"dating_ui/denglu/tit_shoujiDL.png","centerX":0}},{"type":"Label","props":{"width":150,"var":"lab_login_account","underline":true,"text":"用密码登录","right":40,"height":35,"fontSize":22,"color":"#2aff01","bottom":39,"align":"right"}}]},{"type":"Box","props":{"width":674,"var":"box_registered","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60,"centerY":-20,"centerX":0}},{"type":"TextInput","props":{"y":190,"width":420,"var":"txt_set_psd","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请设置密码…","maxChars":11,"left":115,"height":30,"fontSize":26,"color":"#e9e9fb"},"compId":77},{"type":"Button","props":{"y":205,"x":533,"var":"btn_see_newpsd","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"top":20,"skin":"dating_ui/denglu/tit_zhuce.png","centerX":0}},{"type":"Label","props":{"var":"lab_tip","text":"密码由6-10位数字/英文组成","fontSize":23,"color":"#41fe69","centerX":0,"bottom":50}},{"type":"Button","props":{"y":388,"x":337,"var":"btn_set_over","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":87,"skin":"dating_ui/denglu/tu_wc.png"}}]}]},{"type":"Box","props":{"width":674,"var":"box_login_account","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":127,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60,"centerX":0}},{"type":"Image","props":{"y":214,"x":112,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60},"compId":148},{"type":"Button","props":{"y":388,"x":337,"var":"btn_login","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":36,"x":122,"skin":"dating_ui/denglu/tu_denglu.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"top":20,"skin":"dating_ui/denglu/tit_shoujiDL.png","centerX":0}},{"type":"Button","props":{"y":245,"x":533,"width":37,"var":"btn_see_psd","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeoff.png","height":42,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":135,"x":510,"var":"btn_account_clear","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png"}},{"type":"TextInput","props":{"y":142,"x":115,"width":420,"var":"txt_account","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请输入手机号…","maxChars":11,"height":30,"fontSize":26,"color":"#e9e9fb"},"compId":109},{"type":"TextInput","props":{"y":230,"x":115,"width":420,"var":"txt_psd","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请输入密码…","maxChars":6,"height":30,"fontSize":26,"color":"#e9e9fb"},"compId":111},{"type":"Label","props":{"width":150,"var":"lab_login_phone","underline":true,"text":"验证码登录/注册","right":40,"height":35,"fontSize":22,"color":"#2aff01","bottom":43,"align":"right"}},{"type":"Image","props":{"y":214,"x":111,"skin":"dating_ui/tongyong/tu_srkt2.png","height":60,"alpha":0},"compId":173},{"type":"Label","props":{"y":228,"x":118,"width":420,"valign":"middle","text":"密码错误，请检查","height":35,"fontSize":26,"color":"#ff0e0a","alpha":0,"align":"left"},"compId":175}]},{"type":"Box","props":{"width":674,"var":"box_reset","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":20,"skin":"dating_ui/denglu/tu_shezhimima.png","centerX":0}},{"type":"Box","props":{"width":674,"var":"box_set_psd","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60,"centerY":-20,"centerX":0}},{"type":"TextInput","props":{"y":186,"width":420,"var":"txt_set_newpsd","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请设置新密码…","maxChars":11,"left":114,"height":35,"fontSize":26,"color":"#e9e9fb"}},{"type":"Label","props":{"width":400,"var":"lab_tip1","text":"密码由6-10位数字/英文组成","height":32,"fontSize":24,"color":"#72a952","centerX":0,"bottom":45,"align":"center"}},{"type":"Button","props":{"y":205,"x":533,"var":"btn_see_newpsd1","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"x":337,"var":"btn_sure","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":38,"x":122,"skin":"dating_ui/tongyong/tu_qd.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"width":674,"var":"box_phone","mouseThrough":true,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":661,"var":"box_send_over","height":35,"centerX":0,"bottom":40,"alpha":1},"compId":120,"child":[{"type":"Label","props":{"y":0,"width":209,"text":"短信验证码已发送至","left":30,"height":35,"fontSize":24,"color":"#fffdfd"}},{"type":"Label","props":{"y":0,"width":154,"var":"lab_send_phone","text":"18652134651","height":35,"fontSize":24,"color":"#50cc5a","centerX":10,"align":"left"}},{"type":"Label","props":{"y":-2,"width":101,"var":"lab_get_code","underline":true,"text":"重新获取","right":53,"height":35,"fontSize":24,"color":"#2aff01","align":"left"}},{"type":"Box","props":{"y":-1,"x":476,"var":"box_cold"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":162,"text":"重新获取","height":35,"fontSize":24,"color":"#2aff01"}},{"type":"Label","props":{"y":0,"x":93,"width":70,"var":"lab_reget","text":"（59）","height":35,"fontSize":24,"color":"#ff0400","align":"left"}}]}]},{"type":"Button","props":{"var":"btn_get_code","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":42,"width":160,"skin":"dating_ui/denglu/tu_hqyzm.png","height":35}}]},{"type":"Image","props":{"skin":"dating_ui/denglu/xh10000.png","centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":131},{"type":"Image","props":{"skin":"dating_ui/denglu/cg10000.png","centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":139},{"type":"Image","props":{"y":127,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60,"centerX":0},"child":[{"type":"TextInput","props":{"y":15,"x":3,"width":420,"var":"txt_phone","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请输入手机号…","maxChars":11,"height":30,"fontSize":26,"color":"#e9e9fb"}}]},{"type":"Image","props":{"y":214,"x":112,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60},"compId":162,"child":[{"type":"TextInput","props":{"y":15,"x":3,"width":420,"var":"txt_code","valign":"middle","type":"text","restrict":"0-9","promptColor":"#60594e","prompt":"请输入验证码…","maxChars":15,"height":30,"fontSize":26,"color":"#e9e9fb"},"compId":48}]},{"type":"Label","props":{"y":228,"x":121,"width":420,"var":"txt_warn","valign":"middle","text":"验证码错误，请检查并重新输入","height":35,"fontSize":26,"color":"#ff0e0a","alpha":0,"align":"left"},"compId":140},{"type":"Button","props":{"y":135,"x":510,"var":"btn_phone_clear","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png"}},{"type":"Image","props":{"y":215,"x":112,"skin":"dating_ui/tongyong/tu_srkt2.png","height":60,"alpha":0},"compId":172},{"type":"Label","props":{"width":150,"var":"lab_kefu","underline":true,"text":"联系客服修改","right":40,"height":24,"fontSize":20,"color":"#0df83c","bottom":53,"align":"right"}}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":131,"keyframes":{"skin":[{"value":"dating_ui/denglu/xh10000.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":0},{"value":"dating_ui/denglu/xh10000.png","tweenMethod":"linearNone","tween":false,"target":131,"label":null,"key":"skin","index":2},{"value":"dating_ui/denglu/xh10001.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":4},{"value":"dating_ui/denglu/xh10002.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":6},{"value":"dating_ui/denglu/xh10003.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":8},{"value":"dating_ui/denglu/xh10004.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":10},{"value":"dating_ui/denglu/xh10005.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":12},{"value":"dating_ui/denglu/xh10006.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":14},{"value":"dating_ui/denglu/xh10007.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":16},{"value":"dating_ui/denglu/xh10008.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":18},{"value":"dating_ui/denglu/xh10009.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":20},{"value":"dating_ui/denglu/xh10010.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":22},{"value":"dating_ui/denglu/xh10011.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":24},{"value":"dating_ui/denglu/xh10012.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":26},{"value":"dating_ui/denglu/xh10013.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":28},{"value":"dating_ui/denglu/xh10014.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":30},{"value":"dating_ui/denglu/xh10015.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":32},{"value":"dating_ui/denglu/xh10016.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":34},{"value":"dating_ui/denglu/xh10017.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":36},{"value":"dating_ui/denglu/xh10018.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":38},{"value":"dating_ui/denglu/xh10019.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":40},{"value":"dating_ui/denglu/xh10020.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":42},{"value":"dating_ui/denglu/xh10021.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":44},{"value":"dating_ui/denglu/xh10022.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":46},{"value":"dating_ui/denglu/xh10023.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":48},{"value":"dating_ui/denglu/xh10024.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":50},{"value":"dating_ui/denglu/xh10025.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":52},{"value":"dating_ui/denglu/xh10026.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":54},{"value":"dating_ui/denglu/xh10027.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":56},{"value":"dating_ui/denglu/xh10028.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":58},{"value":"dating_ui/denglu/xh10029.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":60},{"value":"dating_ui/denglu/xh10030.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":62},{"value":"dating_ui/denglu/xh10031.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":64},{"value":"dating_ui/denglu/xh10032.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":66},{"value":"dating_ui/denglu/xh10033.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":68},{"value":"dating_ui/denglu/xh10034.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":70},{"value":"dating_ui/denglu/xh10035.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":72},{"value":"dating_ui/denglu/xh10036.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":74},{"value":"dating_ui/denglu/xh10037.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":76}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":131,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":131,"key":"alpha","index":1}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":120,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"label":null,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":120,"label":null,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":21}]}},{"target":140,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":140,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":140,"label":null,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":false,"target":140,"key":"alpha","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":140,"key":"alpha","index":40}]}},{"target":162,"keyframes":{"x":[{"value":112,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":0},{"value":107,"tweenMethod":"linearNone","tween":true,"target":162,"label":null,"key":"x","index":3},{"value":103,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":4},{"value":100,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":5},{"value":112,"tweenMethod":"linearNone","tween":true,"target":162,"label":null,"key":"x","index":7},{"value":111,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":9},{"value":112,"tweenMethod":"linearNone","tween":true,"target":162,"label":null,"key":"x","index":11}]}},{"target":172,"keyframes":{"x":[{"value":112,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":0},{"value":107,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":3},{"value":103,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":4},{"value":100,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":5},{"value":112,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":7},{"value":111,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":9},{"value":112,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":12}]}},{"target":48,"keyframes":{"promptColor":[{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":48,"key":"promptColor","index":0},{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":48,"key":"promptColor","index":25}]}},{"target":109,"keyframes":{"promptColor":[{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":109,"key":"promptColor","index":0},{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":109,"key":"promptColor","index":25}]}},{"target":111,"keyframes":{"promptColor":[{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":111,"key":"promptColor","index":0},{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":111,"key":"promptColor","index":25}]}},{"target":77,"keyframes":{"promptColor":[{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":77,"key":"promptColor","index":0},{"value":"#4e3c2c","tweenMethod":"linearNone","tween":false,"target":77,"key":"promptColor","index":25}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":139,"keyframes":{"skin":[{"value":"dating_ui/denglu/cg10000.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":0},{"value":"dating_ui/denglu/cg10001.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":2},{"value":"dating_ui/denglu/cg10002.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":4},{"value":"dating_ui/denglu/cg10003.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":6},{"value":"dating_ui/denglu/cg10004.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":8},{"value":"dating_ui/denglu/cg10005.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":10},{"value":"dating_ui/denglu/cg10006.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":139,"key":"alpha","index":0}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":148,"keyframes":{"x":[{"value":112,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":2},{"value":106,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":4},{"value":114,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":6},{"value":112,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":8}]}},{"target":173,"keyframes":{"x":[{"value":112,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":2},{"value":106,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":4},{"value":114,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":6},{"value":112,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":8}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":173,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":173,"key":"alpha","index":10}]}},{"target":175,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":175,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":175,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":175,"key":"alpha","index":38}]}}],"name":"ani4","id":4,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.DengLuBD1UI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class DengLuYKUI extends View {
		public btn_sj:Laya.Button;
		public txt_sj:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0},"child":[{"type":"XiaoKuang","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-20,"x":-166,"top":20,"skin":"dating_ui/denglu/tu_yk.png","centerX":0}},{"type":"Button","props":{"y":-20,"x":-166,"width":244,"var":"btn_sj","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":17,"skin":"dating_ui/shezhi/tu_sz.png","centerX":0}}]}]},{"type":"Box","props":{"width":627,"height":206,"centerY":-30,"centerX":0},"child":[{"type":"Label","props":{"y":172,"x":92,"wordWrap":true,"width":199,"var":"txt_sj","underline":true,"text":"升级为正式账号","leading":6,"height":30,"fontSize":27,"color":"#65d67d"}},{"type":"Label","props":{"x":56,"wordWrap":true,"width":302,"text":"亲爱的玩家，您正在使用","leading":6,"height":30,"fontSize":27,"color":"#c8bc9f"}},{"type":"Label","props":{"x":359,"wordWrap":true,"width":115,"text":"游客模式","leading":6,"height":30,"fontSize":27,"color":"#ff3936"}},{"type":"Label","props":{"x":469,"wordWrap":true,"width":146,"text":"进行游戏，","leading":6,"height":30,"fontSize":27,"color":"#c8bc9f"}},{"type":"Label","props":{"y":36,"x":22,"wordWrap":true,"width":594,"text":"该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此曹成的损失，本平台将不承担任何责任。","leading":6,"height":111,"fontSize":27,"color":"#c8bc9f"}},{"type":"Label","props":{"y":136,"x":50,"wordWrap":true,"width":570,"text":"为保证您的虚拟财产安全，我们强烈建议您绑定","leading":6,"height":36,"fontSize":27,"color":"#c8bc9f"}},{"type":"Label","props":{"y":172,"x":8,"wordWrap":true,"width":120,"text":"手机号","leading":6,"height":36,"fontSize":27,"color":"#c8bc9f"}}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.DengLuYKUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class FangKa_ChuangJianUI extends View {
		public img_title:Laya.Image;
		public box_round0:Laya.Box;
		public cb_round0:Laya.CheckBox;
		public txt_round0:laya.display.Text;
		public box_round1:Laya.Box;
		public cb_round1:Laya.CheckBox;
		public txt_round1:laya.display.Text;
		public box_round2:Laya.Box;
		public cb_round2:Laya.CheckBox;
		public txt_round2:laya.display.Text;
		public box_round3:Laya.Box;
		public cb_round3:Laya.CheckBox;
		public txt_round3:laya.display.Text;
		public btn_create:Laya.Button;
		public txt_money:laya.display.Text;
		public btn_tc:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0},"child":[{"type":"XiaoKuang","props":{"y":-142,"x":-308,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Image","props":{"y":71,"x":28,"width":622,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":260}},{"type":"Image","props":{"y":20,"var":"img_title","skin":"dating_ui/fk/tit_qznn.png","centerX":0}},{"type":"Box","props":{"y":0,"x":0,"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":200,"x":64,"width":109,"var":"box_round0","height":54},"child":[{"type":"CheckBox","props":{"y":15,"x":10,"var":"cb_round0","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":46,"width":49,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffeda6","align":"left"}}]},{"type":"Box","props":{"y":200,"x":204,"width":109,"var":"box_round1","height":54},"child":[{"type":"CheckBox","props":{"y":15,"x":10,"var":"cb_round1","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":46,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffeda6","align":"left"}}]},{"type":"Box","props":{"y":200,"x":344,"width":109,"var":"box_round2","height":54},"child":[{"type":"CheckBox","props":{"y":15,"x":10,"var":"cb_round2","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":46,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffeda6","align":"left"}}]},{"type":"Box","props":{"y":200,"x":484,"width":109,"var":"box_round3","height":54},"child":[{"type":"CheckBox","props":{"y":15,"x":10,"var":"cb_round3","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":46,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffeda6","align":"left"}}]},{"type":"Button","props":{"var":"btn_create","top":348,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":58,"skin":"dating_ui/fk/tu_cjfj.png"}}]},{"type":"Text","props":{"y":123,"x":211,"width":0,"text":"请选择房间类型","height":0,"fontSize":35,"color":"#eadcb6"}},{"type":"Box","props":{"y":365,"x":453,"width":203,"height":41},"child":[{"type":"Image","props":{"y":20,"x":148,"skin":"dating_ui/fk/tu_d3.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":142,"width":47,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":21,"x":112,"skin":"dating_ui/fk/icon_money.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":7,"x":4,"width":99,"text":"房主支付","height":31,"fontSize":22,"color":"#ffeda6"}}]}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_tc","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.FangKa_ChuangJianUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class FangKa_GoUI extends View {
		public btn_start:Laya.Button;
		public btn_invite:Laya.Button;
		public btn_dismiss:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":360,"x":640,"width":187,"var":"btn_start","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_2.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/jiaru/tu_ksyx.png","centerY":-7,"centerX":0}}]},{"type":"Button","props":{"x":420,"var":"btn_invite","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_5.png","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/jiaru/tu_yqhy.png","centerY":-7,"centerX":0}}]},{"type":"Button","props":{"x":860,"width":187,"var":"btn_dismiss","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_3.png","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":80,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/jiaru/tu_jsfj.png","centerY":-7,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.FangKa_GoUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class FenXiangUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_yuan:Laya.Image;
		public clip_money:Laya.Clip;
		public btn_fxq:Laya.Box;
		public btn_wxhy:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":741,"height":670,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"dating_ui/fenxiang/tu_fx.png","centerY":-17,"centerX":-6}},{"type":"Image","props":{"y":349,"x":535,"var":"img_yuan","skin":"dating_ui/fenxiang/tu_yuan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":261,"x":361,"var":"clip_money","skin":"dating_ui/fenxiang/clip_yuan.png","rotation":1,"index":0,"clipX":10}},{"type":"Box","props":{"y":467,"x":422,"width":244,"var":"btn_fxq","height":70},"child":[{"type":"Button","props":{"y":0,"width":244,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0}},{"type":"Image","props":{"skin":"dating_ui/fenxiang/tu_fxhy.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":468,"x":72,"width":246,"var":"btn_wxhy","height":70},"child":[{"type":"Button","props":{"y":0,"x":1,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_lsan.png"}},{"type":"Image","props":{"skin":"dating_ui/fenxiang/tu_fxpyq.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":3,"x":290,"skin":"dating_ui/tongyong/tu_gxcd1.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":81},{"type":"Image","props":{"y":46,"x":408,"skin":"dating_ui/tongyong/tu_gxcd2.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":82},{"type":"Image","props":{"y":137,"x":471,"skin":"dating_ui/tongyong/tu_gxcd3.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":83},{"type":"Image","props":{"y":149,"x":206,"skin":"dating_ui/tongyong/tu_gxcd4.png","anchorY":0.5,"anchorX":0.5},"compId":84},{"type":"Button","props":{"y":119,"x":703,"var":"btn_close","stateNum":1,"skin":"dating_ui/fenxiang/btn_fh.png","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":81,"keyframes":{"y":[{"value":-93,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":0},{"value":413,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":100}],"x":[{"value":292,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":0},{"value":184,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":100}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":0},{"value":94,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":100}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":100}]}},{"target":82,"keyframes":{"y":[{"value":-52,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":0},{"value":436,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":90}],"x":[{"value":412,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":0},{"value":454,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":90}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":0},{"value":150,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":90}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":79},{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":90}]}},{"target":83,"keyframes":{"y":[{"value":18,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":0},{"value":123,"tweenMethod":"linearNone","tween":true,"target":83,"label":null,"key":"y","index":18},{"value":459,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":110}],"x":[{"value":484,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":0},{"value":471,"tweenMethod":"linearNone","tween":true,"target":83,"label":null,"key":"x","index":18},{"value":525,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":110}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"label":null,"key":"rotation","index":18},{"value":159,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":110}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"label":null,"key":"alpha","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":100},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":110}]}},{"target":84,"keyframes":{"y":[{"value":-24,"tweenMethod":"linearNone","tween":true,"target":84,"key":"y","index":0},{"value":288,"tweenMethod":"linearNone","tween":true,"target":84,"key":"y","index":93}],"x":[{"value":196,"tweenMethod":"linearNone","tween":true,"target":84,"key":"x","index":0},{"value":136,"tweenMethod":"linearNone","tween":true,"target":84,"key":"x","index":93}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":84,"key":"rotation","index":0},{"value":172,"tweenMethod":"linearNone","tween":true,"target":84,"key":"rotation","index":93}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":82},{"value":0,"tweenMethod":"linearNone","tween":true,"target":84,"key":"alpha","index":93}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.FenXiangUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class GeRenUI extends View {
		public btn_close:Laya.Button;
		public list_tab:Laya.List;
		public box0:Laya.Box;
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public lb_vip:Laya.Label;
		public btn_head:Laya.Button;
		public txt_nickname:laya.display.Text;
		public btn_changge_nc:Laya.Button;
		public txt_id:laya.display.Text;
		public btn_copy:Laya.Button;
		public txt_money:laya.display.Text;
		public btn_recharge:Laya.Button;
		public box_items:Laya.Box;
		public box_wx:Laya.Box;
		public txt_wx:laya.display.Text;
		public btn_bindwx:Laya.Button;
		public box_mobile:Laya.Box;
		public btn_bind_phone:Laya.Button;
		public txt_phone:laya.display.Text;
		public box1:Laya.Box;
		public list_bb:Laya.List;
		public txt_no:Laya.Image;
		public box_btn:Laya.Box;
		public btn_0:Laya.Box;
		public btn_select0:Laya.Button;
		public btn_day0:Laya.Button;
		public lb_0:Laya.Label;
		public btn_1:Laya.Box;
		public btn_select1:Laya.Button;
		public btn_day1:Laya.Button;
		public lb_1:Laya.Label;
		public btn_2:Laya.Box;
		public btn_select2:Laya.Button;
		public btn_day2:Laya.Button;
		public lb_2:Laya.Label;
		public btn_3:Laya.Box;
		public btn_select3:Laya.Button;
		public btn_day3:Laya.Button;
		public lb_3:Laya.Label;
		public btn_4:Laya.Box;
		public btn_select4:Laya.Button;
		public btn_day4:Laya.Button;
		public lb_4:Laya.Label;
		public btn_5:Laya.Box;
		public btn_select5:Laya.Button;
		public btn_day5:Laya.Button;
		public lb_5:Laya.Label;
		public btn_6:Laya.Box;
		public btn_select6:Laya.Button;
		public btn_day6:Laya.Button;
		public lb_6:Laya.Label;
		public btn_select:Laya.Box;
		public img_select:Laya.Image;
		public lb_time:Laya.Label;
		public btn_jiantou:Laya.Button;
		public box2:Laya.Box;
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public btn_sound:Laya.CheckBox;
		public btn_music:Laya.CheckBox;
		public btn_set_psd:Laya.Button;
		public btn_change:Laya.Button;
		public box_vesion:Laya.Box;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_clear:Laya.Label;
		public btn_check:Laya.Label;
		public box3:Laya.Box;
		public box4:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"x":-219,"width":1280,"height":720,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang0UI"}},{"type":"Button","props":{"y":28,"x":816,"width":81,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":162,"top":20,"skin":"dating_ui/geren/tit_grzx.png","height":44,"centerX":0}},{"type":"List","props":{"y":72,"x":13,"width":169,"var":"list_tab","selectEnable":true,"repeatX":1,"height":424},"child":[{"type":"GeRen_TabRender","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.GeRen_TabRenderUI"}}]},{"type":"Box","props":{"y":295,"x":508,"width":648,"var":"box0","height":448,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":114,"x":109.5,"width":159,"skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"12,12,12,12","height":196,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":121,"x":33,"width":34,"skin":"dating_ui/geren/tu_vip.png","height":18,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":121,"x":127,"width":34,"skin":"dating_ui/geren/tu_vip.png","scaleX":-1,"height":18,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":59,"x":80,"width":72,"var":"img_head","skin":"dating_ui/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":56,"x":80,"width":98,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk3.png","scaleY":0.9,"scaleX":0.9,"height":98,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":120,"x":81,"width":55,"var":"lb_vip","valign":"middle","text":"VIP10","height":20,"fontSize":20,"color":"#f6d9a6","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":143,"x":22,"width":115,"var":"btn_head","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_czje0.png","height":38},"child":[{"type":"Image","props":{"y":9,"x":18,"width":79,"skin":"dating_ui/geren/tu_sztx.png","height":20}}]}]},{"type":"Image","props":{"y":-2,"x":0,"width":647,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":238}},{"type":"Image","props":{"x":0,"width":648,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":153}},{"type":"Image","props":{"y":45,"x":407.5,"width":423,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":58,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":17,"width":30,"skin":"dating_ui/geren/tu_gerne.png","height":34}},{"type":"Text","props":{"y":16,"x":82,"width":286,"var":"txt_nickname","valign":"middle","text":"453453","overflow":"hidden","height":25,"fontSize":25,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":28,"x":392,"width":60,"var":"btn_changge_nc","stateNum":1,"skin":"dating_ui/geren/btn_xg1.png","scaleY":0.8,"scaleX":0.8,"height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":63,"width":2,"skin":"dating_ui/tongyong/di/tu_8.png","height":57}}]},{"type":"Image","props":{"y":117,"x":407.5,"width":423,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":58,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":16,"x":82,"width":286,"var":"txt_id","valign":"middle","text":"13541244","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":28,"x":392,"width":60,"var":"btn_copy","stateNum":1,"skin":"dating_ui/geren/btn_fz1.png","scaleY":0.8,"scaleX":0.8,"height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":19,"x":18,"width":27,"skin":"dating_ui/geren/tu_id.png","height":19}},{"type":"Image","props":{"x":63,"width":2,"skin":"dating_ui/tongyong/di/tu_8.png","height":57}}]},{"type":"Image","props":{"y":182,"x":407.5,"width":423,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":58,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":25,"x":36,"width":64,"skin":"dating_ui/tongyong/icon_money1.png","scaleY":0.65,"scaleX":0.65,"height":62,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":16,"x":82,"width":286,"var":"txt_money","valign":"middle","text":"1234.4","height":25,"fontSize":25,"color":"#ffff9c","align":"left"}},{"type":"Button","props":{"y":28,"x":392,"width":60,"var":"btn_recharge","stateNum":1,"skin":"dating_ui/geren/btn_cz.png","scaleY":0.8,"scaleX":0.8,"height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":63,"width":2,"skin":"dating_ui/tongyong/di/tu_8.png","height":57}}]},{"type":"Box","props":{"y":250,"x":0,"width":648,"var":"box_items","height":200},"child":[{"type":"Box","props":{"x":29,"width":590,"var":"box_wx","top":7,"name":"item0","height":65},"child":[{"type":"Image","props":{"y":0,"x":0,"width":590,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":65}},{"type":"Image","props":{"y":14,"x":15,"width":46,"skin":"dating_ui/geren/tu_weix.png","height":38}},{"type":"Text","props":{"y":19,"x":89,"width":220,"var":"txt_wx","valign":"middle","text":"未绑定微信号","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":32,"width":112,"var":"btn_bindwx","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","sizeGrid":"9,9,13,9","right":10,"height":49,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":24,"x":57,"skin":"dating_ui/geren/tu_bd.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":3,"x":69,"width":2,"skin":"dating_ui/tongyong/di/tu_8.png","height":57}}]},{"type":"Box","props":{"x":29,"width":590,"var":"box_mobile","name":"item2","height":65,"bottom":27},"child":[{"type":"Image","props":{"y":1,"x":0,"width":590,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":65}},{"type":"Image","props":{"y":13,"x":25,"width":26,"skin":"dating_ui/geren/tu_shouji.png","height":40}},{"type":"Button","props":{"y":33,"x":524,"width":112,"var":"btn_bind_phone","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","sizeGrid":"9,9,13,9","height":49,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":27,"width":57,"skin":"dating_ui/geren/tu_bd.png","height":27}}]},{"type":"Text","props":{"y":19,"x":89,"width":220,"var":"txt_phone","valign":"middle","text":"未绑定手机","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":4,"x":69,"width":2,"skin":"dating_ui/tongyong/di/tu_8.png","height":57}}]}]}]},{"type":"Box","props":{"y":294,"x":506,"width":648,"var":"box1","height":451,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":1,"width":647,"skin":"dating_ui/tongyong/di/tu_di1.png","sizeGrid":"0,10,0,10","height":47}},{"type":"Image","props":{"x":1,"width":648,"skin":"dating_ui/tongyong/di/tu_liebiao1.png","sizeGrid":"0,25,0,0","height":45,"bottom":-2}},{"type":"Label","props":{"y":26.5,"x":63,"width":46,"valign":"middle","text":"序号","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":26.5,"x":177,"width":46,"valign":"middle","text":"类型","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":26.5,"x":315,"width":46,"valign":"middle","text":"收支","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":26.5,"x":448,"width":46,"valign":"middle","text":"余额","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":26.5,"x":578,"width":92,"valign":"middle","text":"收支时间","height":22,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":46,"x":0,"width":648,"var":"list_bb","spaceY":1,"height":362,"gray":false,"disabled":false},"child":[{"type":"GeRen1","props":{"y":-1,"x":0,"width":648,"renderType":"render","height":40,"runtime":"ui.ajqp.dating.GeRen1UI"}}]},{"type":"Image","props":{"y":151,"x":264,"width":120,"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png","height":120},"child":[{"type":"Label","props":{"y":123,"x":10,"width":100,"text":"暂无数据","height":25,"fontSize":25,"color":"#58586d"}}]},{"type":"Box","props":{"y":412,"x":526,"width":200,"var":"box_btn","height":271,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"15,15,15,15","height":280}},{"type":"Box","props":{"y":0,"x":0,"width":200,"var":"btn_0","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day0","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_0","text":"2018-09-15","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":37,"x":14,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":39,"x":0,"width":200,"var":"btn_1","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day1","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_1","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":77,"x":0,"width":200,"var":"btn_2","height":40},"child":[{"type":"Button","props":{"y":7,"x":166,"width":27,"var":"btn_select2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day2","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_2","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":116,"x":0,"width":200,"var":"btn_3","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day3","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_3","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-2,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":154,"x":0,"width":200,"var":"btn_4","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"width":27,"var":"btn_select4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day4","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_4","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":193,"x":0,"width":200,"var":"btn_5","height":40},"child":[{"type":"Button","props":{"y":9,"x":166,"width":27,"var":"btn_select5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day5","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_5","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-40,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]},{"type":"Box","props":{"y":231,"x":0,"width":200,"var":"btn_6","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"width":27,"var":"btn_select6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png","height":25}},{"type":"Button","props":{"y":6,"x":7,"width":34,"var":"btn_day6","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png","height":34}},{"type":"Label","props":{"y":11,"x":44,"width":119,"var":"lb_6","height":20,"fontSize":22,"color":"#f6d9a6"}},{"type":"Image","props":{"y":-1,"x":24,"width":172,"skin":"dating_ui/tongyong/di/tu_10.png","height":3,"bottom":0}}]}]},{"type":"Box","props":{"y":413,"x":412,"width":226,"var":"btn_select","height":38},"child":[{"type":"Image","props":{"y":0,"x":0,"width":225,"var":"img_select","skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Button","props":{"y":19,"x":26,"width":40,"stateNum":1,"skin":"dating_ui/tongyong/btn_sj2.png","height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_time","text":"2018-09-15","fontSize":22,"color":"#bfbfbf","centerY":0,"centerX":0}},{"type":"Button","props":{"y":19,"x":199,"width":27,"var":"btn_jiantou","stateNum":1,"skin":"dating_ui/tongyong/btn_jt.png","rotation":0,"height":14,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":295,"x":508,"width":648,"var":"box2","height":448,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":70,"x":0,"width":647,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":261}},{"type":"Image","props":{"width":648,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":51}},{"type":"HSlider","props":{"y":144,"x":302,"width":400,"var":"hslider0","value":0,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,20","showLabel":false,"min":0,"max":100,"height":45,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"HSlider","props":{"y":229,"x":101,"width":400,"var":"hslider1","value":10,"tick":10,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":45,"allowClickBack":true}},{"type":"CheckBox","props":{"y":135,"x":566,"width":100,"var":"btn_sound","skin":"dating_ui/shezhi/btn_guan.png","height":50,"anchorY":0.5,"anchorX":0.5}},{"type":"CheckBox","props":{"y":241,"x":566,"width":100,"var":"btn_music","skin":"dating_ui/shezhi/btn_guan.png","height":50,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":356,"x":30,"width":244,"var":"btn_set_psd","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_lsan.png","height":76},"child":[{"type":"Image","props":{"width":132,"skin":"dating_ui/geren/tu_szmm1.png","height":39,"centerY":-3,"centerX":0}}]},{"type":"Button","props":{"y":356,"x":374,"width":244,"var":"btn_change","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76},"child":[{"type":"Image","props":{"width":133,"skin":"dating_ui/geren/tu_qhzh1.png","height":39,"centerY":-2,"centerX":0}}]},{"type":"Box","props":{"y":36,"x":28,"width":343,"var":"box_vesion","height":20},"child":[{"type":"Box","props":{"y":0,"x":179,"width":176,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#fff9bb","text":"App版本号：","height":18,"fontSize":20,"color":"#fff9bb","align":"right"}},{"type":"Label","props":{"y":0,"x":115,"width":52,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":20,"color":"#fff9bb","align":"left"}}]},{"type":"Box","props":{"y":0,"x":0,"width":177,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":20,"color":"#fff9bb","align":"right"}},{"type":"Label","props":{"y":0,"x":75,"width":75,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":20,"color":"#fff9bb","align":"left"}}]}]},{"type":"Text","props":{"y":123,"x":33,"width":48,"text":"音效","strokeColor":"#cfbf9b","stroke":0.2,"height":24,"fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"Text","props":{"y":231,"x":33,"width":48,"text":"音乐","strokeColor":"#cfbf9b","stroke":0.2,"height":24,"fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"Label","props":{"y":36,"x":531,"width":84,"var":"btn_clear","underline":true,"text":"清除缓存","strokeColor":"#cfbf9b","stroke":0.2,"height":24,"fontSize":20,"color":"#cfbf9b","bold":true,"align":"left"}},{"type":"Label","props":{"y":36,"x":417,"width":84,"var":"btn_check","underline":true,"text":"检查更新","strokeColor":"#cfbf9b","stroke":0.2,"height":24,"fontSize":20,"color":"#cfbf9b","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":294,"x":506,"width":648,"var":"box3","height":448,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":294,"x":506,"width":648,"var":"box4","height":448,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang0UI",ui.ajqp.dating.component.ZhongKuang0UI);
			View.regComponent("ui.ajqp.dating.component.GeRen_TabRenderUI",ui.ajqp.dating.component.GeRen_TabRenderUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.dating.GeRen1UI",ui.ajqp.dating.GeRen1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.GeRenUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class GeRen1UI extends View {
		public img_bg:Laya.Image;
		public txt_index:Laya.Label;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":648,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":648,"var":"img_bg","skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Box","props":{"y":23.5,"x":63,"width":78,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":78,"var":"txt_index","text":"1","height":27,"fontSize":20,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":23.5,"x":177,"width":122,"var":"txt_type","text":"GM命令加钱","height":27,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Box","props":{"y":24,"x":315,"width":106,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":106,"var":"txt_money","text":"1234567.89","height":27,"fontSize":20,"color":"#41fe69","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Box","props":{"y":24,"x":449,"width":106,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":0,"x":0,"width":106,"var":"txt_earn","text":"1234567.89","height":27,"fontSize":20,"color":"#ffffff","centerY":0,"align":"center"}}]},{"type":"Box","props":{"y":23.5,"x":576,"width":104,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":181,"var":"txt_time","text":"16:18:41","height":27,"fontSize":20,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.GeRen1UI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class GeRenNCUI extends View {
		public box:Laya.Box;
		public btn_enter:Laya.Box;
		public box_lb:Laya.Box;
		public txt_label:laya.display.Text;
		public btn_clear:Laya.Button;
		public txt_name:Laya.TextInput;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":674,"var":"box","height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Image","props":{"width":622,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":254,"centerY":-18,"centerX":0}},{"type":"Box","props":{"width":647,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":323,"top":20,"skin":"dating_ui/geren/tit_ggnc.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"x":-84.5,"width":259,"var":"btn_enter","top":350,"height":73,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":119,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"dating_ui/tongyong/tu_qd.png","centerY":-3,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388.5,"var":"box_lb","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"wordWrap":true,"width":358,"var":"txt_label","valign":"middle","text":"由1~5个汉字或1~10位数字/英文组成，","leading":10,"height":23,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Text","props":{"x":331,"wordWrap":true,"width":162,"valign":"middle","text":"仅限更改1次","leading":10,"height":23,"fontSize":20,"color":"#ffd75c","align":"center"}}]},{"type":"Box","props":{"width":450,"height":60,"centerY":-20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":30,"x":225,"width":450,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":29,"x":21,"skin":"dating_ui/geren/tu_gerne.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":30,"x":419,"width":45,"var":"btn_clear","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png","height":45,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":30,"x":193,"width":296,"var":"txt_name","valign":"middle","type":"text","restrict":"\\u4e00-\\u9fa5A-Za-z0-9","promptColor":"#60594e","prompt":"请输入昵称","overflow":"hidden","maxChars":10,"height":30,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":26,"x":634,"width":81,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","height":81,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.GeRenNCUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class GMPageUI extends View {
		public box_gm:Laya.Box;
		public txt_gm:Laya.TextInput;
		public btn_send:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":784,"var":"box_gm","height":56,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":1.5,"width":611,"skin":"dating_ui/tongyong/tu_di8.png","sizeGrid":"10,10,10,10","height":45,"alpha":0.6}},{"type":"TextInput","props":{"y":7.5,"x":18,"width":582,"var":"txt_gm","valign":"middle","promptColor":"#8b8b8b","prompt":"GM命令调试","height":37,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":-12,"x":623,"width":161,"var":"btn_send","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","height":68},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/tu_qd.png","centerY":-4,"centerX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.GMPageUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class HongbaoUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public box_weichai:Laya.Box;
		public img_kuang:Laya.Image;
		public txt_title:Laya.Label;
		public txt_desc:Laya.Label;
		public btn_chai:Laya.Box;
		public box_yichai:Laya.Box;
		public txt_money:Laya.Label;
		public txt_title1:Laya.Label;
		public btn_get:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":574,"x":640,"skin":"dating_ui/hongbao/tu_di.png","centerX":0,"bottom":57,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":345,"x":636,"width":593,"var":"box_weichai","height":410,"anchorY":0.5,"anchorX":0.5},"compId":24,"child":[{"type":"Image","props":{"y":212,"x":297,"skin":"dating_ui/hongbao/tu_hb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":289,"x":25,"var":"img_kuang","skin":"dating_ui/hongbao/tu_dh.png"}},{"type":"Label","props":{"y":43,"width":350,"var":"txt_title","text":"红包标题最多八字","height":42,"fontSize":40,"color":"#ffd600","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":317,"width":507,"var":"txt_desc","text":"这句话一共有二十个字不信你数一下哈哈哈哈","height":29,"fontSize":25,"color":"#ffd600","centerX":2,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Box","props":{"y":190,"x":302,"width":176,"var":"btn_chai","height":142,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":7,"x":-1,"stateNum":1,"skin":"dating_ui/hongbao/btn_cai.png"}},{"type":"Image","props":{"y":71,"x":88,"skin":"dating_ui/hongbao/tu_cai.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"compId":10},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":12},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":16},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":17},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":18},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":19},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20}]}]},{"type":"Box","props":{"y":350,"x":636,"width":593,"var":"box_yichai","height":423,"anchorY":0.5,"anchorX":0.5},"compId":26,"child":[{"type":"Image","props":{"y":178,"x":298,"skin":"dating_ui/hongbao/tu_dk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":166,"x":314,"width":134,"var":"txt_money","text":"1234.56","height":47,"fontSize":36,"color":"#ff0400","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":39,"width":208,"var":"txt_title1","text":"红包标题字","height":42,"fontSize":40,"color":"#ffd600","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":336,"x":296,"var":"btn_get","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_tanchuanganniu.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":97,"skin":"dating_ui/hongbao/tu_lingqu.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dating_ui/hongbao/tu_hx.png","alpha":0}},{"type":"Image","props":{"y":-47,"x":33,"skin":"dating_ui/tongyong/al10011.png","blendMode":"lighter"},"compId":35}]}]},{"type":"Box","props":{"y":236,"x":257,"width":200,"height":320},"child":[{"type":"Image","props":{"y":289,"x":32,"skin":"dating_ui/hongbao/tu_hg.png","scaleY":1.0150000000000001,"scaleX":1.0150000000000001,"rotation":1.75,"blendMode":"lighter","anchorY":1,"anchorX":0},"compId":5},{"type":"Image","props":{"y":258,"x":8,"skin":"dating_ui/hongbao/tu_hdeng.png"}}]},{"type":"Box","props":{"y":238,"x":822,"width":200,"height":320},"child":[{"type":"Image","props":{"y":281,"x":169,"skin":"dating_ui/hongbao/tu_guang.png","scaleY":1.025,"scaleX":1.025,"rotation":-2.25,"blendMode":"lighter","anchorY":1,"anchorX":1},"compId":6},{"type":"Image","props":{"y":256,"x":145,"skin":"dating_ui/hongbao/tu_hd.png"}}]},{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Effect_jinbi","props":{"y":1067,"x":-35,"rotation":20,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":36},{"type":"Effect_jinbi","props":{"y":1078,"x":-274,"scaleY":0.9,"scaleX":0.9,"rotation":12,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":41},{"type":"Effect_jinbi","props":{"y":1082,"x":49,"scaleY":0.8,"scaleX":0.8,"rotation":423,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":42},{"type":"Effect_jinbi","props":{"y":1025,"x":-124,"scaleY":0.7,"scaleX":0.7,"rotation":312,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":38},{"type":"Effect_jinbi","props":{"y":934,"x":176,"scaleY":0.6,"scaleX":0.6,"rotation":783,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":40},{"type":"Effect_jinbi","props":{"y":881,"x":342,"scaleY":0.5,"scaleX":0.5,"rotation":786,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":37},{"type":"Effect_jinbi","props":{"y":842,"x":1015,"scaleY":0.4,"scaleX":0.4,"rotation":643,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":39},{"type":"Effect_jinbi","props":{"y":860,"x":293,"scaleY":0.3,"scaleX":0.3,"rotation":137,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":43},{"type":"Effect_jinbi","props":{"y":908,"x":932,"scaleY":0.7,"scaleX":0.7,"rotation":312,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":44},{"type":"Effect_jinbi","props":{"y":868,"x":1148,"scaleY":0.7,"scaleX":0.7,"rotation":312,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":45},{"type":"Effect_jinbi","props":{"y":992,"x":1116,"rotation":20,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":47},{"type":"Effect_jinbi","props":{"y":955,"x":1012,"rotation":20,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":48},{"type":"Effect_jinbi","props":{"y":1074,"x":977,"scaleY":0.8,"scaleX":0.8,"rotation":423,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":49},{"type":"Effect_jinbi","props":{"y":903,"x":1266,"scaleY":0.8,"scaleX":0.8,"rotation":423,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":50},{"type":"Effect_jinbi","props":{"y":960,"x":1297,"scaleY":0.5,"scaleX":0.5,"rotation":786,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":51},{"type":"Effect_jinbi","props":{"y":967,"x":1049,"scaleY":0.5,"scaleX":0.5,"rotation":786,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":52},{"type":"Effect_jinbi","props":{"y":918,"x":1221,"scaleY":0.5,"scaleX":0.5,"rotation":786,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":53},{"type":"Effect_jinbi","props":{"y":1162,"x":-136,"rotation":20,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":54},{"type":"Effect_jinbi","props":{"y":952,"x":637,"scaleY":0.8,"scaleX":0.8,"rotation":312,"anchorY":0.5,"anchorX":0.5,"alpha":0,"runtime":"ui.ajqp.dating.component.Effect_jinbiUI"},"compId":55}]},{"type":"Image","props":{"y":324,"x":639,"skin":"dating_ui/hongbao/10011.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":23}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"rotation","index":80}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":-45,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"rotation","index":80}]}},{"target":12,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":15}]}},{"target":16,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"scaleY","index":10},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleY","index":25}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"scaleX","index":10},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleX","index":25}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":16,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":25}]}},{"target":17,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":23},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":38}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":23},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":38}]}},{"target":18,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":36},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":51}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":36},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":51}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":51}]}},{"target":19,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleY","index":49},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleY","index":64}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleX","index":49},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleX","index":64}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":49},{"value":0,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":64}]}},{"target":20,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":62},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":77}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":62},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":77}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":77}]}},{"target":10,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":10},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":20},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":27},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":30},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":40},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":47},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":50},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":57},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":60},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":67},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":70},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":77},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":10},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":20},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":27},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":30},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":40},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":47},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":50},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":57},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":60},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":67},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":70},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":77},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":23,"keyframes":{"skin":[{"value":"dating_ui/hongbao/10000.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":0},{"value":"dating_ui/hongbao/10000.png","tweenMethod":"linearNone","tween":false,"target":23,"label":null,"key":"skin","index":2},{"value":"dating_ui/hongbao/10001.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":4},{"value":"dating_ui/hongbao/10002.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":6},{"value":"dating_ui/hongbao/10003.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":8},{"value":"dating_ui/hongbao/10004.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":10},{"value":"dating_ui/hongbao/10005.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":12},{"value":"dating_ui/hongbao/10006.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":14},{"value":"dating_ui/hongbao/10007.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":16},{"value":"dating_ui/hongbao/10008.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":18},{"value":"dating_ui/hongbao/10009.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":20},{"value":"dating_ui/hongbao/10010.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":22},{"value":"dating_ui/hongbao/10011.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":24}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"label":null,"key":"alpha","index":2},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":25}]}},{"target":24,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"label":null,"key":"visible","index":4}]}},{"target":26,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":26,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":26,"label":null,"key":"visible","index":3},{"value":true,"tweenMethod":"linearNone","tween":false,"target":26,"label":null,"key":"visible","index":4}]}},{"target":36,"keyframes":{"y":[{"value":323,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":0},{"value":323,"tweenMethod":"linearNone","tween":true,"target":36,"label":null,"key":"y","index":4},{"value":216,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":6},{"value":96,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":8},{"value":10,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":10},{"value":76,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":12},{"value":188,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":14},{"value":333,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":16},{"value":525,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":18},{"value":900,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":20},{"value":1067,"tweenMethod":"linearNone","tween":true,"target":36,"key":"y","index":22}],"x":[{"value":598,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":0},{"value":598,"tweenMethod":"linearNone","tween":true,"target":36,"label":null,"key":"x","index":4},{"value":553,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":6},{"value":472,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":8},{"value":369,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":10},{"value":339,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":12},{"value":285,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":14},{"value":231,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":16},{"value":187,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":18},{"value":9,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":20},{"value":-35,"tweenMethod":"linearNone","tween":true,"target":36,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":36,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":36,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":36,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":36,"key":"alpha","index":23}]}},{"target":41,"keyframes":{"y":[{"value":327,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":0},{"value":327,"tweenMethod":"linearNone","tween":true,"target":41,"label":null,"key":"y","index":4},{"value":240,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":6},{"value":162,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":8},{"value":117,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":10},{"value":152,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":12},{"value":284,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":14},{"value":428,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":16},{"value":610,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":18},{"value":823,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":20},{"value":1078,"tweenMethod":"linearNone","tween":true,"target":41,"key":"y","index":22}],"x":[{"value":503,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":0},{"value":503,"tweenMethod":"linearNone","tween":true,"target":41,"label":null,"key":"x","index":4},{"value":429,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":6},{"value":332,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":8},{"value":255,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":10},{"value":180,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":12},{"value":88,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":14},{"value":46,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":16},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":18},{"value":-205,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":20},{"value":-274,"tweenMethod":"linearNone","tween":true,"target":41,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":41,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":41,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":41,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":41,"key":"alpha","index":23}]}},{"target":42,"keyframes":{"y":[{"value":341,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":0},{"value":341,"tweenMethod":"linearNone","tween":true,"target":42,"label":null,"key":"y","index":4},{"value":257,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":6},{"value":172,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":8},{"value":100,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":10},{"value":174,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":12},{"value":250,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":14},{"value":484,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":16},{"value":610,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":18},{"value":804,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":20},{"value":1082,"tweenMethod":"linearNone","tween":true,"target":42,"key":"y","index":22}],"x":[{"value":554,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":0},{"value":554,"tweenMethod":"linearNone","tween":true,"target":42,"label":null,"key":"x","index":4},{"value":504,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":6},{"value":422,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":8},{"value":378,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":10},{"value":337,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":12},{"value":309,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":14},{"value":253,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":16},{"value":223,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":18},{"value":123,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":20},{"value":49,"tweenMethod":"linearNone","tween":true,"target":42,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":42,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":42,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":42,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":42,"key":"alpha","index":23}]}},{"target":38,"keyframes":{"y":[{"value":300,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":0},{"value":300,"tweenMethod":"linearNone","tween":true,"target":38,"label":null,"key":"y","index":4},{"value":194,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":6},{"value":65,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":8},{"value":20,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":10},{"value":98,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":12},{"value":224,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":14},{"value":336,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":16},{"value":512,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":18},{"value":765,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":20},{"value":1025,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":22}],"x":[{"value":539,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":0},{"value":539,"tweenMethod":"linearNone","tween":true,"target":38,"label":null,"key":"x","index":4},{"value":481,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":6},{"value":383,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":8},{"value":322,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":10},{"value":271,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":12},{"value":215,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":14},{"value":133,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":16},{"value":91,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":18},{"value":-58,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":20},{"value":-124,"tweenMethod":"linearNone","tween":true,"target":38,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":38,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":38,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":38,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":38,"key":"alpha","index":23}]}},{"target":40,"keyframes":{"y":[{"value":358,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":0},{"value":358,"tweenMethod":"linearNone","tween":true,"target":40,"label":null,"key":"y","index":4},{"value":259,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":6},{"value":144,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":8},{"value":65,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":10},{"value":93,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":12},{"value":183,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":14},{"value":355,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":16},{"value":483,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":18},{"value":648,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":20},{"value":934,"tweenMethod":"linearNone","tween":true,"target":40,"key":"y","index":22}],"x":[{"value":619,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":0},{"value":619,"tweenMethod":"linearNone","tween":true,"target":40,"label":null,"key":"x","index":4},{"value":571,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":6},{"value":525,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":8},{"value":467,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":10},{"value":423,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":12},{"value":379,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":14},{"value":335,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":16},{"value":311,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":18},{"value":212,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":20},{"value":176,"tweenMethod":"linearNone","tween":true,"target":40,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":40,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":40,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":40,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":40,"key":"alpha","index":23}]}},{"target":37,"keyframes":{"y":[{"value":332,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":0},{"value":332,"tweenMethod":"linearNone","tween":true,"target":37,"label":null,"key":"y","index":4},{"value":220,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":6},{"value":80,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":8},{"value":41,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":10},{"value":75,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":12},{"value":159,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":14},{"value":277,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":16},{"value":425,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":18},{"value":610,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":20},{"value":881,"tweenMethod":"linearNone","tween":true,"target":37,"key":"y","index":22}],"x":[{"value":658,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":0},{"value":658,"tweenMethod":"linearNone","tween":true,"target":37,"label":null,"key":"x","index":4},{"value":622,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":6},{"value":586,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":8},{"value":582,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":10},{"value":542,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":12},{"value":516,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":14},{"value":480,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":16},{"value":446,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":18},{"value":382,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":20},{"value":342,"tweenMethod":"linearNone","tween":true,"target":37,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":37,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":23}]}},{"target":39,"keyframes":{"y":[{"value":304,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":0},{"value":304,"tweenMethod":"linearNone","tween":true,"target":39,"label":null,"key":"y","index":4},{"value":169,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":6},{"value":21,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":8},{"value":-21,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":10},{"value":6,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":12},{"value":86,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":14},{"value":194,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":16},{"value":334,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":18},{"value":552,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":20},{"value":842,"tweenMethod":"linearNone","tween":true,"target":39,"key":"y","index":22}],"x":[{"value":644,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":0},{"value":644,"tweenMethod":"linearNone","tween":true,"target":39,"label":null,"key":"x","index":4},{"value":622,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":6},{"value":651,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":10},{"value":695,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":12},{"value":761,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":14},{"value":829,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":16},{"value":905,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":18},{"value":965,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":20},{"value":1015,"tweenMethod":"linearNone","tween":true,"target":39,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":39,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":39,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":39,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":39,"key":"alpha","index":23}]}},{"target":43,"keyframes":{"y":[{"value":354,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":0},{"value":354,"tweenMethod":"linearNone","tween":true,"target":43,"label":null,"key":"y","index":4},{"value":237,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":6},{"value":94,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":8},{"value":35,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":10},{"value":33,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":12},{"value":89,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":14},{"value":221,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":16},{"value":349,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":18},{"value":522,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":20},{"value":860,"tweenMethod":"linearNone","tween":true,"target":43,"key":"y","index":22}],"x":[{"value":636,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":0},{"value":636,"tweenMethod":"linearNone","tween":true,"target":43,"label":null,"key":"x","index":4},{"value":597,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":6},{"value":539,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":8},{"value":502,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":10},{"value":478,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":12},{"value":450,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":14},{"value":438,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":16},{"value":402,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":18},{"value":348,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":20},{"value":293,"tweenMethod":"linearNone","tween":true,"target":43,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":43,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":23}]}},{"target":44,"keyframes":{"y":[{"value":298,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":0},{"value":298,"tweenMethod":"linearNone","tween":true,"target":44,"label":null,"key":"y","index":4},{"value":170,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":6},{"value":37,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":8},{"value":49,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":10},{"value":82,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":12},{"value":150,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":14},{"value":282,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":16},{"value":416,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":18},{"value":631,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":20},{"value":908,"tweenMethod":"linearNone","tween":true,"target":44,"key":"y","index":22}],"x":[{"value":694,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":0},{"value":694,"tweenMethod":"linearNone","tween":true,"target":44,"label":null,"key":"x","index":4},{"value":682,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":6},{"value":684,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":8},{"value":738,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":10},{"value":734,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":12},{"value":774,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":14},{"value":832,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":16},{"value":860,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":18},{"value":914,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":20},{"value":932,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":44,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":44,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":44,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"alpha","index":23}]}},{"target":45,"keyframes":{"y":[{"value":353,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":0},{"value":353,"tweenMethod":"linearNone","tween":true,"target":45,"label":null,"key":"y","index":4},{"value":229,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":8},{"value":-43,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":10},{"value":-11,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":12},{"value":81,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":14},{"value":215,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":16},{"value":347,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":18},{"value":593,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":20},{"value":868,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":22}],"x":[{"value":692,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":0},{"value":692,"tweenMethod":"linearNone","tween":true,"target":45,"label":null,"key":"x","index":4},{"value":710,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":6},{"value":716,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":8},{"value":763,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":10},{"value":814,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":12},{"value":868,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":14},{"value":954,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":16},{"value":1008,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":18},{"value":1072,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":20},{"value":1148,"tweenMethod":"linearNone","tween":true,"target":45,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":45,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":23}]}},{"target":47,"keyframes":{"y":[{"value":305,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":0},{"value":305,"tweenMethod":"linearNone","tween":true,"target":47,"label":null,"key":"y","index":4},{"value":176,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":6},{"value":32,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":8},{"value":-24,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":10},{"value":17,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":12},{"value":147,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":14},{"value":304,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":16},{"value":434,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":18},{"value":663,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":20},{"value":992,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":22}],"x":[{"value":751,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":0},{"value":751,"tweenMethod":"linearNone","tween":true,"target":47,"label":null,"key":"x","index":4},{"value":796,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":6},{"value":824,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":8},{"value":879,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":10},{"value":916,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":12},{"value":956,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":14},{"value":978,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":16},{"value":1042,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":18},{"value":1076,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":20},{"value":1116,"tweenMethod":"linearNone","tween":true,"target":47,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":47,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":47,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":47,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":47,"key":"alpha","index":23}]}},{"target":48,"keyframes":{"y":[{"value":358,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":0},{"value":358,"tweenMethod":"linearNone","tween":true,"target":48,"label":null,"key":"y","index":4},{"value":252,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":6},{"value":87,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":8},{"value":39,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":10},{"value":99,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":12},{"value":199,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":14},{"value":348,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":16},{"value":476,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":18},{"value":695,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":20},{"value":955,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":22}],"x":[{"value":659,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":0},{"value":659,"tweenMethod":"linearNone","tween":true,"target":48,"label":null,"key":"x","index":4},{"value":673,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":6},{"value":735,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":8},{"value":778,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":10},{"value":836,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":12},{"value":856,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":14},{"value":904,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":16},{"value":956,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":18},{"value":1014,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":20},{"value":1012,"tweenMethod":"linearNone","tween":true,"target":48,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":23}]}},{"target":49,"keyframes":{"y":[{"value":343,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":0},{"value":343,"tweenMethod":"linearNone","tween":true,"target":49,"label":null,"key":"y","index":4},{"value":261,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":6},{"value":125,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":8},{"value":81,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":10},{"value":124,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":12},{"value":249,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":14},{"value":398,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":16},{"value":516,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":18},{"value":725,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":20},{"value":1074,"tweenMethod":"linearNone","tween":true,"target":49,"key":"y","index":22}],"x":[{"value":722,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":0},{"value":722,"tweenMethod":"linearNone","tween":true,"target":49,"label":null,"key":"x","index":4},{"value":764,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":6},{"value":823,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":8},{"value":865,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":10},{"value":911,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":12},{"value":925,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":14},{"value":933,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":16},{"value":969,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":18},{"value":991,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":20},{"value":977,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":49,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":23}]}},{"target":50,"keyframes":{"y":[{"value":349,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":0},{"value":349,"tweenMethod":"linearNone","tween":true,"target":50,"label":null,"key":"y","index":4},{"value":228,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":6},{"value":108,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":8},{"value":71,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":10},{"value":124,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":12},{"value":238,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":14},{"value":406,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":16},{"value":484,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":18},{"value":651,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":20},{"value":903,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":22}],"x":[{"value":800,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":0},{"value":800,"tweenMethod":"linearNone","tween":true,"target":50,"label":null,"key":"x","index":4},{"value":855,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":6},{"value":939,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":8},{"value":995,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":10},{"value":1039,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":12},{"value":1067,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":14},{"value":1099,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":16},{"value":1177,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":18},{"value":1211,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":20},{"value":1266,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":50,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":23}]}},{"target":51,"keyframes":{"y":[{"value":296,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":0},{"value":296,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"y","index":4},{"value":174,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":6},{"value":38,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":8},{"value":6,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":10},{"value":56,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":12},{"value":148,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":14},{"value":304,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":16},{"value":378,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":18},{"value":545,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":20},{"value":960,"tweenMethod":"linearNone","tween":true,"target":51,"key":"y","index":22}],"x":[{"value":810,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":0},{"value":810,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"x","index":4},{"value":860,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":6},{"value":928,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":8},{"value":958,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":10},{"value":1003,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":12},{"value":1041,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":14},{"value":1077,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":16},{"value":1123,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":18},{"value":1184,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":20},{"value":1297,"tweenMethod":"linearNone","tween":true,"target":51,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":51,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":51,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":51,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":51,"key":"alpha","index":23}]}},{"target":52,"keyframes":{"y":[{"value":363,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":0},{"value":363,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"y","index":4},{"value":290,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":6},{"value":165,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":8},{"value":126,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":10},{"value":182,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":12},{"value":296,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":14},{"value":434,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":16},{"value":528,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":18},{"value":776,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":20},{"value":967,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":22}],"x":[{"value":755,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":0},{"value":755,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"x","index":4},{"value":813,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":6},{"value":897,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":8},{"value":937,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":10},{"value":977,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":12},{"value":989,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":14},{"value":1027,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":18},{"value":1035,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":20},{"value":1049,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":52,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":23}]}},{"target":53,"keyframes":{"y":[{"value":318,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":0},{"value":318,"tweenMethod":"linearNone","tween":true,"target":53,"label":null,"key":"y","index":4},{"value":289,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":6},{"value":193,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":8},{"value":134,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":10},{"value":189,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":12},{"value":317,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":14},{"value":453,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":16},{"value":597,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":18},{"value":802,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":20},{"value":918,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":22}],"x":[{"value":843,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":0},{"value":843,"tweenMethod":"linearNone","tween":true,"target":53,"label":null,"key":"x","index":4},{"value":873,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":6},{"value":959,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":8},{"value":1010,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":10},{"value":1066,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":12},{"value":1104,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":14},{"value":1138,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":16},{"value":1198,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":18},{"value":1206,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":20},{"value":1221,"tweenMethod":"linearNone","tween":true,"target":53,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":53,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":23}]}},{"target":54,"keyframes":{"y":[{"value":299,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":0},{"value":299,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"y","index":4},{"value":305,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":6},{"value":228,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":8},{"value":156,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":10},{"value":197,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":12},{"value":325,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":14},{"value":495,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":16},{"value":649,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":18},{"value":881,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":20},{"value":1162,"tweenMethod":"linearNone","tween":true,"target":54,"key":"y","index":22}],"x":[{"value":477,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":0},{"value":477,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"x","index":4},{"value":438,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":6},{"value":339,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":8},{"value":295,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":10},{"value":241,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":12},{"value":171,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":14},{"value":133,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":16},{"value":71,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":18},{"value":-53,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":20},{"value":-136,"tweenMethod":"linearNone","tween":true,"target":54,"key":"x","index":22}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":54,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":23}]}},{"target":55,"keyframes":{"y":[{"value":365,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":0},{"value":365,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"y","index":4},{"value":196,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":6},{"value":87,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":8},{"value":103,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":10},{"value":166,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":12},{"value":236,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":14},{"value":364,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":16},{"value":478,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":18},{"value":631,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":20},{"value":952,"tweenMethod":"linearNone","tween":true,"target":55,"key":"y","index":22}],"x":[{"value":592,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":0},{"value":592,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"x","index":4},{"value":639,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":6},{"value":637,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":8},{"value":625,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":10},{"value":627,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":12},{"value":633,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":14},{"value":641,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":20},{"value":637,"tweenMethod":"linearNone","tween":true,"target":55,"key":"x","index":22}],"scaleY":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleY","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"scaleY","index":8},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleY","index":10}],"scaleX":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleX","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"scaleX","index":8},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":55,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":23}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":35,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":4},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":8},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":16},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":20},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":28},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":32},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":36},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":40},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":44}]}}],"name":"ani3","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Effect_jinbiUI",ui.ajqp.dating.component.Effect_jinbiUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.HongbaoUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class HuoDeUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public txt_num:Laya.Label;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":640,"skin":"dating_ui/tongyong/tu_gxhd.png","centerY":-8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":197,"x":641,"skin":"dating_ui/tongyong/tu_gxgx.png","blendMode":"lighter","anchorY":1,"anchorX":0.5,"alpha":1},"compId":67},{"type":"Image","props":{"y":59,"x":423,"skin":"dating_ui/tongyong/tu_gxxx.png"}},{"type":"Image","props":{"y":156,"skin":"dating_ui/tongyong/tu_gx.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":352,"x":640,"skin":"dating_ui/huode/tu_hdk0.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":429,"x":640,"wordWrap":true,"width":150,"var":"txt_num","text":"16金币","height":31,"fontSize":28,"color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":561,"wordWrap":true,"width":284,"text":"点击空白处关闭","strokeColor":"#000000","stroke":2,"height":37,"fontSize":32,"color":"#ffffff","centerX":1,"bold":true,"anchorY":0.5,"anchorX":0.5,"alpha":0.8,"align":"center"}},{"type":"Image","props":{"y":352,"width":80,"var":"img","skin":"dating_ui/huode/tu_jb.png","height":76,"centerX":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":100,"x":435,"skin":"dating_ui/tongyong/tu_gxjb1.png"},"compId":76},{"type":"Image","props":{"y":103,"x":818,"skin":"dating_ui/tongyong/tu_gxjb2.png"},"compId":77},{"type":"Image","props":{"y":154,"x":463,"skin":"dating_ui/tongyong/tu_gxjb3.png"},"compId":78},{"type":"Image","props":{"y":172,"x":783,"skin":"dating_ui/tongyong/tu_gxjb4.png"},"compId":79},{"type":"Image","props":{"y":122,"x":619,"skin":"dating_ui/tongyong/al10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":85},{"type":"Image","props":{"y":63,"x":646,"skin":"dating_ui/tongyong/tu_gxcd1.png","rotation":0,"alpha":0},"compId":80},{"type":"Image","props":{"y":78,"x":468,"skin":"dating_ui/tongyong/tu_gxcd2.png","rotation":0,"alpha":0},"compId":81},{"type":"Image","props":{"y":133,"x":576,"skin":"dating_ui/tongyong/tu_gxcd3.png","rotation":0,"alpha":0},"compId":82},{"type":"Image","props":{"y":67,"x":740,"skin":"dating_ui/tongyong/tu_gxcd4.png","rotation":0,"alpha":0},"compId":83},{"type":"Image","props":{"y":353,"x":639,"skin":"dating_ui/tongyong/huode/10001.png","scaleY":1.3,"scaleX":1.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":88}]}],"animations":[{"nodes":[{"target":85,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":4},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":8},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":16},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":20},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":28},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":32},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":36},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":40},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":44}]}},{"target":78,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":0},{"value":142,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":23},{"value":154,"tweenMethod":"linearNone","tween":true,"target":78,"label":null,"key":"y","index":44}]}},{"target":79,"keyframes":{"y":[{"value":172,"tweenMethod":"linearNone","tween":true,"target":79,"key":"y","index":0},{"value":178,"tweenMethod":"linearNone","tween":true,"target":79,"key":"y","index":15},{"value":172,"tweenMethod":"linearNone","tween":true,"target":79,"label":null,"key":"y","index":36}]}},{"target":76,"keyframes":{"y":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"key":"y","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"label":null,"key":"y","index":12},{"value":96,"tweenMethod":"linearNone","tween":true,"target":76,"key":"y","index":29},{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"label":null,"key":"y","index":44}]}},{"target":77,"keyframes":{"y":[{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"key":"y","index":0},{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"label":null,"key":"y","index":5},{"value":110,"tweenMethod":"linearNone","tween":true,"target":77,"key":"y","index":25},{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"label":null,"key":"y","index":39}]}},{"target":81,"keyframes":{"y":[{"value":78,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":0},{"value":251,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":44}],"x":[{"value":468,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":0},{"value":494,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":44}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":0},{"value":42,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":44}]}},{"target":82,"keyframes":{"y":[{"value":133,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":0},{"value":242,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":29},{"value":328,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":36}],"x":[{"value":576,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":0},{"value":598,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":29},{"value":593,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":36}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":0},{"value":55,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":36}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":29},{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":36}]}},{"target":83,"keyframes":{"y":[{"value":67,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":0},{"value":390,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":43}],"x":[{"value":740,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":0},{"value":769,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":43}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":0},{"value":61,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":43}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":43}]}},{"target":80,"keyframes":{"y":[{"value":63,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":0},{"value":158,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":16},{"value":257,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":34}],"x":[{"value":646,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":0},{"value":664,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":16},{"value":678,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":34}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"rotation","index":0},{"value":44,"tweenMethod":"linearNone","tween":true,"target":80,"key":"rotation","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":34}]}},{"target":67,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":23},{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":44}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":88,"keyframes":{"skin":[{"value":"dating_ui/tongyong/huode/10000.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":0},{"value":"dating_ui/tongyong/huode/10001.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":2},{"value":"dating_ui/tongyong/huode/10002.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":4},{"value":"dating_ui/tongyong/huode/10003.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":6},{"value":"dating_ui/tongyong/huode/10004.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":8},{"value":"dating_ui/tongyong/huode/10005.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":10},{"value":"dating_ui/tongyong/huode/10006.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":12},{"value":"dating_ui/tongyong/huode/10007.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":14},{"value":"dating_ui/tongyong/huode/10008.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":16},{"value":"dating_ui/tongyong/huode/10009.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":18},{"value":"dating_ui/tongyong/huode/10010.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":20}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":88,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":88,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":88,"key":"alpha","index":21}]}}],"name":"ani2","id":2,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.HuoDeUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class HuoDongUI extends View {
		public btn_close:Laya.Button;
		public list_tab:Laya.List;
		public btn_tab:Laya.Clip;
		public btn_tab2:Laya.Clip;
		public box_hd:Laya.Box;
		public img_bg:Laya.Image;
		public myhd0:Laya.Panel;
		public txt:Laya.Label;
		public myhd1:Laya.Panel;
		public txt_myhd:Laya.Label;
		public img_myhd:Laya.Image;
		public myhd2:Laya.Panel;
		public btn_qiandao:Laya.Button;
		public box_gg:Laya.Box;
		public panel_wenzi:Laya.Panel;
		public lab_wenzi:Laya.Label;
		public panel_tu:Laya.Panel;
		public img_tu:Laya.Image;
		public panel_wenzitu:Laya.Panel;
		public img_wenzitu:Laya.Image;
		public lab_wenzitu:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"left":-144,"height":720,"alpha":1},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1088,"height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":1088,"skin":"dating_ui/tongyong/tu_kuang.png","sizeGrid":"157,28,34,28","height":600,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":70,"x":12,"width":205,"skin":"dating_ui/tongyong/tu_and.png","sizeGrid":"0,0,20,0","height":518}},{"type":"Image","props":{"x":8,"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","height":67}},{"type":"Image","props":{"width":537,"top":12,"skin":"dating_ui/tongyong/tu_wzd2.png","scaleX":-1,"height":67,"centerX":269}}]}]},{"type":"Button","props":{"y":33,"x":1059,"width":81,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":74,"x":11.5,"width":195,"var":"list_tab","selectEnable":true,"height":513},"child":[{"type":"TeblteRender4","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.TeblteRender4UI"}}]},{"type":"Clip","props":{"y":-8,"var":"btn_tab","skin":"dating_ui/huodong/btn_rmhd1.png","index":2,"clipY":3,"centerX":-132}},{"type":"Clip","props":{"y":-8,"var":"btn_tab2","skin":"dating_ui/huodong/btn_rmhd2.png","index":1,"clipY":3,"centerX":113}},{"type":"Box","props":{"y":82,"x":215,"width":856,"var":"box_hd","height":508},"child":[{"type":"Image","props":{"y":266,"x":1,"width":854,"var":"img_bg","height":232}},{"type":"Panel","props":{"y":1,"x":1,"width":854,"var":"myhd0","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":500},"child":[{"type":"Label","props":{"wordWrap":true,"width":854,"var":"txt","text":"sdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfdssdfsfdadfsdsfdfsfds","padding":"20,20,20,20","leading":12,"height":1209,"fontSize":24,"color":"#c8bc9f","align":"left"}}]},{"type":"Panel","props":{"y":186,"x":1,"width":854,"var":"myhd1","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":232},"child":[{"type":"Label","props":{"wordWrap":true,"width":854,"var":"txt_myhd","text":"asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf","padding":"20,20,20,20","leading":12,"height":1092,"fontSize":24,"color":"#c8bc9f","align":"left"}}]},{"type":"Image","props":{"y":1,"x":1,"width":854,"var":"img_myhd","height":183}},{"type":"Panel","props":{"y":0,"x":1,"width":854,"var":"myhd2","height":497}},{"type":"Button","props":{"y":429,"width":245,"visible":false,"var":"btn_qiandao","stateNum":1,"skin":"dating_ui/huodong/btn_anniu.png","height":91,"centerX":-4},"child":[{"type":"Image","props":{"width":144,"skin":"dating_ui/huodong/tu_ljqd.png","height":37,"centerY":-10,"centerX":0}}]},{"type":"Image","props":{"y":0,"x":2,"width":852,"skin":"dating_ui/huodong/tu_zz.png","sizeGrid":"14,23,31,13","renderType":"mask","height":497}}]},{"type":"Box","props":{"y":82,"x":215,"width":856,"var":"box_gg","height":508},"child":[{"type":"Panel","props":{"y":1,"x":1,"width":852,"var":"panel_wenzi","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":497},"child":[{"type":"Label","props":{"wordWrap":true,"width":854,"var":"lab_wenzi","text":"        欢迎来到我们的游戏，我们秉承公平、公正、安全、稳定的服务宗旨，竭诚为广大牌友提供一个结对公平的在线游戏互动平台。","padding":"20,20,20,20","leading":12,"fontSize":24,"color":"#c8bc9f","align":"left"}}]},{"type":"Panel","props":{"y":1,"x":1,"width":852,"var":"panel_tu","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":497},"child":[{"type":"Image","props":{"y":0,"x":0,"width":852,"var":"img_tu","height":497}}]},{"type":"Panel","props":{"y":1,"x":1,"width":854,"var":"panel_wenzitu","height":498},"child":[{"type":"Image","props":{"y":1,"x":1,"width":852,"var":"img_wenzitu","height":137}},{"type":"Label","props":{"y":143,"x":1,"wordWrap":true,"width":854,"var":"lab_wenzitu","text":"        尊敬的玩家，您好，近期有不法分子冒充【大众棋牌】游戏客服，以【解决游戏问题】为由，向玩家【收取不正当费用】，游戏中心提醒【大众棋牌】玩家们，【大众棋牌】客服绝不会以任何名义向玩家收取费用！","padding":"20,20,20,20","leading":12,"height":123,"fontSize":24,"color":"#c8bc9f","align":"left"}}]},{"type":"Image","props":{"y":0,"x":2,"width":852,"skin":"dating_ui/huodong/tu_zz.png","sizeGrid":"14,23,31,13","renderType":"mask","height":497}}]},{"type":"Image","props":{"y":572,"x":0,"width":28,"skin":"dating_ui/tongyong/tu_jiao.png","height":28}},{"type":"Image","props":{"y":600,"x":1060,"width":28,"skin":"dating_ui/tongyong/tu_jiao.png","rotation":-90,"height":28}},{"type":"Image","props":{"y":81,"x":216,"width":854,"skin":"dating_ui/huodong/tu_k.png","sizeGrid":"26,59,39,29","height":500}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.TeblteRender4UI",ui.ajqp.dating.component.TeblteRender4UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.HuoDongUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class JianPanUI extends View {
		public box:Laya.Box;
		public img_bg:Laya.Image;
		public box_number:Laya.Box;
		public btn1:Laya.Button;
		public btn2:Laya.Button;
		public btn3:Laya.Button;
		public btn_pop:Laya.Button;
		public btn4:Laya.Button;
		public btn5:Laya.Button;
		public btn6:Laya.Button;
		public btn7:Laya.Button;
		public btn8:Laya.Button;
		public btn9:Laya.Button;
		public btn_enter:Laya.Button;
		public btn0:Laya.Button;
		public btn_clear:Laya.Button;
		public btn_clears:Laya.Box;
		public btn_clear1:Laya.Button;
		public btn_point:Laya.Button;
		public box_english:Laya.Box;
		public btn_change:Laya.Button;
		public btn_enter1:Laya.Button;
		public btn_e_1:Laya.Button;
		public btn_e_2:Laya.Button;
		public btn_e_3:Laya.Button;
		public btn_e_4:Laya.Button;
		public btn_e_5:Laya.Button;
		public btn_e_6:Laya.Button;
		public btn_e_7:Laya.Button;
		public btn_e_8:Laya.Button;
		public btn_e_9:Laya.Button;
		public btn_e_0:Laya.Button;
		public btn_e_10:Laya.Button;
		public btn_e_11:Laya.Button;
		public btn_e_12:Laya.Button;
		public btn_e_13:Laya.Button;
		public btn_e_14:Laya.Button;
		public btn_e_15:Laya.Button;
		public btn_e_16:Laya.Button;
		public btn_e_17:Laya.Button;
		public btn_e_18:Laya.Button;
		public btn_e_19:Laya.Button;
		public btn_e_20:Laya.Button;
		public btn_e_21:Laya.Button;
		public btn_e_22:Laya.Button;
		public btn_e_23:Laya.Button;
		public btn_e_24:Laya.Button;
		public btn_e_25:Laya.Button;
		public btn_e_26:Laya.Button;
		public btn_e_27:Laya.Button;
		public btn_e_28:Laya.Button;
		public btn_pop1:Laya.Button;
		public btn_e_29:Laya.Button;
		public btn_e_30:Laya.Button;
		public btn_e_31:Laya.Button;
		public btn_e_32:Laya.Button;
		public btn_e_33:Laya.Button;
		public btn_e_34:Laya.Button;
		public btn_e_35:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box","height":331,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":165,"x":641,"width":1282,"var":"img_bg","skin":"dating_ui/baoxianxiang/tu_d1.png","sizeGrid":"0,2,0,1","height":331,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":809,"var":"box_number","height":330,"centerY":-1,"centerX":0},"child":[{"type":"Button","props":{"y":40,"x":100,"width":200,"var":"btn1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"1","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":303,"width":200,"var":"btn2","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"2","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":506,"width":200,"var":"btn3","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"3","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":82,"x":709,"width":200,"var":"btn_pop","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"退格","height":163,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":100,"width":200,"var":"btn4","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"4","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":303,"width":200,"var":"btn5","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"5","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":506,"width":200,"var":"btn6","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"6","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":100,"width":200,"var":"btn7","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"7","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":303,"width":200,"var":"btn8","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"8","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":506,"width":200,"var":"btn9","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"9","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":249,"x":709,"width":200,"var":"btn_enter","skin":"dating_ui/baoxianxiang/btn_aa1.png","labelSize":40,"labelColors":"#ffffff","label":"确定","height":165,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":290,"x":100,"width":200,"var":"btn0","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"0","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":290,"x":406,"width":403,"var":"btn_clear","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"清除","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":250,"x":203,"width":406,"var":"btn_clears","height":82},"child":[{"type":"Button","props":{"y":40,"x":303,"width":200,"var":"btn_clear1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"清除","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":100,"width":200,"var":"btn_point","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":".","height":80,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":10,"x":10,"var":"box_english","right":0,"left":0,"height":330,"centerY":0},"child":[{"type":"Button","props":{"y":287,"x":121,"width":182,"var":"btn_change","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":30,"label":"大小写切换","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":1165,"width":184,"var":"btn_enter1","skin":"dating_ui/baoxianxiang/btn_aa1.png","labelSize":40,"labelColors":"#ffffff","label":"确定","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":90,"width":120,"var":"btn_e_1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"1","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":213,"width":120,"var":"btn_e_2","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"2","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":336,"width":120,"var":"btn_e_3","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"3","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":459,"width":120,"var":"btn_e_4","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"4","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":582,"width":120,"var":"btn_e_5","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"5","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":705,"width":120,"var":"btn_e_6","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"6","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":828,"width":120,"var":"btn_e_7","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"7","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":950,"width":120,"var":"btn_e_8","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"8","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":1073,"width":120,"var":"btn_e_9","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"9","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":1196,"width":120,"var":"btn_e_0","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"0","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":90,"width":120,"var":"btn_e_10","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"q","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":213,"width":120,"var":"btn_e_11","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"w","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":336,"width":120,"var":"btn_e_12","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"e","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":459,"width":120,"var":"btn_e_13","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"r","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":582,"width":120,"var":"btn_e_14","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"t","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":705,"width":120,"var":"btn_e_15","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"y","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":828,"width":120,"var":"btn_e_16","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"u","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":950,"width":120,"var":"btn_e_17","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"i","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":1073,"width":120,"var":"btn_e_18","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"o","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":1196,"width":120,"var":"btn_e_19","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"p","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":90,"width":120,"var":"btn_e_20","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"a","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":213,"width":120,"var":"btn_e_21","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"s","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":336,"width":120,"var":"btn_e_22","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"d","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":459,"width":120,"var":"btn_e_23","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"f","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":582,"width":120,"var":"btn_e_24","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"g","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":705,"width":120,"var":"btn_e_25","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"h","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":828,"width":120,"var":"btn_e_26","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"j","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":950,"width":120,"var":"btn_e_27","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"k","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":1073,"width":120,"var":"btn_e_28","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"l","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":1196,"width":120,"var":"btn_pop1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":30,"label":"退格","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":274,"width":120,"var":"btn_e_29","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"z","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":397,"width":120,"var":"btn_e_30","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"x","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":520,"width":120,"var":"btn_e_31","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"c","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":643,"width":120,"var":"btn_e_32","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"v","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":766,"width":120,"var":"btn_e_33","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"b","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":888,"width":120,"var":"btn_e_34","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"n","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":1011,"width":120,"var":"btn_e_35","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"m","height":80,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.JianPanUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class JiaRuUI extends View {
		public clip_1:Laya.Clip;
		public clip_2:Laya.Clip;
		public clip_3:Laya.Clip;
		public clip_4:Laya.Clip;
		public clip_5:Laya.Clip;
		public clip_6:Laya.Clip;
		public btn_close:Laya.Button;
		public btn_1:Laya.Button;
		public btn_2:Laya.Button;
		public btn_3:Laya.Button;
		public btn_4:Laya.Button;
		public btn_5:Laya.Button;
		public btn_6:Laya.Button;
		public btn_7:Laya.Button;
		public btn_8:Laya.Button;
		public btn_9:Laya.Button;
		public btn_re:Laya.Button;
		public btn_0:Laya.Button;
		public btn_del:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":824,"height":533,"centerY":0,"centerX":0},"child":[{"type":"ZhongKuang1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Box","props":{"y":151,"x":53,"centerX":0},"child":[{"type":"Image","props":{"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"x":128,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"x":256,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"x":383,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"x":511,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"x":639,"skin":"dating_ui/jiaru/srd.png"}}]},{"type":"Image","props":{"y":166,"x":4,"width":818,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":352}},{"type":"Clip","props":{"y":94,"x":69,"var":"clip_1","skin":"dating_ui/jiaru/clip_num.png","index":9,"clipX":10}},{"type":"Clip","props":{"y":94,"x":197,"visible":false,"var":"clip_2","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":325,"visible":false,"var":"clip_3","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":450,"visible":false,"var":"clip_4","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":580,"visible":false,"var":"clip_5","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":711,"visible":false,"var":"clip_6","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Image","props":{"top":20,"skin":"dating_ui/fk/tit_jrfj.png","centerX":0}},{"type":"Button","props":{"y":28,"x":807,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"top":170,"centerX":0},"child":[{"type":"Button","props":{"var":"btn_1","stateNum":1,"skin":"dating_ui/jiaru/1.png"}},{"type":"Button","props":{"x":249,"var":"btn_2","stateNum":1,"skin":"dating_ui/jiaru/2.png"}},{"type":"Button","props":{"y":1,"x":499,"var":"btn_3","stateNum":1,"skin":"dating_ui/jiaru/3.png"}},{"type":"Button","props":{"y":81,"var":"btn_4","stateNum":1,"skin":"dating_ui/jiaru/4.png"}},{"type":"Button","props":{"y":81,"x":249,"var":"btn_5","stateNum":1,"skin":"dating_ui/jiaru/5.png"}},{"type":"Button","props":{"y":81,"x":498,"var":"btn_6","stateNum":1,"skin":"dating_ui/jiaru/6.png"}},{"type":"Button","props":{"y":162,"var":"btn_7","stateNum":1,"skin":"dating_ui/jiaru/7.png"}},{"type":"Button","props":{"y":162,"x":249,"var":"btn_8","stateNum":1,"skin":"dating_ui/jiaru/8.png"}},{"type":"Button","props":{"y":162,"x":498,"var":"btn_9","stateNum":1,"skin":"dating_ui/jiaru/9.png"}},{"type":"Button","props":{"y":244,"var":"btn_re","stateNum":1,"skin":"dating_ui/jiaru/cs.png"}},{"type":"Button","props":{"y":244,"x":249,"var":"btn_0","stateNum":1,"skin":"dating_ui/jiaru/0.png"}},{"type":"Button","props":{"y":245,"x":501,"var":"btn_del","stateNum":1,"skin":"dating_ui/jiaru/sc.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.JiaRuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class JieSanUI extends View {
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":322,"height":145,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":3,"skin":"dating_ui/fk/tu_jsqq.png"}},{"type":"Image","props":{"y":10,"x":114,"skin":"dating_ui/fk/tu_fq.png"}},{"type":"Button","props":{"y":110,"var":"btn_enter","stateNum":1,"skin":"dating_ui/fk/btn_jj.png","right":11,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":110,"var":"btn_cancle","stateNum":1,"skin":"dating_ui/fk/btn_ty.png","left":18,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":56,"x":168,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":139,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":199,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":260,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":320,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":380,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":69,"x":18,"skin":"dating_ui/fk/progress.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.JieSanUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class KeHuUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public list_kefu:Laya.List;
		public panel_wenti:Laya.Panel;
		public panel_onlinekf:Laya.Panel;
		public tab_kefu:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1088,"var":"box","height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaKuang_0","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.DaKuang_0UI"}},{"type":"Image","props":{"top":20,"skin":"dating_ui/kehu/tit_service.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":33,"x":1059,"width":81,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":332,"x":644,"width":851,"var":"list_kefu","spaceY":3,"height":510,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"KeFuRender","props":{"renderType":"render","name":"render","runtime":"ui.ajqp.dating.component.KeFuRenderUI"}}]},{"type":"Panel","props":{"y":77,"x":212,"width":860,"var":"panel_wenti","height":510},"child":[{"type":"Image","props":{"y":0,"x":0,"width":860,"skin":"dating_ui/kehu/kehu_1.png","height":1880}}]},{"type":"Panel","props":{"y":77,"x":204,"width":872,"var":"panel_onlinekf","height":511}},{"type":"Tab","props":{"y":72,"x":11.5,"width":193,"var":"tab_kefu","selectedIndex":0,"height":520},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":3,"skin":"dating_ui/kehu/btn_cjwt.png","name":"item0"}},{"type":"Button","props":{"y":100,"x":0,"stateNum":3,"skin":"dating_ui/kehu/btn_lxkf1.png","name":"item1"}},{"type":"Button","props":{"y":200,"x":0,"stateNum":3,"skin":"dating_ui/kehu/btn_wxkf.png","name":"item2"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.DaKuang_0UI",ui.ajqp.dating.component.DaKuang_0UI);
			View.regComponent("ui.ajqp.dating.component.KeFuRenderUI",ui.ajqp.dating.component.KeFuRenderUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.KeHuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QianDaoUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_award:Laya.Box;
		public award0:Laya.Box;
		public eff0:ui.ajqp.dating.component.Effect_qdgxUI;
		public award1:Laya.Box;
		public eff1:ui.ajqp.dating.component.Effect_qdgxUI;
		public award2:Laya.Box;
		public eff2:ui.ajqp.dating.component.Effect_qdgxUI;
		public award3:Laya.Box;
		public eff3:ui.ajqp.dating.component.Effect_qdgxUI;
		public award4:Laya.Box;
		public eff4:ui.ajqp.dating.component.Effect_qdgxUI;
		public award5:Laya.Box;
		public eff5:ui.ajqp.dating.component.Effect_qdgxUI;
		public award6:Laya.Box;
		public eff6:ui.ajqp.dating.component.Effect_qdgxUI;
		public btn_qiandao:Laya.Button;
		public img_btn:Laya.Image;
		public btn_close:Laya.Button;
		public box_qiandao:Laya.Box;
		public qiandao0:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao1:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao2:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao3:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao4:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao5:ui.ajqp.dating.component.Effect_qdUI;
		public qiandao6:ui.ajqp.dating.component.Effect_qdUI;
		public box_sk:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":1026,"height":625,"centerX":35,"bottom":50},"child":[{"type":"Image","props":{"y":17,"x":127,"skin":"dating_ui/qiandao/qd_k.png","left":99}},{"type":"Image","props":{"y":17,"skin":"dating_ui/qiandao/qd_k.png","scaleX":-1,"left":1012}},{"type":"Image","props":{"y":18,"x":368,"skin":"dating_ui/qiandao/tit_qiandao.png","centerX":43}},{"type":"Image","props":{"y":504,"x":804,"skin":"dating_ui/qiandao/tu_lb.png"}}]},{"type":"Box","props":{"width":701,"var":"box_award","height":342,"centerY":-2,"centerX":65},"child":[{"type":"Box","props":{"y":15,"x":15,"width":158,"var":"award0","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_d1.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":90,"x":80,"var":"eff0","scaleY":0.5,"scaleX":0.5,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":47,"x":24,"skin":"dating_ui/qiandao/jl_0.png"}}]},{"type":"Box","props":{"y":15,"x":191,"width":158,"var":"award1","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_d2.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":90,"x":73,"var":"eff1","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":54,"x":43,"skin":"dating_ui/qiandao/jl_1.png"}}]},{"type":"Box","props":{"y":15,"x":368,"width":158,"var":"award2","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_d3.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":92,"x":75,"var":"eff2","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":53,"x":18,"skin":"dating_ui/qiandao/jl_3.png"}}]},{"type":"Box","props":{"y":15,"x":544,"width":158,"var":"award3","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_d4.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":92,"x":76,"var":"eff3","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":58,"x":49,"skin":"dating_ui/qiandao/jl_1.png"}}]},{"type":"Box","props":{"y":192,"x":15,"width":158,"var":"award4","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_d5.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":83,"x":81,"var":"eff4","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":37,"x":12,"skin":"dating_ui/qiandao/jl_5.png"}}]},{"type":"Box","props":{"y":193,"x":191,"width":158,"var":"award5","height":154},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/qiandao/tu_wpk.png"}},{"type":"Image","props":{"y":7,"skin":"dating_ui/qiandao/tu_d6.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":87,"x":77,"var":"eff5","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":55,"x":46,"skin":"dating_ui/qiandao/jl_1.png"}}]},{"type":"Box","props":{"y":194,"x":367,"width":332,"var":"award6","height":150},"child":[{"type":"Image","props":{"y":1,"x":0,"skin":"dating_ui/qiandao/tu_dqt.png"}},{"type":"Image","props":{"y":6,"skin":"dating_ui/qiandao/tu_g.png","centerX":0}},{"type":"Effect_qdgx","props":{"y":101,"x":164,"var":"eff6","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.Effect_qdgxUI"}},{"type":"Image","props":{"y":40,"x":98,"skin":"dating_ui/qiandao/jl_6.png"}}]}]},{"type":"Button","props":{"y":647,"x":721,"var":"btn_qiandao","stateNum":1,"skin":"dating_ui/qiandao/tu_ants.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":38,"x":151,"var":"img_btn","skin":"dating_ui/qiandao/tu_mrzl.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":148,"x":1145,"width":80,"var":"btn_close","stateNum":1,"skin":"dating_ui/qiandao/btn_qd.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":724,"var":"box_qiandao","height":585,"centerY":8,"centerX":55},"child":[{"type":"Effect_qd","props":{"y":196,"x":47,"var":"qiandao0","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":189,"x":219,"var":"qiandao1","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":186,"x":399,"var":"qiandao2","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":183,"x":577,"var":"qiandao3","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":365,"x":51,"var":"qiandao4","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":365,"x":225,"var":"qiandao5","runtime":"ui.ajqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":366,"x":490,"var":"qiandao6","runtime":"ui.ajqp.dating.component.Effect_qdUI"}}]},{"type":"Box","props":{"y":79,"x":72,"width":309,"var":"box_sk","height":591}}]}],"animations":[{"nodes":[{"target":98,"keyframes":{"skin":[{"value":"dating_ui/qiandao/g10000.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":0},{"value":"dating_ui/qiandao/g10001.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":2},{"value":"dating_ui/qiandao/g10002.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":4},{"value":"dating_ui/qiandao/g10003.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":6},{"value":"dating_ui/qiandao/g10004.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":8},{"value":"dating_ui/qiandao/g10005.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":10},{"value":"dating_ui/qiandao/g10006.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":12},{"value":"dating_ui/qiandao/g10007.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":14},{"value":"dating_ui/qiandao/g10008.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":16},{"value":"dating_ui/qiandao/g10009.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":18},{"value":"dating_ui/qiandao/g10010.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":20},{"value":"dating_ui/qiandao/g10011.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":22},{"value":"dating_ui/qiandao/g10012.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":24},{"value":"dating_ui/qiandao/g10013.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":26}]}},{"target":99,"keyframes":{"skin":[{"value":"dating_ui/qiandao/xx10000.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":0},{"value":"dating_ui/qiandao/xx10001.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":2},{"value":"dating_ui/qiandao/xx10002.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":4},{"value":"dating_ui/qiandao/xx10003.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":6},{"value":"dating_ui/qiandao/xx10004.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":8},{"value":"dating_ui/qiandao/xx10005.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":10},{"value":"dating_ui/qiandao/xx10006.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":12},{"value":"dating_ui/qiandao/xx10007.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":14},{"value":"dating_ui/qiandao/xx10008.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":16},{"value":"dating_ui/qiandao/xx10009.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":18},{"value":"dating_ui/qiandao/xx10010.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":20},{"value":"dating_ui/qiandao/xx10011.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":22},{"value":"dating_ui/qiandao/xx10012.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":24},{"value":"dating_ui/qiandao/xx10013.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":26}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.Effect_qdgxUI",ui.ajqp.dating.component.Effect_qdgxUI);
			View.regComponent("ui.ajqp.dating.component.Effect_qdUI",ui.ajqp.dating.component.Effect_qdUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QianDaoUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QiFuUI extends View {
		public btn_close:Laya.Button;
		public box_qifu0:Laya.Box;
		public img_type0:Laya.Image;
		public txt_money0:Laya.Label;
		public box_time0:Laya.Box;
		public lb_time0:Laya.Label;
		public box_qifu1:Laya.Box;
		public img_type1:Laya.Image;
		public txt_money1:Laya.Label;
		public box_time1:Laya.Box;
		public lb_time1:Laya.Label;
		public box_qifu2:Laya.Box;
		public img_type2:Laya.Image;
		public txt_money2:Laya.Label;
		public box_time2:Laya.Box;
		public lb_time2:Laya.Label;
		public box_qifu3:Laya.Box;
		public img_type3:Laya.Image;
		public txt_money3:Laya.Label;
		public box_time3:Laya.Box;
		public lb_time3:Laya.Label;
		public box_qifu4:Laya.Box;
		public img_type4:Laya.Image;
		public txt_money4:Laya.Label;
		public box_time4:Laya.Box;
		public lb_time4:Laya.Label;
		public box_qifu5:Laya.Box;
		public img_type5:Laya.Image;
		public txt_money5:Laya.Label;
		public box_time5:Laya.Box;
		public lb_time5:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"top":22,"skin":"dating_ui/qifu/tu_qf.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":187,"x":161,"width":221,"var":"box_qifu0","height":210,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":5,"x":27,"var":"img_type0","skin":"dating_ui/qifu/f_xs2.png"}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money0","valign":"middle","text":"1/次","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time0","height":26},"child":[{"type":"Image","props":{"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time0","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_xs.png"}}]}]},{"type":"Box","props":{"y":187,"x":426,"width":221,"var":"box_qifu1","height":210,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":97,"x":124,"var":"img_type1","skin":"dating_ui/qifu/f_px2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money1","valign":"middle","text":"10/天","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time1","height":26},"child":[{"type":"Image","props":{"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time1","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_px.png"}}]}]},{"type":"Box","props":{"y":187,"x":682,"width":221,"var":"box_qifu2","height":210,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":37,"width":157,"var":"img_type2","skin":"dating_ui/qifu/f_gsy2.png","height":157}},{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money2","valign":"middle","text":"10/天","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time2","height":26},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time2","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_gsy.png"}}]}]},{"type":"Box","props":{"y":405,"x":161,"width":221,"var":"box_qifu3","height":210,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-12,"x":47,"width":152,"var":"img_type3","skin":"dating_ui/qifu/f_gg2.png","height":203}},{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money3","valign":"middle","text":"10/天","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time3","height":26},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time3","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_gg.png"}}]}]},{"type":"Box","props":{"y":405,"x":426,"width":221,"var":"box_qifu4","height":210,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":31,"x":50,"width":135,"var":"img_type4","skin":"dating_ui/qifu/f_cs2.png","height":135}},{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money4","valign":"middle","text":"10/天","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time4","height":26},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time4","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_cs.png"}}]}]},{"type":"Box","props":{"y":405,"x":682,"width":221,"var":"box_qifu5","height":210,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":105,"x":112,"width":230,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","sizeGrid":"0,35,0,35","height":209,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":48,"width":138,"var":"img_type5","skin":"dating_ui/qifu/f_tdg2.png","height":138}},{"type":"Image","props":{"y":159,"x":52,"width":130,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"10,20,10,20","height":36}},{"type":"Image","props":{"y":146,"x":38,"width":50,"skin":"dating_ui/tongyong/icon_money1.png","height":50,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":161,"x":82,"width":92,"var":"txt_money5","valign":"middle","text":"10/天","height":31,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":130,"x":20,"width":190,"var":"box_time5","height":26},"child":[{"type":"Image","props":{"y":0,"x":0,"width":190,"skin":"dating_ui/qifu/tu_dk1.png","height":26}},{"type":"Label","props":{"y":1,"x":24,"width":50,"valign":"middle","text":"剩余","height":25,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":14,"x":118,"width":96,"var":"lb_time5","valign":"middle","text":"23:59:59","height":20,"fontSize":20,"color":"#bc0101","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]},{"type":"Image","props":{"y":12,"x":14,"skin":"dating_ui/qifu/f_tdg.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QiFuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QiFuSuccessUI extends View {
		public ani3:Laya.FrameAnimation;
		public ani6:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani1:Laya.FrameAnimation;
		public ani5:Laya.FrameAnimation;
		public ani0:Laya.FrameAnimation;
		public img0:Laya.Image;
		public img1:Laya.Image;
		public img2:Laya.Image;
		public img3:Laya.Image;
		public img4:Laya.Image;
		public img5:Laya.Image;
		public lb_1:Laya.Label;
		public lb_name:Laya.Label;
		public lb_2:Laya.Label;
		public lb_info:Laya.Label;
		public lb_3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":643,"height":344,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":643,"height":344,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/qifu/tu_d.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":26,"x":214,"skin":"dating_ui/qifu/tu_bt.png"}}]},{"type":"Image","props":{"y":194,"x":457.5,"skin":"dating_ui/qifu/tu_hyl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":194,"x":457.5,"width":208,"height":74,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":104,"skin":"dating_ui/qifu/tu_hyl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-89,"x":-27.560000000000002,"skin":"dating_ui/qifu/tu_hysg.png","renderType":"mask"},"compId":20}]},{"type":"Image","props":{"y":179,"x":144.5,"var":"img0","skin":"dating_ui/qifu/f_xs1.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":125,"x":119,"skin":"dating_ui/qifu/f_xs1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":33}]},{"type":"Image","props":{"y":171,"x":162.5,"var":"img1","skin":"dating_ui/qifu/f_px1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":93,"x":118,"skin":"dating_ui/qifu/f_px1.png","anchorY":0.5,"anchorX":0.5},"compId":29}]},{"type":"Image","props":{"y":178,"x":121.5,"var":"img2","skin":"dating_ui/qifu/f_gsy1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":150,"x":84,"skin":"dating_ui/qifu/f_gsy1.png","anchorY":0.5,"anchorX":0.5},"compId":27}]},{"type":"Image","props":{"y":131,"x":140.5,"var":"img3","skin":"dating_ui/qifu/f_gg1.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":203,"x":119,"skin":"dating_ui/qifu/f_gg1.png","anchorY":0.5,"anchorX":0.5},"compId":9}]},{"type":"Image","props":{"y":174,"x":127.5,"var":"img4","skin":"dating_ui/qifu/f_cs1.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":146,"x":91,"skin":"dating_ui/qifu/f_cs1.png","anchorY":0.5,"anchorX":0.5},"compId":25}]},{"type":"Image","props":{"y":169,"x":128,"var":"img5","skin":"dating_ui/qifu/f_tdg1.png","scaleY":1.05,"scaleX":1.05,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":143,"x":91,"skin":"dating_ui/qifu/f_tdg1.png","anchorY":0.5,"anchorX":0.5},"compId":31}]}]},{"type":"Label","props":{"y":286,"x":281,"width":42,"var":"lb_1","text":"恭喜","height":29,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":286,"x":332,"var":"lb_name","text":"喵喵妖娆","fontSize":21,"font":"Microsoft YaHei","color":"#41fe69","bold":true}},{"type":"Label","props":{"y":286,"x":449,"width":42,"var":"lb_2","text":"获得","height":30,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":286,"x":507,"var":"lb_info","text":"洗洗手","fontSize":21,"font":"Microsoft YaHei","color":"#ae00ff","bold":true}},{"type":"Label","props":{"y":286,"x":569,"width":42,"var":"lb_3","text":"好运","height":30,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":9,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":20,"keyframes":{"x":[{"value":-104,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":169,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":50},{"value":169,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"x","index":60}]}}],"name":"ani6","id":4,"frameRate":24,"action":2},{"nodes":[{"target":25,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":25,"label":null,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":20}]}}],"name":"ani4","id":5,"frameRate":24,"action":0},{"nodes":[{"target":27,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":27,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":27,"key":"alpha","index":20}]}}],"name":"ani2","id":6,"frameRate":24,"action":0},{"nodes":[{"target":29,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":29,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":20}]}}],"name":"ani1","id":7,"frameRate":24,"action":0},{"nodes":[{"target":31,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":31,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":20}]}}],"name":"ani5","id":8,"frameRate":24,"action":0},{"nodes":[{"target":33,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":33,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":33,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":33,"key":"alpha","index":20}]}}],"name":"ani0","id":9,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.QiFuSuccessUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuanUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public box_shoubang:Laya.Box;
		public hslider:Laya.HSlider;
		public btn_help:Laya.Button;
		public txt_curmoney:Laya.Label;
		public txt_dama:Laya.Label;
		public txt_zhanghao:laya.display.Text;
		public view_money:ui.ajqp.dating.component.TextInputUI;
		public btn_clear:Laya.Button;
		public btn_duihuan:Laya.Box;
		public btn_max:Laya.Button;
		public box_record:Laya.Box;
		public list_record:Laya.List;
		public txt_no:Laya.Image;
		public list_tab:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1088,"var":"box","height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaKuang_0","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.DaKuang_0UI"}},{"type":"Image","props":{"y":235,"x":201,"skin":"dating_ui/tongyong/di/tu_kuangdi.png"}},{"type":"Image","props":{"width":157,"top":20,"skin":"dating_ui/qukuan/tu_dh3.png","height":43,"centerX":0}},{"type":"Button","props":{"y":33,"x":1059,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":76,"x":213,"width":860,"height":505},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box_shoubang","height":526},"child":[{"type":"Image","props":{"y":411,"x":45,"width":781,"skin":"dating_ui/qukuan/di.png","height":99}},{"type":"Image","props":{"y":24,"width":307,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"72,20,17,20","left":55,"height":133}},{"type":"Image","props":{"y":23,"width":307,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"72,20,17,20","left":489,"height":133}},{"type":"Image","props":{"y":115,"x":124,"width":66,"skin":"dating_ui/tongyong/icon_money1.png","height":66,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":115,"x":557,"width":66,"skin":"dating_ui/tongyong/icon_money1.png","height":66,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":257,"x":156,"width":570,"skin":"dating_ui/tongyong/tu_srkt.png","height":68}},{"type":"Image","props":{"y":168,"x":156,"width":570,"skin":"dating_ui/tongyong/tu_srkt.png","height":68}},{"type":"HSlider","props":{"y":372,"x":429,"width":800,"var":"hslider","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Button","props":{"y":61,"x":755,"var":"btn_help","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_bz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":62,"x":208,"width":91,"text":"当前金币","height":25,"fontSize":24,"color":"#daddf3","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":109,"x":127,"width":173,"var":"txt_curmoney","text":"9999999.99","height":25,"fontSize":23,"color":"#ecd6a2","bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"x":641,"width":172,"text":"提现所需打码量","height":25,"fontSize":24,"color":"#daddf3","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":109,"x":565,"width":173,"var":"txt_dama","text":"9999999.99","height":25,"fontSize":23,"color":"#ecd6a2","bold":true,"align":"center"}},{"type":"Text","props":{"y":188,"x":27,"width":105,"text":"收款账号：","strokeColor":"#5151a9","height":30,"fontSize":24,"color":"#ecd6a2","bold":true,"align":"right"}},{"type":"Text","props":{"y":201,"x":388,"width":450,"var":"txt_zhanghao","valign":"middle","text":"点击绑定银行卡信息","pivotY":21,"pivotX":216,"height":43,"fontSize":23,"color":"#a6997b","align":"left"}},{"type":"Text","props":{"y":279,"x":25,"width":105,"text":"提现金额：","strokeColor":"#5151a9","height":30,"fontSize":24,"color":"#ecd6a2","bold":true,"align":"right"}},{"type":"Label","props":{"y":108,"x":291,"text":"元","fontSize":24,"color":"#ecd6a2"}},{"type":"Label","props":{"y":108,"x":728,"text":"元","fontSize":24,"color":"#ecd6a2"}},{"type":"TextInput","props":{"y":273,"x":166,"var":"view_money","runtime":"ui.ajqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":269,"x":678,"var":"btn_clear","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png"}},{"type":"Box","props":{"y":468,"x":434,"width":239,"var":"btn_duihuan","height":77,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":-3,"x":-15,"width":275,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":85}},{"type":"Image","props":{"y":16,"skin":"dating_ui/qukuan/tu_qryh.png","centerX":4}}]},{"type":"Button","props":{"y":266,"x":741,"var":"btn_max","stateNum":1,"skin":"dating_ui/qukuan/btn_qc1.png"}}]},{"type":"Box","props":{"y":-7,"x":-3,"width":868,"var":"box_record","height":526},"child":[{"type":"Image","props":{"y":28,"x":98,"skin":"dating_ui/qukuan/tu_dhje.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":28,"x":299,"skin":"dating_ui/qukuan/tu_dhfs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":28,"x":520,"skin":"dating_ui/qukuan/tu_dhsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":28,"x":735,"skin":"dating_ui/qukuan/tu_dhzt.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":278,"x":433,"width":860,"var":"list_record","spaceY":2,"repeatY":12,"height":454,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"QuKuanT","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.QuKuanTUI"}}]},{"type":"Image","props":{"y":194,"x":356,"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png"},"child":[{"type":"Label","props":{"y":123,"x":-15,"text":"暂无兑换记录","fontSize":25,"color":"#58586d"}}]},{"type":"Image","props":{"y":1,"x":-1,"width":868,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Image","props":{"y":49,"x":-7,"width":860,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}}]},{"type":"List","props":{"y":-1,"x":-201,"width":195,"var":"list_tab","selectEnable":true,"repeatY":3,"repeatX":0,"height":500},"child":[{"type":"TabItemRender1","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.TabItemRender1UI"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.DaKuang_0UI",ui.ajqp.dating.component.DaKuang_0UI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.dating.component.TextInputUI",ui.ajqp.dating.component.TextInputUI);
			View.regComponent("ui.ajqp.dating.component.QuKuanTUI",ui.ajqp.dating.component.QuKuanTUI);
			View.regComponent("ui.ajqp.dating.component.TabItemRender1UI",ui.ajqp.dating.component.TabItemRender1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuanUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuan_mimaUI extends View {
		public box:Laya.Box;
		public img_eyes:Laya.Button;
		public view_input:ui.ajqp.dating.component.TextInputUI;
		public btn_mima_enter:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":360,"x":640,"width":664,"var":"box","height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"y":-141,"x":-308,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":-48,"top":22,"skin":"dating_ui/qukuan/tu_srqkm.png","centerX":0}},{"type":"Image","props":{"y":173,"skin":"dating_ui/tongyong/tu_srkt.png","height":60,"centerX":0}},{"type":"Button","props":{"y":204,"x":530,"var":"img_eyes","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png","anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":184,"x":119,"var":"view_input","runtime":"ui.ajqp.dating.component.TextInputUI"}},{"type":"Box","props":{"width":244,"var":"btn_mima_enter","top":350,"height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":18,"skin":"dating_ui/qukuan/tu_qd.png","centerX":0}}]}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);
			View.regComponent("ui.ajqp.dating.component.TextInputUI",ui.ajqp.dating.component.TextInputUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuan_mimaUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuan_shezhiMMUI extends View {
		public box:Laya.Box;
		public view_input:ui.ajqp.dating.component.TextInputUI;
		public img_eyes:Laya.Button;
		public txt_tishi:Laya.Label;
		public btn_mima_enter:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"y":1,"x":0,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"y":360,"x":640,"width":674,"var":"box","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":337,"skin":"dating_ui/qukuan/tu_szqkmm.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":159.5,"x":337,"skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"0,20,0,20","height":60,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":139.5,"x":112,"var":"view_input","runtime":"ui.ajqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":160.5,"x":530,"var":"img_eyes","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":237,"x":35,"wordWrap":true,"width":615,"text":"取款密码为独立密码，该密码用于提现和余额宝，和游戏登录密码是分开的。为了您的财产安全，设置后不可私自更改，请牢记！如需修改，请联系在线客服！","leading":10,"height":94,"fontSize":22,"color":"#c8bc9f","bold":true,"align":"left"}},{"type":"Label","props":{"y":371,"wordWrap":true,"width":277,"var":"txt_tishi","text":"密码由 6 位数字组成","leading":20,"height":27,"fontSize":22,"color":"#60cf65","centerX":0,"bold":true,"align":"center"}},{"type":"Box","props":{"width":244,"var":"btn_mima_enter","top":350,"height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":244,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dating_ui/qukuan/tu_qd.png","centerY":-3,"centerX":0}}]}]},{"type":"Button","props":{"y":167,"x":937,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);
			View.regComponent("ui.ajqp.dating.component.TextInputUI",ui.ajqp.dating.component.TextInputUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuan_shezhiMMUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class Qukuan_sxdmlUI extends View {
		public btn_enter:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":-39,"top":20,"skin":"dating_ui/qukuan/tu_dhsxdml.png","centerX":0}},{"type":"Box","props":{"width":244,"var":"btn_enter","top":350,"height":78,"centerX":0},"child":[{"type":"Button","props":{"y":0,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":0}},{"type":"Image","props":{"y":15,"skin":"dating_ui/tongyong/tu_qd.png","centerX":0}}]},{"type":"Label","props":{"y":138,"x":46,"wordWrap":true,"width":603,"underlineColor":"#28ff00","text":"提现所需打码量=需要下注的金额，当提现所需打码量为0的时候方可进行提现操作~","leading":4,"height":57,"fontSize":25,"color":"#ffebaf","align":"left"}},{"type":"Label","props":{"y":215,"x":50,"wordWrap":true,"width":564,"underlineColor":"#28ff00","text":"打码量会随着下注、充值、参与活动等操作变化。","leading":4,"height":37,"fontSize":25,"color":"#ffebaf","align":"left"}}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.Qukuan_sxdmlUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuan_tsUI extends View {
		public txt_time:Laya.Label;
		public btn_enter:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-22.5,"x":-39,"top":22,"skin":"dating_ui/tongyong/tit_tishi.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":171.5,"x":219,"wordWrap":true,"width":115,"var":"txt_time","text":"23:23:23","leading":6,"height":30,"fontSize":29,"color":"#60cf65","align":"center"}},{"type":"Box","props":{"width":244,"var":"btn_enter","top":350,"height":76,"centerX":0},"child":[{"type":"Button","props":{"width":244,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dating_ui/qukuan/tu_qd.png","centerY":-3,"centerX":0}}]},{"type":"Label","props":{"y":135.5,"x":34,"wordWrap":true,"width":619,"text":"您今天输入取款密码错误次数太多，为了您的财产安全，清在                 后再次操作，如忘记取款密码可联系在线客服！","leading":6,"height":106,"fontSize":29,"color":"#c8bc9f","align":"left"}}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuan_tsUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuan_yhkUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public btn_bind:Laya.Button;
		public txt_name:Laya.TextInput;
		public txt_khh:Laya.TextInput;
		public txt_zh:Laya.TextInput;
		public txt_khzh:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":640,"width":842,"var":"box","height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang2","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang2UI"}},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"width":244,"var":"btn_bind","top":434,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"skin":"dating_ui/qukuan/tu_qd.png","centerX":0}}]},{"type":"Image","props":{"top":22,"skin":"dating_ui/qukuan/tit_yhk.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":93,"centerX":0},"child":[{"type":"Image","props":{"y":267,"x":39,"skin":"dating_ui/tongyong/tu_tishi.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":25,"x":192,"width":485,"var":"txt_name","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#60594e","prompt":"请输入持卡人姓名","padding":"0,0,0,10","maxChars":6,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":85,"x":192,"width":485,"var":"txt_khh","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#60594e","prompt":"请输入所属银行名称(如中国银行)","padding":"0,0,0,10","maxChars":25,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":145,"x":192,"width":485,"var":"txt_zh","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"0-9","promptColor":"#60594e","prompt":"请输入银行卡号码","padding":"0,0,0,10","overflow":"hidden","maxChars":25,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":203,"x":192,"width":485,"var":"txt_khzh","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#60594e","prompt":"请输入开户支行名称","padding":"0,0,0,10","maxChars":25,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"Text","props":{"y":10,"x":35,"width":158,"text":"持 卡 人 ：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Text","props":{"y":70,"x":30,"width":162,"text":"所属银行：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Text","props":{"y":130,"x":35,"width":158,"text":"银行卡号：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Text","props":{"y":188,"x":32,"width":160,"text":"所属支行：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Label","props":{"y":250,"x":73,"wordWrap":true,"width":684,"underlineColor":"#28ff00","text":"请认真核对所输入的银行卡信息,兑换提现时将直接转入此账号！为了您的财产安全，绑定后不可私自更改，如需修改请联系在线客服！","leading":4,"height":50,"fontSize":20,"color":"#b7b9de","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang2UI",ui.ajqp.dating.component.ZhongKuang2UI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuan_yhkUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class QuKuan_zfbUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public txt_name:Laya.TextInput;
		public txt_zh:Laya.TextInput;
		public btn_bind:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"var":"box","height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang2","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang2UI"}},{"type":"Image","props":{"y":339,"x":81,"skin":"dating_ui/tongyong/tu_tishi.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":144,"x":231,"width":488,"var":"txt_name","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#60594e","prompt":"请输入实名制姓名","padding":"0,0,0,10","maxChars":6,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":266,"x":231,"width":489,"var":"txt_zh","type":"text","skin":"dating_ui/tongyong/tu_srkt.png","sizeGrid":"15,24,17,25","restrict":"A-Za-z0-9@.","promptColor":"#60594e","prompt":"请输入支付宝账号","padding":"0,0,0,10","maxChars":25,"height":50,"fontSize":24,"color":"#e9e9fb","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"Text","props":{"y":131,"x":89,"width":135,"text":"实名制姓名：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Text","props":{"y":250,"x":88,"width":136,"text":"支付宝账号：","height":24,"fontSize":24,"color":"#cfbf9b","bold":true,"align":"right"}},{"type":"Label","props":{"y":182,"x":233,"wordWrap":true,"width":528,"underlineColor":"#28ff00","text":"根据支付宝官方要求,用户需输入实名制姓名才能获取","leading":4,"height":27,"fontSize":20,"color":"#b7b9de","align":"left"}},{"type":"Label","props":{"y":313,"x":109,"wordWrap":true,"width":646,"underlineColor":"#28ff00","text":"请绑定您正确的支付宝账号和实名信息，转出时将直接转入此支付宝账号,为了您的财产安全，绑定后不可私自更改，如需修改请联系客服！","leading":4,"height":79,"fontSize":20,"color":"#b7b9de","align":"left"}},{"type":"Image","props":{"top":22,"skin":"dating_ui/qukuan/tit_zfb.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":244,"var":"btn_bind","top":434,"height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":244,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":18,"skin":"dating_ui/qukuan/tu_qd.png","centerX":0}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang2UI",ui.ajqp.dating.component.ZhongKuang2UI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.QuKuan_zfbUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ShouChongUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public clip_cz:Laya.Clip;
		public img_percent:Laya.Image;
		public clip_back:Laya.Clip;
		public img_yuan:Laya.Image;
		public award2:Laya.Image;
		public award3:Laya.Image;
		public box_btn:Laya.Box;
		public btn_info:Laya.Image;
		public btn_close:Laya.Button;
		public box_sk:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":964,"height":585,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/shouchong/tu_sc01.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":134,"x":369,"width":61,"var":"clip_cz","skin":"dating_ui/shouchong/clip_sz.png","index":1,"height":64,"clipX":10}},{"type":"Image","props":{"y":202,"x":688,"var":"img_percent","skin":"dating_ui/shouchong/tu_bfh.png"}},{"type":"Clip","props":{"y":167,"x":550,"var":"clip_back","skin":"dating_ui/shouchong/clip_sz01.png","index":8,"clipX":10}},{"type":"Image","props":{"y":214,"x":372,"skin":"dating_ui/shouchong/tu_bt1.png"}},{"type":"Image","props":{"y":212,"x":688,"var":"img_yuan","skin":"dating_ui/shouchong/tu_yuan.png"}}]},{"type":"Image","props":{"y":393,"x":390,"skin":"dating_ui/shouchong/tu_wpk.png"},"child":[{"type":"Image","props":{"y":9,"x":8,"width":65,"var":"award2","skin":"dating_ui/touxiang/tu_tx11.png","height":65}}]},{"type":"Image","props":{"y":393,"x":528,"skin":"dating_ui/shouchong/tu_wpk.png"},"child":[{"type":"Image","props":{"y":8,"x":9,"width":65,"var":"award3","skin":"dating_ui/touxiang/tu_txk11.png","height":65}}]},{"type":"Box","props":{"y":500,"x":299,"width":366,"var":"box_btn","height":78},"child":[{"type":"Button","props":{"y":-8,"x":9,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_tanchuanganniu.png","sizeGrid":"0,50,0,50"}},{"type":"Image","props":{"y":36,"x":183,"var":"btn_info","skin":"dating_ui/shouchong/tu_lq.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24,"x":188,"skin":"dating_ui/tongyong/al10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":83}]},{"type":"Button","props":{"y":81,"x":815,"width":81,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":241,"x":786,"skin":"dating_ui/shouchong/tu_sg.png","anchorY":0.5,"anchorX":0.5},"compId":70},{"type":"Box","props":{"y":25,"x":44,"width":280,"var":"box_sk","height":521}},{"type":"Image","props":{"y":47,"x":700,"skin":"dating_ui/shouchong/tu_d.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":77},{"type":"Image","props":{"y":116,"x":843,"skin":"dating_ui/shouchong/tu_d.png","scaleY":1.1,"scaleX":1.1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":78},{"type":"Image","props":{"y":90,"x":247,"skin":"dating_ui/shouchong/tu_d.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":79},{"type":"Image","props":{"y":56,"x":181,"skin":"dating_ui/shouchong/tu_d.png","scaleY":0.9,"scaleX":0.9,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":80},{"type":"Image","props":{"y":232,"x":816,"skin":"dating_ui/shouchong/tu_d.png","scaleY":0.8,"scaleX":0.8,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":81}]}],"animations":[{"nodes":[{"target":83,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":3},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":6},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":9},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":15},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":18},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":21},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":27},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":30},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":83,"key":"skin","index":33}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":81,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":20}]}},{"target":77,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":77,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":77,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":77,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":77,"key":"alpha","index":45}]}},{"target":78,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":78,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":78,"key":"alpha","index":51}]}},{"target":79,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":79,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":79,"key":"alpha","index":35},{"value":1,"tweenMethod":"linearNone","tween":true,"target":79,"key":"alpha","index":54},{"value":0,"tweenMethod":"linearNone","tween":true,"target":79,"key":"alpha","index":72}]}},{"target":80,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":45}]}},{"target":70,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":17},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":25}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":17},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":25}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"rotation","index":0},{"value":76,"tweenMethod":"linearNone","tween":true,"target":70,"key":"rotation","index":45}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":45}]}}],"name":"ani3","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.ShouChongUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TipsUI extends View {
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;
		public btn_cancle:Laya.Button;
		public img_cancle:Laya.Image;
		public img_title:Laya.Image;
		public txt_label:Laya.Label;
		public lb_tip:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0},"child":[{"type":"XiaoKuang","props":{"y":-142,"x":-308,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"y":-127,"x":-320,"width":674,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_enter","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","centerX":165,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"x":123,"var":"img_enter","skin":"dating_ui/tongyong/tu_qd.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"var":"btn_cancle","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_lsan.png","centerX":-159,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":36,"x":123,"var":"img_cancle","skin":"dating_ui/tongyong/tu_qx.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":39,"x":337,"width":78,"top":20,"height":39,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img_title","skin":"dating_ui/tongyong/tu_ts.png","centerY":2,"centerX":2,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":84,"width":551,"height":197,"centerX":0},"child":[{"type":"Label","props":{"wordWrap":true,"width":550,"var":"txt_label","valign":"middle","text":"老板，您的金币少于200老板，您的金币少于200老板，您的金币少于200老板，您的金币少于200老板，您的金老板，您的金币少于200币少于200","leading":8,"height":149,"fontSize":28,"color":"#f8e3a2","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":280,"var":"lb_tip","text":"同时多个祈福时，仅展示首个祈福","fontSize":20,"color":"#c8bc9f","centerX":6}}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TipsUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TipsXiaLaUI extends View {
		public boxTips:Laya.Box;
		public image_Bg:Laya.Image;
		public box_tip:Laya.Box;
		public txtTips:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":438,"var":"boxTips","height":79,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"width":352,"var":"image_Bg","skin":"dating_ui/tongyong/tu_di8.png","sizeGrid":"12,28,15,28","height":43,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":36,"x":219,"var":"box_tip","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":0,"x":0,"width":842,"var":"txtTips","height":24,"fontSize":24,"color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.TipsXiaLaUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TiShiUI extends View {
		public box_main:Laya.Box;
		public btn_sure:Laya.Button;
		public box_desc:Laya.Box;
		public txt_desc:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":664,"var":"box_main","height":437,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"XiaoKuang","props":{"y":-141,"x":-308,"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuangUI"}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":-20,"x":-14,"width":244,"var":"btn_sure","top":350,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerX":0},"child":[{"type":"Image","props":{"y":34,"x":122,"skin":"dating_ui/tongyong/tu_qd.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":-20,"x":-14,"top":20,"skin":"dating_ui/tongyong/tit_tishi.png","centerX":0}},{"type":"Label","props":{"y":113,"width":424,"text":"亲爱的玩家，您确定不再玩一会吗？","height":28,"fontSize":27,"color":"#f8e3a2","centerX":-2}},{"type":"Box","props":{"y":193,"width":608,"var":"box_desc","height":95,"centerX":-2},"child":[{"type":"Label","props":{"y":2,"x":24,"wordWrap":true,"width":585,"var":"txt_desc","text":"您今日有效下注为                      ，今日00：00后将会转化成                      轮盘积分，积分可前往","leading":10,"height":67,"fontSize":23,"color":"#f8e3a2"}}]}]},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuangUI",ui.ajqp.dating.component.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TiShiUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TouXiangUI extends View {
		public list:Laya.List;
		public btn_close:Laya.Button;
		public tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang0UI"}},{"type":"List","props":{"y":75,"x":208,"width":598,"var":"list","spaceY":5,"spaceX":50,"repeatX":4,"height":444,"anchorY":0,"anchorX":0},"child":[{"type":"HeadRenderT","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.HeadRenderTUI"}}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"top":22,"skin":"dating_ui/geren/tit_sztx.png","centerX":0}},{"type":"Tab","props":{"y":73,"x":13,"width":169,"var":"tab","height":168},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"dating_ui/geren/btn_ghtx.png","name":"item0"}},{"type":"Button","props":{"y":84,"x":0,"stateNum":2,"skin":"dating_ui/geren/btn_kaung.png","name":"item1"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang0UI",ui.ajqp.dating.component.ZhongKuang0UI);
			View.regComponent("ui.ajqp.dating.component.HeadRenderTUI",ui.ajqp.dating.component.HeadRenderTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TouXiangUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TuiGuangUI extends View {
		public img_type:Laya.Image;
		public box0:Laya.Box;
		public txt_szzjl:Laya.Label;
		public txt_zswjrs:Laya.Label;
		public txt_qtwjrs:Laya.Label;
		public txt_szzswjjj:Laya.Label;
		public txt_szqtwjjj:Laya.Label;
		public txt_w0:Laya.Label;
		public txt_w1:Laya.Label;
		public txt_w2:Laya.Label;
		public txt_w3:Laya.Label;
		public txt_w4:Laya.Label;
		public txt_record:Laya.Label;
		public txt_ktq:Laya.Label;
		public btn_lq:Laya.Button;
		public img_ewm:Laya.Image;
		public btn_help:Laya.Button;
		public btn_record:Laya.Button;
		public btn_fxq:Laya.Button;
		public btn_wxhy:Laya.Button;
		public box_no_share:Laya.Box;
		public txt_gw:Laya.Label;
		public box1:Laya.Box;
		public box1_0:Laya.Box;
		public list_mx:Laya.List;
		public box1_1:Laya.Box;
		public list_fsmx:Laya.List;
		public txt_no:Laya.Image;
		public box2:Laya.Box;
		public list2:Laya.List;
		public box_no_2:Laya.Box;
		public txt_agency:Laya.Label;
		public box3:Laya.Box;
		public box3_0:Laya.Box;
		public txt_name1:Laya.Label;
		public txt_yj:Laya.Label;
		public txt_selffy:Laya.Label;
		public txt_allfy:Laya.Label;
		public list3:Laya.List;
		public box3_1:Laya.Box;
		public txt_name:Laya.Label;
		public txt_validBet:Laya.Label;
		public txt_fanshui:Laya.Label;
		public list_child:Laya.List;
		public box_no_3:Laya.Box;
		public box4:Laya.Box;
		public box4_0:Laya.Box;
		public box4_1:Laya.Box;
		public list_yonghu:Laya.List;
		public box_huizong:Laya.Box;
		public txt_huizong0:Laya.Label;
		public txt_huizong1:Laya.Label;
		public txt_huizong2:Laya.Label;
		public box_no_4:Laya.Box;
		public box_btn:Laya.Box;
		public btn0:Laya.Box;
		public btn_selected0:Laya.Button;
		public lab0:Laya.Label;
		public btn1:Laya.Box;
		public btn_selected1:Laya.Button;
		public lab1:Laya.Label;
		public btn2:Laya.Box;
		public btn_selected2:Laya.Button;
		public lab2:Laya.Label;
		public btn3:Laya.Box;
		public btn_selected3:Laya.Button;
		public lab3:Laya.Label;
		public btn4:Laya.Box;
		public btn_selected4:Laya.Button;
		public lab4:Laya.Label;
		public btn5:Laya.Box;
		public btn_selected5:Laya.Button;
		public lab5:Laya.Label;
		public btn6:Laya.Box;
		public btn_selected6:Laya.Button;
		public lab6:Laya.Label;
		public btn_select:Laya.Box;
		public jiantou_up:Laya.Image;
		public jiantou_down:Laya.Image;
		public lab_select:Laya.Label;
		public box5:Laya.Box;
		public box5_0:Laya.Box;
		public txt_total:Laya.Label;
		public txt_yeji0:Laya.Label;
		public txt_yeji1:Laya.Label;
		public txt_yeji3:Laya.Label;
		public txt_yeji2:Laya.Label;
		public txt_yeji4:Laya.Label;
		public txt_fanyongbili0:Laya.Label;
		public txt_fanyongmoney0:Laya.Label;
		public txt_fanyongmoney1:Laya.Label;
		public txt_fanyongmoney3:Laya.Label;
		public txt_fanyongmoney2:Laya.Label;
		public txt_fanyongmoney4:Laya.Label;
		public txt_fanyongbili1:Laya.Label;
		public txt_fanyongbili3:Laya.Label;
		public txt_fanyongbili2:Laya.Label;
		public txt_fanyongbili4:Laya.Label;
		public box5_1:Laya.Box;
		public txt_percent0:Laya.Label;
		public txt_percent1:Laya.Label;
		public txt_percent2:Laya.Label;
		public txt_percent3:Laya.Label;
		public txt_percent4:Laya.Label;
		public txt_percent5:Laya.Label;
		public txt_percent6:Laya.Label;
		public txt_percent7:Laya.Label;
		public txt_percent8:Laya.Label;
		public txt_percent9:Laya.Label;
		public panel_tab:Laya.Panel;
		public tab:Laya.Tab;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1088,"height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaKuang_0","props":{"y":-60,"x":-96,"runtime":"ui.ajqp.dating.component.DaKuang_0UI"}},{"type":"Image","props":{"y":233,"x":206,"skin":"dating_ui/tongyong/di/tu_kuangdi.png"}},{"type":"Image","props":{"var":"img_type","top":20,"skin":"dating_ui/tuiguang/tit_daili1.png","centerX":0}},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box0","height":511},"child":[{"type":"Box","props":{"y":18,"x":16},"child":[{"type":"Image","props":{"y":0,"x":10,"width":344,"skin":"dating_ui/tuiguang/tu_d.png","sizeGrid":"9,8,12,8","height":223}},{"type":"Image","props":{"y":27,"x":39,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":70,"x":39,"skin":"dating_ui/tuiguang/tu_r.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":110,"x":39,"skin":"dating_ui/tuiguang/tu_r.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":151,"x":39,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":193,"x":39,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":16,"width":335,"skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Image","props":{"y":50,"x":16,"width":335,"skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Image","props":{"y":135,"x":16,"width":335,"skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Image","props":{"y":92,"x":16,"width":335,"skin":"dating_ui/tongyong/di/tu_5.png"}},{"type":"Label","props":{"y":16,"x":184,"wordWrap":true,"width":150,"var":"txt_szzjl","text":"0","height":25,"fontSize":22,"color":"#b8c2ea","align":"right"}},{"type":"Label","props":{"y":58,"x":184,"wordWrap":true,"width":150,"var":"txt_zswjrs","text":"0","height":25,"fontSize":22,"color":"#b8c2ea","align":"right"}},{"type":"Label","props":{"y":99,"x":184,"wordWrap":true,"width":150,"var":"txt_qtwjrs","text":"0","height":25,"fontSize":22,"color":"#b8c2ea","align":"right"}},{"type":"Label","props":{"y":141,"x":184,"wordWrap":true,"width":150,"var":"txt_szzswjjj","text":"0","height":25,"fontSize":22,"color":"#b8c2ea","align":"right"}},{"type":"Label","props":{"y":182,"x":184,"wordWrap":true,"width":150,"var":"txt_szqtwjjj","text":"0","height":25,"fontSize":22,"color":"#b8c2ea","align":"right"}},{"type":"Label","props":{"y":16,"x":62,"wordWrap":true,"width":205,"var":"txt_w0","text":"上周总奖励：","leading":16,"height":25,"fontSize":22,"color":"#c8bc9f","bold":false,"align":"left"}},{"type":"Label","props":{"y":58,"x":62,"wordWrap":true,"width":205,"var":"txt_w1","text":"直属玩家人数：","leading":16,"height":25,"fontSize":22,"color":"#c8bc9f","bold":false,"align":"left"}},{"type":"Label","props":{"y":99,"x":62,"wordWrap":true,"width":205,"var":"txt_w2","text":"其他玩家人数：","leading":16,"height":25,"fontSize":22,"color":"#c8bc9f","bold":false,"align":"left"}},{"type":"Label","props":{"y":141,"x":62,"wordWrap":true,"width":205,"var":"txt_w3","text":"上周直属玩家奖励：","leading":16,"height":25,"fontSize":22,"color":"#c8bc9f","bold":false,"align":"left"}},{"type":"Label","props":{"y":182,"x":62,"wordWrap":true,"width":205,"var":"txt_w4","text":"上周其他玩家奖励：","leading":16,"height":25,"fontSize":22,"color":"#c8bc9f","bold":false,"align":"left"}}]},{"type":"Box","props":{"y":237,"x":19,"width":365,"height":271},"child":[{"type":"Image","props":{"y":18,"x":8,"width":169,"skin":"dating_ui/tuiguang/tu_d.png","sizeGrid":"9,8,12,8","height":169}},{"type":"Image","props":{"y":26,"x":35,"skin":"dating_ui/tuiguang/wz_1.png"}},{"type":"Image","props":{"y":18,"x":184,"width":169,"skin":"dating_ui/tuiguang/tu_d.png","sizeGrid":"9,8,12,8","height":169}},{"type":"Image","props":{"y":26,"x":208,"skin":"dating_ui/tuiguang/wz_2.png"}},{"type":"Image","props":{"y":69,"x":55,"width":78,"skin":"dating_ui/tuiguang/tu_bx1.png","height":67}},{"type":"Image","props":{"y":66,"x":227,"width":80,"skin":"dating_ui/tuiguang/tu_bx2.png","height":69}},{"type":"Label","props":{"y":152,"x":20,"wordWrap":true,"width":147,"var":"txt_record","text":"0 元","height":25,"fontSize":22,"color":"#ee790e","align":"center"}},{"type":"Label","props":{"y":155,"x":196,"wordWrap":true,"width":147,"var":"txt_ktq","text":"0 元","height":25,"fontSize":20,"color":"#ee790e","align":"center"}},{"type":"Button","props":{"y":195,"x":61,"width":244,"var":"btn_lq","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","sizeGrid":"0,11,0,11","height":76},"child":[{"type":"Image","props":{"skin":"dating_ui/tuiguang/wz_lq.png","centerY":-1,"centerX":0}}]}]},{"type":"Box","props":{"y":12,"x":382,"width":439,"height":488},"child":[{"type":"Image","props":{"y":9,"x":32,"width":182,"skin":"dating_ui/tuiguang/tu_d1.png","sizeGrid":"16,14,14,18","height":215}},{"type":"Image","props":{"y":97,"x":124,"width":164,"var":"img_ewm","scaleY":0.9,"scaleX":0.9,"height":164,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":180,"x":49,"wordWrap":true,"width":150,"text":"点击图片放大","height":25,"fontSize":22,"color":"#b8c2ea","bold":true,"align":"center"}},{"type":"Button","props":{"y":376,"x":260,"var":"btn_help","stateNum":1,"skin":"dating_ui/tuiguang/btn_bz.png"}},{"type":"Button","props":{"y":376,"x":51,"var":"btn_record","stateNum":1,"skin":"dating_ui/tuiguang/btn_jl.png"}},{"type":"Button","props":{"y":132,"x":266,"var":"btn_fxq","stateNum":1,"skin":"dating_ui/tuiguang/btn_q.png"}},{"type":"Button","props":{"y":19,"x":264,"var":"btn_wxhy","stateNum":1,"skin":"dating_ui/tuiguang/btn_hy.png"}},{"type":"Box","props":{"y":245,"x":35,"width":400,"var":"box_no_share","height":109},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":397,"skin":"dating_ui/tuiguang/tu_d.png","sizeGrid":"9,8,12,8","height":106}},{"type":"Label","props":{"y":64,"x":4,"width":386,"text":"(点击可复制链接)","strokeColor":"#000027","leading":6,"height":22,"fontSize":20,"color":"#b8c2ea","bold":false,"align":"center"}},{"type":"Box","props":{"width":391,"height":30,"centerY":-20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"width":391,"var":"txt_gw","text":"微信推广链接：https://www.008qp...","strokeColor":"#000027","overflow":"hidden","leading":6,"height":30,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]}]},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box1","height":511},"child":[{"type":"Box","props":{"width":868,"var":"box1_0","height":512},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Image","props":{"y":25,"x":133,"skin":"dating_ui/tuiguang/tg_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24.5,"x":428,"skin":"dating_ui/tuiguang/tg_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24.5,"x":722,"skin":"dating_ui/tuiguang/tg_3.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":56,"x":0,"width":868,"var":"list_mx","spaceY":1,"height":454},"child":[{"type":"TuiGuangMX_T","props":{"y":20,"x":430,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.dating.component.TuiGuangMX_TUI"}}]},{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"width":868,"var":"box1_1","height":512},"child":[{"type":"Image","props":{"y":0,"x":0,"width":868,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Box","props":{"y":-1,"x":-1,"width":868,"height":53},"child":[{"type":"Image","props":{"y":25,"x":135,"skin":"dating_ui/tuiguang/tg_11.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":430,"skin":"dating_ui/tuiguang/tg_22.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":724,"skin":"dating_ui/tuiguang/tg_33.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":53,"x":0,"width":868,"var":"list_fsmx","spaceY":1,"height":454},"child":[{"type":"TuiGuangMX_T","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.TuiGuangMX_TUI"}}]},{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}}]},{"type":"Image","props":{"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png","centerY":-21,"centerX":-5},"child":[{"type":"Label","props":{"y":123,"x":10,"text":"暂无数据","fontSize":25,"color":"#58586d"}}]}]},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box2","height":511},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Image","props":{"y":25,"x":117,"skin":"dating_ui/tuiguang/bb_je.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":325,"skin":"dating_ui/tuiguang/bb_lx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":531,"skin":"dating_ui/tuiguang/bb_ly.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24,"x":738,"skin":"dating_ui/tuiguang/bb_sj.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":51,"x":0,"width":868,"visible":false,"var":"list2","spaceY":1,"height":410,"anchorY":0,"anchorX":0},"child":[{"type":"FenXiangT5","props":{"y":2,"renderType":"render","runtime":"ui.ajqp.dating.component.FenXiangT5UI"}}]},{"type":"Box","props":{"y":235,"x":430,"width":120,"var":"box_no_2","height":151,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/di/tu_4.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":140,"x":-78,"text":"当前还未领取过奖励哦！","fontSize":25,"color":"#58586d"}}]},{"type":"Label","props":{"y":474,"wordWrap":true,"width":768,"var":"txt_agency","text":"玩家通过您分享的链接下载并且充值　　     金额，您即可获得　　    现金奖励","height":22,"fontSize":22,"color":" #cfbf9b","centerX":0,"align":"left"}},{"type":"Image","props":{"y":459,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box3","height":511},"child":[{"type":"Box","props":{"y":0,"x":0,"width":868,"var":"box3_0","height":512},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Box","props":{"y":0,"x":0,"width":868,"height":511},"child":[{"type":"Box","props":{"y":52,"x":0,"width":868,"height":42},"child":[{"type":"Label","props":{"y":22,"x":117,"width":198,"var":"txt_name1","valign":"middle","height":25,"fontSize":20,"color":"#f6d9a6","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":23,"x":325,"width":198,"var":"txt_yj","valign":"middle","height":25,"fontSize":20,"color":"#41fe69","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":22,"x":741,"width":198,"var":"txt_selffy","height":25,"fontSize":20,"color":"#ffd221","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":433,"width":198,"var":"txt_allfy","valign":"middle","height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]},{"type":"Image","props":{"y":25,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":325,"skin":"dating_ui/tuiguang/bb_yj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":533,"skin":"dating_ui/tuiguang/bb_qdyj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":740,"skin":"dating_ui/tuiguang/bb_zdyj.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":104,"x":0,"width":868,"height":433},"child":[{"type":"Image","props":{"y":15.5,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":15.5,"x":325,"skin":"dating_ui/tuiguang/bb_yj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":15.5,"x":534,"skin":"dating_ui/tuiguang/bb_qdyj.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":45,"x":0,"width":868,"visible":false,"var":"list3","spaceY":1,"height":366},"child":[{"type":"FenXiangT6","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.FenXiangT6UI"}}]}]},{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":144,"x":57,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":95,"x":-2,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}}]},{"type":"Box","props":{"y":0,"x":0,"width":868,"var":"box3_1","height":512},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Image","props":{"y":93,"x":1,"width":867,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Box","props":{"y":0,"width":868,"height":51},"child":[{"type":"Image","props":{"y":25,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":741,"skin":"dating_ui/tuiguang/bb_fs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":25,"x":325,"skin":"dating_ui/tuiguang/bb_tz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":52,"x":-1,"width":868,"height":45},"child":[{"type":"Label","props":{"y":22,"x":117,"width":198,"var":"txt_name","valign":"middle","height":25,"fontSize":20,"color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":23,"x":326,"width":198,"var":"txt_validBet","valign":"middle","height":25,"fontSize":20,"color":"#41fe69","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":22,"x":742,"width":198,"var":"txt_fanshui","valign":"middle","height":25,"fontSize":20,"color":"#ffd221","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"y":93,"x":0,"width":860,"height":417},"child":[{"type":"Image","props":{"y":26,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26,"x":533,"skin":"dating_ui/tuiguang/tg_111.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26,"x":740,"skin":"dating_ui/tuiguang/bb_yj1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26,"x":325,"skin":"dating_ui/tuiguang/bb_ss.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":51,"width":868,"visible":false,"var":"list_child","spaceY":1,"height":369},"child":[{"type":"FenXiangT6","props":{"y":3,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.FenXiangT6UI"}}]}]}]},{"type":"Box","props":{"width":120,"var":"box_no_3","height":151,"centerY":-21,"centerX":-4,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":76,"x":60,"skin":"dating_ui/tongyong/di/tu_4.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":140,"x":-140,"text":"暂时没有记录，快去分享给好友吧！","fontSize":25,"color":"#58586d"}}]}]},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box4","height":511},"child":[{"type":"Image","props":{"y":49,"x":65,"width":701,"skin":"dating_ui/tongyong/di/tu_5.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":0,"x":0,"width":868,"skin":"dating_ui/tongyong/di/tu_di1.png","height":51}},{"type":"Box","props":{"y":0,"x":0,"width":868,"var":"box4_0","height":511},"child":[{"type":"Box","props":{"y":0,"x":0,"width":868,"height":511},"child":[{"type":"Image","props":{"y":27,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":327,"skin":"dating_ui/tuiguang/tu_wdyh6.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":532,"skin":"dating_ui/tuiguang/tu_wdyh7.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":739,"skin":"dating_ui/tuiguang/tu_wdyh5.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":868,"var":"box4_1","height":511},"child":[{"type":"Box","props":{"y":0,"x":0,"width":868,"height":511},"child":[{"type":"Image","props":{"y":27,"x":741,"skin":"dating_ui/tuiguang/tu_wdyh5.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":325,"skin":"dating_ui/tuiguang/tu_wdyh3.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":532,"skin":"dating_ui/tuiguang/tu_wdyh4.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":117,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"List","props":{"y":51,"x":0,"width":868,"var":"list_yonghu","spaceY":1,"height":428},"child":[{"type":"YongHuT","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.YongHuTUI"}}]},{"type":"Box","props":{"y":481,"x":227,"width":613,"var":"box_huizong","height":26},"child":[{"type":"Label","props":{"y":1,"x":-1,"width":198,"var":"txt_huizong0","height":25,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":1,"x":207,"width":198,"var":"txt_huizong1","height":25,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":1,"x":415,"width":198,"var":"txt_huizong2","height":25,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"width":120,"var":"box_no_4","height":151,"centerY":-21,"centerX":-4,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/di/tu_4.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":140,"x":10,"text":"暂无数据","fontSize":25,"color":"#58586d"}}]},{"type":"Box","props":{"y":193,"x":-2},"child":[{"type":"Image","props":{"y":276,"width":871,"skin":"dating_ui/tongyong/di/tu_liebiao1.png","sizeGrid":"0,25,0,0","height":46}},{"type":"Box","props":{"y":0,"x":5,"width":175,"var":"box_btn","height":279},"child":[{"type":"Image","props":{"y":10,"x":0,"width":175,"skin":"dating_ui/tongyong/di/tu_9.png","sizeGrid":"10,11,14,12","height":274}},{"type":"Box","props":{"y":10,"x":4,"width":167,"var":"btn0","height":40},"child":[{"type":"Image","props":{"y":37,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}},{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab0","text":"2018-09-15","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}}]},{"type":"Box","props":{"y":49,"x":4,"width":167,"var":"btn1","height":40},"child":[{"type":"Image","props":{"y":37,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}},{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab1","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}}]},{"type":"Box","props":{"y":87,"x":4,"width":167,"var":"btn2","height":40},"child":[{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab2","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}},{"type":"Image","props":{"y":37,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}}]},{"type":"Box","props":{"y":126,"x":4,"width":167,"var":"btn3","height":40},"child":[{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab3","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}},{"type":"Image","props":{"y":36,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}}]},{"type":"Box","props":{"y":164,"x":4,"width":167,"var":"btn4","height":40},"child":[{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab4","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}},{"type":"Image","props":{"y":37,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}}]},{"type":"Box","props":{"y":203,"x":4,"width":167,"var":"btn5","height":40},"child":[{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab5","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}},{"type":"Image","props":{"y":39,"x":0,"skin":"dating_ui/tongyong/di/tu_10.png"}}]},{"type":"Box","props":{"y":241,"x":4,"width":167,"var":"btn6","height":40},"child":[{"type":"Button","props":{"y":10,"x":138,"var":"btn_selected6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":18,"width":119,"var":"lab6","height":20,"fontSize":22,"color":"#f6d9a6","align":"center"}}]}]},{"type":"Box","props":{"y":280,"x":7,"width":170,"var":"btn_select","height":40},"child":[{"type":"Image","props":{"y":0,"x":-3,"width":176,"skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Image","props":{"y":26,"x":137,"var":"jiantou_up","skin":"dating_ui/tongyong/btn_jt.png","scaleY":-1}},{"type":"Image","props":{"y":16,"x":138,"var":"jiantou_down","skin":"dating_ui/tongyong/btn_jt.png"}},{"type":"Label","props":{"y":8,"x":16,"width":119,"var":"lab_select","text":"2018-09-15","height":20,"fontSize":22,"color":"#bfbfbf","align":"center"}}]}]}]},{"type":"Box","props":{"y":73,"x":209,"width":868,"var":"box5","height":511},"child":[{"type":"Box","props":{"y":1,"x":0,"width":868,"var":"box5_0","height":511},"child":[{"type":"Image","props":{"y":2,"x":0,"width":868,"skin":"dating_ui/tuiguang/tu_tg2_1.png","sizeGrid":"25,25,25,25","height":511}},{"type":"Label","props":{"y":471,"x":87,"wordWrap":true,"width":681,"var":"txt_total","leading":4,"height":26,"fontSize":26,"color":"#efda8b","align":"left"}},{"type":"Label","props":{"y":144,"x":305,"wordWrap":true,"width":136,"var":"txt_yeji0","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":257,"x":108,"wordWrap":true,"width":136,"var":"txt_yeji1","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":257,"x":524,"wordWrap":true,"width":136,"var":"txt_yeji3","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":374,"x":108,"wordWrap":true,"width":136,"var":"txt_yeji2","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":373,"x":524,"wordWrap":true,"width":136,"var":"txt_yeji4","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":144,"x":441,"width":144,"var":"txt_fanyongbili0","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":171,"x":305,"width":280,"var":"txt_fanyongmoney0","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":285,"x":107,"width":280,"var":"txt_fanyongmoney1","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":285,"x":524,"width":280,"var":"txt_fanyongmoney3","leading":4,"height":25,"fontSize":20,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":403,"x":108,"width":280,"var":"txt_fanyongmoney2","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":403,"x":524,"width":280,"var":"txt_fanyongmoney4","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":257,"x":244,"width":144,"var":"txt_fanyongbili1","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":257,"x":660,"width":144,"var":"txt_fanyongbili3","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":374,"x":243,"width":144,"var":"txt_fanyongbili2","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}},{"type":"Label","props":{"y":373,"x":660,"width":144,"var":"txt_fanyongbili4","leading":4,"height":25,"fontSize":22,"color":"#5d442c","align":"center"}}]},{"type":"Box","props":{"y":0,"x":0,"width":868,"visible":false,"var":"box5_1","height":511},"child":[{"type":"Image","props":{"y":5,"x":15,"skin":"dating_ui/tuiguang/tu_tg2_2.png"}},{"type":"Label","props":{"y":78,"x":478,"wordWrap":true,"width":42,"var":"txt_percent0","leading":4,"height":21,"fontSize":20,"color":"#eaff00","align":"left"}},{"type":"Label","props":{"y":168,"x":494,"wordWrap":true,"width":42,"var":"txt_percent1","leading":4,"height":21,"fontSize":20,"color":"#eaff00","align":"left"}},{"type":"Label","props":{"y":254,"x":515,"wordWrap":true,"width":42,"var":"txt_percent2","leading":4,"height":21,"fontSize":20,"color":"#eaff00","align":"left"}},{"type":"Label","props":{"y":370,"x":716,"wordWrap":true,"width":51,"var":"txt_percent3","leading":4,"height":16,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Box","props":{"y":339,"x":13,"width":822,"height":139},"child":[{"type":"Label","props":{"y":90,"x":627,"wordWrap":true,"width":47,"var":"txt_percent4","leading":4,"height":16,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":88,"x":546,"wordWrap":true,"width":47,"var":"txt_percent5","leading":4,"height":16,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":59,"x":542,"wordWrap":true,"width":52,"var":"txt_percent6","leading":4,"height":16,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":117,"x":196,"wordWrap":true,"width":46,"var":"txt_percent7","leading":4,"height":20,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":119,"x":444,"wordWrap":true,"width":46,"var":"txt_percent8","leading":4,"height":16,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":117,"x":365,"wordWrap":true,"width":45,"var":"txt_percent9","leading":4,"height":22,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":56,"x":92,"text":"B","fontSize":22,"color":"#ff00ff"}},{"type":"Label","props":{"y":88,"x":91,"text":"C","fontSize":22,"color":"#0aff00"}},{"type":"Label","props":{"y":146,"x":202,"text":"B","fontSize":22,"color":"#0aff00"}},{"type":"Label","props":{"y":146,"x":235,"text":"C","fontSize":22,"color":"#ff00ff"}},{"type":"Label","props":{"y":146,"x":274,"wordWrap":true,"width":20,"text":"N","leading":4,"height":22,"fontSize":22,"color":"#ffff00","align":"left"}}]},{"type":"Button","props":{"y":451,"x":613,"width":161,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_dlfxbd.png","sizeGrid":"13,16,17,16","height":61},"child":[{"type":"Image","props":{"y":13,"x":7,"skin":"dating_ui/tuiguang/tu_fyjlb.png"}}]}]}]},{"type":"Panel","props":{"y":75,"x":11,"width":196,"var":"panel_tab","height":512},"child":[{"type":"Tab","props":{"y":-3,"x":0,"var":"tab"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"dating_ui/tuiguang/btn_fx.png","name":"item0"}},{"type":"Button","props":{"y":99,"stateNum":2,"skin":"dating_ui/tuiguang/btn_mx.png","name":"item1"}},{"type":"Button","props":{"y":198,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jljl.png","name":"item2"}},{"type":"Button","props":{"y":297,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jlmx.png","name":"item3"}},{"type":"Button","props":{"y":396,"stateNum":2,"skin":"dating_ui/tuiguang/btn_yh.png","name":"item4"}},{"type":"Button","props":{"y":495,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jc.png","name":"item5"}}]}]},{"type":"Image","props":{"y":600,"x":1060,"width":28,"skin":"dating_ui/tongyong/tu_jiao.png","rotation":-90,"height":28}},{"type":"Image","props":{"y":572,"x":0,"width":28,"skin":"dating_ui/tongyong/tu_jiao.png","height":28}},{"type":"Button","props":{"y":33,"x":1059,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.DaKuang_0UI",ui.ajqp.dating.component.DaKuang_0UI);
			View.regComponent("ui.ajqp.dating.component.TuiGuangMX_TUI",ui.ajqp.dating.component.TuiGuangMX_TUI);
			View.regComponent("ui.ajqp.dating.component.FenXiangT5UI",ui.ajqp.dating.component.FenXiangT5UI);
			View.regComponent("ui.ajqp.dating.component.FenXiangT6UI",ui.ajqp.dating.component.FenXiangT6UI);
			View.regComponent("ui.ajqp.dating.component.YongHuTUI",ui.ajqp.dating.component.YongHuTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TuiGuangUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TuiGuangHelpUI extends View {
		public btn_close:Laya.Button;
		public txt_more:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"top":20,"skin":"dating_ui/tuiguang/tit_xx.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":89,"x":29,"wordWrap":true,"width":793,"text":"1.新玩家使用您的推广链接或二维码下载游戏并登录，即可成为您的直属玩家。 \\n2.通过您直属玩家的推广链接或维码下载并登录的新玩家，即可成为您的2级(其他)玩家。以此类推您的2级(其他)推广玩家也将与您产生联系哦!","leading":20,"height":154,"fontSize":28,"color":"#c8bc9f","align":"left"}},{"type":"Label","props":{"y":323,"x":27,"wordWrap":true,"width":786,"var":"txt_more","text":"3.抢庄牛牛、通比牛牛等其余游戏的税收=游戏抽取的服务费。","leading":20,"height":28,"fontSize":28,"color":"#c8bc9f","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TuiGuangHelpUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TuiGuangJiLuUI extends View {
		public list_record:Laya.List;
		public txt_no:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"top":20,"skin":"dating_ui/tuiguang/tit_jilu.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":820,"height":430,"centerY":28,"centerX":0},"child":[{"type":"Image","props":{"y":-12,"x":0,"width":816,"skin":"dating_ui/tongyong/di/tu_di1.png","height":47}},{"type":"Image","props":{"y":34,"x":28,"width":764,"skin":"dating_ui/tongyong/di/tu_5.png","height":3}},{"type":"Image","props":{"y":14,"x":141,"width":83,"skin":"dating_ui/tuiguang/tg_sj.png","height":20,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":399,"skin":"dating_ui/tuiguang/tg_je.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":661,"skin":"dating_ui/tuiguang/tg_zt.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":38,"x":30,"width":760,"var":"list_record","spaceY":2,"height":405,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"FanYongT","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.FanYongTUI"}}]},{"type":"Image","props":{"var":"txt_no","skin":"dating_ui/tongyong/di/tu_4.png","centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":123,"x":10,"text":"暂无数据","fontSize":25,"color":"#58586d"}}]}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);
			View.regComponent("ui.ajqp.dating.component.FanYongTUI",ui.ajqp.dating.component.FanYongTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TuiGuangJiLuUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TuiGuangSaveUI extends View {
		public img_ewm:Laya.Image;
		public btn_close:Laya.Button;
		public btn_save:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"skin":"dating_ui/tuiguang/tu_tg3.jpg","centerX":0}},{"type":"Image","props":{"y":490,"x":670,"width":140,"var":"img_ewm","height":140}},{"type":"Label","props":{"y":641,"x":1000,"wordWrap":true,"width":223,"text":"点击按钮保存图片至相册","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":63,"x":1221,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":585,"x":1093,"var":"btn_save","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"x":127,"skin":"dating_ui/tuiguang/tu_bc.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.TuiGuangSaveUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class TuiGuang_FanUI extends View {
		public list_title:Laya.List;
		public btn_close:Laya.Button;
		public list_dl:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"y":-93,"x":-219,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"List","props":{"y":71,"x":12,"width":819,"var":"list_title","spaceX":5,"selectEnable":true,"height":58},"child":[{"type":"TuiGuang_FanYong","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.TuiGuang_FanYongUI"}}]},{"type":"Image","props":{"y":28,"x":334,"skin":"dating_ui/tuiguang/tu_fyjeb.png"}},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":124,"x":11,"width":820,"skin":"dating_ui/tongyong/di/tu_di1.png","sizeGrid":"0,10,0,10","height":47}}]},{"type":"Label","props":{"y":233,"x":278,"text":"代理级别","fontSize":22,"color":"#f2f3ff"}},{"type":"Label","props":{"y":233,"x":585,"text":"团队业绩/日","fontSize":22,"color":"#f2f3ff"}},{"type":"Label","props":{"y":233,"x":908,"text":"返佣额度","fontSize":22,"color":"#f2f3ff"}},{"type":"List","props":{"y":263,"x":231,"width":819,"var":"list_dl","height":353},"child":[{"type":"TuiGuang_DaiLi","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.TuiGuang_DaiLiUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);
			View.regComponent("ui.ajqp.dating.component.TuiGuang_FanYongUI",ui.ajqp.dating.component.TuiGuang_FanYongUI);
			View.regComponent("ui.ajqp.dating.component.TuiGuang_DaiLiUI",ui.ajqp.dating.component.TuiGuang_DaiLiUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.TuiGuang_FanUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class VIPUI extends View {
		public bar_jindu:Laya.ProgressBar;
		public box_sk:Laya.Box;
		public vip_cur:Laya.Image;
		public vip_next:Laya.Image;
		public btn_close:Laya.Button;
		public lb_max:Laya.Label;
		public box_jd:Laya.Box;
		public clip_jindu:Laya.Clip;
		public img_tx2:Laya.Image;
		public img_tx1:Laya.Image;
		public btn_right:Laya.Image;
		public btn_left:Laya.Image;
		public panel_click:Laya.Panel;
		public box_info:ui.ajqp.dating.component.VipSlideTUI;
		public box_info1:ui.ajqp.dating.component.VipSlideTUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":46,"x":565,"skin":"dating_ui/vip/tu-lb1.png"}},{"type":"Image","props":{"skin":"dating_ui/vip/tu-lb.png","centerY":6,"centerX":11,"anchorY":0.5,"anchorX":0.5}},{"type":"ProgressBar","props":{"y":226,"x":518,"var":"bar_jindu","skin":"dating_ui/vip/progress.png","height":52}},{"type":"Box","props":{"width":325,"var":"box_sk","height":500,"centerY":-7,"centerX":-292}},{"type":"Image","props":{"y":250,"x":504,"var":"vip_cur","skin":"dating_ui/vip/tu_vip1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":250,"x":970,"var":"vip_next","skin":"dating_ui/vip/tu_vip2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":201,"x":1090,"var":"btn_close","stateNum":1,"skin":"dating_ui/vip/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":230,"x":527,"width":426,"var":"lb_max","valign":"middle","text":"已达满级","height":39,"fontSize":30,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":233,"x":533,"width":360,"var":"box_jd","height":32},"child":[{"type":"Clip","props":{"var":"clip_jindu","skin":"dating_ui/vip/clip_1-11.png","clipX":10,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":3,"x":214,"var":"img_tx2","skin":"dating_ui/vip/tu_jksj.png"}},{"type":"Image","props":{"y":3,"x":100,"var":"img_tx1","skin":"dating_ui/vip/tu_cz.png"}}]},{"type":"Image","props":{"y":366,"x":1092,"var":"btn_right","skin":"dating_ui/vip/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":366,"x":353,"var":"btn_left","skin":"dating_ui/vip/btn_jt.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":260,"x":429,"width":640,"var":"panel_click","height":300},"child":[{"type":"VipSlideT","props":{"y":0,"x":0,"width":640,"var":"box_info","height":300,"runtime":"ui.ajqp.dating.component.VipSlideTUI"}},{"type":"VipSlideT","props":{"y":0,"x":640,"width":640,"var":"box_info1","height":300,"runtime":"ui.ajqp.dating.component.VipSlideTUI"}}]},{"type":"Image","props":{"y":141,"x":735,"skin":"dating_ui/vip/tu_bt.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.VipSlideTUI",ui.ajqp.dating.component.VipSlideTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.VIPUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class VipUpUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public btn_goto:Laya.Button;
		public clip_num:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":75,"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"dating_ui/tongyong/tu_gxhd.png","centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":202,"skin":"dating_ui/tongyong/tu_gxgx.png","centerX":0,"blendMode":"lighter","anchorY":1,"anchorX":0.5,"alpha":0.9478260869565217},"compId":67},{"type":"Image","props":{"y":210,"x":609,"skin":"dating_ui/vip/tu_gongxi.png","centerY":-150,"centerX":-31,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"skin":"dating_ui/tongyong/tu_gxxx.png","centerX":0}},{"type":"Image","props":{"y":100,"x":441,"skin":"dating_ui/tongyong/tu_gxjb1.png"},"compId":76},{"type":"Image","props":{"y":103,"x":801,"skin":"dating_ui/tongyong/tu_gxjb2.png"},"compId":77},{"type":"Image","props":{"y":151.91304347826087,"x":488,"skin":"dating_ui/tongyong/tu_gxjb3.png"},"compId":78},{"type":"Image","props":{"y":173.6,"x":767,"skin":"dating_ui/tongyong/tu_gxjb4.png"},"compId":79},{"type":"Image","props":{"y":122,"skin":"dating_ui/tongyong/al10001.png","centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":85},{"type":"Image","props":{"y":140.25,"x":646.5,"skin":"dating_ui/tongyong/tu_gxcd1.png","rotation":5.176470588235294,"alpha":0.25},"compId":80},{"type":"Image","props":{"y":71.91304347826087,"x":565.2608695652174,"skin":"dating_ui/tongyong/tu_gxcd2.png","rotation":3.8181818181818183,"alpha":0.17391304347826086},"compId":81},{"type":"Image","props":{"y":145.55172413793105,"x":502.6896551724138,"skin":"dating_ui/tongyong/tu_gxcd3.png","rotation":6.111111111111111,"alpha":0.13793103448275862},"compId":82},{"type":"Image","props":{"y":94.32558139534883,"x":789.8604651162791,"skin":"dating_ui/tongyong/tu_gxcd4.png","rotation":5.674418604651163,"alpha":0.19047619047619047},"compId":83},{"type":"Box","props":{"y":514,"width":352,"height":94,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":350,"var":"btn_goto","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_tanchuanganniu.png","height":96,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"skin":"dating_ui/vip/tu_qwlq.png","centerX":0}}]}]},{"type":"Image","props":{"y":303,"x":452,"skin":"dating_ui/vip/tu_vipup.png"}},{"type":"Image","props":{"y":392,"x":559,"skin":"dating_ui/vip/tu_vipup1.png"}},{"type":"Label","props":{"y":589,"text":"点击空白处关闭","fontSize":28,"color":"#ffffff","centerX":0}},{"type":"Box","props":{"y":360,"x":666,"width":180,"height":105},"child":[{"type":"Clip","props":{"var":"clip_num","skin":"dating_ui/vip/clip_1-10.png","index":1,"clipX":10,"centerY":0,"centerX":-40,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":360,"x":640,"skin":"dating_ui/tongyong/huode/10008.png","scaleY":1.3,"scaleX":1.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":96}]}],"animations":[{"nodes":[{"target":85,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":4},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":8},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":16},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":20},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":28},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":32},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":36},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":40},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":85,"key":"skin","index":44}]}},{"target":78,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":0},{"value":142,"tweenMethod":"linearNone","tween":true,"target":78,"key":"y","index":23},{"value":154,"tweenMethod":"linearNone","tween":true,"target":78,"label":null,"key":"y","index":44}]}},{"target":79,"keyframes":{"y":[{"value":172,"tweenMethod":"linearNone","tween":true,"target":79,"key":"y","index":0},{"value":178,"tweenMethod":"linearNone","tween":true,"target":79,"key":"y","index":15},{"value":172,"tweenMethod":"linearNone","tween":true,"target":79,"label":null,"key":"y","index":36}]}},{"target":76,"keyframes":{"y":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"key":"y","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"label":null,"key":"y","index":12},{"value":96,"tweenMethod":"linearNone","tween":true,"target":76,"key":"y","index":29},{"value":100,"tweenMethod":"linearNone","tween":true,"target":76,"label":null,"key":"y","index":44}]}},{"target":77,"keyframes":{"y":[{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"key":"y","index":0},{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"label":null,"key":"y","index":5},{"value":110,"tweenMethod":"linearNone","tween":true,"target":77,"key":"y","index":25},{"value":103,"tweenMethod":"linearNone","tween":true,"target":77,"label":null,"key":"y","index":39}]}},{"target":81,"keyframes":{"y":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":0},{"value":176,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":23},{"value":271,"tweenMethod":"linearNone","tween":true,"target":81,"key":"y","index":44}],"x":[{"value":571,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":0},{"value":538,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":23},{"value":529,"tweenMethod":"linearNone","tween":true,"target":81,"key":"x","index":44}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":0},{"value":42,"tweenMethod":"linearNone","tween":true,"target":81,"key":"rotation","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":81,"key":"alpha","index":44}]}},{"target":82,"keyframes":{"y":[{"value":125,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":0},{"value":274,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":29},{"value":337,"tweenMethod":"linearNone","tween":true,"target":82,"key":"y","index":36}],"x":[{"value":506,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":0},{"value":482,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":29},{"value":477,"tweenMethod":"linearNone","tween":true,"target":82,"key":"x","index":36}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":0},{"value":55,"tweenMethod":"linearNone","tween":true,"target":82,"key":"rotation","index":36}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":29},{"value":0,"tweenMethod":"linearNone","tween":true,"target":82,"key":"alpha","index":36}]}},{"target":83,"keyframes":{"y":[{"value":64,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":0},{"value":390,"tweenMethod":"linearNone","tween":true,"target":83,"key":"y","index":43}],"x":[{"value":792,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":0},{"value":769,"tweenMethod":"linearNone","tween":true,"target":83,"key":"x","index":43}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":0},{"value":61,"tweenMethod":"linearNone","tween":true,"target":83,"key":"rotation","index":43}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":83,"key":"alpha","index":43}]}},{"target":80,"keyframes":{"y":[{"value":115,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":0},{"value":216,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":16},{"value":314,"tweenMethod":"linearNone","tween":true,"target":80,"key":"y","index":34}],"x":[{"value":643,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":0},{"value":657,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":16},{"value":660,"tweenMethod":"linearNone","tween":true,"target":80,"key":"x","index":34}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"rotation","index":0},{"value":44,"tweenMethod":"linearNone","tween":true,"target":80,"key":"rotation","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":80,"key":"alpha","index":34}]}},{"target":67,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":23},{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":44}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":96,"keyframes":{"skin":[{"value":"dating_ui/tongyong/huode/10000.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":0},{"value":"dating_ui/tongyong/huode/10001.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":2},{"value":"dating_ui/tongyong/huode/10002.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":4},{"value":"dating_ui/tongyong/huode/10003.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":6},{"value":"dating_ui/tongyong/huode/10004.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":8},{"value":"dating_ui/tongyong/huode/10005.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":10},{"value":"dating_ui/tongyong/huode/10006.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":12},{"value":"dating_ui/tongyong/huode/10007.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":14},{"value":"dating_ui/tongyong/huode/10008.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":16},{"value":"dating_ui/tongyong/huode/10009.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":18},{"value":"dating_ui/tongyong/huode/10010.png","tweenMethod":"linearNone","tween":false,"target":96,"key":"skin","index":20}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":21}]}},{"target":75,"keyframes":{"mouseThrough":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":75,"key":"mouseThrough","index":0}]}}],"name":"ani2","id":2,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.VipUpUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class XinXiUI extends View {
		public btn_close:Laya.Button;
		public box_mail:Laya.Box;
		public list_mail:Laya.List;
		public txt_no_mail:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1088,"height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaKuang_1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.DaKuang_1UI"}},{"type":"Image","props":{"y":236,"x":210,"width":864,"skin":"dating_ui/tongyong/di/tu_kuangdi.png"}},{"type":"Image","props":{"top":20,"skin":"dating_ui/xinxi/tit_message.png","centerX":0}},{"type":"Button","props":{"y":33,"x":1059,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":75,"x":17,"width":1055,"var":"box_mail","height":510},"child":[{"type":"List","props":{"y":0,"x":0,"width":1055,"var":"list_mail","spaceY":2,"spaceX":1,"height":510,"centerY":0,"centerX":0,"cacheAsBitmap":true},"child":[{"type":"XinXi_lb","props":{"y":11,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.XinXi_lbUI"}}]},{"type":"Image","props":{"width":120,"var":"txt_no_mail","skin":"dating_ui/tongyong/di/tu_4.png","height":120,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":127,"text":"---老板，您暂时还没有邮件哦---","fontSize":25,"color":"#58586d","centerX":12,"align":"center"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.DaKuang_1UI",ui.ajqp.dating.component.DaKuang_1UI);
			View.regComponent("ui.ajqp.dating.component.XinXi_lbUI",ui.ajqp.dating.component.XinXi_lbUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.XinXiUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class XinXi1UI extends View {
		public panel:Laya.Panel;
		public txt_content:Laya.Label;
		public btn_close:Laya.Button;
		public txt_validTime:Laya.Label;
		public btn_shanchu:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Image","props":{"y":207,"x":41,"width":816,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":329}},{"type":"Panel","props":{"width":818,"var":"panel","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":450,"centerY":29,"centerX":0},"child":[{"type":"Label","props":{"y":10,"x":9,"wordWrap":true,"width":800,"var":"txt_content","leading":8,"height":430,"fontSize":22,"color":"#c8bc9f"}}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"top":20,"skin":"dating_ui/xinxi/tit_youjian.png","centerX":0}},{"type":"Label","props":{"y":466,"x":659,"text":"有效期：","fontSize":23,"color":"#28ff00"}},{"type":"Label","props":{"y":466,"x":742,"var":"txt_validTime","text":"30","fontSize":23,"color":"#ff000a"}},{"type":"Box","props":{"y":479,"x":421,"width":244,"var":"btn_shanchu","height":76,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png"}},{"type":"Image","props":{"x":76,"skin":"dating_ui/tongyong/tu_sc01.png","centerY":-3,"centerX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.XinXi1UI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class XinXi_lb2UI extends View {
		public txt_title:laya.display.Text;
		public txt_content:laya.display.Text;
		public txt_name:laya.display.Text;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1055,"height":123},"child":[{"type":"Box","props":{"y":0,"x":0,"width":842,"height":123},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1055,"skin":"dating_ui/tongyong/di/tu_0.png","sizeGrid":"30,30,30,30","height":123}},{"type":"Image","props":{"y":63,"x":765,"width":225,"skin":"dating_ui/tongyong/di/tu_3.png","sizeGrid":"0,19,0,18","height":38}},{"type":"Image","props":{"y":-5,"x":157,"skin":"dating_ui/tongyong/di/tu_2.png"}},{"type":"Image","props":{"y":17,"x":80,"skin":"dating_ui/tongyong/di/tu_1.png"}},{"type":"Image","props":{"y":61,"x":62,"skin":"dating_ui/xinxi/tu_weidu.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":18,"x":623,"skin":"dating_ui/xinxi/tu_yy.png"}},{"type":"Text","props":{"y":19,"x":131,"width":277,"var":"txt_title","text":"邮件标题可以显示12个字","height":28,"fontSize":25,"color":"#ffe8c7"}},{"type":"Text","props":{"y":74,"x":131,"wordWrap":true,"width":350,"var":"txt_content","text":"点击阅读查看详情","overflow":"hidden","height":30,"fontSize":22,"color":"#766752","align":"left"}},{"type":"Text","props":{"y":72,"x":765,"width":225,"var":"txt_name","text":"发件人：GM","height":20,"fontSize":20,"color":"#c0a072","align":"center"}},{"type":"Text","props":{"y":19,"x":775,"width":206,"var":"txt_time","text":"2020-8-15 22:11:11","height":24,"fontSize":24,"color":"#e2cdae","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.XinXi_lb2UI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class YuEBaoUI extends View {
		public box:Laya.Box;
		public btn_tabs:Laya.Tab;
		public box_zc:Laya.Box;
		public bar_zc:Laya.HSlider;
		public btn_zc_zhuanchu:Laya.Button;
		public txt_zc_curMoney:laya.display.Text;
		public txt_zc_yuebao:laya.display.Text;
		public view_zc:ui.ajqp.dating.component.TextInputUI;
		public btn_zc_cancle:Laya.Button;
		public btn_zc_max:Laya.Button;
		public box_zr:Laya.Box;
		public bar_zr:Laya.HSlider;
		public btn_zr_zhuanru:Laya.Button;
		public txt_zr_curMoney:laya.display.Text;
		public txt_zr_yuebao:laya.display.Text;
		public view_zr:ui.ajqp.dating.component.TextInputUI;
		public btn_zr_cancle:Laya.Button;
		public btn_zr_max:Laya.Button;
		public txt_zr_lixi:Laya.Label;
		public box_jilu:Laya.Box;
		public list_jilu:Laya.List;
		public txt_jilu_no:Laya.Image;
		public box_xx:Laya.Box;
		public btn_help:Laya.Button;
		public clip_money:Laya.Clip;
		public txt_preGet:Laya.Label;
		public txt_totalGet:Laya.Label;
		public txt_evGet:Laya.Label;
		public txt_evRate:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"var":"box","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang0UI"}},{"type":"Box","props":{"y":360,"x":640,"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":20,"skin":"dating_ui/yuebao/tit_access.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":73,"x":13,"var":"btn_tabs"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"dating_ui/yuebao/btn_xx.png","name":"item0"}},{"type":"Button","props":{"y":84,"stateNum":2,"skin":"dating_ui/yuebao/btn_zhuanru.png","name":"item1"}},{"type":"Button","props":{"y":168,"stateNum":2,"skin":"dating_ui/yuebao/btn_zhuanchu.png","name":"item2"}},{"type":"Button","props":{"y":252,"stateNum":2,"skin":"dating_ui/yuebao/btn_jl.png","name":"item3"}}]},{"type":"Box","props":{"y":70,"x":183,"width":648,"var":"box_zc","height":450},"child":[{"type":"Image","props":{"y":100,"x":-2,"width":647,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":351}},{"type":"HSlider","props":{"y":294,"x":323,"width":573,"var":"bar_zc","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Button","props":{"y":412,"x":324,"width":244,"var":"btn_zc_zhuanchu","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/yuebao/tu_zc.png","centerY":-3,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":20,"x":20,"width":224,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"20,20,20,20","height":170}},{"type":"Image","props":{"y":20,"x":402,"width":224,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"20,20,20,20","height":170}},{"type":"Image","props":{"y":40,"x":75,"skin":"dating_ui/yuebao/tu_xdje.png","anchorY":0,"anchorX":0}},{"type":"Image","props":{"y":40,"x":468,"skin":"dating_ui/yuebao/tu_yueb.png"}},{"type":"Image","props":{"y":66,"x":464,"skin":"dating_ui/yuebao/tu_yeb.png"}},{"type":"Image","props":{"y":48,"x":58,"skin":"dating_ui/yuebao/tu_jb.png"}},{"type":"Image","props":{"y":55,"x":288,"skin":"dating_ui/yuebao/tu_jt.png"}},{"type":"Text","props":{"y":144,"x":65,"width":133,"var":"txt_zc_curMoney","text":"3","strokeColor":"#5151a9","height":28,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":144,"x":447,"width":133,"var":"txt_zc_yuebao","text":"123456.78","strokeColor":"#5151a9","height":28,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":130,"x":292,"width":61,"text":"转出","height":30,"fontSize":30,"color":"#e5e5e5","align":"center"}},{"type":"Text","props":{"y":215,"x":19,"width":62,"text":"转  出","height":24,"fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"Image","props":{"y":230,"x":87,"width":415,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":60,"anchorY":0.5,"anchorX":0}},{"type":"TextInput","props":{"y":210,"x":93,"var":"view_zc","runtime":"ui.ajqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":207,"x":450,"var":"btn_zc_cancle","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png","scaleY":1,"scaleX":1}},{"type":"Box","props":{"y":229,"x":568,"width":107,"height":47,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":107,"var":"btn_zc_max","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_xanniu.png","sizeGrid":"20,20,20,20","labelStrokeColor":"#ffffff","labelSize":30,"labelPadding":"-4","labelFont":"SimHei","labelColors":"#ffffff","height":47,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":23,"x":54,"skin":"dating_ui/yuebao/tu_max.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"y":70,"x":183,"width":646,"var":"box_zr","height":450},"child":[{"type":"Image","props":{"y":100,"x":-2,"width":647,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":351}},{"type":"Image","props":{"x":-2,"width":648,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":59}},{"type":"HSlider","props":{"y":294,"x":323,"width":573,"var":"bar_zr","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Button","props":{"y":412,"width":244,"var":"btn_zr_zhuanru","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_hsan.png","height":76,"centerX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/yuebao/tu_zr.png","centerY":-3,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":20,"x":20,"width":224,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"20,20,20,20","height":170}},{"type":"Image","props":{"y":20,"x":402,"width":224,"skin":"dating_ui/tongyong/di/tu_7.png","sizeGrid":"20,20,20,20","height":170}},{"type":"Image","props":{"y":40,"x":75,"skin":"dating_ui/yuebao/tu_xdje.png"}},{"type":"Image","props":{"y":40,"x":468,"skin":"dating_ui/yuebao/tu_yueb.png"}},{"type":"Image","props":{"y":66,"x":464,"skin":"dating_ui/yuebao/tu_yeb.png"}},{"type":"Image","props":{"y":48,"x":58,"width":148,"skin":"dating_ui/yuebao/tu_jb.png","height":114}},{"type":"Image","props":{"y":55,"x":357,"skin":"dating_ui/yuebao/tu_jt.png","scaleX":-1}},{"type":"Text","props":{"y":144,"x":25,"width":213,"var":"txt_zr_curMoney","text":"3","strokeColor":"#5151a9","height":28,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":144,"x":408,"width":211,"var":"txt_zr_yuebao","text":"123456.78","strokeColor":"#5151a9","height":28,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":130,"x":292,"width":62,"text":"转入","height":30,"fontSize":30,"color":"#e5e5e5","align":"center"}},{"type":"Text","props":{"y":215,"x":20,"text":"转  入","fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"Image","props":{"y":230,"x":87,"width":415,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,15,15,15","height":60,"anchorY":0.5,"anchorX":0}},{"type":"TextInput","props":{"y":210,"x":93,"var":"view_zr","runtime":"ui.ajqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":207,"x":450,"var":"btn_zr_cancle","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_shuruqc.png","scaleY":1,"scaleX":1}},{"type":"Box","props":{"y":229,"x":568,"width":107,"height":47,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":107,"var":"btn_zr_max","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_xanniu.png","sizeGrid":"20,20,20,20","labelStrokeColor":"#ffffff","labelSize":30,"labelPadding":"-4","labelFont":"SimHei","labelColors":"#ffffff","height":47,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":24,"x":54,"skin":"dating_ui/yuebao/tu_max.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":332,"x":-3.5,"width":649,"height":30},"child":[{"type":"Label","props":{"var":"txt_zr_lixi","text":"明日24:00可产生利息：999999.99","fontSize":20,"color":"#b7b9de","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Box","props":{"y":70,"x":183,"width":648,"var":"box_jilu","height":451},"child":[{"type":"Image","props":{"y":100,"x":-2,"width":647,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":351}},{"type":"Image","props":{"y":-3,"x":0,"width":648,"skin":"dating_ui/tongyong/di/tu_di1.png","height":43}},{"type":"Box","props":{"y":9,"x":0,"width":646,"height":23},"child":[{"type":"Label","props":{"y":10,"x":50,"width":44,"valign":"middle","text":"类型","height":23,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":173,"width":44,"valign":"middle","text":"金额","height":23,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":10,"x":325,"width":66,"valign":"middle","text":"余额宝","height":23,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":10,"x":523,"width":44,"valign":"middle","text":"时间","height":23,"fontSize":22,"color":"#f2f3ff","anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":43,"x":0,"width":648,"var":"list_jilu","spaceY":1,"repeatY":9,"height":407,"anchorY":0,"anchorX":0},"child":[{"type":"YuEBaoT","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.dating.component.YuEBaoTUI"}}]},{"type":"Image","props":{"y":149,"x":263,"var":"txt_jilu_no","skin":"dating_ui/tongyong/di/tu_4.png"},"child":[{"type":"Label","props":{"y":123,"x":-52,"text":"老板，暂无记录哦！","fontSize":25,"color":"#58586d"}}]}]},{"type":"Box","props":{"y":70,"x":183,"width":646,"var":"box_xx","height":450},"child":[{"type":"Image","props":{"x":-2,"width":648,"skin":"dating_ui/tongyong/di.png","height":66,"bottom":87}},{"type":"Image","props":{"y":314,"x":429,"skin":"dating_ui/tongyong/di/tu_8.png","height":90}},{"type":"Image","props":{"y":314,"x":211,"skin":"dating_ui/tongyong/di/tu_8.png","height":90}},{"type":"Image","props":{"y":2,"x":5,"width":637,"skin":"dating_ui/yuebao/tu_di.png","height":291},"child":[{"type":"Label","props":{"y":42,"x":262,"text":"总金额 (元)","fontSize":23,"color":"#cfbf9b","bold":false}},{"type":"Button","props":{"y":9,"x":560,"var":"btn_help","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_bz.png"}},{"type":"Clip","props":{"var":"clip_money","skin":"dating_ui/yuebao/clip_1-9.png","index":0,"clipX":11,"centerY":-20,"centerX":-5}},{"type":"Image","props":{"y":224,"x":318,"width":320,"skin":"dating_ui/yuebao/tu_zrsy.png","sizeGrid":"30,50,20,50","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":41,"x":160,"width":320,"height":28,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":14,"x":160,"width":320,"var":"txt_preGet","text":"昨日收益           元","height":28,"fontSize":28,"color":"#ffdf92","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"y":346,"x":102,"width":124,"skin":"dating_ui/yuebao/tu_wb6.png","height":27,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":346,"x":321,"width":124,"skin":"dating_ui/yuebao/tu_wb7.png","height":27,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":346,"x":539,"width":131,"skin":"dating_ui/yuebao/tu_wb8.png","height":27,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":399,"x":102,"width":200,"var":"txt_totalGet","text":"0","fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":399,"x":321,"width":200,"var":"txt_evGet","text":"0","fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":399,"x":539,"width":200,"var":"txt_evRate","text":"10000‱","height":30,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":28,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang0UI",ui.ajqp.dating.component.ZhongKuang0UI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.dating.component.TextInputUI",ui.ajqp.dating.component.TextInputUI);
			View.regComponent("ui.ajqp.dating.component.YuEBaoTUI",ui.ajqp.dating.component.YuEBaoTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.YuEBaoUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class YuEBao_BZUI extends View {
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":664,"height":437,"centerY":0,"centerX":0},"child":[{"type":"XiaoKuang0","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.XiaoKuang0UI"}},{"type":"Image","props":{"y":180,"x":22,"width":622,"skin":"dating_ui/tongyong/di/tu_kuangdi.png","height":251}},{"type":"Button","props":{"y":26,"x":629,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":84,"x":-12,"skin":"dating_ui/yuebao/tu_ydt.png"}},{"type":"Image","props":{"top":20,"skin":"dating_ui/yuebao/tit_bz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":90,"x":114,"skin":"dating_ui/yuebao/tu_sy.png"}},{"type":"Image","props":{"y":169,"x":35,"skin":"dating_ui/yuebao/tu_lgl.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.XiaoKuang0UI",ui.ajqp.dating.component.XiaoKuang0UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.YuEBao_BZUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ZhuanPanUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public box_info:Laya.Box;
		public lb_have:Laya.Label;
		public lb_total:Laya.Label;
		public guanbi:Laya.Box;
		public zuanshipan:Laya.Box;
		public box_run_zuanshi:Laya.Box;
		public list_zuanshi:Laya.List;
		public img_get_zs:Laya.Image;
		public btn_go_zuanshi:Laya.Box;
		public lb_zs_times:Laya.Label;
		public bojinpan:Laya.Box;
		public box_run_bojin:Laya.Box;
		public list_bojin:Laya.List;
		public img_get_bojin:Laya.Image;
		public btn_go_bojin:Laya.Box;
		public lb_bj_times:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":819,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.64},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/zhuanpan/tu_d.png","centerY":45,"centerX":0}},{"type":"Box","props":{"width":285,"var":"box_info","height":33,"centerY":165,"centerX":435,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-55,"skin":"dating_ui/zhuanpan/tu_di.png"}},{"type":"Label","props":{"y":4,"x":122,"var":"lb_have","text":"123456","fontSize":22,"color":"#73ff68","bold":true}},{"type":"Label","props":{"y":4,"x":211,"width":65,"var":"lb_total","text":"/10000","height":25,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":4,"x":12,"width":101,"text":"当前积分：","height":30,"fontSize":22,"color":"#ffd67f","bold":true}}]},{"type":"Box","props":{"y":184,"x":877},"child":[{"type":"Image","props":{"y":1,"x":156,"skin":"dating_ui/zhuanpan/tu_lpjl.png"}},{"type":"Image","props":{"y":33,"skin":"dating_ui/zhuanpan/tu_di.png"}},{"type":"Image","props":{"y":40,"x":281,"skin":"dating_ui/zhuanpan/tu_sj.png"}},{"type":"Image","props":{"y":40,"x":173,"skin":"dating_ui/zhuanpan/tu_jl.png"}},{"type":"Image","props":{"y":40,"x":66,"skin":"dating_ui/zhuanpan/tu_lx.png"}},{"type":"List","props":{"y":60,"x":35,"width":362,"spaceY":2,"height":120},"child":[{"type":"ZhuanPanT2","props":{"y":8,"x":-1,"renderType":"render","runtime":"ui.ajqp.dating.component.ZhuanPanT2UI"}}]},{"type":"Box","props":{"y":207,"x":216,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":10,"x":40,"width":80,"underlineColor":"#8fff2c","underline":true,"text":"查看更多","height":20,"fontSize":20,"color":"#8fff2c","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":11,"x":96,"skin":"dating_ui/zhuanpan/tu_zs2.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":166,"x":1247,"width":39,"var":"guanbi","height":40,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":20,"x":20,"width":39,"stateNum":1,"skin":"dating_ui/zhuanpan/btn_gb.png","height":40,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Panel","props":{"y":408,"x":939,"width":277,"height":90},"child":[{"type":"ZhuanPan_JiLu","props":{"centerX":0,"runtime":"ui.ajqp.dating.component.ZhuanPan_JiLuUI"}},{"type":"ZhuanPan_JiLu","props":{"y":30,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhuanPan_JiLuUI"}},{"type":"ZhuanPan_JiLu","props":{"y":60,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhuanPan_JiLuUI"}},{"type":"ZhuanPan_JiLu","props":{"y":90,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhuanPan_JiLuUI"}}]},{"type":"Clip","props":{"y":594,"x":187,"skin":"dating_ui/zhuanpan/btn_1.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":595,"x":1080,"skin":"dating_ui/zhuanpan/btn_2.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":185,"x":19,"skin":"dating_ui/zhuanpan/tu_bz.png"}},{"type":"Box","props":{"y":385,"x":631,"width":1280,"var":"zuanshipan","height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"skin":"dating_ui/zhuanpan/tu_zp2.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":526,"var":"box_run_zuanshi","rotation":0,"height":526,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":263,"x":263,"skin":"dating_ui/zhuanpan/tu_zp3.png","rotation":0,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":333,"var":"list_zuanshi","height":333,"centerY":81,"centerX":129},"child":[{"type":"ZhuanPanT","props":{"y":85,"name":"item0","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":45,"name":"item1","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":90,"name":"item2","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":135,"name":"item3","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":180,"name":"item4","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":225,"name":"item5","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":270,"name":"item6","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":315,"name":"item7","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}}]}]},{"type":"Image","props":{"width":185,"var":"img_get_zs","skin":"dating_ui/zhuanpan/tu_pb1.png","centerY":-122,"centerX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":445},{"type":"Box","props":{"y":358,"width":211,"var":"btn_go_zuanshi","height":211,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":106,"skin":"dating_ui/zhuanpan/tu_zpjt2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":106,"x":106,"stateNum":1,"skin":"dating_ui/zhuanpan/btn_zp2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":129,"x":80,"skin":"dating_ui/zhuanpan/tu_kzcs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":129,"x":138,"skin":"dating_ui/zhuanpan/tu_ci.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":120,"x":92,"width":41,"var":"lb_zs_times","valign":"middle","text":"1111","strokeColor":"#a87033","stroke":3,"height":17,"fontSize":17,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":385,"x":631,"width":720,"var":"bojinpan","height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/zhuanpan/tu_zp1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":526,"var":"box_run_bojin","height":526,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":502,"skin":"dating_ui/zhuanpan/tu_zp4.png","height":502,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":333,"var":"list_bojin","height":333,"centerY":81,"centerX":129},"child":[{"type":"ZhuanPanT","props":{"y":85,"name":"item0","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":45,"name":"item1","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":90,"name":"item2","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":135,"name":"item3","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":180,"name":"item4","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":225,"name":"item5","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":270,"name":"item6","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":315,"name":"item7","centerX":-120,"runtime":"ui.ajqp.dating.component.ZhuanPanTUI"}}]}]},{"type":"Image","props":{"y":366,"x":364,"width":193,"skin":"dating_ui/zhuanpan/tu_g.png","rotation":182,"height":246,"anchorY":1,"anchorX":0.5,"alpha":0.5},"compId":619},{"type":"Image","props":{"y":360,"x":360,"skin":"dating_ui/zhuanpan/tu_quan.png","scaleY":0.19743589743589746,"scaleX":0.19743589743589746,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8205128205128205},"compId":618},{"type":"Image","props":{"y":361,"x":363,"var":"img_get_bojin","skin":"dating_ui/zhuanpan/tu_pb.png","anchorY":1,"anchorX":0.5,"alpha":100},"compId":437},{"type":"Box","props":{"width":211,"var":"btn_go_bojin","height":211,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":22,"x":107,"skin":"dating_ui/zhuanpan/tu_zpjt1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":104,"x":107,"stateNum":1,"skin":"dating_ui/zhuanpan/btn_zp02.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":95,"x":107,"skin":"dating_ui/zhuanpan/tu_go.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":135,"x":78,"skin":"dating_ui/zhuanpan/tu_kzcs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":134,"x":141,"skin":"dating_ui/zhuanpan/tu_ci.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":122,"x":93,"width":41,"var":"lb_bj_times","valign":"middle","text":"1111","strokeColor":"#a87033","stroke":3,"height":21,"fontSize":18,"color":"#ffffff","align":"center"}}]}]}]}],"animations":[{"nodes":[{"target":437,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":7}]}}],"name":"ani1","id":10,"frameRate":24,"action":0},{"nodes":[{"target":445,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":7}]}}],"name":"ani2","id":11,"frameRate":24,"action":0},{"nodes":[{"target":618,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":618,"key":"scaleY","index":80},{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"scaleY","index":81},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"scaleY","index":160}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":618,"key":"scaleX","index":80},{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"scaleX","index":81},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"scaleX","index":160}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":618,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"alpha","index":81},{"value":0,"tweenMethod":"linearNone","tween":true,"target":618,"label":null,"key":"alpha","index":160}]}},{"target":619,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":0},{"value":43,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":20},{"value":88,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":40},{"value":135,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":60},{"value":182,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":80},{"value":227,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":100},{"value":272,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":120},{"value":316,"tweenMethod":"linearNone","tween":false,"target":619,"key":"rotation","index":140},{"value":0,"tweenMethod":"linearNone","tween":true,"target":619,"key":"rotation","index":160}]}}],"name":"ani3","id":12,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhuanPanT2UI",ui.ajqp.dating.component.ZhuanPanT2UI);
			View.regComponent("ui.ajqp.dating.component.ZhuanPan_JiLuUI",ui.ajqp.dating.component.ZhuanPan_JiLuUI);
			View.regComponent("ui.ajqp.dating.component.ZhuanPanTUI",ui.ajqp.dating.component.ZhuanPanTUI);

            super.createChildren();
            this.createView(ui.ajqp.dating.ZhuanPanUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class ZhuanPan_jlUI extends View {
		public box_record:Laya.Box;
		public box_gr:Laya.Box;
		public list_gr:Laya.List;
		public box_no:Laya.Box;
		public box_self:Laya.Box;
		public txt_jifen:Laya.Label;
		public txt_mrjf:Laya.Label;
		public box_check:Laya.Box;
		public check_self:Laya.CheckBox;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":842,"height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang1","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.dating.component.ZhongKuang1UI"}},{"type":"Box","props":{"width":818,"var":"box_record","height":505,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":3,"skin":"dating_ui/zhuanpan/zhuanpan_jl.png","centerX":0}},{"type":"Image","props":{"y":53,"x":0,"width":819,"skin":"dating_ui/chongzhi/tu_czjlbtd.png","height":47},"child":[{"type":"Label","props":{"y":15,"x":84,"text":"用户","fontSize":22,"color":"#f2f3ff","align":"center"}},{"type":"Label","props":{"y":15,"x":266,"text":"获奖","fontSize":22,"color":"#f2f3ff","align":"center"}},{"type":"Label","props":{"y":16,"x":408,"text":"轮盘类型","fontSize":22,"color":"#f2f3ff","align":"center"}},{"type":"Label","props":{"y":15,"x":651,"text":"获奖时间","fontSize":22,"color":"#f2f3ff","align":"center"}}]},{"type":"Box","props":{"y":102,"x":0,"width":818,"var":"box_gr","height":375},"child":[{"type":"List","props":{"y":0,"x":0,"width":818,"var":"list_gr","renderType":"render","height":352},"child":[{"type":"ZhuanPanT2","props":{"renderType":"render","runtime":"ui.ajqp.dating.component.ZhuanPanT2UI"}}]}]},{"type":"Box","props":{"y":59,"x":34,"width":752,"var":"box_no","height":411},"child":[{"type":"Label","props":{"width":416,"text":"暂时没有获奖哦~好运迟早会眷顾您的","height":34,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":460,"x":77,"var":"box_self"},"child":[{"type":"Label","props":{"y":12,"x":130,"width":100,"text":"当前积分：","overflow":"hidden","height":22,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":12,"x":224,"width":95,"var":"txt_jifen","text":"99999999","overflow":"hidden","height":22,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":12,"x":396,"width":161,"text":"明日可转化积分：","overflow":"hidden","height":22,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":12,"x":554,"width":107,"var":"txt_mrjf","text":"9999999999","overflow":"hidden","height":22,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":8,"x":28,"width":95,"var":"box_check","height":27},"child":[{"type":"CheckBox","props":{"var":"check_self","stateNum":3,"skin":"dating_ui/zhuanpan/checkbox.png"}},{"type":"Label","props":{"y":4,"x":33,"width":62,"text":"仅自己","overflow":"hidden","height":22,"fontSize":18,"color":"#ffffff","bold":true,"align":"left"}}]}]}]},{"type":"Button","props":{"y":29,"x":816,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.component.ZhongKuang1UI",ui.ajqp.dating.component.ZhongKuang1UI);
			View.regComponent("ui.ajqp.dating.component.ZhuanPanT2UI",ui.ajqp.dating.component.ZhuanPanT2UI);

            super.createChildren();
            this.createView(ui.ajqp.dating.ZhuanPan_jlUI.uiView);
        }
    }
}
