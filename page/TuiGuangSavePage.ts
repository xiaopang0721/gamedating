/**
* name 保存二维码
*/
module gamedating.page {
	export class TuiGuangSavePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.TuiGuangSaveUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "tuiguang.atlas",
				DatingPath.ui_dating + "tuiguang/tu_tg3.jpg",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TuiGuangSaveUI");
			this.addChild(this._viewUI);
			//官网二维码
			QRCodeSprite.createQRCodeBase64(WebConfig.downLoadUrl, this._viewUI.img_ewm.width, this._viewUI.img_ewm.height, Handler.create(this, (base64) => {
				this._viewUI.img_ewm.skin = base64;
			}))
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_save.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_save://保存图片
					this._game.datingGame.saveQrcodeImage();
					break;
			}
		}

		public close(): void {

			if (this._viewUI) {

			}
			super.close();
		}
	}


}