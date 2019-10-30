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

		//是否推迟弹出界面开关
		private _isDelay: boolean = false;
		private onUpdateHongBao() {
			//断线重连不弹
			if (WebConfig.isConnected) return;
			//在游戏场景里不弹红包界面
			if (this._game.sceneGame.inScene) {
				this._isDelay = true;
				return;
			}
			if (!this._info.length) return;
			//如果红包界面已经打开了，就不需要再打开了
			if (this._game.uiRoot.general.getPage(DatingPageDef.PAGE_HONGBAO)) return;
			let info = this._info.shift();
			this._game.uiRoot.general.open(DatingPageDef.PAGE_HONGBAO, (page) => {
				page.dataSource = info;
				this._game.datingGame.flyGlodMgr.show(1, FlyGlodMgr.TYPE_FLY_HONGBAO, this._game.clientWidth, this._game.clientHeight);
			}, () => {
				if (this._info.length > 0) {
					Laya.timer.once(500, this, () => {
						this.onUpdateHongBao();
					})
				}
			});
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			Laya.timer.clearAll(this);
			this._info = [];
		}
	}
}