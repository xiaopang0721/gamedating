/**
* name 
*/
module gamedating {
	export class DatingGame {
		private static _ins: DatingGame;
		public static get ins() {
			if (!this._ins) {
				this._ins = new DatingGame()
			}
			return this._ins;
		}

		private _hudTabScrollData: HudTabScrollData;
		get hudTabScrollData() {
			return this._hudTabScrollData;
		}
		clearHudTabScrollData() {
			this._hudTabScrollData = null;
		}
		createHudTabScrollData() {
			if (!this._hudTabScrollData)
				this._hudTabScrollData = new HudTabScrollData();
			return this._hudTabScrollData;
		}
		private _qifuNameStr: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
		getHeadUrl(headimg: string, type: number = 2): string {
			headimg = headimg ? headimg : '0';
			let hs = headimg.split('.');
			let headIdx = parseInt(hs[hs.length - 1]);
			if (headIdx >= 16 && headIdx <= 21) {
				if (type == 1) {//大厅资源
					return DatingPath.ui_dating + "touxiang/tu_tx" + this._qifuNameStr[headIdx - 16] + ".png";
				} else {//通用资源
					return PathGameTongyong.ui_tongyong_touxiang + "tu_tx" + this._qifuNameStr[headIdx - 16] + ".png";
				}
			} else {
				if (type == 1) {//大厅资源
					return DatingPath.ui_dating + "touxiang/tu_tx" + (headimg ? headimg : 0) + ".png";
				} else {//通用资源
					return PathGameTongyong.ui_tongyong_touxiang + "tu_tx" + (headimg ? headimg : 0) + ".png";
				}
			}
		}

		getTouXiangKuangUrl(headKuang: string, type: number = 2): string {
			headKuang = headKuang ? headKuang : '0';
			if (type == 1) {//大厅资源
				return  DatingPath.ui_dating + "touxiang/tu_txk" + headKuang + ".png";
			} else {//通用资源
				return PathGameTongyong.ui_tongyong_touxiang + "tu_txk" + headKuang + ".png";
			}
		}

		getQFTypeImg(qf_id): string {
			return StringU.substitute(PathGameTongyong.ui_tongyong_touxiang + "f_{0}2.png", this._qifuNameStr[qf_id - 1]);
		}

		getIsHaveQiFu(player): boolean {
			if (!player || !player.GetQiFuEndTime) return false;
			for (let i = 0; i < 6; i++) {
				let qfEndTime = player.GetQiFuEndTime(i);
				if (qfEndTime && qfEndTime > this._game.sync.serverTimeBys) {
					return true;
				}
			}
			return false;
		}

