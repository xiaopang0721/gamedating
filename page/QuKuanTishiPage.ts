/**
* 取款密码错误次数超过提示
*/
module gamedatingnqp.page {
	export class QuKuanTishiPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.QuKuan_tsUI;
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
			this._viewUI.txt_time.text = Sync.getTimeShortStr2((this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys));
		}
        public close(): void {	
            if (this._viewUI) {
                this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            }		
			super.close();
		}

        deltaUpdate() {
            this._viewUI.txt_time.text = Sync.getTimeShortStr2((this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys));
		}

		protected onMouseClick(e: LEvent) {
			this.close();
		}
	}
}