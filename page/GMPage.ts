/**
* name GM命令
*/
module gamedating.page {
	export class GMPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.GMPageUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('dating.GMPageUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_send.on(LEvent.CLICK, this, this.sendGm);
			this._viewUI.on(LEvent.KEY_DOWN, this, this.onKeyDown);
			this._viewUI.txt_gm.focus = true;
		}

		private onKeyDown(e: LEvent) {
			if (e.keyCode == Laya.Keyboard.ENTER) {
				this.sendGm(e);
			}
		}

		private sendGm(e: LEvent) {
			let mess: string = this._viewUI.txt_gm.text;
			if (mess.indexOf("@") >= 0) {
				//this._viewUI.input_msg.text = "";
				//判断gm密码锁是否开启
				if (mess == "@open") {
					WebConfig.gameGmOpen = !WebConfig.gameGmOpen;
					this._game.uiRoot.topUnder.showTips("GM" + (WebConfig.gameGmOpen ? "开启" : "关闭"));
					return;
				}
				//gm命令锁没开
				if (!WebConfig.gameGmOpen && !isDebug) {
					this._game.uiRoot.topUnder.showTips("GM未开启");
					return;
				}

				if (mess.indexOf("@c 错误") != -1) {
					let ss = "模拟堆栈 Uncaught TypeError: Cannot read property 'qpdz/' of undefined"
					ss += "\nTypeError: Cannot read property 'qpdz/' of undefined"
					ss += "\nat Function.t.formatURL (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:739852)"
					ss += "\nat Function.Laya.URL.formatURL (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:738976)"
					ss += "\nat E.e._loadImage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:181662)"
					ss += "\nat E.t (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:199223)"
					ss += "\nat n.t.run (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:11497)"
					ss += "\nat n.t.event (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:9156)"
					ss += "\nat n.e.imageLoaded (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:198078)"
					ss += "\nat n.e.workerMessage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:197770)"
					ss += "\nat Worker.worker.onmessage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:197632)"
					let data = { info: ss };
					let url = WebConfig.ai_url + "/sys/clientError";
					utils.Request.sendA(url, data, Handler.create(this, () => { logd("报错日志回调啊啊啊啊啊") }));
					return;
				}

				if (mess.indexOf("@调试") == 0) {
					Laya.Stat.hide();
					this.close();
					return;
				}
				if (mess.indexOf("@c 掉线") == 0) {
					this._game.network.close();
					return;
				}
				if (mess.indexOf("@c 断言") == 0) {
					throw "gm command";
				}
				//具体逻辑加这里
				if (mess.indexOf("@ui") == 0) {
					// let BuyuPageDef = eval("gamebuyu.page.BuyuPageDef")
					// BuyuPageDef.myinit("buyu");
					// let uiInfo = mess.split(" ");
					// this._game.uiRoot.general.open("buyu" + uiInfo[1]);
					// this.close();
					let str = mess.substr(4);
					this._game.uiRoot.general.open("dating" + str);
					return;
				}
				if (mess.indexOf("@c dd") == 0) {
					// this._game.uiRoot.topUnder.showConfirmTips("测试弹窗", () => {
					// 	this._game.uiRoot.topUnder.showTips("点击确定！");
					// });
					isShowDebug = !isShowDebug;
					return;
				}

				//发送GM
				this._game.network.call_gm_command(mess);
				this._game.uiRoot.topUnder.showTips("发送GM成功");
			} else {
				this._game.uiRoot.topUnder.showTips("无效GM");
			}
			this.close();
		}

		// 清理下页面
		close(): void {
			super.close();
		}
	}
}