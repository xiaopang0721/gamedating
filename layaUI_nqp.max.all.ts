
module ui.nqp.dating {
    export class BangDingUI extends View {
		public box_sk:Laya.Box;
		public clip:Laya.Clip;
		public btn_close:Laya.Button;
		public btn_bind:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":894,"height":510,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":-20,"skin":"dating_ui/bangding/tu_bg.png"}},{"type":"Box","props":{"y":345,"x":734,"width":199,"var":"box_sk","height":181}},{"type":"Image","props":{"y":212,"x":-80,"skin":"dating_ui/bangding/tu_renwu01.png","centerX":-67}},{"type":"Clip","props":{"y":197,"x":452,"var":"clip","skin":"dating_ui/bangding/clip_sz.png","index":9,"clipX":10}},{"type":"Image","props":{"y":42,"x":681,"skin":"dating_ui/bangding/qz10000.png"}},{"type":"Image","props":{"y":42,"x":232,"skin":"dating_ui/bangding/qz10000.png","scaleX":-1}},{"type":"Button","props":{"y":45,"x":848,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":457,"x":448,"width":284,"var":"btn_bind","height":87,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":142,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":141,"skin":"dating_ui/bangding/tu_bdsj1.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.BangDingUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class ChongZhiUI extends View {
		public box:Laya.Box;
		public box_zhuanzhang:Laya.Box;
		public box_record:Laya.Box;
		public txt_no:Laya.Image;
		public list_record:Laya.List;
		public box_cz:Laya.Box;
		public box_vip:Laya.Box;
		public list_vip:Laya.List;
		public box_qudao:Laya.Box;
		public list_qudao:Laya.List;
		public btn_clear:Laya.Button;
		public txt_input:Laya.TextInput;
		public list_money:Laya.List;
		public btn_pay:Laya.Button;
		public box_yh:Laya.Box;
		public box_yh_sk:Laya.Box;
		public list_yh:Laya.List;
		public btn_next_yh:Laya.Button;
		public txt_yh0:Laya.Label;
		public txt_yh1:Laya.Label;
		public txt_yh2:Laya.Label;
		public txt_yh3:Laya.Label;
		public btn_yh_copy0:Laya.Button;
		public btn_yh_copy1:Laya.Button;
		public btn_yh_copy2:Laya.Button;
		public btn_yh_copy3:Laya.Button;
		public txt_yh4:Laya.Label;
		public box_yh_fk:Laya.Box;
		public btn_back:Laya.Button;
		public ingput_yh0:Laya.TextInput;
		public ingput_yh1:Laya.TextInput;
		public btn_yh_tjcz:Laya.Button;
		public box_sm:Laya.Box;
		public box_smsk:Laya.Box;
		public list_sm:Laya.List;
		public btn_save_ewm:Laya.Button;
		public txt_sm4:Laya.Label;
		public btn_open_wx:Laya.Button;
		public img_wx_ewm:Laya.Image;
		public txt_sm1:Laya.Label;
		public btn_sm_copy1:Laya.Button;
		public txt_sm_zh:Laya.Label;
		public btn_next:Laya.Button;
		public box_smfk:Laya.Box;
		public btn_back_sm:Laya.Button;
		public txt_sm2:Laya.TextInput;
		public txt_sm3:Laya.TextInput;
		public btn_sm_finish:Laya.Button;
		public box_kj:Laya.Box;
		public btn_kj:Laya.Button;
		public list_tab:Laya.List;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"skin":"dating_ui/chongzhi/zhezao.png","height":720},"child":[{"type":"Box","props":{"width":1280,"var":"box","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":-6,"skin":"dating_ui/chongzhi/tu_d.png"}},{"type":"Box","props":{"width":1156,"pivotY":226,"pivotX":559,"height":625,"centerY":24,"centerX":2},"child":[{"type":"Box","props":{"y":107,"x":289,"width":872,"var":"box_zhuanzhang","height":517},"child":[{"type":"Box","props":{"y":5,"x":-19,"width":867,"var":"box_record","height":531},"child":[{"type":"Image","props":{"y":-3,"x":34,"width":835,"skin":"dating_ui/chongzhi/tu_1di.png","sizeGrid":"27,0,22,0","height":489},"child":[{"type":"Image","props":{"y":45,"x":-1,"width":841,"skin":"dating_ui/chongzhi/tu_hd.png","sizeGrid":"50,0,47,0","height":449}}]},{"type":"Image","props":{"y":284,"x":250,"var":"txt_no","skin":"dating_ui/chongzhi/tu_qip.png"},"child":[{"type":"Image","props":{"y":28,"x":21,"skin":"dating_ui/chongzhi/tu_zwgdjl.png"}},{"type":"Image","props":{"y":40,"x":197,"skin":"dating_ui/chongzhi/tu_xka.png"}}]},{"type":"List","props":{"y":61,"x":42,"width":823,"var":"list_record","spaceY":2,"repeatX":1,"height":405},"child":[{"type":"ChongZhiT1","props":{"renderType":"render","runtime":"ui.nqp.dating.component.ChongZhiT1UI"}}]},{"type":"Label","props":{"y":5,"x":69,"width":105,"valign":"middle","text":"充值金额","height":36,"fontSize":26,"font":"Microsoft YaHei","color":"#4074ae","bold":true}},{"type":"Label","props":{"y":5,"x":251,"width":105,"valign":"middle","text":"充值方式","height":36,"fontSize":26,"font":"Microsoft YaHei","color":"#4074ae","bold":true}},{"type":"Label","props":{"y":5,"x":497,"width":105,"valign":"middle","text":"充值时间","height":36,"fontSize":26,"font":"Microsoft YaHei","color":"#4074ae","bold":true}},{"type":"Label","props":{"y":5,"x":719,"width":105,"valign":"middle","text":"充值状态","height":36,"fontSize":26,"font":"Microsoft YaHei","color":"#4074ae","bold":true}}]},{"type":"Box","props":{"width":872,"var":"box_cz","height":517},"child":[{"type":"Box","props":{"y":1,"x":-15,"width":872,"var":"box_vip","height":525},"child":[{"type":"Image","props":{"y":1,"x":30,"width":835,"skin":"dating_ui/chongzhi/tu_1di.png","sizeGrid":"27,0,22,0","height":489},"child":[{"type":"Image","props":{"y":45,"x":-1,"width":841,"skin":"dating_ui/chongzhi/tu_hd.png","sizeGrid":"50,0,47,0","height":449}}]},{"type":"Label","props":{"y":11,"x":175,"width":522,"valign":"middle","text":"专属美女VIP客服一对一贴心服务，极速充值，3秒到账~！","height":27,"fontSize":20,"color":"#c39081","bold":true}},{"type":"List","props":{"y":62,"x":49,"width":803,"var":"list_vip","spaceY":2,"spaceX":22,"selectedIndex":-1,"repeatX":1,"height":411},"child":[{"type":"VipItemRender","props":{"y":2,"x":7,"renderType":"render","runtime":"ui.nqp.dating.component.VipItemRenderUI"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":866,"var":"box_qudao","height":531},"child":[{"type":"Box","props":{"y":9,"x":32,"width":812,"height":72},"child":[{"type":"List","props":{"width":812,"var":"list_qudao","spaceX":4,"height":72},"child":[{"type":"ChongZhi_dsf","props":{"renderType":"render","runtime":"ui.nqp.dating.component.ChongZhi_dsfUI"}}]}]},{"type":"Image","props":{"y":68,"x":15,"skin":"dating_ui/chongzhi/tu_1di.png","sizeGrid":"0,0,0,0"},"child":[{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_hd.png"}},{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_lan.png"}}]},{"type":"Image","props":{"y":85,"x":320,"width":290,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,26,0,25","height":48}},{"type":"Label","props":{"y":90,"x":161,"width":118,"valign":"middle","text":"充值金额：","height":40,"fontSize":30,"color":"#136fb7","bold":true}},{"type":"Button","props":{"y":77,"x":617,"var":"btn_clear","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png"},"child":[{"type":"Image","props":{"y":17,"x":37,"skin":"dating_ui/chongzhi/tu_qc.png"}}]},{"type":"TextInput","props":{"y":112,"x":469,"width":257,"var":"txt_input","valign":"middle","sizeGrid":"15,24,17,25","restrict":"0-9","promptColor":"#5d88b9","prompt":"充值金额不低于10元","padding":"-1,0,0,16","maxChars":11,"height":62,"fontSize":26,"color":"#0c4096","anchorY":0.5,"anchorX":0.5,"alpha":0.5,"align":"left"}},{"type":"List","props":{"width":753,"var":"list_money","spaceY":10,"spaceX":10,"selectedIndex":-1,"repeatY":2,"repeatX":4,"height":189,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"MoneyItemRender","props":{"renderType":"render","runtime":"ui.nqp.dating.component.MoneyItemRenderUI"}}]},{"type":"Button","props":{"y":450,"x":448,"var":"btn_pay","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":37,"skin":"dating_ui/chongzhi/tu_ljcz.png"}}]},{"type":"Image","props":{"y":378,"x":180,"skin":"dating_ui/chongzhi/tu_dsf.png"}},{"type":"Image","props":{"y":83,"x":305,"skin":"dating_ui/tongyong/icon_money1.png"}}]}]}]},{"type":"Box","props":{"y":114,"x":298,"width":864,"var":"box_yh","height":523},"child":[{"type":"Box","props":{"y":34,"x":1,"width":866,"var":"box_yh_sk","height":456},"child":[{"type":"List","props":{"width":795,"var":"list_yh","top":-31,"spaceX":4,"height":66,"centerX":-14,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ChongZhi_sk","props":{"renderType":"render","runtime":"ui.nqp.dating.component.ChongZhi_skUI"}}]},{"type":"Image","props":{"y":28,"x":5,"skin":"dating_ui/chongzhi/tu_1di.png"},"child":[{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_hd.png"}}]},{"type":"Button","props":{"y":403,"x":443,"var":"btn_next_yh","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":40,"x":120,"stateNum":1,"skin":"dating_ui/chongzhi/btn_xyb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":38,"x":188,"width":471,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,40,0,40","height":48},"child":[{"type":"Label","props":{"y":26,"x":237,"width":445,"var":"txt_yh0","valign":"middle","text":"中国银行","height":37,"fontSize":26,"color":"#125082","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":99,"x":188,"width":471,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,40,0,40","height":48},"child":[{"type":"Label","props":{"y":26,"x":238,"width":445,"var":"txt_yh1","valign":"middle","text":"中国银行","height":37,"fontSize":26,"color":"#125082","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":159,"x":188,"width":471,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,40,0,40","height":48},"child":[{"type":"Label","props":{"y":25,"x":238,"width":445,"var":"txt_yh2","valign":"middle","text":"中国银行","height":37,"fontSize":26,"color":"#125082","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":217,"x":188,"width":471,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,40,0,40","height":48},"child":[{"type":"Label","props":{"y":25,"x":238,"width":445,"var":"txt_yh3","valign":"middle","text":"中国银行","height":37,"fontSize":26,"color":"#125082","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":61,"x":740,"var":"btn_yh_copy0","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":20,"skin":"dating_ui/chongzhi/tu_djfz.png"}}]},{"type":"Button","props":{"y":121,"x":740,"var":"btn_yh_copy1","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":20,"skin":"dating_ui/chongzhi/tu_djfz.png"}}]},{"type":"Button","props":{"y":180,"x":740,"var":"btn_yh_copy2","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":20,"skin":"dating_ui/chongzhi/tu_djfz.png"}}]},{"type":"Button","props":{"y":240,"x":740,"var":"btn_yh_copy3","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":20,"skin":"dating_ui/chongzhi/tu_djfz.png"}}]},{"type":"Image","props":{"y":278,"x":27,"skin":"dating_ui/chongzhi/tu_wxts.png"}},{"type":"Label","props":{"y":335,"x":88,"wordWrap":true,"width":680,"var":"txt_yh4","valign":"middle","text":"本账号最低       元起充，低于        元充值不受理，充值款转入后点击“下一步”","leading":4,"height":34,"fontSize":19,"color":"#3d77b3","bold":true,"align":"left"}},{"type":"Label","props":{"y":42,"x":54,"width":117,"valign":"middle","text":"收款银行：","height":37,"fontSize":26,"color":"#4074ae","bold":true}},{"type":"Label","props":{"y":102,"x":77,"width":93,"valign":"middle","text":"收款人：","height":37,"fontSize":26,"color":"#4074ae","bold":true}},{"type":"Label","props":{"y":163,"x":54,"width":117,"valign":"middle","text":"收款账号：","height":37,"fontSize":26,"color":"#4074ae","bold":true}},{"type":"Label","props":{"y":223,"x":54,"width":117,"valign":"middle","text":"开户支行：","height":37,"fontSize":26,"color":"#4074ae","bold":true}}]},{"type":"Box","props":{"x":421,"width":866,"var":"box_yh_fk","height":522,"centerY":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-3,"x":18,"width":835,"skin":"dating_ui/chongzhi/tu_1di.png","sizeGrid":"27,0,22,0","height":490},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":841,"skin":"dating_ui/chongzhi/tu_hd.png","sizeGrid":"50,0,47,0","height":361}},{"type":"Image","props":{"skin":"dating_ui/chongzhi/tu_lan.png"}}]},{"type":"Label","props":{"y":17,"x":64,"width":112,"text":"付款信息","height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#136fb7","bold":true}},{"type":"Button","props":{"y":441,"x":188,"var":"btn_back","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":14,"x":54,"stateNum":1,"skin":"dating_ui/chongzhi/btn_syb.png"}}]},{"type":"Label","props":{"y":97,"x":59,"width":112,"valign":"middle","text":"充值金额：","height":37,"fontSize":24,"color":"#ae705d","bold":true}},{"type":"Image","props":{"y":141,"x":59,"width":756,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,29,0,27","height":48},"child":[{"type":"TextInput","props":{"y":8,"x":10,"width":457,"var":"ingput_yh0","restrict":"0-9.","promptColor":"#c0e1ff","prompt":"请输入充值金额","height":34,"fontSize":24,"color":"#ffffff"}}]},{"type":"Image","props":{"y":260,"x":59,"width":756,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,29,0,27","height":48},"child":[{"type":"TextInput","props":{"y":8,"x":10,"width":457,"var":"ingput_yh1","restrict":"\\u4e00-\\u9fa5A-Za-z0-9","promptColor":"#c5e3ff","prompt":"请输入转账的姓名或卡号后四位","height":34,"fontSize":24,"color":"#ffffff"}}]},{"type":"Button","props":{"y":441,"x":677,"var":"btn_yh_tjcz","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":14,"x":39,"stateNum":1,"skin":"dating_ui/chongzhi/btn_tjcz.png"}}]},{"type":"Label","props":{"y":216,"x":58,"width":112,"valign":"middle","text":"充值凭证：","height":37,"fontSize":24,"color":"#ae705d","bold":true}},{"type":"Label","props":{"y":361,"x":204,"width":449,"valign":"middle","text":"填写好对应的存款信息后点击“提交充值”","height":37,"fontSize":24,"color":"#da5e4b","bold":true}}]}]},{"type":"Box","props":{"y":341,"x":521,"width":889,"var":"box_sm","pivotY":244,"pivotX":234,"height":532},"child":[{"type":"Box","props":{"y":257,"x":423,"width":872,"var":"box_smsk","height":513,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"List","props":{"y":15,"x":40,"width":780,"var":"list_sm","spaceX":4,"height":73},"child":[{"type":"ChongZhi_sk","props":{"renderType":"render","runtime":"ui.nqp.dating.component.ChongZhi_skUI"}}]},{"type":"Image","props":{"y":78,"x":29,"skin":"dating_ui/chongzhi/tu_1di.png"},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"dating_ui/chongzhi/tu_hd.png"}}]},{"type":"Button","props":{"y":207,"x":607,"width":214,"var":"btn_save_ewm","stateNum":1,"skin":"dating_ui/chongzhi/btn_ann.png","height":75},"child":[{"type":"Image","props":{"y":19,"x":20,"skin":"dating_ui/chongzhi/tu_bcewm.png"}}]},{"type":"Label","props":{"y":387,"x":109,"wordWrap":true,"width":680,"var":"txt_sm4","text":"本账号最低       元起充，低于        元充值不受理，充值款转入后点击“下一步”","leading":4,"height":34,"fontSize":19,"font":"Microsoft YaHei","color":"#3d77b3","bold":true,"align":"left"}},{"type":"Button","props":{"y":207,"x":275,"width":194,"var":"btn_open_wx","stateNum":1,"skin":"dating_ui/chongzhi/btn_ann.png","height":75},"child":[{"type":"Image","props":{"y":18,"x":16,"skin":"dating_ui/chongzhi/tu_dkwx.png"}}]},{"type":"Image","props":{"y":325,"x":67,"skin":"dating_ui/chongzhi/tu_wxts2.png"}},{"type":"Image","props":{"y":200,"x":148,"width":170,"var":"img_wx_ewm","scaleY":1,"scaleX":1,"height":170,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":373,"width":324,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,33,0,35","height":48},"child":[{"type":"Label","props":{"y":10,"x":16,"width":235,"var":"txt_sm1","valign":"middle","text":"9999 **** **** 9999","height":32,"fontSize":26,"color":"#0c4096"}}]},{"type":"Button","props":{"y":118,"x":705,"var":"btn_sm_copy1","stateNum":1,"skin":"dating_ui/chongzhi/btn_gnan.png"},"child":[{"type":"Image","props":{"y":19,"x":22,"skin":"dating_ui/chongzhi/tu_djfz.png"}}]},{"type":"Label","props":{"y":131,"x":214,"width":155,"var":"txt_sm_zh","valign":"middle","text":"支付宝账号:","height":34,"fontSize":24,"color":"#008fc8","bold":true,"align":"right"}},{"type":"Label","props":{"y":287,"x":66,"width":164,"valign":"middle","text":"↑扫描二维码支付↑","height":22,"fontSize":16,"color":"#3d77b3","bold":true,"align":"center"}},{"type":"Button","props":{"y":458.5,"x":449.5,"var":"btn_next","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":40,"x":120,"stateNum":1,"skin":"dating_ui/chongzhi/btn_xyb.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":272,"x":428,"width":892,"var":"box_smfk","height":522,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":36,"width":835,"skin":"dating_ui/chongzhi/tu_1di.png","sizeGrid":"27,0,22,0","height":490},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":841,"skin":"dating_ui/chongzhi/tu_hd.png","sizeGrid":"50,0,47,0","height":361}},{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/chongzhi/tu_lan.png"}}]},{"type":"Button","props":{"y":443,"x":206,"var":"btn_back_sm","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":14,"x":53,"stateNum":1,"skin":"dating_ui/chongzhi/btn_syb.png"}}]},{"type":"Image","props":{"y":143,"x":77,"width":756,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,29,0,27","height":48},"child":[{"type":"TextInput","props":{"y":8,"x":10,"width":457,"var":"txt_sm2","restrict":"0-9.","promptColor":"#cee6fd","prompt":"请输入充值金额","height":34,"fontSize":24,"color":"#ffffff"}}]},{"type":"Image","props":{"y":262,"x":77,"width":756,"skin":"dating_ui/chongzhi/tu_di1.png","sizeGrid":"0,29,0,27","height":48},"child":[{"type":"TextInput","props":{"y":8,"x":10,"width":457,"var":"txt_sm3","restrict":"\\u4e00-\\u9fa5A-Za-z0-9","promptColor":"#cee6fd","prompt":"请输入转账的账号名或订单号","height":34,"fontSize":24,"color":"#ffffff"}}]},{"type":"Button","props":{"y":443,"x":695,"var":"btn_sm_finish","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":14,"x":39,"stateNum":1,"skin":"dating_ui/chongzhi/btn_tjcz.png"}}]},{"type":"Label","props":{"y":19,"x":82,"width":112,"text":"付款信息","height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#136fb7","bold":true}},{"type":"Label","props":{"y":99,"x":77,"width":112,"text":"充值金额：","height":37,"fontSize":24,"font":"Microsoft YaHei","color":"#ae705d","bold":true}},{"type":"Label","props":{"y":218,"x":76,"width":112,"text":"充值凭证：","height":37,"fontSize":24,"font":"Microsoft YaHei","color":"#ae705d","bold":true}},{"type":"Label","props":{"y":363,"x":222,"width":449,"text":"填写好对应的存款信息后点击“提交充值”","height":37,"fontSize":24,"font":"Microsoft YaHei","color":"#da5e4b","bold":false}}]}]},{"type":"Box","props":{"y":105,"x":302,"width":837,"var":"box_kj","height":496},"child":[{"type":"Image","props":{"y":443,"x":27,"width":814,"skin":"dating_ui/tongyong/tu_di.png","height":82}},{"type":"Button","props":{"y":429,"x":299,"var":"btn_kj","stateNum":1,"skin":"dating_ui/chongzhi/btn_czan.png"},"child":[{"type":"Image","props":{"y":22,"x":59,"width":119,"skin":"dating_ui/chongzhi/tu_ch.png","height":42}}]},{"type":"Image","props":{"y":3,"x":0,"width":837,"skin":"dating_ui/chongzhi/tu_chjm.png","height":430}}]}]},{"type":"List","props":{"y":183,"x":77,"width":284,"var":"list_tab","selectedIndex":0,"selectEnable":true,"height":485},"child":[{"type":"TabItemRender2","props":{"renderType":"render","runtime":"ui.nqp.dating.component.TabItemRender2UI"}}]},{"type":"Button","props":{"y":78,"x":1220,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.ChongZhiT1UI",ui.nqp.dating.component.ChongZhiT1UI);
			View.regComponent("ui.nqp.dating.component.VipItemRenderUI",ui.nqp.dating.component.VipItemRenderUI);
			View.regComponent("ui.nqp.dating.component.ChongZhi_dsfUI",ui.nqp.dating.component.ChongZhi_dsfUI);
			View.regComponent("ui.nqp.dating.component.MoneyItemRenderUI",ui.nqp.dating.component.MoneyItemRenderUI);
			View.regComponent("ui.nqp.dating.component.ChongZhi_skUI",ui.nqp.dating.component.ChongZhi_skUI);
			View.regComponent("ui.nqp.dating.component.TabItemRender2UI",ui.nqp.dating.component.TabItemRender2UI);

            super.createChildren();
            this.createView(ui.nqp.dating.ChongZhiUI.uiView);
        }
    }
}

module ui.nqp.dating {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":860,"var":"box_main","height":577,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"dating_ui/fk/tu_fk.png","centerY":0,"centerX":-221}},{"type":"Image","props":{"skin":"dating_ui/fk/tu_fk.png","scaleX":-1,"centerY":0,"centerX":226}},{"type":"Image","props":{"y":31,"width":208,"skin":"dating_ui/fk/tit_pdk.png","height":47,"centerX":0}}]},{"type":"Box","props":{"y":556,"x":855,"var":"zhifu"},"child":[{"type":"Image","props":{"y":0,"x":-6,"width":86,"skin":"dating_ui/fk/tu_fkzf.png","height":24}},{"type":"Image","props":{"y":-1,"x":88,"skin":"dating_ui/fk/tu_d3.png"}},{"type":"Image","props":{"y":0,"x":87,"skin":"dating_ui/fk/icon_money.png"}},{"type":"Label","props":{"y":0,"x":120,"width":38,"var":"txt_money","text":"99","height":27,"fontSize":24,"color":"#ffffff"}}]},{"type":"Box","props":{"y":568,"x":642,"var":"btn_create","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":2,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"x":3,"skin":"dating_ui/fk/tu_cjfj.png"}}]},{"type":"Box","props":{"y":189,"x":269},"child":[{"type":"Image","props":{"y":94,"x":-4,"skin":"dating_ui/fk/tu_d2.png"}},{"type":"Image","props":{"y":-10,"x":-8,"skin":"dating_ui/fk/tu_11.png"}},{"type":"Box","props":{"y":256,"x":3,"var":"box_1"},"child":[{"type":"Button","props":{"y":-2,"x":88,"var":"btn_1","skin":"dating_ui/shezhi/btn_guan.png"}},{"type":"Image","props":{"y":9,"skin":"dating_ui/fk/tu_2.png"}}]},{"type":"Box","props":{"y":255,"x":196,"var":"box_2"},"child":[{"type":"Image","props":{"y":11,"x":0,"skin":"dating_ui/fk/tu_3.png"}},{"type":"Button","props":{"y":0,"x":89,"var":"btn_2","skin":"dating_ui/shezhi/btn_guan.png"}}]},{"type":"Box","props":{"y":255,"x":391,"width":157,"var":"box_3","height":45},"child":[{"type":"Image","props":{"y":12,"x":3,"skin":"dating_ui/fk/tu_4.png"}},{"type":"Button","props":{"y":0,"x":73,"var":"btn_3","skin":"dating_ui/shezhi/btn_guan.png"}}]},{"type":"Box","props":{"y":255,"x":568,"var":"box_4"},"child":[{"type":"Image","props":{"y":12,"x":0,"skin":"dating_ui/fk/tu_5.png"}},{"type":"Button","props":{"y":0,"x":94,"var":"btn_4","skin":"dating_ui/shezhi/btn_guan.png"}}]},{"type":"Box","props":{"y":45,"x":-9,"var":"box_renshu"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":4,"x":34,"width":41,"var":"lb_renshu","text":"3人","height":24,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_renshu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"人数","height":30,"fontSize":26,"color":"#ffffff","bold":true}}]},{"type":"Box","props":{"y":45,"x":429,"var":"box_jushu"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":3,"x":35,"width":41,"var":"lb_jushu","text":"5局","height":27,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_jushu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"局数","height":30,"fontSize":26,"color":"#ffffff","bold":true}}]},{"type":"Box","props":{"y":121,"x":-9,"width":194,"var":"box_wanfa","height":33},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":4,"x":26,"width":53,"var":"lb_wanfa","text":"13张","height":27,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_wanfa","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"玩法","height":30,"fontSize":26,"color":"#ffffff","bold":true}},{"type":"Text","props":{"y":8,"x":194,"width":167,"var":"lb_info_wanfa","text":"无大小王（3个2)1个A","height":21,"fontSize":16,"color":"#9ef8f4","bold":true}}]},{"type":"Box","props":{"y":176,"x":-9,"var":"box_shunzi"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":1,"x":2,"width":84,"var":"lb_shunzi","valign":"middle","text":"5张起顺","height":28,"fontSize":20,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_shunzi","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":3,"x":3,"width":61,"text":"顺子","height":30,"fontSize":26,"color":"#ffffff","bold":true}}]},{"type":"Box","props":{"y":121,"x":429,"width":193,"var":"box_xianchu","height":33},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":3,"x":25,"width":52,"var":"lb_xianchu","text":"赢家","height":26,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_xianchu","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"先出","height":30,"fontSize":26,"color":"#ffffff","bold":true}},{"type":"Text","props":{"y":8,"x":191,"width":154,"var":"lb_info_xianchu","text":"首局 ♠3(先出可任意)","height":21,"fontSize":16,"color":"#9ef8f4","bold":true}}]},{"type":"Box","props":{"y":176,"x":429,"var":"box_qiangguan"},"child":[{"type":"Image","props":{"y":0,"x":67,"skin":"dating_ui/fk/tu_d1.png"},"child":[{"type":"Text","props":{"y":3,"x":25,"width":50,"var":"lb_qiangguan","text":"赢家","height":27,"fontSize":24,"color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":16,"x":166,"var":"btn_qiangguan","stateNum":1,"skin":"dating_ui/fk/btn_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":3,"width":61,"text":"抢关","height":30,"fontSize":26,"color":"#ffffff","bold":true}}]},{"type":"Image","props":{"y":227,"x":-4,"skin":"dating_ui/fk/tu_d2.png"}},{"type":"Tab","props":{"y":78,"x":36,"width":166,"var":"tab_renshu","height":270},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":36,"x":82,"width":48,"text":"3人","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":100,"x":82,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":35,"x":82,"width":48,"text":"4人","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Tab","props":{"y":79,"x":476,"width":166,"var":"tab_jushu","height":270},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":36,"x":82,"width":48,"text":"5局","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":67,"x":0,"skin":"dating_ui/fk/btn_2.png","name":"item1"},"child":[{"type":"Label","props":{"y":35,"x":82,"width":48,"text":"10局","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":135,"x":0,"skin":"dating_ui/fk/btn_2.png","name":"item2"},"child":[{"type":"Label","props":{"y":34,"x":82,"width":48,"text":"15局","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":268,"x":165,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item3"},"child":[{"type":"Label","props":{"y":34,"x":83,"width":48,"text":"20局","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Tab","props":{"y":154,"x":32,"width":166,"var":"tab_wanfa","height":270},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":36,"x":82,"width":48,"text":"16张","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":67,"x":0,"skin":"dating_ui/fk/btn_2.png","name":"item1"},"child":[{"type":"Label","props":{"y":35,"x":82,"width":48,"text":"15张","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":135,"x":0,"skin":"dating_ui/fk/btn_2.png","name":"item2"},"child":[{"type":"Label","props":{"y":34,"x":82,"width":48,"text":"13张","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":268,"x":165,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item3"},"child":[{"type":"Label","props":{"y":34,"x":83,"width":48,"text":"12张","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Tab","props":{"y":157,"x":470,"width":166,"var":"tab_xianchu","height":135},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":36,"x":82,"width":66,"text":"黑桃3","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":133,"x":165,"width":165,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":67},"child":[{"type":"Label","props":{"width":68,"text":"赢家","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Tab","props":{"y":209,"x":32,"width":166,"var":"tab_shunzi","height":135},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":36,"x":82,"width":92,"text":"5张起顺","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":133,"x":165,"width":165,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":67},"child":[{"type":"Label","props":{"width":92,"text":"6张起顺","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Tab","props":{"y":213,"x":471,"width":166,"var":"tab_qiangguan","height":135},"child":[{"type":"Button","props":{"y":1,"x":0,"skin":"dating_ui/fk/btn_1.png","name":"item0"},"child":[{"type":"Label","props":{"y":34,"x":83,"width":92,"text":"抢关","height":27,"fontSize":26,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Button","props":{"y":133,"x":165,"width":165,"skin":"dating_ui/fk/btn_1.png","rotation":180,"name":"item1","height":67},"child":[{"type":"Label","props":{"width":92,"text":"不抢","rotation":180,"height":27,"fontSize":26,"color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Button","props":{"y":111,"x":1052,"var":"btn_tc","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.ChuangJianUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
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
            this.createView(ui.nqp.dating.component.BaoBiaoTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
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
            this.createView(ui.nqp.dating.component.ChongZhiTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ChongZhiT1UI extends View {
		public txt_money:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":847,"height":46},"child":[{"type":"Box","props":{"y":0,"x":0,"width":847,"height":46},"child":[{"type":"Label","props":{"y":8,"x":26,"width":105,"var":"txt_money","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":8,"x":381,"width":247,"var":"txt_time","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":8,"x":196,"width":130,"var":"txt_type","height":30,"fontSize":26,"color":"#ae705d","align":"center"}},{"type":"Label","props":{"y":8,"x":676,"width":120,"var":"txt_zt","height":30,"fontSize":26,"color":"#1fc04c","align":"center"}}]},{"type":"Image","props":{"y":42,"x":-4,"width":827,"skin":"dating_ui/chongzhi/tu_fg.png","height":4}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.ChongZhiT1UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ChongZhi_dsfUI extends View {
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":203,"height":74},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/chongzhi/btn_kuang.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":11,"x":1,"width":203,"var":"txt_name","valign":"middle","text":"支付宝AYF支付宝支付宝","overflow":"hidden","height":34,"fontSize":25,"color":"#d86f11","bold":true,"align":"center"}},{"type":"Text","props":{"y":37,"x":-7,"width":216,"var":"txt_money","valign":"middle","text":"单笔10~1500","height":25,"fontSize":14,"color":"#d86f11","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.ChongZhi_dsfUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ChongZhi_skUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":203,"height":74},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"dating_ui/chongzhi/btn_kuang.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":19,"x":-1,"width":205,"var":"txt_name","valign":"middle","text":"支付宝AYF","overflow":"hidden","height":34,"fontSize":27,"color":"#d86f11","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.ChongZhi_skUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ChongZhi_TUI extends View {
		public txt_name:Laya.Label;
		public txt_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":283,"height":25},"child":[{"type":"Label","props":{"y":0,"x":0,"width":128,"var":"txt_name","text":"那边那个用户","height":25,"fontSize":20,"font":"黑体","color":"#efda8b"}},{"type":"Label","props":{"y":0,"x":135,"width":66,"text":"充值了","height":25,"fontSize":20,"font":"黑体","color":"#c8bc9f"}},{"type":"Label","props":{"y":0,"x":197,"width":86,"var":"txt_money","text":" 10000元","height":25,"fontSize":20,"font":"黑体","color":"#00ff47"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.ChongZhi_TUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Effect_dengdaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":67,"height":58},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/tu_dengdai.png"}},{"type":"Image","props":{"y":25,"x":33,"width":15,"skin":"dating_ui/dating/tu_zheng.png","pivotY":10,"pivotX":5,"height":15},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.Effect_dengdaiUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Effect_qdUI extends View {
		public ani1:Laya.FrameAnimation;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":138,"height":80},"child":[{"type":"Image","props":{"var":"img","skin":"dating_ui/qiandao/tu_ylq.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":5}],"scaleX":[{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":5}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":3}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.Effect_qdUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class FanYongTUI extends View {
		public img_bg:Laya.Image;
		public txt_time:Laya.Label;
		public txt_money:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":740,"height":39},"child":[{"type":"Box","props":{"y":0,"x":0,"width":740,"height":39},"child":[{"type":"Image","props":{"y":0,"width":738,"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,7,0,6","left":0,"height":39,"alpha":0.2}},{"type":"Label","props":{"y":9,"x":19,"wordWrap":true,"width":190,"var":"txt_time","text":"2019-8-30 00:46:42","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"x":273,"wordWrap":true,"width":195,"var":"txt_money","text":"551.16","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"x":542,"wordWrap":true,"width":178,"var":"txt_zt","text":"成功","height":22,"fontSize":20,"color":"#41fe69","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.FanYongTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class FenXiangT5UI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_type:Laya.Label;
		public txt_from_nickname:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":1,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,5,0,4","left":1,"height":40,"alpha":0.2}},{"type":"Label","props":{"y":8,"width":150,"var":"txt_money","left":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":192,"width":200,"var":"txt_type","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"x":416,"width":200,"var":"txt_from_nickname","height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":8,"width":200,"var":"txt_time","right":20,"height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.FenXiangT5UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class FenXiangT6UI extends View {
		public img_bg:Laya.Image;
		public txt_nickname:Laya.Label;
		public txt_bet:Laya.Label;
		public txt_selffy:Laya.Label;
		public txt_allfy:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":1,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":19,"x":315,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_di0.png","sizeGrid":"0,5,0,4","height":40,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.2}},{"type":"Label","props":{"y":8,"width":150,"var":"txt_nickname","left":20,"height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":192,"width":200,"var":"txt_bet","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"width":200,"var":"txt_selffy","right":20,"height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":8,"x":416,"width":200,"var":"txt_allfy","height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.FenXiangT6UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":512,"height":100},"child":[{"type":"Image","props":{"y":49,"x":1,"skin":"dating_ui/huode/1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/huode/1.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/huode/2.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"dating_ui/huode/3.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"dating_ui/huode/4.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dating_ui/huode/5.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"dating_ui/huode/6.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"dating_ui/huode/7.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6}]}}],"name":"ani1","id":1,"frameRate":12,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.GuangUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Guang1UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Guang","props":{"y":204,"x":343,"rotation":-148,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":218,"x":304,"scaleY":0.5,"scaleX":1.3,"rotation":-160,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":528,"x":382,"scaleX":1.3,"rotation":-196,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":510,"x":438,"scaleY":0.5,"scaleX":1.3,"rotation":-204,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":420,"x":302,"scaleY":0.3,"scaleX":1.5,"rotation":-183,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":395,"x":383,"scaleY":0.5,"scaleX":1,"rotation":-180,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":267,"x":359,"scaleY":0.5,"scaleX":1.3,"rotation":-167,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.GuangUI",ui.nqp.dating.component.GuangUI);

            super.createChildren();
            this.createView(ui.nqp.dating.component.Guang1UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Guang2UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Guang","props":{"y":218,"x":466,"rotation":-119,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":230,"x":563,"scaleY":0.5,"rotation":-97,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":286,"x":564,"scaleY":0.5,"rotation":-104,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":164,"x":837,"scaleY":1.3,"rotation":-43,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":208,"x":705,"scaleY":0.7,"rotation":-67,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":237,"x":733,"scaleY":0.4,"rotation":-54,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}},{"type":"Guang","props":{"y":168,"x":633,"scaleY":0.7,"rotation":-84,"anchorY":0.5,"runtime":"ui.nqp.dating.component.GuangUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.GuangUI",ui.nqp.dating.component.GuangUI);

            super.createChildren();
            this.createView(ui.nqp.dating.component.Guang2UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class HeadRenderTUI extends View {
		public img_head:Laya.Image;
		public img_jb:Laya.Image;
		public img_suo:Laya.Image;
		public img_select:Laya.Clip;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":111,"height":132},"child":[{"type":"Image","props":{"y":0,"x":0,"width":110,"skin":"dating_ui/shouchong/tu_wpk.png","height":110},"child":[{"type":"Image","props":{"y":7,"x":7,"width":96,"var":"img_head","height":96}},{"type":"Image","props":{"y":-2,"x":-2,"width":55,"var":"img_jb","height":55}},{"type":"Image","props":{"y":74,"x":80,"var":"img_suo","skin":"dating_ui/geren/tu_suo.png"}},{"type":"Clip","props":{"y":68,"x":68,"var":"img_select","skin":"dating_ui/geren/Clip_xz.png","right":0,"clipY":2,"bottom":0}},{"type":"Label","props":{"y":110,"x":19,"var":"txt_time","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.HeadRenderTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class HudAd_TUI extends View {
		public img_ad:Laya.Image;
		public img_ewm:Laya.Image;
		public txt_gw:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":286,"height":434},"child":[{"type":"Image","props":{"width":286,"var":"img_ad","skin":"dating_ui/datinglunbotu/tu_dl2.png","height":434}},{"type":"Box","props":{"y":290,"x":72,"width":120,"height":120},"child":[{"type":"Image","props":{"width":110,"var":"img_ewm","height":110,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":334,"x":30,"var":"txt_gw","valign":"middle","text":"www.adkdjf.com","fontSize":25,"color":"#008aff","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.HudAd_TUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class HudOne_TUI extends View {
		public btn:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":294,"height":205},"child":[{"type":"Box","props":{"y":102.5,"x":148,"width":275,"var":"btn","skewX":-10,"height":205,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.HudOne_TUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class KeFuRenderUI extends View {
		public img_logo:Laya.Image;
		public btn_link:Laya.Button;
		public txt_id:Laya.Label;
		public txt_name:Laya.Label;
		public txt_type:laya.display.Text;
		public img_head:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":880,"height":132},"child":[{"type":"Image","props":{"y":-8,"x":0,"width":733,"skin":"dating_ui/tongyong/tu_toplb5.png","sizeGrid":"0,15,0,15","scaleY":1.2,"scaleX":1.2,"height":137}},{"type":"Image","props":{"y":90,"x":217,"width":67,"var":"img_logo","skin":"dating_ui/chongzhi/WXSM.png","scaleY":0.9,"scaleX":0.9,"height":67,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":20,"x":672,"var":"btn_link","stateNum":1,"skin":"dating_ui/tongyong/btn_2anl.png"},"child":[{"type":"Image","props":{"y":17,"x":19,"skin":"dating_ui/kehu/tu_fz.png"}}]},{"type":"Label","props":{"y":75,"x":335,"wordWrap":true,"width":205,"var":"txt_id","valign":"top","leading":0,"height":28,"fontSize":28,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":11,"x":189,"wordWrap":true,"width":365,"var":"txt_name","valign":"middle","leading":8,"height":38,"fontSize":35,"color":"#ffc100","align":"left"}},{"type":"Text","props":{"y":73,"x":256,"width":96,"var":"txt_type","text":"微信：","height":30,"fontSize":28,"color":"#ffffff","bold":true}},{"type":"Image","props":{"y":0,"x":36,"width":132,"var":"img_head","skin":"dating_ui/kehu/tx_1.png","height":132}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.KeFuRenderUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class LoadingTipTUI extends View {
		public box:Laya.Box;
		public img:Laya.Image;
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":68,"height":61},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"dating_ui/dating/tu_kuang.png"}},{"type":"Box","props":{"y":9,"x":8,"var":"box"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/dating/tu_man.png","renderType":"mask"}},{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"dating_ui/dating/tu_man.png"}}]},{"type":"Label","props":{"y":16,"x":10,"width":45,"var":"txt","text":"0%","italic":true,"height":19,"fontSize":16,"color":"#7bff57","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.LoadingTipTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class MoneyItemRenderUI extends View {
		public btn_num:Laya.Button;
		public txt_num:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":180,"height":80},"child":[{"type":"Button","props":{"width":178,"var":"btn_num","stateNum":1,"skin":"dating_ui/chongzhi/clip_je.png","height":81,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":22,"x":22,"width":142,"var":"txt_num","valign":"middle","text":"5000","strokeColor":"#2daaa4","stroke":2,"height":40,"fontSize":40,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.MoneyItemRenderUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class QuKuanTUI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_type:Laya.Label;
		public txt_time:Laya.Label;
		public txt_zt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":0,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,7,0,6","left":0,"height":40,"alpha":0.2}},{"type":"Label","props":{"y":8,"wordWrap":true,"width":150,"var":"txt_money","left":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":192,"wordWrap":true,"width":200,"var":"txt_type","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":416,"wordWrap":true,"width":200,"var":"txt_time","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"wordWrap":true,"width":200,"var":"txt_zt","right":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.QuKuanTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TabItemRenderUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":70},"child":[{"type":"Clip","props":{"y":-5,"x":-6,"skin":"dating_ui/tongyong/clip_an1.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":17,"x":22,"wordWrap":false,"width":147,"var":"txt_name","text":"活动内容","height":31,"fontSize":30,"color":"#ffffff","cacheAs":"normal","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.TabItemRenderUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TabItemRender1UI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":270,"height":80},"child":[{"type":"Clip","props":{"y":46,"x":143,"skin":"dating_ui/tongyong/btn_an.png","name":"selectBox","index":1,"clipY":3,"clipX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":20,"x":8,"wordWrap":false,"width":251,"var":"txt_name","text":"活动内容","height":42,"fontSize":40,"color":"#fffdf9","cacheAs":"normal","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.TabItemRender1UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TabItemRender2UI extends View {
		public ani1:Laya.FrameAnimation;
		public img_icon:Laya.Clip;
		public box_rate:Laya.Box;
		public txt_rate:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":-1,"x":-7,"width":289,"height":96},"child":[{"type":"Clip","props":{"y":-1,"x":7,"var":"img_icon","skin":"dating_ui/chongzhi/btn_vip.png","name":"selectBox","index":1,"clipY":3}},{"type":"Box","props":{"y":22,"x":251,"var":"box_rate","rotation":1.05,"anchorY":0.5,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"width":55,"skin":"dating_ui/tongyong/tu_qipao.png","height":55}},{"type":"Text","props":{"y":7,"x":5,"width":45,"var":"txt_rate","text":"+3%","height":21,"fontSize":20,"color":"#ffffff","align":"center"}}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":40},{"value":10,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.TabItemRender2UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TextInputUI extends View {
		public prompt:laya.display.Text;
		public input:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":392,"height":40},"child":[{"type":"Text","props":{"y":7,"x":9,"width":188,"var":"prompt","text":"请输入转入金额...","height":26,"fontSize":24,"color":"#5597d2","align":"left"}},{"type":"Text","props":{"y":-1,"x":10,"width":380,"var":"input","valign":"middle","height":40,"fontSize":24,"color":"#ffffff","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.TextInputUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TuiGuangMX_TUI extends View {
		public img_bg:Laya.Image;
		public txt_title:Laya.Label;
		public txt_yjed:Laya.Label;
		public txt_fyvalue:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_di0.png","sizeGrid":"0,7,0,6","height":38,"centerY":0,"centerX":0,"alpha":0.2}},{"type":"Label","props":{"y":7,"width":260,"var":"txt_title","left":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":7,"width":260,"var":"txt_yjed","height":25,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":7,"width":260,"var":"txt_fyvalue","right":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.TuiGuangMX_TUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class TuiGuangTUI extends View {
		public img_bg:Laya.Image;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":0,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_di0.png","sizeGrid":"0,5,0,4","left":0,"height":40,"alpha":0.2}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":53,"var":"txt_type","left":20,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":380,"var":"txt_money","right":390,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":7,"wordWrap":true,"width":350,"var":"txt_time","right":20,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":20,"x":50,"skin":"dating_ui/tongyong/tu_top1.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.TuiGuangTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class VipItemRenderUI extends View {
		public img_type:Laya.Image;
		public img_icon:Laya.Image;
		public btn_go:Laya.Button;
		public txt_num:Laya.Label;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":794,"height":124},"child":[{"type":"Image","props":{"y":1,"x":0,"skin":"dating_ui/chongzhi/tu_dhk.png","sizeGrid":"0,0,0,0"}},{"type":"Image","props":{"y":89,"x":173,"width":58,"var":"img_type","skin":"dating_ui/chongzhi/WXSM.png","scaleY":0.9,"scaleX":0.9,"height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":92,"x":84,"width":99,"var":"img_icon","skin":"dating_ui/kehu/tx_2.png","pivotY":72,"pivotX":65,"height":99}},{"type":"Button","props":{"y":61,"x":662,"var":"btn_go","stateNum":1,"skin":"dating_ui/chongzhi/btn_ann.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":22,"x":37,"skin":"dating_ui/chongzhi/tu_htlx.png"}}]},{"type":"Label","props":{"y":74,"x":205,"wordWrap":true,"width":298,"var":"txt_num","valign":"top","leading":0,"height":28,"fontSize":28,"color":"#29a0c8","bold":true,"align":"left"}},{"type":"Label","props":{"y":16,"x":140,"wordWrap":true,"width":365,"var":"txt_name","valign":"middle","leading":8,"height":38,"fontSize":35,"color":"#4074ae","bold":true,"align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.VipItemRenderUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
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

        public static  uiView:any ={"type":"View","props":{"width":582,"height":300},"child":[{"type":"Image","props":{"y":26,"x":13,"skin":"dating_ui/vip/tu_wz.png"}},{"type":"Box","props":{"y":168,"x":185},"child":[{"type":"Image","props":{"y":10,"x":5,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk1.png"}},{"type":"Image","props":{"y":23,"x":-118,"var":"img_tx","skin":"dating_ui/touxiang/tu_tx1.png"}},{"type":"Image","props":{"y":110,"x":14,"skin":"dating_ui/vip/tu_zstxk.png"}},{"type":"Image","props":{"y":110,"x":-111,"skin":"dating_ui/vip/tu_zstx.png"}}]},{"type":"Box","props":{"y":12,"x":365,"width":143,"height":60},"child":[{"type":"Clip","props":{"y":0,"x":23,"var":"clip_Num","skin":"dating_ui/vip/clip_1-9.png","clipX":10}},{"type":"Image","props":{"y":12,"x":153,"var":"img_yuan","skin":"dating_ui/vip/tu_yuan.png"}}]},{"type":"Box","props":{"y":13,"x":113,"width":64,"height":60},"child":[{"type":"Clip","props":{"var":"clip_Lv","skin":"dating_ui/vip/clip_1-9.png","clipX":10,"centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":183,"x":321,"width":254,"var":"btn_lingqu","height":82},"child":[{"type":"Button","props":{"y":3,"x":3,"stateNum":1,"skin":"dating_ui/vip/btn_lq.png"}},{"type":"Box","props":{"y":14.5,"x":26.5,"var":"box_lq"},"child":[{"type":"Image","props":{"y":27.5,"x":105.5,"skin":"dating_ui/vip/tu_zt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27.5,"x":105.5,"skin":"dating_ui/vip/lqsg10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1}}]},{"type":"Box","props":{"y":15,"x":27,"var":"box_hd"},"child":[{"type":"Image","props":{"y":27,"x":105,"skin":"dating_ui/vip/tu_zt01.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":105,"skin":"dating_ui/vip/hdsg10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":16.5,"x":55.5,"var":"box_yy"},"child":[{"type":"Image","props":{"y":26.5,"x":78.5,"skin":"dating_ui/vip/tu_ylq.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.VipSlideTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class XingUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":600},"child":[{"type":"Image","props":{"y":347.1,"x":51,"skin":"dating_ui/huode/tu_xx.png","scaleY":1.3666666666666667,"scaleX":1.3666666666666667,"rotation":33,"anchorY":0.5,"anchorX":0.5},"compId":18}],"animations":[{"nodes":[{"target":18,"keyframes":{"y":[{"value":577,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":0},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":30}],"x":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":0},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":30}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":30}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":30}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.XingUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Xing1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":600},"child":[{"type":"Image","props":{"y":577,"x":51,"skin":"dating_ui/huode/tu_xx.png","anchorY":0.5,"anchorX":0.5},"compId":18}],"animations":[{"nodes":[{"target":18,"keyframes":{"y":[{"value":368,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":0},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":20},{"value":577,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":21},{"value":388.9,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":30}],"x":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":0},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":20},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":21},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":30}],"scaleY":[{"value":1.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":21},{"value":1.2999999999999998,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":30}],"scaleX":[{"value":1.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":21},{"value":1.2999999999999998,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":30}],"rotation":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":21},{"value":27,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.Xing1UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class Xing2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":600},"child":[{"type":"Image","props":{"y":577,"x":51,"skin":"dating_ui/huode/tu_xx.png","anchorY":0.5,"anchorX":0.5},"compId":18}],"animations":[{"nodes":[{"target":18,"keyframes":{"y":[{"value":159,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":0},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":10},{"value":577,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":11},{"value":388.9,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":20},{"value":368,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":21},{"value":179.9,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":30}],"x":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":0},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":10},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":11},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":20},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":21},{"value":51,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"x","index":30}],"scaleY":[{"value":1.6666666666666665,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":11},{"value":1.2999999999999998,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":20},{"value":1.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":21},{"value":1.6333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleY","index":30}],"scaleX":[{"value":1.6666666666666665,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":11},{"value":1.2999999999999998,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":20},{"value":1.3333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":21},{"value":1.6333333333333333,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"scaleX","index":30}],"rotation":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":11},{"value":27,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":20},{"value":30,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":21},{"value":57,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"rotation","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.Xing2UI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class XinXi_lbUI extends View {
		public txt_name:laya.display.Text;
		public txt_time:laya.display.Text;
		public btn_dingyue:Laya.Image;
		public txt_title:laya.display.Text;
		public img_mail:Laya.Image;
		public txt_content:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1120,"height":136},"child":[{"type":"Image","props":{"y":-18,"x":2,"width":1117,"skin":"dating_ui/tongyong/tu_di9.png","height":170}},{"type":"Image","props":{"y":84,"x":813,"width":228,"skin":"dating_ui/tongyong/tu_lbk.png","sizeGrid":"0,19,0,18","height":34}},{"type":"Text","props":{"y":90,"x":815,"width":223,"var":"txt_name","text":"发件人：GM","height":22,"fontSize":20,"color":"#efda8b","align":"center"}},{"type":"Text","props":{"y":25,"x":812,"width":221,"var":"txt_time","text":"2020-8-15 22:11:11","height":27,"fontSize":24,"color":"#e4f8fb","align":"center"}},{"type":"Image","props":{"y":49,"x":678,"width":113,"var":"btn_dingyue","skin":"dating_ui/xinxi/tu_yy.png","pivotY":41,"pivotX":38,"height":113}},{"type":"Text","props":{"y":23,"x":150,"width":277,"var":"txt_title","text":"邮件标题可以显示12个字","height":28,"fontSize":25,"color":"#fff8f8"}},{"type":"Image","props":{"y":15,"x":23,"width":100,"var":"img_mail","skin":"dating_ui/xinxi/tu_weidu.png","height":100}},{"type":"Panel","props":{"y":78,"x":150,"width":303,"height":23},"child":[{"type":"Text","props":{"y":4,"x":0,"wordWrap":true,"width":321,"var":"txt_content","text":"点击阅读查看详情","fontSize":22,"color":"#c8c5c5"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.component.XinXi_lbUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class YongHuTUI extends View {
		public img_bg:Laya.Image;
		public txt_name:Laya.Label;
		public txt_total:Laya.Label;
		public txt_tallage:Laya.Label;
		public txt_count:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":860,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":860,"var":"img_bg","skin":"dating_ui/tongyong/tu_di0.png","sizeGrid":"0,2,0,2","height":40,"alpha":0.2}},{"type":"Label","props":{"y":10,"width":150,"var":"txt_name","left":20,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":192,"width":200,"var":"txt_total","height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":416,"width":200,"var":"txt_tallage","height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"width":200,"var":"txt_count","right":20,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.YongHuTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class YuEBaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_money:Laya.Label;
		public txt_zt:Laya.Label;
		public txt_yue:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":600,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"var":"img_bg","skin":"dating_ui/tongyong/tu_bb1.png","sizeGrid":"0,7,0,6","height":40,"alpha":0.2}},{"type":"Label","props":{"y":9,"x":103,"width":118,"var":"txt_money","text":"-99999999","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"x":4,"width":100,"var":"txt_zt","text":"取出","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"x":225,"width":165,"var":"txt_yue","text":"999999999","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"x":395,"width":201,"var":"txt_time","text":"2019-12-31 23:59:59","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.YuEBaoTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ZhuanPanTUI extends View {
		public img_reward:Laya.Image;
		public txt_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":20,"height":20},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/zhuanpan/tu_pb.png","anchorY":1,"anchorX":0.5,"alpha":0}},{"type":"Image","props":{"y":-213,"x":-3,"visible":false,"var":"img_reward","skin":"dating_ui/tongyong/jb_4.png","scaleY":0.5,"scaleX":0.5,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-140,"x":-1,"width":94,"visible":false,"var":"txt_num","text":"100","height":22,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.ZhuanPanTUI.uiView);
        }
    }
}

module ui.nqp.dating.component {
    export class ZhuanPanT2UI extends View {
		public img_bg:Laya.Image;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;
		public txt_username:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":39},"child":[{"type":"Box","props":{"y":0,"x":0,"width":579,"height":39},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":601,"var":"img_bg","skin":"dating_ui/tongyong/tu_di.png","height":39}},{"type":"Label","props":{"y":20,"x":490,"wordWrap":true,"width":216,"var":"txt_time","text":"2019-5-18 22:22:22","height":22,"fontSize":22,"color":"#fbfbfb","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":324,"wordWrap":true,"width":100,"var":"txt_type","text":"黄金轮盘","height":22,"fontSize":22,"color":"#fbfbfb","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":9,"x":165,"wordWrap":true,"width":107,"var":"txt_money","text":"9999","height":22,"fontSize":22,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":20,"x":92,"wordWrap":true,"width":186,"var":"txt_username","text":"玩家名字六字","height":22,"fontSize":22,"color":"#fbfbfb","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.component.ZhuanPanT2UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class DaTingUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public ani5:Laya.FrameAnimation;
		public ani6:Laya.FrameAnimation;
		public ani7:Laya.FrameAnimation;
		public ani8:Laya.FrameAnimation;
		public ani9:Laya.FrameAnimation;
		public ani10:Laya.FrameAnimation;
		public ani11:Laya.FrameAnimation;
		public box_top:Laya.Box;
		public box_btn_top:Laya.Box;
		public btn_xiaoxi:Laya.Button;
		public btn_kefu:Laya.Button;
		public btn_fenxiang:Laya.Button;
		public btn_guanwang:Laya.Button;
		public btn_bangding:Laya.Button;
		public box_btn_top_left:Laya.Box;
		public btn_gren:Laya.Image;
		public qifu_type:Laya.Image;
		public img_txk:Laya.Image;
		public txt_id:Laya.Label;
		public btn_vip:Laya.Button;
		public clip_vip:Laya.Clip;
		public btn_add:Laya.Box;
		public clip_money:Laya.Clip;
		public btn_cz:Laya.Button;
		public box:Laya.Box;
		public img_bg:Laya.Image;
		public list_btns:Laya.List;
		public box_lbt:Laya.Box;
		public list_ad:Laya.List;
		public box_bottom:Laya.Box;
		public img_bottom_middle:Laya.Image;
		public box_btn_bottom:Laya.Box;
		public btn_chongzhi:Laya.Box;
		public btn_qukuan:Laya.Box;
		public box_bottomLeft:Laya.Box;
		public btn_yuebao:Laya.Box;
		public btn_qiandao:Laya.Box;
		public btn_daili:Laya.Box;
		public box_bottomRight:Laya.Box;
		public btn_shouchong:Laya.Box;
		public btn_zhuanpan:Laya.Box;
		public btn_remen:Laya.Box;
		public btn_qifu:Laya.Box;
		public btn_left:Laya.Image;
		public btn_right:Laya.Image;
		public box_tabs:Laya.Box;
		public btn_enterRoom:Laya.Button;
		public tab:Laya.Tab;
		public box_qipaok:Laya.Box;
		public box_hd:Laya.Box;
		public btn_hd1:Laya.Box;
		public box_gw:Laya.Box;
		public btn_gw1:Laya.Button;
		public img_copy_gw:Laya.Box;
		public img_gw:Laya.Image;
		public txt_gw_url:Laya.Label;
		public box_yeb:Laya.Box;
		public btn_yeb:Laya.Box;
		public box_yrbw:Laya.Box;
		public btn_yrbw:Laya.Box;
		public img_hd:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"renderType":"render","height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":361,"top":-1,"skin":"dating_ui/dating/tu_bj.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"compId":18},{"type":"Box","props":{"y":0,"var":"box_top","right":-1,"left":-1,"height":102},"compId":315,"child":[{"type":"Image","props":{"y":-1,"top":-1,"skin":"dating_ui/dating/tu_d1.png","left":-1,"height":102}},{"type":"Box","props":{"y":5,"x":1284,"width":468,"var":"box_btn_top","top":5,"height":77,"anchorX":1},"child":[{"type":"Button","props":{"y":29,"x":332,"var":"btn_xiaoxi","stateNum":1,"skin":"dating_ui/dating/btn_yj.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29,"x":425,"var":"btn_kefu","stateNum":1,"skin":"dating_ui/dating/btn_kehu.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":30,"x":241,"var":"btn_fenxiang","stateNum":1,"skin":"dating_ui/dating/btn_fenxiang1.png","name":"item2","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29,"x":147,"var":"btn_guanwang","stateNum":1,"skin":"dating_ui/dating/btn_guanwang.png","name":"item3","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":28,"x":43,"width":86,"var":"btn_bangding","stateNum":1,"skin":"dating_ui/dating/btn_fenxiang.png","name":"item4","height":72,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":-1,"x":0,"width":653,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":43,"x":221,"width":270,"skin":"dating_ui/tongyong/tu_k1ss.png","height":37,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":46,"x":49,"width":72,"var":"btn_gren","skin":"dating_ui/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"dating_ui/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":46,"x":49,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":44,"x":210,"width":230,"var":"txt_id","valign":"middle","height":35,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Button","props":{"y":39,"x":373,"var":"btn_vip","stateNum":1,"skin":"dating_ui/dating/btn_top.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":1,"x":16,"width":39,"height":36},"child":[{"type":"Clip","props":{"var":"clip_vip","skin":"dating_ui/dating/clip_vip.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":12,"x":418,"width":350,"var":"btn_add","height":62},"child":[{"type":"Image","props":{"y":12.5,"x":28,"skin":"dating_ui/tongyong/tu_k1ss.png"}},{"type":"Clip","props":{"y":17.5,"x":69,"var":"clip_money","skin":"dating_ui/tongyong/clip_money1.png","index":0,"clipX":11}},{"type":"Button","props":{"y":37.5,"x":270,"var":"btn_cz","stateNum":1,"skin":"dating_ui/dating/btn_jq.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31.5,"x":41,"skin":"dating_ui/tongyong/icon_money1.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"y":361,"x":30,"var":"box","left":30,"centerY":0,"anchorY":0.5},"child":[{"type":"Image","props":{"y":41,"x":269,"width":1602,"var":"img_bg","skin":"dating_ui/dating/tu_wbeijing.png","skewX":-5,"sizeGrid":"14,16,16,17","height":414}},{"type":"List","props":{"y":46,"width":1287,"var":"list_btns","repeatY":2,"left":261,"height":418},"child":[{"type":"HudOne_T","props":{"renderType":"render","runtime":"ui.nqp.dating.component.HudOne_TUI"}}]},{"type":"Box","props":{"y":0,"x":0,"width":318,"var":"box_lbt","height":473},"child":[{"type":"Box","props":{"y":9,"x":9,"width":287,"height":436},"child":[{"type":"Image","props":{"width":287,"skin":"dating_ui/dating/tu_zhezhao.png","renderType":"mask","height":436}},{"type":"List","props":{"y":1,"x":2,"width":287,"var":"list_ad","spaceX":-45,"repeatY":1,"repeatX":1,"height":436},"child":[{"type":"HudAd_T","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.nqp.dating.component.HudAd_TUI"}}]}]},{"type":"Image","props":{"y":0,"x":0,"width":318,"skin":"dating_ui/dating/tu_adkuang.png","height":473}}]}]},{"type":"Box","props":{"y":588,"var":"box_bottom","right":-1,"left":-1,"height":135,"bottom":-1},"compId":317,"child":[{"type":"Image","props":{"skin":"dating_ui/dating/tu_d2.png","sizeGrid":"0,600,0,593","right":-1,"left":-1,"height":78,"bottom":-1}},{"type":"Image","props":{"width":578,"var":"img_bottom_middle","skin":"dating_ui/dating/tu_d3.png","height":78,"centerX":0,"bottom":-1}},{"type":"Box","props":{"y":138,"var":"box_btn_bottom","right":-1,"left":-1,"height":117,"bottom":-5,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"width":110,"var":"btn_chongzhi","height":107,"centerX":-75,"bottom":18,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":56,"x":54,"stateNum":1,"skin":"dating_ui/dating/sc10000.png","anchorY":0.5,"anchorX":0.5},"compId":7}]},{"type":"Box","props":{"width":110,"var":"btn_qukuan","height":107,"centerX":60,"bottom":18,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":59,"x":55,"stateNum":1,"skin":"dating_ui/dating/yh10000.png","anchorY":0.5,"anchorX":0.5},"compId":109}]},{"type":"Box","props":{"width":507,"var":"box_bottomLeft","left":18,"height":110,"bottom":5},"child":[{"type":"Box","props":{"y":60,"x":59,"width":118,"var":"btn_yuebao","height":104,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"x":59,"width":118,"stateNum":1,"skin":"dating_ui/dating/btn_baoxian.png","height":104,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":64,"x":195,"width":140,"var":"btn_qiandao","height":96,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":48,"x":70,"width":140,"stateNum":1,"skin":"dating_ui/dating/btn_qiandao.png","height":96,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":60,"x":347,"width":133,"var":"btn_daili","height":104,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"x":66.5,"width":133,"stateNum":1,"skin":"dating_ui/dating/btn_tuiguang.png","height":104,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":477,"var":"box_bottomRight","right":0,"height":117,"bottom":7,"anchorX":1},"child":[{"type":"Box","props":{"y":66,"x":101,"width":91,"var":"btn_shouchong","height":108,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":54,"x":45.5,"width":91,"stateNum":1,"skin":"dating_ui/dating/btn_bangding.png","height":108,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":65,"x":252,"width":144,"var":"btn_zhuanpan","height":111,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":55.5,"x":72,"width":144,"stateNum":1,"skin":"dating_ui/dating/btn_zhuanpan.png","height":111,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":65,"x":405,"width":145,"var":"btn_remen","height":111,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":55.5,"x":72.5,"width":145,"stateNum":1,"skin":"dating_ui/dating/btn_huodong.png","height":111,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":67,"x":105,"width":136,"var":"btn_qifu","height":106,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":53,"x":68,"width":136,"stateNum":1,"skin":"dating_ui/dating/btn_qf.png","height":106,"anchorY":0.5,"anchorX":0.5}}]}]}]}]},{"type":"Image","props":{"var":"btn_left","skin":"dating_ui/dating/tu_jt.png","left":307,"centerY":0,"anchorY":0.5}},{"type":"Image","props":{"var":"btn_right","skin":"dating_ui/dating/tu_jt.png","scaleX":-1,"right":150,"centerY":0,"anchorY":0.5}},{"type":"Box","props":{"width":107,"var":"box_tabs","right":-9,"height":545,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-22,"x":-19,"skin":"dating_ui/dating/tu_di.png"}},{"type":"Button","props":{"y":483,"x":1,"width":135,"visible":false,"var":"btn_enterRoom","stateNum":1,"skin":"dating_ui/dating/btn_jr.png","pivotY":132,"pivotX":135,"height":153}},{"type":"Tab","props":{"y":0,"x":0,"var":"tab"},"child":[{"type":"Button","props":{"y":-2,"x":0,"skin":"dating_ui/dating/btn_rm.png","name":"item0"}},{"type":"Button","props":{"y":106,"x":0,"skin":"dating_ui/dating/btn_qp.png","name":"item1"}},{"type":"Button","props":{"y":214,"x":0,"skin":"dating_ui/dating/btn_br.png","name":"item2"}},{"type":"Button","props":{"y":322,"x":0,"skin":"dating_ui/dating/btn_dw.png","name":"item3"}},{"type":"Button","props":{"y":429,"x":0,"skin":"dating_ui/dating/btn_fk.png","name":"item4"}}]}]},{"type":"Box","props":{"y":361,"x":641,"visible":false,"var":"box_qipaok","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":337,"var":"box_hd","right":15,"height":222,"bottom":-1},"child":[{"type":"Box","props":{"y":167,"x":270,"width":145,"var":"btn_hd1","height":111,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":56,"x":73,"width":145,"stateNum":1,"skin":"dating_ui/dating/btn_huodong.png","height":111,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":18,"x":77,"width":330,"skin":"dating_ui/dating/tu_rmhd.png","pivotY":129,"pivotX":275,"height":140},"compId":312}]}]},{"type":"Box","props":{"y":-1,"x":745,"width":297,"var":"box_gw","height":336},"child":[{"type":"Button","props":{"y":35,"x":218,"var":"btn_gw1","stateNum":1,"skin":"dating_ui/dating/btn_guanwang.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":67,"x":-177,"width":287,"var":"img_copy_gw","height":267},"child":[{"type":"Image","props":{"y":-12,"x":202,"skin":"dating_ui/dating/tu_jrgw.png","pivotY":18,"pivotX":192},"compId":314,"child":[{"type":"Image","props":{"y":65,"x":67,"width":150,"var":"img_gw","skin":"dating_ui/dating/tu_erweima.png","height":145}},{"type":"Label","props":{"y":211,"x":-52,"width":384,"var":"txt_gw_url","text":"dazhongqp.com","strokeColor":"#0e336b","stroke":0.5,"height":25,"fontSize":25,"color":"#ffffff","bold":true,"align":"center"}}]}]}]}]},{"type":"Box","props":{"y":508,"x":27,"width":323,"var":"box_yeb","height":145},"child":[{"type":"Box","props":{"y":164,"x":48,"width":118,"var":"btn_yeb","height":104,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"x":59,"width":118,"stateNum":1,"skin":"dating_ui/dating/btn_baoxian.png","height":104,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":11,"x":66,"width":330,"skin":"dating_ui/dating/tu_yeb.png","pivotY":131,"pivotX":50,"height":140},"compId":336}]}]},{"type":"Box","props":{"y":507,"x":312,"width":316,"var":"box_yrbw","height":212},"child":[{"type":"Box","props":{"y":166,"x":55,"width":133,"var":"btn_yrbw","height":104,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"x":66,"width":133,"stateNum":1,"skin":"dating_ui/dating/btn_tuiguang.png","height":104,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":12,"x":59,"width":330,"skin":"dating_ui/dating/tu_yrbw.png","scaleY":0,"scaleX":0,"pivotY":129,"pivotX":47,"height":140},"compId":341}]}]},{"type":"Image","props":{"y":362,"x":642,"visible":false,"var":"img_hd","top":-1,"skin":"dating_ui/tongyong/heidi.jpg","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}}]}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"skin":[{"value":"dating_ui/dating/sc10000.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":0},{"value":"dating_ui/dating/sc10002.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":4},{"value":"dating_ui/dating/sc10004.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":8},{"value":"dating_ui/dating/sc10006.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":12},{"value":"dating_ui/dating/sc10008.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":16},{"value":"dating_ui/dating/sc10010.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":20},{"value":"dating_ui/dating/sc10012.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":24},{"value":"dating_ui/dating/sc10014.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":28},{"value":"dating_ui/dating/sc10016.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":32},{"value":"dating_ui/dating/sc10018.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":36},{"value":"dating_ui/dating/sc10020.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":40},{"value":"dating_ui/dating/sc10022.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":44}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":109,"keyframes":{"skin":[{"value":"dating_ui/dating/yh10000.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":0},{"value":"dating_ui/dating/yh10002.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":4},{"value":"dating_ui/dating/yh10004.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":8},{"value":"dating_ui/dating/yh10006.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":12},{"value":"dating_ui/dating/yh10008.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":16},{"value":"dating_ui/dating/yh10010.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":20},{"value":"dating_ui/dating/yh10012.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":24},{"value":"dating_ui/dating/yh10014.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":28},{"value":"dating_ui/dating/yh10016.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":32},{"value":"dating_ui/dating/yh10018.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":36},{"value":"dating_ui/dating/yh10020.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":40},{"value":"dating_ui/dating/yh10022.png","tweenMethod":"linearNone","tween":false,"target":109,"key":"skin","index":44}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":18,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":12}]}},{"target":315,"keyframes":{"y":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":315,"key":"y","index":0},{"value":-13.666666666666671,"tweenMethod":"linearNone","tween":true,"target":315,"key":"y","index":5},{"value":-46,"tweenMethod":"linearNone","tween":true,"target":315,"key":"y","index":12}]}},{"target":317,"keyframes":{"y":[{"value":654,"tweenMethod":"linearNone","tween":true,"target":317,"key":"y","index":0},{"value":744,"tweenMethod":"linearNone","tween":true,"target":317,"key":"y","index":5},{"value":789,"tweenMethod":"linearNone","tween":true,"target":317,"key":"y","index":12}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":312,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":8}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":8}]}}],"name":"ani4","id":4,"frameRate":24,"action":0},{"nodes":[{"target":312,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleY","index":9}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":312,"key":"scaleX","index":9}]}}],"name":"ani5","id":5,"frameRate":24,"action":0},{"nodes":[{"target":314,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":5},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":9}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":5},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":9}]}}],"name":"ani6","id":6,"frameRate":24,"action":0},{"nodes":[{"target":314,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":4},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleY","index":8}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":4},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":314,"key":"scaleX","index":8}]}}],"name":"ani7","id":7,"frameRate":24,"action":0},{"nodes":[{"target":336,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":8}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":8}]}}],"name":"ani8","id":8,"frameRate":24,"action":0},{"nodes":[{"target":341,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":8}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":0},{"value":0.37,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":1},{"value":0.71,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":3},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":4},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":8}]}}],"name":"ani9","id":9,"frameRate":24,"action":0},{"nodes":[{"target":336,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleY","index":9}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":336,"key":"scaleX","index":9}]}}],"name":"ani10","id":10,"frameRate":24,"action":0},{"nodes":[{"target":341,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleY","index":9}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":0},{"value":0.99,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":1},{"value":0.96,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":2},{"value":0.87,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":3},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":5},{"value":0.35,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":341,"key":"scaleX","index":9}]}}],"name":"ani11","id":11,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.HudOne_TUI",ui.nqp.dating.component.HudOne_TUI);
			View.regComponent("ui.nqp.dating.component.HudAd_TUI",ui.nqp.dating.component.HudAd_TUI);

            super.createChildren();
            this.createView(ui.nqp.dating.DaTingUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class DaTingGgUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_notice:Laya.Box;
		public img_bg:Laya.Image;
		public panel:Laya.Box;
		public txt_label:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":109,"x":640,"width":737,"var":"box_notice","height":45,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-11,"x":-10,"var":"img_bg","skin":"dating_ui/datinggg/tu_ggg.png","sizeGrid":"0,40,0,40"}},{"type":"Box","props":{"y":0,"x":1,"width":499,"var":"panel","height":45},"child":[{"type":"Panel","props":{"y":-1,"x":-2,"width":737,"height":45},"child":[{"type":"Label","props":{"y":-4,"x":6,"wordWrap":false,"width":733,"var":"txt_label","valign":"middle","text":"推广员系统”劲爆来袭 ，一次推广永久受益，月入百万不是梦！","height":45,"fontSize":24,"color":"#ffffff"}}]}]},{"type":"Image","props":{"y":20,"x":368,"skin":"dating_ui/datinggg/gonggao10001.png","anchorY":0.5,"anchorX":0.5},"compId":134}]}],"animations":[{"nodes":[{"target":134,"keyframes":{"skin":[{"value":"dating_ui/datinggg/gonggao10001.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":0},{"value":"dating_ui/datinggg/gonggao10002.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":2},{"value":"dating_ui/datinggg/gonggao10003.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":4},{"value":"dating_ui/datinggg/gonggao10004.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":6},{"value":"dating_ui/datinggg/gonggao10005.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":8},{"value":"dating_ui/datinggg/gonggao10006.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":10},{"value":"dating_ui/datinggg/gonggao10007.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":12},{"value":"dating_ui/datinggg/gonggao10008.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":14},{"value":"dating_ui/datinggg/gonggao10009.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":16},{"value":"dating_ui/datinggg/gonggao10010.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":18},{"value":"dating_ui/datinggg/gonggao10011.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":20},{"value":"dating_ui/datinggg/gonggao10012.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":22},{"value":"dating_ui/datinggg/gonggao10013.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":24},{"value":"dating_ui/datinggg/gonggao10014.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":26},{"value":"dating_ui/datinggg/gonggao10015.png","tweenMethod":"linearNone","tween":false,"target":134,"key":"skin","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.DaTingGgUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class DengLuUI extends View {
		public btn_wx:Laya.Button;
		public btn_denglu:Laya.Button;
		public btn_youke:Laya.Box;
		public img_btn:Laya.Image;
		public box_qita:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"right":-1,"left":-1,"height":96,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":48.5,"var":"btn_wx","stateNum":1,"skin":"dating_ui/denglurk/btn_weixin.png","centerX":450,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":48.5,"var":"btn_denglu","stateNum":1,"skin":"dating_ui/denglurk/btn_shouji.png","centerX":280,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":50,"x":642,"var":"btn_youke","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":284,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","height":87,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"img_btn","skin":"dating_ui/denglurk/tu_ksks.png","centerY":-8,"centerX":-1,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":-12,"x":1138,"var":"box_qita"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.DengLuUI.uiView);
        }
    }
}

