/**
* 充值记录
*/
module gamedating.page {
	export class ChongZhiRecordPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.ChongZhi_JLUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui_tongyong + "di.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.ChongZhi_JLUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._game.datingGame.chongZhiMgr.on(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);

			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("dating.component.ChongZhiJLUI", CZRecordRender);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_record.visible = false;
			this._viewUI.list_record.dataSource = [];

			this.onUpdateDataInfo();
		}

		private _dataInfo: any[];
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = this._game.datingGame.chongZhiMgr.dataInfo;
			let count: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_no.visible = !count;
			this._viewUI.list_record.visible = count > 0;
			if (!count) {
				if (!data)
					this._game.datingGame.chongZhiMgr.getData(1);
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * ChongZhiMgr.PAGE_MAX - ChongZhiMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}

			this._viewUI.list_record.dataSource = this._dataInfo;
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.name = "item" + index;
				cell.setData(this._game, cell.dataSource, index, this._viewUI);
			}
		}

		// 清理下页面
		close(): void {
			if (this._viewUI) {
				this._game.datingGame.chongZhiMgr.off(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
				this._game.datingGame.chongZhiMgr.clearDataInfo();
			}
			super.close();
		}
	}
	class CZRecordRender extends ui.ajqp.dating.component.ChongZhiJLUI {
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
			if (data.statustype == 1) {
				this.txt_zt.color = '#1fc04c';
			} else if (data.statustype == 2) {
				this.txt_zt.color = '#ff2400';
			} else {
				this.txt_zt.color = '#ed7b18';
			}
			this.txt_money.text = data.money;
			this.txt_type.text = data.recharge_type;
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "di/{0}.png", data.rank % 2 == 0 ? "tu_5" : "tu_6");
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 300, Laya.Ease.linearIn, null, data.rank * 100)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}
}