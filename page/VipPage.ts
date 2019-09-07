/**
* name vip
*/
module gamedatingnqp.page {
    export class VipPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.dating.VIPUI;
        private _htmlText: laya.html.dom.HTMLDivElement;
        private _avatar: AvatarUIShow;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + "vip.atlas",
                DatingPath.atlas_dating_ui + "kehu.atlas",
                DatingPath.sk_dating + "vip.png",
            ];
            this._isNeedDuang = true;
            this._isNeedBlack = true;
            this._isClickBlack = true;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.VIPUI");
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this.initClip();
            if (!this._avatar) {
                this._avatar = new AvatarUIShow();
                this._viewUI.box_sk.addChild(this._avatar);
            }
            this._avatar.loadSkeleton(DatingPath.sk_dating + "vip", this._viewUI.box_sk.width / 2 - 30, this._viewUI.box_sk.height / 2 - 30, 2);
            DatingGame.ins.vipMgr.on(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
            this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_left.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_right.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.box_info.btn_lingqu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.box_info1.btn_lingqu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getVipData);
            this.getVipData();
            this._viewUI.panel_click.on(LEvent.MOUSE_DOWN, this, this.onMouseHandler);
            this._viewUI.panel_click.on(LEvent.MOUSE_UP, this, this.onMouseHandler);
        }

        private _downX: number;
        onMouseHandler(e: LEvent): void {
            switch (e.type) {
                case LEvent.MOUSE_DOWN:
                    this._downX = e.stageX;
                    break
                case LEvent.MOUSE_UP:
                    let upX: number = e.stageX;
                    let diff = this._downX - upX;
                    if (Math.abs(diff) < 15) return;
                    this.switchLR(diff > 0 ? true : false);
                    break
            }
        }

        update(diff): void {
            if (this._avatar) {
                this._avatar.onDraw();
            }
        }

        private getVipData(): void {
            this._vipList;
            for (let i = 1; i < 11; i++) {
                this._vipList.push(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_VIPLVCONFIG_C, i));
            }
            this.onUpdateJinDu();
        }

        private onOptHandler(optcode: number, msg: any): void {
            if (msg.type == Operation_Fields.OPRATE_GAME) {//游戏操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_VIP_LEVEL_AWARD:             // 领取成功
                        this._game.showTips("奖励领取成功哦~");
                        this.getVipData();
                        break;
                }
            }
        }

        private _jinDuNum: DatingClip;
        private _lvNum: DatingClip;
        private _rewardNum: DatingClip;
        private _lvNum1: DatingClip;
        private _rewardNum1: DatingClip;
        private initClip(): void {
            if (!this._jinDuNum) {
                this._jinDuNum = new DatingClip(DatingClip.VIP_FONT);
                this._jinDuNum.centerX = this._viewUI.clip_jindu.centerX;
                this._jinDuNum.centerY = this._viewUI.clip_jindu.centerX;
                this._viewUI.clip_jindu.parent.addChild(this._jinDuNum);
                this._viewUI.clip_jindu.removeSelf();
            }
            if (!this._lvNum) {
                this._lvNum = new DatingClip(DatingClip.VIP_FONT0);
                this._lvNum.centerX = this._viewUI.box_info.clip_Lv.centerX;
                this._lvNum.centerY = this._viewUI.box_info.clip_Lv.centerY;
                this._viewUI.box_info.clip_Lv.parent.addChild(this._lvNum);
                this._viewUI.box_info.clip_Lv.removeSelf();
            }
            if (!this._rewardNum) {
                this._rewardNum = new DatingClip(DatingClip.VIP_FONT0);
                this._rewardNum.centerX = this._viewUI.box_info.clip_Num.centerX;
                this._rewardNum.centerY = this._viewUI.box_info.clip_Num.centerY;
                this._viewUI.box_info.clip_Num.parent.addChild(this._rewardNum);
                this._viewUI.box_info.clip_Num.removeSelf();
            }
            if (!this._lvNum1) {
                this._lvNum1 = new DatingClip(DatingClip.VIP_FONT0);
                this._lvNum1.centerX = this._viewUI.box_info1.clip_Lv.centerX;
                this._lvNum1.centerY = this._viewUI.box_info1.clip_Lv.centerY;
                this._viewUI.box_info1.clip_Lv.parent.addChild(this._lvNum1);
                this._viewUI.box_info1.clip_Lv.removeSelf();
            }
            if (!this._rewardNum1) {
                this._rewardNum1 = new DatingClip(DatingClip.VIP_FONT0);
                this._rewardNum1.centerX = this._viewUI.box_info1.clip_Num.centerX;
                this._rewardNum1.centerY = this._viewUI.box_info1.clip_Num.centerY;
                this._viewUI.box_info1.clip_Num.parent.addChild(this._rewardNum1);
                this._viewUI.box_info1.clip_Num.removeSelf();
            }
        }

        private onVipUpdate(type: number) {
            if (type == VipMgr.TYPE_VIP_LEVEL_CHANGE) {//vip等级变更
                this.onUpdateJinDu();
            } else if (type == VipMgr.TYPE_VIP_RECHARGE_CHANGE) {//累充金额变更
                this.onUpdateJinDu();
            } else if (type == VipMgr.TYPE_VIP_RECEIVED_CHANGE) {//vip奖励领取标识变更
                this.onUpdateJinDu();
            }
        }

        private _vipList: any = [];
        private onSucessHandler(data: any) {
            if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERLVAWARE) {//领取vip等级奖励
                if (data && data.success == 0) {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: RewardPage) => {
                        page.setData(DatingGame.ins.vipMgr.award, DatingPath.ui_dating_tongyong + "jb_2.png");
                    })
                }
            }
        }

        //更新上半部份UI
        private _curVipLv: number;
        private onUpdateJinDu() {
            let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            if (!this._vipList || !this._vipList.length) return;
            let playerInfo = mainPlayer.playerInfo;
            this._curVipLv = playerInfo.vip_level;
            let index = this._curVipLv > 9 ? 9 : playerInfo.vip_level;
            let nextLeiChong = this._vipList[index].min_gems;
            if (this._curVipLv > 9) {
                this._viewUI.box_jd.visible = false;
                this._viewUI.lb_max.visible = true;
            }
            else {
                this._viewUI.box_jd.visible = true;
                this._viewUI.lb_max.visible = false;
            }
            this._viewUI.vip_cur.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_vip{0}.png", this._curVipLv);
            this._viewUI.vip_next.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_vip{0}.png", playerInfo.vip_level + 1 > 10 ? 11 : this._curVipLv + 1);
            this._viewUI.bar_jindu.value = playerInfo.total_recharge / nextLeiChong ? playerInfo.total_recharge / nextLeiChong : 0;
            let zaiChong = nextLeiChong - playerInfo.total_recharge < 0 ? 0 : nextLeiChong - playerInfo.total_recharge;
            this._jinDuNum.setText(zaiChong, true);
            this._viewUI.img_tx1.centerX = this._jinDuNum.centerX - this._jinDuNum.width / 2 - 20;
            this._viewUI.img_tx2.centerX = this._jinDuNum.centerX + this._jinDuNum.width / 2 + 55;
            //传的是当前未领取的标志
            let inNoGetLv: number = this._game.datingGame.vipMgr.checkVipReceivedIndex();
            if (inNoGetLv == 0) {
                //没有未被领取的,显示当前等级
                inNoGetLv = this._curVipLv;
            } else {
                inNoGetLv = inNoGetLv - 1;
            }
            //满级保持在10级情况
            this._switchIndex = inNoGetLv > 9 ? 9 : inNoGetLv;
            this.updateSwitchUI(this._switchIndex);
        }

        //更换下半部分UI
        private updateSwitchUI(index: number): void {
            this._switchIndex = index;
            let curShowView: ui.nqp.dating.component.VipSlideTUI = this._curShowIndex == 1 ? this._viewUI.box_info1 : this._viewUI.box_info;
            let curLvData: any = this._vipList[index];
            if (!curLvData) return;
            let lvNum: DatingClip = this._curShowIndex == 1 ? this._lvNum1 : this._lvNum;
            lvNum.setText(curLvData.lv, true);
            let rewardNum: DatingClip = this._curShowIndex == 1 ? this._rewardNum1 : this._rewardNum;
            if (curLvData.aware)
                rewardNum.setText(curLvData.aware, true);
            curShowView.img_yuan.x = rewardNum.x + rewardNum.width + 5;
            //更换奖励
            curShowView.img_txk.skin = StringU.substitute(DatingPath.ui_dating + "touxiang/tu_txk{0}.png", curLvData.lv);
            curShowView.img_tx.skin = StringU.substitute(DatingPath.ui_dating + "touxiang/tu_tx{0}.png", curLvData.lv);
            curShowView.box_hd.visible = false;
            curShowView.box_lq.visible = false;
            curShowView.box_yy.visible = false;
            //先判断等级，在判断是否获得奖励
            curShowView.btn_lingqu.disabled = false;
            if (this._curVipLv < curLvData.lv) {
                //立即获得
                curShowView.box_hd.visible = true;
                curShowView.btn_lingqu.tag = 1;
            } else {
                //领取
                curShowView.box_lq.visible = true;
                curShowView.btn_lingqu.tag = 2;
                let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer) return;
                let isGet: boolean = mainPlayer.GetVipAwardReceived(curLvData.lv - 1);
                if (isGet) {
                    //获得奖励了
                    curShowView.btn_lingqu.disabled = true;
                    curShowView.box_lq.visible = false;
                    //换成已领取标志
                    curShowView.box_yy.visible = true;
                }
            }
        }

        //左右切换
        private _switchIndex: number = 0;
        private switchLR(isLeft: boolean = true): void {
            if (this._isSliding) return;
            //左右切换内容
            let index: number;
            index = this._switchIndex;
            if (isLeft) {
                index += 1;
            } else {
                index -= 1;
            }
            if (index > 9) {
                index = 9;
                return;
            } else if (index < 0) {
                index = 0
                return;
            }
            this._isSliding = true;
            this._switchIndex = index;
            this.slideBox(isLeft);
        }
        //切换动画
        private _curShowIndex: number = 0;
        private _slideTime: number = 700;
        private _isSliding: boolean = false;
        private slideBox(isLeft: boolean = false): void {
            let curShowView: ui.nqp.dating.component.VipSlideTUI;
            let curHideView: ui.nqp.dating.component.VipSlideTUI;
            if (this._curShowIndex == 0) {
                curShowView = this._viewUI.box_info;
                curHideView = this._viewUI.box_info1;
                this._curShowIndex = 1;
            } else if (this._curShowIndex == 1) {
                curShowView = this._viewUI.box_info1;
                curHideView = this._viewUI.box_info;
                this._curShowIndex = 0;
            }
            //先更换UI
            this.updateSwitchUI(this._switchIndex);
            if (isLeft) {
                //向左滑动,
                //调整隐藏界面的UI
                curHideView.x = 582;
                //统一向左移
                Laya.Tween.to(curShowView, { x: -582, alpha: 0 }, this._slideTime, null, Handler.create(this, this.completeSlide, [curHideView]))
                Laya.Tween.to(curHideView, { x: 0, alpha: 1 }, this._slideTime, null, Handler.create(this, this.completeSlide, [curHideView]))
            } else {
                //向右滑动
                //调整隐藏界面的UI
                curHideView.x = -582;
                //统一向左移
                Laya.Tween.to(curShowView, { x: 582, alpha: 0 }, this._slideTime, null, Handler.create(this, this.completeSlide, [curHideView]))
                Laya.Tween.to(curHideView, { x: 0, alpha: 1 }, this._slideTime, null, Handler.create(this, this.completeSlide, [curHideView]))
            }
        }
        //滑动动画完成时
        private completeSlide(curHideView): void {
            Laya.Tween.clearAll(curHideView);
            this._isSliding = false;
        }

        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
                case this._viewUI.btn_close://关闭
                    this.close();
                    break;
                case this._viewUI.box_info1.btn_lingqu:
                case this._viewUI.box_info.btn_lingqu:
                    let tag = target.tag;
                    if (tag == 1) {
                        //立即获得
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    } else {
                        //领取
                        if (this._game) {
                            let curData = this._vipList[this._switchIndex];
                            if (curData) {
                                this._game.network.call_receive_vip_award(curData.lv);
                                DatingGame.ins.vipMgr.award = curData.aware;
                            }
                        }
                    }
                    break;
                case this._viewUI.btn_right:
                    this.switchLR();
                    break;
                case this._viewUI.btn_left:
                    this.switchLR(false);
                    break;
            }
        }

        public close(): void {
            if (this._viewUI) {
                this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getVipData);
                DatingGame.ins.vipMgr.off(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
                this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.btn_close.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_left.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_right.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_info.btn_lingqu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_info1.btn_lingqu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            }
            if (this._avatar) {
                this._avatar.clear();
                this._avatar.destroy();
                this._avatar = null;
            }
            if (this._jinDuNum) {
                this._jinDuNum.removeSelf();
                this._jinDuNum.destroy();
                this._jinDuNum = null;
            }
            if (this._lvNum) {
                this._lvNum.removeSelf();
                this._lvNum.destroy();
                this._lvNum = null;
            }
            if (this._rewardNum) {
                this._rewardNum.removeSelf();
                this._rewardNum.destroy();
                this._rewardNum = null;
            }
            super.close();
        }
    }
}