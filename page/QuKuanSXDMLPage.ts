/**
* name 
*/
module gamedatingnqp.page{
	export class QuKuanSXDMLPage extends game.gui.base.Page{
		private _viewUI: ui.nqp.dating.Qukuan_sxdmlUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qukuan.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.Qukuan_sxdmlUI");
			
			this.addChild(this._viewUI);

		}

		private _numbtns: Button[] = []
		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
            this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		public close(): void {
			if (this._viewUI) {
                this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			super.close();
		}

        protected onBtnTweenEnd(e: any, target: any) {
            this.close();
        }
	}

}