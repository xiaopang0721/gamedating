/**
* API管理器
*/
module gamedating.managers {
    export class ApiMgr extends gamecomponent.managers.BaseMgr {
        constructor(game: Game) {
            super(game)
            this._delta = 500;
        }

        init() {
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
        }

        //api相关返回
        private onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_API) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_API_API_LOGIN_GAME_RESULT:
                        let data = JSON.parse(msg.data);
                        let info = JSON.parse(data.info);
                        //自定义拼接
                        let url = info.d.url + "&backUrl=https://www.baidu.com/&jumpType=2";
                        this._game.uiRoot.showIframe(url, 0, 0, Laya.stage.width, Laya.stage.height);
                        break
                    case Operation_Fields.OPRATE_API_API_ADD_SCORE_RESULT:
                        msg.data;
                        break
                    case Operation_Fields.OPRATE_API_API_SUB_SCORE_RESULT:
                        msg.data;
                        break
                    case Operation_Fields.OPRATE_API_API_GET_RECODE_RESULT:
                        msg.data;
                        break
                }
            }
        }

        update(diff: number) {

        }

        /**登陆游戏 */
        goToGameApi(): void {

        }
        /**上分 */
        addGameScoreApi(): void {

        }

        /**下分 */
        subGameScoreApi(): void {

        }

        /**退出游戏 */
        quitGameApi(): void {

        }

        /**获取游戏记录 */
        getGameRecordApi(): void {

        }
		/**
		 * 帧间隔心跳
		 */
        deltaUpdate() {

        }

        hasClear: boolean;
        clear(fource?: boolean) {
            if (fource) super.clear(fource)
            Laya.timer.clearAll(this);
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
        }
    }
}