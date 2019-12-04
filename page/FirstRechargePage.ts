/**
* name 首充
*/
module gamedating.page {
    export class FirstRechargePage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.dating.ShouChongUI;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + "shouchong.atlas",
                DatingPath.atlas_dating_ui + "tongyong.atlas",
                DatingPath.sk_dating + "shouchang.png",
                DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
            ];
            this._isNeedBlack = true;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.ShouChongUI");
            this.addChild(this._viewUI);

        }

        // 页面打开时执行函数
        private _avatar: AvatarUIShow;
        protected onOpen(): void {
            super.onOpen();
            this.initClip();
            if (!this._avatar) {
                this._avatar = new AvatarUIShow();
                this._viewUI.box_sk.addChild(this._avatar);
            }
            this._avatar.loadSkeleton(DatingPath.sk_dating + "shouchang", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2 + 20, 2);
            this._viewUI.box_btn.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getData);
            this.getData();
        }

        update(diff): void {
            if (this._avatar) {
                this._avatar.onDraw();
            }
        }

        private onOptHandler(optcode: number, msg: any): void {
            if (msg.type == Operation_Fields.OPRATE_GAME) {//游戏操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_FIRST_PAY_SUCCESS:             // 领取成功
                        this._game.showTips(StringU.substitute("获得[金币] x{0},[专属头像框] x1,[专属头像] x1", msg.data));
                        this.close();
                        break;
                }
            }
        }

        private _clipCZ: DatingClip;
        private _clipBack: DatingClip;
        private initClip(): void {
            if (!this._clipCZ) {
                this._clipCZ = new DatingClip(DatingClip.SHOUCHONG_FONT0);
                this._clipCZ.x = this._viewUI.clip_cz.x;
                this._clipCZ.y = this._viewUI.clip_cz.y;
                this._viewUI.clip_cz.parent.addChild(this._clipCZ);
                this._viewUI.clip_cz.removeSelf();
            }
            if (!this._clipBack) {
                this._clipBack = new DatingClip(DatingClip.SHOUCHONG_FONT);
                this._clipBack.x = this._viewUI.clip_back.x;
                this._clipBack.y = this._viewUI.clip_back.y;
                this._viewUI.clip_back.parent.addChild(this._clipBack);
                this._viewUI.clip_back.removeSelf();
            }
        }

        private _gift_type: number;
        private _gift_val: string;
        private _isopen: number;
        private _pay_min: string;
        private getData(): void {
            this._gift_type = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "gift_type"));  //1是百分比 2是固定值
            this._viewUI.img_yuan.visible = this._gift_type == 2;
            this._viewUI.img_percent.visible = this._gift_type == 1;
            this._gift_val = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "gift_val");  //赠送金额或者比例
            this._isopen = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen"));  //是否开启首充 0是关闭 1开启
            this._pay_min = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "pay_min");    //单笔首充最低金额
            this._clipBack.x = this._clipBack.x + (parseInt(this._gift_val) > 9 ? -40 : 0);
            this._clipBack.setText(this._gift_val, true);
            this._clipCZ.setText(this._pay_min, true);
            this.updateUI();
        }

        private updateUI(): void {
            let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let flag = mainPlayer.playerInfo.is_can_first_get;
            this._viewUI.btn_info.skin = DatingPath.ui_dating + "shouchong/" + (flag ? "tu_lq.png" : "tu_yjhd.png");
            this._viewUI.btn_info.tag = flag ? 1 : 2;
            this._viewUI.img_percent.x = this._viewUI.img_yuan.x = this._clipBack.x + this._clipBack.width + 15;
        }

        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
                case this._viewUI.box_btn:
                    //领取或者前往充值
                    let tag = this._viewUI.btn_info.tag;
                    if (tag == 1) {
                        //领取
                        let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                        if (!mainPlayer) return;
                        let isGet: boolean = mainPlayer.playerInfo.is_get_fitst_pay;
                        if (isGet) {
                            this._game.showTips("已经领取过了哦~");
                            return;
                        }
                        //协议
                        this._game.network.call_get_first_pay();
                    } else if (tag == 2) {
                        //前往充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }
                    break
            }
        }

        public close(): void {
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getData);
            if (this._avatar) {
                this._avatar.clear();
                this._avatar.destroy();
                this._avatar = null;
            }
            if (this._viewUI) {

            }
            super.close();
        }
    }
}