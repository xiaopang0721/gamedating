/**
* 红包
*/
module gamedating.page {
	export class HongBaoPage extends game.gui.base.Page {
		static readonly TYPE_OPERATE_QIANG_HONGBAO: number = 0;
		static readonly TYPE_OPERATE_LING_HONGBAO: number = 1;

		private _viewUI: ui.nqp.dating.HongbaoUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "hongbao.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.HongbaoUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_get.visible = false;
			this._viewUI.box_yichai.visible = false;
			this._viewUI.txt_desc.text = this._content;
			this._viewUI.txt_title.text = this._viewUI.txt_title1.text = this._title;

			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this._viewUI.btn_chai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			// this._viewUI.btn_get.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		private _id: number;
		private _money: number;
		private _title: string;
		private _content: string;
		set dataSource(v: any) {
			this._dataSource = v;
			this._id = v.id;
			this._money = v.money;
			this._content = v.content;
			this._title = v.title;
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_chai:
					this._game.network.call_hongbao_operate(this._id, HongBaoPage.TYPE_OPERATE_QIANG_HONGBAO);
					break;
			}
		}

		private onOptHandler(optcode: number, msg: any): void {
			if (msg.type == Operation_Fields.OPRATE_GAME) {//与web交互操作错误类型
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_GET_HONGBAO_SUCCESS:     //红包领取成功
						this._viewUI.ani2.play(0, false);
						this._game.datingGame.flyGlodMgr.show(1, 0, this._game.clientWidth, this._game.clientHeight);
						this._viewUI.txt_money.text = this._money || msg.data;
						break;
					case Operation_Fields.OPRATE_GAME_GET_HONGBAO_FAILED:     //红包领取失败
						this._game.showTips("红包领取失败！");
						break;
				}
			}
		}

		// 清理下页面
		close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			}
			super.close();
		}
	}
}