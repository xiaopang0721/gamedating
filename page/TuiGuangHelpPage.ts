/**
* name 推广帮助
*/
module gamedating.page {
	export class TuiGuangHelpPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.TuiGuangHelpUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "tuiguang.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TuiGuangHelpUI");
			this.addChild(this._viewUI);
			
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this._viewUI.txt_more.visible = this.dataSource == TuiGuangPage.TYPE_QUANMIN_DAILI;
		}

		protected onBtnTweenEnd(e: any, target: any) {

		}

		public close(): void {

			if (this._viewUI) {

			}
			super.close();
		}
	}


}