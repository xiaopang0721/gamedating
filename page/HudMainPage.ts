/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.DaTingUI;
		get viewUI() {
			return this._viewUI;
		}
		public static PAGE_ID: Array<any> = [];
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "datinglunbotu.atlas",
				DatingPath.sk_dating + "DZ_baijiale.png",
				DatingPath.sk_dating + "DZ_bairendezhou.png",
				DatingPath.sk_dating + "DZ_benchibaoma.png",
				DatingPath.sk_dating + "DZ_blackjack.png",
				DatingPath.sk_dating + "DZ_dezhou.png",
				DatingPath.sk_dating + "DZ_brniuniu.png",
				DatingPath.sk_dating + "DZ_buyu.png",
				DatingPath.sk_dating + "DZ_rddz.png",
				DatingPath.sk_dating + "DZ_ebgang.png",
				DatingPath.sk_dating + "DZ_honghei.png",
				DatingPath.sk_dating + "DZ_longhu.png",
				DatingPath.sk_dating + "DZ_niuniu.png",
				DatingPath.sk_dating + "DZ_paijiu.png",
				DatingPath.sk_dating + "DZ_toubao.png",
				DatingPath.sk_dating + "DZ_sangong.png",
				DatingPath.sk_dating + "DZ_rshisanshui.png",
				DatingPath.sk_dating + "DZ_shuiguoji.png",
				DatingPath.sk_dating + "DZ_tbniuniu.png",
				DatingPath.sk_dating + "DZ_zjh.png",
				DatingPath.sk_dating + "DZ_rpaodekuai.png",
				DatingPath.sk_dating + "DZ_zoo.png",
				DatingPath.sk_dating + "DZ_rniuniu.png",

				Path.ui_atlas_effect + "bairen.atlas",
				Path.ui_atlas_effect + "btn_fx.atlas",
				Path.ui_atlas_effect + "btn_huodong.atlas",
				Path.ui_atlas_effect + "btn_qiandao.atlas",
				Path.ui_atlas_effect + "btn_shouchong.atlas",
				Path.ui_atlas_effect + "btn_tuiguang.atlas",
				Path.ui_atlas_effect + "btn_yeb.atlas",
				Path.ui_atlas_effect + "btn_zhuanpan.atlas",
				Path.ui_atlas_effect + "btn_qf.atlas",
				Path.ui_atlas_effect + "coin.atlas",
				Path.ui_atlas_effect + "flycoin.atlas",
				Path.ui_atlas_effect + "jj.atlas",
				Path.ui_atlas_effect + "loading.atlas",
				Path.ui_atlas_effect + "qipaiduizhan.atlas",
				Path.ui_atlas_effect + "shuzi.atlas",
				Path.ui_atlas_effect + "update.atlas",
			];
			this._isNeedDuang = false;
			this._delta = 100;
		}

		// private _banner: Banner;
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.DaTingUI");
			this.addChild(this._viewUI);
			this._viewUI.box.mouseThrough = true;
			this._adPerWidth = this._viewUI.list_ad.width;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			HudMainPage.PAGE_ID = [DatingPageDef.PAGE_VIP, DatingPageDef.PAGE_HUD_SHARE, DatingPageDef.PAGE_BINDMONEY, DatingPageDef.PAGE_VIP_UP, DatingPageDef.PAGE_FIRST_RECHARGE];
			//官网二维码
			QRCodeSprite.createQRCodeBase64(WebConfig.downLoadUrl, this._viewUI.img_gw.width, this._viewUI.img_gw.height, Handler.create(this, (base64) => {
				this._viewUI.img_gw.skin = base64;
			}))
			//官网链接
			this._viewUI.txt_gw_url.text = WebConfig.gwUrl;
			this._viewUI.img_copy_gw.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this.initQiPaoUI();
			this._isShowBtnEffect && this.initBtnAnimationFrame();
			this._viewUI.list_btns.hScrollBarSkin = "";
			this._viewUI.list_btns.scrollBar.elasticDistance = 100;
			this._viewUI.list_btns.itemRender = this.createChildren("dating.component.HudOne_TUI", GameItemRender);
			this._viewUI.list_btns.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_btns.spaceX = -50;
			this._viewUI.list_btns.spaceY = 0;
			this._viewUI.list_btns.scrollTo(WebConfig.scrollBarValue || 0);

			this._viewUI.list_ad.hScrollBarSkin = '';
			this._viewUI.list_ad.itemRender = this.createChildren("dating.component.HudAd_TUI", AdItemRender);
			this._viewUI.list_ad.renderHandler = new Handler(this, this.adRenderHandler);
			this._viewUI.list_ad.scrollBar.rollRatio = 0;
			this._viewUI.list_ad.on(LEvent.MOUSE_DOWN, this, this.onAdMouseHandler);
			this._viewUI.list_ad.on(LEvent.MOUSE_MOVE, this, this.onAdMouseHandler);
			this._viewUI.list_ad.on(LEvent.MOUSE_UP, this, this.onAdMouseHandler);
			this._viewUI.on(LEvent.MOUSE_UP, this, this.onViewMouseHandler);
			this._viewUI.on(LEvent.MOUSE_OUT, this, this.onViewMouseHandler);
			// 标签按钮
			this._viewUI.tab.selectHandler = new Handler(this, this.onSelectTab);
			this._viewUI.tab.selectedIndex = 0;
			//分享动态
			this._game.sceneGame.scaleEffectFactory.add(this._viewUI.btn_fenxiang);

			this._viewUI.btn_xiaoxi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_gren.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_remen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yuebao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_qukuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_bangding.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_daili.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_fenxiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_zhuanpan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_vip.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_shouchong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_guanwang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_gw1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_hd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_yeb.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_yrbw.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_enterRoom.on(LEvent.CLICK, this, this.enTerClick);



			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onSelectTab);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.onFreeStyle);

			this.onUpdatePlayerInfo(true);

			this._game.playMusic(Path.music_bg);

			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_xiaoxi, this, this.checkout, new Point(55, -10), 1, null, [this._viewUI.btn_xiaoxi]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_bangding, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_bangding]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_qiandao, this, this.checkout, new Point(90, -15), 1, null, [this._viewUI.btn_qiandao]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_zhuanpan, this, this.checkout, new Point(90, -10), 1, null, [this._viewUI.btn_zhuanpan]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_daili, this, this.checkout, new Point(90, -10), 1, null, [this._viewUI.btn_daili]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, new Point(60, -18), 1, null, [this._viewUI.btn_vip]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_shouchong, this, this.checkout, new Point(80, -15), 1, null, [this._viewUI.btn_shouchong]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_fenxiang, this, this.checkout, new Point(50, -15), 1, null, [this._viewUI.btn_fenxiang]);
			//hud弹窗逻辑
			this.alertPage();
			//气泡框逻辑
			this.showQiPaoKuang();
			this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);
		}

		/**按钮点击事件 带缓动 */
		protected onBtnClickWithTween(...agrs): void {
			super.onBtnClickWithTween.apply(this, agrs);
			let e = agrs[0];
			if (e instanceof LEvent && e.currentTarget == this._viewUI.img_copy_gw) {
				e.stopPropagation();
			}
		}

		private _qifuTypeImgUrl: string;
		private qifuFly(dataSource: any): void {
			if (!dataSource) return;
			this._game.qifuMgr.showFlayAni(this._viewUI.btn_gren, this._viewUI, dataSource, (dataSource) => {
				let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
				if (!mainPlayer) return;
				let playerInfo = mainPlayer.playerInfo;
				if (!playerInfo) return;
				this._viewUI.btn_gren.skin = this._game.datingGame.getHeadUrl(playerInfo.headimg, 1);
				//祈福成功 头像上就有动画
				let qf_id = dataSource.qf_id;
				this._qifuTypeImgUrl = this._game.datingGame.getQFTypeImg(qf_id);
				if (qf_id) {
					this._viewUI.qifu_type.visible = true;
					this._viewUI.qifu_type.skin = this._qifuTypeImgUrl;
					this.playTween(this._viewUI.qifu_type, qf_id);
				}
			}, true);
		}


		//========================按钮特效 start================
		private _isShowBtnEffect: boolean = true;
		//首充
		private _btnSCEffect: AnimationFrame;
		//余额宝
		private _btnYEBEffect: AnimationFrame;
		private _btnYEBEffectQiPao: AnimationFrame;
		//活动
		private _btnHDEffect: AnimationFrame;
		private _btnHDEffectQiPao: AnimationFrame;
		//签到
		private _btnQDEffect: AnimationFrame;
		//推广
		private _btnTGEffect: AnimationFrame;
		private _btnTGEffectQiPao: AnimationFrame;
		//转盘
		private _btnZPEffect: AnimationFrame;
		//分享
		private _btnQFEffect: AnimationFrame;
		//初始化按钮特效
		private initBtnAnimationFrame(): void {
			//首充
			if (!this._btnSCEffect) {
				this._btnSCEffect = this.initBtnAnimationFrameTool(this._btnSCEffect, "btn_shouchong", 8, this._viewUI.btn_shouchong);
			}
			//余额宝
			if (!this._btnYEBEffect) {
				this._btnYEBEffect = this.initBtnAnimationFrameTool(this._btnYEBEffect, "btn_yeb", 6, this._viewUI.btn_yuebao);
			}
			//余额宝气泡框
			if (!this._btnYEBEffectQiPao) {
				this._btnYEBEffectQiPao = this.initBtnAnimationFrameTool(this._btnYEBEffectQiPao, "btn_yeb", 6, this._viewUI.btn_yeb);
			}
			//活动
			if (!this._btnHDEffect) {
				this._btnHDEffect = this.initBtnAnimationFrameTool(this._btnHDEffect, "btn_huodong", 8, this._viewUI.btn_remen);
			}
			//活动气泡框
			if (!this._btnHDEffectQiPao) {
				this._btnHDEffectQiPao = this.initBtnAnimationFrameTool(this._btnHDEffectQiPao, "btn_huodong", 8, this._viewUI.btn_hd1);
			}
			//签到
			if (!this._btnQDEffect) {
				this._btnQDEffect = this.initBtnAnimationFrameTool(this._btnQDEffect, "btn_qiandao", 14, this._viewUI.btn_qiandao);
			}
			//推广
			if (!this._btnTGEffect) {
				this._btnTGEffect = this.initBtnAnimationFrameTool(this._btnTGEffect, "btn_tuiguang", 8, this._viewUI.btn_daili);
			}
			//推广气泡框
			if (!this._btnTGEffectQiPao) {
				this._btnTGEffectQiPao = this.initBtnAnimationFrameTool(this._btnTGEffectQiPao, "btn_tuiguang", 8, this._viewUI.btn_yrbw);
			}
			//转盘
			if (!this._btnZPEffect) {
				this._btnZPEffect = this.initBtnAnimationFrameTool(this._btnZPEffect, "btn_zhuanpan", 8, this._viewUI.btn_zhuanpan);
			}
			//祈福
			if (!this._btnQFEffect) {
				this._btnQFEffect = this.initBtnAnimationFrameTool(this._btnQFEffect, "btn_qf", 12, this._viewUI.btn_qifu);
			}

		}
		//绘制按钮特效
		updateBtnAnimationFrame(): void {
			//按钮效果			
			this.updateBtnAnimationFrameTool(this._btnSCEffect);
			this.updateBtnAnimationFrameTool(this._btnYEBEffect);
			this.updateBtnAnimationFrameTool(this._btnHDEffect);
			this.updateBtnAnimationFrameTool(this._btnQDEffect);
			this.updateBtnAnimationFrameTool(this._btnTGEffect);
			this.updateBtnAnimationFrameTool(this._btnZPEffect);
			this.updateBtnAnimationFrameTool(this._btnQFEffect);
			this.updateBtnAnimationFrameTool(this._btnTGEffectQiPao);
			this.updateBtnAnimationFrameTool(this._btnHDEffectQiPao);
			this.updateBtnAnimationFrameTool(this._btnYEBEffectQiPao);
		}
		//清楚按钮特效
		clearBtnAnimationFrame(): void {
			this.clearBtnAnimationFrameTool(this._btnSCEffect);
			this.clearBtnAnimationFrameTool(this._btnYEBEffect);
			this.clearBtnAnimationFrameTool(this._btnHDEffect);
			this.clearBtnAnimationFrameTool(this._btnQDEffect);
			this.clearBtnAnimationFrameTool(this._btnTGEffect);
			this.clearBtnAnimationFrameTool(this._btnZPEffect);
			this.clearBtnAnimationFrameTool(this._btnQFEffect);
			this.clearBtnAnimationFrameTool(this._btnTGEffectQiPao);
			this.clearBtnAnimationFrameTool(this._btnHDEffectQiPao);
			this.clearBtnAnimationFrameTool(this._btnYEBEffectQiPao);
		}
		initBtnAnimationFrameTool(btnEffect: AnimationFrame, source: string, frameCount: number, btnUI: Box): AnimationFrame {
			if (!btnEffect) {
				btnEffect = new AnimationFrame({
					source: source,
					fileName: '',
					interval: 6,
					frameCount: frameCount,
					start: 10000
				});
				btnUI.removeChildAt(0);
				btnUI.addChild(btnEffect);
				if (source == "btn_shouchong") {
					btnEffect.pos(0, -11);
				}
				else {
					btnEffect.pos(0, 0);
				}
				btnEffect.setMouseEnabled(true);
			}
			btnEffect.play(true);
			return btnEffect;
		}
		updateBtnAnimationFrameTool(btnEffect: AnimationFrame): void {
			if (btnEffect) {
				btnEffect.onDraw();
			}
		}
		clearBtnAnimationFrameTool(btnEffect: AnimationFrame): void {
			if (btnEffect) {
				btnEffect.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				btnEffect.destroy();
				btnEffect = null;
			}
		}
		//========================按钮特效 end================
		public close(): void {
			if (this._viewUI) {
				this._isFromRoom = false;
				this._viewUI.list_btns.renderHandler.recover();
				this._viewUI.list_btns.renderHandler = null;
				this._game.stopMusic();
				Laya.Tween.clearAll(this);
				this.clearTweens();
				this._viewUI.tab.selectHandler.recover();
				this._viewUI.tab.selectHandler = null;
				this._viewUI.list_ad.off(LEvent.MOUSE_DOWN, this, this.onAdMouseHandler);
				this._viewUI.list_ad.off(LEvent.MOUSE_MOVE, this, this.onAdMouseHandler);
				this._viewUI.list_ad.off(LEvent.MOUSE_UP, this, this.onAdMouseHandler);
				this._viewUI.off(LEvent.MOUSE_UP, this, this.onViewMouseHandler);
				this._viewUI.off(LEvent.MOUSE_OUT, this, this.onViewMouseHandler);
				this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onSelectTab);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.onFreeStyle);
				if (this._clip_money) {
					this._clip_money.removeSelf();
					this._clip_money.destroy();
					this._clip_money = null;
				}
				if (this._clip_vip) {
					this._clip_vip.removeSelf();
					this._clip_vip.destroy();
					this._clip_vip = null;
				}
				this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_fenxiang);
				this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_qifu);
				this._box_btn_top = null;
				this._box_btn_bottom = null;
				this._isShowBtnEffect && this.clearBtnAnimationFrame();
			}
			super.close();
		}

		private checkout(btn: any) {
			if (!WebConfig.info) return;
			switch (btn) {
				case this._viewUI.btn_xiaoxi:
					return this._game.datingGame.mailMgr.isShowRed || WebConfig.info.is_new_bulletin;
				case this._viewUI.btn_bangding:
					return WebConfig.info.isguest;
				case this._viewUI.btn_qiandao:
					return !WebConfig.info.is_can_qd;
				case this._viewUI.btn_zhuanpan:
					return WebConfig.info.is_can_lp;
				case this._viewUI.btn_daili:
					return WebConfig.info.is_can_qmdl_lq;
				case this._viewUI.btn_vip:
					return this._game.datingGame.vipMgr.checkVipReceivedIndex() != 0;
				case this._viewUI.btn_shouchong:
					return WebConfig.info.is_can_first_get;
				case this._viewUI.btn_fenxiang:
					return !WebConfig.info.is_shared;
			}
		}

		private _clip_money: ClipUtil;
		private _clip_vip: ClipUtil;
		private onUpdatePlayerInfo(first: boolean = false) {
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._viewUI.txt_id.text = playerInfo.nickname;
			this._viewUI.btn_bangding.visible = !playerInfo.mobile && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney") > 0;
			if (!this._clip_money) {
				this._clip_money = new ClipUtil(ClipUtil.MONEY_WHITE);
				this._clip_money.scale(0.9, 0.9);
				this._clip_money.x = this._viewUI.clip_money.x;
				this._clip_money.y = this._viewUI.clip_money.y;
				this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
				this._viewUI.clip_money.removeSelf();
			}
			if (!this._clip_vip) {
				this._clip_vip = new ClipUtil(ClipUtil.DATING_VIP_FONT);
				this._clip_vip.centerX = this._viewUI.clip_vip.centerX - 10;
				this._clip_vip.centerY = this._viewUI.clip_vip.centerY;
				this._viewUI.clip_vip.parent && this._viewUI.clip_vip.parent.addChild(this._clip_vip);
				this._viewUI.clip_vip.removeSelf();
			}
			this._clip_vip.setText(playerInfo.vip_level, true);

			this._clip_money.setText(playerInfo.money, true, false, playerInfo.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);

			this._viewUI.img_txk.skin = this._game.datingGame.getTouXiangKuangUrl(playerInfo.headKuang, 1);
			this._viewUI.btn_gren.skin = this._game.datingGame.getHeadUrl(playerInfo.headimg, 1);

			if (first)
				this.onFreeStyle();

			Laya.timer.frameOnce(1, this, this.updatePos);
		}

		private _diff: number = 500;
		private _timeList: { [key: number]: number } = {};
		private _firstList: { [key: number]: number } = {};
		private playTween(img: LImage, index: number, isTween?: boolean) {
			if (!img) return;
			if (!this._timeList[index]) {
				this._timeList[index] = 0;
			}
			if (this._timeList[index] >= 2500) {
				this._timeList[index] = 0;
				this._firstList[index] = 0;
				img.visible = false;
				return;
			}
			Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
			this._timeList[index] += this._diff;
			this._firstList[index] = 1;
		}

		//获取广告轮播数据
		private _curData: any[] = null;
		private guanggaoLunBoData() {
			this._curData = [];
			let keys = [
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_DAILI,
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_FENXIANG,
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_GUANWANG,
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_VIP,
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_YUEBAO,
				Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_ZHUANPAN
			]
			let count = 0;
			for (let index = 0; index < keys.length; index++) {
				let key = keys[index];
				let ggData: any = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GUANGGAOLUNBO_C, key);
				if (!ggData || ggData.status != 1) continue;
				if (this._curData.indexOf(ggData) != -1) continue;
				this._curData[this._curData.length] = ggData;
				count++;
			}
			count > 0 && (this._curData = this._curData.sort((a: any, b: any) => {
				if (!a || !b) return 0;
				return a.sort - b.sort;
			}));
			//最后一个要推第一位重复，以便轮换
			if (this._curData.length > 0) this._curData.push(this._curData[0]);
			//没有数据就默认配置
			if (this._curData.length <= 0) this._curData = [
				{ sort: 1, status: 1, title: "代理", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_DAILI },
				{ sort: 2, status: 1, title: "分享", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_FENXIANG },
				{ sort: 3, status: 1, title: "官网", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_GUANWANG },
				{ sort: 4, status: 1, title: "VIP", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_VIP },
				{ sort: 5, status: 1, title: "余额宝", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_YUEBAO },
				{ sort: 6, status: 1, title: "转盘", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_ZHUANPAN },
				{ sort: 1, status: 1, title: "代理", type: Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_DAILI }]
			return this._curData;
		}

		private onFreeStyle() {
			if (!WebConfig.info) return;
			this._viewUI.btn_bangding.visible = !WebConfig.info.mobile && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney") > 0;
			this._viewUI.list_ad.dataSource = this.guanggaoLunBoData();//['daili', 'fenxiang', 'guanwang', 'vip', 'yuebao', 'zhuanpan', 'daili'];
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._game.datingGame.updateConfigUrl();
			//官网二维码
			QRCodeSprite.createQRCodeBase64(WebConfig.downLoadUrl, this._viewUI.img_gw.width, this._viewUI.img_gw.height, Handler.create(this, (base64) => {
				this._viewUI.img_gw.skin = base64;
			}))
			//官网链接
			this._viewUI.txt_gw_url.text = WebConfig.gwUrl;
		}

		protected layout(): void {
			super.layout();
			if (this._viewUI) {
				this._viewUI.list_btns.width = this._clientRealWidth;
				//因为异步调用，resize事件抛出后，当前帧还未全部改掉整体页面布局，只能延迟一帧去调用
				Laya.timer.frameOnce(1, this, this.updatePos);
			}
		}

		private _box_btn_top: { [key: number]: Button } = {};
		private _box_btn_bottom: { [key: number]: Button } = {};
		updatePos() {
			if (this._viewUI.list_btns.dataSource)
				this._viewUI.list_btns.scrollBar.max = this._listBarMax;
			this._viewUI.list_btns.width = this._clientWidth - 250;
			if (this._game.isFullScreen) {
				this._viewUI.box_btn_top_left.left = 56;
				this._viewUI.box_btn_top.right = 25;
				this._viewUI.box_bottomLeft.left = 56;
				this._viewUI.box_bottomRight.right = 56 - 11;
				this._viewUI.btn_right.right = 150;
				this._viewUI.box_tabs.right = -35;
			} else {
				this._viewUI.box_btn_top_left.left = 0;
				this._viewUI.box_btn_top.right = 0;
				this._viewUI.box_bottomLeft.left = 17;
				this._viewUI.box_bottomRight.right = 11;
				this._viewUI.btn_right.right = 150;
				this._viewUI.box_tabs.right = -35;
			}
			this.judgeBtnShow();
			this.updateFenXiangPos();
			let childNum1 = this._viewUI.box_btn_top.numChildren;
			let total_x1: number = 410;
			for (let i = 0; i < childNum1; i++) {
				let item;
				if (!this._box_btn_top[i])//缓存下
				{
					this._box_btn_top[i] = this._viewUI.box_btn_top.getChildByName("item" + i) as Laya.Button;
				}
				item = this._box_btn_top[i];
				if (!item || !item.visible) continue;
				item.x = total_x1;
				total_x1 -= item.width + 20;
			}
			//气泡框位置对齐  位置挪动之后得到下一帧之后才会生效在去调整位置
			Laya.timer.frameOnce(1, this, this.initQiPaoPos);
		}

		//需要隐藏的判断按钮
		private judgeBtnShow(): void {
			//首充
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let is_get_fitst_pay = mainPlayer.playerInfo.is_get_fitst_pay;
			let isOpenFirst = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen"));
			if (isOpenFirst && !is_get_fitst_pay) {
				this._viewUI.btn_shouchong.visible = true;
				this._viewUI.btn_qifu.visible = false;
			} else {
				this._viewUI.btn_shouchong.visible = false;
				this._viewUI.btn_qifu.visible = true;
			}
		}

		//重设分享的位置
		private updateFenXiangPos(): void {
			//分享位置重设
			this._viewUI.btn_qifu.x = this._viewUI.btn_shouchong.x;
			if (this._viewUI.btn_qifu.visible) {
				this._game.sceneGame.scaleEffectFactory.add(this._viewUI.btn_qifu);
			} else {
				this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_qifu);
			}
		}

		private enTerClick(): void {
			this.saveListStatus();
			this._game.uiRoot.general.open(DatingPageDef.PAGE_JOIN_CARD_ROOM);
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_xiaoxi://消息
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XIAOXI)
					break;
				case this._viewUI.btn_kefu://客服
					this._game.uiRoot.general.open(DatingPageDef.PAGE_KEFU);
					break;
				case this._viewUI.btn_gren://个人信息
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XINXI);
					break;
				case this._viewUI.btn_add://刷新金币
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				case this._viewUI.btn_zhuanpan://大转盘
					this._game.uiRoot.general.open(DatingPageDef.PAGE_ZHUANPAN);
					break;
				case this._viewUI.btn_qiandao://签到
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QIANDAO);
					break;
				case this._viewUI.btn_vip:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP);
					break;
				case this._viewUI.btn_remen://活动
					this._game.uiRoot.general.open(DatingPageDef.PAGE_HUODONG);
					break;
				case this._viewUI.btn_yuebao://余额宝
					this._game.uiRoot.general.open(DatingPageDef.PAGE_YUEBAO);
					break;
				case this._viewUI.btn_qukuan://取款
					if (WebConfig.info && !WebConfig.info.mobile) {
						this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
							page.dataSource = 3;//绑定手机类型
						})
					} else {
						this._game.uiRoot.general.open(DatingPageDef.PAGE_QUKUAN);
					}
					break;
				case this._viewUI.btn_bangding://绑定送钱
					if (WebConfig.info && !WebConfig.info.mobile) {
						this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDMONEY);
					}
					break;
				case this._viewUI.btn_daili://全民代理
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QUANMINDAILI);
					break;
				case this._viewUI.btn_chongzhi://充值
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				case this._viewUI.btn_qifu://祈福
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU, (page: QiFuPage) => {
						page.isHudDating = true;
					});
					break;
				case this._viewUI.btn_fenxiang://分享
					this._game.uiRoot.general.open(DatingPageDef.PAGE_HUD_SHARE);
					break;
				case this._viewUI.btn_shouchong://首充
					this._game.uiRoot.general.open(DatingPageDef.PAGE_FIRST_RECHARGE);
					break;
				case this._viewUI.btn_gw1:
					//关闭气泡框
					this.closeQiPaoKuang();
					break
				case this._viewUI.btn_guanwang://官网
					this.updatePos();
					//显示气泡框
					this.alertQiPaoKuang(DatingGame.QIPAOKUANGGW);
					break;
				case this._viewUI.img_hd://黑底
					//关闭气泡框
					this.closeQiPaoKuang(true);
					break;
				case this._viewUI.box_hd:
					//关闭气泡框，并且要弹出活动列表
					this.closeQiPaoKuang();
					break;
				case this._viewUI.box_yeb:
					//关闭气泡框，并且要弹出余额宝
					this.closeQiPaoKuang();
					break;
				case this._viewUI.box_yrbw:
					//关闭气泡框，并且要弹出月入百万
					this.closeQiPaoKuang();
					break;
				case this._viewUI.img_copy_gw:
					WebConfig.copyTxt(this._viewUI.txt_gw_url.text);
					this._game.showTips("复制成功");
					this.closeQiPaoKuang();
					//音效
					this._game.playSound(Path.music_copy);
					break;
				default:
					break;
			}
		}

		//====================弹窗气泡相关=start======================================
		initQiPaoUI(): void {
			this._viewUI.img_hd.visible = false;
			this._viewUI.box_qipaok.visible = false;
			this._viewUI.box_qipaok.mouseThrough = true;
			this._viewUI.img_hd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}
		/**hud弹窗逻辑 */
		alertPage(): void {
			this._game.datingGame.popUpData;
			this._game.datingGame.firstAlertPage();
		}
		//弹窗显示气泡框
		showQiPaoKuang(): void {
			//判断从游戏退出次数   余额宝 月入百万
			let yebData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEPOPCONFIG_C, "yueb");
			let yrbwData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEPOPCONFIG_C, "yrbw");
			let gwData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEPOPCONFIG_C, "tggw");
			let hdData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEPOPCONFIG_C, "tghd");
			if (!this._game.datingGame.isCanAlertYGW) this._game.datingGame.isCanAlertYGW = this._game.datingGame.exitGmeTimes == 1;	//是否可以弹官网气泡框
			if (!this._game.datingGame.isCanAlertYHD) {
				let condition = 1;		//受官网气泡框是否开关的结果，官网开第2次弹，官网没开第一次就要弹
				if (gwData && gwData.isopen) condition = 2;
				this._game.datingGame.isCanAlertYHD = this._game.datingGame.exitGmeTimes == condition;	//是否可以弹活动气泡框
			}
			if (yebData && yebData.isopen && this._game.datingGame.diffMoney > 1000 && !this._game.datingGame.isAlertYEB) {
				//余额宝
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGYEB);
				this._game.datingGame.isAlertYEB = true;
			} else if (yrbwData && yrbwData.isopen && this._game.datingGame.isShareBack && !this._game.datingGame.isAlertYRBW) {
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGYRBW);
				this._game.datingGame.isAlertYRBW = true;
			} else if (gwData && gwData.isopen && this._game.datingGame.isCanAlertYGW && !this._game.datingGame.isAlertYGW) {
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGGW);
				this._game.datingGame.isAlertYGW = true;
			} else if (hdData && hdData.isopen && this._game.datingGame.isCanAlertYHD && !this._game.datingGame.isAlertYHD) {
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGHD);
				this._game.datingGame.isAlertYHD = true;
			}
		}
		//初始化气泡框位置
		private initQiPaoPos(): void {
			//官网
			this.adjustQiPaoPos(this._viewUI.btn_guanwang, this._viewUI.box_gw, this._viewUI.btn_gw1);
			//月入百万
			this.adjustQiPaoPos(this._viewUI.btn_daili, this._viewUI.box_yrbw, this._viewUI.btn_yrbw);
			//余额宝
			this.adjustQiPaoPos(this._viewUI.btn_yuebao, this._viewUI.box_yeb, this._viewUI.btn_yeb);
			//热门活动
			this.adjustQiPaoPos(this._viewUI.btn_remen, this._viewUI.box_hd, this._viewUI.btn_hd1);
		}
		//气泡框位置对齐
		private adjustQiPaoPos(originalBtn: any, newBtnParent: Box, newButton: any, isAnchor: boolean = true): void {
			let cur_pos = originalBtn.localToGlobal(new Point(0, 0));
			let final_pos = newBtnParent.globalToLocal(cur_pos);
			if (isAnchor) {
				newButton.pos(final_pos.x + newButton.width * 0.5, final_pos.y + newButton.height * 0.5);
			} else {
				newButton.pos(final_pos.x, final_pos.y);
			}
		}
		/**hud关闭相关气泡框逻辑 */
		private _isCanClose: boolean = false;	//判断是否开的动画是否播放完成
		private _isPlayCloseQiPaoKuang: boolean = false;
		closeQiPaoKuang(isHD: boolean = false): void {
			if (!this._isCanClose) return;
			if (this._isPlayCloseQiPaoKuang) return;
			this._isPlayCloseQiPaoKuang = true;
			let ani: Laya.FrameAnimation;
			if (this._type == DatingGame.QIPAOKUANGGW) {
				ani = this._viewUI.ani7;
			} else if (this._type == DatingGame.QIPAOKUANGHD) {
				ani = this._viewUI.ani5;
			} else if (this._type == DatingGame.QIPAOKUANGYRBW) {
				ani = this._viewUI.ani11;
			} else if (this._type = DatingGame.QIPAOKUANGYEB) {
				ani = this._viewUI.ani10;
			}
			ani.play();
			ani.on(LEvent.COMPLETE, this, this.completCloseQiPao, [ani, isHD]);
		}
		//气泡关闭动画完成时
		private completCloseQiPao(ani: Laya.FrameAnimation, isHD: boolean): void {
			this._isPlayCloseQiPaoKuang = false;
			this._viewUI.img_hd.visible = false;
			this._viewUI.box_qipaok.visible = false;
			this._isCanClose = false;
			ani.stop();
			if (this._type == DatingGame.QIPAOKUANGHD && !isHD) {
				//活动弹框
				this._game.uiRoot.general.open(DatingPageDef.PAGE_HUODONG);
			} else if (this._type == DatingGame.QIPAOKUANGYRBW && !isHD) {
				//月入百万
				this._game.uiRoot.general.open(DatingPageDef.PAGE_QUANMINDAILI);
			} else if (this._type == DatingGame.QIPAOKUANGYEB && !isHD) {
				//余额宝
				this._game.uiRoot.general.open(DatingPageDef.PAGE_YUEBAO);
			}
			ani.off(LEvent.COMPLETE, this, this.completCloseQiPao);
		}
		/**hud弹出相关气泡框逻辑 */
		private _type: string;
		alertQiPaoKuang(type: string): void {
			this._type = type;
			this._viewUI.img_hd.visible = true;
			this._viewUI.box_qipaok.visible = true;
			this._viewUI.box_gw.visible = false;
			this._viewUI.box_hd.visible = false;
			this._viewUI.box_yrbw.visible = false;
			this._viewUI.box_yeb.visible = false;
			let ani: Laya.FrameAnimation;
			if (type == DatingGame.QIPAOKUANGGW) {
				//官网气泡框
				this._viewUI.box_gw.visible = true;
				ani = this._viewUI.ani6;
			} else if (type == DatingGame.QIPAOKUANGHD) {
				//活动气泡框
				this._viewUI.box_hd.visible = true;
				ani = this._viewUI.ani4;
			} else if (type == DatingGame.QIPAOKUANGYRBW) {
				//月入百万
				this._viewUI.box_yrbw.visible = true;
				ani = this._viewUI.ani9;
			} else if (type == DatingGame.QIPAOKUANGYEB) {
				//余额宝
				this._viewUI.box_yeb.visible = true;
				ani = this._viewUI.ani8;
			}
			//第一次退出子游戏 推广官网  EVENT_LOAD_MAP该事件是地图清理时会抛出的
			ani.play(0, false);
			ani.on(LEvent.COMPLETE, this, this.completOpenQiPao, [ani]);
		}
		//气泡框弹出动画完成
		private completOpenQiPao(ani: Laya.FrameAnimation): void {
			ani.stop();
			this._isCanClose = true;
			ani.off(LEvent.COMPLETE, this, this.completOpenQiPao);
		}
		//====================弹窗气泡相关=end======================================

		//--------------------游戏入口按钮列表相关---start------------------------------
		private listBtnChange(): void {
			let value = this._viewUI.list_btns.scrollBar.value;
			this._viewUI.btn_right.visible = true;
			this._viewUI.btn_left.visible = true;
			if (!this._viewUI.list_btns.scrollBar.min && !this._viewUI.list_btns.scrollBar.max) {
				this._viewUI.btn_left.visible = false;
				this._viewUI.btn_right.visible = false;
			} else {
				if (value <= this._viewUI.list_btns.scrollBar.min) {
					this._viewUI.btn_left.visible = false;
				} else if (value >= this._viewUI.list_btns.scrollBar.max) {
					this._viewUI.btn_right.visible = false;
				}
			}
		}

		private onSelectTab(index: number = -1) {
			if (!WebConfig.gamelist)
				return;
			if (index == -1) {
				this._viewUI.tab.selectedIndex = 0;
				return;
			}
			// 如果有值，说明该干活了
			let listData = this._game.datingGame.hudTabScrollData;
			if (listData) {
				this._isFromRoom = true;
				let value: number = listData.value;
				let tabIndex: number = listData.tabIndex;
				this._game.datingGame.clearHudTabScrollData();
				this._viewUI.tab.selectedIndex = tabIndex;
				Laya.timer.once(100, this, () => {
					this._viewUI.list_btns.scrollBar.value = value;
					this._isFromRoom = false;
				})
				if (tabIndex != index) {
					return;
				}
			}
			Laya.timer.clearAll(this);
			this.clearTweens();
			this.resetList();
			let b = this.onDealGameData(index);
			if (b)
				return;
			if (index == DatingPageDef.TYPE_CARD && this._viewUI.list_btns.dataSource.length != 0) {
				this._viewUI.btn_enterRoom.visible = true;
				this._viewUI.btn_enterRoom.scale(0.2, 0.2);
				this._viewUI.btn_enterRoom.alpha = 0;
				this.createTween(this._viewUI.btn_enterRoom, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, Laya.Ease.backInOut);
			} else {
				this.createTween(this._viewUI.btn_enterRoom, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 500, Laya.Ease.backInOut, () => {
					this._viewUI.btn_enterRoom.visible = false;
				});
			}
		}

		private onDealGameData(index: number) {
			let game_list: any[] = []
			let webPower: number = 0;
			let enterGameInfo = this._game.sceneObjectMgr.mainPlayer ? this._game.sceneObjectMgr.mainPlayer.getEnterGameInfo() : {};
			if (!WebConfig.gamelist) {
				this._viewUI.list_btns.dataSource = [];
				return true;
			}
			// 先筛选有用信息
			for (let i = 0; i < WebConfig.gamelist.length; i++) {
				let dz_str: any = WebConfig.gamelist[i];
				if (typeof dz_str === "number") continue;
				if (!dz_str) continue;
				let str: string = dz_str.replace("DZ_", "");
				let str1 = str.replace("r_", "");
				let times = enterGameInfo[str] ? enterGameInfo[str] : 0;
				let type = -1;
				let d;
				if (str.indexOf("r_") == -1)
					d = DatingPageDef.GAME_TYPE_LIST[str1];
				else
					d = DatingPageDef.GAME_CARD_TYPE_LIST[str1];
				type = d && d.length != 0 ? d[0] : -1;
				if (type > -1) {
					//热门游戏 或 对应类型的游戏
					if (index == DatingPageDef.TYPE_HOT || index == type) {
						// 房卡不放进热门游戏里面
						if (index == DatingPageDef.TYPE_HOT && type == DatingPageDef.TYPE_CARD)
							continue;
						game_list.push([str.replace('r_', ''), type, webPower, times]);
						webPower++;
					}
				}
			}
			if (!game_list.length) {
				this._viewUI.list_btns.dataSource = [];
				return true;
			}

			// 后台 + 玩家操作习惯排序
			game_list.sort(this.onSortList);

			// 按类整理
			let gl = [];
			for (let index = 0; index < game_list.length; index++) {
				let arr = game_list[index];
				gl.push([arr[0], arr[1]]);
			}

			this.onUpdateGameList(gl);
		}

		/**
	   * 初始化排序列表
	   */
		private onSortList(a, b): number {
			let v1: number = 0;
			let v2: number = 0;
			let a_power: number = 10000 - a[2];
			let b_power: number = 10000 - b[2];
			let a_times: number = a[3];
			let b_times: number = b[3];
			v1 = a_power + (a_times > 5 ? a_times + 100000 : 0);
			v2 = b_power + (b_times > 5 ? b_times + 100000 : 0);
			return v2 - v1;
		}

		public isOpenPage: boolean;
		private _isFromRoom: boolean;
		private _listBarMax: number = 0;

		private onUpdateGameList(gameList) {
			let data = gameList;
			let listItemCount = Math.ceil(data.length / 2);
			this._listBarMax = 250 * listItemCount - (this._clientWidth - 370);
			this._listBarMax = this._listBarMax < 0 ? 0 : this._listBarMax;
			this._viewUI.list_btns.dataSource = data;
			this._viewUI.list_btns.scrollTo(0);
			// 如果从房间出来，不播放入场动画
			if (this._isFromRoom)
				return;
			this._viewUI.list_btns.scrollBar.touchScrollEnable = true;
			Laya.timer.frameOnce(3, this, () => {
				let i = 0;
				this._viewUI.list_btns.scrollBar.max = this._listBarMax;
				this._viewUI.list_btns.cells.forEach(element => {
					let cell = element as GameItemRender;
					cell.setAlpha = 0;
					cell.x += 200;
					let scale: number = Math.random() > 0.5 ? 1.1 : 0.9;
					Laya.timer.once(100 * i, this, () => {
						this.createTween(cell, { setAlpha: 1, x: cell.x - 200 }, 200);
						this.createTween(cell, { scaleX: scale, scaleY: scale }, 500, Laya.Ease.backInOut, null, 'from');// 波浪
					});
					i++;
				});
				Laya.timer.once(100 * i, this, () => {
					this._viewUI.list_btns.scrollBar.touchScrollEnable = true;
				})
			})
			// 出现期间不让滑动
			this._viewUI.list_btns.scrollBar.touchScrollEnable = false;
		}

		private resetList() {
			if (this._viewUI.list_btns.dataSource) {
				this._viewUI.list_btns.cells.forEach(element => {
					let cell = element as GameItemRender;
					cell.setAlpha = 1;
					cell.scale(1, 1);
				});
			}
			this._viewUI.list_btns.scrollBar.touchScrollEnable = true;
		}

		private get adListMax(): number {
			return this._viewUI.list_ad.dataSource ? this._adPerWidth * (this._viewUI.list_ad.dataSource.length - 1) : 0;
		}

		private onViewMouseHandler(e) {
			if (this._isPlayAd)
				return;
			let v = this._viewUI.list_ad.scrollBar.value;
			this._isPlayAd = true;
			this._adPlayDelta = 0;
			this._curAdIndex = Math.round(v / this._adPerWidth);
			this.playNext();
		}

		private onAdMouseHandler(e) {
			let v = this._viewUI.list_ad.scrollBar.value;
			switch (e.type) {
				case LEvent.MOUSE_DOWN:
					this._isPlayAd = false;
					Laya.Tween.clearAll(this._viewUI.list_ad.scrollBar);
					break;
				case LEvent.MOUSE_MOVE:
					if (v <= 0) {
						this._viewUI.list_ad.scrollBar.value = this.adListMax;
					} else if (v >= this.adListMax) {
						this._viewUI.list_ad.scrollBar.value = 0;
					}
					break;
				case LEvent.MOUSE_UP:

					break;
			}
		}

		// 播下一个广告图
		private playNext() {
			Laya.Tween.clearAll(this._viewUI.list_ad.scrollBar);
			Laya.Tween.to(this._viewUI.list_ad.scrollBar, { value: this._adPerWidth * this._curAdIndex }, 200, null, Handler.create(this, () => {
				if (!this._viewUI.list_ad.dataSource)
					this._viewUI.list_ad.dataSource = this.guanggaoLunBoData();
				//去获取一遍，这还没有，就不要了
				if (!this._viewUI.list_ad.dataSource) return;
				if (this._curAdIndex >= this._viewUI.list_ad.dataSource.length - 1) {
					this._curAdIndex = 0;
					this._viewUI.list_ad.scrollTo(this._curAdIndex);
				}
			}));
		}
		private _isPlayAd: boolean = true;
		private _adPlayNextTime: number = 5000;
		private _adPlayDelta: number = 0;
		private _curAdIndex: number = 0;
		private _adPerWidth: number = 241;// 一个广告图的宽度
		update(diff: number) {
			super.update(diff);
			this.listBtnChange();
			// 轮播广告图
			if (!this._isPlayAd)
				return;
			if (this._adPlayDelta >= this._adPlayNextTime) {
				this._adPlayDelta = 0;
				if (this._viewUI && this._viewUI.list_ad.dataSource) {
					this._curAdIndex++;
					this.playNext();
				}
				return;
			}
			this._adPlayDelta += diff;
		}

		deltaUpdate() {
			if (this._viewUI.list_btns) {
				if (this._viewUI.list_btns.dataSource) {
					let cells = this._viewUI.list_btns.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as GameItemRender;
						element && element.update();
					}
				}
			}
			this._isShowBtnEffect && this.updateBtnAnimationFrame();
		}

		private _beforeArr = [];
		private _tweens: Laya.Tween[];
		private pushTweens(t: Laya.Tween): void {
			if (!this._tweens) this._tweens = [];
			if (this._tweens.indexOf(t) == -1)
				this._tweens.push(t);
		}
		private delTweens(t: Laya.Tween): void {
			let tweens = this._tweens;
			if (!tweens || !tweens.length)
				return;
			let idx = tweens.indexOf(t);
			if (idx == -1)
				return;
			tweens.splice(idx, 1);
		}

		private clearTweens(): void {
			if (!this._tweens) return;
			for (var i = 0; i < this._tweens.length; i++) {
				var t = this._tweens[i];
				Laya.Tween.clear(t);
			}
			this._tweens.length = 0;
			this._tweens = null;
		}

		private createTween(target, props, duration, ease = null, cb = null, type = 'to'): void {
			let complate;
			let t = Laya.Tween[type](target, props, duration, ease, Handler.create(this, () => {
				cb && cb();
				complate();
			}));
			this.pushTweens(t);
			complate = () => {
				this.delTweens(t);
			}
		}

		saveListStatus() {
			let listData = this._game.datingGame.createHudTabScrollData();
			listData.tabIndex = this._viewUI.tab.selectedIndex;
			listData.value = this._viewUI.list_btns.scrollBar.value;
		}

		private renderHandler(cell: GameItemRender, index: number) {
			if (!cell) return;
			cell.setData(this, this._game, cell.dataSource[0], cell.dataSource[1], index);
		}

		private adRenderHandler(cell: AdItemRender, index: number) {
			if (!cell) return;
			cell.setData(this, this._game, cell.dataSource, index);
		}

		//--------------------游戏入口按钮列表相关---end------------------------------
	}

	/**
	 * 大厅入口 2 级list
	 */
	class GameItemRender extends ui.nqp.dating.component.HudOne_TUI {
		public index: number;
		private _page: HudMainPage;
		private _game: Game;
		private _gameStr: string;
		private _type: number;
		private _updateEffect: AnimationFrame;
		private _loadingTip: HudLoadingTip;
		private _waitingTip: ui.nqp.dating.component.Effect_dengdaiUI;
		private _mainView: any;

		constructor() {
			super();
		}
		setData(page: HudMainPage, game: Game, gameStr: any, type: number, index: number) {
			if (!gameStr) {
				this.visible = false;
				return;
			}
			// if (gameStr == this._gameStr) return;
			this.visible = true;
			this._page = page;
			this._game = game;
			this._type = type;
			this._gameStr = this._type == DatingPageDef.TYPE_CARD ? "r" + gameStr : gameStr;
			this.index = index;
			this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_JOIN_CARDROOM_GAME_UPDATE + this._gameStr, this, this.showWaiting);
			this.show();
		}

		destroy() {
			if (this._mainView instanceof AvatarUIShow) {
				this._mainView.clear();
				this._mainView.destroy();
				this._mainView = null;
			}
			if (this._mainView instanceof LImage) {
				this._mainView.removeSelf();
				this._mainView.destroy();
				this._mainView = null;
			}
			this.clearWaiting();
			this.clearUpdate();
			this.clearProgress();
			this.btn.off(LEvent.CLICK, this, this.onMouseHandle);
			this._game && this._game.sceneObjectMgr.off(SceneObjectMgr.__EVENT_JOIN_CARDROOM_GAME_UPDATE + this._gameStr, this, this.showWaiting);
			super.destroy();
		}

		update(): void {
			if (!this._gameStr || !this.alpha) return;
			if (this._mainView instanceof AvatarUIShow) {
				let isOpenPage = false;
				//有某些界面存在时不停止
				for (let i = 0; i < HudMainPage.PAGE_ID.length; i++) {
					let page = this._game.uiRoot.general.getPage(HudMainPage.PAGE_ID[i]);
					if (page) {
						isOpenPage = true;
						break
					}
				}
				if (this._game.uiRoot.general.numChildren && !isOpenPage) {
					this._mainView.paused();
				} else {
					isOpenPage ? (this._mainView.playbackRate = 2) : (this._mainView.playbackRate = 1);
					this._mainView.resume();
				}
			}
			if (this._updateEffect) {
				this._updateEffect.onDraw();
			}
			if (!LoadingMgr.ins.isLoaded(this._gameStr)) {
				if (this.getProgress(this._gameStr) > 0.001) {
					this.showProgress(this.getProgress(this._gameStr));
					this.clearUpdate();
				} else {
					this.clearProgress();
				}
			} else {
				this.clearUpdate();
				this.clearProgress();
				this.clearWaiting();
			}
		}

		set setAlpha(v: number) {
			this.alpha = v;
			if (this._mainView instanceof AvatarUIShow || this._mainView instanceof LImage) {
				this._mainView.visible = v != 0;
			}
			if (this._updateEffect) {
				this._updateEffect.visible = v != 0;
			}
			if (this._loadingTip) {
				this._loadingTip.visible = v != 0;
			}
		}
		get setAlpha(): number {
			return this.alpha;
		}
		//敬请期待
		private static _jqqdGames: string[] = ['zoo', 'rshisanshui'];
		private show(): void {
			let offset_x: number = (this.index % 2 == 0 ? 12 : -5) + 15;
			this.btn.on(LEvent.CLICK, this, this.onMouseHandle);
			this.btn.x = 148 + offset_x;
			if (GameItemRender._jqqdGames.indexOf(this._gameStr) != -1) {
				if (this._mainView instanceof AvatarUIShow) {
					this._mainView.clear();
					this._mainView.destroy();
					this._mainView = null;
				}
				if (!this._mainView)
					this._mainView = new LImage();
				this._mainView.skin = DatingPath.ui_dating + 'dating/btn_' + this._gameStr + '.png';
				this.addChild(this._mainView);
				this._mainView.anchorX = this._mainView.anchorY = 0.5;
				this._mainView.x = 135 + offset_x;
				this._mainView.y = 120;
				this.clearUpdate();
				this.clearProgress();
				this.clearWaiting();
				return;
			} else {
				if (this._mainView instanceof LImage) {
					this._mainView.removeSelf();
					this._mainView.destroy();
					this._mainView = null;
				}
				if (!this._mainView) {
					this._mainView = new AvatarUIShow();
					this.addChild(this._mainView);
				} else {
					this._mainView.clear();
				}
				let sk_url = DatingPath.sk_dating + "DZ_" + this._gameStr;
				this._mainView.loadSkeleton(sk_url, 135 + offset_x, 120)//this.btn.width / 2 + 5 + offset_x, this.btn.height / 2 + 18);
			}
			// 是否显示更新标签
			if (!LoadingMgr.ins.isLoaded(this._gameStr) && this.getProgress(this._gameStr) <= 0.001)
				this.showUpdate(offset_x);
			else
				this.clearUpdate();
		}

		private getProgress(gameid: string) {
			return LoadingMgr.ins.getProgress(this._gameStr) || JsLoader.ins.getProgress(this._gameStr);
		}

		// 显示等待状态
		private showWaiting() {
			if (!this._waitingTip) {
				let cla = Page.FindClass("dating.component.Effect_dengdaiUI");
				this._waitingTip = new cla();
			}
			let offset_x: number = (this.index % 2 == 0 ? 12 : -5) + 15;
			this._waitingTip.x = this.btn.width - 90 + offset_x;
			this.addChild(this._waitingTip);
			this.clearUpdate();
		}
		private clearWaiting() {
			if (this._waitingTip) {
				this._waitingTip.destroy();
				this._waitingTip = null;
			}
		}

		// 显示更新状态
		private showUpdate(offset_x: number): void {
			if (this._waitingTip && this._waitingTip.parent)
				return;
			if (!this._updateEffect) {
				this._updateEffect = new AnimationFrame({
					source: 'update',
					fileName: '',
					interval: 12,
					frameCount: 12,
					start: 10000
				});
			}
			this._updateEffect.x = this.btn.width - 100 + offset_x;
			this._updateEffect.y = -15;
			this.addChild(this._updateEffect);
			this._updateEffect.play(true);
		}
		private clearUpdate(): void {
			if (this._updateEffect) {
				this._updateEffect.destroy();
				this._updateEffect = null;
			}
		}

		// 显示加载进度条		
		private showProgress(value: number) {
			if (!this._loadingTip) {
				this._loadingTip = new HudLoadingTip();
				this.addChild(this._loadingTip);
				let offset_x: number = (this.index % 2 == 0 ? 12 : -5) + 15;
				this._loadingTip.x = this.btn.width - 90 + offset_x;
			}
			this._loadingTip.progress = value;
			this._loadingTip.update();
			this.clearWaiting();
		}
		private clearProgress() {
			if (this._loadingTip) {
				this._loadingTip.destroy();
				this._loadingTip = null;
			}
		}

		private onMouseHandle(e: LEvent) {
			if (!this._gameStr) return;
			if (GameItemRender._jqqdGames.indexOf(this._gameStr) != -1) {
				this._game.uiRoot.btnTween(this._mainView, this, () => {
					this._game.showTips("功能开发中，敬请期待...");
				})
				return;
			}
			if (LoadingMgr.ins.isLoaded(this._gameStr)) {
				if (this._page.isOpenPage) {
					this._game.showTips("正在进游戏，请耐心等待...")
					return;
				}
				this._page.isOpenPage = true;
				Laya.timer.once(5000, this, () => {
					this._page.isOpenPage = false;
				})
			}
			if (this._loadingTip) {
				this._game.showTips("正在更新中...")
				return;
			}
			this._game.uiRoot.btnTween(this._mainView, this, () => {
				let gameStr = this._gameStr;
				if (LoadingMgr.ins.isLoaded(gameStr)) {
					JsLoader.ins.startLoad(gameStr, Handler.create(this, (assets) => {
						this.openPage(gameStr);
					}))
				} else {
					this.showWaiting();
					JsLoader.ins.startLoad(gameStr, Handler.create(this, (assets) => {
						LoadingMgr.ins.load(gameStr, assets);
					}))
				}
			})
		}

		private openPage(gameStr) {
			if (this._type == DatingPageDef.TYPE_CARD) {
				if (gameStr == "r" + "paodekuai") {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM, (page: CreateCardRoomBase) => {
						page.game_id = gameStr;
						page.dataSource = WebConfig.hudgametype = this._type;// 等于type
					});
				} else {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CREATE_CARD_ROOM, (page: CreateCardRoomBase) => {
						page.game_id = gameStr;
						page.dataSource = WebConfig.hudgametype = this._type;// 等于type
					});
				}
				return;
			}
			let pageDef = getPageDef(gameStr);
			//調試模式
			let CLOSE_LIST = isDebug ? [] : [];
			if (pageDef["__enterMapLv"]) {
				this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
				this._page.saveListStatus();
			}
			else if (CLOSE_LIST.indexOf(gameStr) == -1) {
				this._page.saveListStatus();
				this._game.uiRoot.HUD.open(gameStr + 1, (page: Page) => {
					page.dataSource = WebConfig.hudgametype = this._type;// 等于type
					this._game.uiRoot.HUD.closeAll([gameStr + 1]);
				}, (page: Page) => {
					// 场次返回大厅回调
					if (this._game.sceneObjectMgr.mainPlayer && !this._game.sceneGame.inScene) {
						this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
							this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
						}, null, 0);
					}
				});
			} else {
				this._game.showTips("开发中,敬请期待!");
			}
		}
	}

	class AdItemRender extends ui.nqp.dating.component.HudAd_TUI {
		public index: number;
		private _data;
		private _page: HudMainPage;
		private _game: Game;

		setData(page: HudMainPage, game: Game, data, index: number) {
			if (!data) {
				this.visible = false;
				return;
			}
			if (this._data == data) return;
			this.visible = true;
			this._page = page;
			this._game = game;
			this.index = index;
			this._data = data;
			this.show();
		}

		destroy() {
			super.destroy();
		}

		private _pageID = "";
		private show() {
			let order: number = 1;
			this.img_ewm.visible = this._data.type == Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_FENXIANG;
			this.txt_gw.visible = this._data.type == Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_GUANWANG;
			switch (this._data.type) {
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_DAILI:
					order = 1;
					this._pageID = DatingPageDef.PAGE_QUANMINDAILI;
					break;
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_FENXIANG:
					order = 2;
					this._pageID = DatingPageDef.PAGE_HUD_SHARE;
					QRCodeSprite.createQRCodeBase64(WebConfig.downLoadUrl, this.img_ewm.width, this.img_ewm.height, Handler.create(this, (base64) => {
						this.img_ewm.skin = base64;
					}))
					break;
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_GUANWANG:
					order = 3;
					this.txt_gw.text = EnumToString.getLimitStr(WebConfig.gwUrl, 14);
					break;
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_VIP:
					order = 4;
					this._pageID = DatingPageDef.PAGE_VIP;
					break;
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_YUEBAO:
					order = 5;
					this._pageID = DatingPageDef.PAGE_YUEBAO;
					break;
				case Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_ZHUANPAN:
					order = 6;
					this._pageID = DatingPageDef.PAGE_ZHUANPAN;
					break;
			}
			this.img_ad.skin = DatingPath.ui_dating + 'datinglunbotu/tu_dl' + order + '.png';
			this.on(LEvent.CLICK, this, this.onClick);
		}

		private onClick(e) {
			if (this._data.type == Web_operation_fields.GAME_HOME_AD_LOOP_TYPE_GUANWANG) {
				WebConfig.copyTxt(WebConfig.gwUrl);
				this._game.showTips("复制成功");
				//音效
				this._game.playSound(Path.music_copy);
				//显示气泡框
				// this._page.updatePos();
				// this._page.alertQiPaoKuang(DatingGame.QIPAOKUANGGW);
				return;
			}
			this._game.uiRoot.general.open(this._pageID);
		}
	}

	class HudLoadingTip extends ui.nqp.dating.component.LoadingTipTUI {
		private _updateEffect: AnimationFrame;

		constructor() {
			super();
			if (!this._updateEffect) {
				this._updateEffect = new AnimationFrame({
					source: 'loading',
					fileName: '',
					interval: 12,
					frameCount: 24,
					start: 10000
				});
			}
			this.box.addChild(this._updateEffect);
			this._updateEffect.play(true);
			this._updateEffect.x = -3
			this._updateEffect.y = 30;
			this.img.y = 30;
			this.txt.text = "0%";
		}

		set progress(value: number) {
			this.txt.text = Math.round(value * 100) + "%";
			this.img.y = (1 - value) * 30 + 3;
			this._updateEffect.y = (1 - value) * 30 - 10;
		}

		destroy(): void {
			if (this._updateEffect) {
				this._updateEffect.destroy();
				this._updateEffect = null;
			}
			this.removeSelf();
			super.destroy();
		}

		update(): void {
			if (this._updateEffect) {
				this._updateEffect.onDraw();
			}
		}
	}


}