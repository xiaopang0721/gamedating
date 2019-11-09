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
				DatingPath.sk_dating + "DZ_baijiale.png",
				DatingPath.sk_dating + "DZ_bairendezhou.png",
				DatingPath.sk_dating + "DZ_benchibaoma.png",
				DatingPath.sk_dating + "DZ_blackjack.png",
				DatingPath.sk_dating + "DZ_dezhou.png",
				DatingPath.sk_dating + "DZ_brniuniu.png",
				DatingPath.sk_dating + "DZ_buyu.png",
				DatingPath.sk_dating + "DZ_rddz.png",
				DatingPath.sk_dating + "DZ_ebgang.png",
				DatingPath.sk_dating + "DZ_honghei.png",
				DatingPath.sk_dating + "DZ_longhu.png",
				DatingPath.sk_dating + "DZ_niuniu.png",
				DatingPath.sk_dating + "DZ_paijiu.png",
				DatingPath.sk_dating + "DZ_toubao.png",
				DatingPath.sk_dating + "DZ_sangong.png",
				DatingPath.sk_dating + "DZ_rshisanshui.png",
				DatingPath.sk_dating + "DZ_shuiguoji.png",
				DatingPath.sk_dating + "DZ_tbniuniu.png",
				DatingPath.sk_dating + "DZ_zjh.png",
				DatingPath.sk_dating + "DZ_rpaodekuai.png",
				DatingPath.sk_dating + "DZ_zoo.png",
				DatingPath.sk_dating + "DZ_rniuniu.png",
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
			this._viewUI.list.scrollTo(WebConfig.scrollBarValue || 0);

			this._viewUI.btn_gren.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
			this.onUpdateGameList();
			this.onUpdatePlayerInfo();

			this._game.playMusic(Path.music_bg);
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

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_gren://个人信息
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XINXI);
					break;
				case this._viewUI.btn_add://刷新金币
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				default:
					break;
			}
		}

		private onUpdateGameList() {
			let data = WebConfig.gamelist;
			this._viewUI.list.dataSource = data;
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

		//--------------------游戏入口按钮列表相关---end------------------------------
	}

	/**
	 * 大厅入口 2 级list
	 */
	class GameItemRender extends ui.qpae.dating.component.Hud_TUI {
		private _game: Game;
		private _data: string;
		private _index: number;
		constructor() {
			super();
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
			this.img.skin = StringU.substitute("dating_ui/datingrk/DZ_{0}.png", data);
			this.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle() {

		}

		update() {

		}

		destroy() {
			super.destroy();
		}
	}
}