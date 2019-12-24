/**
* name 签到
*/
module gamedating.page {
	export class QianDaoPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.QianDaoUI;
		private _qiandaos: ui.ajqp.dating.component.Effect_qdUI[] = [];
		private _awards: LImage[] = [];
		private _effs: any[] = [];
		private _avatar: AvatarUIShow;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qiandao.atlas",
			];
			this._isNeedDuang = true;
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.QianDaoUI");
			this.addChild(this._viewUI);
			this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateData);

			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this._viewUI.box_sk.addChild(this._avatar);
			}
			this._avatar.loadSkeleton(DatingPath.sk_dating + "qiandao", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2 + 20);
			for (let i = 0; i < this._viewUI.box_qiandao.numChildren; i++) {
				this._qiandaos[i] = this._viewUI["qiandao" + i];
				this._qiandaos[i].visible = false;
			}
			for (let i = 0; i < this._viewUI.box_award.numChildren; i++) {
				this._awards[i] = this._viewUI["award" + i];
			}
			for (let i = 0; i < this._viewUI.box_award.numChildren; i++) {
				this._effs[i] = this._viewUI["eff" + i];
			}
		}

		update(diff): void {
			if (this._avatar) {
				this._avatar.onDraw();
			}
		}

		protected onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_GAME) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_SIGN_IN_SUCCESS:
						this._qiandaos[this._days].visible = true
						this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: RewardPage) => {
							page.setData(msg.data, DatingPath.ui_dating + "/qiandao/jl_4.png");
						})
						break;
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this.onUpdateData();
		}

		private _isCanSign: boolean;
		private _days: number;
		private onUpdateData() {
			this._days = WebConfig.info.sign_in_days;
			for (let i = 0; i < this._qiandaos.length; i++) {
				this._qiandaos[i].visible = this._days > i;
				this._awards[i].disabled = this._days > i;
				this._effs[i].visible = this._days == i;
				this._effs[i].ani1.gotoAndStop(0);
				if (this._days == i) {
					this._effs[i].ani1.play(0, true);
				}
			}
			if (WebConfig.info.is_can_qd) {
				this._viewUI.img_btn.skin = DatingPath.ui_dating + "qiandao/tu_mrzl.png";
			} else {
				this._viewUI.img_btn.skin = DatingPath.ui_dating + "qiandao/tu_ljqd.png";
			}
		}


		protected onBtnTweenEnd(e: any, target: any) {
			if (target == this._viewUI.btn_qiandao) {//签到
				if (WebConfig.info && !WebConfig.info.mobile) {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
						page.dataSource = 3;//绑定手机类型
					})
					return;
				}
				if (WebConfig.info && WebConfig.info.is_need_bank && !WebConfig.info.yinhangka) {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDYHK)
					return;
				}
				if (WebConfig.info.is_can_qd) {
					return;
				}
				this._game.network.call_signin();
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateData);
				if (this._avatar) {
					this._avatar.clear();
					this._avatar.destroy();
					this._avatar = null;
				}
			}
			super.close();
		}
	}

}