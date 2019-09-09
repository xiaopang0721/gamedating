/**
* name 公告打开界面
*/
module gamedating.page {
	export class GongGaoOpenPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.XinXi3UI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "xinxi.atlas",
			];

			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XinXi3UI");
			this.addChild(this._viewUI);
			this._viewUI.panel_tu.visible = false;
			this._viewUI.panel_wenzi.visible = false;
			this._viewUI.panel_wenzitu.visible = false;
			this._viewUI.panel_tu.vScrollBarSkin = "";
			this._viewUI.panel_wenzi.vScrollBarSkin = "";
			this._viewUI.panel_wenzitu.vScrollBarSkin = "";
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.lab_wenzi.on(LEvent.LINK, this, this.onLinkHandle);
			this._viewUI.lab_wenzitu.on(LEvent.LINK, this, this.onLinkHandle);
		}

		private _data: any;
		setData(data: any) {
			this._data = data;
			this._viewUI.panel_wenzi.visible = this._data.b_type == 1;
			this._viewUI.panel_tu.visible = this._data.b_type == 2;
			this._viewUI.panel_wenzitu.visible = !this._viewUI.panel_wenzi.visible && !this._viewUI.panel_tu.visible;
			if (this._data.b_type == 1) {//纯文字
				TextFieldU.setHtmlText(this._viewUI.lab_wenzi, data.context);
				this._viewUI.lab_wenzi.height = this._viewUI.lab_wenzi.textField.textHeight;
			} if (this._data.b_type == 2) {//纯图片
				this._viewUI.img_tu.skin = this._data.img_url;
			} else {//图片+文字
				this._viewUI.img_wenzitu.skin = this._data.img_url;
				TextFieldU.setHtmlText(this._viewUI.lab_wenzitu, data.context);
				this._viewUI.lab_wenzitu.height = this._viewUI.lab_wenzitu.textField.textHeight;
			}
		}

		private onLinkHandle(data: string) {
			WebConfig.openUrl(data);
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.lab_wenzi.off(LEvent.LINK, this, this.onLinkHandle);
				this._viewUI.lab_wenzitu.off(LEvent.LINK, this, this.onLinkHandle);
			}
			super.close();
		}
	}


}