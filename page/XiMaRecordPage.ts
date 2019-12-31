/**
* name 提示
*/
module gamedating.page {
	export class XiMaRecordPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.XiMaJiLuUI;
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

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XiMaJiLuUI");
			this.addChild(this._viewUI);
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETXIMARECORD) {//游戏记录返回
				if (data && data.success == 0) {
					let msg = data.msg;
					if (msg.list.length > 0) {
						this._viewUI.img_no.visible = false;
						this._viewUI.list_info.visible = true;
						this._viewUI.list_info.dataSource = msg.list;
					}
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_info);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._game.network.call_xm_record();
			this._viewUI.img_no.visible = true;
			this._viewUI.list_info.visible = false;
		}

		private changeHandler_list_info(): void {
			DisplayU.onScrollChange(this._viewUI.list_info, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}

		private renderHandler(cell: ui.ajqp.dating.component.XiMa_JiLuUI, index: number): void {
			if (cell) {
				let curData = this._viewUI.list_info.dataSource[index];
				if (curData) {
					let params = curData.params;
					let json_params
					if (params) {
						json_params = JSON.parse(params);
						cell.lb_xml.text = (json_params.xmliang / 100).toString();
						cell.lb_xmje.text = json_params.xmje;
						cell.lb_pt.text = ApiMgr.PTNAME[json_params.pf_code - 1];
					}
					cell.lb_tm.text = Sync.getTimeStr(curData.time * 1000);
				}
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				DisplayU.onScrollChange(this._viewUI.list_info, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
			}
			super.close();
		}
	}
}