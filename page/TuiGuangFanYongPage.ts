/**
* name 推广返佣
*/
module gamedating.page {
    export class TuiGuangFanYongPage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.dating.TuiGuang_FanUI;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
            ];
            this._isNeedBlack = true;
        }

        private _clipBindMoney: DatingClip;
        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.TuiGuang_FanUI");
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
        }

        update(diff): void {
        }

        private onUpdatePlayerInfo() {
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
                // case :
                //     break;
            }
        }

        public close(): void {
            if (this._viewUI) {
            }
            super.close();
        }
    }
}