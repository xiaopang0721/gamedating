/**
* name 
*/
module gamedating.page {
	export class QiFuPage extends game.gui.base.Page {
		protected _viewUI: ui.nqp.dating.QiFuUI;
		private _boxQifuUI: Box[];
		private _txtMoneyUI: Label[];
		private _mainplayer: PlayerData;
		private _isHudDating: boolean = false;
		set isHudDating(value: boolean) {
			this._isHudDating = value;
		}
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
				DatingPath.atlas_dating_ui + "dating.atlas",
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
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this._mainplayer = this._game.sceneObjectMgr.mainPlayer;
		}

		private _curDiffTime: number;
		update(diff: number): void {
			super.update(diff);
			if (!this._curDiffTime || this._curDiffTime < 0) {
				for (let i = 0; i < this._dataInfo.length; i++) {
					let qfid: number = this._dataInfo[i].qf_id;
					let qf_type: number = this._dataInfo[i].qf_type;
					if (!this._mainplayer) return;
					let qfendTime: number = this._mainplayer.GetQiFuEndTime(qfid - 1);
					if (!qfendTime) {
						this._viewUI["box_time" + i].visible = false;
						continue;
					}
					let curTime = this._game.sync.serverTimeBys;
					let diffNum = qfendTime - curTime;
					let isShowTime = (diffNum > 0 && qf_type == 1) ? true : false;
					this._viewUI["box_time" + i].visible = isShowTime;
					if (isShowTime)
						this._viewUI["lb_time" + i].text = Sync.getTimeShortStr2(diffNum);
				}
				this._curDiffTime = 1000;
			} else {
				this._curDiffTime -= diff;
			}
		}

		protected onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_GAME) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
						let dataInfo = JSON.parse(msg.data);
						//打开祈福动画界面
						this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU_ANI, (page) => {
							page.dataSource = dataInfo;
						});
						this.close();
						break;
				}
			}
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
				let type: string = this._dataInfo[i].qf_type == 1 ? "/天" : "/次";
				this._txtMoneyUI[i].text = this._dataInfo[i].qf_money + type;
				this._viewUI["box_time" + i].visible = false;
			}
		}

		protected onMouseDown(e: LEvent) {
			return true;
		}

		private _nameInfo: string[] = ["洗手", "貔貅", "观世音", "关公", "财神", "土地公"];
		protected onBtnTweenEnd(e: any, target: any) {
			if (!this._isHudDating && !this._game.qifuMgr.isCanQiFu) {
				//仅在游戏中判断
				this._game.uiRoot.topUnder.showTips("老板，游戏中不可分心祈福哦~")
				return;
			}
			let idx = this._boxQifuUI.indexOf(target);
			if (!this._dataInfo || !this._dataInfo.length) return;
			if (idx != -1) {
				let qftype: number = this._dataInfo[idx].qf_type;
				let qfid: number = this._dataInfo[idx].qf_id;
				if (!this._mainplayer) return;
				let qfendTime: number = this._mainplayer.GetQiFuEndTime(qfid - 1);
				let qfname: string = this._nameInfo[idx];
				if (this._mainplayer.playerInfo.money - this._game.qifuMgr.roomPay < this._dataInfo[idx].qf_money) {
					this._game.uiRoot.topUnder.showTips("老板，您的金币不够祈福哦~")
					return;
				}
				let curTime = this._game.sync.serverTimeBys;
				//是否祈福过
				let strTip = "";
				let addStr = "";
				if (qfid == 1) {
					addStr = "洗";
				} else if (qfid == 2) {
					addStr = "摸";
				} else {
					addStr = "拜";
				}
				if (curTime < qfendTime && qftype == 1) {
					//祈福过
					let strTime = Sync.getTimeShortStr2(qfendTime - curTime);
					strTip = StringU.substitute("老板，当前效果还剩余<span color='{0}'>{1}</span>，诚心<span color='{2}'>{4}{3}</span>可能带来好运气哦~", TeaStyle.COLOR_RED, strTime, TeaStyle.COLOR_GREEN, qfname, addStr);
				} else {
					//没祈福过
					strTip = StringU.substitute("老板，诚心<span color='{0}'>{2}{1}</span>可能带来好运气哦~", TeaStyle.COLOR_GREEN, qfname, addStr);
				}
				this._game.alert(strTip, () => {
					this._game.network.call_player_qifu_new(qftype, qfid, qfname);
				}, () => {
				}, true, Tips.TIPS_SKIN_STR["wyqf"], null, Tips.TIPS_SKIN_STR["title_qf"]);

			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this._game.qifuMgr.off(QiFuMgr.QIFU_CHANGE, this, this.onUpdateDataInfo);
				this._game.qifuMgr.clear();
			}
			super.close();
		}
	}

}