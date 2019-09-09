/**
* name 安卓游戏退出提示
*/
module gamedating.page {
    export class TipsQuit extends game.gui.base.Page {
        private _viewUI: ui.nqp.dating.TiShiUI;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + 'tongyong.atlas',
            ];
            this._isNeedBlack = true;
            this._isNeedDuang = false;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.TiShiUI");
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.lb_go.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_sure.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let playerInfo = mainPlayer.playerInfo;
            if (!playerInfo) return;
            this._viewUI.lb_consume.text = (playerInfo.today_score || 0).toString();
            this._viewUI.lb_jf.text = (playerInfo.today_score || 0).toString();
        }


        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
                case this._viewUI.lb_go:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_ZHUANPAN);
                    this.close();
                    break
                case this._viewUI.btn_close:
                    this.close();
                    break
                case this._viewUI.btn_sure:
                    //退出游戏
                    WebConfig.closeApp();
                    this.close();
                    break
            }
        }

        public close(): void {
            super.close();
        }
    }
}