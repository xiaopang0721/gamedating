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
			this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
				page.dataSource = 3;//绑定手机类型
			})
			this.close();
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
		}

		public close(): void {
			if (this._viewUI) {

			}
			super.close();
		}
	}
}