		//退出游戏计数
		private _exitGmeTimes: number = 0;
		private get exitGmeTimes() { return this._exitGmeTimes };
		//游戏前后金币差值
		private _diffMoney: number = 0;
		private get diffMoney() { return this._diffMoney };
		private _game: Game;
		constructor() {
			this._game = main.game;
			DatingPageDef.myinit(DatingPageDef.GAME_NAME);
			//按鍵监听
			if (Browser.onPC) {
				Laya.stage.on(LEvent.KEY_DOWN, this, this.onKeyDown);
				Laya.stage.on(LEvent.KEY_UP, this, this.onKeyUp);
			}


			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_PLAYER_CARDROOM_CHUANGE, this, this.onChangeCardRoom)
			this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_PLAYER_INFO_GAME_ID, this, this.onUpdateReConnectStatus);
			this._game.sceneObjectMgr.on(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.onMainUnitChange);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.onUpdateFreeStyle);
			this.onUpdateFreeStyle();


			//微信登陆回调
			WebConfig.wxLoginCallBack = Handler.create(this, this.wxLoginCallBack, null, false);
			//键盘隐藏
			WebConfig.keyBoardHideCallBack = Handler.create(this, this.keyBoardHideCallBack, null, false);
			//键盘显示
			WebConfig.keyBoardShowCallBack = Handler.create(this, this.keyBoardShowCallBack, null, false);
			//ios推送
			WebConfig.update_deviceToken = Handler.create(this, this.update_deviceToken, null, false);
			//微信分享回调
			WebConfig.wxShareCallBack = Handler.create(this, this.update_wxShareCallBack, null, false);
			//app关闭回调
			WebConfig.appCloseCallBack = Handler.create(this, this.update_appCloseCallBack, null, false);
		}

		private initMgr() {
			this.noticeMgr.init();
			this.chongZhiMgr.init();
		}

		private onUpdateReConnectStatus() {
			if (WebConfig.isConnected) {//第一进来 如果是断线重连进来的 先锁掉
				this._game.setIsLockGame(true, true, "UIRoot.onUpdateReConnectStatus")
			}
		}

		private onUpdateFreeStyle() {
			this.updateConfigUrl();
		}

		//主玩家下来了
		private onMainUnitChange(): void {
			this.onMPlayerData();
		}

		// 主玩家数据下来了
		private _isLogined: boolean = false;
		public onMPlayerData(): void {
			if (!this._game.sceneObjectMgr.mainPlayer || !WebConfig.info) {
				this._isLogined = false;
				this._game.setIsLockGame(true, true, "UIRoot.onMPlayerData");
				return;
			}
			if (this._isLogined) {
				return;
			}
			this._game.setIsLockGame(false, false, "UIRoot.onMPlayerData");
			this._isLogined = true;

			let hud_page = WebConfig.enterGameLocked ? (WebConfig.gameid + "1") : DatingPageDef.PAGE_HUD;

			//界面上什么都没有 就打开hud
			this._game.uiRoot.closeAll([DatingPageDef.PAGE_LOADING, DatingPageDef.PAGE_LOGIN, hud_page, DatingPageDef.PAGE_BINDMONEY, DatingPageDef.PAGE_HUODONG, DatingPageDef.PAGE_VIP_UP, DatingPageDef.PAGE_FIRST_RECHARGE]);
			if (!this._game.uiRoot.HUD.isOpened(hud_page)) {
				this._game.uiRoot.HUD.open(hud_page, () => {
					this._game.playSound(Path.sound_hy);
					this._game.uiRoot.HUD.closeAll([hud_page]);
				});
			}

			this.initMgr();
			this._game.uiRoot.closeLoadProgress();

			//客户端报告错误信息
			let str = localGetItem("client_error")
			if (str) {
				localRemoveItem("client_error");
				let data = { info: str };
				let url = WebConfig.ai_url + "/sys/clientError";
				utils.Request.sendA(url, data);
			}

			////报告APP错误信息
			let appstr = localGetItem("appSetErrorInfo")
			if (appstr) {
				localRemoveItem("appSetErrorInfo");
				let data = { info: appstr };
				let url = WebConfig.ai_url + "/sys/clientError";
				utils.Request.sendA(url, data);
			}

			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			//设置下设备类型
			this._game.network.call_set_info(playerInfo.headimg || "", playerInfo.sex || "", WebConfig.deviceToken || "", WebConfig.device || "", "", playerInfo.nickname || "");
		}

		//键盘隐藏
		private keyBoardHideCallBack(height: number) {
			this.jianPanMgr.event(JianPanMgr.EVENT_KEYBOARD_HIDE, height);
			logd("keyBoardHideCallBack", height);
		}

		//键盘显示
		private keyBoardShowCallBack(height: number) {
			this.jianPanMgr.event(JianPanMgr.EVENT_KEYBOARD_SHOW, height);
			logd("keyBoardShowCallBack", height);
		}

		public onAppBlur(e?: any) {
			if (this._game.uiRoot.HUD.isOpened(PageDef.PAGE_LOADING) || this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN)) return;
			if (this._game.sceneGame.network.connected) return;
			this._game.sceneGame.clear("UIRoot onAppBlur", true);
			// this._game.showTips("onAppBlur")
			this._game.stopAllSound();
			this._game.stopMusic();
		}

		public onAppFous(e?: any) {
			if (this._game.uiRoot.HUD.isOpened(PageDef.PAGE_LOADING) || this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN)) return;
			if (this._game.sceneGame.network.connected) return;
			// this._game.showTips("onAppFous")
			this._game.playMusic(this._game.musicUrl);
			this._game.sceneGame.clear("UIRoot onAppFous", true);
			this._game.sceneGame.login("UIRoot onAppFous");
		}

		//房卡类型单项变更
		private onChangeCardRoom() {
			WebConfig.hudtabIndex = WebConfig.hudgametype = DatingPageDef.TYPE_CARD;
		}

		//app关闭回调
		private update_appCloseCallBack(success: any) {
			//退出弹出提示
			this.quitGame();
		}

		private _shareCd: number = 0;
		//分享要超时两秒
		private _shareContinueTime: number = 0;
		set shareContinueTime(value: number) {
			this._shareContinueTime = value;
		}
		//分享标志位
		private _isShare: boolean = false;
		get isShare() {
			return this._isShare;
		}
		set isShare(value: boolean) {
			this._isShare = value;
		}
		//微信分享回调
		private update_wxShareCallBack(success: any) {
			if (!this._isShare) return;
			this._isShare = false;
			//月入百万弹框标志位
			if (!this._isShareBack) {
				this._isShareBack = true;
				let page: any = this._game.uiRoot.HUD.getPage(DatingPageDef.PAGE_HUD);
				if (page) {
					page.showQiPaoKuang();
				}
			}
			if (!WebConfig.info) {
				return;
			}
			if (success && WebConfig.info.isCanFenXiang)//可以分享 
			{
				if (Laya.timer.currTimer - this._shareCd < 0) return;
				this._shareCd = Laya.timer.currTimer + 3000;
				if (Laya.timer.currTimer - this._shareContinueTime < 2000) {
					this._game.showTips("分享失败");
					return
				}
				this._game.sceneGame.network.call_new_dailyshare();
			}
		}

		//ios推送回掉
		private update_deviceToken() {
			if (!this._game.sceneGame.sceneObjectMgr.mainPlayer) return;
			WebConfig.wxDebug && WebConfig.alert("setDeviceToken:" + WebConfig.deviceToken)
			WebConfig.wxDebug && WebConfig.alert("device:" + WebConfig.device)
			WebConfig.wxDebug && WebConfig.alert("vtype:" + WebConfig.vtype)
			this._game.sceneGame.network.call_set_info("", "", WebConfig.deviceToken || "", WebConfig.device || "", "", "");
		}

		//微信登陆回掉
		private wxLoginCallBack(isSucess, unionId) {
			WebConfig.wxDebug && WebConfig.alert("微信登陆回调" + isSucess);
			if (isSucess) {
				if (this._game.sceneGame.network.connected && this._isBind) {
					WebConfig.wxDebug && WebConfig.alert("微信绑定");
					if (WebConfig.info) {
						this._game.sceneGame.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_WEIXIN, unionId, "", "", "", "", "", WebConfig.device, WebConfig.info.invite_code || "");
					}
				} else {
					WebConfig.wxDebug && WebConfig.alert("微信登陆");
					this._game.sceneGame.login("UIRoot wxLoginCallBack", Web_operation_fields.ACCOUNT_TYPE_WEIXIN, unionId);
				}
			}
		}

		private _isBind: boolean;
		/**
		 * 微信login
		 */
		public wxLogin(isbind: boolean = false) {
			this._isBind = isbind;
			let data2 = {}
			WebConfig.wxDebug && WebConfig.alert("微信注册1");
			WebConfig.wxDebug && WebConfig.alert("微信登陆");
			WebConfig.wxLogin();
		}

		/**
		 * 微信分享图文
		 */
		public wxShareImage(url: string, title: string, description: string, scene: number) {
			let data2 = {}
			WebConfig.wxDebug && WebConfig.alert("微信注册1");
			WebConfig.wxDebug && WebConfig.alert("微信分享图文");
			WebConfig.wxShareImage(url, title, description, scene - 1);
		}

		/**
		 * 分享url
		 * @param url 分享点击的地址
		 * @param title 内容
		 * @param description 描述
		 * @param icon_url 右边图标
		 * @param scene 
		 */
		public wxShareUrl(title: string, description: string, img_url: string) {
			let iconUrl = img_url || Laya.URL.formatURL(DatingPath.ui_dating + "logo/app_100.png");
			WebConfig.wxShareUrl(WebConfig.downLoadUrl, title, description, iconUrl, Web_operation_fields.WXSCENESESSION - 1);
		}

		/**
		 * 微信分享合成图 + 文
		 */
		public wxShareQrcodeImg(title: string = "", description: string = "", scene: number) {
			if (!WebConfig.info) return;
			if (!WebConfig.info.mobile) {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
					page.dataSource = 3;//绑定手机类型
				})
				return;
			}
			if (WebConfig.info && WebConfig.info.is_need_bank && !WebConfig.info.yinhangka) {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDYHK)
				return;
			}
			let data2 = {}
			WebConfig.wxDebug && WebConfig.alert("微信注册1");
			WebConfig.wxDebug && WebConfig.alert("微信分享合成图 + 文");
			WebConfig.wxShareQrcodeImg(Laya.URL.formatURL(DatingPath.ui_dating + "tuiguang/tu_tg3.jpg"), 405, 720, WebConfig.ewmUrl, 233, 461, 140, 140, title, description, scene - 1);
		}

		//更新配置密码
		public updateConfigUrl() {
			let inviteCode = WebConfig.info ? WebConfig.info.invite_code : "";
			WebConfig.gwUrl = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "gwurl")
			WebConfig.ewmbaseUrl = WebConfig.ai_url + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode="
			WebConfig.ewmUrl = WebConfig.ewmbaseUrl + inviteCode || "";
			WebConfig.downLoadUrl = WebConfig.gwUrl + "?invitecode=" + inviteCode || "";
		}

		/**
		 * 保存合成图片
		 */
		public saveQrcodeImage() {
			WebConfig.saveQrcodeImage(Laya.URL.formatURL(DatingPath.ui_dating + "tuiguang/tu_tg3.jpg"), 405, 720, WebConfig.ewmUrl, 235, 461, 140, 140)
		}

		/**
		 * 微信分享文字
		 */
		public wxShareText(txt: string, scene: number) {
			let data2 = {}
			WebConfig.wxDebug && WebConfig.alert("微信注册1");
			WebConfig.wxDebug && WebConfig.alert("微信分享文字");
			WebConfig.wxShareText(txt, scene - 1);
		}
		/**
		 * 微信登陆
		 */
		public wxOpen() {
			let data2 = {}
			WebConfig.wxDebug && WebConfig.alert("微信登陆");
			WebConfig.wxDebug && WebConfig.alert("微信登陆");
			WebConfig.wxOpen();
		}
		/**
		 * qq登陆
		 */
		public qqOpen(qqNum: number) {
			WebConfig.copyTxt(qqNum.toString());
			this._game.showTips("QQ号码已复制成功");
			let url = "mqqwpa://im/chat?chat_type=wpa&uin={0}&version=1&src_type=web&web_src=oicqzone.com";
			WebConfig.openOtherApp(StringU.substitute(url, qqNum), "QQ")
		}

		/**
		 * 复制地址
		 */
		copyUrl() {
			WebConfig.copyTxt(WebConfig.gwUrl);
			this._game.playSound(Path.music_copy)
			this._game.showTips("官方地址已复制成功,欢迎推荐给您的朋友,快来赚赚钱!");
		}


		public showIframe(url, x, y, w, h) {
			if (WebConfig.iframe) return;
			if (!Browser.onPC) {
				x = x / Browser.pixelRatio;
				y = y / Browser.pixelRatio;
				w = w / Browser.pixelRatio;
				h = h / Browser.pixelRatio;
			}

			let iframe = WebConfig.iframe = Laya.Browser.window.document.createElement('iframe');
			iframe.setAttribute('src', url);
			iframe.setAttribute('frameborder', 0);
			iframe.setAttribute('scrolling', 'no');
			iframe.setAttribute('allowfullscreen', true);
			iframe.setAttribute('name', "kefu");
			let body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
			body.appendChild(iframe);

			//适配处理
			let styleStr = "position: absolute;left: {0}px; top: {1}px; z-index: 100009;";//laya 的index是100000
			let str = StringU.substitute(styleStr, x, y);
			iframe.setAttribute('width', w);
			iframe.setAttribute('height', h);
			iframe.setAttribute('style', str);
		}

		/**
		 * 
		 * @param b true 显示
		 */
		public visibleIframe(b: boolean) {
			if (!WebConfig.iframe) return;
			let iframe = WebConfig.iframe;
			if (b) {
				if (iframe.parentNode) return;
				let body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
				body.appendChild(iframe);
			} else {
				iframe.parentNode && iframe.parentNode.removeChild(iframe);
			}
		}

		public closeIframe() {
			if (!WebConfig.iframe) return;
			let iframe = WebConfig.iframe;
			//把iframe指向空白页面，这样可以释放大部分内存。 
			iframe.src = 'about:blank';
			try {
				iframe.contentWindow.document.write('');
				iframe.contentWindow.document.clear();
			} catch (error) {

			}
			//把iframe从页面移除 
			iframe.parentNode && iframe.parentNode.removeChild(iframe);
			WebConfig.iframe = null;
		}

		public resizeIframe(x, y, w, h) {
			if (!WebConfig.iframe) return;
			if (!Browser.onPC) {
				x = x / Browser.pixelRatio;
				y = y / Browser.pixelRatio;
				w = w / Browser.pixelRatio;
				h = h / Browser.pixelRatio;
			}
			let iframe = WebConfig.iframe;
			let styleStr = "position: absolute;left: {0}px; top: {1}px; z-index: 100009";//laya 的index是100000
			let str = StringU.substitute(styleStr, x, y);
			iframe.setAttribute('width', w);
			iframe.setAttribute('height', h);
			iframe.setAttribute('style', str);
		}

		private onOptHandler(optcode: number, msg: any): void {
			if (msg.type == Operation_Fields.OPRATE_GAME) {//游戏操作错误类型
				switch (msg.reason) {
					case Operation_Fields.OPRATE_GAME_DEVICE_PUSH_INFO:             // 推送消息
						WebConfig.setNotificationInfo(msg.data);
						break;
					case Operation_Fields.OPRATE_GAME_READY_CLOSE:             //服务器准备更新关闭
						WebConfig.server_close = true;
						if (this instanceof Game) {
							this.noticeMgr.makeNotice("亲爱的玩家，为了您更好的游戏体验，我们正在更新游戏，预计本次更新需要一分钟时间，请耐心等待。对您造成的不便，我们深表歉意！");
						}
						break;
					case Operation_Fields.OPRATE_GAME_DAILY_SHARE_SUCCESS:            //每日分享成功
						this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: gamedating.page.RewardPage) => {
							page.setData(msg.data, DatingPath.ui_dating + "/qiandao/jl_4.png");
						})
						break;
					case Operation_Fields.OPRATE_GAME_FIRST_PAY_CAN_GET:     //首充可领取弹窗
						//首充
						let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
						if (!mainPlayer) return;
						let is_get_fitst_pay: boolean = mainPlayer.playerInfo.is_get_fitst_pay;
						let isOpenFirst = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen"));
						if (isOpenFirst && !is_get_fitst_pay) {
							// this._game.uiRoot.general.open(DatingPageDef.PAGE_FIRST_RECHARGE);
							this.isAlertFirstPay = true;
						}
						break;
				}
			}
		}

		//是否要弹出首充
		public isAlertFirstPay: boolean = false;

		//飘金币
		private _flyGlodMgr: FlyGlodMgr;
		public get flyGlodMgr(): FlyGlodMgr {
			if (!this._flyGlodMgr) {
				this._flyGlodMgr = new FlyGlodMgr(this._game);
			}
			return this._flyGlodMgr;
		}

		//红点管理器
		private _redPointCheckMgr: RedPointCheckMgr;
		public get redPointCheckMgr(): RedPointCheckMgr {
			if (!this._redPointCheckMgr) {
				this._redPointCheckMgr = new RedPointCheckMgr(this._game);
			}
			return this._redPointCheckMgr;
		}

		//公告管理器
		private _noticeMgr: NoticesMgr;
		public get noticeMgr(): NoticesMgr {
			if (!this._noticeMgr) {
				this._noticeMgr = new NoticesMgr(this._game);
			}
			return this._noticeMgr;
		}

		//邮件管理器
		private _mailMgr: MailMgr;
		public get mailMgr(): MailMgr {
			if (!this._mailMgr) {
				this._mailMgr = new MailMgr(this._game);
			}
			return this._mailMgr;
		}

		//报表管理器
		private _baobiaoMgr: BaoBiaoMgr;
		public get baobiaoMgr(): BaoBiaoMgr {
			if (!this._baobiaoMgr) {
				this._baobiaoMgr = new BaoBiaoMgr(this._game);
			}
			return this._baobiaoMgr;
		}

		//代理用户管理器
		private _dailiyonghuMgr: DaiLiYongHuMgr;
		public get dailiyonghuMgr(): DaiLiYongHuMgr {
			if (!this._dailiyonghuMgr) {
				this._dailiyonghuMgr = new DaiLiYongHuMgr(this._game);
			}
			return this._dailiyonghuMgr;
		}

		//房卡数据单元管理器
		private _cardRoomMgr: CardRoomMgr;
		public get cardRoomMgr(): CardRoomMgr {
			if (!this._cardRoomMgr) {
				this._cardRoomMgr = new CardRoomMgr(this._game);
			}
			return this._cardRoomMgr;
		}

		//键盘管理器
		private _jianPanMgr: JianPanMgr;
		public get jianPanMgr(): JianPanMgr {
			if (!this._jianPanMgr) {
				this._jianPanMgr = new JianPanMgr(this._game);
			}
			return this._jianPanMgr;
		}

		//取款记录管理器
		private _quKuanMgr: CunQuMgr;
		public get cunQuMgr(): CunQuMgr {
			if (!this._quKuanMgr) {
				this._quKuanMgr = new CunQuMgr(this._game);
			}
			return this._quKuanMgr;
		}

		//充值记录管理器
		private _chongZhiMgr: ChongZhiMgr;
		public get chongZhiMgr(): ChongZhiMgr {
			if (!this._chongZhiMgr) {
				this._chongZhiMgr = new ChongZhiMgr(this._game);
			}
			return this._chongZhiMgr;
		}

		//返佣管理器
		private _fanYongMgr: FanYongMgr;
		public get fanYongMgr(): FanYongMgr {
			if (!this._fanYongMgr) {
				this._fanYongMgr = new FanYongMgr(this._game);
			}
			return this._fanYongMgr;
		}

		//排行榜管理器
		private _topMgr: TopMgr;
		public get topMgr(): TopMgr {
			if (!this._topMgr) {
				this._topMgr = new TopMgr(this._game);
			}
			return this._topMgr;
		}

		//祈福管理器
		private _qifuMgr: QiFuMgr;
		public get qifuMgr(): QiFuMgr {
			if (!this._qifuMgr) {
				this._qifuMgr = new QiFuMgr(this._game);
			}
			return this._qifuMgr;
		}

		//vip管理器
		private _vipMgr: VipMgr;
		public get vipMgr(): VipMgr {
			if (!this._vipMgr) {
				this._vipMgr = new VipMgr(this._game);
			}
			return this._vipMgr;
		}

		//验证码管理器
		private _codeMgr: CodeMgr;
		public get codeMgr(): CodeMgr {
			if (!this._codeMgr) {
				this._codeMgr = new CodeMgr(this._game);
			}
			return this._codeMgr;
		}

		//是否首次登陆游戏
		private _firstAlert: boolean = false;
		public get firstAlert() {
			return this._firstAlert;
		}
		//弹框标志位
		private _alertPageIndex: number = -1;
		//是否分享回来
		private _isShareBack: boolean = false;
		public get isShareBack() {
			return this._isShareBack;
		}
		//是否弹起过月入百万气泡框
		public isisAlertYRBW: boolean = false;
		//是否弹起过官网气泡框
		public isAlertYGW: boolean = false;
		public isCanAlertYGW: boolean = false;
		//是否弹起过活动气泡框
		public isAlertYHD: boolean = false;
		public isCanAlertYHD: boolean = false;
		//是否弹起过余额宝气泡框
		public isAlertYEB: boolean = false;
		static QIPAOKUANGHD: string = "qipaokuanghd";
		static QIPAOKUANGGW: string = "qipaokuanggw";
		static QIPAOKUANGYRBW: string = "qipaokuangyrbw";
		static QIPAOKUANGYEB: string = "qipaokuangyeb";
		//是否弹起过游客登录提示
		public isAlertVisitorTip: boolean = false;
		//获取弹窗数据
		private _curData: any[] = null;
		public get popUpData() {
			if (!this._curData) {
				this._curData = [];
			} else {
				return this._curData;
			}

			let keys = [
				"bdsq",
				"xsyd",
				"schd",
				"rmhd",
				"yxgg"]
			let count = 0;
			for (let index = 0; index < keys.length; index++) {
				let key = keys[index];
				let data = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEPOPCONFIG_C, key);
				if (!data) continue;
				if (this._curData.indexOf(data) != -1) continue;
				this._curData[this._curData.length] = data;
				count++;
			}

			count > 0 && (this._curData = this._curData.sort((a: any, b: any) => {
				if (!a || !b) return 0;
				return a.sort - b.sort;
			}));


			return this._curData;
		}
		//弹窗逻辑相关方法
		private _curKey: string;
		get curPageKey() {
			return this._curKey;
		}
		public firstAlertPage(): void {
			if (!this._firstAlert) {
				this._alertPageIndex = this._alertPageIndex + 1;
				if (!this.popUpData) return;
				let popKeyData: any = this.popUpData[this._alertPageIndex];
				if (!popKeyData) {
					this._alertPageIndex = -1;
					this._firstAlert = true;
					return;
				}
				let popkey = popKeyData.popkey
				this._curKey = DatingPageDef.LOGIN_POPUP[popkey];
				if (this._curKey) {
					//正常页面弹窗
					if (popKeyData.isopen) {
						if (popkey == "bdsq") {
							//绑定送金
							let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
							if (!mainPlayer) return;
							let mobile: string = mainPlayer.playerInfo.mobile;
							if (mobile) {
								this.firstAlertPage();
								return;
							}
						} else if (popkey == "schd") {
							//首充
							let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
							if (!mainPlayer) return;
							let is_get_fitst_pay: boolean = mainPlayer.playerInfo.is_get_fitst_pay;
							let isOpenFirst = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen"));
							if (!isOpenFirst || is_get_fitst_pay) {
								this.firstAlertPage();
								return;
							}
						}
						this._game.uiRoot.general.open(this._curKey, null, (page) => {
							if (!page.dataSource)
								this._game.datingGame.firstAlertPage();
						});
					} else {
						this.firstAlertPage();
					}
				} else {
					if (popkey) {
						if (popkey == "xsyd") {
							//新手引导 暂时没有
							this.firstAlertPage();
						}
					} else {
						this._alertPageIndex = -1;
						this._firstAlert = true;
					}

				}
			}
		}

		private onKeyDown(e: LEvent): void {
			if (!Browser.onPC) return;
			if (!isDebug) return;
			if (e.keyCode == Laya.Keyboard.ENTER) {
				let page = this._game.uiRoot.top.getPage(DatingPageDef.PAGE_GM);
				if (!page)
					this._game.uiRoot.top.open(DatingPageDef.PAGE_GM);
			}
			else if (e.keyCode == Laya.Keyboard.Q) {
				this._game.sceneGame.sceneObjectMgr.cancleMathch();
			}
			else if (e.keyCode == Laya.Keyboard.W) {
				this._game.sceneGame.sceneObjectMgr.leaveStory(true);
			}
		}

		private onKeyUp(e: LEvent): void {
			if (!Browser.onPC) return;
		}

		//打开登陆界面
		public openLoginPage() {
			this._game.uiRoot.closeAll([DatingPageDef.PAGE_LOGIN, DatingPageDef.PAGE_TIPS]);
			let isOpened = this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN);
			!isOpened && this._game.uiRoot.HUD.open(DatingPageDef.PAGE_LOGIN, (page) => {
				this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_LOGIN]);
			});
		}

		//安卓游戏退出二次弹窗确认
		public quitGame() {
			if (WebConfig.onAndroid) {
				let quitPage: any = this._game.uiRoot.general.getPage(DatingPageDef.PAGE_QUIT_TIPS);
				if (quitPage) {
					//直接退出游戏
					WebConfig.closeApp();
				} else {
					let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
					if (!mainPlayer) return;
					let playerInfo = mainPlayer.playerInfo;
					if (!playerInfo) return;
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QUIT_TIPS);
				}
			}

		}

		/**进入新地图 */
		private onIntoNewMap(info: any): void {
			if (typeof info == "string") {
				//出游戏
				//游戏退出计数
				this._exitGmeTimes++;
				this.calculateDiffMoney(true);
				this._game.uiRoot.top.closeAll([DatingPageDef.PAGE_GONGGAO, DatingPageDef.PAGE_TIP]);
				this._game.uiRoot.general.closeAll();
				this._game.uiRoot.HUD.closeAll();
				let pageDef = getPageDef(info);
				if (pageDef && !pageDef["__enterMapLv"] && !pageDef["__roomcard"]) {
					this._game.uiRoot.HUD.open(info + "1", (page) => {
						page.dataSource = WebConfig.hudgametype || 0;
						this._game.uiRoot.HUD.closeAll([info + "1"])
					}, (page) => {
						// 场次返回大厅回调
						if (this._game.sceneObjectMgr.mainPlayer && !this._game.sceneGame.inScene) {
							this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
								this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
							}, null, 0);
						}
					});
				}
				else {
					this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
						this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
					});
				}


			} else {
				this._game.sceneObjectMgr.mainPlayer.setEnterGameInfo(info.id);
				//进游戏
				this._game.uiRoot.HUD.close(DatingPageDef.PAGE_HUD);
				this.calculateDiffMoney(false);
			}
			this._game.setIsLockGame(!this._isLogined, true, "UIRoot.onIntoNewMap");
		}

		//计算游戏前后差值
		private calculateDiffMoney(isGet: boolean = true): void {
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			if (isGet) {
				//取游戏后的钱值相差值
				this._diffMoney = playerInfo.money - Number(localGetItem("singleGameGetMonney"));
			} else {
				//取当前的钱
				localSetItem("singleGameGetMonney", playerInfo.money.toString());
			}
		}

		onUpdate(diff: number): void {
			if (!this._game.sceneGame.inScene) {
				this._mailMgr && this._mailMgr.update(diff);
				this._flyGlodMgr && this._flyGlodMgr.update(diff);
				this._redPointCheckMgr && this._redPointCheckMgr.update(diff);
			}
			if (this._checkVesionTime < 0) {
				this._checkVesionTime = 60000;
				this.checkClientVesion();
			} else {
				this._checkVesionTime -= diff;
			}
			if (this._checkPingTime < 0) {
				this._checkPingTime = 30000;
				this._game.network.call_ping_pong();
				if (this._game.sceneObjectMgr && this._game.sceneObjectMgr.mainPlayer) {
					let hs: string[] = this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg.split('.');
					let hi = parseInt(hs[hs.length - 1]);
					if (hi >= 16 && hi <= 21) {
						let qfEndTime = this._game.sceneObjectMgr.mainPlayer.GetQiFuEndTime(hi - 16);
						if (!qfEndTime || qfEndTime <= this._game.sync.serverTimeBys)
							this._game.network.call_set_role_info(0, hs[0]);
					}
				}
			} else {
				this._checkPingTime -= diff;
			}
		}

		private _vesion_byteArray: ByteArray;
		private _checkPingTime: number = 0;
		private _checkVesionTime: number = 0;
		private _checkLoack: boolean;
		public checkClientVesion(isShowTips?: boolean) {
			if (isDebug) return;
			if (this._game.sceneGame.inScene) return;
			if (!this._game.isLoadComplete) return;
			if (isShowTips) {
				if (this._checkLoack) {
					this._game.showTips("操作太频繁,请稍后重试!")
					return;
				}
				this._checkLoack = true;
			}

			if ((WebConfig.onAndroid || WebConfig.onIOS) && !WebConfig.after && WebConfig.info && WebConfig.appVersion) {
				let app_version = WebConfig.onAndroid ? WebConfig.info.app_android : WebConfig.info.app_ios;
				if (app_version && WebConfig.appVersion != app_version) {
					let newbb = 0, oldbb = 0;
					let ch: boolean;
					try {
						newbb = parseInt(app_version.toString().replace(/\./g, ""));
						oldbb = parseInt(WebConfig.appVersion.toString().replace(/\./g, ""));
					} catch (error) {
						ch = true;
					}
					if (ch || newbb > oldbb) {
						this._game.alert(StringU.substitute("检测到App有最新版本{0}，当前版本{1}，是否需要重新下载更新?", app_version, WebConfig.appVersion), () => {
							WebConfig.gwUrl = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "gwurl") || WebConfig.gwconf[WebConfig.platform];
							//单入口  mt
							let download_url = WebConfig.isSingleEnter ? (WebConfig.gwUrl + "/mt") : WebConfig.gwUrl;
							WebConfig.openUrl(download_url + "?isupdate=true");
						}, (isclose) => {
							!isclose && (WebConfig.after = true);
						}, false, DatingPath.ui_dating_tongyong + "btn_liji.png", DatingPath.ui_dating_tongyong + "btn_shaohou.png")

						return;
					}
				}
			}

			if (WebConfig.yihou) return;
			Laya.loader.load("version_h5_min.bin?v=" + MathU.randomRange(1, 1000000), Handler.create(this, (data: any) => {
				this._checkLoack = false;
				if (!data) return;
				if (!this._vesion_byteArray) this._vesion_byteArray = new ByteArray();
				this._vesion_byteArray.clear();
				this._vesion_byteArray.buffer = data;
				let conf_url_value: any = StringU.readZlibData(this._vesion_byteArray);
				let arr = conf_url_value.split("\n");
				if (!arr || arr.length < 2) return;
				let client_version = arr[1].replace("\r", "");
				let defaultVesion = Vesion["_defaultVesion"];
				if (client_version && defaultVesion && defaultVesion != client_version) {
					let newbb = 0, oldbb = 0;
					let ch: boolean;
					try {
						newbb = parseInt(client_version.toString().replace(/\./g, ""));
						oldbb = parseInt(defaultVesion.toString().replace(/\./g, ""));
					} catch (error) {
						ch = true;
					}
					if (ch || newbb > oldbb) {
						this._game.alert(StringU.substitute("检测到有最新版本{0}，当前版本{1}，是否需要重新加载更新?", client_version, defaultVesion), () => {
							WebConfig.openHelloImg();
							location.reload(true);
						}, (isclose) => {
							!isclose && (WebConfig.yihou = true);
						}, false, DatingPath.ui_dating_tongyong + "btn_gengxin.png", DatingPath.ui_dating_tongyong + "btn_yihou.png");
						return;
					}
					else if (newbb < oldbb) {
						this._game.alert("检测到当前版本有变更，请重新加载！！！", () => {
							WebConfig.openHelloImg();
							location.reload(true);
						}, (isclose) => {
							!isclose && (WebConfig.yihou = true);
						}, false, DatingPath.ui_dating_tongyong + "btn_gengxin.png", DatingPath.ui_dating_tongyong + "btn_yihou.png");
						return;
					}
				}

				isShowTips && this._game.showTips("当前已经是最新版本");
				this._checkLoack = false;
			}))
		}

		clearMgr() {
			this._hudTabScrollData = null;
			if (this._redPointCheckMgr) {
				this._redPointCheckMgr.clear();
				this._redPointCheckMgr = null;
			}
			if (this._baobiaoMgr) {
				this._baobiaoMgr.clear(true);
				this._baobiaoMgr = null;
			}
			if (this._cardRoomMgr) {
				this._cardRoomMgr.clear(true);
				this._cardRoomMgr = null;
			}
			if (this._quKuanMgr) {
				this._quKuanMgr.clear(true);
				this._quKuanMgr = null;
			}
			if (this._chongZhiMgr) {
				this._chongZhiMgr.clear(true);
				this._chongZhiMgr = null;
			}
			if (this._topMgr) {
				this._topMgr.clear(true);
				this._topMgr = null;
			}
			if (this._fanYongMgr) {
				this._fanYongMgr.clear(true);
				this._fanYongMgr = null;
			}

			if (this._mailMgr) {
				this._mailMgr.clear(true);
				this._mailMgr = null;
			}
			if (this._flyGlodMgr) {
				this._flyGlodMgr.clear(true);
				this._flyGlodMgr = null;
			}

			if (this._noticeMgr) {
				this._noticeMgr.clear(true);
				this._noticeMgr = null;
			}

			if (this._jianPanMgr) {
				this._jianPanMgr.clear(true);
				this._jianPanMgr = null;
			}

			if (this._qifuMgr) {
				this._qifuMgr.clear(true);
				this._qifuMgr = null;
			}

			if (this._vipMgr) {
				this._vipMgr.clear(true);
				this._vipMgr = null;
			}

			if (this._codeMgr) {
				this._codeMgr.clear(true);
				this._codeMgr = null;
			}
		}
	}

	export class HudTabScrollData {
		tabIndex: number;
		value: number;
	}

}