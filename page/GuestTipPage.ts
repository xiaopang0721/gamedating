/**
* name 提示
*/
module gamedatingnqp.page {
	export class GuestTipPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.DengLuYKUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
				DatingPath.atlas_dating_ui + 'denglu.atlas',
				DatingPath.atlas_dating_ui + 'shezhi.atlas',
			];
			this._isNeedBlack = true;
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.DengLuYKUI");
			this.addChild(this._viewUI);
			this._viewUI.btn_sj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.txt_sj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
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