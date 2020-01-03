/**
* name 洗码界面
*/
module gamedating.page {
	export class XiMaPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.XiMaUI;
		private _curPt: number;
		private _curInfo;
		private _mainPlayer: PlayerData;
		private _totlaData: any;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + 'xima.atlas',
				DatingPath.atlas_dating_ui + 'tongyong/di.atlas',
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
				DatingPath.atlas_dating_ui + 'tongyong/anniu.atlas',
			];
			this._isNeedBlack = true;
			this._isNeedDuang = false;
		}

		private _api_data = [Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, Web_operation_fields.GAME_PLATFORM_TYPE_KYQP, Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, Web_operation_fields.GAME_PLATFORM_TYPE_AGQP];
		private _normal_data = [Web_operation_fields.GAME_PLATFORM_TYPE_AEQP]

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XiMaUI");
			this.addChild(this._viewUI);
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_record:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XM_RECORD);
					break
				case this._viewUI.btn_xm:
					//手动洗码
					this._game.network.call_xm_opt(this._curPt);
					break
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			this._mainPlayer = mainPlayer;
			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.XiMa_TabRenderUI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderTabHandler);
			this._viewUI.list_tab.dataSource = WebConfig.isApiDJ ? this._api_data : this._normal_data;
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this.initPTInfo();
			this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_xm.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._totlaData = this._game.datingGame.apiMgr.totlaXMData;
			this._viewUI.list_tab.selectedIndex = 0;
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
		}

		update(diff: number): void {
			super.update(diff);
			if (this._viewUI.list_tab) {
				if (this._viewUI.list_tab.dataSource) {
					let cells = this._viewUI.list_tab.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as TabItemRender;
						element && element.update();
					}
				}
			}
		}

		private onUpdatePlayerInfo(): void {
			//刷新下数据
			this.selectHandler(this._curPt - 1);
		}

		protected onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_GAME) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_XIMA_SUCCESS:
						this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: RewardPage) => {
							page.setData(msg.data);
						})
						break;
				}
			}
		}

		private initPTInfo(): void {
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_info);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderInfoHandler);
		}

		private changeHandler_list_info(): void {
			DisplayU.onScrollChange(this._viewUI.list_info, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}

		private renderInfoHandler(cell: ui.ajqp.dating.component.XiMaJiLuUI, index: number): void {
			if (cell) {
				let curData = this._viewUI.list_info.dataSource[index];
				if (curData) {
					if (curData.viplv == this._mainPlayer.GetVipLevel()) {
						cell.img_bg.visible = true
						cell.lb_vip.color = cell.lb_bl.color = '#ff9000';
					} else {
						cell.img_bg.visible = false
						cell.lb_vip.color = cell.lb_bl.color = '#cfbf9b';
					}
					cell.lb_vip.text = "VIP" + curData.viplv;
					cell.lb_bl.text = curData.fs_prec + "%";
				}
			}
		}

		private changeHandler_list_tab(e?: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}

		private renderTabHandler(cell: TabItemRender, index: number): void {
			cell.setData(this._game, index, this._viewUI.list_tab.selectedIndex, this);
		}

		private selectHandler(index: number) {
			this._curPt = index + 1;
			this._viewUI.list_info.dataSource = this._curInfo = this._totlaData[index];
			let xm_liang: number = 0;
			let xm_bl = this._game.datingGame.apiMgr.getPTBL(this._curPt) / 100;
			switch (this._curPt) {
				case Web_operation_fields.GAME_PLATFORM_TYPE_AEQP:
					xm_liang = this._mainPlayer.GetXiMaLiangAE() / 100;
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_KYQP:
					xm_liang = this._mainPlayer.GetXiMaLiangKY() / 100;
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP:
					xm_liang = this._mainPlayer.GetXiMaLiangJDB() / 100;
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_AGQP:
					xm_liang = this._mainPlayer.GetXiMaLiangAG() / 100;
					break
			}
			let xm_je: number = xm_liang * xm_bl;
			this._viewUI.lb_xmje.text = xm_je > 0 ? xm_je.toFixed(2) : '0';
			this._viewUI.lb_xml.text = xm_liang.toString();
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.list_info, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
			}
			super.close();
		}
	}
	class TabItemRender extends ui.ajqp.dating.component.XiMa_TabRenderUI {
		private _game: Game;
		public index: number;
		private _data: any;
		private _mainPlayer: PlayerData;
		private _page: XiMaPage;
		constructor() {
			super()

		}

		update() {
			if (!this._data || !this._mainPlayer) return;
			let xm_bl
			if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) {
				xm_bl = this._game.datingGame.apiMgr.getPTBL(Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) / 100;
				this.img_hd.visible = (this._mainPlayer.GetXiMaLiangAE() * xm_bl) > 0;
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) {
				xm_bl = this._game.datingGame.apiMgr.getPTBL(Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) / 100;
				this.img_hd.visible = (this._mainPlayer.GetXiMaLiangKY() * xm_bl) > 0;
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) {
				xm_bl = this._game.datingGame.apiMgr.getPTBL(Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) / 100;
				this.img_hd.visible = (this._mainPlayer.GetXiMaLiangJDB() * xm_bl) > 0;
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) {
				xm_bl = this._game.datingGame.apiMgr.getPTBL(Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) / 100;
				this.img_hd.visible = (this._mainPlayer.GetXiMaLiangAG() * xm_bl) > 0;
			}
		}
		/**
			* 
			* @param game 
			* @param data 
			*/
		setData(game: Game, index: number, selectIndex: number, page: XiMaPage) {
			this.visible = true;
			this.index = index;
			this._game = game;
			this._page = page;
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			this._mainPlayer = mainPlayer;
			this.clip_name.index = this.index == selectIndex ? 1 : 0;
		}

		set dataSource(v: any) {
			let skinStr = "";
			this._data = v;
			if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) {
				skinStr = DatingPath.ui_dating + "xima/btn_AEqipai.png"
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) {
				skinStr = DatingPath.ui_dating + "xima/btn_kaiyuanqipai.png"
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) {
				skinStr = DatingPath.ui_dating + "xima/btn_JDB.png"
			}
			else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) {
				skinStr = DatingPath.ui_dating + "xima/btn_AGshixun.png"
			}
			this.clip_name.skin = skinStr;
		}
	}
}