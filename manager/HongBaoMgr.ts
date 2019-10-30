/**
* 红包管理器
*/
module gamedating.managers {
	export class HongBaoMgr extends gamecomponent.managers.BaseMgr {
		constructor(game: Game) {
			super(game)
		}

		private _info: any = [];
		setInfo(data) {
			let info = JSON.parse(data);
			if (!info || !info.length) return;
			this._info = this._info.concat(info);
			this.onUpdateHongBao();
		}

		private onUpdateHongBao() {
			if (!this._info.length) return;
			//必须在游戏以外才弹出红包界面
			if (this._game.sceneObjectMgr.story && this._game.sceneObjectMgr.mapinfo) return;
			let info = this._info[0];
			this._game.uiRoot.general.open(DatingPageDef.PAGE_HONGBAO, (page) => {
				page.dataSource = info;
			}, () => {
				this._info.shift();
				if(this._info.length){
					this.onUpdateHongBao();
				}
			});
			this._game.datingGame.flyGlodMgr.show(1, 0, this._game.clientWidth, this._game.clientHeight);
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)

			this._info = [];
		}
	}
}