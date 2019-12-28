/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPageQPAPI extends game.gui.base.Page {
		private _viewUI: ui.qpapi.dating.DaTingUI;
		private _avatar: AvatarUIShow;
		private _boxItems: any[] = [];
		private _clipItems: any[] = [];
		//sk龙骨位置
		private _avatarName: any = ["fmqq", "zrdz", "wrzx", "jddw"];
		private _avatarPos: any = [[134, 272], [154, 327], [156, 287], [155, 329]];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
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
				this._viewUI.box_sk.addChild(this._avatar);
			}
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			//标签页按钮
			for (let index = 0; index < 4; index++) {
				this._clipItems[index] = this._viewUI["clip_item" + index];
				this._boxItems[index] = this._viewUI["box_item" + index];
				this._boxItems[index].on(LEvent.CLICK, this, this.onSelectItem, [index]);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
			this.onUpdatePlayerInfo();
			this.onSelectItem(0);
			this._game.playMusic(Path.music_bg);
		}

		protected layout(): void {
			super.layout();
			if (this._viewUI) {
				//重新调节tab按钮宽度和x位置
				let x = 0;
				let tabWidth = this._clientRealWidth / 4;
				for (let i = 0; i < this._boxItems.length; i++) {
					this._boxItems[i].width = tabWidth;
					this._boxItems[i].x = x;
					x += tabWidth;
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_back:
					this.exitGame();
					break;
			}
		}

		private _selectIndex: number = -1;
		public onSelectItem(index: number = -1) {
			if (!WebConfig.gamelist || this._selectIndex == index)
				return;
			this._selectIndex = index;
			this.selectBoxItems(index, true);
			this._avatar.loadSkeleton(DatingPath.sk_dating + this._avatarName[index], this._avatarPos[index][0], this._avatarPos[index][1]);
			let b = this.onDealGameData(index);
			if (b)
				return;
		}

		private selectBoxItems(index: number, isplay: boolean = true) {
			for (let i = 0; i < this._boxItems.length; i++) {
				if (i == index) {
					isplay && this._boxItems[i].ani1.play(0, false);
					isplay && this._boxItems[i].ani2.play(0, true);
					this._boxItems[i].clip.index = 2;
					this._boxItems[i].img1.visible = true;
					this._boxItems[i].img2.visible = true;
					this._clipItems[i].index = 2;
				} else {
					this._boxItems[i].ani2.gotoAndStop(0);
					this._boxItems[i].clip.index = 1;
					this._boxItems[i].img1.visible = false;
					this._boxItems[i].img2.visible = false;
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
				this._clip_money = new DatingClip(DatingClip.MONEY_WHITE);
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
				this._viewUI.list.scrollTo(WebConfig.scrollBarValue || 0);
			}
		}

		deltaUpdate() {
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

		private renderHandler(cell: GameItemRender, index: number) {
			if (!cell) return;
			cell.setData(this._game, cell.dataSource, index);
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
			}
			super.close();
		}

	}

	/**
	  * 大厅入口 
	  */
	class GameItemRender extends ui.qpae.dating.component.Hud_TUI {
		private _game: Game;
		private _data: string;
		private _index: number;
		private _gengXingTip: AnimationFrame;
		private _loadingTip: HudLoadingTip;
		private _waitingTip: ui.qpae.dating.component.Effect_dengdaiUI;
		constructor() {
			super();
			this.btn_box.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		//显示等待
		private showWait() {
			if (!this._waitingTip) {
				this._waitingTip = new ui.qpae.dating.component.Effect_dengdaiUI();
				this._waitingTip.x = 215;
				this._waitingTip.y = 11;
				this.addChild(this._waitingTip);
			}
			if (this._waitingTip.ani1.isPlaying) return;
			this._waitingTip.ani1.play(0, true);
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
		private showGengXing() {
			if (!this._gengXingTip) {
				this._gengXingTip = new AnimationFrame({
					source: 'update',
					fileName: '',
					interval: 12,
					frameCount: 12,
					start: 10000
				});
				this._gengXingTip.x = 200;
				this._gengXingTip.y = 5;
				this.addChild(this._gengXingTip);
				this._gengXingTip.play(true);
			}
		}

		//清理更新
		private clearGengXing() {
			if (this._gengXingTip) {
				this._gengXingTip.removeSelf();
				this._gengXingTip.destroy();
				this._gengXingTip = null;
			}
		}

		//显示进度
		private showProgress(value: number) {
			if (!this._loadingTip) {
				this._loadingTip = new HudLoadingTip();
				this._loadingTip.x = 215;
				this._loadingTip.y = 11;
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
			return LoadingMgr.ins.getProgress(this._data) || JsLoader.ins.getProgress(this._data);
		}

		update() {
			if (LoadingMgr.ins.isLoaded(this._data)) {
				this.clearGengXing();
				this.clearProgress();
				this.clearWait();
			} else {
				let progress = this.getProgress(this._data);
				if (progress > 0) {
					this.showProgress(progress);
					this.clearGengXing();
					this.clearWait();
				}
				else {
					if (JsLoader.ins.isWaitLoad(this._data)) {
						this.showWait();
						this.clearGengXing();
						this.clearProgress();
					} else {
						this.clearProgress();
						this.clearWait();
						this.showGengXing();
					}
				}
			}

			if (this._gengXingTip) {
				this._gengXingTip.onDraw();
			}
			if (this._loadingTip) {
				this._loadingTip.update();
			}

			this.btn_box.x = 143;
			this.btn_box.y = 116;
		}


		setData(game: Game, data: any, index: number) {
			if (!data) {
				this.visible = false;
				return;
			}
			if (this._data == data) return;
			this.visible = true;
			this._game = game;
			this._data = data;
			this._index = index;
			this.img.skin = StringU.substitute("dating_ui/dating/DZ_{0}.png", data);
		}

		private onMouseHandle() {
			if (!this._data) return;
			this._game.uiRoot.btnTween(this.btn_box, this, () => {
				let data = this._data;
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
			let pageDef = getPageDef(data);
			//調試模式
			let CLOSE_LIST = isDebug ? [] : [];
			if (pageDef["__enterMapLv"]) {
				this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
			}
			else if (CLOSE_LIST.indexOf(data) == -1) {
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
			} else {
				this._game.showTips("开发中,敬请期待!");
			}
		}

		destroy() {
			this.clearGengXing();
			this.clearProgress();
			this.clearWait();
			super.destroy();
		}
	}

	class HudLoadingTip extends ui.qpae.dating.component.LoadingTipTUI {
		private _updateEffect: AnimationFrame;

		constructor() {
			super();
			if (!this._updateEffect) {
				this._updateEffect = new AnimationFrame({
					source: 'loading',
					fileName: '',
					interval: 12,
					frameCount: 24,
					start: 10000
				});
			}
			this.box.addChild(this._updateEffect);
			this._updateEffect.play(true);
			this._updateEffect.x = -3
			this._updateEffect.y = 30;
			this.img.y = 30;
			this.txt.text = "0%";
		}

		set progress(value: number) {
			this.txt.text = Math.round(value * 100) + "%";
			this.img.y = (1 - value) * 30 + 3;
			this._updateEffect.y = (1 - value) * 30 - 10;
		}

		destroy(): void {
			if (this._updateEffect) {
				this._updateEffect.destroy();
				this._updateEffect = null;
			}
			this.removeSelf();
			super.destroy();
		}

		update(): void {
			if (this._updateEffect) {
				this._updateEffect.onDraw();
			}
		}
	}
}