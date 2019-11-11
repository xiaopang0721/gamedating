/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPageQPAE extends game.gui.base.Page {
		private _viewUI: ui.qpae.dating.DaTingUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
			this._isNeedDuang = false;
			this._delta = 100;
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
			this._viewUI.list.scrollTo(WebConfig.scrollBarValue || 0);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
			this.onUpdateGameList();
			this.onUpdatePlayerInfo();

			this._game.playMusic(Path.music_bg);
		}

		private onScrollChange(v) {
			this._viewUI.btn_left.visible = v > this._viewUI.list.scrollBar.min;
			this._viewUI.btn_right.visible = v < this._viewUI.list.scrollBar.max;
		}

		private _clip_money: ClipUtil;
		private onUpdatePlayerInfo() {
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			if (!this._viewUI) return;
			this._viewUI.txt_id.text = playerInfo.nickname;
			if (!this._clip_money) {
				this._clip_money = new ClipUtil(ClipUtil.MONEY_WHITE);
				this._clip_money.scale(0.9, 0.9);
				this._clip_money.x = this._viewUI.clip_money.x;
				this._clip_money.y = this._viewUI.clip_money.y;
				this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
				this._viewUI.clip_money.removeSelf();
			}

			this._clip_money.setText(playerInfo.money, true, false, playerInfo.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);

			this._viewUI.btn_gren.skin = this._game.datingGame.getHeadUrl(playerInfo.headimg, 1);
		}

		private onUpdateGameList() {
			let data = WebConfig.gamelist;
			if (!data || !data.length) {
				this._viewUI.list.dataSource = [];
			} else {
				let list = [];
				let jqqdGames = ['zoo', 'rshisanshui', 'mpniuniu', 'wxsaoleihb'];
				for (let index = 0; index < data.length; index++) {
					let element = data[index];
					if (!element || element.indexOf("r_") != -1 || jqqdGames.indexOf(element) != -1) continue;
					list.push(element);
				}
				this._viewUI.list.dataSource = list;
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