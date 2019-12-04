/**
* name 转盘
*/
module gamedating.page {
	export class ZhuanPanRecordPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.ZhuanPan_jlUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "zhuanpan.atlas",
				DatingPath.atlas_dating_ui_tongyong + "di.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.ZhuanPan_jlUI");
			this.addChild(this._viewUI);
			this._viewUI.list_gr.vScrollBarSkin = "";
			this._viewUI.list_gr.scrollBar.elasticDistance = 100;
			this._viewUI.list_gr.itemRender = this.createChildren("dating.component.ZhuanPanT2UI", ZhuanPanGrT);
			this._viewUI.list_gr.renderHandler = new Handler(this, this.renderHandler);
			// this._viewUI.check_self.on(LEvent.CLICK, this, this.updateView);
			this._viewUI.check_self.mouseEnabled = false;
			this._viewUI.box_check.on(LEvent.CLICK, this, this.boxUpdateView);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_gr.visible = false;
			this._viewUI.box_no.visible = false;
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._game.network.call_get_turntablelist();
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			this._viewUI.txt_jifen.text = playerInfo.total_turn_point.toString();
			this._viewUI.txt_mrjf.text = playerInfo.today_score.toString();
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource, index);
			}
		}

		private _data: any = null
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLELIST) {//积分抽奖获奖记录
				if (data && data.success == 0) {
					this._data = data;
					this._viewUI.box_no.visible = true
					this._viewUI.list_gr.visible = true;
					this.updateView();
				}
			}
		}

		private boxUpdateView(): void {
			this._viewUI.check_self.selected = !this._viewUI.check_self.selected;
			this.updateView();
		}

		private _selfData: any;
		private _allData: any;
		private updateView() {
			if (!this._data) return;
			let flag: boolean = this._viewUI.check_self.selected;
			this._selfData = this._data.msg && this._data.msg.self ? this._data.msg.self.list : [];
			this._allData = this._data.msg && this._data.msg.all ? this._data.msg.all.list : [];
			let curData: Array<any>;
			if (flag) {
				//仅自己
				curData = this._selfData;
				this._viewUI.list_gr.dataSource = this._selfData;
			} else {
				//其他人
				curData = this._allData;
			}
			if (curData && curData.length > 0) {
				this._viewUI.box_gr.visible = true;
				this._viewUI.box_no.visible = false;
				this._viewUI.list_gr.dataSource = curData;
			} else {
				this._viewUI.box_gr.visible = false;
				this._viewUI.box_no.visible = true;
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {

			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			}
			super.close();
		}
	}

	class ZhuanPanGrT extends ui.ajqp.dating.component.ZhuanPanT2UI {
		private _game: Game;
		private _data: any;//"ddz","niuniu","zjh"
		private _isTween: boolean;
		setData(game: Game, data: any, index: number) {
			this._game = game;
			this._data = data;
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", index % 2 == 0 ? "tu_di1" : "tu_10");
			this.txt_username.text = data.account;
			this.txt_time.text = Sync.getTimeStr(data.turn_time * 1000);
			this.txt_type.text = (data.turn_name as string).substring(0, 2);
			this.txt_money.text = data.award_value;
		}
	}

}