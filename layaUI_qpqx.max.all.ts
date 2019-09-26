
module ui.qpqx.dating {
    export class DengLuUI extends View {
		public btn_wx:Laya.Button;
		public btn_denglu:Laya.Button;
		public btn_youke:Laya.Box;
		public img_btn:Laya.Image;
		public box_qita:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"right":-1,"left":-1,"height":96,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":48.5,"var":"btn_wx","stateNum":1,"skin":"dating_ui/denglurk/btn_weixin.png","centerX":450,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":48.5,"var":"btn_denglu","stateNum":1,"skin":"dating_ui/denglurk/btn_shouji.png","centerX":280,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":50,"x":642,"var":"btn_youke","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"width":284,"stateNum":1,"skin":"dating_ui/denglurk/btn_1canh.png","height":87,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"img_btn","skin":"dating_ui/denglurk/tu_ksks.png","centerY":-8,"centerX":-1,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":-12,"x":1138,"var":"box_qita"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpqx.dating.DengLuUI.uiView);
        }
    }
}
