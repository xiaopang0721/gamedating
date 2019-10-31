/**
* name 获得奖励
*/
module gamedating.page {
	export class RewardPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.HuoDeUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "huode.atlas",
				DatingPath.atlas_dating_ui + "vip.atlas",
			];

			this._isNeedBlack = true;
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.HuoDeUI");
			this.addChild(this._viewUI);
		}

		setData(data:any,skin?:string)
		{
			this._viewUI.txt_num.text = data + "金币";
			// this._viewUI.img.skin = skin || this._viewUI.img.skin;
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