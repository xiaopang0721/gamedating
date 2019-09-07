/**
* name 
*/
module gamedatingnqp.page{
	export class YuEBaoHelpPage extends game.gui.base.Page{
		private _viewUI: ui.nqp.dating.YuEBao_BZUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.YuEBao_BZUI");
			
			this.addChild(this._viewUI);

		}

		private _numbtns: Button[] = []
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