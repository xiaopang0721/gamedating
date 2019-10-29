/**
* 红包管理器
*/
module gamedating.managers {
	export class HongBaoMgr extends gamecomponent.managers.BaseMgr {
		constructor(game: Game) {
			super(game)
		}

		private _info: any = [];
		setInfo(msg) {
			this._info = this._info.concat(msg);
			this.onUpdateHongBao();
		}

		private onUpdateHongBao() {
			//必须在游戏以外才弹出红包界面
			if (this._game.sceneGame) return;
			let info = this._info[0];
			this._game.uiRoot.general.open(DatingPageDef.PAGE_HONGBAO, (page) => {
				page.dataSource = info;
			}, () => {
				this._info.shift();
			});
			this._game.datingGame.flyGlodMgr.show(1, 1, this._game.clientWidth, this._game.clientHeight);
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			this._info = [];
		}
	}
}