module ui.nqp.dating {
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
		public txt_code:Laya.TextInput;
		public txt_phone:Laya.TextInput;
		public txt_warn:Laya.Label;
		public btn_phone_clear:Laya.Button;
		public lab_kefu:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":360,"x":640,"width":674,"var":"box","height":477,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":238,"width":674,"height":477,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,60,150,50","height":477}},{"type":"Image","props":{"y":0,"x":336,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,50","scaleX":-1,"height":477,"anchorX":1}}]},{"type":"Box","props":{"y":238,"x":337,"width":674,"var":"box_bind","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":5,"skin":"dating_ui/denglu/tit_shoujiBD.png","centerX":0}}]},{"type":"Box","props":{"y":238,"x":337,"width":674,"var":"box_login_phone","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":5,"skin":"dating_ui/denglu/tit_shoujiDL.png","centerX":0}},{"type":"Label","props":{"width":150,"var":"lab_login_account","underline":true,"text":"用密码登录","right":40,"height":35,"fontSize":22,"color":"#2aff01","bottom":40,"align":"right"}}]},{"type":"Box","props":{"width":667,"var":"box_registered","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":170,"x":84,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"}},{"type":"TextInput","props":{"y":184,"width":420,"var":"txt_set_psd","type":"text","restrict":"0-9","promptColor":"#5597d2","prompt":"请设置密码…","maxChars":11,"left":98,"height":35,"fontSize":26,"color":"#5597d2"}},{"type":"Button","props":{"y":183,"x":539,"var":"btn_see_newpsd","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png"}},{"type":"Image","props":{"top":5,"skin":"dating_ui/denglu/tit_zhuce.png","centerX":0}},{"type":"Label","props":{"width":283,"var":"lab_tip","text":"密码由6-10位数字/英文组成","height":32,"fontSize":23,"color":"#41fe69","centerX":0,"bottom":50}},{"type":"Button","props":{"y":345,"x":196,"var":"btn_set_over","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"},"child":[{"type":"Image","props":{"y":10,"x":63,"skin":"dating_ui/denglu/tu_wc.png"}}]}]},{"type":"Box","props":{"width":669,"var":"box_login_account","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":126,"x":84,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"}},{"type":"Image","props":{"y":221,"x":84,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"},"compId":148},{"type":"Button","props":{"y":342,"x":194,"width":284,"var":"btn_login","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","height":87},"child":[{"type":"Image","props":{"y":42,"skin":"dating_ui/denglu/tu_denglu.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"top":5,"skin":"dating_ui/denglu/tit_shoujiDL.png","centerX":0}},{"type":"Button","props":{"y":235,"x":539,"var":"btn_see_psd","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeoff.png"}},{"type":"Button","props":{"y":138,"x":539,"var":"btn_account_clear","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png"}},{"type":"TextInput","props":{"y":140,"x":100,"width":420,"var":"txt_account","type":"text","restrict":"0-9","promptColor":"#5597d2","prompt":"请输入手机号…","maxChars":11,"height":35,"fontSize":26,"color":"#ffffff"}},{"type":"TextInput","props":{"y":235,"x":100,"width":420,"var":"txt_psd","type":"text","restrict":"0-9","promptColor":"#5597d2","prompt":"请输入密码…","maxChars":6,"height":35,"fontSize":26,"color":"#ffffff"}},{"type":"Label","props":{"width":150,"var":"lab_login_phone","underline":true,"text":"验证码登录/注册","right":46,"height":35,"fontSize":22,"color":"#2aff01","bottom":40,"align":"right"}},{"type":"Image","props":{"y":212,"x":74,"width":528,"skin":"dating_ui/tongyong/tu_srkt2.png","height":86,"alpha":0},"compId":173},{"type":"Label","props":{"y":240,"x":104,"width":378,"text":"密码错误，请检查","height":35,"fontSize":26,"color":"#ff0e0a","bold":true,"alpha":0,"align":"left"},"compId":175}]},{"type":"Box","props":{"width":674,"var":"box_reset","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":5,"skin":"dating_ui/denglu/tu_shezhimima.png","centerX":0}},{"type":"Box","props":{"y":238,"x":337,"width":674,"var":"box_set_psd","height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":170,"x":84,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"}},{"type":"TextInput","props":{"y":184,"width":420,"var":"txt_set_newpsd","type":"text","restrict":"0-9","promptColor":"#5597d2","prompt":"请设置新密码…","maxChars":11,"left":98,"height":35,"fontSize":26,"color":"#5597d2"}},{"type":"Label","props":{"width":400,"var":"lab_tip1","text":"密码由6-10位数字/英文组成","height":32,"fontSize":24,"color":"#41fe69","centerX":0,"bottom":50,"align":"center"}},{"type":"Button","props":{"y":183,"x":539,"var":"btn_see_newpsd1","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png"}},{"type":"Button","props":{"y":342,"x":195,"var":"btn_sure","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"},"child":[{"type":"Image","props":{"y":0,"x":13,"skin":"dating_ui/qukuan/tu_qd.png"}}]}]}]},{"type":"Box","props":{"y":238,"x":337,"width":674,"var":"box_phone","mouseThrough":true,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":124,"child":[{"type":"Box","props":{"width":630,"var":"box_send_over","centerX":0,"bottom":50,"alpha":1},"compId":120,"child":[{"type":"Label","props":{"y":0,"width":209,"text":"短信验证码已发送至","left":20,"height":35,"fontSize":24,"color":"#fffdfd"}},{"type":"Label","props":{"y":0,"width":154,"var":"lab_send_phone","text":"18652134651","height":35,"fontSize":24,"color":"#50cc5a","centerX":0,"align":"left"}},{"type":"Label","props":{"y":0,"width":101,"var":"lab_get_code","underline":true,"text":"重新获取","right":73,"height":35,"fontSize":24,"color":"#2aff01","align":"left"}},{"type":"Box","props":{"y":0,"x":456,"var":"box_cold"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":162,"text":"重新获取","height":35,"fontSize":24,"color":"#2aff01"}},{"type":"Label","props":{"y":0,"x":93,"width":70,"var":"lab_reget","text":"（59）","height":35,"fontSize":24,"color":"#ff0400","align":"left"}}]}]},{"type":"Button","props":{"y":385,"var":"btn_get_code","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":14,"skin":"dating_ui/denglu/tu_hqyzm.png"}}]},{"type":"Image","props":{"skin":"dating_ui/denglu/xh10000.png","centerX":0,"bottom":20,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":131},{"type":"Image","props":{"skin":"dating_ui/denglu/cg10000.png","centerX":0,"bottom":20,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":139},{"type":"Image","props":{"y":126,"x":87,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"}},{"type":"Image","props":{"y":220,"x":87,"width":508,"skin":"dating_ui/tongyong/tu_srkt.png"},"compId":162},{"type":"TextInput","props":{"y":234,"x":100,"width":420,"var":"txt_code","type":"text","top":234,"restrict":"0-9","promptColor":"#5597d2","prompt":"请输入验证码…","maxChars":15,"left":100,"height":35,"fontSize":26,"color":"#ffffff"}},{"type":"TextInput","props":{"width":420,"var":"txt_phone","type":"text","top":140,"restrict":"0-9","promptColor":"#5597d2","prompt":"请输入手机号…","maxChars":11,"left":102,"height":35,"fontSize":26,"color":"#ffffff"}},{"type":"Label","props":{"y":236,"x":101,"width":378,"var":"txt_warn","text":"验证码错误，请检查并重新输入","height":35,"fontSize":26,"color":"#ff0e0a","bold":true,"alpha":0,"align":"left"},"compId":140},{"type":"Button","props":{"y":139,"x":541,"var":"btn_phone_clear","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png"}},{"type":"Image","props":{"y":211,"x":77,"width":527,"skin":"dating_ui/tongyong/tu_srkt2.png","height":86,"alpha":0},"compId":172},{"type":"Label","props":{"y":372,"x":484,"width":150,"var":"lab_kefu","underline":true,"text":"联系客服修改","right":40,"height":35,"fontSize":20,"color":"#0df83c","bottom":40,"align":"right"}}]},{"type":"Button","props":{"y":32,"x":646,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":131,"keyframes":{"skin":[{"value":"dating_ui/denglu/xh10000.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":0},{"value":"dating_ui/denglu/xh10000.png","tweenMethod":"linearNone","tween":false,"target":131,"label":null,"key":"skin","index":2},{"value":"dating_ui/denglu/xh10001.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":4},{"value":"dating_ui/denglu/xh10002.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":6},{"value":"dating_ui/denglu/xh10003.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":8},{"value":"dating_ui/denglu/xh10004.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":10},{"value":"dating_ui/denglu/xh10005.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":12},{"value":"dating_ui/denglu/xh10006.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":14},{"value":"dating_ui/denglu/xh10007.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":16},{"value":"dating_ui/denglu/xh10008.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":18},{"value":"dating_ui/denglu/xh10009.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":20},{"value":"dating_ui/denglu/xh10010.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":22},{"value":"dating_ui/denglu/xh10011.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":24},{"value":"dating_ui/denglu/xh10012.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":26},{"value":"dating_ui/denglu/xh10013.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":28},{"value":"dating_ui/denglu/xh10014.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":30},{"value":"dating_ui/denglu/xh10015.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":32},{"value":"dating_ui/denglu/xh10016.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":34},{"value":"dating_ui/denglu/xh10017.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":36},{"value":"dating_ui/denglu/xh10018.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":38},{"value":"dating_ui/denglu/xh10019.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":40},{"value":"dating_ui/denglu/xh10020.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":42},{"value":"dating_ui/denglu/xh10021.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":44},{"value":"dating_ui/denglu/xh10022.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":46},{"value":"dating_ui/denglu/xh10023.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":48},{"value":"dating_ui/denglu/xh10024.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":50},{"value":"dating_ui/denglu/xh10025.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":52},{"value":"dating_ui/denglu/xh10026.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":54},{"value":"dating_ui/denglu/xh10027.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":56},{"value":"dating_ui/denglu/xh10028.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":58},{"value":"dating_ui/denglu/xh10029.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":60},{"value":"dating_ui/denglu/xh10030.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":62},{"value":"dating_ui/denglu/xh10031.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":64},{"value":"dating_ui/denglu/xh10032.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":66},{"value":"dating_ui/denglu/xh10033.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":68},{"value":"dating_ui/denglu/xh10034.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":70},{"value":"dating_ui/denglu/xh10035.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":72},{"value":"dating_ui/denglu/xh10036.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":74},{"value":"dating_ui/denglu/xh10037.png","tweenMethod":"linearNone","tween":false,"target":131,"key":"skin","index":76}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":131,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":131,"key":"alpha","index":1}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":120,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"label":null,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":120,"label":null,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":120,"key":"alpha","index":21}]}},{"target":124,"keyframes":{"x":[{"value":640,"tweenMethod":"linearNone","tween":true,"target":124,"key":"x","index":0},{"value":337,"tweenMethod":"linearNone","tween":true,"target":124,"label":null,"key":"x","index":6},{"value":71,"tweenMethod":"linearNone","tween":true,"target":124,"key":"x","index":7},{"value":86,"tweenMethod":"linearNone","tween":true,"target":124,"label":null,"key":"x","index":9},{"value":101,"tweenMethod":"linearNone","tween":true,"target":124,"key":"x","index":11},{"value":86,"tweenMethod":"linearNone","tween":true,"target":124,"label":null,"key":"x","index":13}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":124,"key":"anchorX","index":0}]}},{"target":140,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":140,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":140,"label":null,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":false,"target":140,"key":"alpha","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":140,"key":"alpha","index":40}]}},{"target":162,"keyframes":{"x":[{"value":87,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":0},{"value":87,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":3},{"value":80,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":5},{"value":87,"tweenMethod":"linearNone","tween":true,"target":162,"label":null,"key":"x","index":7},{"value":94,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":9},{"value":87,"tweenMethod":"linearNone","tween":true,"target":162,"key":"x","index":11}]}},{"target":172,"keyframes":{"x":[{"value":77,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":0},{"value":77,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":3},{"value":71,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":5},{"value":79,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":7},{"value":85,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":9},{"value":78,"tweenMethod":"linearNone","tween":true,"target":172,"key":"x","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":172,"key":"alpha","index":12}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":139,"keyframes":{"skin":[{"value":"dating_ui/denglu/cg10000.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":0},{"value":"dating_ui/denglu/cg10001.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":2},{"value":"dating_ui/denglu/cg10002.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":4},{"value":"dating_ui/denglu/cg10003.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":6},{"value":"dating_ui/denglu/cg10004.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":8},{"value":"dating_ui/denglu/cg10005.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":10},{"value":"dating_ui/denglu/cg10006.png","tweenMethod":"linearNone","tween":false,"target":139,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":139,"key":"alpha","index":0}]}}],"name":"ani3","id":3,"frameRate":24,"action":0},{"nodes":[{"target":148,"keyframes":{"x":[{"value":84,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":0},{"value":77,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":2},{"value":84,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":4},{"value":91,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":6},{"value":84,"tweenMethod":"linearNone","tween":true,"target":148,"key":"x","index":8}]}},{"target":173,"keyframes":{"x":[{"value":75,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":0},{"value":68,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":2},{"value":74,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":4},{"value":82,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":6},{"value":75,"tweenMethod":"linearNone","tween":true,"target":173,"key":"x","index":8}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":173,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":173,"key":"alpha","index":10}]}},{"target":175,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":175,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":175,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":175,"key":"alpha","index":38}]}}],"name":"ani4","id":4,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.DengLuBD1UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class DengLuYKUI extends View {
		public btn_close:Laya.Button;
		public btn_sj:Laya.Button;
		public txt_sj:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":10,"width":674,"height":477,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,60,150,50","height":477}},{"type":"Image","props":{"y":0,"x":336,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,50","scaleX":-1,"height":477,"anchorX":1}},{"type":"Button","props":{"y":32,"x":646,"width":84,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","height":87,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":22,"skin":"dating_ui/denglu/tu_yk.png","centerX":0}},{"type":"Button","props":{"x":337,"width":261,"var":"btn_sj","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","bottom":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":5,"x":25,"skin":"dating_ui/shezhi/tu_sz.png"}}]},{"type":"Label","props":{"y":279,"x":186,"wordWrap":true,"width":199,"var":"txt_sj","underline":true,"text":"升级为正式账号","leading":6,"height":30,"fontSize":27,"color":"#41fe69"}},{"type":"Image","props":{"y":120,"x":51,"skin":"dating_ui/denglu/tu_wb1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.DengLuYKUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class FangKa_ChuangJianUI extends View {
		public btn_tc:Laya.Button;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":655,"height":499,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":674,"height":487,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":9.5,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"109,72,214,72"}},{"type":"Image","props":{"y":9.5,"x":673,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"109,72,214,72","scaleX":-1}},{"type":"Button","props":{"y":43.5,"x":644,"var":"btn_tc","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"width":198,"var":"img_title","skin":"dating_ui/fk/tit_qznn.png","height":45,"centerX":0}}]},{"type":"Image","props":{"y":130,"x":-104,"width":863,"skin":"dating_ui/fk/tu_di2.png","height":256}},{"type":"Box","props":{"y":219,"x":64,"width":109,"var":"box_round0","height":54},"child":[{"type":"CheckBox","props":{"y":11,"x":10,"var":"cb_round0","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":59,"width":49,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":219,"x":204,"width":109,"var":"box_round1","height":54},"child":[{"type":"CheckBox","props":{"y":11,"x":10,"var":"cb_round1","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":18,"x":56,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":219,"x":344,"width":109,"var":"box_round2","height":54},"child":[{"type":"CheckBox","props":{"y":11,"x":10,"var":"cb_round2","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":18,"x":52,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":219,"x":484,"width":109,"var":"box_round3","height":54},"child":[{"type":"CheckBox","props":{"y":11,"x":10,"var":"cb_round3","skin":"dating_ui/fk/checkbox_1.png"}},{"type":"Text","props":{"y":17,"x":56,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Button","props":{"y":411,"x":327,"var":"btn_create","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":-12,"width":256,"skin":"dating_ui/fk/tu_cjfj.png","height":74}}]},{"type":"Image","props":{"y":148,"x":228,"skin":"dating_ui/fk/tu_1.png"}},{"type":"Box","props":{"y":396,"x":439},"child":[{"type":"Image","props":{"y":14,"x":141,"skin":"dating_ui/fk/tu_d1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":1,"x":138,"width":47,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"skin":"dating_ui/fk/tu_fkzf.png"}},{"type":"Image","props":{"y":0,"x":93,"skin":"dating_ui/fk/icon_money.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.FangKa_ChuangJianUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class FangKa_GoUI extends View {
		public btn_start:Laya.Button;
		public btn_invite:Laya.Button;
		public btn_dismiss:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":360,"x":640,"width":200,"var":"btn_start","stateNum":1,"skin":"dating_ui/tongyong/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":38,"skin":"dating_ui/jiaru/tu_ksyx.png"}}]},{"type":"Button","props":{"y":360,"x":420,"width":200,"var":"btn_invite","stateNum":1,"skin":"dating_ui/tongyong//btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":40,"skin":"dating_ui/jiaru/tu_yqhy.png"}}]},{"type":"Button","props":{"y":360,"x":860,"width":200,"var":"btn_dismiss","stateNum":1,"skin":"dating_ui/tongyong//btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":10,"x":35,"skin":"dating_ui/jiaru/tu_jsfj.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.FangKa_GoUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class FenXiangUI extends View {
		public ani2:Laya.FrameAnimation;
		public box_sk:Laya.Box;
		public btn_close:Laya.Button;
		public img_yuan:Laya.Image;
		public clip_money:Laya.Clip;
		public btn_fxq:Laya.Box;
		public btn_wxhy:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":446,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/fenxiang/tu_fx.png","centerY":-15,"centerX":42}},{"type":"Image","props":{"y":-87,"x":132,"skin":"dating_ui/fenxiang/fx10000.png"},"compId":64},{"type":"Box","props":{"y":198,"x":427,"var":"box_sk"}},{"type":"Button","props":{"y":-17,"x":846,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":295,"x":638,"var":"img_yuan","skin":"dating_ui/fenxiang/tu_yuan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":200,"x":497,"var":"clip_money","skin":"dating_ui/fenxiang/clip_yuan.png","index":1,"clipX":10}},{"type":"Image","props":{"y":264,"x":326,"skin":"dating_ui/fenxiang/tu_sh.png"}},{"type":"Box","props":{"y":381,"x":112,"width":284,"var":"btn_fxq","height":87},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canl.png"}},{"type":"Image","props":{"y":2,"x":0,"skin":"dating_ui/fenxiang/tu_fenxiang2.png"}}]},{"type":"Box","props":{"y":381,"x":423,"width":284,"var":"btn_wxhy","height":87},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"y":1,"x":0,"skin":"dating_ui/fenxiang/tu_fenxiang1.png"}}]}]}],"animations":[{"nodes":[{"target":64,"keyframes":{"skin":[{"value":"dating_ui/fenxiang/fx10000.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":0},{"value":"dating_ui/fenxiang/fx10002.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":4},{"value":"dating_ui/fenxiang/fx10004.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":8},{"value":"dating_ui/fenxiang/fx10006.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":12},{"value":"dating_ui/fenxiang/fx10008.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":16},{"value":"dating_ui/fenxiang/fx10010.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":20},{"value":"dating_ui/fenxiang/fx10012.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":24},{"value":"dating_ui/fenxiang/fx10014.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":28},{"value":"dating_ui/fenxiang/fx10016.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":32},{"value":"dating_ui/fenxiang/fx10018.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":36},{"value":"dating_ui/fenxiang/fx10020.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":40},{"value":"dating_ui/fenxiang/fx10022.png","tweenMethod":"linearNone","tween":false,"target":64,"key":"skin","index":44}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.FenXiangUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class GeRenUI extends View {
		public btn_close:Laya.Button;
		public box0:Laya.Box;
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public lb_vip:Laya.Label;
		public txt_id:laya.display.Text;
		public txt_money:laya.display.Text;
		public txt_nickname:laya.display.Text;
		public btn_changge_nc:Laya.Button;
		public box_items:Laya.Box;
		public box_wx:Laya.Box;
		public txt_wx:laya.display.Text;
		public btn_bindwx:Laya.Button;
		public box_mobile:Laya.Box;
		public btn_bind_phone:Laya.Button;
		public txt_phone:laya.display.Text;
		public btn_head:Laya.Button;
		public btn_copy:Laya.Button;
		public btn_recharge:Laya.Button;
		public box1:Laya.Box;
		public list_bb:Laya.List;
		public txt_no:Laya.Label;
		public btn_select:Laya.Box;
		public img_select:Laya.Image;
		public lb_time:Laya.Label;
		public btn_jiantou:Laya.Button;
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
		public box2:Laya.Box;
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public box_vesion:Laya.Box;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_sound:Laya.CheckBox;
		public btn_music:Laya.CheckBox;
		public btn_set_psd:Laya.Button;
		public btn_change:Laya.Button;
		public btn_clear:Laya.Label;
		public btn_check:Laya.Label;
		public tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":870,"height":570,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-24,"x":-17,"skin":"dating_ui/tongyong/tu_bk2.png"}},{"type":"Image","props":{"y":52,"x":131,"width":172,"skin":"dating_ui/tongyong/tu_bkbt.png","pivotY":23,"pivotX":87,"height":39,"centerX":-300}},{"type":"Button","props":{"y":24,"x":844,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"skin":"dating_ui/geren/tit_grzx.png","centerX":0}},{"type":"Box","props":{"y":92,"x":249,"width":561,"var":"box0","height":420},"child":[{"type":"Image","props":{"y":4,"x":-11,"width":155,"skin":"dating_ui/geren/tu_di.png","height":185}},{"type":"Image","props":{"width":3,"top":-66,"skin":"dating_ui/geren/tu_b.png","scaleY":1.9,"scaleX":1,"rotation":90,"left":283,"height":300,"anchorY":0.5,"alpha":0.1}},{"type":"Image","props":{"y":55,"x":69,"var":"img_head","skin":"dating_ui/touxiang/tu_tx0.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":55,"x":69,"var":"img_txk","skin":"dating_ui/touxiang/tu_txk0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":102,"x":6,"skin":"dating_ui/geren/tu_vip.png"}},{"type":"Label","props":{"y":102,"x":45,"width":53,"var":"lb_vip","text":"VIP4","height":24,"fontSize":20,"color":"#d2f6ff"}},{"type":"Text","props":{"y":86,"x":222,"width":293,"var":"txt_id","text":"13541244","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":149,"x":222,"width":284,"var":"txt_money","text":"1234.4","height":24,"fontSize":25,"color":"#ffff9c","align":"left"}},{"type":"Image","props":{"y":4,"x":154,"width":421,"skin":"dating_ui/tongyong/tu_di4.png","height":57},"child":[{"type":"Image","props":{"y":9,"x":9,"skin":"dating_ui/geren/tu_gerne.png"}},{"type":"Text","props":{"y":17,"x":68,"width":295,"var":"txt_nickname","overflow":"hidden","height":24,"fontSize":25,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":0,"x":364,"var":"btn_changge_nc","stateNum":1,"skin":"dating_ui/geren/btn_xg1.png"}}]},{"type":"Image","props":{"y":176,"x":-7,"width":582,"skin":"dating_ui/tongyong/tu_fj.png","height":329}},{"type":"Image","props":{"y":132,"x":154,"skin":"dating_ui/tongyong/tu_di4.png"}},{"type":"Image","props":{"y":68,"x":154,"skin":"dating_ui/tongyong/tu_di4.png"}},{"type":"Box","props":{"y":238,"x":-15,"width":599,"var":"box_items","height":185},"child":[{"type":"Box","props":{"y":8,"x":12,"width":566,"var":"box_wx","name":"item0","height":72},"child":[{"type":"Image","props":{"y":1,"x":1,"width":564,"skin":"dating_ui/tongyong/tu_di5.png","height":69}},{"type":"Image","props":{"y":13,"x":18,"skin":"dating_ui/geren/tu_weix.png"}},{"type":"Text","props":{"y":24,"x":95,"width":220,"var":"txt_wx","text":"未绑定微信号","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":36,"x":495,"width":134,"var":"btn_bindwx","stateNum":1,"skin":"dating_ui/geren/btn_bd3.png","height":62,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":99,"x":12,"width":566,"var":"box_mobile","name":"item2","height":72},"child":[{"type":"Image","props":{"y":1,"x":0,"skin":"dating_ui/tongyong/tu_di5.png"}},{"type":"Image","props":{"y":13,"x":25,"skin":"dating_ui/geren/tu_shouji.png"}},{"type":"Button","props":{"y":36,"x":494,"width":134,"var":"btn_bind_phone","stateNum":1,"skin":"dating_ui/geren/btn_bd3.png","height":62,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":23,"x":96,"width":220,"var":"txt_phone","text":"未绑定手机","height":24,"fontSize":24,"color":"#ffffff","align":"left"}}]}]},{"type":"Button","props":{"y":132,"x":3,"width":130,"var":"btn_head","stateNum":1,"skin":"dating_ui/geren/btn_xgtx.png","height":46}},{"type":"Button","props":{"y":99,"x":549,"var":"btn_copy","stateNum":1,"skin":"dating_ui/geren/btn_fuzhi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":86,"x":164,"skin":"dating_ui/geren/tu_id.png"}},{"type":"Image","props":{"y":136,"x":151,"skin":"dating_ui/geren/tu_jb.png"}},{"type":"Text","props":{"y":141,"x":18,"width":98,"text":"设置头像","height":24,"fontSize":24,"color":"#d9f7ff","align":"left"}},{"type":"Button","props":{"y":133,"x":522,"var":"btn_recharge","stateNum":1,"skin":"dating_ui/geren/btn_cz.png"}}]},{"type":"Box","props":{"y":120,"x":219,"width":618,"var":"box1","height":404},"child":[{"type":"List","props":{"y":-1,"x":0,"width":628,"var":"list_bb","spaceY":1,"height":381,"gray":false,"disabled":false},"child":[{"type":"GeRen1","props":{"y":-1,"x":20,"renderType":"render","runtime":"ui.nqp.dating.GeRen1UI"}}]},{"type":"Image","props":{"y":-37,"x":265,"skin":"dating_ui/geren/tu_sz.png"}},{"type":"Image","props":{"y":-39,"x":491,"skin":"dating_ui/geren/tu_szsj.png"}},{"type":"Image","props":{"y":-37,"x":17,"skin":"dating_ui/geren/tu_xh.png"}},{"type":"Image","props":{"y":-37,"x":372,"skin":"dating_ui/geren/tu_ye.png"}},{"type":"Image","props":{"y":-37,"x":137,"skin":"dating_ui/geren/tu_leixing.png"}},{"type":"Image","props":{"y":379,"x":45,"width":566,"skin":"dating_ui/tongyong/tu_xian.png","height":2}},{"type":"Label","props":{"y":163,"wordWrap":true,"width":232,"var":"txt_no","text":"---暂无数据---","height":22,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Image","props":{"y":-1,"x":32,"width":566,"skin":"dating_ui/tongyong/tu_xian.png","height":2}},{"type":"Box","props":{"y":379,"x":410,"width":200,"var":"btn_select","height":40},"child":[{"type":"Image","props":{"y":0,"x":-3,"var":"img_select","skin":"dating_ui/tongyong/tu_di10.png"}},{"type":"Label","props":{"y":8,"x":44,"width":119,"var":"lb_time","text":"2018-09-15","height":20,"fontSize":22,"color":"#89d4ff"}},{"type":"Button","props":{"y":4,"x":4,"stateNum":1,"skin":"dating_ui/tongyong/btn_sj2.png"}},{"type":"Button","props":{"y":18,"x":178,"var":"btn_jiantou","stateNum":1,"skin":"dating_ui/tongyong/btn_jt.png","rotation":0,"pivotY":12,"pivotX":18}}]},{"type":"Box","props":{"y":108,"x":410,"width":200,"var":"box_btn","height":271},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"dating_ui/tongyong/tu_sj1.png","height":315}},{"type":"Box","props":{"width":200,"var":"btn_0","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_select0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day0","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_0","text":"2018-09-15","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":39,"width":200,"var":"btn_1","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"var":"btn_select1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day1","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_1","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":77,"width":200,"var":"btn_2","height":40},"child":[{"type":"Button","props":{"y":7,"x":166,"var":"btn_select2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day2","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_2","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":116,"width":200,"var":"btn_3","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"var":"btn_select3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day3","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_3","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":154,"width":200,"var":"btn_4","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_select4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day4","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_4","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":193,"width":200,"var":"btn_5","height":40},"child":[{"type":"Button","props":{"y":9,"x":166,"var":"btn_select5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day5","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_5","height":20,"fontSize":22,"color":"#89d4ff"}}]},{"type":"Box","props":{"y":231,"width":200,"var":"btn_6","height":40},"child":[{"type":"Button","props":{"y":8,"x":166,"var":"btn_select6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Button","props":{"y":6,"x":7,"var":"btn_day6","stateNum":1,"skin":"dating_ui/tongyong/btn_sj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lb_6","height":20,"fontSize":22,"color":"#89d4ff"}}]}]}]},{"type":"Box","props":{"y":308,"x":510,"width":632,"var":"box2","height":420,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":27,"x":26,"width":618,"skin":"dating_ui/tongyong/tu_di6.png","height":330}},{"type":"Text","props":{"y":118,"x":57,"width":60,"text":"音效","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":202,"x":57,"width":60,"text":"音乐","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"HSlider","props":{"y":115,"x":139,"width":374,"var":"hslider0","value":0,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"HSlider","props":{"y":200,"x":139,"width":374,"var":"hslider1","value":10,"tick":10,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"Box","props":{"width":320,"var":"box_vesion","top":-8,"right":294,"height":18},"child":[{"type":"Box","props":{"y":1,"x":0,"var":"box_app"},"child":[{"type":"Label","props":{"y":2,"x":154,"width":49,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":18,"color":"#fff9bb","align":"left"}},{"type":"Label","props":{"y":2,"x":34,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#fff9bb","align":"right"}}]},{"type":"Box","props":{"y":0,"x":116,"width":201,"var":"box_v","height":18},"child":[{"type":"Label","props":{"y":3,"x":70,"wordWrap":true,"width":79,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#fff9bb","align":"right"}},{"type":"Label","props":{"y":3,"x":149,"width":78,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#fff9bb","align":"left"}}]}]},{"type":"CheckBox","props":{"y":110,"x":539,"width":71,"var":"btn_sound","skin":"dating_ui/shezhi/btn_guan.png","height":37}},{"type":"CheckBox","props":{"y":196,"x":539,"width":71,"var":"btn_music","skin":"dating_ui/shezhi/btn_guan.png","height":37}},{"type":"Button","props":{"y":331,"x":74,"var":"btn_set_psd","stateNum":1,"skin":"dating_ui/tongyong/btn_an2.png"},"child":[{"type":"Image","props":{"y":17,"x":24,"skin":"dating_ui/geren/tu_szmm.png"}}]},{"type":"Button","props":{"y":331,"x":379,"var":"btn_change","stateNum":1,"skin":"dating_ui/tongyong/btn_an2.png"},"child":[{"type":"Image","props":{"y":16,"x":27,"skin":"dating_ui/geren/tu_qhzh.png"}}]},{"type":"Label","props":{"y":-6,"x":525,"width":103,"var":"btn_clear","underline":true,"text":"清除缓存","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}},{"type":"Label","props":{"y":-6,"x":425,"width":103,"var":"btn_check","underline":true,"text":"检查更新","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}}]},{"type":"Tab","props":{"y":85,"x":31,"width":200,"var":"tab","selectedIndex":-1,"height":409},"child":[{"type":"Button","props":{"y":38,"x":104,"stateNum":2,"skin":"dating_ui/geren/btn_xx1.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":190,"x":104,"stateNum":2,"skin":"dating_ui/geren/btn_sz.png","name":"item2","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":72,"x":-6,"stateNum":2,"skin":"dating_ui/geren/btn_xx2.png","name":"item1"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.dating.GeRen1UI",ui.nqp.dating.GeRen1UI);

            super.createChildren();
            this.createView(ui.nqp.dating.GeRenUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class GeRen1UI extends View {
		public img_bg:Laya.Image;
		public txt_type:Laya.Label;
		public txt_money:Laya.Label;
		public txt_index:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":590,"height":42},"child":[{"type":"Image","props":{"y":0,"x":0,"width":591,"var":"img_bg","skin":"dating_ui/tongyong/tu_di.png","height":42}},{"type":"Label","props":{"x":115,"width":103,"var":"txt_type","text":"GM命令加钱","height":27,"fontSize":20,"color":"#ffffff","centerY":4}},{"type":"Box","props":{"x":278,"width":106,"height":27,"centerY":4},"child":[{"type":"Label","props":{"width":106,"var":"txt_money","text":"1000","height":27,"fontSize":20,"color":"#41fe69","centerY":1,"centerX":-36,"align":"center"}}]},{"type":"Box","props":{"x":7,"centerY":4},"child":[{"type":"Label","props":{"width":78,"var":"txt_index","text":"1","height":27,"fontSize":20,"color":"#ffffff","centerY":0.5,"centerX":0.5,"align":"center"}}]},{"type":"Box","props":{"x":363,"centerY":4},"child":[{"type":"Label","props":{"width":89,"var":"txt_earn","text":"1000","height":27,"fontSize":20,"color":"#ffffff","centerY":0,"centerX":-5,"align":"center"}}]},{"type":"Box","props":{"x":483,"width":104,"height":27,"centerY":4},"child":[{"type":"Label","props":{"y":0,"x":-50,"width":181,"var":"txt_time","text":"16:18:41","height":27,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.GeRen1UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class GeRenNCUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public btn_clear:Laya.Button;
		public btn_enter:Laya.Box;
		public txt_name:Laya.TextInput;
		public box_lb:Laya.Box;
		public txt_label:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":-3,"x":1,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":674,"var":"box","height":477,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":5,"x":1,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,0","height":477}},{"type":"Image","props":{"y":5,"x":674,"width":337,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":477}},{"type":"Image","props":{"y":169,"x":73,"width":530,"skin":"dating_ui/tongyong/tu_srkt.png","height":70}},{"type":"Button","props":{"y":-7,"x":605,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png"}},{"type":"Button","props":{"y":183,"x":547,"var":"btn_clear","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png"}},{"type":"Box","props":{"y":401,"width":259,"var":"btn_enter","height":73,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":124,"stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36,"x":129,"skin":"dating_ui/tongyong/tu_qd.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":51,"skin":"dating_ui/geren/tit_ggnc.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":182,"x":85,"skin":"dating_ui/geren/tu_gerne.png"}},{"type":"TextInput","props":{"y":185,"x":132,"width":334,"var":"txt_name","type":"text","restrict":"\\u4e00-\\u9fa5A-Za-z0-9","promptColor":"#5597d2","prompt":"请输入昵称","overflow":"hidden","maxChars":10,"height":35,"fontSize":24,"color":"#5597d2"}},{"type":"Box","props":{"y":389,"x":103,"var":"box_lb"},"child":[{"type":"Text","props":{"wordWrap":true,"width":358,"var":"txt_label","valign":"middle","text":"由1~5个汉字或1~10位数字/英文组成，","leading":10,"height":23,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Text","props":{"x":331,"wordWrap":true,"width":162,"valign":"middle","text":"仅限更改1次","leading":10,"height":23,"fontSize":20,"color":"#ffd75c","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.GeRenNCUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class GMPageUI extends View {
		public box_gm:Laya.Box;
		public txt_gm:Laya.TextInput;
		public btn_send:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":784,"var":"box_gm","height":56,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":1.5,"width":611,"skin":"dating_ui/tongyong/tu_di8.png","sizeGrid":"10,10,10,10","height":45,"alpha":0.6}},{"type":"TextInput","props":{"y":7.5,"x":18,"width":582,"var":"txt_gm","valign":"middle","promptColor":"#8b8b8b","prompt":"GM命令调试","height":37,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":-15,"x":620,"var":"btn_send","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"},"child":[{"type":"Image","props":{"y":13,"x":32,"skin":"dating_ui/tongyong/tu_qd.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.GMPageUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class HongbaoUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"dating_ui/hongbao/tu_heidian.png","scaleY":720,"scaleX":1280,"centerY":0,"centerX":0,"alpha":0.7}},{"type":"Image","props":{"y":574,"x":640,"skin":"dating_ui/hongbao/tu_di.png","centerX":0,"bottom":57,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":350,"x":636,"width":593,"height":423,"anchorY":0.5,"anchorX":0.5},"compId":26,"child":[{"type":"Image","props":{"y":178,"x":298,"skin":"dating_ui/hongbao/tu_dk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":167,"x":316,"width":134,"text":"1234.56","height":47,"fontSize":36,"color":"#ff0400","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":39,"width":208,"text":"红包标题字","height":42,"fontSize":40,"color":"#ffd600","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":330,"x":305,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":70,"skin":"dating_ui/hongbao/tu_lingqu.png"}},{"type":"Image","props":{"y":0,"x":1,"skin":"dating_ui/hongbao/tu_hx.png","blendMode":"lighter","alpha":0.05},"compId":34},{"type":"Image","props":{"y":-58,"x":-21,"skin":"dating_ui/tongyong/al10000.png","blendMode":"lighter"},"compId":35}]}]},{"type":"Box","props":{"y":350,"x":636,"width":593,"height":423,"anchorY":0.5,"anchorX":0.5},"compId":24,"child":[{"type":"Image","props":{"y":212,"x":297,"skin":"dating_ui/hongbao/tu_hb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":39,"width":208,"text":"红包标题字","height":42,"fontSize":40,"color":"#ffd600","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":317,"width":507,"text":"这句话一共有二十个字不信你数一下哈哈哈哈","height":29,"fontSize":25,"color":"#ffd600","centerX":2,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":190,"x":302,"width":176,"height":142,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":7,"x":-1,"stateNum":1,"skin":"dating_ui/hongbao/btn_cai.png"}},{"type":"Image","props":{"y":71,"x":88,"skin":"dating_ui/hongbao/tu_cai.png","scaleY":1.1714285714285715,"scaleX":1.1714285714285715,"anchorY":0.5,"anchorX":0.5},"compId":10},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1.1333333333333333,"scaleX":1.1333333333333333,"anchorY":0.5,"anchorX":0.5,"alpha":0.7333333333333334},"compId":12},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":16},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":17},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":18},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":19},{"type":"Image","props":{"y":71,"x":86,"skin":"dating_ui/hongbao/tu_kk.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20}]}]},{"type":"Box","props":{"y":236,"x":257,"width":200,"height":320},"child":[{"type":"Image","props":{"y":289,"x":32,"skin":"dating_ui/hongbao/tu_hg.png","scaleY":1.03,"scaleX":1.03,"rotation":3.5,"blendMode":"lighter","anchorY":1,"anchorX":0},"compId":5},{"type":"Image","props":{"y":258,"x":8,"skin":"dating_ui/hongbao/tu_hdeng.png"}}]},{"type":"Box","props":{"y":238,"x":822,"width":200,"height":320},"child":[{"type":"Image","props":{"y":281,"x":169,"skin":"dating_ui/hongbao/tu_guang.png","scaleY":1.05,"scaleX":1.05,"rotation":-4.5,"blendMode":"lighter","anchorY":1,"anchorX":1},"compId":6},{"type":"Image","props":{"y":256,"x":145,"skin":"dating_ui/hongbao/tu_hd.png"}}]},{"type":"Image","props":{"y":324,"x":639,"skin":"dating_ui/hongbao/10000.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":23},{"type":"Button","props":{"y":142,"x":983,"stateNum":1,"skin":"dating_ui/tongyong/btn_fh.png","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"rotation","index":80}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":80}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":-45,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"rotation","index":80}]}},{"target":12,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":15}]}},{"target":16,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"scaleY","index":10},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleY","index":25}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"scaleX","index":10},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"scaleX","index":25}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":16,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":25}]}},{"target":17,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":23},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":38}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":23},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":17,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":38}]}},{"target":18,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":36},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":51}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":36},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":51}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"key":"alpha","index":51}]}},{"target":19,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleY","index":49},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleY","index":64}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleX","index":49},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"scaleX","index":64}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":19,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":49},{"value":0,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":64}]}},{"target":20,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":62},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":77}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":62},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":77}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":77}]}},{"target":10,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":10},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":20},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":27},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":30},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":40},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":47},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":50},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":57},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":60},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":67},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":70},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":77},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":10},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":20},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":27},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":30},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":40},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":47},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":50},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":57},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":60},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":67},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":70},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":77},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"scaleX","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":23,"keyframes":{"skin":[{"value":"dating_ui/hongbao/10000.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":0},{"value":"dating_ui/hongbao/10000.png","tweenMethod":"linearNone","tween":false,"target":23,"label":null,"key":"skin","index":2},{"value":"dating_ui/hongbao/10001.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":4},{"value":"dating_ui/hongbao/10002.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":6},{"value":"dating_ui/hongbao/10003.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":8},{"value":"dating_ui/hongbao/10004.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":10},{"value":"dating_ui/hongbao/10005.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":12},{"value":"dating_ui/hongbao/10006.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":14},{"value":"dating_ui/hongbao/10007.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":16},{"value":"dating_ui/hongbao/10008.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":18},{"value":"dating_ui/hongbao/10009.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":20},{"value":"dating_ui/hongbao/10010.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":22},{"value":"dating_ui/hongbao/10011.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":24}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"label":null,"key":"alpha","index":2},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":25}]}},{"target":24,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":24,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":24,"label":null,"key":"visible","index":4}]}},{"target":26,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":26,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":26,"label":null,"key":"visible","index":3},{"value":true,"tweenMethod":"linearNone","tween":false,"target":26,"label":null,"key":"visible","index":4}]}}],"name":"ani2","id":2,"frameRate":24,"action":0},{"nodes":[{"target":34,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":34,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":34,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":34,"key":"alpha","index":44}]}},{"target":35,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":4},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":8},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":16},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":20},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":28},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":32},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":36},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":40},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":35,"key":"skin","index":44}]}}],"name":"ani3","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.HongbaoUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class HuoDeUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public txt_num:Laya.Label;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"dating_ui/tongyong/tu_gxhd.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":360,"x":640,"width":1355,"height":714,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Xing","props":{"y":227,"x":419,"rotation":-52,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing","props":{"y":266,"x":935,"rotation":70,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing","props":{"y":400,"x":939,"rotation":101,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing","props":{"y":447,"x":388,"rotation":-105,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing","props":{"y":423,"x":657,"rotation":535,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing","props":{"y":496,"x":546,"rotation":216,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing1","props":{"y":470,"x":447,"scaleY":0.7,"scaleX":0.7,"rotation":227,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing1UI"}},{"type":"Xing1","props":{"y":463,"x":894,"scaleY":1.3,"scaleX":1.3,"rotation":130,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing1UI"}},{"type":"Xing","props":{"y":480,"x":680,"scaleY":0.5,"scaleX":0.5,"rotation":165,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.XingUI"}},{"type":"Xing1","props":{"y":235,"x":464,"scaleY":1.3,"scaleX":1.3,"rotation":-20,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing1UI"}},{"type":"Xing1","props":{"y":320,"x":329,"scaleY":0.8,"scaleX":0.8,"rotation":-85,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing1UI"}},{"type":"Xing2","props":{"y":205,"x":706,"rotation":23,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing2UI"}},{"type":"Xing2","props":{"y":351,"x":1009,"rotation":93,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing2UI"}},{"type":"Xing2","props":{"y":249,"x":321,"rotation":289,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing2UI"}},{"type":"Xing2","props":{"y":467,"x":300,"rotation":259,"anchorY":1,"anchorX":0.5,"runtime":"ui.nqp.dating.component.Xing2UI"}}]},{"type":"Box","props":{"y":360,"x":640,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Guang1","props":{"x":2,"runtime":"ui.nqp.dating.component.Guang1UI"}},{"type":"Guang1","props":{"y":722,"x":1283,"scaleY":-1,"scaleX":-1,"runtime":"ui.nqp.dating.component.Guang1UI"}},{"type":"Guang2","props":{"y":2,"x":1,"runtime":"ui.nqp.dating.component.Guang2UI"}},{"type":"Guang2","props":{"y":722,"x":1280,"scaleY":-1,"scaleX":-1,"runtime":"ui.nqp.dating.component.Guang2UI"}}]},{"type":"Image","props":{"y":147,"x":640,"skin":"dating_ui/tongyong/tu_xx01.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":99,"x":640,"width":552,"scaleY":0.9,"height":214,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":207,"x":261,"width":391,"skin":"dating_ui/tongyong/tu_g.png","pivotY":180,"pivotX":194,"height":389,"blendMode":"lighter"},"compId":67}]},{"type":"Image","props":{"y":99,"x":640,"skin":"dating_ui/vip/gx10000.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":74},{"type":"Image","props":{"y":220,"x":640,"skin":"dating_ui/tongyong/tu_gx.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":352,"x":640,"skin":"dating_ui/huode/tu_hdk0.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":429,"x":640,"wordWrap":true,"width":150,"var":"txt_num","text":"123456","height":31,"fontSize":28,"color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":657,"x":640,"wordWrap":true,"width":284,"text":"点击空白处关闭","strokeColor":"#000000","stroke":2,"height":90,"fontSize":32,"color":"#ffffff","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"alpha":0.8,"align":"center"}},{"type":"Image","props":{"y":352,"var":"img","skin":"dating_ui/huode/tu_jb.png","centerX":2,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":74,"keyframes":{"skin":[{"value":"dating_ui/vip/gx10000.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":0},{"value":"dating_ui/vip/gx10002.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":4},{"value":"dating_ui/vip/gx10004.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":8},{"value":"dating_ui/vip/gx10006.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":12},{"value":"dating_ui/vip/gx10008.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":16},{"value":"dating_ui/vip/gx10010.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":20},{"value":"dating_ui/vip/gx10012.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":24},{"value":"dating_ui/vip/gx10014.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":28},{"value":"dating_ui/vip/gx10016.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":32},{"value":"dating_ui/vip/gx10018.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":36},{"value":"dating_ui/vip/gx10020.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":40},{"value":"dating_ui/vip/gx10022.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":44},{"value":"dating_ui/vip/gx10024.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":48},{"value":"dating_ui/vip/gx10026.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":52},{"value":"dating_ui/vip/gx10028.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":56},{"value":"dating_ui/vip/gx10030.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":60},{"value":"dating_ui/vip/gx10032.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":64},{"value":"dating_ui/vip/gx10034.png","tweenMethod":"linearNone","tween":false,"target":74,"key":"skin","index":68}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":67,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":67,"key":"rotation","index":150}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.XingUI",ui.nqp.dating.component.XingUI);
			View.regComponent("ui.nqp.dating.component.Xing1UI",ui.nqp.dating.component.Xing1UI);
			View.regComponent("ui.nqp.dating.component.Xing2UI",ui.nqp.dating.component.Xing2UI);
			View.regComponent("ui.nqp.dating.component.Guang1UI",ui.nqp.dating.component.Guang1UI);
			View.regComponent("ui.nqp.dating.component.Guang2UI",ui.nqp.dating.component.Guang2UI);

            super.createChildren();
            this.createView(ui.nqp.dating.HuoDeUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class HuoDongUI extends View {
		public btn_close:Laya.Button;
		public list_tab:Laya.List;
		public btn_tab:Laya.Button;
		public box_hd:Laya.Box;
		public img_bg:Laya.Image;
		public myhd0:Laya.Panel;
		public txt:Laya.Label;
		public myhd1:Laya.Panel;
		public img_myhd:Laya.Image;
		public txt_myhd:Laya.Label;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"left":-144,"height":720,"alpha":1},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1212,"height":660,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-9,"x":-21,"skin":"dating_ui/tongyong/tu_bk32.png"}},{"type":"Button","props":{"y":41,"x":1174,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":95,"x":28,"width":300,"var":"list_tab","spaceY":6,"selectEnable":true,"height":520},"child":[{"type":"TabItemRender1","props":{"renderType":"render","runtime":"ui.nqp.dating.component.TabItemRender1UI"}}]},{"type":"Button","props":{"y":19,"var":"btn_tab","skin":"dating_ui/huodong/btn_biaoti.png","selected":true,"centerX":0}},{"type":"Box","props":{"y":102,"x":318,"width":847,"var":"box_hd","height":515},"child":[{"type":"Image","props":{"y":306,"x":-3,"width":837,"visible":false,"var":"img_bg","skin":"dating_ui/tongyong/tu_di2.png","height":241}},{"type":"Panel","props":{"y":-1,"x":-1,"width":840,"var":"myhd0","height":510},"child":[{"type":"Label","props":{"y":3,"x":0,"wordWrap":true,"width":839,"var":"txt","leading":12,"height":1209,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Panel","props":{"y":-1,"x":-1,"width":840,"var":"myhd1","height":510},"child":[{"type":"Image","props":{"y":3,"x":-1,"width":837,"var":"img_myhd","height":183}},{"type":"Label","props":{"y":190,"x":0,"wordWrap":true,"width":837,"var":"txt_myhd","leading":12,"height":1092,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Panel","props":{"y":-1,"x":-1,"width":837,"var":"myhd2","height":510}},{"type":"Button","props":{"y":437,"visible":false,"var":"btn_qiandao","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","centerX":0},"child":[{"type":"Image","props":{"y":11,"x":38,"skin":"dating_ui/huodong/tu_ljqd.png"}}]}]},{"type":"Box","props":{"y":102,"x":318,"width":847,"var":"box_gg","height":515},"child":[{"type":"Panel","props":{"y":-9,"x":-5,"width":837,"var":"panel_wenzi","height":518},"child":[{"type":"Label","props":{"y":3,"x":1,"wordWrap":true,"width":837,"var":"lab_wenzi","text":"        欢迎来到我们的游戏，我们秉承公平、公正、安全、稳定的服务宗旨，竭诚为广大牌友提供一个结对公平的在线游戏互动平台。","leading":4,"fontSize":25,"font":"Microsoft YaHei","color":"#ffffff","bold":false,"align":"left"}}]},{"type":"Panel","props":{"y":-9,"x":-5,"width":837,"var":"panel_tu","height":518},"child":[{"type":"Image","props":{"width":837,"var":"img_tu","skin":"dating_ui/tongyong/tu_bb2.png","height":518}}]},{"type":"Panel","props":{"y":-9,"x":-5,"width":837,"var":"panel_wenzitu","height":518},"child":[{"type":"Image","props":{"width":833,"var":"img_wenzitu","skin":"dating_ui/tongyong/tu_bb2.png","height":137}},{"type":"Label","props":{"y":143,"wordWrap":true,"width":833,"var":"lab_wenzitu","text":"        尊敬的玩家，您好，近期有不法分子冒充【大众棋牌】游戏客服，以【解决游戏问题】为由，向玩家【收取不正当费用】，游戏中心提醒【大众棋牌】玩家们，【大众棋牌】客服绝不会以任何名义向玩家收取费用！","leading":4,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false,"align":"left"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.TabItemRender1UI",ui.nqp.dating.component.TabItemRender1UI);

            super.createChildren();
            this.createView(ui.nqp.dating.HuoDongUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class JianPanUI extends View {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":331,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":165,"x":641,"width":1282,"var":"img_bg","skin":"dating_ui/baoxianxiang/tu_d1.png","sizeGrid":"0,2,0,1","height":331,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":809,"var":"box_number","height":330,"centerY":-1,"centerX":0},"child":[{"type":"Button","props":{"y":40,"x":100,"width":200,"var":"btn1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"1","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":303,"width":200,"var":"btn2","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"2","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":506,"width":200,"var":"btn3","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"3","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":82,"x":709,"width":200,"var":"btn_pop","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"退格","height":163,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":100,"width":200,"var":"btn4","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"4","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":303,"width":200,"var":"btn5","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"5","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":123,"x":506,"width":200,"var":"btn6","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"6","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":100,"width":200,"var":"btn7","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"7","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":303,"width":200,"var":"btn8","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"8","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":206,"x":506,"width":200,"var":"btn9","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"9","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":249,"x":709,"width":200,"var":"btn_enter","skin":"dating_ui/baoxianxiang/btn_aa1.png","labelSize":40,"labelColors":"#ffffff","label":"确定","height":165,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":290,"x":100,"width":200,"var":"btn0","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"0","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":290,"x":406,"width":403,"var":"btn_clear","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"清除","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":250,"x":203,"width":406,"var":"btn_clears","height":82},"child":[{"type":"Button","props":{"y":40,"x":303,"width":200,"var":"btn_clear1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"清除","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":100,"width":200,"var":"btn_point","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":".","height":80,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":10,"x":10,"var":"box_english","right":0,"left":0,"height":330,"centerY":0},"child":[{"type":"Button","props":{"y":287,"x":121,"width":182,"var":"btn_change","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":30,"label":"大小写切换","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":1165,"width":184,"var":"btn_enter1","skin":"dating_ui/baoxianxiang/btn_aa1.png","labelSize":40,"labelColors":"#ffffff","label":"确定","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":90,"width":120,"var":"btn_e_1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"1","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":213,"width":120,"var":"btn_e_2","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"2","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":336,"width":120,"var":"btn_e_3","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"3","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":459,"width":120,"var":"btn_e_4","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"4","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":582,"width":120,"var":"btn_e_5","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"5","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":705,"width":120,"var":"btn_e_6","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"6","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":828,"width":120,"var":"btn_e_7","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"7","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":950,"width":120,"var":"btn_e_8","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"8","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":1073,"width":120,"var":"btn_e_9","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"9","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":1196,"width":120,"var":"btn_e_0","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"0","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":90,"width":120,"var":"btn_e_10","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"q","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":213,"width":120,"var":"btn_e_11","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"w","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":336,"width":120,"var":"btn_e_12","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"e","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":459,"width":120,"var":"btn_e_13","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"r","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":582,"width":120,"var":"btn_e_14","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"t","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":705,"width":120,"var":"btn_e_15","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"y","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":828,"width":120,"var":"btn_e_16","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"u","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":950,"width":120,"var":"btn_e_17","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"i","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":1073,"width":120,"var":"btn_e_18","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"o","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":122,"x":1196,"width":120,"var":"btn_e_19","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"p","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":90,"width":120,"var":"btn_e_20","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"a","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":213,"width":120,"var":"btn_e_21","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"s","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":336,"width":120,"var":"btn_e_22","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"d","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":459,"width":120,"var":"btn_e_23","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"f","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":582,"width":120,"var":"btn_e_24","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"g","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":705,"width":120,"var":"btn_e_25","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"h","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":828,"width":120,"var":"btn_e_26","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"j","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":950,"width":120,"var":"btn_e_27","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"k","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":1073,"width":120,"var":"btn_e_28","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"l","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":205,"x":1196,"width":120,"var":"btn_pop1","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":30,"label":"退格","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":274,"width":120,"var":"btn_e_29","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"z","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":397,"width":120,"var":"btn_e_30","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"x","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":520,"width":120,"var":"btn_e_31","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"c","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":643,"width":120,"var":"btn_e_32","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"v","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":766,"width":120,"var":"btn_e_33","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"b","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":888,"width":120,"var":"btn_e_34","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"n","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":287,"x":1011,"width":120,"var":"btn_e_35","skin":"dating_ui/baoxianxiang/btn_aa.png","labelSize":40,"label":"m","height":80,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.JianPanUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class JiaRuUI extends View {
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
		public clip_1:Laya.Clip;
		public clip_2:Laya.Clip;
		public clip_3:Laya.Clip;
		public clip_4:Laya.Clip;
		public clip_5:Laya.Clip;
		public clip_6:Laya.Clip;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":911,"height":590,"centerY":-20,"centerX":0},"child":[{"type":"Image","props":{"skin":"dating_ui/fk/game_popout_bg.png","centerX":0},"child":[{"type":"Image","props":{"y":187,"x":70,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":198,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":326,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":453,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":581,"skin":"dating_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":709,"skin":"dating_ui/jiaru/srd.png"}}]},{"type":"Button","props":{"y":203,"x":106,"var":"btn_1","stateNum":1,"skin":"dating_ui/jiaru/1.png"}},{"type":"Button","props":{"y":203,"x":355,"var":"btn_2","stateNum":1,"skin":"dating_ui/jiaru/2.png"}},{"type":"Button","props":{"y":204,"x":605,"var":"btn_3","stateNum":1,"skin":"dating_ui/jiaru/3.png"}},{"type":"Button","props":{"y":284,"x":106,"var":"btn_4","stateNum":1,"skin":"dating_ui/jiaru/4.png"}},{"type":"Button","props":{"y":284,"x":355,"var":"btn_5","stateNum":1,"skin":"dating_ui/jiaru/5.png"}},{"type":"Button","props":{"y":284,"x":604,"var":"btn_6","stateNum":1,"skin":"dating_ui/jiaru/6.png"}},{"type":"Button","props":{"y":365,"x":106,"var":"btn_7","stateNum":1,"skin":"dating_ui/jiaru/7.png"}},{"type":"Button","props":{"y":365,"x":355,"var":"btn_8","stateNum":1,"skin":"dating_ui/jiaru/8.png"}},{"type":"Button","props":{"y":365,"x":604,"var":"btn_9","stateNum":1,"skin":"dating_ui/jiaru/9.png"}},{"type":"Button","props":{"y":447,"x":106,"var":"btn_re","stateNum":1,"skin":"dating_ui/jiaru/cs.png"}},{"type":"Button","props":{"y":447,"x":355,"var":"btn_0","stateNum":1,"skin":"dating_ui/jiaru/0.png"}},{"type":"Button","props":{"y":448,"x":607,"var":"btn_del","stateNum":1,"skin":"dating_ui/jiaru/sc.png"}},{"type":"Clip","props":{"y":128,"x":116,"var":"clip_1","skin":"dating_ui/jiaru/clip_num.png","index":9,"clipX":10}},{"type":"Clip","props":{"y":128,"x":239,"visible":false,"var":"clip_2","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":128,"x":369,"visible":false,"var":"clip_3","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":128,"x":493,"visible":false,"var":"clip_4","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":128,"x":621,"visible":false,"var":"clip_5","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":128,"x":747,"visible":false,"var":"clip_6","skin":"dating_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Image","props":{"y":34,"x":-102,"skin":"dating_ui/fk/tit_jrfj.png","centerX":6}},{"type":"Button","props":{"y":49,"x":861,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.JiaRuUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class JieSanUI extends View {
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":322,"height":145,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":3,"skin":"dating_ui/fk/tu_jsqq.png"}},{"type":"Image","props":{"y":10,"x":114,"skin":"dating_ui/fk/tu_fq.png"}},{"type":"Button","props":{"y":110,"var":"btn_enter","stateNum":1,"skin":"dating_ui/fk/btn_jj.png","right":11,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":110,"var":"btn_cancle","stateNum":1,"skin":"dating_ui/fk/btn_ty.png","left":18,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":56,"x":168,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":139,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":199,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":260,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":320,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":380,"skin":"dating_ui/fk/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":69,"x":18,"skin":"dating_ui/fk/progress.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.JieSanUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class JieSuanRender2UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_chip:Laya.Label;
		public lab_multiple:Laya.Label;
		public lab_point:Laya.Label;
		public img_banker:Laya.Image;
		public lbl_totalpoint:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":680,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":680,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":680,"var":"img_bg","skin":"dating_ui/tongyong/jiesuan_zj.png","height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":234,"width":63,"var":"lab_chip","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":350,"width":63,"var":"lab_multiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":475,"width":100,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"dating_ui/tongyong/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":20,"x":593,"width":100,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.JieSuanRender2UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class JieSuan_FangKaUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":726,"height":527,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":154,"x":359,"skin":"dating_ui/tongyong/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"y":294,"x":363,"width":800,"skin":"dating_ui/tongyong/tu_bk1.png","sizeGrid":"10,10,0,10","height":460,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"x":363,"skin":"dating_ui/tongyong/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":363,"skin":"dating_ui/tongyong/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112,"x":349,"skin":"dating_ui/tongyong/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":418,"x":367,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":180,"x":20,"width":681,"skin":"dating_ui/tongyong/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38,"alpha":0.6}},{"type":"Label","props":{"y":204,"x":138,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":254,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":370,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":493,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":227,"x":18,"width":683,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender2","props":{"runtime":"ui.nqp.dating.JieSuanRender2UI"}}]},{"type":"Label","props":{"y":204,"x":611,"wordWrap":true,"width":84,"text":"累计积分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":467,"x":218,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"dating_ui/tongyong/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#ffffff","labelBold":true,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":467,"x":508,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"dating_ui/tongyong/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#ffffff","labelBold":true,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.JieSuanRender2UI",ui.nqp.dating.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.nqp.dating.JieSuan_FangKaUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class KeHuUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public list_kefu:Laya.List;
		public panel_wenti:Laya.Panel;
		public panel_onlinekf:Laya.Panel;
		public tab_kefu:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1228,"var":"box","height":660,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":-1,"width":1227,"height":660},"child":[{"type":"Image","props":{"y":6,"x":-5,"skin":"dating_ui/tongyong/tu_bk33.png"}},{"type":"Button","props":{"y":57,"x":1190,"width":100,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","height":104,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":56,"x":235,"skin":"dating_ui/kehu/tit_service.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":110,"x":293,"width":902,"height":522},"child":[{"type":"List","props":{"y":13,"x":10,"width":886,"var":"list_kefu","spaceY":3,"spaceX":3,"repeatX":0,"height":505,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"KeFuRender","props":{"y":0,"x":0,"name":"render","runtime":"ui.nqp.dating.component.KeFuRenderUI"}}]}]},{"type":"Panel","props":{"y":124,"x":319,"width":860,"var":"panel_wenti","vScrollBarSkin":"dating_ui/tongyong/vscroll.png","height":498},"child":[{"type":"Image","props":{"y":0,"x":15,"skin":"dating_ui/kehu/kehu_1.png"}},{"type":"Image","props":{"y":720,"x":15,"skin":"dating_ui/kehu/kehu_2.png"}},{"type":"Image","props":{"y":1440,"x":15,"width":688,"skin":"dating_ui/kehu/kehu_3.png","scaleY":1.23,"scaleX":1.23,"height":559}}]},{"type":"Panel","props":{"y":112,"x":322,"width":856,"var":"panel_onlinekf","height":521}},{"type":"Tab","props":{"y":129,"x":35,"width":285,"var":"tab_kefu","selectedIndex":0,"height":498},"child":[{"type":"Button","props":{"y":-6,"x":-1,"stateNum":3,"skin":"dating_ui/kehu/btn_cjwt.png","name":"item0"}},{"type":"Button","props":{"y":159,"x":0,"stateNum":3,"skin":"dating_ui/kehu/btn_lxkf1.png","name":"item2"}},{"type":"Button","props":{"y":76,"x":0,"stateNum":3,"skin":"dating_ui/kehu/btn_wxkf.png","name":"item1"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.KeFuRenderUI",ui.nqp.dating.component.KeFuRenderUI);

            super.createChildren();
            this.createView(ui.nqp.dating.KeHuUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QianDaoUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public box_award:Laya.Box;
		public award6:Laya.Box;
		public award0:Laya.Image;
		public award1:Laya.Image;
		public award2:Laya.Image;
		public award3:Laya.Image;
		public award4:Laya.Image;
		public award5:Laya.Image;
		public btn_qiandao:Laya.Button;
		public img_btn:Laya.Image;
		public btn_close:Laya.Button;
		public box_qiandao:Laya.Box;
		public qiandao0:ui.nqp.dating.component.Effect_qdUI;
		public qiandao1:ui.nqp.dating.component.Effect_qdUI;
		public qiandao2:ui.nqp.dating.component.Effect_qdUI;
		public qiandao3:ui.nqp.dating.component.Effect_qdUI;
		public qiandao4:ui.nqp.dating.component.Effect_qdUI;
		public qiandao5:ui.nqp.dating.component.Effect_qdUI;
		public qiandao6:ui.nqp.dating.component.Effect_qdUI;

        public static  uiView:any ={"type":"View","props":{"y":28,"x":14,"width":1280,"height":720},"child":[{"type":"Box","props":{"width":835,"height":607,"centerY":3,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":345,"x":379,"width":830,"height":609,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":259,"skin":"dating_ui/qiandao/qd_k.png","left":45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":6,"x":382,"skin":"dating_ui/qiandao/tit_qiandao.png"}}]},{"type":"Box","props":{"y":-52,"x":-24},"child":[{"type":"Image","props":{"y":77,"x":304,"skin":"dating_ui/qiandao/tu_xx.png","scaleY":1,"scaleX":1,"rotation":62,"anchorY":0.5,"anchorX":0.5},"compId":86},{"type":"Image","props":{"y":45,"x":12,"skin":"dating_ui/qiandao/tu_g.png","blendMode":"lighter"}},{"type":"Image","props":{"y":24,"x":182,"skin":"dating_ui/qiandao/tu_xx.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":85},{"type":"Image","props":{"y":57,"x":58,"skin":"dating_ui/qiandao/tu_xx.png","scaleY":0.5,"scaleX":0.5,"anchorY":0.5,"anchorX":0.5},"compId":87},{"type":"Image","props":{"y":140,"x":170,"skin":"dating_ui/qiandao/tu_qd.png","scaleY":1,"anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":139,"x":321,"skin":"dating_ui/qiandao/tu_hl.png","scaleY":1,"anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":96,"x":40,"skin":"dating_ui/qiandao/tu_shu.png","scaleY":1,"scaleX":1,"rotation":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":131,"x":103,"var":"box_award"},"child":[{"type":"Box","props":{"y":126,"x":127,"var":"award6"},"child":[{"type":"Image","props":{"y":19,"x":27,"skin":"dating_ui/qiandao/g10000.png","blendMode":"lighter"},"compId":98},{"type":"Image","props":{"y":90,"x":80,"skin":"dating_ui/qiandao/jl_6.png"}},{"type":"Image","props":{"y":82,"x":55,"skin":"dating_ui/qiandao/xx10000.png"},"compId":99}]},{"type":"Image","props":{"y":234,"x":523,"var":"award0","skin":"dating_ui/qiandao/jl_0.png"}},{"type":"Image","props":{"y":65,"x":528,"var":"award1","skin":"dating_ui/qiandao/jl_1.png"}},{"type":"Image","props":{"y":0,"x":264,"var":"award2","skin":"dating_ui/qiandao/jl_4.png"}},{"type":"Image","props":{"y":12,"x":45,"var":"award3","skin":"dating_ui/qiandao/jl_1.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":177,"x":-9,"var":"award4","skin":"dating_ui/qiandao/jl_0.png"}},{"type":"Image","props":{"y":324,"x":10,"var":"award5","skin":"dating_ui/qiandao/jl_1.png"}}]},{"type":"Button","props":{"y":466,"x":574,"width":194,"var":"btn_qiandao","stateNum":1,"skin":"dating_ui/tongyong/btn_2anh.png","height":91},"child":[{"type":"Image","props":{"var":"img_btn","skin":"dating_ui/qiandao/tu_mrzl.png","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":21,"x":820,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":90,"x":48,"width":736,"var":"box_qiandao","height":480},"child":[{"type":"Effect_qd","props":{"y":269,"x":565,"var":"qiandao0","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":93,"x":554,"var":"qiandao1","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":54,"x":308,"var":"qiandao2","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":53,"x":51,"var":"qiandao3","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":214,"x":31,"var":"qiandao4","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":357,"x":43,"var":"qiandao5","runtime":"ui.nqp.dating.component.Effect_qdUI"}},{"type":"Effect_qd","props":{"y":314,"x":278,"var":"qiandao6","runtime":"ui.nqp.dating.component.Effect_qdUI"}}]}]}],"animations":[{"nodes":[{"target":98,"keyframes":{"skin":[{"value":"dating_ui/qiandao/g10000.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":0},{"value":"dating_ui/qiandao/g10001.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":2},{"value":"dating_ui/qiandao/g10002.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":4},{"value":"dating_ui/qiandao/g10003.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":6},{"value":"dating_ui/qiandao/g10004.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":8},{"value":"dating_ui/qiandao/g10005.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":10},{"value":"dating_ui/qiandao/g10006.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":12},{"value":"dating_ui/qiandao/g10007.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":14},{"value":"dating_ui/qiandao/g10008.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":16},{"value":"dating_ui/qiandao/g10009.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":18},{"value":"dating_ui/qiandao/g10010.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":20},{"value":"dating_ui/qiandao/g10011.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":22},{"value":"dating_ui/qiandao/g10012.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":24},{"value":"dating_ui/qiandao/g10013.png","tweenMethod":"linearNone","tween":false,"target":98,"key":"skin","index":26}]}},{"target":99,"keyframes":{"skin":[{"value":"dating_ui/qiandao/xx10000.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":0},{"value":"dating_ui/qiandao/xx10001.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":2},{"value":"dating_ui/qiandao/xx10002.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":4},{"value":"dating_ui/qiandao/xx10003.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":6},{"value":"dating_ui/qiandao/xx10004.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":8},{"value":"dating_ui/qiandao/xx10005.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":10},{"value":"dating_ui/qiandao/xx10006.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":12},{"value":"dating_ui/qiandao/xx10007.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":14},{"value":"dating_ui/qiandao/xx10008.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":16},{"value":"dating_ui/qiandao/xx10009.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":18},{"value":"dating_ui/qiandao/xx10010.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":20},{"value":"dating_ui/qiandao/xx10011.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":22},{"value":"dating_ui/qiandao/xx10012.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":24},{"value":"dating_ui/qiandao/xx10013.png","tweenMethod":"linearNone","tween":false,"target":99,"key":"skin","index":26}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":85,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":85,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":85,"key":"rotation","index":200}]}},{"target":87,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":87,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":87,"key":"rotation","index":200}]}},{"target":86,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleY","index":100},{"value":1,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleY","index":200}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleX","index":100},{"value":1,"tweenMethod":"linearNone","tween":true,"target":86,"key":"scaleX","index":200}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.Effect_qdUI",ui.nqp.dating.component.Effect_qdUI);

            super.createChildren();
            this.createView(ui.nqp.dating.QianDaoUI.uiView);
        }
    }
}

module ui.nqp.dating {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":-208,"skin":"dating_ui/qifu/game_popout_qfbg.png","sizeGrid":"0,0,0,0","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"x":432,"skin":"dating_ui/qifu/tu_qf.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":98,"x":1047,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":272,"x":382,"width":227,"var":"box_qifu0","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":25,"x":28,"var":"img_type0","skin":"dating_ui/qifu/f_xs2.png"}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_xs.png"}},{"type":"Image","props":{"y":175,"x":58,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":182,"x":86,"width":88,"var":"txt_money0","text":"1/次","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":55,"width":117,"var":"box_time0","height":25},"child":[{"type":"Image","props":{"y":1,"x":-54,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":2,"x":37,"var":"lb_time0","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}},{"type":"Label","props":{"y":3,"width":50,"text":"剩余","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]}]},{"type":"Box","props":{"y":272,"x":640,"width":226,"var":"box_qifu1","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":90,"x":113,"var":"img_type1","skin":"dating_ui/qifu/f_px2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_px.png"}},{"type":"Image","props":{"y":175,"x":55,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":182,"x":93,"width":88,"var":"txt_money1","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":55,"width":117,"var":"box_time1","height":25},"child":[{"type":"Image","props":{"y":1,"x":-54,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":2,"x":37,"var":"lb_time1","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}},{"type":"Label","props":{"y":3,"x":0,"width":50,"text":"剩余","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]}]},{"type":"Box","props":{"y":272,"x":898,"width":227,"var":"box_qifu2","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":-1,"x":53,"var":"img_type2","skin":"dating_ui/qifu/f_gsy2.png"}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_gsy.png"}},{"type":"Image","props":{"y":175,"x":54,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38}},{"type":"Label","props":{"y":182,"x":94,"width":88,"var":"txt_money2","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":55,"width":117,"var":"box_time2","height":25},"child":[{"type":"Image","props":{"y":1,"x":-55,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":2,"x":37,"var":"lb_time2","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}},{"type":"Label","props":{"y":3,"width":50,"text":"剩余","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]}]},{"type":"Box","props":{"y":497,"x":382,"width":226,"var":"box_qifu3","height":218,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":1,"var":"img_type3","skin":"dating_ui/qifu/f_gg2.png","centerX":0}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_gg.png"}},{"type":"Image","props":{"y":175,"x":53,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38}},{"type":"Label","props":{"y":182,"x":91,"width":88,"var":"txt_money3","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":53,"var":"box_time3"},"child":[{"type":"Image","props":{"y":-1,"x":-52,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":3,"width":50,"text":"剩余","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":2,"x":38,"var":"lb_time3","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}}]}]},{"type":"Box","props":{"y":496,"x":640,"width":226,"var":"box_qifu4","height":220,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":23,"x":50,"var":"img_type4","skin":"dating_ui/qifu/f_cs2.png"}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_cs.png"}},{"type":"Image","props":{"y":175,"x":53,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":182,"x":92,"width":88,"var":"txt_money4","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":54,"var":"box_time4"},"child":[{"type":"Image","props":{"y":1,"x":-53,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":3,"width":50,"text":"剩余","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":2,"x":38,"var":"lb_time4","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}}]}]},{"type":"Box","props":{"y":496,"x":898,"width":226,"var":"box_qifu5","height":220,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":222,"stateNum":1,"skin":"dating_ui/qifu/btn_k.png","label":"label","height":220}},{"type":"Image","props":{"y":11,"x":43,"var":"img_type5","skin":"dating_ui/qifu/f_tdg2.png"}},{"type":"Image","props":{"y":5,"x":20,"skin":"dating_ui/qifu/f_tdg.png"}},{"type":"Image","props":{"y":175,"x":57,"width":38,"skin":"dating_ui/tongyong/icon_money1.png","height":38,"anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":183,"x":95,"width":88,"var":"txt_money5","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Box","props":{"y":149,"x":58,"var":"box_time5"},"child":[{"type":"Image","props":{"y":1,"x":-56,"skin":"dating_ui/qifu/tu_dk1.png"}},{"type":"Label","props":{"y":3,"width":39,"text":"剩余","height":25,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":2,"x":38,"var":"lb_time5","text":"23:59:59","fontSize":20,"color":"#bc0101","bold":true}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.QiFuUI.uiView);
        }
    }
}

module ui.nqp.dating {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":950,"height":400,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":200,"width":854,"left":70,"height":376,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":175.5,"x":439,"skin":"dating_ui/qifu/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":161,"x":441,"skin":"dating_ui/qifu/tu_hyl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":161,"x":441,"width":208,"height":74,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":104,"skin":"dating_ui/qifu/tu_hyl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-89,"x":-27.560000000000002,"skin":"dating_ui/qifu/tu_hysg.png","renderType":"mask"},"compId":20}]},{"type":"Image","props":{"y":231,"x":212,"var":"img0","skin":"dating_ui/qifu/f_xs1.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":81,"x":118,"skin":"dating_ui/qifu/f_xs1.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"compId":33}]},{"type":"Image","props":{"y":223,"x":190,"var":"img1","skin":"dating_ui/qifu/f_px1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":128,"x":115,"skin":"dating_ui/qifu/f_px1.png","anchorY":0.5,"anchorX":0.5},"compId":29}]},{"type":"Image","props":{"y":199,"x":202,"var":"img2","skin":"dating_ui/qifu/f_gsy1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":179,"x":139,"skin":"dating_ui/qifu/f_gsy1.png","anchorY":0.5,"anchorX":0.5},"compId":27}]},{"type":"Image","props":{"y":190,"x":127,"var":"img3","skin":"dating_ui/qifu/f_gg1.png","scaleY":1.1,"scaleX":1.1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":147,"x":181,"skin":"dating_ui/qifu/f_gg1.png","anchorY":0.5,"anchorX":0.5},"compId":9}]},{"type":"Image","props":{"y":210,"x":234,"var":"img4","skin":"dating_ui/qifu/f_cs1.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":142,"x":110,"skin":"dating_ui/qifu/f_cs1.png","anchorY":0.5,"anchorX":0.5},"compId":25}]},{"type":"Image","props":{"y":210,"x":196,"var":"img5","skin":"dating_ui/qifu/f_tdg1.png","scaleY":1.05,"scaleX":1.05,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":150,"x":138,"skin":"dating_ui/qifu/f_tdg1.png","anchorY":0.5,"anchorX":0.5},"compId":31}]}]},{"type":"Label","props":{"y":275,"x":407,"width":42,"var":"lb_1","text":"恭喜","height":29,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":275,"x":458,"var":"lb_name","text":"喵喵妖娆","fontSize":21,"font":"Microsoft YaHei","color":"#41fe69","bold":true}},{"type":"Label","props":{"y":275,"x":575,"width":42,"var":"lb_2","text":"获得","height":30,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":275,"x":633,"var":"lb_info","text":"洗洗手","fontSize":21,"font":"Microsoft YaHei","color":"#ae00ff","bold":true}},{"type":"Label","props":{"y":275,"x":695,"width":42,"var":"lb_3","text":"好运","height":30,"fontSize":21,"font":"Microsoft YaHei","color":"#ffffff","bold":true}}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":9,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":20,"keyframes":{"x":[{"value":-104,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":169,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":50},{"value":169,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"x","index":60}]}}],"name":"ani6","id":4,"frameRate":24,"action":2},{"nodes":[{"target":25,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":25,"label":null,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":20}]}}],"name":"ani4","id":5,"frameRate":24,"action":0},{"nodes":[{"target":27,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":27,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":27,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":27,"key":"alpha","index":20}]}}],"name":"ani2","id":6,"frameRate":24,"action":0},{"nodes":[{"target":29,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":29,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":20}]}}],"name":"ani1","id":7,"frameRate":24,"action":0},{"nodes":[{"target":31,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":31,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":20}]}}],"name":"ani5","id":8,"frameRate":24,"action":0},{"nodes":[{"target":33,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":33,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":33,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":33,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":33,"key":"alpha","index":20}]}}],"name":"ani0","id":9,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.QiFuSuccessUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuanUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public box_shoubang:Laya.Box;
		public hslider:Laya.HSlider;
		public btn_help:Laya.Button;
		public txt_curmoney:Laya.Label;
		public txt_dama:Laya.Label;
		public txt_zhanghao:laya.display.Text;
		public view_money:ui.nqp.dating.component.TextInputUI;
		public btn_clear:Laya.Button;
		public btn_duihuan:Laya.Box;
		public btn_max:Laya.Button;
		public box_record:Laya.Box;
		public list_record:Laya.List;
		public txt_no:laya.display.Text;
		public list_tab:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"var":"box","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/tongyong/tu_bk33.png"}},{"type":"Button","props":{"y":50,"x":1195,"width":84,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","height":87,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26,"x":174,"skin":"dating_ui/qukuan/tu_dh3.png"}},{"type":"Box","props":{"y":104,"x":326,"width":860,"height":526},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box_shoubang","height":526},"child":[{"type":"Image","props":{"y":406,"x":430,"width":839,"skin":"dating_ui/tongyong/tu_di2.png","height":240,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":73,"x":84,"width":267,"skin":"dating_ui/tongyong/tu_srkt4.png","height":60}},{"type":"Image","props":{"y":20,"width":276,"skin":"dating_ui/tongyong/tu_srkt5.png","sizeGrid":"20,20,20,20","left":80,"height":118}},{"type":"Image","props":{"y":104,"x":117,"width":80,"skin":"dating_ui/tongyong/jb_0.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":75,"width":267,"skin":"dating_ui/tongyong/tu_srkt4.png","right":85,"height":58}},{"type":"Image","props":{"y":20,"width":276,"skin":"dating_ui/tongyong/tu_srkt5.png","sizeGrid":"20,20,20,20","right":80,"height":118}},{"type":"Image","props":{"y":104,"x":541,"width":80,"skin":"dating_ui/tongyong/jb_0.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":163,"x":136,"width":696,"skin":"dating_ui/tongyong/tu_srkt3.png","height":65}},{"type":"Image","props":{"y":257,"x":136,"width":547,"skin":"dating_ui/tongyong/tu_srkt.png","height":68}},{"type":"HSlider","props":{"y":377,"x":431,"width":800,"var":"hslider","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Button","props":{"y":51,"x":750,"var":"btn_help","stateNum":1,"skin":"dating_ui/tongyong/btn_wh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":51,"x":216,"width":91,"text":"当前金币","height":25,"fontSize":24,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":97,"x":131,"width":173,"var":"txt_curmoney","text":"9999999.99","height":25,"fontSize":23,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":51,"x":642,"width":172,"text":"提现所需打码量","height":25,"fontSize":24,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":97,"x":555,"width":173,"var":"txt_dama","text":"9999999.99","height":25,"fontSize":23,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Text","props":{"y":180,"x":27,"width":105,"text":"收款账号：","strokeColor":"#5151a9","height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"right"}},{"type":"Text","props":{"y":195,"x":368,"width":450,"var":"txt_zhanghao","valign":"middle","text":"点击绑定银行卡信息","pivotY":21,"pivotX":216,"height":43,"fontSize":23,"color":"#ffffff","align":"left"}},{"type":"Text","props":{"y":276,"x":29,"width":105,"text":"提现金额：","strokeColor":"#5151a9","height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"right"}},{"type":"Label","props":{"y":94,"x":286,"text":"元","fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":94,"x":711,"text":"元","fontSize":24,"color":"#ffffff"}},{"type":"TextInput","props":{"y":270,"x":152,"var":"view_money","runtime":"ui.nqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":271,"x":629,"var":"btn_clear","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png"}},{"type":"Box","props":{"y":478,"x":430,"var":"btn_duihuan","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"x":1,"stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"}},{"type":"Image","props":{"y":10,"x":13,"skin":"dating_ui/qukuan/tu_qryh.png"}}]},{"type":"Button","props":{"y":245,"x":682,"width":162,"var":"btn_max","stateNum":1,"skin":"dating_ui/yuebao/btn_max.png","height":94}}]},{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box_record","height":526},"child":[{"type":"Image","props":{"y":57,"x":-1,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":58}},{"type":"Image","props":{"y":31,"x":95,"skin":"dating_ui/qukuan/tu_dhje.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31,"x":293,"skin":"dating_ui/qukuan/tu_dhfs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31,"x":517,"skin":"dating_ui/qukuan/tu_dhsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31,"x":740,"skin":"dating_ui/qukuan/tu_dhzt.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":275,"x":429,"width":860,"var":"list_record","spaceY":2,"repeatY":9,"height":405,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"QuKuanT","props":{"renderType":"render","runtime":"ui.nqp.dating.component.QuKuanTUI"}}]},{"type":"Text","props":{"y":279,"x":247,"width":366,"var":"txt_no","text":"--暂无兑换记录--","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":52,"x":1,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"List","props":{"y":-2,"x":-278,"width":301,"var":"list_tab","spaceY":5,"selectEnable":true,"repeatY":3,"repeatX":0,"height":536},"child":[{"type":"TabItemRender1","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.nqp.dating.component.TabItemRender1UI"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.dating.component.TextInputUI",ui.nqp.dating.component.TextInputUI);
			View.regComponent("ui.nqp.dating.component.QuKuanTUI",ui.nqp.dating.component.QuKuanTUI);
			View.regComponent("ui.nqp.dating.component.TabItemRender1UI",ui.nqp.dating.component.TabItemRender1UI);

            super.createChildren();
            this.createView(ui.nqp.dating.QuKuanUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuan_mimaUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public img_eyes:Laya.Button;
		public view_input:ui.nqp.dating.component.TextInputUI;
		public btn_mima_enter:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":20,"x":20,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":360,"x":640,"width":664,"var":"box","height":456,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-5,"x":332,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":-5,"x":331,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":23,"x":639,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":83,"x":33,"width":596,"skin":"dating_ui/tongyong/tu_bj1.png","height":261}},{"type":"Image","props":{"y":182,"x":106,"width":450,"skin":"dating_ui/tongyong/tu_srkt.png"}},{"type":"Button","props":{"y":195,"x":500,"var":"img_eyes","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png"}},{"type":"Image","props":{"y":14,"x":212,"width":238,"skin":"dating_ui/qukuan/tu_srqkm.png","height":46}},{"type":"TextInput","props":{"y":195,"x":114,"var":"view_input","runtime":"ui.nqp.dating.component.TextInputUI"}},{"type":"Box","props":{"y":391,"x":331,"var":"btn_mima_enter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":12,"x":-10,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"y":12,"x":5,"skin":"dating_ui/qukuan/tu_qd.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.TextInputUI",ui.nqp.dating.component.TextInputUI);

            super.createChildren();
            this.createView(ui.nqp.dating.QuKuan_mimaUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuan_shezhiMMUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public img_eyes:Laya.Button;
		public txt_tishi:Laya.Label;
		public view_input:ui.nqp.dating.component.TextInputUI;
		public btn_mima_enter:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":30,"x":30,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":360,"x":640,"width":660,"var":"box","height":454,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-6,"x":330,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":-6,"x":329,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":22,"x":638,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":82,"x":32,"width":596,"skin":"dating_ui/tongyong/tu_bj1.png","height":264}},{"type":"Image","props":{"y":146,"x":106,"width":447,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","anchorY":0.5,"anchorX":0}},{"type":"Image","props":{"y":15,"x":210,"width":240,"skin":"dating_ui/qukuan/tu_szqkmm.png","height":46}},{"type":"Button","props":{"y":125,"x":507,"var":"img_eyes","stateNum":1,"skin":"dating_ui/tongyong/btn_eyeon.png"}},{"type":"Label","props":{"y":375,"x":190,"wordWrap":true,"width":277,"var":"txt_tishi","text":"密码由 6 位数字组成","leading":20,"height":27,"fontSize":22,"color":"#41fe69","bold":true,"align":"center"}},{"type":"TextInput","props":{"y":127,"x":127,"var":"view_input","runtime":"ui.nqp.dating.component.TextInputUI"}},{"type":"Box","props":{"y":393,"x":329,"var":"btn_mima_enter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":2,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"x":12,"skin":"dating_ui/tongyong/tu_qr.png"}}]},{"type":"Image","props":{"y":198,"x":57,"skin":"dating_ui/yuebao/tu_wb3.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.TextInputUI",ui.nqp.dating.component.TextInputUI);

            super.createChildren();
            this.createView(ui.nqp.dating.QuKuan_shezhiMMUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class Qukuan_sxdmlUI extends View {
		public btn_close:Laya.Button;
		public btn_enter:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":651,"height":457,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-4,"x":326,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":-4,"x":325,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":24,"x":634,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":88,"x":31,"skin":"dating_ui/tongyong/tu_di3.png"}},{"type":"Image","props":{"y":20,"skin":"dating_ui/qukuan/tu_dhsxdml.png","centerX":0}},{"type":"Box","props":{"y":353,"x":195,"var":"btn_enter"},"child":[{"type":"Button","props":{"x":14,"stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"}},{"type":"Image","props":{"y":1,"skin":"dating_ui/tongyong/tu_qr.png"}}]},{"type":"Image","props":{"y":167,"x":36,"skin":"dating_ui/yuebao/tu_wb1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.Qukuan_sxdmlUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuan_tsUI extends View {
		public btn_close:Laya.Button;
		public txt_time:Laya.Label;
		public btn_enter:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":663,"height":462,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-2,"x":332,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":-2,"x":331,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Image","props":{"y":85,"x":33,"width":596,"skin":"dating_ui/tongyong/tu_bj1.png","height":261}},{"type":"Button","props":{"y":26,"x":639,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":40,"skin":"dating_ui/tongyong/tit_tishi.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":197,"x":128,"wordWrap":true,"width":115,"var":"txt_time","text":"23:23:23","leading":6,"height":30,"fontSize":29,"color":"#00ff0a","align":"center"}},{"type":"Box","props":{"y":353,"x":189,"var":"btn_enter"},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"x":12,"skin":"dating_ui/tongyong/tu_qr.png"}}]},{"type":"Image","props":{"y":167,"x":39,"width":584,"skin":"dating_ui/yuebao/tu_wb2.png","height":91}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.QuKuan_tsUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuan_yhkUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public txt_name:Laya.TextInput;
		public txt_khh:Laya.TextInput;
		public txt_zh:Laya.TextInput;
		public txt_khzh:Laya.TextInput;
		public btn_bind:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":792,"var":"box","height":533,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":-5,"width":395,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,45","height":531}},{"type":"Image","props":{"y":11,"x":784,"width":395,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,52","scaleX":-1,"height":531}},{"type":"Image","props":{"y":49,"x":35,"skin":"dating_ui/tongyong/tu_bkbt.png"}},{"type":"Button","props":{"y":43,"x":758,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":380,"x":75,"skin":"dating_ui/tongyong/tu_gth.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":140,"x":177,"width":485,"var":"txt_name","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#5597d2","prompt":"请输入持卡人姓名","padding":"-1,0,0,16","maxChars":6,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":200,"x":177,"width":485,"var":"txt_khh","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#5597d2","prompt":"请输入所属银行名称(如中国银行)","padding":"-1,0,0,16","maxChars":25,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":260,"x":177,"width":485,"var":"txt_zh","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"0-9","promptColor":"#5597d2","prompt":"请输入银行卡号码","padding":"-1,0,0,16","overflow":"hidden","maxChars":25,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":318,"x":177,"width":485,"var":"txt_khzh","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#5597d2","prompt":"请输入开户支行名称","padding":"-1,0,0,16","maxChars":25,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"Button","props":{"y":419,"x":243,"var":"btn_bind","stateNum":1,"skin":"dating_ui/tongyong/btn_qr.png"}},{"type":"Text","props":{"y":125,"x":20,"width":158,"text":"持 卡 人 ：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":185,"x":15,"width":162,"text":"所属银行：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":245,"x":20,"width":158,"text":"银行卡号：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":303,"x":17,"width":160,"text":"所属支行：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":352,"x":115,"wordWrap":true,"width":559,"underlineColor":"#28ff00","text":"请认真核对所输入的银行卡信息,兑换提现时将直接转入此账号！\\n为了您的财产安全，绑定后不可私自更改，如需修改请联系在线客服！","leading":4,"height":50,"fontSize":18,"color":"#ffd75c","align":"left"}},{"type":"Image","props":{"y":56,"x":387,"skin":"dating_ui/qukuan/tit_yhk.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.QuKuan_yhkUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class QuKuan_zfbUI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public txt_name:Laya.TextInput;
		public txt_zh:Laya.TextInput;
		public btn_bind:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":790,"var":"box","scaleY":1,"scaleX":1,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":1,"width":395,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,50","height":531}},{"type":"Image","props":{"y":0,"x":790,"width":395,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,50","scaleX":-1,"height":531}},{"type":"Image","props":{"y":56,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-263,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":349,"x":98,"skin":"dating_ui/tongyong/tu_gth.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":32,"x":764,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"y":147,"x":224,"width":488,"var":"txt_name","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"\\u4e00-\\u9fa5A-Za-z","promptColor":"#5597d2","prompt":"请输入实名制姓名","padding":"-1,0,0,16","maxChars":6,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"TextInput","props":{"y":269,"x":224,"width":489,"var":"txt_zh","type":"text","skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","restrict":"A-Za-z0-9@.","promptColor":"#5597d2","prompt":"请输入支付宝账号","padding":"-1,0,0,16","maxChars":25,"height":50,"fontSize":24,"color":"#f8ea5e","anchorY":0.5,"anchorX":0,"align":"left"}},{"type":"Text","props":{"y":134,"x":82,"width":135,"text":"实名制姓名：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":253,"x":81,"width":136,"text":"支付宝账号：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":180,"x":226,"wordWrap":true,"width":480,"underlineColor":"#28ff00","text":"根据支付宝官方要求,用户需输入实名制姓名才能获取","leading":4,"height":27,"fontSize":18,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":327,"x":123,"wordWrap":true,"width":594,"underlineColor":"#28ff00","text":"请绑定您正确的支付宝账号和实名信息，转出时将直接转入此支付宝账号，为了您的财产安全，绑定后不可私自更改，如需修改请联系客服！","leading":4,"height":48,"fontSize":18,"color":"#ffd75c","align":"left"}},{"type":"Image","props":{"y":46,"skin":"dating_ui/qukuan/tit_zfb.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":455,"x":395,"var":"btn_bind","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":1,"stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"}},{"type":"Image","props":{"x":11,"skin":"dating_ui/qukuan/tu_qd.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.QuKuan_zfbUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class ShouChongUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public award2:Laya.Image;
		public award3:Laya.Image;
		public box_btn:Laya.Box;
		public btn_info:Laya.Image;
		public clip_back:Laya.Clip;
		public img_yuan:Laya.Image;
		public img_percent:Laya.Image;
		public clip_cz:Laya.Clip;
		public box_sk:Laya.Box;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":964,"height":585,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":344,"x":499,"skin":"dating_ui/shouchong/tu_sc01.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":76,"x":276,"skin":"dating_ui/shouchong/tu_bt.png"}},{"type":"Image","props":{"y":325,"x":412,"width":82,"skin":"dating_ui/shouchong/tu_wpk.png","height":82},"child":[{"type":"Image","props":{"y":7,"x":7,"width":68,"var":"award2","skin":"dating_ui/touxiang/tu_tx11.png","height":68}}]},{"type":"Image","props":{"y":325,"x":522,"width":82,"skin":"dating_ui/shouchong/tu_wpk.png","height":82},"child":[{"type":"Image","props":{"y":7,"x":7,"width":68,"var":"award3","skin":"dating_ui/touxiang/tu_txk11.png","height":68}}]},{"type":"Box","props":{"y":460,"x":344,"width":307,"var":"box_btn","height":89},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"dating_ui/shouchong/btn_lq.png"}},{"type":"Image","props":{"y":41,"x":150,"var":"btn_info","skin":"dating_ui/shouchong/tu_lq.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-53,"x":3,"skin":"dating_ui/tongyong/al10000.png","blendMode":"lighter"},"compId":44}]},{"type":"Box","props":{"y":125,"x":575},"child":[{"type":"Clip","props":{"y":11,"x":-27,"width":79,"var":"clip_back","skin":"dating_ui/shouchong/clip_sz01.png","index":9,"height":110,"clipX":10}},{"type":"Image","props":{"y":42,"x":156,"var":"img_yuan","skin":"dating_ui/shouchong/tu_bfh.png"}},{"type":"Image","props":{"y":48,"x":158,"var":"img_percent","skin":"dating_ui/shouchong/tu_yuan.png"}}]},{"type":"Box","props":{"y":96,"x":461},"child":[{"type":"Clip","props":{"y":-5,"x":-4,"var":"clip_cz","skin":"dating_ui/shouchong/clip_sz02.png","index":6,"clipX":10}}]},{"type":"Box","props":{"y":50,"x":4,"width":280,"var":"box_sk","height":521}},{"type":"Image","props":{"y":41,"x":-11,"skin":"dating_ui/shouchong/scsg10015.png","mouseThrough":true,"blendMode":"lighter"},"compId":45},{"type":"Button","props":{"y":71,"x":887,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fh.png"}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"skin":[{"value":"dating_ui/tongyong/al10000.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":0},{"value":"dating_ui/tongyong/al10001.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":4},{"value":"dating_ui/tongyong/al10002.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":8},{"value":"dating_ui/tongyong/al10003.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":12},{"value":"dating_ui/tongyong/al10004.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":16},{"value":"dating_ui/tongyong/al10005.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":20},{"value":"dating_ui/tongyong/al10006.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":24},{"value":"dating_ui/tongyong/al10007.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":28},{"value":"dating_ui/tongyong/al10008.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":32},{"value":"dating_ui/tongyong/al10009.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":36},{"value":"dating_ui/tongyong/al10010.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":40},{"value":"dating_ui/tongyong/al10011.png","tweenMethod":"linearNone","tween":false,"target":44,"key":"skin","index":44}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":45,"keyframes":{"skin":[{"value":"dating_ui/shouchong/scsg10000.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":0},{"value":"dating_ui/shouchong/scsg10001.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":2},{"value":"dating_ui/shouchong/scsg10002.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":4},{"value":"dating_ui/shouchong/scsg10003.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":6},{"value":"dating_ui/shouchong/scsg10004.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":8},{"value":"dating_ui/shouchong/scsg10005.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":10},{"value":"dating_ui/shouchong/scsg10006.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":12},{"value":"dating_ui/shouchong/scsg10007.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":14},{"value":"dating_ui/shouchong/scsg10008.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":16},{"value":"dating_ui/shouchong/scsg10009.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":18},{"value":"dating_ui/shouchong/scsg10010.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":20},{"value":"dating_ui/shouchong/scsg10011.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":22},{"value":"dating_ui/shouchong/scsg10012.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":24},{"value":"dating_ui/shouchong/scsg10013.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":26},{"value":"dating_ui/shouchong/scsg10014.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":28},{"value":"dating_ui/shouchong/scsg10015.png","tweenMethod":"linearNone","tween":false,"target":45,"key":"skin","index":30},{"value":"dating_ui/shouchong/scsg10015.png","tweenMethod":"linearNone","tween":false,"target":45,"label":null,"key":"skin","index":70}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.ShouChongUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TipsUI extends View {
		public btn_close:Laya.Button;
		public btn_cancle:Laya.Button;
		public img_cancle:Laya.Image;
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;
		public img_title:Laya.Image;
		public txt_label:Laya.Label;
		public lb_tip:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":-7,"x":1,"width":1280,"height":720},"child":[{"type":"Box","props":{"width":680,"height":475,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-2,"x":4,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,0"}},{"type":"Image","props":{"y":-2,"x":340,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"anchorX":1}},{"type":"Button","props":{"y":30,"x":651,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":396,"x":186,"var":"btn_cancle","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":41,"x":108,"var":"img_cancle","skin":"dating_ui/tongyong/tu_qx.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":396,"x":506,"var":"btn_enter","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":41,"x":110,"var":"img_enter","skin":"dating_ui/tongyong/tu_qd.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":16,"x":235,"width":220,"height":58},"child":[{"type":"Image","props":{"x":105,"var":"img_title","skin":"dating_ui/tongyong/tit_tishi.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":114,"x":81,"width":520,"height":197},"child":[{"type":"Label","props":{"wordWrap":true,"width":520,"var":"txt_label","valign":"middle","overflow":"hidden","leading":8,"height":30,"fontSize":23,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":310,"var":"lb_tip","text":"同时多个祈福时，仅展示一个祈福，可在“个人中心”更换祈福头像","fontSize":18,"color":"#efffb2","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.TipsUI.uiView);
        }
    }
}

