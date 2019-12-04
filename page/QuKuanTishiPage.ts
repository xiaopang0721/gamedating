/**
* 取款密码错误次数超过提示
*/
module gamedating.page {
	export class QuKuanTishiPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.QuKuan_tsUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qukuan.atlas",
			];
			this._isNeedBlack = true;
			this._delta = 1000;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.QuKuan_tsUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
			this._viewUI.txt_time.text = Sync.getTimeShortStr2((mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys));
		}
		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			super.close();
		}

		deltaUpdate() {
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
			let diffNum = mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys;
			if (diffNum > 0) {
				this._viewUI.txt_time.text = Sync.getTimeShortStr2(diffNum);
			} else {
				this.close();
			}
		}

		protected onMouseClick(e: LEvent) {
			this.close();
		}
	}
}