
module ui.qpapi.dating.component {
    export class Effect_anniuUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public dianwan:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":317,"height":80},"child":[{"type":"Box","props":{"y":0,"x":0,"width":317,"height":80},"child":[{"type":"Box","props":{"y":0,"x":0,"width":317,"var":"dianwan","height":80},"child":[{"type":"Clip","props":{"y":3,"var":"clip","skin":"dating_ui/dating/clip_di1.png","index":2,"clipY":3}},{"type":"Box","props":{"width":317,"height":80,"blendMode":"lighter","alpha":0},"compId":114,"child":[{"type":"Clip","props":{"y":3,"x":0,"skin":"dating_ui/dating/clip_di1.png","index":2,"clipY":3}},{"type":"Image","props":{"y":40,"x":31,"skin":"dating_ui/anniu/tu_sg.png","scaleY":1.3,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":119}]},{"type":"Box","props":{"width":317,"height":80,"blendMode":"lighter","alpha":0},"compId":115,"child":[{"type":"Clip","props":{"y":3,"x":0,"skin":"dating_ui/dating/clip_di1.png","index":2,"clipY":3}},{"type":"Image","props":{"y":39,"x":297,"skin":"dating_ui/anniu/tu_sg.png","scaleY":1.3,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":121}]},{"type":"Box","props":{"width":317,"height":80,"blendMode":"lighter","alpha":0},"compId":116,"child":[{"type":"Image","props":{"width":317,"skin":"dating_ui/anniu/tu_guang.png","height":75,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"skin":"dating_ui/dating/clip_di1.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Image","props":{"y":18,"x":158,"width":315,"skin":"dating_ui/anniu/10009.png","height":100,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":117},{"type":"Image","props":{"y":53,"x":161,"width":335,"var":"img1","skin":"dating_ui/anniu/tu_g.png","height":71,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":132},{"type":"Image","props":{"y":45,"x":158,"width":300,"var":"img2","skin":"dating_ui/anniu/ct10000.png","height":88,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":133}]}]}],"animations":[{"nodes":[{"target":119,"keyframes":{"x":[{"value":155,"tweenMethod":"linearNone","tween":true,"target":119,"key":"x","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"x","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":119,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"scaleX","index":10}]}},{"target":114,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":16}]}},{"target":121,"keyframes":{"x":[{"value":161,"tweenMethod":"linearNone","tween":true,"target":121,"key":"x","index":0},{"value":286,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"x","index":10}],"scaleX":[{"value":-1,"tweenMethod":"linearNone","tween":true,"target":121,"key":"scaleX","index":0},{"value":-1.5,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"scaleX","index":10}]}},{"target":115,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":16}]}},{"target":116,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":14}]}},{"target":117,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":0},{"value":"dating_ui/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"label":null,"key":"skin","index":6},{"value":"dating_ui/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":8},{"value":"dating_ui/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":10},{"value":"dating_ui/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":12},{"value":"dating_ui/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":14},{"value":"dating_ui/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":16},{"value":"dating_ui/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":18},{"value":"dating_ui/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":20},{"value":"dating_ui/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":22},{"value":"dating_ui/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":24},{"value":"dating_ui/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":26},{"value":"dating_ui/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":28},{"value":"dating_ui/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":30},{"value":"dating_ui/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":117,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":33}]}}],"name":"ani1","id":4,"frameRate":40,"action":0},{"nodes":[{"target":133,"keyframes":{"skin":[{"value":"dating_ui/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":0},{"value":"dating_ui/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":2},{"value":"dating_ui/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":4},{"value":"dating_ui/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":6},{"value":"dating_ui/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":8},{"value":"dating_ui/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":10},{"value":"dating_ui/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":12},{"value":"dating_ui/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":14},{"value":"dating_ui/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":16},{"value":"dating_ui/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":18},{"value":"dating_ui/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":20},{"value":"dating_ui/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":22},{"value":"dating_ui/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":24},{"value":"dating_ui/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":26},{"value":"dating_ui/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":28},{"value":"dating_ui/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":30},{"value":"dating_ui/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":32},{"value":"dating_ui/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":34},{"value":"dating_ui/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":36},{"value":"dating_ui/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":38},{"value":"dating_ui/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":40},{"value":"dating_ui/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":42},{"value":"dating_ui/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":44},{"value":"dating_ui/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":133,"key":"alpha","index":0}]}},{"target":132,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":46}]}}],"name":"ani2","id":9,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_anniuUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Effect_anniu1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public dianwan:Laya.Box;
		public clip:Laya.Clip;
		public img1:Laya.Image;
		public img2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":323,"height":80},"child":[{"type":"Box","props":{"y":0,"x":0,"width":323,"height":80},"child":[{"type":"Box","props":{"y":0,"x":0,"width":323,"var":"dianwan","height":80},"child":[{"type":"Clip","props":{"y":3,"x":0,"var":"clip","skin":"dating_ui/dating/clip_di2.png","index":2,"clipY":3}},{"type":"Box","props":{"width":323,"height":80,"blendMode":"lighter","alpha":0},"compId":114,"child":[{"type":"Clip","props":{"y":3,"x":0,"skin":"dating_ui/dating/clip_di2.png","index":2,"clipY":3}},{"type":"Image","props":{"y":40,"x":31,"skin":"dating_ui/anniu/tu_sg.png","scaleY":1.3,"scaleX":1.5,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":119}]},{"type":"Box","props":{"width":323,"height":80,"blendMode":"lighter","alpha":0},"compId":115,"child":[{"type":"Clip","props":{"y":3,"x":0,"skin":"dating_ui/dating/clip_di2.png","index":2,"clipY":3}},{"type":"Image","props":{"y":39,"x":297,"skin":"dating_ui/anniu/tu_sg.png","scaleY":1.3,"scaleX":-1,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":121}]},{"type":"Box","props":{"y":0,"x":0,"width":319,"height":80,"blendMode":"lighter","alpha":0},"compId":116,"child":[{"type":"Image","props":{"width":319,"skin":"dating_ui/anniu/tu_guang.png","height":75,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":3,"x":0,"skin":"dating_ui/dating/clip_di2.png","renderType":"mask","index":2,"clipY":3}}]},{"type":"Image","props":{"y":18,"x":162,"width":323,"skin":"dating_ui/anniu/10009.png","height":100,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":117},{"type":"Image","props":{"y":53,"x":161,"width":335,"var":"img1","skin":"dating_ui/anniu/tu_g.png","height":71,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":132},{"type":"Image","props":{"y":45,"x":161,"width":303,"var":"img2","skin":"dating_ui/anniu/ct10000.png","height":88,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":133}]}]}],"animations":[{"nodes":[{"target":119,"keyframes":{"x":[{"value":155,"tweenMethod":"linearNone","tween":true,"target":119,"key":"x","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"x","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":119,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":119,"label":null,"key":"scaleX","index":10}]}},{"target":114,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":114,"key":"alpha","index":16}]}},{"target":121,"keyframes":{"x":[{"value":161,"tweenMethod":"linearNone","tween":true,"target":121,"key":"x","index":0},{"value":286,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"x","index":10}],"scaleX":[{"value":-1,"tweenMethod":"linearNone","tween":true,"target":121,"key":"scaleX","index":0},{"value":-1.5,"tweenMethod":"linearNone","tween":true,"target":121,"label":null,"key":"scaleX","index":10}]}},{"target":115,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":115,"key":"alpha","index":16}]}},{"target":116,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":116,"key":"alpha","index":14}]}},{"target":117,"keyframes":{"skin":[{"value":"dating_ui/dating/effect/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":0},{"value":"dating_ui/anniu/10000.png","tweenMethod":"linearNone","tween":false,"target":117,"label":null,"key":"skin","index":6},{"value":"dating_ui/anniu/10001.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":8},{"value":"dating_ui/anniu/10002.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":10},{"value":"dating_ui/anniu/10003.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":12},{"value":"dating_ui/anniu/10004.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":14},{"value":"dating_ui/anniu/10005.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":16},{"value":"dating_ui/anniu/10006.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":18},{"value":"dating_ui/anniu/10007.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":20},{"value":"dating_ui/anniu/10008.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":22},{"value":"dating_ui/anniu/10009.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":24},{"value":"dating_ui/anniu/10010.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":26},{"value":"dating_ui/anniu/10011.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":28},{"value":"dating_ui/anniu/10012.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":30},{"value":"dating_ui/anniu/10013.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":117,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":33}]}}],"name":"ani1","id":4,"frameRate":40,"action":0},{"nodes":[{"target":133,"keyframes":{"skin":[{"value":"dating_ui/anniu/ct10000.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":0},{"value":"dating_ui/anniu/ct10001.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":2},{"value":"dating_ui/anniu/ct10002.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":4},{"value":"dating_ui/anniu/ct10003.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":6},{"value":"dating_ui/anniu/ct10004.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":8},{"value":"dating_ui/anniu/ct10005.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":10},{"value":"dating_ui/anniu/ct10006.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":12},{"value":"dating_ui/anniu/ct10007.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":14},{"value":"dating_ui/anniu/ct10008.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":16},{"value":"dating_ui/anniu/ct10009.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":18},{"value":"dating_ui/anniu/ct10010.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":20},{"value":"dating_ui/anniu/ct10011.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":22},{"value":"dating_ui/anniu/ct10012.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":24},{"value":"dating_ui/anniu/ct10013.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":26},{"value":"dating_ui/anniu/ct10014.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":28},{"value":"dating_ui/anniu/ct10015.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":30},{"value":"dating_ui/anniu/ct10016.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":32},{"value":"dating_ui/anniu/ct10017.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":34},{"value":"dating_ui/anniu/ct10018.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":36},{"value":"dating_ui/anniu/ct10019.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":38},{"value":"dating_ui/anniu/ct10020.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":40},{"value":"dating_ui/anniu/ct10021.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":42},{"value":"dating_ui/anniu/ct10022.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":44},{"value":"dating_ui/anniu/ct10023.png","tweenMethod":"linearNone","tween":false,"target":133,"key":"skin","index":46}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":133,"key":"alpha","index":0}]}},{"target":132,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":23},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":132,"key":"alpha","index":46}]}}],"name":"ani2","id":9,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_anniu1UI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Effect_dengdaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":66,"height":35},"child":[{"type":"Image","props":{"skin":"dating_ui/dating/tu_dengdai.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":16,"x":33,"width":15,"skin":"dating_ui/dating/tu_zheng.png","pivotY":10,"pivotX":5,"height":15},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_dengdaiUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Effect_gxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":80},"child":[{"type":"Image","props":{"skin":"dating_ui/gengxin/10000.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/gengxin/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/gengxin/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dating_ui/gengxin/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dating_ui/gengxin/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"dating_ui/gengxin/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"dating_ui/gengxin/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"dating_ui/gengxin/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"dating_ui/gengxin/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"dating_ui/gengxin/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"dating_ui/gengxin/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"dating_ui/gengxin/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":30},{"value":"dating_ui/gengxin/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":33}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_gxUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Effect_shuiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"y":60,"x":60,"skin":"dating_ui/gxz/10000.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"dating_ui/gxz/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"dating_ui/gxz/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"dating_ui/gxz/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"dating_ui/gxz/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"dating_ui/gxz/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"dating_ui/gxz/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"dating_ui/gxz/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"dating_ui/gxz/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":21},{"value":"dating_ui/gxz/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"dating_ui/gxz/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":27},{"value":"dating_ui/gxz/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":30},{"value":"dating_ui/gxz/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":33}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_shuiUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Effect_ztUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Box","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":100,"x":150,"var":"img_type","skin":"dating_ui/zt/tu_zrdz.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":147,"x":28,"skin":"dating_ui/zt/tu_g.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":2}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":147,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":120.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20},{"value":98,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":45}],"x":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":153.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":20},{"value":262,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Effect_ztUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class Hud_TUI extends View {
		public btn_box:Laya.Box;
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":255,"height":250},"child":[{"type":"Box","props":{"y":125,"x":128,"var":"btn_box","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img","skin":"dating_ui/dating/DZ_brniuniu.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.Hud_TUI.uiView);
        }
    }
}

