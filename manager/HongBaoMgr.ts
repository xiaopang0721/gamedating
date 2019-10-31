/**
* 红包管理器
*/
module gamedating.managers {
	export class HongBaoMgr extends gamecomponent.managers.BaseMgr {
		constructor(game: Game) {
			super(game)
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_HONGBAO_DELAY_UPDATE, this, this.onUpdateHongBao);
			this._delta = 60000;
		}

		private _info: any = [];
		private _hongbao: any;
		setInfo(info) {
			if (!info) return;
			this._info = info;
			if (this._hongbao) {
				for (let i = 0; i < this._info.length; i++) {
					//如果发下来的是已经弹出来的红包，但是还没领取，就剔除掉
					if (this._info[i].id == this._hongbao.id) {
						this._info.splice(i, 1);
						break;
					}
				}
			}
			this.onUpdateHongBao();
		}

		//每十分钟检测一下吧，之前没开始的补弹出来
		deltaUpdate() {
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
			this._hongbao = this._info.shift();
			//开始时间还没到
			if (this._game.sync.serverTimeBys < this._hongbao.start_time) {
				this._info.length > 0 && this.onUpdateHongBao();
				this._info.push(this._hongbao);
				return;
			}
			this._game.uiRoot.general.open(DatingPageDef.PAGE_HONGBAO, (page) => {
				page.dataSource = this._hongbao;
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
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_HONGBAO_DELAY_UPDATE, this, this.onUpdateHongBao);
			Laya.timer.clearAll(this);
			this._info = [];
		}
	}
}