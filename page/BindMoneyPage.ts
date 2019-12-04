/**
* name 绑定送钱
*/
module gamedating.page {
    export class BindMoneyPage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.dating.BangDingUI;
        private _bindSendMoney: number = 0;
        private _avatar: AvatarUIShow;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + "bangding.atlas",
                DatingPath.sk_dating + "bangdingsongjin.png",
                DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
            ];
            this._isNeedBlack = true;
        }

        private _clipBindMoney: DatingClip;
        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.BangDingUI");
            this.addChild(this._viewUI);

            this._bindSendMoney = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney");
            if (!this._clipBindMoney) {
                this._clipBindMoney = new DatingClip(DatingClip.BIND_FONT);
                this._clipBindMoney.x = this._viewUI.clip.x + (this._bindSendMoney > 9 ? -50 : 0);
                this._clipBindMoney.y = this._viewUI.clip.y;
                this._viewUI.clip.parent.addChild(this._clipBindMoney);
                this._viewUI.clip.removeSelf();
            }

            this._clipBindMoney.setText(0, true)
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            if (!this._avatar) {
                this._avatar = new AvatarUIShow();
                this._viewUI.box_sk.addChild(this._avatar);
                this._avatar.loadSkeleton(DatingPath.sk_dating + "bangdingsongjin", 0, 0, 2);
            }

            this._game.playSound(Path.music + "money.mp3")

            this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            this.onUpdatePlayerInfo();
        }

        update(diff): void {
            if (this._avatar) {
                this._avatar.onDraw();
            }
        }

        private onUpdatePlayerInfo() {
            if (!WebConfig.info) return;
            if (!this._bindSendMoney || this._bindSendMoney <= 0) {
                this.close();
            } else {
                this._clipBindMoney && this._clipBindMoney.setText(this._bindSendMoney, true)
            }
        }

        protected onSucessHandler(data: any) {
            if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) {//手机绑定成功
                if (data && data.success == 0) {
                    if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_USERNAME) {
                        this.close();
                    }
                }
            }
        }

        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
                case this._viewUI.btn_bind://注册
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
                        page.dataSource = 3;//绑定手机类型
                    }, (page) => {
                        if (!this._game.datingGame.firstAlert) {
                            this._game.datingGame.firstAlertPage();
                        } else {
                            let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                            if (!mainPlayer) return;
                            let playerInfo = mainPlayer.playerInfo;
                            if (!playerInfo) return;
                            if (!playerInfo.mobile) {
                                this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDMONEY);
                            }
                        }
                    })
                    this.dataSource = true;
                    this.close();
                    break;
            }
        }

        public close(): void {
            if (this._viewUI) {
                this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                if (this._clipBindMoney) {
                    this._clipBindMoney.removeSelf();
                    this._clipBindMoney.destroy();
                    this._clipBindMoney = null;
                }
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