/**
* name 
*/
module gamedatingnqp.page {
	export class TipGongGaoPage extends game.gui.base.Page {
		protected _viewUI: ui.nqp.dating.TipsGongGaoUI;
		private _story: gamecomponent.story.StoryNormalBase;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedDuang = false;
			// this._isNeedBlack = true;
			this._asset = [
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
			]
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('nqp.dating.TipsGongGaoUI');
			this.addChild(this._viewUI);
			this._viewUI.txt_label.text = "       为保证服务器的运行稳定和服务质量，所有服务器将于2019年6月28日上午8:00停机维护。预计维护时间为上午8:00至10:00，请各位玩家相互转告，并提前留意游戏时间，以免造成不必要的损失。对于维护期间给您带来的不便，敬请谅解，感谢所有玩家的支持和配合。"
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			if (window["___main_preload"] && typeof window["___main_preload"]["closeAll"] === 'function') {
				window["___main_preload"]["closeAll"]()
			}
			WebConfig.closeHelloImg();

			this._game.showLoadProgress();
		}

		public close(): void {
			if (this._viewUI) {

				super.close();
			}
		}
	}
}