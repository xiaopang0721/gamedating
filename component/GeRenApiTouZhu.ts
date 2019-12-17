/**
* name 个人信息api投注组件
*/
module gamedating.component {
    export class GeRenApiTouZhuPage extends ui.ajqp.dating.component.GeRen1_ApiUI {
        constructor() {
            super()
        }

        // 页面初始化函数
        protected init(): void {
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
        }
    }
}