
module ui.qpae.dating.component {
    export class Effect_dengdaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":67,"height":58},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/tu_dengdai.png"}},{"type":"Image","props":{"y":25,"x":33,"width":15,"skin":"dating_ui/dating/tu_zheng.png","pivotY":10,"pivotX":5,"height":15},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpae.dating.component.Effect_dengdaiUI.uiView);
        }
    }
}

module ui.qpae.dating.component {
    export class Hud_TUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":287,"height":232},"child":[{"type":"Box","props":{"y":116,"x":143,"width":287,"var":"btn_box","height":232,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-20,"x":-20,"width":350,"var":"img","skin":"dating_ui/dating/DZ_baijiale.png","height":310}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpae.dating.component.Hud_TUI.uiView);
        }
    }
}

module ui.qpae.dating.component {
    export class LoadingTipTUI extends View {
		public box:Laya.Box;
		public img:Laya.Image;
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":68,"height":61},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"dating_ui/dating/tu_kuang.png"}},{"type":"Box","props":{"y":9,"x":8,"var":"box"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/dating/tu_man.png","renderType":"mask"}},{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"dating_ui/dating/tu_man.png"}}]},{"type":"Label","props":{"y":16,"x":10,"width":45,"var":"txt","text":"0%","italic":true,"height":19,"fontSize":16,"color":"#7bff57","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpae.dating.component.LoadingTipTUI.uiView);
        }
    }
}

module ui.qpae.dating {
    export class DaTingUI extends View {
		public box_top:Laya.Box;
		public img_top:Laya.Image;
		public box_btn_top_left:Laya.Box;
		public img_name_bg:Laya.Image;
		public btn_gren:Laya.Image;
		public txt_id:Laya.Label;
		public btn_add:Laya.Box;
		public clip_money:Laya.Clip;
		public img_bg:Laya.Image;
		public list:Laya.List;
		public btn_left:Laya.Image;
		public btn_right:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"renderType":"render","height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":361,"top":-1,"skin":"dating_ui/dating/tu_bj.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"var":"box_top","right":-1,"left":-1,"height":102},"child":[{"type":"Image","props":{"y":-1,"width":1559,"var":"img_top","top":-1,"skin":"dating_ui/dating/tu_d1.png","left":-1,"height":102}},{"type":"Box","props":{"y":-1,"x":0,"width":653,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":24,"x":86,"width":270,"var":"img_name_bg","skin":"dating_ui/tongyong/tu_k1ss.png","height":37}},{"type":"Image","props":{"y":46,"x":49,"width":72,"var":"btn_gren","skin":"dating_ui/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":44,"x":210,"width":230,"var":"txt_id","valign":"middle","height":35,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Box","props":{"y":12,"x":418,"width":350,"var":"btn_add","height":62},"child":[{"type":"Image","props":{"y":12.5,"x":28,"skin":"dating_ui/tongyong/tu_k1ss.png"}},{"type":"Clip","props":{"y":17.5,"x":69,"var":"clip_money","skin":"dating_ui/tongyong/clip_money1.png","index":0,"clipX":11}},{"type":"Image","props":{"y":31.5,"x":41,"skin":"dating_ui/tongyong/icon_money1.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Image","props":{"y":44,"x":48,"skin":"dating_ui/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":139,"var":"img_bg","skin":"dating_ui/dating/tu_wbeijing.png","right":-1,"left":-1,"height":530},"child":[{"type":"List","props":{"x":51,"var":"list","spaceY":20,"spaceX":10,"right":50,"repeatY":2,"left":50,"height":500,"centerY":0},"child":[{"type":"Hud_T","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.qpae.dating.component.Hud_TUI"}}]}]},{"type":"Image","props":{"var":"btn_left","skin":"dating_ui/dating/tu_jt.png","left":10,"centerY":40,"anchorY":0.5}},{"type":"Image","props":{"var":"btn_right","skin":"dating_ui/dating/tu_jt.png","scaleX":-1,"right":74,"centerY":40,"anchorY":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.qpae.dating.component.Hud_TUI",ui.qpae.dating.component.Hud_TUI);

            super.createChildren();
            this.createView(ui.qpae.dating.DaTingUI.uiView);
        }
    }
}

module ui.qpae.dating {
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
            this.createView(ui.qpae.dating.DaTingGgUI.uiView);
        }
    }
}
