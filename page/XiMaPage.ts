/**
* name 洗码界面
*/
module gamedating.page {
	export class XiMaPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.XiMaUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + 'xima.atlas',
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

					break
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.XiMa_TabRenderUI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderTabHandler);
			this._viewUI.list_tab.dataSource = WebConfig.isApiDJ ? this._api_data : this._normal_data;
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.selectedIndex = 0;

			this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_xm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		private changeHandler_list_tab(e?: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}

		private renderTabHandler(cell: TabItemRender, index: number): void {
			cell.setData(this._game, index, this._viewUI.list_tab.selectedIndex);
		}

		private selectHandler(index: number) {
			this._viewUI.list_tab.selectedIndex = index;

		}

		public close(): void {
			if (this._viewUI) {
				DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
			}
			super.close();
		}
	}
	class TabItemRender extends ui.ajqp.dating.component.XiMa_TabRenderUI {
		private _game: Game;
		public index: number;
		private _data: any;
		/**
			* 
			* @param game 
			* @param data 
			*/
		setData(game: Game, index: number, selectIndex: number) {
			this.visible = true;
			this.index = index;
			this.clip_name.index = this.index == selectIndex ? 2 : 0;
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