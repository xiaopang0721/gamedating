/**
* name 转盘
*/
module gamedating.page {
	const enum ZHUANPAN {
		TYPE_BOJIN = 0,	    //铂金盘
		TYPE_ZUANSHI = 1,  //钻石盘
	}
	export class ZhuanPanPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.ZhuanPanUI;
		private _zhongjiang: Array<ui.ajqp.dating.component.ZhuanPan_JiLuUI> = [];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "zhuanpan.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
				DatingPath.atlas_dating_ui_tongyong + "di.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedDuang = true;
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._delta = 3000;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.ZhuanPanUI");
			this.addChild(this._viewUI);
			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.autoHide = false;
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("dating.component.ZhuanPanT2UI", ZhuanPanT2);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler1);
			this._viewUI.list_record.dataSource = [];

			this.initList();
			this._viewUI.img_get_zs.alpha = 0;
			this._viewUI.img_get_bojin.alpha = 0;
			for (let i = 0; i < 4; i++) {
				this._zhongjiang[i] = this._viewUI["zhongjiang" + i];
			}
		}

		private initList(): void {
			this._viewUI.list_zuanshi.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_zuanshi.dataSource = [0, 0, 0, 0, 0, 0, 0, 0];
			this._viewUI.list_bojin.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_bojin.dataSource = [0, 0, 0, 0, 0, 0, 0, 0];
		}

		private renderHandler1(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource, index);
			}
		}
		private renderHandler(cell: ui.ajqp.dating.component.ZhuanPanTUI, index: number) {
			if (cell) {
				cell.txt_num.text = cell.dataSource.award_value;
				cell.img_reward.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", cell.dataSource.award_icon || "tu_05");
				cell.txt_num.visible = true;
				cell.img_reward.visible = true;
				cell.visible = cell.dataSource != 0;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.box_info.zOrder = 3;
			//获取昨天可用来转盘积分
			this._viewUI.btn_seemore.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.clip_bojin.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.clip_zuanshi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_go_zuanshi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_go_bojin.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateTunrPoint);
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

			this._game.network.call_get_turntablelist();
			this.getTurneConfig();
			this.updateTunrPoint();
			//当前显示的转盘
			if (this._zuanShiData && this._total_turn_point >= this._zuanShiData[0].turn_point) {
				this.clickChangePan(1);
			} else {
				this.clickChangePan(0);
			}
		}

		private getTurneConfig(): void {
			if (!this._turnConfig)
				this._turnConfig = { "1": [], "2": [] };
			for (let i = 1001; i < 1024; i++) {
				let curData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_TURNTABLECONFIG_C, i);
				if (!curData) continue;
				if (i <= 1012) {
					if (this._turnConfig["1"].indexOf(curData) != -1) continue;
					this._turnConfig["1"].push(curData);
				} else {
					if (this._turnConfig["2"].indexOf(curData) != -1) continue;
					this._turnConfig["2"].push(curData);
				}
			}
		}

		private updateTunrPoint() {
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			this._total_turn_point = mainPlayer.playerInfo.total_turn_point;
			this.updateBoJinPanUI();
			this.updateZuanShiPanUI();
			this.updateText();
		}

		private onOptHandler(optcode: number, msg: any): void {
			if (msg.type == Operation_Fields.OPRATE_GAME) {//游戏操作错误类型
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_SCORE_LUCKY_DRAW:             // 开始旋转
						this._isTurn = true;
						let curData = this._turnConfig[this._curSelectIndex];
						this._finalIndex = Number(msg.data) - 1;
						let getView = this._curSelectIndex == 2 ? this._viewUI.img_get_bojin : this._viewUI.img_get_zs;
						getView.alpha = 0;
						this.startTurn(this._curSelectIndex, this._finalIndex);
						this._game.playSound(Path.music_zhuanpan);
						break;
				}
			}
		}

		//铂金盘数据
		private _boJinData: any;
		private updateBoJinPanUI(): void {
			this._boJinData = this._turnConfig[1];
			let turn_point = this._boJinData[0].turn_point;
			//可转次数
			this._viewUI.lb_bj_times.text = (~~(this._total_turn_point / turn_point)).toString();
			// this._viewUI.lb_bj_times.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
			if (this._boJinData) {
				this._viewUI.list_bojin.dataSource = this._boJinData;
			}
		}

		//钻石盘数据
		private _zuanShiData: any;
		private updateZuanShiPanUI(): void {
			this._zuanShiData = this._turnConfig[2];
			//可转次数
			let turn_point = this._zuanShiData[0].turn_point;
			this._viewUI.lb_zs_times.text = (~~(this._total_turn_point / turn_point)).toString();
			// this._viewUI.lb_zs_times.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
			if (this._zuanShiData) {
				this._viewUI.list_zuanshi.dataSource = this._zuanShiData;
			}
		}

		private _curSelectIndex: number = 1;
		private _total_turn_point: number = 0;
		private _turnConfig: any;
		private _data: any;
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLELIST) {//积分抽奖获奖记录
				if (data && data.success == 0) {
					this._data = data;
					this.updateRecord();
					this.updateText();
				}
			}
		}

		private _selfData: any;
		private _allData: any;
		private updateRecord() {
			if (!this._data) return;
			this._selfData = this._data.msg && this._data.msg.self ? this._data.msg.self.list : [];
			//仅自己
			let curData: Array<any> = this._selfData;
			this._viewUI.list_record.dataSource = this._selfData;
			if (curData && curData.length > 0) {
				this._viewUI.img_norecord.visible = false;
				this._viewUI.list_record.visible = !this._viewUI.img_norecord.visible;
				this._viewUI.btn_seemore.visible = !this._viewUI.img_norecord.visible;
				this._viewUI.list_record.dataSource = curData;
			} else {
				this._viewUI.img_norecord.visible = true;
				this._viewUI.list_record.visible = !this._viewUI.img_norecord.visible;
				this._viewUI.btn_seemore.visible = !this._viewUI.img_norecord.visible;
			}
		}

		private _clipNum1: DatingClip;
		private _clipNum2: DatingClip;
		private updateText() {
			//积分显示
			this._viewUI.lb_have.text = this._total_turn_point.toString();
			if (this._turnConfig) {
				let curDatas = this._turnConfig[this._curSelectIndex];
				if (curDatas) {
					let turn_point = curDatas[0].turn_point;
					this._viewUI.lb_have.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
					this._viewUI.lb_total.text = StringU.substitute("/ {0}", curDatas[0] ? curDatas[0].turn_point : 0);
					this._viewUI.lb_total.x = this._viewUI.lb_have.x + this._viewUI.lb_have.width + 10;
				}
			}
			this.updateLunBo(true);
		}

		deltaUpdate() {
			this.updateLunBo(false);
		}

		private _posConfig: number[] = [-30, 0, 30, 60, 90];
		private _index: number = 0;
		private _curReward: any;
		private updateLunBo(isFirst: boolean): void {
			if (!this._data) return;
			let alldata: any = this._data.msg && this._data.msg.all ? this._data.msg.all.list : [];
			if (!alldata) return;
			if (!isFirst) {
				for (let i = 0; i < this._zhongjiang.length; i++) {
					Laya.Tween.to(this._zhongjiang[i], { y: this._posConfig[i + 1] }, 500);
				}
				if (this._index > alldata.length - 1) this._index = 0;
				this._curReward = alldata[this._index];
				this._index++;
				Laya.timer.once(500, this, () => {
					//把第一个元素取出放到数组最后，并改变位置
					this._zhongjiang.unshift(this._zhongjiang.pop());
					this._zhongjiang[0].y = this._posConfig[0];
					//给下一条数据赋值
					this._zhongjiang[0].txt_name.text = EnumToString.getLimitStr(this._curReward.account, 6);
					this._zhongjiang[0].txt_num.text = this._curReward.award_value;
				})
			} else {
				this._index = MathU.randomRange(0, alldata.length - 1);
				for (let i = 0; i < this._zhongjiang.length; i++) {
					if (this._index > alldata.length - 1) this._index = 0;
					this._curReward = alldata[this._index];
					this._index++;
					this._zhongjiang[i].txt_name.text = EnumToString.getLimitStr(this._curReward.account, 6);
					this._zhongjiang[i].txt_num.text = this._curReward.award_value;
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_seemore://查看更多记录
					if (this._viewUI.txt_seemore.text == "查看更多") {
						this._viewUI.txt_seemore.text = "点击收起"
						this._viewUI.btn_seemore.y = 310;
						this._viewUI.list_record.height = 220;
						this._viewUI.panel_zhongjiang.visible = false;
					} else {
						this._viewUI.txt_seemore.text = "查看更多"
						this._viewUI.btn_seemore.y = 210;
						this._viewUI.list_record.height = 120;
						this._viewUI.panel_zhongjiang.visible = true;
					}
					break;
				case this._viewUI.btn_go_zuanshi://钻石盘开始
					if (!this.judegeTurnCondition(this._zuanShiData)) return;
					this._viewUI.btn_go_zuanshi.disabled = true;
					this._game.network.call_score_lucky_draw(2);
					break;
				case this._viewUI.btn_go_bojin://铂金盘开始
					if (!this.judegeTurnCondition(this._boJinData)) return;
					this._viewUI.btn_go_bojin.disabled = true;
					this._game.network.call_score_lucky_draw(1);
					break;
				case this._viewUI.clip_bojin://点击铂金盘
					if (this._isTurn) return;
					this.clickChangePan(0);
					break
				case this._viewUI.clip_zuanshi://点击钻石盘
					if (this._isTurn) return;
					this.clickChangePan(1);
					break;
			}
		}

		private clickChangePan(type: number): void {
			if (type == ZHUANPAN.TYPE_BOJIN) {
				this._curSelectIndex = 1;
				this._viewUI.bojinpan.visible = true;
				this._viewUI.zuanshipan.visible = false;
				this._viewUI.img_bojin.visible = true;
				this._viewUI.clip_bojin.mouseEnabled = false;
				this._viewUI.clip_zuanshi.mouseEnabled = true;
				//待机特效
				this._viewUI.ani3.play(0, true);
				this._viewUI.ani4.gotoAndStop(0);
				//选中特效
				this._viewUI.ani7.play(0, true);
				this._viewUI.ani8.gotoAndStop(0);
			} else {
				this._curSelectIndex = 2;
				this._viewUI.zuanshipan.visible = true;
				this._viewUI.bojinpan.visible = false;
				this._viewUI.img_zuanshi.visible = true;
				this._viewUI.clip_bojin.mouseEnabled = true;
				this._viewUI.clip_zuanshi.mouseEnabled = false;
				//待机特效
				this._viewUI.ani4.play(0, true);
				this._viewUI.ani3.gotoAndStop(0);
				//选中特效
				this._viewUI.ani8.play(0, true);
				this._viewUI.ani7.gotoAndStop(0);
			}
		}

		private judegeTurnCondition(curData: any): boolean {
			if (!curData || curData.length <= 0) {
				return false;
			}
			if (curData[0].turn_point > this._total_turn_point) {
				this._game.showTips("积分暂时不够哦，赶紧游戏吧！");
				return false;
			}
			return true;
		}

		private _gridNum: number = 8;
		private _finalIndex: number;
		private _isTurn: boolean = false;
		private _viewRunBox: Box;
		private startTurn(type: number, index: number): void {
			let viewRunBox;
			let curData: any;
			let imgGet;
			let img_effect;
			switch (type) {
				case 1:
					this._viewRunBox = this._viewUI.box_run_bojin;
					curData = this._boJinData;
					imgGet = this._viewUI.img_get_bojin;
					this._viewUI.ani5.play(0, false);
					this._viewUI.ani3.gotoAndStop(0);
					this._viewUI.img_bojin.visible = false;
					break
				case 2:
					this._viewRunBox = this._viewUI.box_run_zuanshi;
					curData = this._zuanShiData;
					imgGet = this._viewUI.img_get_zs;
					this._viewUI.ani6.play(0, false);
					this._viewUI.ani4.gotoAndStop(0);
					this._viewUI.img_zuanshi.visible = false;
					break
			}
			imgGet.alpha = 0;
			//开始转
			let r = 4;
			this._curRotation = this._viewRunBox.rotation;
			//圈数
			this._rotation = this._curRotation + ((360 - this._curRotation) + (360 - (360 / this._gridNum * index)) + 360 * r);
			let time: number = r * 1750;
			// this._time = 3000;
			// this._curtime = 0;
			// Laya.timer.once(5000, this, () => {
			// 	this._curtime = 0;
			// 	this._time = 3001;
			// });
			//时间
			Laya.Tween.to(this._viewRunBox, { rotation: this._rotation }, time, Laya.Ease.circInOut, Handler.create(this, this.completeTurnAni))
		}

		//更新转盘角度
		private _time: number = 3000;
		private _curtime: number = 0;
		private _rotation: number = 0;
		private _curRotation: number = 0;
		// update(diff: number) {
		// 	super.update(diff);
		// 	if (!this._isTurn) return;
		// 	if (this._rotation <= 0) {
		// 		this.completeTurnAni();
		// 		return;
		// 	}
		// 	let v: number = 0;
		// 	let v_max: number = 16;
		// 	let p: number = this._curtime / this._time;
		// 	if (this._time == 3001) {
		// 		v = v_max * (1 - p * p);
		// 		if (v <= 1) v = 1;
		// 	} else {
		// 		v = v_max * p * p;
		// 		if (v >= v_max) v = v_max;
		// 	}
		// 	this._curtime += diff;
		// 	console.log("v", v)
		// 	console.log("this._curtime", this._curtime)
		// 	this._viewRunBox.rotation += v;
		// 	this._rotation -= v;
		// }

		private completeTurnAni(): void {
			let viewRunBox;
			let curData: any;
			let imgGet;
			let img_effect;
			switch (this._curSelectIndex) {
				case 1:
					viewRunBox = this._viewUI.box_run_bojin;
					curData = this._boJinData;
					imgGet = this._viewUI.img_get_bojin;
					img_effect = this._viewUI.ani1;
					break
				case 2:
					viewRunBox = this._viewUI.box_run_zuanshi;
					curData = this._zuanShiData;
					imgGet = this._viewUI.img_get_zs;
					img_effect = this._viewUI.ani2;
					break
			}
			this._isTurn = false;
			imgGet.alpha = 1;
			this._viewUI.btn_go_zuanshi.disabled = false;
			this._viewUI.btn_go_bojin.disabled = false;
			let data = curData[this._finalIndex];
			viewRunBox.rotation = viewRunBox.rotation % 360;
			img_effect.on(LEvent.COMPLETE, this, this.aniPlayOver, [img_effect, data]);
			img_effect.play(0, false);
			//发送协议重新获取数据
			this._game.network.call_get_turntablelist();
		}

		private aniPlayOver(img_effect, data) {
			img_effect.off(LEvent.COMPLETE, this, this.aniPlayOver);
			if (this._curSelectIndex == 1) {
				this._viewUI.img_bojin.visible = true;
				this._viewUI.ani3.play(0, true);
			} else {
				this._viewUI.img_zuanshi.visible = true;
				this._viewUI.ani4.play(0, true);
			}
			this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: RewardPage) => {
				let icon = data.award_icon;
				let skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", icon);
				page.setData(data.award_value, skin);
			})
		}
		public close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this._game.stopSound(Path.music_zhuanpan);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateTunrPoint);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			}
			super.close();
		}
	}

	class ZhuanPanT2 extends ui.ajqp.dating.component.ZhuanPanT2UI {
		private _game: Game;
		private _data: any;
		setData(game: Game, data: any, index: number) {
			this._game = game;
			this._data = data;
			this.txt_time.text = Sync.getTimeShortStr(data.turn_time * 1000);
			this.txt_type.text = (data.turn_name as string).substring(0, 2);
			this.txt_money.text = data.award_value;
		}
	}
}