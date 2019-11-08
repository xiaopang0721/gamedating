/**
* 红包管理器
*/
module gamedating.managers {
	export class HongBaoMgr extends gamecomponent.managers.BaseMgr {
		constructor(game: Game) {
			super(game)
			this._delta = 500;
		}

		private _info: any = [];
		private _hongbao: any;
		setInfo(info) {
			if (!info) return;
			this._info = info;
			//按开始时间排序，越晚越靠后
			this._info.sort((a: any, b: any) => {
				return parseInt(a.start_time) < parseInt(b.start_time) ? -1 : 1;
			});
			if (this._hongbao) {
				for (let i = 0; i < this._info.length; i++) {
					//如果发下来的是已经弹出来的红包，但是还没领取，就剔除掉
					if (this._info[i].id == this._hongbao.id) {
						this._info.splice(i, 1);
						break;
					}
				}
			}
		}

		private _nextTime: number;
		deltaUpdate() {
			//如果还没到下个最近的红包开始时间
			if (this._game.sync.serverTimeBys < this._nextTime) return;
			this.onUpdateHongBao();
		}

		private onUpdateHongBao() {
			//断线重连不弹
			if (WebConfig.isConnected) return;
			//在游戏场景里不弹红包界面
			if (this._game.sceneGame.inScene) return;
			if (!this._info.length) return;
			//如果红包界面已经打开了，就不需要再打开了
			if (this._game.uiRoot.general.getPage(DatingPageDef.PAGE_HONGBAO)) return;
			let hongbao = this._info[0];
			//已经结束了啊喂！
			if (this._game.sync.serverTimeBys > hongbao.end_time) return;
			//开始时间还没到
			if (this._game.sync.serverTimeBys < hongbao.start_time) {
				this._nextTime = hongbao.start_time;//把下个时间存下来
				return;
			}
			this._hongbao = this._info.shift();
			this._game.uiRoot.general.open(DatingPageDef.PAGE_HONGBAO, (page) => {
				page.dataSource = this._hongbao;
				this._game.datingGame.flyGlodMgr.show(1, FlyGlodMgr.TYPE_FLY_HONGBAO, this._game.clientWidth, this._game.clientHeight);
			});
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			Laya.timer.clearAll(this);
			this._info = [];
		}
	}
}