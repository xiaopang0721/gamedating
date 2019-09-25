
module ui.qpqx.dating {
    export class DengLuUI extends View {
		public box_qita:Laya.Box;
		public btn_wx:Laya.Button;
		public btn_denglu:Laya.Button;
		public btn_youke:Laya.Box;
		public img_btn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"right":-1,"left":-1,"height":96,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":204,"right":0,"height":108,"centerY":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box_qita"},"child":[{"type":"Image","props":{"skin":"dating_ui/denglurk/tu_dldi.png"}},{"type":"Image","props":{"y":6,"x":44,"skin":"dating_ui/denglurk/tu_dlfs.png"}}]},{"type":"Button","props":{"y":64,"x":140,"var":"btn_wx","stateNum":1,"skin":"dating_ui/denglurk/btn_weixin.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":64,"x":53,"width":63,"var":"btn_denglu","stateNum":1,"skin":"dating_ui/denglurk/btn_shouji.png","height":64,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":-9,"width":329,"var":"btn_youke","height":120,"centerX":0},"child":[{"type":"Button","props":{"y":55,"x":162,"stateNum":1,"skin":"dating_ui/denglurk/btn_ksdl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":1,"var":"img_btn","skin":"dating_ui/denglurk/tu_kskai.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpqx.dating.DengLuUI.uiView);
        }
    }
}
