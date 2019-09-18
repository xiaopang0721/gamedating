/**
* name 
*/
module gamedating.page {
	export class QiFuPlayAniPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.QiFuSuccessUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.QiFuSuccessUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		private _index: number;
		private _nameInfo: string[] = ["洗洗手", "拜貔貅", "拜观世音", "拜关公", "拜财神", "拜土地公"];
		protected onOpen(): void {
			super.onOpen();
			this._index = this.dataSource.qf_id - 1;
			for (let i = 0; i < 6; i++) {
				this._viewUI["img" + i].visible = false;
			}
			this._viewUI["img" + this._index].visible = true;
			this._viewUI["ani" + this._index].play(0, true);
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._viewUI.lb_name.text = playerInfo.nickname;
			this._viewUI.lb_info.text = this._nameInfo[this._index];
			this._viewUI.lb_name.x = this._viewUI.lb_1.x + this._viewUI.lb_1.width;
			this._viewUI.lb_2.x = this._viewUI.lb_name.x + this._viewUI.lb_name.width;
			this._viewUI.lb_info.x = this._viewUI.lb_2.x + this._viewUI.lb_2.width;
			this._viewUI.lb_3.x = this._viewUI.lb_info.x + this._viewUI.lb_info.width;
			Laya.timer.once(2500, this, this.closeWithTween,[new Sprite()]);
		}

		public close(): void {
			if (this._viewUI) {
				this.timer.clearAll(this);
			}
			//显示动画
			this._game.qifuMgr.event(QiFuMgr.QIFU_FLY,this.dataSource);
			super.close();
		}
	}
}