/**
* name 修改头像
*/
module gamedating.page {
	export class HeadChangePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.TouXiangUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "geren.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
			this._isNeedDuang = true;
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TouXiangUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			//检测是否有祈福头像
			for (let i = 0; i < 6; i++) {
				let qfEndTime = this._game.sceneObjectMgr.mainPlayer.GetQiFuEndTime(i);
				if (qfEndTime && qfEndTime > this._game.sync.serverTimeBys) {
					this._headData.push(i + 16);
				}
			}
			this._viewUI.list.vScrollBarSkin = "";
			this._viewUI.list.itemRender = HeadItemRender;
			this._viewUI.list.spaceY = 0;
			this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.tab.selectHandler = new Handler(this, this.tabselectHandler);
			this._viewUI.tab.selectedIndex = this._selectIndex = 0;
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateInfo);
		}

		//16-21是祈福用的专属头像 建议不要修改！
		private _headData: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		private _headKuangData: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		private onUpdateInfo() {
			this.tabselectHandler(this._selectIndex);
		}

		private _selectIndex: number;
		private tabselectHandler(index: number) {
			this._selectIndex = index;
			let data = this._selectIndex == 0 ? this._headData : this._headKuangData;
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			data.sort((a, b) => {
				//免费
				let v1 = a > 11 || a == 0 ? (a + 1) * 10000 : 0;
				let v2 = b > 11 || b == 0 ? (b + 1) * 10000 : 0;
				//首充
				v1 += a == 11 ? (a + 1) * 100 : 0;
				v2 += b == 11 ? (b + 1) * 100 : 0;
				//vip
				v1 += a >= 1 && a <= 10 ? a - 5 : a;
				v2 += b >= 1 && b <= 10 ? b - 3 : b;
				//已获得
				if (a == 11 && playerInfo.is_get_fitst_pay // 首充已获得
					|| a >= 1 && a <= 10 && mainPlayer.GetVipAwardReceived(a - 1) // vip已获得
					|| (a > 11 || a == 0) // 免费已获得
					|| (a >= 16 && a <= 21)  //祈福头像
				) {
					v1 += 1000000;
				}
				if (b == 11 && playerInfo.is_get_fitst_pay // 首充已获得
					|| b >= 1 && b <= 10 && mainPlayer.GetVipAwardReceived(b - 1) // vip已获得
					|| (b > 11 || b == 0)// 免费已获得
					|| (b >= 16 && b <= 21)  //祈福头像
				) {
					v2 += 1000000;
				}
				return v2 - v1;
			});
			this._viewUI.list.dataSource = data;
		}

		private renderHandler(cell: HeadItemRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource, index, this._viewUI, this._viewUI.tab.selectedIndex);
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {

		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateInfo);
			}
			super.close();
		}
	}

	class HeadItemRender extends ui.nqp.dating.component.HeadRenderTUI {
		private _game: Game;
		private _data: string;
		private _index: number;
		private _selectIndex: number;
		private _viewUI: ui.nqp.dating.TouXiangUI;
		private _mainPlayer: PlayerData;
		setData(game: Game, data: any, index: number, view: ui.nqp.dating.TouXiangUI, selectedIndex: number) {
			this._game = game;
			this._data = data;
			this._index = index;
			this._viewUI = view;
			this._selectIndex = selectedIndex;
			this._mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!this._mainPlayer) return;
			this.txt_time.visible = false;
			let playerInfo = this._mainPlayer.playerInfo;
			let skin;
			let headInfo;
			let txtTime: number;
			// let qfType: number = this._mainPlayer.playerInfo.qifu_type;
			if (this._selectIndex == 0) {
				if (data >= 16 && data <= 21) {
					//祈福头像
					skin = DatingPath.ui_dating + "touxiang/tu_tx" + this._game.datingGame.qifuNameStr[data - 16] + ".png";
					this.txt_time.visible = true;
					this.txt_time.text = this.getQiFuEndTimeStr(data - 16);
					Laya.timer.loop(1000, this, this.update, [data - 16]);
				} else {
					skin = DatingPath.ui_dating + "touxiang/tu_tx" + data + ".png";
				}
				headInfo = playerInfo.headimg.split('.');
				headInfo = headInfo[headInfo.length - 1];
			} else {
				skin = DatingPath.ui_dating + "touxiang/tu_txk" + data + ".png";
				headInfo = playerInfo.headKuang;
				this.img_jb.visible = false;
			}
			this.img_head.skin = skin;
			if (this._index >= 16 && this._index <= 21 && this._mainPlayer.GetQiFuEndTime(this._index - 16) > this._game.sync.serverTimeBys) {
				//祈福判断
				if (this._index == parseInt(headInfo)) {
					this.img_select.visible = true;
				} else {
					this.img_select.visible = false;
				}
			} else {
				if (headInfo == data.toString()) {
					this.img_select.visible = true;
				} else {
					this.img_select.visible = false;
				};
			}
			let isGet: boolean = this.judgeGet(Number(this._data));
			if (!isGet) {
				this.img_suo.visible = true;
			} else {
				this.img_suo.visible = false;
			}
			this.on(LEvent.CLICK, this, this.onBtnClick, [this._data]);
		}

		getQiFuEndTimeStr(endTimeIndex): string {
			if (endTimeIndex || endTimeIndex == 0) {
				let qfendTime = this._mainPlayer.GetQiFuEndTime(endTimeIndex);
				let curTime = this._game.sync.serverTimeBys;
				let diffNum = qfendTime - curTime;
				return Sync.getTimeShortStr2(diffNum);
			} else {
				return "";
			}
		}

		update(endTimeIndex: number): void {
			this.txt_time.text = this.getQiFuEndTimeStr(endTimeIndex);
		}

		private judgeGet(dataIndex: number): boolean {
			let isGet: boolean = false;
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			this.img_jb.visible = false;
			if (dataIndex == 11) {
				//首充获得的
				isGet = playerInfo.is_get_fitst_pay;
				this.img_jb.visible = this._selectIndex == 1 ? false : true;
				this.img_jb.skin = DatingPath.ui_dating + "touxiang/tu_shou.png"
			} else if (dataIndex > 10) {
				//免费头像
				return true;
			} else if (dataIndex == 0) {
				//默认头像
				return true;
			}
			else {
				//是否获得
				//vip获得的头像 
				isGet = mainPlayer.GetVipAwardReceived(dataIndex - 1);
				this.img_jb.visible = this._selectIndex == 1 ? false : true;
				this.img_jb.skin = StringU.substitute(DatingPath.ui_dating + "touxiang/tu_jb{0}.png", dataIndex);
			}
			return isGet;
		}

		private onBtnClick(index: number): void {
			if (!this.judgeGet(index)) {
				if (index == 11) {
					this._game.showTips("前往首充，即可解锁");
					this._game.uiRoot.general.open(DatingPageDef.PAGE_FIRST_RECHARGE);
				} else if (index >= 1 && index <= 10) {
					this._game.showTips(StringU.substitute("需达到VIP {0}等级解锁，充值可提高VIP等级", index));
				}
				return;
			}
			//0表示头像 1表示头像框
			let d = this._data;
			if (this._viewUI.tab.selectedIndex == 0) {
				// 为了让玩家可以选择祈福头像，并且祈福时间到期后还可以回去原来的头像，做了特殊处理
				let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
				if (!mainPlayer) return;
				let headimgs = mainPlayer.playerInfo.headimg.split('.');
				if (parseInt(d) >= 16 && parseInt(d) <= 21) {	// 祈福头像
					headimgs[1] = d;
				} else {
					headimgs.length = 0;
					headimgs[0] = d;
				}
				d = headimgs.join('.');
			}
			this._game.network.call_set_role_info(this._viewUI.tab.selectedIndex, d.toString());
		}

		destory() {
			Laya.timer.clearAll(this);
			super.destroy();
		}
	}
}