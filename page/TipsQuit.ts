/**
* name 安卓游戏退出提示
*/
module gamedating.page {
    export class TipsQuit extends game.gui.base.Page {
        private _viewUI: ui.ajqp.dating.TiShiUI;
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
            this._viewUI.box_desc.on(LEvent.CLICK, this, this.onClickHandle);
            this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_sure.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let playerInfo = mainPlayer.playerInfo;
            if (!playerInfo) return;
            let consume = (playerInfo.today_score || 0).toString();
            let jifen = (playerInfo.today_score || 0).toString();
            let url = "您今日有效下注为{0}，今日00：00后将会转化成{1}转盘积分，积分可前往{2}里抽取大奖哦~~";
            let desc = StringU.substitute(url, HtmlFormat.addHtmlColor(consume, TeaStyle.COLOR_GREEN), HtmlFormat.addHtmlColor(jifen, TeaStyle.COLOR_GREEN), HtmlFormat.addHtmlColor("幸运转盘", TeaStyle.COLOR_GREEN));
            TextFieldU.setHtmlText(this._viewUI.txt_desc, desc);
        }

        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
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

        protected onClickHandle(e: LEvent) {
            switch (e.currentTarget) {
                case this._viewUI.box_desc:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_ZHUANPAN);
                    this.close();
                    break
            }
        }

        public close(): void {
            super.close();
        }
    }
}