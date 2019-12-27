/**
* name 提示
*/
module gamedating.page {
	export class XiMaRecordPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.XiMaJiLuUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + 'xima.atlas',
				DatingPath.atlas_dating_ui + 'tongyong/di.atlas',
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
				DatingPath.atlas_dating_ui + 'tongyong/anniu.atlas',
			];
			this._isNeedBlack = true;
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XiMaJiLuUI");
			this.addChild(this._viewUI);
		}

		protected onBtnTweenEnd(e: any, target: any) {

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
		}

		private renderHandler(cell: ui.ajqp.dating.component.XiMa_JiLuUI, index: number): void {

		}

		public close(): void {
			if (this._viewUI) {

			}
			super.close();
		}
	}
}