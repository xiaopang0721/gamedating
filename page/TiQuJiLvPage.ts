/**
* name 提取记录
*/
module gamedating.page {
	export class TiQuJiLvPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.TuiGuangJiLuUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "tuiguang.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TuiGuangJiLuUI");
			this.addChild(this._viewUI);

			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("dating.component.FanYongTUI", FanYongT);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_record.visible = false;
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
				let page = Math.floor((index + 10) / FanYongMgr.PAGE_MAX) + 1;
				if (!DatingGame.ins.fanYongMgr.dataInfo[page]) {
					if (DatingGame.ins.fanYongMgr.dataInfo[page - 1] && DatingGame.ins.fanYongMgr.dataInfo[page - 1].length >= FanYongMgr.PAGE_MAX) {
						DatingGame.ins.fanYongMgr.dataInfo[page] = {}
						DatingGame.ins.fanYongMgr.getData(page);
					}
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			DatingGame.ins.fanYongMgr.on(FanYongMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this.onUpdateDataInfo();
		}

		private _dataInfo: any[];
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = DatingGame.ins.fanYongMgr.dataInfo;
			let count: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_no.visible = !count;
			this._viewUI.list_record.visible = count > 0;
			if (!count) {
				if (!data)
					DatingGame.ins.fanYongMgr.getData(1);
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * FanYongMgr.PAGE_MAX - FanYongMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}

			this._viewUI.list_record.dataSource = this._dataInfo;
		}

		protected onBtnTweenEnd(e: any, target: any) {

		}

		public close(): void {

			if (this._viewUI) {
				DatingGame.ins.fanYongMgr.on(FanYongMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			}
			super.close();
		}
	}


	class FanYongT extends ui.nqp.dating.component.FanYongTUI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * id:"21"
			lv:"1"
			maxmoney:"50000"
			minmoney:"1"
			name:"支付宝"
			paytype:"ZFBH5"
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this.dataSource = data;
			this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
			this.txt_zt.text = data.status;
			if (data.status == "成功") {
				this.txt_zt.color = "#41fe69";
			} else if (data.status == "失败") {
				this.txt_zt.color = "#ff0000";
			} else {
				this.txt_zt.color = "#fdfd40";
			}
			this.txt_money.text = data.money || "0";
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_di{0}.png", data.rank % 2 == 0 ? "" : 0);
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.rank * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

}