module ui.qpapi.dating.component {
    export class LoadingTipTUI extends View {
		public box:Laya.Box;
		public img:Laya.Image;
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":68,"height":61},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"dating_ui/dating/tu_kuang.png"}},{"type":"Box","props":{"y":9,"x":8,"var":"box"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dating_ui/dating/tu_man.png","renderType":"mask"}},{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"dating_ui/dating/tu_man.png"}}]},{"type":"Label","props":{"y":16,"x":10,"width":45,"var":"txt","text":"0%","italic":true,"height":19,"fontSize":16,"color":"#7bff57","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.component.LoadingTipTUI.uiView);
        }
    }
}

module ui.qpapi.dating {
    export class DaTingUI extends View {
		public btn_right:Laya.Image;
		public btn_left:Laya.Image;
		public box_top:Laya.Box;
		public img_top:Laya.Image;
		public box_btn_top_left:Laya.Box;
		public img_name_bg:Laya.Image;
		public txt_id:Laya.Label;
		public btn_gren:Laya.Image;
		public btn_add:Laya.Box;
		public clip_money:Laya.Clip;
		public btn_back:Laya.Button;
		public btn_full:Laya.Button;
		public btn_set:Laya.Button;
		public list:Laya.List;
		public box_sk:Laya.Box;
		public eff_type:ui.qpapi.dating.component.Effect_ztUI;
		public box_item0:Laya.Box;
		public view0:ui.qpapi.dating.component.Effect_anniu1UI;
		public clip0:Laya.Clip;
		public box_item1:Laya.Box;
		public view1:ui.qpapi.dating.component.Effect_anniu1UI;
		public clip1:Laya.Clip;
		public box_item2:Laya.Box;
		public view2:ui.qpapi.dating.component.Effect_anniu1UI;
		public clip2:Laya.Clip;
		public box_item3:Laya.Box;
		public view3:ui.qpapi.dating.component.Effect_anniuUI;
		public clip3:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1280,"renderType":"render","height":720},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"dating_ui/dating/tu_bj.png","right":0,"left":0,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"btn_right","skin":"dating_ui/dating/tu_jt.png","scaleX":-1,"mouseEnabled":false,"left":262,"centerY":28,"anchorY":0.5}},{"type":"Image","props":{"var":"btn_left","skin":"dating_ui/dating/tu_jt.png","right":23,"mouseEnabled":false,"centerY":28,"anchorY":0.5}},{"type":"Box","props":{"y":0,"var":"box_top","right":-1,"left":-1,"height":97},"child":[{"type":"Image","props":{"y":-1,"var":"img_top","top":-1,"skin":"dating_ui/dating/tu_d1.png","right":-1,"left":-1,"height":102}},{"type":"Box","props":{"x":0,"width":711,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":1,"x":0,"skin":"dating_ui/dating/tu_1_1.png"}},{"type":"Image","props":{"y":24,"x":76,"var":"img_name_bg","skin":"dating_ui/dating/tu_k1ss.png"}},{"type":"Label","props":{"y":44,"x":203,"width":230,"var":"txt_id","valign":"middle","height":35,"fontSize":30,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Box","props":{"y":46,"x":75,"width":72,"height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":36,"x":36,"width":72,"var":"btn_gren","skin":"dating_ui/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":33,"x":36,"width":90,"skin":"dating_ui/touxiang/tu_txk0.png","height":90,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":12,"x":418,"width":350,"var":"btn_add","height":62},"child":[{"type":"Image","props":{"y":12.5,"x":42,"skin":"dating_ui/dating/tu_k1ss.png"}},{"type":"Clip","props":{"y":21.5,"x":86,"var":"clip_money","skin":"dating_ui/tongyong/clip_money1.png","index":0,"clipX":11}},{"type":"Image","props":{"y":26.5,"x":65,"skin":"dating_ui/tongyong/icon_money1.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":288,"top":0,"right":-1,"height":76},"child":[{"type":"Button","props":{"var":"btn_back","top":12,"stateNum":1,"skin":"dating_ui/dating/btn_fanhui.png","right":14,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_full","top":19,"stateNum":1,"skin":"dating_ui/dating/btn_quanping.png","right":201,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_set","top":16,"stateNum":1,"skin":"dating_ui/dating/btn_shez.png","right":110,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":19,"x":-284,"skin":"dating_ui/dating/tu_AE.png"}}]}]},{"type":"List","props":{"width":1193,"var":"list","spaceY":-13,"spaceX":-10,"repeatY":2,"left":265,"height":500,"centerY":35},"child":[{"type":"Hud_T","props":{"renderType":"render","runtime":"ui.qpapi.dating.component.Hud_TUI"}}]},{"type":"Box","props":{"width":300,"var":"box_sk","left":-2,"height":600,"centerY":16},"child":[{"type":"Effect_zt","props":{"y":349,"x":5,"var":"eff_type","runtime":"ui.qpapi.dating.component.Effect_ztUI"}}]},{"type":"Box","props":{"width":323,"var":"box_item0","height":80,"bottom":0},"child":[{"type":"Effect_anniu1","props":{"y":42,"x":161.5,"width":323,"var":"view0","anchorY":0.5,"anchorX":0.5,"runtime":"ui.qpapi.dating.component.Effect_anniu1UI"}},{"type":"Clip","props":{"var":"clip0","skin":"dating_ui/dating/clip_remen.png","index":2,"clipY":3,"centerY":5,"centerX":0}}]},{"type":"Box","props":{"x":321.5,"width":323,"var":"box_item1","height":80,"bottom":0},"child":[{"type":"Effect_anniu1","props":{"y":42,"x":161.5,"var":"view1","anchorY":0.5,"anchorX":0.5,"runtime":"ui.qpapi.dating.component.Effect_anniu1UI"}},{"type":"Clip","props":{"y":59,"x":68,"var":"clip1","skin":"dating_ui/dating/clip_qipai.png","index":0,"clipY":3,"centerY":5,"centerX":0}}]},{"type":"Box","props":{"x":643.5,"width":323,"var":"box_item2","height":80,"bottom":0},"child":[{"type":"Effect_anniu1","props":{"y":42,"x":161.5,"var":"view2","anchorY":0.5,"anchorX":0.5,"runtime":"ui.qpapi.dating.component.Effect_anniu1UI"}},{"type":"Clip","props":{"y":59,"x":68,"var":"clip2","skin":"dating_ui/dating/clip_bairen.png","index":1,"clipY":3,"centerY":5,"centerX":0}}]},{"type":"Box","props":{"x":966.5,"width":317,"var":"box_item3","height":80,"bottom":0},"child":[{"type":"Effect_anniu","props":{"y":42,"x":158.5,"var":"view3","anchorY":0.5,"anchorX":0.5,"runtime":"ui.qpapi.dating.component.Effect_anniuUI"}},{"type":"Clip","props":{"var":"clip3","skin":"dating_ui/dating/clip_dianwan.png","clipY":3,"centerY":5,"centerX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.qpapi.dating.component.Hud_TUI",ui.qpapi.dating.component.Hud_TUI);
			View.regComponent("ui.qpapi.dating.component.Effect_ztUI",ui.qpapi.dating.component.Effect_ztUI);
			View.regComponent("ui.qpapi.dating.component.Effect_anniu1UI",ui.qpapi.dating.component.Effect_anniu1UI);
			View.regComponent("ui.qpapi.dating.component.Effect_anniuUI",ui.qpapi.dating.component.Effect_anniuUI);

            super.createChildren();
            this.createView(ui.qpapi.dating.DaTingUI.uiView);
        }
    }
}

module ui.qpapi.dating {
    export class DaTingGgUI extends View {
		public box_notice:Laya.Box;
		public img_bg:Laya.Image;
		public panel:Laya.Box;
		public txt_label:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"y":130,"width":737,"var":"box_notice","height":45,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-3,"x":-9,"width":751,"var":"img_bg","skin":"dating_ui/datinggg/tu_ggg.png","sizeGrid":"0,50,0,50","height":45},"child":[{"type":"Image","props":{"y":5,"x":13,"skin":"dating_ui/datinggg/tu_laba.png"}}]},{"type":"Box","props":{"y":-4,"x":55,"width":673,"var":"panel","height":45},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":673,"height":45},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":false,"width":673,"var":"txt_label","valign":"middle","text":"推广员系统”劲爆来袭 ，一次推广永久受益，月入百万不是梦！","height":45,"fontSize":24,"color":"#ffffff"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.DaTingGgUI.uiView);
        }
    }
}