module ui.nqp.dating {
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
            this.createView(ui.nqp.dating.TipsXiaLaUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TiShiUI extends View {
		public btn_close:Laya.Button;
		public btn_sure:Laya.Button;
		public box_desc:Laya.Box;
		public txt_desc:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":676,"height":485,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":17,"x":331,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":17,"x":330,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":45,"x":638,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":245,"x":330,"width":609,"height":433,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":343,"x":195,"var":"btn_sure","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"},"child":[{"type":"Image","props":{"y":-1,"x":-14,"skin":"dating_ui/tongyong/tu_qr.png"}}]},{"type":"Image","props":{"y":72,"x":-3,"width":600,"skin":"dating_ui/tongyong/tu_di3.png","height":261}},{"type":"Image","props":{"y":139,"x":0,"width":611,"skin":"dating_ui/tongyong/tu_di6.png","sizeGrid":"0,30,30,30","height":200}},{"type":"Image","props":{"y":6,"skin":"dating_ui/tongyong/tit_tishi.png","centerX":0}},{"type":"Image","props":{"y":149,"x":5,"width":600,"skin":"dating_ui/yuebao/tu_di.png","height":2}},{"type":"Image","props":{"y":295,"x":5,"width":600,"skin":"dating_ui/yuebao/tu_di.png","height":2}},{"type":"Label","props":{"y":98,"x":98,"width":424,"text":"亲爱的玩家，您确定不再玩一会吗？","height":28,"fontSize":27,"color":"#ffffff"}},{"type":"Box","props":{"y":178,"x":12,"width":584,"var":"box_desc","height":95},"child":[{"type":"Label","props":{"wordWrap":true,"width":584,"var":"txt_desc","text":"您今日有效下注为                      ，今日00：00后将会转化成                      转盘积分，积分可前往","leading":10,"height":101,"fontSize":23,"color":"#ffffff"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.TiShiUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TouXiangUI extends View {
		public list:Laya.List;
		public btn_close:Laya.Button;
		public tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":870,"height":570,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-24,"x":-17,"skin":"dating_ui/tongyong/tu_bk2.png"}},{"type":"List","props":{"y":85,"x":250,"width":567,"var":"list","spaceY":5,"spaceX":40,"repeatX":4,"height":435,"anchorY":0,"anchorX":0},"child":[{"type":"HeadRenderT","props":{"y":55,"x":55,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.dating.component.HeadRenderTUI"}}]},{"type":"Button","props":{"y":24,"x":844,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":335,"skin":"dating_ui/geren/tit_sztx.png","centerX":-5}},{"type":"Tab","props":{"y":75,"x":27,"var":"tab"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"dating_ui/geren/btn_ghtx.png","name":"item0"}},{"type":"Button","props":{"y":83,"stateNum":2,"skin":"dating_ui/geren/btn_kaung.png","name":"item1"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.HeadRenderTUI",ui.nqp.dating.component.HeadRenderTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TuiGuangUI extends View {
		public btn_close:Laya.Button;
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
		public txt_no:Laya.Label;
		public box2:Laya.Box;
		public list2:Laya.List;
		public box_no_2:Laya.Box;
		public txt_agency_shareminpay:Laya.Label;
		public txt_agency_sharereward:Laya.Label;
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
		public lab_select:Laya.Label;
		public jiantou_up:Laya.Image;
		public jiantou_down:Laya.Image;
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
		public box6:Laya.Box;
		public list:Laya.List;
		public tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/tongyong/tu_bk33.png","centerY":0,"centerX":0}},{"type":"Button","props":{"y":80,"x":1228,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":55,"x":162,"var":"img_type","skin":"dating_ui/tuiguang/tit_daili.png"}},{"type":"Box","props":{"y":136,"x":358,"width":860,"var":"box0","height":525},"child":[{"type":"Box","props":{"y":-11,"x":-11},"child":[{"type":"Image","props":{"y":15,"x":14,"skin":"dating_ui/tuiguang/tu_d2.png"}},{"type":"Image","props":{"y":47,"x":44,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":90,"x":44,"skin":"dating_ui/tuiguang/tu_r.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":133,"x":44,"skin":"dating_ui/tuiguang/tu_r.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":176,"x":44,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":219,"x":44,"skin":"dating_ui/tuiguang/tu_b.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":36,"x":272,"wordWrap":true,"width":150,"var":"txt_szzjl","text":"0","height":25,"fontSize":22,"color":"#ffd75c","align":"right"}},{"type":"Label","props":{"y":79,"x":272,"wordWrap":true,"width":150,"var":"txt_zswjrs","text":"0","height":25,"fontSize":22,"color":"#ffd75c","align":"right"}},{"type":"Label","props":{"y":122,"x":272,"wordWrap":true,"width":150,"var":"txt_qtwjrs","text":"0","height":25,"fontSize":22,"color":"#ffd75c","align":"right"}},{"type":"Label","props":{"y":165,"x":272,"wordWrap":true,"width":150,"var":"txt_szzswjjj","text":"0","height":25,"fontSize":22,"color":"#ffd75c","align":"right"}},{"type":"Label","props":{"y":208,"x":272,"wordWrap":true,"width":150,"var":"txt_szqtwjjj","text":"0","height":25,"fontSize":22,"color":"#ffd75c","align":"right"}},{"type":"Label","props":{"y":36,"x":67,"wordWrap":true,"width":205,"var":"txt_w0","text":"上周总奖励：","leading":16,"height":25,"fontSize":22,"color":"#ffffff","bold":false,"align":"left"}},{"type":"Label","props":{"y":79,"x":67,"wordWrap":true,"width":205,"var":"txt_w1","text":"直属玩家人数：","leading":16,"height":25,"fontSize":22,"color":"#ffffff","bold":false,"align":"left"}},{"type":"Label","props":{"y":122,"x":67,"wordWrap":true,"width":205,"var":"txt_w2","text":"其他玩家人数：","leading":16,"height":25,"fontSize":22,"color":"#ffffff","bold":false,"align":"left"}},{"type":"Label","props":{"y":165,"x":67,"wordWrap":true,"width":205,"var":"txt_w3","text":"上周直属玩家奖励：","leading":16,"height":25,"fontSize":22,"color":"#ffffff","bold":false,"align":"left"}},{"type":"Label","props":{"y":208,"x":67,"wordWrap":true,"width":205,"var":"txt_w4","text":"上周其他玩家奖励：","leading":16,"height":25,"fontSize":22,"color":"#ffffff","bold":false,"align":"left"}}]},{"type":"Box","props":{"y":240,"x":-1},"child":[{"type":"Image","props":{"y":24,"x":4,"skin":"dating_ui/tuiguang/tu_d.png"}},{"type":"Image","props":{"y":24,"x":220,"skin":"dating_ui/tuiguang/tu_d.png"}},{"type":"Image","props":{"y":35,"x":36,"skin":"dating_ui/tuiguang/wz_1.png"}},{"type":"Image","props":{"y":29,"x":254,"skin":"dating_ui/tuiguang/wz_2.png"}},{"type":"Image","props":{"y":77,"x":66,"skin":"dating_ui/tuiguang/tu_bx1.png"}},{"type":"Image","props":{"y":80,"x":291,"skin":"dating_ui/tuiguang/tu_bx2.png"}},{"type":"Label","props":{"y":140,"x":33,"wordWrap":true,"width":147,"var":"txt_record","text":"0 元","height":25,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":140,"x":248,"wordWrap":true,"width":147,"var":"txt_ktq","text":"0 元","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":188,"x":70,"var":"btn_lq","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"},"child":[{"type":"Image","props":{"y":11,"x":72,"skin":"dating_ui/shouchong/tu_lq.png"}}]}]},{"type":"Box","props":{"y":-9,"x":524,"width":360,"height":396},"child":[{"type":"Image","props":{"y":20,"x":-72,"skin":"dating_ui/tuiguang/tu_d1.png"}},{"type":"Image","props":{"y":115,"x":26,"width":164,"var":"img_ewm","scaleY":0.9,"scaleX":0.9,"height":164,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":228,"x":-48,"wordWrap":true,"width":150,"text":"点击图片放大","height":25,"fontSize":22,"color":"#d1f5ff","bold":true,"align":"center"}},{"type":"Button","props":{"y":391,"x":132,"var":"btn_help","stateNum":1,"skin":"dating_ui/tuiguang/btn_bz.png"}},{"type":"Button","props":{"y":391,"x":-74,"var":"btn_record","stateNum":1,"skin":"dating_ui/tuiguang/btn_jl.png"}},{"type":"Button","props":{"y":149,"x":149,"var":"btn_fxq","stateNum":1,"skin":"dating_ui/tuiguang/btn_q.png"}},{"type":"Button","props":{"y":31,"x":150,"var":"btn_wxhy","stateNum":1,"skin":"dating_ui/tuiguang/btn_hy.png"}},{"type":"Box","props":{"y":288,"x":-73,"var":"box_no_share"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":389,"skin":"dating_ui/tuiguang/tu_yy1.png","sizeGrid":"0,20,0,20","height":72}},{"type":"Label","props":{"y":8,"x":5,"width":186,"text":"微信推广链接：","strokeColor":"#000027","overflow":"hidden","leading":6,"height":30,"fontSize":24,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":45,"x":7,"width":386,"text":"(点击可复制链接)","strokeColor":"#000027","leading":6,"height":22,"fontSize":18,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Label","props":{"y":9,"x":175,"width":208,"var":"txt_gw","text":"https://www.008qp...","strokeColor":"#000027","overflow":"hidden","leading":6,"height":30,"fontSize":22,"color":"#ffffff","bold":false,"align":"center"}}]}]}]},{"type":"Box","props":{"y":129,"x":358,"width":860,"var":"box1","height":525},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box1_0","height":525},"child":[{"type":"Image","props":{"y":62,"x":0,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":62}},{"type":"Image","props":{"y":34,"x":150,"skin":"dating_ui/tuiguang/tg_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":431,"skin":"dating_ui/tuiguang/tg_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":712,"skin":"dating_ui/tuiguang/tg_3.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":65,"x":0,"width":860,"var":"list_mx","spaceY":1,"height":405},"child":[{"type":"TuiGuangMX_T","props":{"y":20,"x":426,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.dating.component.TuiGuangMX_TUI"}}]},{"type":"Image","props":{"y":60,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":475,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box1_1","height":525},"child":[{"type":"Image","props":{"y":63,"x":-1,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":62}},{"type":"Box","props":{"y":2,"x":22,"width":658,"height":43},"child":[{"type":"Image","props":{"y":32,"x":128,"skin":"dating_ui/tuiguang/tg_11.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":410,"skin":"dating_ui/tuiguang/tg_22.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":689,"skin":"dating_ui/tuiguang/tg_33.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"List","props":{"y":65,"x":0,"width":860,"var":"list_fsmx","spaceY":1,"height":405},"child":[{"type":"TuiGuangMX_T","props":{"y":0,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.TuiGuangMX_TUI"}}]},{"type":"Image","props":{"y":60,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Label","props":{"y":189,"x":312,"width":232,"visible":false,"var":"txt_no","text":"---暂无数据---","height":22,"fontSize":20,"color":"#ffffff","centerY":10,"centerX":38,"align":"center"}}]},{"type":"Box","props":{"y":129,"x":358,"width":860,"var":"box2","height":525},"child":[{"type":"Image","props":{"y":65,"x":-2,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":62}},{"type":"Image","props":{"y":34,"x":91,"skin":"dating_ui/tuiguang/bb_je.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":289,"skin":"dating_ui/tuiguang/bb_lx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":512,"skin":"dating_ui/tuiguang/bb_ly.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":736,"skin":"dating_ui/tuiguang/bb_sj.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":66,"x":0,"width":860,"visible":false,"var":"list2","spaceY":1,"height":405,"anchorY":0,"anchorX":0},"child":[{"type":"FenXiangT5","props":{"y":-2,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.FenXiangT5UI"}}]},{"type":"Box","props":{"y":264,"x":429,"width":323,"var":"box_no_2","height":178,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":150.5,"x":-3,"wordWrap":true,"width":329,"text":"当前还未领取过奖励哦！","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":68.5,"x":162,"skin":"dating_ui/tuiguang/tu_hb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"y":493,"x":150,"wordWrap":true,"width":553,"text":"玩家通过您分享的链接下载并且充值　　     金额，您即可获得　　    现金奖励","height":22,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":493,"x":408,"width":50,"var":"txt_agency_shareminpay","height":22,"fontSize":16,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":493,"x":588,"width":50,"var":"txt_agency_sharereward","height":22,"fontSize":16,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":72,"width":150,"left":16,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":72,"x":188,"width":200,"height":25,"fontSize":20,"color":"#008aff","align":"center"}},{"type":"Label","props":{"y":72,"x":412,"width":200,"height":25,"fontSize":20,"color":"#008aff","align":"center"}},{"type":"Label","props":{"y":72,"width":200,"right":24,"height":25,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Image","props":{"y":475,"x":-3,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":60,"x":-3,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"y":129,"x":358,"width":860,"var":"box3","height":525},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box3_0","height":525},"child":[{"type":"Box","props":{"width":860,"height":525},"child":[{"type":"Box","props":{"y":63,"x":0,"width":860,"height":42},"child":[{"type":"Label","props":{"y":-1,"x":16,"width":150,"var":"txt_name1","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":-1,"x":188,"width":200,"var":"txt_yj","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":-1,"x":636,"width":200,"var":"txt_selffy","height":25,"fontSize":20,"color":"#ffd221","align":"center"}},{"type":"Label","props":{"y":-1,"x":412,"width":200,"var":"txt_allfy","height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]},{"type":"Image","props":{"y":32,"x":92,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":290,"skin":"dating_ui/tuiguang/bb_yj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":516,"skin":"dating_ui/tuiguang/bb_qdyj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":740,"skin":"dating_ui/tuiguang/bb_zdyj.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":32,"x":0},"child":[{"type":"Image","props":{"y":80,"x":92,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":80,"x":290,"skin":"dating_ui/tuiguang/bb_yj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":80,"x":517,"skin":"dating_ui/tuiguang/bb_qdyj.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":106,"x":0,"width":860,"visible":false,"var":"list3","spaceY":1,"height":374},"child":[{"type":"FenXiangT6","props":{"y":-3,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.FenXiangT6UI"}}]}]},{"type":"Image","props":{"y":51,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":131,"x":10,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":475,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"width":860,"var":"box3_1","height":525},"child":[{"type":"Box","props":{"y":17,"width":860,"height":32},"child":[{"type":"Image","props":{"y":16,"x":92,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":15,"x":511,"skin":"dating_ui/tuiguang/bb_fs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":15,"x":287,"skin":"dating_ui/tuiguang/bb_tz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":47,"x":-1,"width":860,"height":41},"child":[{"type":"Label","props":{"y":8,"x":17,"width":150,"var":"txt_name","height":25,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":8,"x":189,"width":200,"var":"txt_validBet","height":25,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":8,"x":413,"width":200,"var":"txt_fanshui","height":25,"fontSize":20,"color":"#ffd221","align":"center"}}]},{"type":"Image","props":{"y":43,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"y":93,"x":0,"width":860,"height":433},"child":[{"type":"Image","props":{"y":33,"x":92,"skin":"dating_ui/tuiguang/bb_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":33,"x":513,"skin":"dating_ui/tuiguang/tg_111.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":33,"x":737,"skin":"dating_ui/tuiguang/bb_yj1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":33,"x":273,"skin":"dating_ui/tuiguang/bb_ss.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":46,"x":0,"width":860,"visible":false,"var":"list_child","spaceY":1,"height":391},"child":[{"type":"FenXiangT6","props":{"y":11,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.FenXiangT6UI"}}]}]},{"type":"Image","props":{"y":151,"x":0,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Box","props":{"width":323,"var":"box_no_3","height":178,"centerY":0,"centerX":-7,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":150.5,"x":1,"wordWrap":true,"width":329,"text":"暂时没有记录，快去分享给好友吧！","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":68.5,"x":169,"skin":"dating_ui/tuiguang/tu_hb.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":129,"x":358,"width":860,"var":"box4","height":525},"child":[{"type":"Box","props":{"y":0,"x":0,"width":860,"var":"box4_0","height":525},"child":[{"type":"Box","props":{"y":9,"x":1,"width":716,"height":459},"child":[{"type":"Image","props":{"y":52,"x":-2,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":62}},{"type":"Image","props":{"y":6,"x":63,"skin":"dating_ui/tuiguang/bb_yh.png"}},{"type":"Image","props":{"y":6,"x":233,"skin":"dating_ui/tuiguang/tu_wdyh6.png"}},{"type":"Image","props":{"y":6,"x":462,"skin":"dating_ui/tuiguang/tu_wdyh7.png"}},{"type":"Image","props":{"y":6,"x":685,"skin":"dating_ui/tuiguang/tu_wdyh5.png"}},{"type":"Image","props":{"y":51,"x":-1,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":479,"x":-1,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]}]},{"type":"Box","props":{"width":860,"var":"box4_1","height":525},"child":[{"type":"Box","props":{"y":9,"x":1,"width":716,"height":459},"child":[{"type":"Image","props":{"y":6,"x":685,"skin":"dating_ui/tuiguang/tu_wdyh5.png"}},{"type":"Image","props":{"y":6,"x":246,"skin":"dating_ui/tuiguang/tu_wdyh3.png"}},{"type":"Image","props":{"y":6,"x":462,"skin":"dating_ui/tuiguang/tu_wdyh4.png"}},{"type":"Image","props":{"y":6,"x":63,"skin":"dating_ui/tuiguang/bb_yh.png"}},{"type":"Image","props":{"y":51,"x":-1,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":480,"x":-1,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]}]},{"type":"List","props":{"y":65,"x":0,"width":860,"var":"list_yonghu","spaceY":1,"height":426},"child":[{"type":"YongHuT","props":{"y":-3,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.YongHuTUI"}}]},{"type":"Box","props":{"y":497,"x":188,"var":"box_huizong"},"child":[{"type":"Label","props":{"x":0,"width":200,"var":"txt_huizong0","height":25,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"x":224,"width":200,"var":"txt_huizong1","height":25,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"x":448,"width":200,"var":"txt_huizong2","height":25,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"width":323,"var":"box_no_4","height":178,"centerY":0,"centerX":-16,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":68.5,"x":179,"skin":"dating_ui/tuiguang/tu_hb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":152.5,"x":13,"wordWrap":true,"width":329,"text":"---暂无数据---","height":22,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":206,"x":5,"width":175,"var":"box_btn","height":271},"child":[{"type":"Image","props":{"y":5,"x":-1,"width":175,"skin":"dating_ui/tongyong/tu_sj1.png","sizeGrid":"0,0,20,30","height":315}},{"type":"Box","props":{"y":10,"x":-25,"width":200,"var":"btn0","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected0","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab0","text":"2018-09-15","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":49,"x":-25,"width":200,"var":"btn1","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected1","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab1","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":87,"x":-25,"width":200,"var":"btn2","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected2","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab2","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":126,"x":-25,"width":200,"var":"btn3","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected3","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab3","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":164,"x":-25,"width":200,"var":"btn4","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected4","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab4","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":203,"x":-25,"width":200,"var":"btn5","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected5","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab5","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":241,"x":-25,"width":200,"var":"btn6","height":40},"child":[{"type":"Button","props":{"y":10,"x":166,"var":"btn_selected6","stateNum":2,"skin":"dating_ui/tongyong/btn_dj.png"}},{"type":"Label","props":{"y":9,"x":44,"width":119,"var":"lab6","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}}]}]},{"type":"Box","props":{"y":490,"x":7,"width":170,"var":"btn_select","height":40},"child":[{"type":"Image","props":{"y":0,"x":-3,"width":176,"skin":"dating_ui/tongyong/tu_di10.png","height":38}},{"type":"Label","props":{"y":8,"x":20,"width":119,"var":"lab_select","text":"2018-09-15","height":20,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":30,"x":133,"var":"jiantou_up","skin":"dating_ui/tongyong/btn_jt.png","scaleY":-1}},{"type":"Image","props":{"y":8,"x":132,"var":"jiantou_down","skin":"dating_ui/tongyong/btn_jt.png"}}]}]},{"type":"Box","props":{"y":149,"x":358,"width":860,"var":"box5","height":525},"child":[{"type":"Box","props":{"width":860,"var":"box5_0","height":525,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":464,"x":18,"wordWrap":true,"width":579,"var":"txt_total","text":"返佣总合计：26400+24000+10000+6500+27000=93900元","leading":4,"height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":-2,"x":16,"wordWrap":true,"width":709,"text":"计算方式：总返佣=直属返佣+级别返佣\\n无限代理连接团队所有人产生的业绩=总业绩。按照总业绩获取佣金！\\n120+450+300+100+50=1020万","leading":4,"height":78,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":90,"x":20,"width":815,"skin":"dating_ui/tuiguang/tu_tg2_1.png","height":370}},{"type":"Label","props":{"y":133,"x":286,"wordWrap":true,"width":140,"var":"txt_yeji0","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":255,"x":81,"wordWrap":true,"width":140,"var":"txt_yeji1","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":255,"x":519,"wordWrap":true,"width":140,"var":"txt_yeji3","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":378,"x":81,"wordWrap":true,"width":140,"var":"txt_yeji2","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":378,"x":519,"wordWrap":true,"width":140,"var":"txt_yeji4","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":133,"x":428,"width":165,"var":"txt_fanyongbili0","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":168,"x":287,"width":305,"var":"txt_fanyongmoney0","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":287,"x":80,"width":305,"var":"txt_fanyongmoney1","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":287,"x":519,"width":305,"var":"txt_fanyongmoney3","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":412,"x":80,"width":305,"var":"txt_fanyongmoney2","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":412,"x":519,"width":305,"var":"txt_fanyongmoney4","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":255,"x":220,"width":165,"var":"txt_fanyongbili1","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":255,"x":658,"width":165,"var":"txt_fanyongbili3","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":378,"x":220,"width":165,"var":"txt_fanyongbili2","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":378,"x":658,"width":165,"var":"txt_fanyongbili4","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"width":860,"visible":false,"var":"box5_1","height":525,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":8,"x":24,"skin":"dating_ui/tuiguang/tu_tg2_2.png"}},{"type":"Label","props":{"y":73,"x":448,"wordWrap":true,"width":42,"var":"txt_percent0","leading":4,"height":21,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":164,"x":475,"wordWrap":true,"width":42,"var":"txt_percent1","leading":4,"height":21,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":258,"x":504,"wordWrap":true,"width":42,"var":"txt_percent2","leading":4,"height":21,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":399,"x":624,"wordWrap":true,"width":34,"var":"txt_percent3","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":439,"x":578,"wordWrap":true,"width":34,"var":"txt_percent4","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":439,"x":506,"wordWrap":true,"width":34,"var":"txt_percent5","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":419,"x":506,"wordWrap":true,"width":34,"var":"txt_percent6","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":458,"x":183,"wordWrap":true,"width":34,"var":"txt_percent7","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":458,"x":391,"wordWrap":true,"width":34,"var":"txt_percent8","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":458,"x":321,"wordWrap":true,"width":34,"var":"txt_percent9","text":"30%","leading":4,"height":16,"fontSize":16,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":395,"x":13,"width":840,"text":"您的返=1级返利+2级返利+…N级返利。每级返利=对应下线的税收x(          )\\n您的所有     游戏产生税收，您将得到例如(税收10000x          )税收奖励\\n您的所有     游戏产生税收，您将得到例如(税收20000x          )x          税收奖励\\n您的返利=10000x          +(20000x          )x          \\n您的收益总和为所有     ,      ,      产生的税收奖励总和","fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":415,"x":99,"text":"B","fontSize":22,"color":"#ff00ff"}},{"type":"Label","props":{"y":437,"x":98,"text":"C","fontSize":22,"color":"#0aff00"}},{"type":"Label","props":{"y":474,"x":198,"text":"B","fontSize":22,"color":"#0aff00"}},{"type":"Label","props":{"y":474,"x":234,"text":"C","fontSize":22,"color":"#ff00ff"}},{"type":"Label","props":{"y":474,"x":275,"wordWrap":true,"width":20,"text":"N","leading":4,"height":22,"fontSize":22,"color":"#ffff00","align":"left"}}]}]},{"type":"Box","props":{"y":139,"x":358,"width":860,"var":"box6","height":525},"child":[{"type":"Image","props":{"y":54,"x":-1,"width":863,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":62}},{"type":"Image","props":{"y":23,"x":45,"skin":"dating_ui/tuiguang/tg_pm.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":22,"x":274,"skin":"dating_ui/tuiguang/tg_xx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":22,"x":658,"skin":"dating_ui/tuiguang/tg_fl.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":860,"var":"list","spaceY":1,"height":405},"child":[{"type":"TuiGuangT","props":{"y":65,"x":-4,"renderType":"render","runtime":"ui.nqp.dating.component.TuiGuangTUI"}}]},{"type":"Image","props":{"y":53,"x":-2,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":465,"x":-2,"width":860,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}}]},{"type":"Tab","props":{"y":132,"x":72,"var":"tab"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"dating_ui/tuiguang/btn_fx.png","name":"item0"}},{"type":"Button","props":{"y":86,"stateNum":2,"skin":"dating_ui/tuiguang/btn_mx.png","name":"item1"}},{"type":"Button","props":{"y":172,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jljl.png","name":"item2"}},{"type":"Button","props":{"y":259,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jlmx.png","name":"item3"}},{"type":"Button","props":{"y":344,"stateNum":2,"skin":"dating_ui/tuiguang/btn_yh.png","name":"item4"}},{"type":"Button","props":{"y":431,"stateNum":2,"skin":"dating_ui/tuiguang/btn_jc.png","name":"item5"}},{"type":"Button","props":{"y":513,"stateNum":2,"skin":"dating_ui/tuiguang/btn_zb.png","name":"item6"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.TuiGuangMX_TUI",ui.nqp.dating.component.TuiGuangMX_TUI);
			View.regComponent("ui.nqp.dating.component.FenXiangT5UI",ui.nqp.dating.component.FenXiangT5UI);
			View.regComponent("ui.nqp.dating.component.FenXiangT6UI",ui.nqp.dating.component.FenXiangT6UI);
			View.regComponent("ui.nqp.dating.component.YongHuTUI",ui.nqp.dating.component.YongHuTUI);
			View.regComponent("ui.nqp.dating.component.TuiGuangTUI",ui.nqp.dating.component.TuiGuangTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.TuiGuangUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TuiGuangHelpUI extends View {
		public btn_close:Laya.Button;
		public txt_more:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":901,"height":620,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-8,"x":441,"width":436,"skin":"dating_ui/tongyong/tu_bk1.png","scaleX":-1,"height":608}},{"type":"Image","props":{"y":-8,"x":440,"width":460,"skin":"dating_ui/tongyong/tu_bk1.png","height":608}},{"type":"Image","props":{"y":59,"skin":"dating_ui/tuiguang/tit_xx.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":72,"x":177,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-266,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":44,"x":858,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":136,"x":61,"skin":"dating_ui/tuiguang/tu_wb4.png"}},{"type":"Image","props":{"y":294,"x":61,"var":"txt_more","skin":"dating_ui/tuiguang/tu_wb5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.TuiGuangHelpUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TuiGuangJiLuUI extends View {
		public list_record:Laya.List;
		public txt_no:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":896,"height":595,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-3,"skin":"dating_ui/tongyong/tu_bk3.png"}},{"type":"Image","props":{"y":70,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-300,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":898,"skin":"dating_ui/tongyong/tu_bk3.png","scaleX":-1}},{"type":"Image","props":{"y":62,"skin":"dating_ui/tuiguang/tit_jilu.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":105,"x":86,"width":731,"height":430},"child":[{"type":"Image","props":{"y":34,"x":-16,"width":784,"skin":"dating_ui/tongyong/tu_xian.png","height":3}},{"type":"Image","props":{"y":19,"x":112,"skin":"dating_ui/tuiguang/tg_sj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":19,"x":368,"skin":"dating_ui/tuiguang/tg_je.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":19,"x":630,"skin":"dating_ui/tuiguang/tg_zt.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":38,"x":1,"width":726,"var":"list_record","spaceY":2,"height":378,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"FanYongT","props":{"renderType":"render","runtime":"ui.nqp.dating.component.FanYongTUI"}}]},{"type":"Label","props":{"y":200,"x":250,"wordWrap":true,"width":232,"var":"txt_no","text":"---暂无数据---","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":48,"x":859,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.FanYongTUI",ui.nqp.dating.component.FanYongTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.TuiGuangJiLuUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class TuiGuangSaveUI extends View {
		public img_ewm:Laya.Image;
		public btn_close:Laya.Button;
		public btn_save:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"skin":"dating_ui/tuiguang/tu_tg3.jpg","centerX":0}},{"type":"Image","props":{"y":461,"x":674,"width":140,"var":"img_ewm","height":140}},{"type":"Label","props":{"y":641,"x":1000,"wordWrap":true,"width":223,"text":"点击按钮保存图片至相册","leading":4,"height":25,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":63,"x":1221,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":547,"x":971,"var":"btn_save","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png"},"child":[{"type":"Image","props":{"y":12,"x":37,"skin":"dating_ui/tuiguang/tu_bc.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.TuiGuangSaveUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class VIPUI extends View {
		public bar_jindu:Laya.ProgressBar;
		public box_sk:Laya.Box;
		public vip_cur:Laya.Image;
		public vip_next:Laya.Image;
		public btn_close:Laya.Button;
		public box_jd:Laya.Box;
		public clip_jindu:Laya.Clip;
		public img_tx2:Laya.Image;
		public img_tx1:Laya.Image;
		public lb_max:Laya.Label;
		public btn_right:Laya.Image;
		public btn_left:Laya.Image;
		public panel_click:Laya.Panel;
		public box_info:ui.nqp.dating.component.VipSlideTUI;
		public box_info1:ui.nqp.dating.component.VipSlideTUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/vip/tu-lb.png","centerY":6,"centerX":11,"anchorY":0.5,"anchorX":0.5}},{"type":"ProgressBar","props":{"y":197,"x":479,"var":"bar_jindu","skin":"dating_ui/vip/progress.png"}},{"type":"Box","props":{"width":325,"var":"box_sk","height":435,"centerY":50,"centerX":-309}},{"type":"Image","props":{"x":472,"var":"vip_cur","skin":"dating_ui/vip/tu_vip0.png","centerY":-148,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":211,"x":926,"var":"vip_next","skin":"dating_ui/vip/tu_vip1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":112,"x":1068,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":196,"x":518,"width":360,"var":"box_jd","height":32},"child":[{"type":"Clip","props":{"var":"clip_jindu","skin":"dating_ui/vip/clip_1-11.png","clipX":10,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":3,"x":214,"var":"img_tx2","skin":"dating_ui/vip/tu_jksj.png"}},{"type":"Image","props":{"y":3,"x":100,"var":"img_tx1","skin":"dating_ui/vip/tu_cz.png"}}]},{"type":"Label","props":{"y":197,"x":512,"width":363,"var":"lb_max","text":"已达满级","height":32,"fontSize":30,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":359,"x":1098,"var":"btn_right","skin":"dating_ui/tongyong/tu_jt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":359,"x":208,"var":"btn_left","skin":"dating_ui/tongyong/tu_jt.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":280,"x":444,"width":582,"var":"panel_click","height":302},"child":[{"type":"VipSlideT","props":{"y":0,"x":0,"width":582,"var":"box_info","height":290,"runtime":"ui.nqp.dating.component.VipSlideTUI"}},{"type":"VipSlideT","props":{"y":0,"x":582,"width":582,"var":"box_info1","height":290,"runtime":"ui.nqp.dating.component.VipSlideTUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.VipSlideTUI",ui.nqp.dating.component.VipSlideTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.VIPUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class VipUpUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public btn_close:Laya.Button;
		public clip_num:Laya.Clip;
		public box_sk:Laya.Box;
		public btn_goto:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":782,"height":450,"centerY":9,"centerX":6,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"dating_ui/vip/tu_gongxi.png","centerY":14,"centerX":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","centerY":-152,"centerX":348,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"var":"clip_num","skin":"dating_ui/vip/clip_1-10.png","clipX":10,"centerY":40,"centerX":181,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":-20,"x":-83,"width":325,"var":"box_sk","height":432}},{"type":"Image","props":{"y":172,"x":551,"skin":"dating_ui/vip/tu_g1.png","blendMode":"lighter"}},{"type":"Image","props":{"y":-70,"x":236,"skin":"dating_ui/tongyong/tu_xx01.png"}},{"type":"Panel","props":{"y":-23,"x":443,"width":552,"scaleY":0.9,"height":214,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":207,"x":261,"width":391,"skin":"dating_ui/tongyong/tu_g.png","pivotY":180,"pivotX":194,"height":389,"blendMode":"lighter"},"compId":19}]},{"type":"Image","props":{"y":-115,"x":228,"skin":"dating_ui/vip/gx10000.png","blendMode":"lighter"},"compId":26},{"type":"Image","props":{"y":11,"x":201,"skin":"dating_ui/tongyong/tu_gx.png"}},{"type":"Box","props":{"y":417,"width":284,"height":87,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":44,"x":142,"var":"btn_goto","stateNum":1,"skin":"dating_ui/tongyong/btn_1canh.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":41,"x":142,"skin":"dating_ui/vip/tu_lqjl.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":19,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":19,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":19,"key":"rotation","index":200}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":0},{"value":0.6,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":100},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":200}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":26,"keyframes":{"skin":[{"value":"dating_ui/vip/gx10000.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":0},{"value":"dating_ui/vip/gx10002.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":4},{"value":"dating_ui/vip/gx10004.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":8},{"value":"dating_ui/vip/gx10006.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":12},{"value":"dating_ui/vip/gx10008.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":16},{"value":"dating_ui/vip/gx10010.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":20},{"value":"dating_ui/vip/gx10012.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":24},{"value":"dating_ui/vip/gx10014.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":28},{"value":"dating_ui/vip/gx10016.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":32},{"value":"dating_ui/vip/gx10018.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":36},{"value":"dating_ui/vip/gx10020.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":40},{"value":"dating_ui/vip/gx10022.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":44},{"value":"dating_ui/vip/gx10024.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":48},{"value":"dating_ui/vip/gx10026.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":52},{"value":"dating_ui/vip/gx10028.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":56},{"value":"dating_ui/vip/gx10030.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":60},{"value":"dating_ui/vip/gx10032.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":64},{"value":"dating_ui/vip/gx10034.png","tweenMethod":"linearNone","tween":false,"target":26,"key":"skin","index":68}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.VipUpUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class XinXiUI extends View {
		public btn_close:Laya.Button;
		public box_mail:Laya.Box;
		public list_mail:Laya.List;
		public txt_no_mail:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":26,"x":22,"skin":"dating_ui/tongyong/tu_bk333.png"}},{"type":"Image","props":{"y":76,"x":248,"skin":"dating_ui/xinxi/tu_youjian.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":76,"x":1217,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":129,"x":85,"width":1111,"var":"box_mail","height":516},"child":[{"type":"List","props":{"y":0,"x":0,"width":1120,"var":"list_mail","spaceY":2,"spaceX":1,"height":516,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"XinXi_lb","props":{"renderType":"render","runtime":"ui.nqp.dating.component.XinXi_lbUI"}}]},{"type":"Label","props":{"y":256,"width":373,"var":"txt_no_mail","text":"---老板，您暂时还没有邮件哦---","height":32,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.XinXi_lbUI",ui.nqp.dating.component.XinXi_lbUI);

            super.createChildren();
            this.createView(ui.nqp.dating.XinXiUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class XinXi1UI extends View {
		public panel:Laya.Panel;
		public txt_content:Laya.Label;
		public btn_close:Laya.Button;
		public txt_validTime:Laya.Label;
		public btn_shanchu:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":899,"height":584,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":451,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"200,0,200,0","height":595}},{"type":"Image","props":{"y":0,"x":901,"width":451,"skin":"dating_ui/tongyong/tu_bk.png","sizeGrid":"200,0,200,0","scaleX":-1,"height":595}},{"type":"Image","props":{"y":58,"x":183,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-307,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":99,"x":56,"width":792,"var":"panel","height":362},"child":[{"type":"Label","props":{"y":2,"x":9,"wordWrap":true,"width":768,"var":"txt_content","leading":8,"height":529,"fontSize":22,"color":"#ffffff"}}]},{"type":"Button","props":{"y":-12,"x":822,"width":84,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","height":87}},{"type":"Image","props":{"y":23,"skin":"dating_ui/xinxi/tit_youjian.png","centerX":0}},{"type":"Label","props":{"y":503,"x":681,"width":93,"text":"有效期：","height":29,"fontSize":23,"color":"#28ff00"}},{"type":"Label","props":{"y":502,"x":764,"width":93,"var":"txt_validTime","text":"30","height":29,"fontSize":23,"color":"#ff000a"}},{"type":"Box","props":{"y":512,"x":450,"width":229,"var":"btn_shanchu","height":84,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":2,"x":0,"stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png","centerX":0}},{"type":"Image","props":{"y":41,"x":115,"skin":"dating_ui/tongyong/tu_sc01.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.XinXi1UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class XinXi_lb2UI extends View {
		public txt_name:laya.display.Text;
		public txt_title:laya.display.Text;
		public txt_time:laya.display.Text;
		public txt_content:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":848,"height":136},"child":[{"type":"Box","props":{"width":870,"height":136},"child":[{"type":"Image","props":{"y":-17,"x":-5,"skin":"dating_ui/tongyong/tu_di9.png"}},{"type":"Image","props":{"y":83,"x":607,"width":228,"skin":"dating_ui/tongyong/tu_lbk.png","sizeGrid":"0,19,0,18","height":34}},{"type":"Text","props":{"y":88,"x":614,"width":223,"var":"txt_name","text":"发件人：GM","height":23,"fontSize":20,"color":"#efda8b","align":"center"}},{"type":"Text","props":{"y":24,"x":157,"width":277,"var":"txt_title","text":"公告标题可以显示12个字","height":28,"fontSize":25,"color":"#fff8f8"}},{"type":"Text","props":{"y":32,"x":608,"width":222,"var":"txt_time","text":"2020-8-15 22:11:11","height":27,"fontSize":24,"color":"#e4f8fb","align":"center"}},{"type":"Image","props":{"y":17,"x":24,"width":102,"skin":"dating_ui/xinxi/tu_laba.png","height":106}},{"type":"Panel","props":{"y":78,"x":155,"width":322,"height":24},"child":[{"type":"Text","props":{"y":4,"x":0,"width":344,"var":"txt_content","text":"点击阅读查看详情","overflow":"hidden","fontSize":20,"color":"#c8c5c5"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.XinXi_lb2UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class YuEBaoUI extends View {
		public box:Laya.Box;
		public box_xx:Laya.Box;
		public txt_totalGet:Laya.Label;
		public txt_evGet:Laya.Label;
		public txt_evRate:Laya.Label;
		public txt_preGet:Laya.Label;
		public btn_help:Laya.Button;
		public clip_money:Laya.Clip;
		public box_zr:Laya.Box;
		public bar_zr:Laya.HSlider;
		public txt_zr_curMoney:laya.display.Text;
		public txt_zr_yuebao:laya.display.Text;
		public txt_zr_lixi:laya.display.Text;
		public view_zr:ui.nqp.dating.component.TextInputUI;
		public btn_zr_cancle:Laya.Button;
		public btn_zr_zhuanru:Laya.Button;
		public btn_zr_max:Laya.Button;
		public box_zc:Laya.Box;
		public bar_zc:Laya.HSlider;
		public txt_zc_curMoney:laya.display.Text;
		public txt_zc_yuebao:laya.display.Text;
		public view_zc:ui.nqp.dating.component.TextInputUI;
		public btn_zc_zhuanchu:Laya.Button;
		public btn_zc_cancle:Laya.Button;
		public btn_zc_max:Laya.Button;
		public btn_tabs:Laya.Tab;
		public box_jilu:Laya.Box;
		public txt_jilu_no:Laya.Label;
		public list_jilu:Laya.List;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1280,"var":"box","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":54,"x":212,"width":874,"height":592},"child":[{"type":"Image","props":{"y":-7,"x":-21,"skin":"dating_ui/tongyong/tu_bk2.png"}},{"type":"Image","props":{"y":68,"x":148,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-280,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":55,"x":428,"skin":"dating_ui/yuebao/tit_access.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":99,"x":231,"width":600,"var":"box_xx","height":449},"child":[{"type":"Image","props":{"y":186,"x":165,"width":225,"skin":"dating_ui/yuebao/tu_zrsy.png","height":73}},{"type":"Image","props":{"y":304,"x":409,"width":100,"skin":"dating_ui/yuebao/tu_di.png","rotation":90,"height":2}},{"type":"Image","props":{"y":304,"x":192,"width":100,"skin":"dating_ui/yuebao/tu_di.png","rotation":90,"height":2}},{"type":"Image","props":{"y":-2,"x":-17,"width":615,"skin":"dating_ui/tongyong/tu_fj.png","height":346}},{"type":"Label","props":{"y":55,"x":227,"width":118,"text":"总金额 (元)","height":30,"fontSize":23,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":315,"x":430,"width":147,"text":"每日利率 (‱)","height":28,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":315,"x":223,"width":146,"text":"每日收益 (元)","height":28,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":315,"x":9,"width":142,"text":"累计收益 (元)","height":28,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":368,"x":-2,"width":167,"var":"txt_totalGet","text":"999999.99","height":34,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":369,"x":223,"width":152,"var":"txt_evGet","text":"999999.99","height":34,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":366,"x":454,"width":100,"var":"txt_evRate","text":"99‱","height":34,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Box","props":{"width":184,"height":28,"centerY":3,"centerX":-17,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":1,"x":85,"width":261,"var":"txt_preGet","text":"昨日收益           元","height":21,"fontSize":22,"color":"#ffffff","anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":92,"width":50,"visible":false,"text":"99.99","strokeColor":"#ffff00","height":21,"fontSize":22,"color":"#f4ff00","align":"center"}}]},{"type":"Button","props":{"y":51,"x":527,"var":"btn_help","stateNum":1,"skin":"dating_ui/tongyong/btn_wh.png"}},{"type":"Clip","props":{"var":"clip_money","skin":"dating_ui/yuebao/clip_1-9.png","scaleY":0.6,"scaleX":0.6,"index":0,"clipX":11,"centerY":-95,"centerX":-21}}]},{"type":"Box","props":{"y":100,"x":231,"width":600,"var":"box_zr","height":449},"child":[{"type":"HSlider","props":{"y":272,"x":296,"width":573,"var":"bar_zr","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Image","props":{"y":207,"x":83,"width":373,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","height":68,"anchorY":0.5,"anchorX":0}},{"type":"Image","props":{"y":219,"x":-3,"width":600,"skin":"dating_ui/tongyong/tu_di2.png"}},{"type":"Image","props":{"y":38,"x":12,"skin":"dating_ui/tongyong/tu_srkt7.png"}},{"type":"Image","props":{"y":38,"x":369,"skin":"dating_ui/tongyong/tu_srkt7.png"}},{"type":"Text","props":{"y":76,"x":47,"width":141,"text":"携带金额 (元)","strokeColor":"#5151a9","height":32,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":76,"x":416,"width":126,"text":"余额宝 (元)","strokeColor":"#5151a9","height":32,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":110,"x":44,"width":140,"var":"txt_zr_curMoney","text":"123456.78","strokeColor":"#5151a9","height":29,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":110,"x":409,"width":133,"var":"txt_zr_yuebao","text":"123456.78","strokeColor":"#5151a9","height":30,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":193,"x":1,"width":89,"text":"转   入：","strokeColor":"#5151a9","stroke":1,"height":28,"fontSize":24,"color":"#ffffff","bold":true,"align":"right"}},{"type":"Text","props":{"y":314,"x":130,"width":332,"var":"txt_zr_lixi","text":"明日24:00可产生利息：999999.99","height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"TextInput","props":{"y":187,"x":92,"var":"view_zr","runtime":"ui.nqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":186,"x":399,"var":"btn_zr_cancle","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png","scaleY":1,"scaleX":1}},{"type":"Button","props":{"y":361,"x":181,"var":"btn_zr_zhuanru","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"}},{"type":"Box","props":{"y":206,"x":525,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":-3,"x":-4,"var":"btn_zr_max","stateNum":1,"skin":"dating_ui/yuebao/btn_max.png"}}]},{"type":"Image","props":{"y":7,"x":442,"width":64,"skin":"dating_ui/yuebao/tu_yeb.png","height":71}},{"type":"Image","props":{"y":7,"x":86,"width":62,"skin":"dating_ui/yuebao/tu_jb.png","height":68}},{"type":"Image","props":{"y":370,"x":230,"skin":"dating_ui/yuebao/tu_zr.png"}},{"type":"Image","props":{"y":38,"x":212,"skin":"dating_ui/yuebao/tu_jt1.png"}},{"type":"Image","props":{"y":121,"x":262,"skin":"dating_ui/yuebao/tu_zr1.png"}}]},{"type":"Box","props":{"y":100,"x":231,"width":600,"var":"box_zc","height":449},"child":[{"type":"HSlider","props":{"y":272,"x":296,"width":573,"var":"bar_zc","value":50,"tick":1,"skin":"dating_ui/tongyong/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"anchorY":0.5,"anchorX":0.5,"allowClickBack":true}},{"type":"Image","props":{"y":207,"x":82,"width":373,"skin":"dating_ui/tongyong/textinput.png","sizeGrid":"15,24,17,25","anchorY":0.5,"anchorX":0}},{"type":"Image","props":{"y":219,"x":-4,"width":600,"skin":"dating_ui/tongyong/tu_di2.png"}},{"type":"Image","props":{"y":38,"x":12,"skin":"dating_ui/tongyong/tu_srkt7.png"}},{"type":"Image","props":{"y":38,"x":369,"skin":"dating_ui/tongyong/tu_srkt7.png"}},{"type":"Text","props":{"y":76,"x":46,"width":141,"text":"携带金额 (元)","strokeColor":"#5151a9","height":32,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":76,"x":417,"width":126,"text":"余额宝 (元)","strokeColor":"#5151a9","height":32,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":110,"x":43,"width":140,"var":"txt_zc_curMoney","text":"123456.78","strokeColor":"#5151a9","height":29,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":110,"x":410,"width":133,"var":"txt_zc_yuebao","text":"123456.78","strokeColor":"#5151a9","height":30,"fontSize":28,"color":"#f8ea5e","align":"center"}},{"type":"Text","props":{"y":193,"x":1,"width":89,"text":"转   出：","strokeColor":"#5151a9","height":28,"fontSize":24,"color":"#ffffff","bold":true,"align":"right"}},{"type":"TextInput","props":{"y":187,"x":92,"var":"view_zc","runtime":"ui.nqp.dating.component.TextInputUI"}},{"type":"Button","props":{"y":361,"x":181,"var":"btn_zc_zhuanchu","stateNum":1,"skin":"dating_ui/tongyong/btn_1danh.png"}},{"type":"Button","props":{"y":186,"x":400,"var":"btn_zc_cancle","stateNum":1,"skin":"dating_ui/tongyong/btn_qc.png"}},{"type":"Box","props":{"y":489,"x":1365,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":-320,"x":-904,"var":"btn_zc_max","stateNum":1,"skin":"dating_ui/yuebao/btn_max.png"}}]},{"type":"Image","props":{"y":370,"x":229,"skin":"dating_ui/yuebao/tu_zc.png"}},{"type":"Image","props":{"y":38,"x":212,"skin":"dating_ui/yuebao/tu_jt.png"}},{"type":"Image","props":{"y":7,"x":442,"width":64,"skin":"dating_ui/yuebao/tu_yeb.png","height":71}},{"type":"Image","props":{"y":7,"x":86,"width":62,"skin":"dating_ui/yuebao/tu_jb.png","height":68}},{"type":"Image","props":{"y":121,"x":261,"skin":"dating_ui/yuebao/tu_zc1.png"}}]},{"type":"Tab","props":{"y":99,"x":31,"var":"btn_tabs","selectedIndex":0},"child":[{"type":"Button","props":{"y":-4,"x":-9,"stateNum":2,"skin":"dating_ui/yuebao/btn_xx.png","name":"item0"}},{"type":"Button","props":{"y":70,"x":-9,"stateNum":2,"skin":"dating_ui/yuebao/btn_zhuanru.png","name":"item1"}},{"type":"Button","props":{"y":145,"x":-9,"stateNum":2,"skin":"dating_ui/yuebao/btn_zhuanchu.png","name":"item2"}},{"type":"Button","props":{"y":221,"x":-9,"stateNum":2,"skin":"dating_ui/yuebao/btn_jl.png","name":"item3"}}]},{"type":"Box","props":{"y":94,"x":222,"width":604,"var":"box_jilu","height":436,"centerY":6,"centerX":96},"child":[{"type":"Box","props":{"y":0,"x":0,"width":607,"height":449},"child":[{"type":"Image","props":{"y":58,"x":1,"width":607,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"100,200,100,200","scaleY":-1,"height":58}},{"type":"Image","props":{"y":11,"x":141,"skin":"dating_ui/yuebao/tu_je.png"}},{"type":"Image","props":{"y":15,"x":34,"skin":"dating_ui/yuebao/tu_lx.png"}},{"type":"Image","props":{"y":11,"x":474,"skin":"dating_ui/yuebao/tu_sj.png"}},{"type":"Image","props":{"y":11,"x":272,"skin":"dating_ui/yuebao/tu_ye.png"}},{"type":"Image","props":{"y":53,"x":6,"width":600,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Image","props":{"y":427,"x":26,"width":560,"skin":"dating_ui/tongyong/tu_di.png","height":3,"blendMode":"lighter"}},{"type":"Label","props":{"y":203,"x":189,"width":232,"var":"txt_jilu_no","text":"---老板，暂无记录哦---","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"List","props":{"y":59,"x":8,"width":596,"var":"list_jilu","spaceY":1,"repeatY":9,"height":372,"anchorY":0,"anchorX":0},"child":[{"type":"YuEBaoT","props":{"y":2,"x":0,"renderType":"render","runtime":"ui.nqp.dating.component.YuEBaoTUI"}}]}]},{"type":"Button","props":{"y":41,"x":840,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.dating.component.TextInputUI",ui.nqp.dating.component.TextInputUI);
			View.regComponent("ui.nqp.dating.component.YuEBaoTUI",ui.nqp.dating.component.YuEBaoTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.YuEBaoUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class YuEBao_BZUI extends View {
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"skewX":0,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":130,"x":640,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":130,"x":639,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":158,"x":947,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":217,"x":341,"width":594,"skin":"dating_ui/tongyong/tu_bj1.png","height":310}},{"type":"Image","props":{"y":244,"x":399,"skin":"dating_ui/yuebao/tu_ydt.png"}},{"type":"Image","props":{"y":172,"skin":"dating_ui/yuebao/tit_bz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":253,"x":441,"skin":"dating_ui/yuebao/tu_sy.png"}},{"type":"Image","props":{"y":342,"x":348,"skin":"dating_ui/yuebao/tu_lgl.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.YuEBao_BZUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class ZhuanPanUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public ani5:Laya.FrameAnimation;
		public ani6:Laya.FrameAnimation;
		public ani7:Laya.FrameAnimation;
		public ani10:Laya.FrameAnimation;
		public ani11:Laya.FrameAnimation;
		public ani12:Laya.FrameAnimation;
		public bojin:Laya.Box;
		public img_pan_di:Laya.Image;
		public btn_pan_name:Laya.Image;
		public zuanshipan:Laya.Box;
		public box_zs_border:Laya.Box;
		public box_zs_title:Laya.Box;
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
		public box_border_bojin:Laya.Box;
		public guanbi:Laya.Box;
		public box_info:Laya.Box;
		public box_info1:Laya.Box;
		public clip_num1:Laya.Clip;
		public lb_name1:Laya.Label;
		public lb_one_1:Laya.Label;
		public lb_one_2:Laya.Label;
		public lb_underline1:Laya.Label;
		public box_info2:Laya.Box;
		public clip_num2:Laya.Clip;
		public lb_name2:Laya.Label;
		public lb_two_1:Laya.Label;
		public lb_two_2:Laya.Label;
		public lb_underline2:Laya.Label;
		public lb_total:Laya.Label;
		public btn_help:Laya.Button;
		public lb_have:Laya.Label;
		public bojin_click:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":819,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.64},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":649,"x":640,"skin":"dating_ui/zhuanpan/tu_xyy.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":400,"x":968,"width":148,"var":"bojin","height":218,"anchorY":0.5,"anchorX":0},"compId":317,"child":[{"type":"Image","props":{"y":1,"x":36,"var":"img_pan_di","skin":"dating_ui/zhuanpan/tu_qh.png"}},{"type":"Image","props":{"y":34,"x":63,"var":"btn_pan_name","skin":"dating_ui/zhuanpan/tu_zuanshi01.png"}}]},{"type":"Box","props":{"y":400,"x":819,"width":1280,"var":"zuanshipan","scaleY":0.8,"scaleX":0.8,"height":720,"anchorY":0.5,"anchorX":0.64},"child":[{"type":"Image","props":{"skin":"dating_ui/zhuanpan/tu_zp3.png","centerY":0,"centerX":179,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":136,"x":478,"width":690,"var":"box_zs_border","height":512,"alpha":0},"child":[{"type":"Image","props":{"y":251,"x":576.5,"skin":"dating_ui/zhuanpan/tu_zp5.png","scaleX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":251,"x":108.5,"skin":"dating_ui/zhuanpan/tu_zp5.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":-144,"x":78,"width":513,"var":"box_zs_title","height":209},"child":[{"type":"Image","props":{"y":101,"x":264.5,"skin":"dating_ui/zhuanpan/tu_biaoti1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":376.5,"skin":"dating_ui/zhuanpan/tu_zuanshi.png","anchorY":0.5,"anchorX":0.5},"compId":463},{"type":"Image","props":{"y":102,"x":264.5,"skin":"dating_ui/zhuanpan/tu_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-26,"x":363,"skin":"dating_ui/zhuanpan/tu_ldd.png","alpha":0},"compId":504},{"type":"Image","props":{"y":102,"x":264,"skin":"dating_ui/zhuanpan/sgg10034.png","scaleY":0.9,"scaleX":0.9,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":503}]}]},{"type":"Box","props":{"y":351,"x":819,"width":520,"var":"box_run_zuanshi","rotation":0,"pivotY":263,"pivotX":259,"height":520,"centerY":-12,"centerX":180},"child":[{"type":"Image","props":{"y":265,"x":260,"width":519,"skin":"dating_ui/zhuanpan/tu_zsd.png","height":519,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":333,"var":"list_zuanshi","scaleY":0.97,"scaleX":0.97,"height":333,"centerY":82,"centerX":126},"child":[{"type":"ZhuanPanT","props":{"y":85,"name":"item0","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":45,"name":"item1","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":90,"name":"item2","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":135,"name":"item3","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":180,"name":"item4","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":225,"name":"item5","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":270,"name":"item6","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":315,"name":"item7","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}}]}]},{"type":"Image","props":{"var":"img_get_zs","skin":"dating_ui/zhuanpan/tu_pb1.png","centerY":-136,"centerX":183,"anchorY":0.5,"anchorX":0.5},"compId":445},{"type":"Box","props":{"y":348,"x":820,"width":177,"var":"btn_go_zuanshi","height":177,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":29,"x":89,"skin":"dating_ui/zhuanpan/tu_zpjt1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":89,"x":89,"width":177,"stateNum":1,"skin":"dating_ui/zhuanpan/btn_zp02.png","height":177,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":113,"x":76,"width":41,"var":"lb_zs_times","text":"1111","height":21,"fontSize":18,"color":"#c51a17","align":"center"}},{"type":"Image","props":{"y":79,"x":87,"skin":"dating_ui/zhuanpan/tu_go.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":502},{"type":"Image","props":{"y":122,"x":60,"skin":"dating_ui/zhuanpan/tu_kzcs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":79,"x":89,"skin":"dating_ui/zhuanpan/tu_go.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":122,"x":124,"skin":"dating_ui/zhuanpan/tu_ci.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":400,"x":640,"width":1280,"var":"bojinpan","height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"dating_ui/zhuanpan/tu_zp1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":360,"x":640,"width":633,"var":"box_run_bojin","height":633,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":317,"x":317,"skin":"dating_ui/zhuanpan/tu_zp4.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":235,"x":277,"width":333,"var":"list_bojin","scaleY":0.97,"scaleX":0.97,"height":333},"child":[{"type":"ZhuanPanT","props":{"y":85,"name":"item0","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":45,"name":"item1","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":90,"name":"item2","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":135,"name":"item3","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":180,"name":"item4","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":225,"name":"item5","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":270,"name":"item6","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}},{"type":"ZhuanPanT","props":{"y":85,"rotation":315,"name":"item7","centerX":-120,"runtime":"ui.nqp.dating.component.ZhuanPanTUI"}}]}]},{"type":"Image","props":{"y":483,"x":640,"var":"img_get_bojin","skin":"dating_ui/zhuanpan/tu_pb.png","centerY":-123,"centerX":0,"anchorY":1.5,"anchorX":0.5},"compId":437},{"type":"Box","props":{"y":360,"x":640,"width":211,"var":"btn_go_bojin","height":211,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":46,"x":106,"skin":"dating_ui/zhuanpan/tu_zpjt1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":106,"x":106,"width":211,"stateNum":1,"skin":"dating_ui/zhuanpan/btn_zp1.png","height":211,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":98,"x":109,"skin":"dating_ui/zhuanpan/tu_go.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":139,"x":78,"skin":"dating_ui/zhuanpan/tu_kzcs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":129,"x":93,"width":40,"var":"lb_bj_times","text":"0000","height":19,"fontSize":18,"color":"#c51a17","align":"center"}},{"type":"Image","props":{"y":98,"x":109,"skin":"dating_ui/zhuanpan/tu_go.png","scaleY":1.0550000000000002,"scaleX":1.0550000000000002,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.9333333333333333},"compId":499},{"type":"Image","props":{"y":139,"x":141,"skin":"dating_ui/zhuanpan/tu_ci.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":633,"scaleY":0.91,"scaleX":0.91,"rotation":0,"height":633,"centerY":1,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":176,"x":569,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":243,"x":593,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":460,"x":74,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":384,"x":40,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":563,"x":179,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":521,"x":119,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":599,"x":323,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":591,"x":247,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":560,"x":463,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":590,"x":403,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":458,"x":564,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":522,"x":513,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":318,"x":603,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":399,"x":593,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":173,"x":69,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":318,"x":33,"skin":"dating_ui/zhuanpan/tu_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":246,"x":40,"skin":"dating_ui/zhuanpan/tu_bld.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":176,"x":569,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":358},{"type":"Image","props":{"y":243,"x":593,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":359},{"type":"Image","props":{"y":460,"x":74,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":360},{"type":"Image","props":{"y":384,"x":40,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":361},{"type":"Image","props":{"y":563,"x":179,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":362},{"type":"Image","props":{"y":521,"x":119,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":363},{"type":"Image","props":{"y":599,"x":323,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":364},{"type":"Image","props":{"y":591,"x":247,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":365},{"type":"Image","props":{"y":560,"x":463,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":366},{"type":"Image","props":{"y":590,"x":403,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":367},{"type":"Image","props":{"y":458,"x":564,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":368},{"type":"Image","props":{"y":522,"x":513,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":369},{"type":"Image","props":{"y":318,"x":603,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":370},{"type":"Image","props":{"y":399,"x":593,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":371},{"type":"Image","props":{"y":173,"x":69,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":372},{"type":"Image","props":{"y":318,"x":33,"skin":"dating_ui/zhuanpan/tu_zs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.8},"compId":373},{"type":"Image","props":{"y":246,"x":40,"skin":"dating_ui/zhuanpan/tu_bld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":374}]},{"type":"Box","props":{"y":38,"x":374,"width":535,"var":"box_border_bojin","height":213},"child":[{"type":"Image","props":{"y":3045,"x":266,"skin":"dating_ui/zhuanpan/tu_biaoti.png","anchorY":16.5,"anchorX":0.5}},{"type":"Image","props":{"y":82,"x":266,"skin":"dating_ui/zhuanpan/tu_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":293,"skin":"dating_ui/zhuanpan/tu_taoxin.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":462},{"type":"Image","props":{"y":82,"x":266,"skin":"dating_ui/zhuanpan/sg10006.png","scaleY":0.9,"scaleX":0.9,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":500}]}]},{"type":"Box","props":{"y":81,"x":1030,"width":49,"var":"guanbi","height":49},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dating_ui/tongyong/btn_fh.png"}}]},{"type":"Box","props":{"y":601,"x":0,"width":1280,"var":"box_info","height":80},"child":[{"type":"Box","props":{"y":54,"x":948,"width":328,"var":"box_info1","height":38,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":331,"child":[{"type":"Clip","props":{"y":3,"x":303,"var":"clip_num1","skin":"dating_ui/zhuanpan/clip_jf1.png","clipX":11}},{"type":"Label","props":{"x":87,"var":"lb_name1","text":"「玩家名字...」","height":25,"fontSize":25,"color":"#0aff00","align":"left"}},{"type":"Label","props":{"y":0,"x":45,"width":51,"var":"lb_one_1","text":"恭喜","height":25,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":0,"x":247,"width":51,"var":"lb_one_2","text":"中奖","height":25,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":32,"x":36,"width":267,"var":"lb_underline1","underline":true,"strokeColor":"#0aff00","height":0.1,"color":"#0aff00","borderColor":"#0aff00"}}]},{"type":"Box","props":{"y":26,"x":948,"width":328,"var":"box_info2","height":38,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":327,"child":[{"type":"Clip","props":{"y":3,"x":303,"var":"clip_num2","skin":"dating_ui/zhuanpan/clip_jf1.png","clipX":11}},{"type":"Label","props":{"y":0,"x":87,"var":"lb_name2","text":"「玩家名字...」","height":25,"fontSize":25,"color":"#0aff00","align":"left"}},{"type":"Label","props":{"y":0,"x":44,"width":51,"var":"lb_two_1","text":"恭喜","height":25,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":0,"x":247,"width":51,"var":"lb_two_2","text":"中奖","height":25,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":32,"x":36,"width":267,"var":"lb_underline2","underline":true,"strokeColor":"#0aff00","height":0.1,"color":"#0aff00","borderColor":"#0aff00"}}]},{"type":"Box","props":{"y":34,"x":181},"child":[{"type":"Label","props":{"width":65,"text":"积分：","height":30,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Label","props":{"x":159,"width":65,"var":"lb_total","text":"/ 00000","height":30,"fontSize":25,"color":"#ffffff","bold":true}},{"type":"Button","props":{"y":15,"x":255,"var":"btn_help","stateNum":1,"skin":"dating_ui/tongyong/btn_wh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":1,"x":62,"var":"lb_have","text":"123456","fontSize":25,"color":"#ff0400","bold":true}}]}]},{"type":"Box","props":{"y":400,"x":982,"width":128,"var":"bojin_click","height":218,"anchorY":0.5,"anchorX":0}}]}],"animations":[{"nodes":[{"target":331,"keyframes":{"y":[{"value":54,"tweenMethod":"linearNone","tween":true,"target":331,"key":"y","index":0},{"value":54,"tweenMethod":"linearNone","tween":true,"target":331,"label":null,"key":"y","index":48},{"value":26,"tweenMethod":"linearNone","tween":true,"target":331,"key":"y","index":61},{"value":77,"tweenMethod":"linearNone","tween":true,"target":331,"key":"y","index":109},{"value":54,"tweenMethod":"linearNone","tween":true,"target":331,"key":"y","index":127}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":331,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":331,"label":null,"key":"alpha","index":48},{"value":0,"tweenMethod":"linearNone","tween":true,"target":331,"key":"alpha","index":61},{"value":0,"tweenMethod":"linearNone","tween":true,"target":331,"label":null,"key":"alpha","index":109},{"value":1,"tweenMethod":"linearNone","tween":true,"target":331,"key":"alpha","index":127}]}},{"target":327,"keyframes":{"y":[{"value":54,"tweenMethod":"linearNone","tween":true,"target":327,"key":"y","index":0},{"value":54,"tweenMethod":"linearNone","tween":true,"target":327,"label":null,"key":"y","index":32},{"value":83,"tweenMethod":"linearNone","tween":true,"target":327,"key":"y","index":33},{"value":76,"tweenMethod":"linearNone","tween":true,"target":327,"key":"y","index":51},{"value":54,"tweenMethod":"linearNone","tween":true,"target":327,"key":"y","index":61},{"value":54,"tweenMethod":"linearNone","tween":true,"target":327,"label":null,"key":"y","index":110},{"value":26,"tweenMethod":"linearNone","tween":true,"target":327,"label":null,"key":"y","index":123}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":327,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":327,"key":"alpha","index":51},{"value":1,"tweenMethod":"linearNone","tween":true,"target":327,"key":"alpha","index":61},{"value":1,"tweenMethod":"linearNone","tween":true,"target":327,"label":null,"key":"alpha","index":110},{"value":0,"tweenMethod":"linearNone","tween":true,"target":327,"label":null,"key":"alpha","index":123}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":358,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":358,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":358,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":358,"key":"alpha","index":20}]}},{"target":360,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":360,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":360,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":360,"key":"alpha","index":20}]}},{"target":362,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":362,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":362,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":362,"key":"alpha","index":20}]}},{"target":364,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":364,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":364,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":364,"key":"alpha","index":20}]}},{"target":366,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":366,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":366,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":366,"key":"alpha","index":20}]}},{"target":368,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":368,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":368,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":368,"key":"alpha","index":20}]}},{"target":370,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":370,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":370,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":370,"key":"alpha","index":20}]}},{"target":372,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":372,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":372,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":372,"key":"alpha","index":20}]}},{"target":373,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":373,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":373,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":373,"key":"alpha","index":20}]}},{"target":359,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":359,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":359,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":359,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":359,"key":"alpha","index":30}]}},{"target":361,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":361,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":361,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":361,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":361,"key":"alpha","index":30}]}},{"target":363,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":363,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":363,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":363,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":363,"key":"alpha","index":30}]}},{"target":365,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":365,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":365,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":365,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":365,"key":"alpha","index":30}]}},{"target":367,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":367,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":367,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":367,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":367,"key":"alpha","index":30}]}},{"target":369,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":369,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":369,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":369,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":369,"key":"alpha","index":30}]}},{"target":371,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":371,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":371,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":371,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":371,"key":"alpha","index":30}]}},{"target":374,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":374,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":374,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":374,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":374,"key":"alpha","index":30}]}},{"target":500,"keyframes":{"skin":[{"value":"dating_ui/zhuanpan/sg10000.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":0},{"value":"dating_ui/zhuanpan/sg10001.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":2},{"value":"dating_ui/zhuanpan/sg10002.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":4},{"value":"dating_ui/zhuanpan/sg10003.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":6},{"value":"dating_ui/zhuanpan/sg10004.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":8},{"value":"dating_ui/zhuanpan/sg10005.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":10},{"value":"dating_ui/zhuanpan/sg10006.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":12},{"value":"dating_ui/zhuanpan/sg10007.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":14},{"value":"dating_ui/zhuanpan/sg10008.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":16},{"value":"dating_ui/zhuanpan/sg10009.png","tweenMethod":"linearNone","tween":false,"target":500,"key":"skin","index":18}]}},{"target":462,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleY","index":3},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleY","index":7}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleX","index":3},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":462,"key":"scaleX","index":7}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":317,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleY","index":0},{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleY","index":2},{"value":1.02,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleY","index":5},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleY","index":9}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":0},{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":2},{"value":1.02,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":5},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":9},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":17}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":317,"key":"alpha","index":9}]}}],"name":"ani4","id":4,"frameRate":24,"action":0},{"nodes":[{"target":317,"keyframes":{"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":0},{"value":1.05,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"scaleX","index":6}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":317,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":317,"key":"alpha","index":2}]}}],"name":"ani5","id":5,"frameRate":24,"action":0},{"nodes":[{"target":499,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":499,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":499,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":499,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":499,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":499,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":499,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":499,"key":"alpha","index":25}]}}],"name":"ani6","id":6,"frameRate":24,"action":2},{"nodes":[{"target":503,"keyframes":{"skin":[{"value":"dating_ui/zhuanpan/sgg10000.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":0},{"value":"dating_ui/zhuanpan/sgg10001.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":2},{"value":"dating_ui/zhuanpan/sgg10002.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":4},{"value":"dating_ui/zhuanpan/sgg10003.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":6},{"value":"dating_ui/zhuanpan/sgg10004.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":8},{"value":"dating_ui/zhuanpan/sgg10005.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":10},{"value":"dating_ui/zhuanpan/sgg10006.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":12},{"value":"dating_ui/zhuanpan/sgg10007.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":14},{"value":"dating_ui/zhuanpan/sgg10008.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":16},{"value":"dating_ui/zhuanpan/sgg10009.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":18},{"value":"dating_ui/zhuanpan/sgg10010.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":20},{"value":"dating_ui/zhuanpan/sgg10011.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":22},{"value":"dating_ui/zhuanpan/sgg10012.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":24},{"value":"dating_ui/zhuanpan/sgg10013.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":26},{"value":"dating_ui/zhuanpan/sgg10014.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":28},{"value":"dating_ui/zhuanpan/sgg10015.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":30},{"value":"dating_ui/zhuanpan/sgg10016.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":32},{"value":"dating_ui/zhuanpan/sgg10017.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":34},{"value":"dating_ui/zhuanpan/sgg10018.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":36},{"value":"dating_ui/zhuanpan/sgg10019.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":38},{"value":"dating_ui/zhuanpan/sgg10020.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":40},{"value":"dating_ui/zhuanpan/sgg10021.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":42},{"value":"dating_ui/zhuanpan/sgg10022.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":44},{"value":"dating_ui/zhuanpan/sgg10023.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":46},{"value":"dating_ui/zhuanpan/sgg10024.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":48},{"value":"dating_ui/zhuanpan/sgg10025.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":50},{"value":"dating_ui/zhuanpan/sgg10026.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":52},{"value":"dating_ui/zhuanpan/sgg10027.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":54},{"value":"dating_ui/zhuanpan/sgg10028.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":56},{"value":"dating_ui/zhuanpan/sgg10029.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":58},{"value":"dating_ui/zhuanpan/sgg10030.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":60},{"value":"dating_ui/zhuanpan/sgg10031.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":62},{"value":"dating_ui/zhuanpan/sgg10032.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":64},{"value":"dating_ui/zhuanpan/sgg10033.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":66},{"value":"dating_ui/zhuanpan/sgg10034.png","tweenMethod":"linearNone","tween":false,"target":503,"key":"skin","index":68}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":503,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":503,"key":"alpha","index":68},{"value":0,"tweenMethod":"linearNone","tween":true,"target":503,"key":"alpha","index":69}]}},{"target":463,"keyframes":{"y":[{"value":35,"tweenMethod":"linearNone","tween":true,"target":463,"key":"y","index":0},{"value":24,"tweenMethod":"linearNone","tween":true,"target":463,"key":"y","index":40},{"value":35,"tweenMethod":"linearNone","tween":true,"target":463,"label":null,"key":"y","index":85}]}},{"target":504,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":504,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":504,"key":"alpha","index":35},{"value":1,"tweenMethod":"linearNone","tween":true,"target":504,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":504,"key":"alpha","index":54}]}}],"name":"ani7","id":7,"frameRate":24,"action":2},{"nodes":[{"target":437,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":437,"key":"alpha","index":7}]}}],"name":"ani10","id":10,"frameRate":24,"action":0},{"nodes":[{"target":445,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":445,"key":"alpha","index":7}]}}],"name":"ani11","id":11,"frameRate":24,"action":0},{"nodes":[{"target":502,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":502,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":502,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":502,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":502,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":502,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":502,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":502,"key":"alpha","index":25}]}}],"name":"ani12","id":12,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.ZhuanPanTUI",ui.nqp.dating.component.ZhuanPanTUI);

            super.createChildren();
            this.createView(ui.nqp.dating.ZhuanPanUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class ZhuanPan_bzUI extends View {
		public btn_close:Laya.Button;
		public txt_content:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":790,"height":510,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-24,"x":393,"width":395,"skin":"dating_ui/tongyong/tu_bk1.png","height":531}},{"type":"Image","props":{"y":-24,"x":394,"width":395,"skin":"dating_ui/tongyong/tu_bk1.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":42,"skin":"dating_ui/tongyong/tu_bkbt.png","centerX":-257,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":20,"x":754,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":131,"x":49,"width":690,"skin":"dating_ui/tongyong/tu_zjx.png","height":171}},{"type":"Image","props":{"y":73,"x":48,"width":690,"skin":"dating_ui/tongyong/tu_sjx.png"}},{"type":"Image","props":{"y":295,"x":394,"width":688,"skin":"dating_ui/tongyong/tu_di2.png","height":240,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":347,"x":81,"wordWrap":true,"width":595,"var":"txt_content","text":"1 .若今日未进行有效下注，则明日积分为    。 \\n2 .不同轮盘需要不同条件的积分抽奖 ,奖励也不同。\\n3 .积分每日 00:00 刷新，昨日未使用积分将会清零。","leading":6,"height":118,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":347,"x":521,"wordWrap":true,"width":19,"text":"0","leading":20,"height":25,"fontSize":24,"color":"#ff0400","bold":true}},{"type":"Image","props":{"y":234,"x":278,"skin":"dating_ui/zhuanpan/tu_yxxz.png"}},{"type":"Image","props":{"y":34,"skin":"dating_ui/zhuanpan/tit_bangzhu.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":180,"x":69,"skin":"dating_ui/zhuanpan/tu_bz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.ZhuanPan_bzUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class ZhuanPan_jlUI extends View {
		public btn_close:Laya.Button;
		public box_record:Laya.Box;
		public box_gr:Laya.Box;
		public list_gr:Laya.List;
		public box_no:Laya.Box;
		public box_self:Laya.Box;
		public txt_jifen:Laya.Label;
		public txt_mrjf:Laya.Label;
		public box_check:Laya.Box;
		public check_self:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":677,"height":482,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":334,"skin":"dating_ui/tongyong/tu_bk002.png","scaleX":-1}},{"type":"Image","props":{"y":19,"x":333,"skin":"dating_ui/tongyong/tu_bk002.png"}},{"type":"Button","props":{"y":47,"x":642,"var":"btn_close","stateNum":1,"skin":"dating_ui/tongyong/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":102,"x":23,"var":"box_record"},"child":[{"type":"Box","props":{"width":620,"var":"box_gr","height":323},"child":[{"type":"Image","props":{"y":0,"x":13,"width":594,"skin":"dating_ui/tongyong/tu_bj1.png","height":310}},{"type":"Image","props":{"y":48,"x":11,"width":600,"skin":"dating_ui/tongyong/tu_lbksc.png","sizeGrid":"50,150,50,150","scaleY":-1,"height":50}},{"type":"List","props":{"y":46,"x":3,"width":601,"var":"list_gr","spaceY":2,"renderType":"render","height":261},"child":[{"type":"ZhuanPanT2","props":{"y":22,"x":302,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.dating.component.ZhuanPanT2UI"}}]},{"type":"Image","props":{"y":-65,"skin":"dating_ui/zhuanpan/zhuanpan_jl.png","centerX":0}},{"type":"Image","props":{"y":25,"x":226,"skin":"dating_ui/zhuanpan/tu_hj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":330,"skin":"dating_ui/zhuanpan/tu_lplx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":24,"x":98,"skin":"dating_ui/zhuanpan/tu_yh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":27,"x":500,"skin":"dating_ui/zhuanpan/tu_hjsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":45,"x":11,"width":600,"skin":"dating_ui/tongyong/tu_dhdt4.png"}}]},{"type":"Box","props":{"y":-66,"x":1,"width":610,"var":"box_no","height":416},"child":[{"type":"Image","props":{"y":64,"x":14,"width":594,"skin":"dating_ui/tongyong/tu_bj1.png","sizeGrid":"0,200,0,200","height":310}},{"type":"Label","props":{"y":208,"x":102,"width":416,"text":"暂时没有获奖哦~好运迟早会眷顾您的","height":34,"fontSize":25,"color":"#ffffff"}}]},{"type":"Box","props":{"y":309,"x":13,"var":"box_self"},"child":[{"type":"Label","props":{"y":12,"x":130,"width":100,"text":"当前积分：","overflow":"hidden","height":22,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":12,"x":224,"width":95,"var":"txt_jifen","text":"99999999","overflow":"hidden","height":22,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":12,"x":336,"width":161,"text":"明日可转化积分：","overflow":"hidden","height":22,"fontSize":20,"color":"#ffd75c","align":"left"}},{"type":"Label","props":{"y":12,"x":494,"width":107,"var":"txt_mrjf","text":"9999999999","overflow":"hidden","height":22,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":8,"x":28,"width":95,"var":"box_check","height":27},"child":[{"type":"CheckBox","props":{"var":"check_self","stateNum":3,"skin":"dating_ui/zhuanpan/checkbox.png"}},{"type":"Label","props":{"y":4,"x":33,"width":62,"text":"仅自己","overflow":"hidden","height":22,"fontSize":18,"color":"#ffffff","bold":true,"align":"left"}}]}]}]},{"type":"Image","props":{"y":37,"x":226,"skin":"dating_ui/zhuanpan/zhuanpan_jl.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.component.ZhuanPanT2UI",ui.nqp.dating.component.ZhuanPanT2UI);

            super.createChildren();
            this.createView(ui.nqp.dating.ZhuanPan_jlUI.uiView);
        }
    }
}
