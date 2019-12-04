/**
* name 转盘帮助
*/
module gamedating.page {
	export class ZhuanPanHelpPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.ZhuanPan_bzUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "zhuanpan.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.ZhuanPan_bzUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			// this._viewUI.btn_bylp.on(LEvent.CLICK, this, this.onBtnClickWithTween);

		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {

			}
		}

		public close(): void {
			if (this._viewUI) {

			}
			super.close();
		}
	}


}