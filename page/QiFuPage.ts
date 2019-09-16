/**
* name 
*/
module gametongyong.page {
	export class QiFuPage extends game.gui.base.Page {
		protected _viewUI: ui.nqp.dating.QiFuUI;
		private _boxQifuUI: Box[];
		private _txtMoneyUI: Label[];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.QiFuUI');
			this.addChild(this._viewUI);

			this._boxQifuUI = [];
			this._txtMoneyUI = [];
			for (let i = 0; i < 6; i++) {
				this._boxQifuUI[i] = this._viewUI["box_qifu" + i];
				this._boxQifuUI[i].on(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._txtMoneyUI[i] = this._viewUI["txt_money" + i];
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._game.qifuMgr.on(QiFuMgr.QIFU_CHANGE, this, this.onUpdateDataInfo);
			this._game.qifuMgr.getData();
			this.onUpdateDataInfo();
		}

		private _dataInfo: any[];
		private onUpdateDataInfo(date?: any) {
			this._dataInfo = [];
			let value = this._game.qifuMgr.getQiFuList();
			let count: number = 0;
			for (let i = 0; i < value.length; i++) {
				if (value[i]) {
					for (let key in value[i]) {
						count++;
					}
				}
			}
			if (!count) return;
			this._dataInfo = value;
			for (let i = 0; i < this._dataInfo.length; i++) {
				let type: string = value[i].qf_type == 1 ? "/天" : "/次";
				this._txtMoneyUI[i].text = value[i].qf_money + type;
			}
		}

		protected onMouseDown(e: LEvent) {
			return true;
		}

		private _nameInfo: string[] = ["洗手", "貔貅", "观世音", "关公", "财神", "土地公"];
		protected onBtnTweenEnd(e: any, target: any) {
			if (!this._game.qifuMgr.isCanQiFu) {
				this._game.uiRoot.topUnder.showTips("老板，当前不可以祈福哦~")
				return;
			}
			let idx = this._boxQifuUI.indexOf(target);
			let mainplayer = this._game.sceneObjectMgr.mainPlayer;
			if (!mainplayer) return;
			if (!this._dataInfo || !this._dataInfo.length) return;
			if (idx != -1) {
				let qftype: number = this._dataInfo[idx].qf_type;
				let qfid: number = this._dataInfo[idx].qf_id;
				let qfendTime: number = this._game.sceneObjectMgr.mainPlayer.GetQiFuEndTime(qfid - 1);
				let qfname: string = this._nameInfo[idx];
				if (mainplayer.playerInfo.money - this._game.qifuMgr.roomPay < this._dataInfo[idx].qf_money) {
					this._game.uiRoot.topUnder.showTips("老板，您的金币不够祈福哦~")
					return;
				}
				let curTime = this._game.sync.serverTimeBys;
				if (curTime < qfendTime) {
					this._game.uiRoot.topUnder.showTips(StringU.substitute("老板，距离下一次祈福还要{0}哦~", Sync.getTimeShortStr6(qfendTime - curTime)));
					return;
				}

				TongyongPageDef.ins.alertRecharge("老板，您是否确定要祈福？", () => {
					this._game.network.call_player_qifu_new(qftype, qfid, qfname);
					this.close();
				}, () => {
				}, true, TongyongPageDef.TIPS_SKIN_STR["qd"], TongyongPageDef.TIPS_SKIN_STR["title_qf"]);
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.qifuMgr.off(QiFuMgr.QIFU_CHANGE, this, this.onUpdateDataInfo);
				this._game.qifuMgr.clear();
			}
			super.close();
		}
	}

}