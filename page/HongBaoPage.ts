/**
* 红包
*/
module gamedating.page {
	export class HongBaoPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.HongbaoUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "hongbao.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.HongbaoUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.box_yichai.visible = false;
			this._viewUI.btn_chai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_get.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._viewUI.ani2.on(LEvent.COMPLETE, this, this.onAfterChai);
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_chai:
					this._viewUI.ani1
					break;
				case this._viewUI.btn_get:

					break;

			}
		}

		private onAfterChai() {
			this._viewUI.ani3.play(0, true);
		}

		// 清理下页面
		close(): void {
			if (this._viewUI) {
				this._viewUI.ani2.on(LEvent.COMPLETE, this, this.onAfterChai);
			}

			super.close();
		}
	}
}