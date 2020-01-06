/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPageQPAPI extends game.gui.base.Page {
		private _viewUI: ui.qpapi.dating.DaTingUI;
		private _avatar: AvatarUIShow;
		private _boxItems: any[] = [];
		private _viewItems: any[] = [];
		private _clipItems: any[] = [];
		private _imgKong: any[] = [];
		private _tabWidth: number = 0;//tab组件宽度
		private _lineWidth: number = 0;//间隔线宽度
		//sk龙骨位置
		private _avatarName: any = ["fmqq", "zrdz", "wrzx", "jddw"];
		private _avatarPos: any = [[136, 292], [151, 331], [146, 375], [145, 298]];
		private _avatarScale: any = [0.9, 0.75, 0.9, 0.9];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				//美女龙骨相关添加
				DatingPath.sk_dating + "fmqq.png",
				DatingPath.sk_dating + "jddw.png",
				DatingPath.sk_dating + "wrzx.png",
				DatingPath.sk_dating + "zrdz.png",
				//大厅资源相关添加
				DatingPath.ui_dating + "dating/tu_bj.png",
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "rk.atlas",
				DatingPath.atlas_dating_ui + "datinggg.atlas",
				DatingPath.atlas_dating_ui + "aeqp.atlas",
				DatingPath.atlas_dating_ui + "anniu.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
				DatingPath.atlas_dating_ui + "update.atlas",
				DatingPath.atlas_dating_ui + "gxz.atlas",
				DatingPath.atlas_dating_ui + "dd.atlas",
				DatingPath.atlas_dating_ui + "zt.atlas",
				DatingPath.atlas_dating_ui + "fk.atlas",
				DatingPath.atlas_dating_ui + "tj.atlas",
				DatingPath.atlas_dating_ui + "huore.atlas",
				DatingPath.atlas_dating_ui_tongyong + 'anniu.atlas',
				//通用预加载
				// Path.atlas_game_ui_tongyong + "chongzhi.atlas",
				// Path.atlas_game_ui_tongyong + "dating.atlas",
				// Path.atlas_game_ui_tongyong + "fk.atlas",
				// Path.atlas_game_ui_tongyong + "general.atlas",
				// Path.atlas_game_ui_tongyong + "hud.atlas",
				// Path.atlas_game_ui_tongyong + "jiaru.atlas",
				// Path.atlas_game_ui_tongyong + "js.atlas",
				// Path.atlas_game_ui_tongyong + "ksyx.atlas",
				// Path.atlas_game_ui_tongyong + "logo.atlas",
				// Path.atlas_game_ui_tongyong + "nyl.atlas",
				// Path.atlas_game_ui_tongyong + "pai.atlas",
				// Path.atlas_game_ui_tongyong + "qifu.atlas",
				// Path.atlas_game_ui_tongyong + "qz.atlas",
				// Path.atlas_game_ui_tongyong + "touxiang.atlas",
				// Path.atlas_game_ui_tongyong + "yq.atlas",
				// Path.atlas_game_ui_tongyong + "zjtp.atlas",
				// Path.atlas_game_ui_tongyong + "zjts.atlas",
			];
			this._isNeedDuang = false;
			this._delta = 100;
			if (!WebConfig.apicanback) {
				this.exitGame();
			}
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.DaTingUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list.hScrollBarSkin = "";
			this._viewUI.list.scrollBar.elasticDistance = 100;
			this._viewUI.list.itemRender = GameItemRender;
			this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list.scrollBar.changeHandler = new Handler(this, this.onScrollChange);
			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this._avatar.zOrder = -1;
				this._viewUI.box_sk.addChild(this._avatar);
			}
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_full.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			//标签页按钮
			for (let index = 0; index < 4; index++) {
				this._viewItems[index] = this._viewUI["view" + index];
				this._clipItems[index] = this._viewUI["clip" + index];
				this._imgKong[index] = this._viewUI["img_kong" + index];
				this._boxItems[index] = this._viewUI["box_item" + index];
				this._boxItems[index].on(LEvent.CLICK, this, this.onSelectItem, [index]);
				if (index == 0) {
					this._tabWidth = this._viewUI["view" + index].width;
					this._lineWidth = this._viewUI["img_kong" + index].width;
				}
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
			this.onUpdatePlayerInfo();
			this.onSelectItem(0);
			this.onUpdateTab();
			this._game.playMusic(Path.music_bg);
		}

		private _listBarMax: number = 0;
		protected layout(): void {
			super.layout();
			if (this._viewUI) {
				this.onUpdateFullScreen();
				if (this._viewUI.list.dataSource)
					this._viewUI.list.scrollBar.max = this._listBarMax;
				this._viewUI.list.width = this._game.isFullScreen ? this._clientWidth - 279 : this._clientWidth - 229;
				Laya.timer.frameOnce(1, this, this.onUpdateTab);
			}
		}

		//重新调节tab按钮宽度和x位置
		private onUpdateTab() {
			let total_x: number = 0;
			let tabcount = this._boxItems.length;
			let tabWidth = (this._view.width - this._lineWidth * 3) / tabcount; //tab新宽度
			let scale_x = tabWidth / this._tabWidth; //tab组件缩放比
			for (let i = 0; i < this._boxItems.length; i++) {
				this._viewItems[i].scaleX = scale_x;
				this._boxItems[i].x = total_x;
				this._boxItems[i].width = tabWidth;
				total_x += tabWidth;
				if (i < 3) {
					this._imgKong[i].x = total_x;
					total_x += this._lineWidth;
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_back:
					this.exitGame();
					break;
				case this._viewUI.btn_set:
					this._game.uiRoot.HUD.open(DatingPageDef.PAGE_API_SETTING);
					break;
				case this._viewUI.btn_full:
					if (this._game.uiRoot.checkFullScreen()) {
						this._game.uiRoot.exitFullScreen();
					} else {
						this._game.uiRoot.requestFullScreen();
					}
					break;
			}
		}

		private onUpdateFullScreen() {
			if (this._game.uiRoot.checkFullScreen()) {
				this._viewUI.btn_full.skin = DatingPath.ui_dating + "dating/btn_quanpingOFF.png";
			} else {
				this._viewUI.btn_full.skin = DatingPath.ui_dating + "dating/btn_quanping.png";
			}
			if (this._game.isFullScreen) {
				this._viewUI.box_btn_top_left.left = 56;
				this._viewUI.box_btn_top.right = 56;
				this._viewUI.btn_left.left = 262 + 56;
				this._viewUI.list.left = 265 + 56;
			} else {
				this._viewUI.box_btn_top_left.left = 0;
				this._viewUI.box_btn_top.right = 0;
				this._viewUI.btn_left.left = 262;
				this._viewUI.list.left = 265;
			}
		}

		private _selectIndex: number = -1;
		public onSelectItem(index: number = -1) {
			if (!WebConfig.gamelist || this._selectIndex == index) return;
			// 如果有值，说明该干活了
			let listData = this._game.datingGame.hudTabScrollData;
			if (listData) {
				let value: number = listData.value;
				let tabIndex: number = listData.tabIndex;
				this._game.datingGame.clearHudTabScrollData();
				Laya.timer.once(100, this, () => {
					this._viewUI.list.scrollBar.value = value;
				})
				if (tabIndex != index) {
					this.onSelectItem(tabIndex);
					return;
				}
			}
			this._selectIndex = index;
			this.selectBoxItems(index, true);
			this._viewUI.eff_type.ani1.play(0, true);
			this._viewUI.eff_type.img_type.skin = DatingPath.ui_dating + "zt/tu_" + this._avatarName[index] + ".png";
			this._avatar.loadSkeleton(DatingPath.sk_dating + this._avatarName[index], this._avatarPos[index][0], this._avatarPos[index][1]);
			this._avatar.scale(this._avatarScale[index], this._avatarScale[index]);
			let b = this.onDealGameData(index);
		}

		private selectBoxItems(index: number, isplay: boolean = true) {
			for (let i = 0; i < this._viewItems.length; i++) {
				if (i == index) {
					isplay && this._viewItems[i].ani1.play(0, false);
					isplay && this._viewItems[i].ani2.play(0, true);
					this._viewItems[i].clip.index = 2;
					this._viewItems[i].img1.visible = true;
					this._viewItems[i].img2.visible = true;
					this._clipItems[i].index = 2;
				} else {
					this._viewItems[i].ani2.gotoAndStop(0);
					this._viewItems[i].clip.index = 1;
					this._viewItems[i].img1.visible = false;
					this._viewItems[i].img2.visible = false;
					this._clipItems[i].index = 1;
				}
			}
		}

		private exitGame() {
			location.href = 'about:blank';
		}

		private onScrollChange(v) {
			this._viewUI.btn_left.visible = v > this._viewUI.list.scrollBar.min;
			this._viewUI.btn_right.visible = v < this._viewUI.list.scrollBar.max;
		}

		private _clip_money: DatingClip;
		private onUpdatePlayerInfo() {
			if (!this._viewUI) return;
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._viewUI.txt_id.text = playerInfo.nickname;
			if (!this._clip_money) {
				this._clip_money = new DatingClip(DatingClip.MONEY_FONT2);
				this._clip_money.scale(0.9, 0.9);
				this._clip_money.x = this._viewUI.clip_money.x;
				this._clip_money.y = this._viewUI.clip_money.y;
				this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
				this._viewUI.clip_money.removeSelf();
			}

			this._clip_money.setText(playerInfo.money, true, false, playerInfo.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);

			this._viewUI.btn_gren.skin = this._game.datingGame.getHeadUrl(playerInfo.headimg, 1);
		}

		private _gameNoNeed: string[] = ["zoo", "shisanshui"];
		private onDealGameData(index: number) {
			let game_list: any[] = []
			let webPower: number = 0;
			let enterGameInfo = this._game.sceneObjectMgr.mainPlayer ? this._game.sceneObjectMgr.mainPlayer.getEnterGameInfo() : {};
			if (!WebConfig.gamelist) {
				this._viewUI.list.dataSource = [];
				return true;
			}
			// 先筛选有用信息
			for (let i = 0; i < WebConfig.gamelist.length; i++) {
				let dz_str: any = WebConfig.gamelist[i];
				if (typeof dz_str === "number") continue;
				if (!dz_str) continue;
				let str: string = dz_str.replace("DZ_", "");
				let str1 = str.replace("r_", "");
				let times = enterGameInfo[str] ? enterGameInfo[str] : 0;
				let type = -1;
				let d;
				if (str.indexOf("r_") == -1) {
					d = DatingPageDef.GAME_TYPE_LIST[str1];
				}
				type = d && d.length != 0 ? d[0] : -1;
				if (type > -1) {
					//热门游戏 或 对应类型的游戏
					if (index == DatingPageDef.TYPE_HOT || index == type) {
						if (this._gameNoNeed.indexOf(str1) != -1) continue;
						game_list.push([str.replace('_', ''), type, webPower, times]);
						webPower++;
					}
				}
			}
			if (!game_list.length) {
				this._viewUI.list.dataSource = [];
				return true;
			}

			// 后台 + 玩家操作习惯排序
			game_list.sort(this.onSortList);

			// 按类整理
			let gl = [];
			for (let index = 0; index < game_list.length; index++) {
				let arr = game_list[index];
				gl.push([arr[0], arr[1]]);
			}

			this.onUpdateGameList(gl);
		}

		/**
	   * 初始化排序列表
	   */
		private onSortList(a, b): number {
			let v1: number = 0;
			let v2: number = 0;
			let a_power: number = 10000 - a[2];
			let b_power: number = 10000 - b[2];
			let a_times: number = a[3];
			let b_times: number = b[3];
			v1 = a_power + (a_times > 5 ? a_times + 100000 : 0);
			v2 = b_power + (b_times > 5 ? b_times + 100000 : 0);
			return v2 - v1;
		}

		private onUpdateGameList(gameList) {
			let data = gameList;
			let listItemCount = Math.ceil(data.length / 2);
			this._listBarMax = 250 * listItemCount - (this._clientWidth - 370);
			this._listBarMax = this._listBarMax < 0 ? 0 : this._listBarMax;
			if (!data || !data.length) {
				this._viewUI.list.dataSource = [];
			} else {
				let list = [];
				for (let index = 0; index < data.length; index++) {
					let element = data[index];
					if (!element) continue;
					list.push(element);
				}
				this._viewUI.list.dataSource = list;
				this._viewUI.list.scrollBar.max = this._listBarMax;
				this._viewUI.list.scrollTo(WebConfig.scrollBarValue || 0);
				//重新设置左右箭头显示隐藏
				let len = list.length;
				this._viewUI.btn_left.visible = false;
				this._viewUI.btn_right.visible = len > 10;
			}
		}

		private _aniPlayTime: number = 0;
		deltaUpdate() {
			if (this._aniPlayTime <= 0) {
				this._viewUI.ani_logo.ani1.play(0, false);
				this._aniPlayTime = 5000;
			} else {
				this._aniPlayTime -= this._delta;
			}
			if (this._viewUI.list) {
				if (this._viewUI.list.dataSource) {
					let cells = this._viewUI.list.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as GameItemRender;
						element && element.update();
					}
				}
			}
		}

		saveListStatus() {
			let listData = this._game.datingGame.createHudTabScrollData();
			if (listData) {
				listData.tabIndex = this._selectIndex;
				listData.value = this._viewUI.list.scrollBar.value;
			}
		}

		private renderHandler(cell: GameItemRender, index: number) {
			if (!cell) return;
			cell.setData(this, this._game, cell.dataSource, index);
		}

		public close(): void {
			if (this._viewUI) {
				this._game.stopMusic();
				this._viewUI.list.dataSource = [];
				this._viewUI.list.renderHandler.recover();
				this._viewUI.list.renderHandler = null;
				if (this._viewUI.list.scrollBar) {
					//记录当前滚动位置
					WebConfig.scrollBarValue = this._viewUI.list.scrollBar.value;
				} else {
					WebConfig.scrollBarValue = 0;
				}
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
				if (this._clip_money) {
					this._clip_money.removeSelf();
					this._clip_money.destroy();
					this._clip_money = null;
				}
				if (this._avatar) {
					this._avatar.clear();
					this._avatar.destroy();
					this._avatar = null;
				}
			}
			super.close();
		}

	}

	/**
	  * 大厅入口
	  */
	class GameItemRender extends ui.qpapi.dating.component.Hud_TUI {
		private _game: Game;
		private _page: HudMainPageQPAPI;
		private _gameStr: string;
		private _type: string;
		private _index: number;
		private _updateTip: ui.qpapi.dating.component.Effect_gxUI;
		private _loadingTip: HudLoadingTip;
		private _waitingTip: ui.qpapi.dating.component.Effect_dengdaiUI;
		private _hotSign: ui.qpapi.dating.component.Effect_huoreUI;
		private _recommendSign: ui.qpapi.dating.component.Effect_tjUI;
		private _hotList: string[] = ["wxsaoleihb", "mpniuniu"];
		private _recommendList: string[] = ["longhu", "niuniu"];
		constructor() {
			super();
			this.btn_box.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		//显示等待
		private showWait() {
			if (!this._waitingTip) {
				this._waitingTip = new ui.qpapi.dating.component.Effect_dengdaiUI();
				this._waitingTip.x = 170;
				this._waitingTip.y = 33;
				this.addChild(this._waitingTip);
			}
			this.clearUpdate();
		}

		//清理等待
		private clearWait() {
			if (this._waitingTip) {
				this._waitingTip.removeSelf();
				this._waitingTip.destroy();
				this._waitingTip = null;
			}
		}

		//显示更新
		private showUpdate() {
			if (this._waitingTip || this._loadingTip) return;
			if (!this._updateTip) {
				this._updateTip = new ui.qpapi.dating.component.Effect_gxUI();
				this._updateTip.x = 157;
				this._updateTip.y = 8;
				this.addChild(this._updateTip);
			}
		}

		//清理更新
		private clearUpdate() {
			if (this._updateTip) {
				this._updateTip.removeSelf();
				this._updateTip.destroy();
				this._updateTip = null;
			}
		}

		//显示火热
		private showHotSign() {
			if (!this._hotSign) {
				this._hotSign = new ui.qpapi.dating.component.Effect_huoreUI();
				this._hotSign.centerX = 0;
				this._hotSign.centerY = 0;
				this._hotSign.ani1.play(0, true);
				this.box_sign.addChild(this._hotSign);
			}
		}

		//清理火热
		private clearHotSign() {
			if (this._hotSign) {
				this._hotSign.removeSelf();
				this._hotSign.destroy();
				this._hotSign = null;
			}
		}

		//显示推荐
		private showRecommendSign() {
			if (!this._recommendSign) {
				this._recommendSign = new ui.qpapi.dating.component.Effect_tjUI();
				this._recommendSign.centerX = 0;
				this._recommendSign.centerY = 0;
				this._recommendSign.ani1.play(0, true);
				this.box_sign.addChild(this._recommendSign);
			}
		}

		//清理推荐
		private clearRecommendSign() {
			if (this._recommendSign) {
				this._recommendSign.removeSelf();
				this._recommendSign.destroy();
				this._recommendSign = null;
			}
		}

		//显示进度
		private showProgress(value: number) {
			if (!this._loadingTip) {
				this._loadingTip = new HudLoadingTip();
				this._loadingTip.x = 170;
				this._loadingTip.y = 32;
				this.addChild(this._loadingTip);
			}

			this._loadingTip.progress = value;
		}

		//清理进度
		private clearProgress() {
			if (this._loadingTip) {
				this._loadingTip.removeSelf();
				this._loadingTip.destroy();
				this._loadingTip = null;
			}
		}

		private getProgress(gameid: string) {
			return LoadingMgr.ins.getProgress(this._gameStr) || JsLoader.ins.getProgress(this._gameStr);
		}

		private _time: number = 60000;
		update() {
			if (this._time <= 0) {
				this._time = 60000;
				this.updateOnline();
			} else {
				this._time -= 100;
			}
			if (LoadingMgr.ins.isLoaded(this._gameStr)) {
				this.clearUpdate();
				this.clearProgress();
				this.clearWait();
			} else {
				let progress = this.getProgress(this._gameStr);
				if (progress > 0) {
					this.showProgress(progress);
					this.clearUpdate();
					this.clearWait();
				}
				else {
					if (JsLoader.ins.isWaitLoad(this._gameStr)) {
						this.showWait();
						this.clearUpdate();
						this.clearProgress();
					} else {
						this.showUpdate();
						this.clearProgress();
						this.clearWait();
					}
				}
			}
		}

		setData(page: HudMainPageQPAPI, game: Game, data: any, index: number) {
			if (!data) {
				this.visible = false;
				return;
			}
			if (this._gameStr == data[0]) return;
			this.visible = true;
			this._page = page;
			this._game = game;
			this._gameStr = data[0];
			this._type = data[1];
			this._index = index;
			this.img.skin = DatingPath.ui_dating + "rk/DZ_" + this._gameStr + ".png";
			this.updateOnline();
			//添加火爆标志
			if (this._hotList.indexOf(this._gameStr) != -1) {
				this.showHotSign();
			} else {
				this.clearHotSign();
			}
			//添加推荐标志
			if (this._recommendList.indexOf(this._gameStr) != -1) {
				this.showRecommendSign();
			} else {
				this.clearRecommendSign();
			}
		}

		private updateOnline() {
			if (!this._game || !this._game.datingGame) return;
			//在线人数显示
			this.box_online.visible = true;
			this.txt_online.text = this._game.datingGame.OnlineNumMgr.getOnlineNum(this._gameStr);
		}

		private onMouseHandle() {
			if (!this._gameStr) return;
			if (this._loadingTip) {
				this._game.showTips("正在更新中...")
				return;
			}
			this._game.uiRoot.btnTween(this.btn_box, this, () => {
				let data = this._gameStr;
				if (LoadingMgr.ins.isLoaded(data)) {
					JsLoader.ins.startLoad(data, false, Handler.create(this, (assets) => {
						this.openPage(data);
					}))
				} else {
					JsLoader.ins.startLoad(data, true);
					this._game.showTips(StringU.substitute("{0}已加入更新队列", PageDef.getNameById(data)));
				}
			});
		}

		private openPage(data) {
			//房卡类型打开创建房间界面
			if (this._type == DatingPageDef.TYPE_CARD) {
				if (this._gameStr == "r" + "paodekuai") {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM, (page: CreadRoomPDKPage) => {
						page.game_id = this._gameStr;
						page.dataSource = WebConfig.hudgametype = this._type;// 等于type
					});
				} else {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CREATE_CARD_ROOM, (page: CreateCardRoomBase) => {
						page.game_id = this._gameStr;
						page.dataSource = WebConfig.hudgametype = this._type;// 等于type
					});
				}
				return;
			}
			//非房卡类型打开游戏场次界面
			let pageDef = getPageDef(data);
			//調試模式
			let CLOSE_LIST = isDebug ? [] : [];
			if (pageDef["__enterMapLv"]) {
				this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
				this._page.saveListStatus();
			}
			else if (CLOSE_LIST.indexOf(data) == -1) {
				this._page.saveListStatus();
				if (data == 'wxsaoleihb') {
					this._game.uiRoot.general.open(data + 9, (page: any) => {
						page.isInner = false;
					}, () => {
						this._game.uiRoot.HUD.open(data + 1, (page: Page) => {
							this._game.uiRoot.HUD.closeAll([data + 1]);
						}, (page: Page) => {
							// 场次返回大厅回调
							if (this._game.sceneObjectMgr.mainPlayer && !this._game.sceneGame.inScene) {
								this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
									this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
								}, null, 0);
							}
						});
					})
				} else {
					this._game.uiRoot.HUD.open(data + 1, (page: Page) => {
						this._game.uiRoot.HUD.closeAll([data + 1]);
					}, (page: Page) => {
						// 场次返回大厅回调
						if (this._game.sceneObjectMgr.mainPlayer && !this._game.sceneGame.inScene) {
							this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
								this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
							}, null, 0);
						}
					});
				}
			} else {
				this._game.showTips("开发中,敬请期待!");
			}
		}

		destroy() {
			this.clearUpdate();
			this.clearProgress();
			this.clearWait();
			this.clearHotSign();
			this.clearRecommendSign();
			super.destroy();
		}
	}

	class HudLoadingTip extends ui.qpapi.dating.component.LoadingTipTUI {
		constructor() {
			super();
			this.img.y = 30;
			this.txt.text = "0%";
		}

		set progress(value: number) {
			this.txt.text = Math.round(value * 100) + "%";
			this.img.y = (1 - value) * 31 + 30;
		}

		destroy(): void {
			this.removeSelf();
			super.destroy();
		}
	}


}