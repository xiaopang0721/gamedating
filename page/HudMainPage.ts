/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.DaTingUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "datingsk.atlas",
				DatingPath.sk_dating + "DZ_baijiale.png",
				DatingPath.sk_dating + "DZ_bairendezhou.png",
				DatingPath.sk_dating + "DZ_benchibaoma.png",
				DatingPath.sk_dating + "DZ_blackjack.png",
				DatingPath.sk_dating + "DZ_dezhou.png",
				DatingPath.sk_dating + "DZ_brniuniu.png",
				DatingPath.sk_dating + "DZ_buyu.png",
				DatingPath.sk_dating + "DZ_ddz.png",
				DatingPath.sk_dating + "DZ_ebgang.png",
				DatingPath.sk_dating + "DZ_honghei.png",
				DatingPath.sk_dating + "DZ_longhu.png",
				DatingPath.sk_dating + "DZ_niuniu.png",
				DatingPath.sk_dating + "DZ_paijiu.png",
				DatingPath.sk_dating + "DZ_toubao.png",
				DatingPath.sk_dating + "DZ_sangong.png",
				DatingPath.sk_dating + "DZ_shisanshui.png",
				DatingPath.sk_dating + "DZ_shuiguoji.png",
				DatingPath.sk_dating + "DZ_tbniuniu.png",
				DatingPath.sk_dating + "DZ_zjh.png",
				DatingPath.sk_dating + "DZ_paodekuai.png",
				DatingPath.sk_dating + "DZ_zoo.png",
				DatingPath.sk_dating + "DZ_saolei.png",
				DatingPath.sk_dating + "DZ_caishendao.png",
				DatingPath.sk_dating + "DZ_majiang.png",

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
			this._viewUI = this.createView("nqp.dating.DaTingUI");
			this.addChild(this._viewUI);
			this._viewUI.box.mouseThrough = true;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			//官网二维码

			this._viewUI.img_gw.skin = WebConfig.ewmUrl
			//官网链接
			this._viewUI.txt_gw_url.text = WebConfig.gwUrl;
			this._viewUI.img_copy_gw.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this.initQiPaoUI();
			this._isShowBtnEffect && this.initBtnAnimationFrame();
			this._viewUI.list_btns.hScrollBarSkin = "";
			this._viewUI.list_btns.scrollBar.elasticDistance = 100;
			this._viewUI.list_btns.itemRender = GameItemRender;
			this._viewUI.list_btns.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_btns.scrollTo(WebConfig.scrollBarValue || 0);
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


			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);

			this.onUpdatePlayerInfo(true);
			this._game.playMusic(Path.music_bg);

			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_xiaoxi, this, this.checkout, new Point(55, -10), 1, null, [this._viewUI.btn_xiaoxi]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_bangding, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_bangding]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_qiandao, this, this.checkout, new Point(90, -15), 1, null, [this._viewUI.btn_qiandao]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_zhuanpan, this, this.checkout, new Point(90, -10), 1, null, [this._viewUI.btn_zhuanpan]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_daili, this, this.checkout, new Point(90, -10), 1, null, [this._viewUI.btn_daili]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, new Point(100, -15), 1, null, [this._viewUI.btn_vip]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_shouchong, this, this.checkout, new Point(80, -15), 1, null, [this._viewUI.btn_shouchong]);
			//hud弹窗逻辑
			this.alertPage();
			//气泡框逻辑
			this.showQiPaoKuang();
			this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);
		}

		private qifuFly(dataSource: any): void {
			if (!dataSource) return;
			this._game.qifuMgr.showFlayAni(this._viewUI.btn_gren, this._viewUI, dataSource, (dataSource) => {
				let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
				if (!mainPlayer) return;
				let playerInfo = mainPlayer.playerInfo;
				if (!playerInfo) return;
				if (playerInfo.qifu_type > 0 && playerInfo.qifu_endtime > this._game.sync.serverTimeBys) {
					this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[playerInfo.qifu_type - 1] + ".png";
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
				this._viewUI.list_btns.dataSource = [];
				this._game.stopMusic()
				Laya.Tween.clearAll(this);
				this.clearTweens();
				this._viewUI.list_btns.dataSource = [];
				this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
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

		protected layout(): void {
			super.layout();
			if (this._viewUI) {
				// this._viewUI.img_mask.width = this._clientRealWidth + 5;
				this._viewUI.list_btns.width = this._clientRealWidth;
				if (this._viewUI.list_btns.dataSource)
					Laya.timer.once(1, this, () => {
						if (this._viewUI.list_btns.dataSource)
							this._viewUI.list_btns.scrollBar.max = (1515 + 286 * this._listItemCount) - this._clientWidth
					});
				//因为异步调用，resize事件抛出后，当前帧还未全部改掉整体页面布局，只能延迟一帧去调用
				Laya.timer.frameOnce(1, this, this.updatePos);
			}
		}

		private checkout(btn: any) {
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
			}
		}

		private _clip_money: ClipUtil;
		private _clip_vip: ClipUtil;
		private _qifuNameStr: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
		private onUpdatePlayerInfo(first: boolean = false) {
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._viewUI.txt_id.text = playerInfo.nickname;
			if (first)
				this.onUpdateGameList(true);
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
				this._clip_vip.centerX = this._viewUI.clip_vip.centerX;
				this._clip_vip.centerY = this._viewUI.clip_vip.centerY;
				this._viewUI.clip_vip.parent && this._viewUI.clip_vip.parent.addChild(this._clip_vip);
				this._viewUI.clip_vip.removeSelf();
			}
			this._clip_vip.setText(playerInfo.vip_level, true);

			this._clip_money.setText(playerInfo.money, true, false, playerInfo.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);

			this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/tu_tx" + (playerInfo.headimg ? playerInfo.headimg : 0) + ".png";
			this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_txk" + (playerInfo.headKuang ? playerInfo.headKuang : 0) + ".png";
			if (playerInfo.qifu_type > 0 && playerInfo.qifu_endtime > this._game.sync.serverTimeBys) {
				this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[playerInfo.qifu_type - 1] + ".png";
			}
			// if (playerInfo.vip_level > 0) {
			// 	this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_v" + playerInfo.vip_level + ".png";
			// }

			this._viewUI.btn_bangding.visible = !WebConfig.info.mobile && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney") > 0;
			// if (!WebConfig.info.isqmdl) {
			// 	this._game.uiRoot.general.close(DatingPageDef.PAGE_QUANMINDAILI)
			// }
			// if (!WebConfig.info.islxqd) {
			// 	this._game.uiRoot.general.close(DatingPageDef.PAGE_QIANDAO)
			// }
			// if (!WebConfig.info.isxylp) {
			// 	this._game.uiRoot.general.close(DatingPageDef.PAGE_ZHUANPAN)
			// }
			// if (!FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney")) {
			// 	this._viewUI.btn_fenxiang.visible = false;
			// }


			this.updatePos();

			//检测vip领取奖励情况
			// if (!this._game.datingGame..firstAlert && this._game.datingGame.vipMgr.checkVipReceived()) {
			// 	this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP_UP);
			// }
			// this._game.datingGame.firstAlert = true;
		}

		private _box_btn_top: { [key: number]: Button } = {};
		private _box_btn_bottom: { [key: number]: Button } = {};
		private updatePos() {
			if (this._game.isFullScreen) {
				this._viewUI.box_btn_top_left.left = 56;
				this._viewUI.box_btn_top.right = 25;
				this._viewUI.box_bottomLeft.left = 56;
				this._viewUI.box_bottomRight.right = 56 - 11;
			} else {
				this._viewUI.box_btn_top_left.left = 0;
				this._viewUI.box_btn_top.right = 0;
				this._viewUI.box_bottomLeft.left = 17;
				this._viewUI.box_bottomRight.right = 11;
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

			//气泡框位置对齐
			this.initQiPaoPos();
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

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_xiaoxi://消息
					// this._game.uiRoot.general.open(DatingPageDef.PAGE_XIAOXI)
					this._game.uiRoot.general.open(DatingPageDef.PAGE_JOIN_CARD_ROOM)
					break;
				case this._viewUI.btn_kefu://客服
					// this._game.uiRoot.general.open(DatingPageDef.PAGE_KEFU);
					this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM)
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
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU, (page:QiFuPage) => {
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
			if (this._game.datingGame.diffMoney > 1000 && !this._game.datingGame.isAlertYEB) {
				//余额宝
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGYEB);
				this._game.datingGame.isAlertYEB = true;
			} else if (this._game.datingGame.isShareBack && !this._game.datingGame.isAlertYRBW) {
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGYRBW);
				this._game.datingGame.isAlertYRBW = true;
			} else if (this._game.datingGame.exitGmeTimes == 1 && !this._game.datingGame.isAlertYGW) {
				this.alertQiPaoKuang(DatingGame.QIPAOKUANGGW);
				this._game.datingGame.isAlertYGW = true;
			} else if (this._game.datingGame.exitGmeTimes == 2 && !this._game.datingGame.isAlertYHD) {
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
		private _isCanClose: boolean = false;
		closeQiPaoKuang(isHD: boolean = false): void {
			if (!this._isCanClose) return;
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

		public openIndex: number = -1;
		public isOpenPage: boolean;
		private _listBarMax: number = 0;
		private _listItemCount: number = 0;

		private onUpdateGameList(index?: boolean) {
			if (!index) return;
			if (this.openIndex != -1) {
				// 万一如果是数据更新呢，所以先关掉再说
				this._viewUI.list_btns.cells.forEach(element => {
					let cell = element as GameItemRender;
					if (cell.dataSource && cell.dataSource[0] == this.openIndex) {
						cell.doList();
					}
				});
			}
			let data: any = [];
			for (var i = 0; i < DatingPageDef.GAME_SORT_LIST.length; i++) {
				let element = DatingPageDef.GAME_SORT_LIST[i];
				data[i] = [i, element];
			}
			this._listItemCount = i;
			this._listBarMax = (1515 + 286 * this._listItemCount) - this._clientWidth;
			this.openIndex = -1;
			this._viewUI.list_btns.dataSource = data;
			this._viewUI.list_btns.scrollTo(0);
			this._viewUI.list_btns.scrollBar.touchScrollEnable = true;
			Laya.timer.once(1, this, () => {
				this._viewUI.list_btns.scrollBar.max = this._listBarMax;
			})
			// 如果有值，说明该干活了
			let listData = this._game.datingGame.hudTabScrollData;
			if (!listData)
				return;
			let value: number = listData.value;
			let tabIndex: number = listData.tabIndex;
			let subValue: number = listData.subValue;
			listData = null;
			Laya.timer.once(20, this, () => {
				if (tabIndex > -1) {
					// 子项被打开了
					this._viewUI.list_btns.cells.forEach(element => {
						let cell = element as GameItemRender;
						if (cell.dataSource && cell.dataSource[0] == tabIndex) {
							cell.doList();
							Laya.timer.once(1300, this, () => {
								cell.list.scrollBar.value = subValue;
							})
						}
					});
				} else {
					this._viewUI.list_btns.scrollBar.value = value;
				}
			})
		}

		deltaUpdate() {
			if (this._viewUI.list_btns) {
				if (this._viewUI.list_btns.dataSource) {
					let cells = this._viewUI.list_btns.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as GameItemRender;
						element && element.update()
					}
				}
				// if (this._viewUI.list_btns.scrollBar.value == 0) {
				// 	this._viewUI.img_mask.skin = DatingPath.ui_dating + 'dating/mask_1.png';
				// } else if (this._viewUI.list_btns.scrollBar.value == this._viewUI.list_btns.scrollBar.max) {
				// 	this._viewUI.img_mask.skin = DatingPath.ui_dating + 'dating/mask_2.png';
				// } else {
				// 	this._viewUI.img_mask.skin = DatingPath.ui_dating + 'dating/mask_0.png';
				// }
			}
			this._isShowBtnEffect && this.updateBtnAnimationFrame();
		}

		private renderHandler(cell: GameItemRender, index: number) {
			if (!cell) return;
			cell.setData([this, this._game], cell.dataSource);
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

		/**
		 * 点击列表中大按钮，控制视图动效
		 * @param index 
		 * @param isOpen 
		 */
		public onClickBigBtn(index: number, isOpen: boolean, complateFun: Function): void {
			let cells = this._viewUI.list_btns.cells;
			if (isOpen) {
				this._viewUI.list_btns.scrollBar.max = this._listBarMax + 1280;
				this._viewUI.list_btns.scrollBar.touchScrollEnable = !isOpen;
				this._viewUI.list_btns.tweenTo(index, 200, Handler.create(this, () => {
					let myCell;
					// 先找到自己
					cells.forEach(element => {
						let cell = element as GameItemRender;
						if (cell.dataSource) {
							let i = cell.dataSource[0];
							if (i == index)
								myCell = cell;
						}
					});
					let b: boolean = false;
					// 移開其他
					cells.forEach(element => {
						let cell = element as GameItemRender;
						if (cell.dataSource) {
							let i = cell.dataSource[0];
							if (i > index) {
								let offset_X: number = 0;
								offset_X = 1560 - myCell.x;
								offset_X = cell.x + offset_X;
								this._beforeArr.push([i, cell.x]);	// 存下来，复位用
								this.createTween(cell, { x: offset_X }, 500, Laya.Ease.circIn);
								b = true;
							}
						}
					});
					complateFun();
				}));
			} else {
				complateFun();
				// 其他的回來
				cells.forEach(element => {
					let cell = element as GameItemRender;
					if (cell.dataSource) {
						let i = cell.dataSource[0];
						for (let o = 0; o < this._beforeArr.length; o++) {
							let c = this._beforeArr[o];
							if (c[0] == i) {
								this.createTween(cell, { x: c[1] }, 500, Laya.Ease.circOut);
							}
						}
					}
				});
				this._beforeArr.length = 0;
				// 復位
				if (this._viewUI.list_btns.scrollBar.value > this._listBarMax) {
					this.createTween(this._viewUI.list_btns.scrollBar, { value: this._listBarMax }, 500, null, () => {
						this._viewUI.list_btns.scrollBar.max = this._listBarMax;
						this._viewUI.list_btns.scrollBar.touchScrollEnable = !isOpen;
					});
				} else {
					this._viewUI.list_btns.scrollBar.touchScrollEnable = !isOpen;
					this._viewUI.list_btns.scrollBar.max = this._listBarMax;
				}
			}
		}

		saveListStatus() {
			let listData = this._game.datingGame.createHudTabScrollData();
			listData.value = this._viewUI.list_btns.scrollBar.value;
			listData.tabIndex = this.openIndex;
			listData.subValue = 0;
			if (this.openIndex != -1) {
				this._viewUI.list_btns.cells.forEach(element => {
					let cell = element as GameItemRender;
					if (cell.dataSource && cell.dataSource[0] == this.openIndex) {
						listData.subValue = cell.list.scrollBar.value;
					}
				});
			}
		}
		//--------------------游戏入口按钮列表相关---end------------------------------

	}

	/**
	 * 大厅入口 1 级list
	 */
	class GameItemRender extends ui.nqp.dating.component.HudBtn_TUI {
		public datas;
		private _game: Game;
		private _page: HudMainPage;
		private _data: string;
		private _index: number;
		private _isOpen: boolean;
		private _tweens: Laya.Tween[];
		private _effBTN: ui.nqp.dating.component.Effect_qipaiduizhanUI;

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

		private clearTweens(): void {
			if (!this._tweens) return;
			for (var i = 0; i < this._tweens.length; i++) {
				var t = this._tweens[i];
				Laya.Tween.clear(t);
			}
			this._tweens.length = 0;
			this._tweens = null;
		}

		constructor() {
			super();
		}

		private _datastr: string;
		setData(arr: any, data: any) {
			if (!data) {
				this.visible = false;
				Laya.timer.clearAll(this);
				this.clearTweens();
				this.list.dataSource = [];
				return;
			}

			if (data && data.toString() == this._datastr) return;
			this._datastr = data.toString();
			this.datas = data;
			this._page = arr[0]
			this._game = arr[1];
			this._index = data[0];
			this._data = data[1];
			this._isOpen = false;
			this.show();
		}

		destroy() {
			this.btn.off(LEvent.CLICK, this, this.doList);
			this.list.dataSource = [];
			Laya.timer.clearAll(this);
			this.clearTweens();
			Laya.Tween.clearAll(this);
			super.destroy();
		}

		update(): void {
			if (!this._data) return;
			if (this.list.dataSource) {
				this.list.cells.forEach(element => {
					let item = element as GameSubItemRender;
					item && item.update();
				});
			}
		}

		private show(): void {
			let b_btn = '';
			switch (this._index) {
				case DatingPageDef.TYPE_CHESS:
					b_btn = 'qipaiduizhan';
					break;
				case DatingPageDef.TYPE_GAME:
					b_btn = 'jj';
					break;
				case DatingPageDef.TYPE_BAIREN:
					b_btn = 'bairen';
					break;
			}
			this.img_back.skin = DatingPath.ui_dating + 'dating/tu_dtgg' + this._index + '.png';
			this.img_back.visible = false;
			this.box.scaleX = 1;
			this.img.width = 622;

			if (!this._effBTN) {
				this._effBTN = new ui.nqp.dating.component.Effect_qipaiduizhanUI();
			}
			this.box_btn.addChild(this._effBTN);
			this._effBTN[b_btn].visible = true;
			this._effBTN['ani_' + b_btn].play(0, true);

			this.btn.on(LEvent.CLICK, this, this.doList);
			// 渲染子列表
			this.list.hScrollBarSkin = "";
			this.list.scrollBar.elasticDistance = 100;
			this.list.itemRender = GameSubItemRender;
			this.list.renderHandler = new Handler(this, this.renderHandler);
			this.list.scrollTo(WebConfig.scrollBarValue || 0);
			this.list.scrollBar.touchScrollEnable = false;
			this.list.dataSource = this._data;
		}

		private renderHandler(cell: GameSubItemRender, index: number) {
			if (!cell) return;
			cell.setData(this._page, this._game, cell.dataSource, this._index, index);
			if (!this._isOpen && index > 3) {
				cell.setAlpha = 0;
				cell.mouseEnabled = false;
			}
		}

		private _isCanDo: boolean = true;
		/**
		 * 点击事件
		 */
		doList(e: LEvent = null): void {
			if (!this._isCanDo)
				return;
			if (this._page.openIndex != -1 && !this._isOpen)
				return;
			this._isCanDo = false;
			Laya.timer.once(1200, this, () => { this._isCanDo = true });
			this._isOpen = !this._isOpen;
			this._page.openIndex = this._isOpen ? this._index : -1;
			// 关闭的时候，子列表不让移动
			this.list.scrollBar.touchScrollEnable = this._isOpen;
			if (this._isOpen) {
				// 翻轉
				this.createTween(this.box, { scaleX: -1 }, 200);
				// 翻轉中途替換圖片
				Laya.timer.once(100, this, () => {
					this.img_back.visible = this._isOpen;
					this.box_btn.visible = !this._isOpen;
				});
			}

			this._page.onClickBigBtn(this._index, this._isOpen, () => {
				// 控制子列表显示与隐藏
				this.doSubList();
				// 白色底图是否展开
				if (this._isOpen) {
					this.createTween(this.img, { width: 1540 }, 100);
				} else {
					this.createTween(this.img, { width: 648 }, 100);
					// 翻轉
					this.createTween(this.box, { scaleX: 1 }, 200);
					// 翻轉中途替換圖片
					Laya.timer.once(100, this, () => {
						this.img_back.visible = this._isOpen;
						this.box_btn.visible = !this._isOpen;
					});
				}
			});
		}

		/**
		 * 控制子列表显示与隐藏
		 */
		private doSubList(): void {
			if (!this.list || !this.list.cells)
				return;
			let cells = this.list.cells;
			if (!this._isOpen) {
				this.list.tweenTo(0, 500);
			}
			let i = 0;
			if (this._isOpen) {// 進場
				this.list.cells.forEach(element => {
					let cell = element as GameSubItemRender;
					if (cell.thisIndex < 4) {
						cell.setAlpha = 1;
					} else {
						cell.x += 200;
						Laya.timer.once(100 * i, this, () => {
							this.createTween(cell, { setAlpha: 1, x: cell.x - 200 }, 500);
						});
						i++;
					}
					cell.mouseEnabled = true;
					// 波浪
					let scale: number = Math.random() > 0.5 ? 1.05 : 0.95;
					this.createTween(cell, { scaleX: scale, scaleY: scale }, 500, Laya.Ease.backInOut, null, 'from');
				});
			} else {// 離場
				this.list.cells.forEach(element => {
					let cell = element as GameSubItemRender;
					if (cell.thisIndex < 4) {
						cell.setAlpha = 1;
						cell.mouseEnabled = true;
					} else {
						cell.mouseEnabled = false;
						this.createTween(cell, { setAlpha: 0 }, 200);
					}
					// 不管有哪个cell看不见，这边先 波浪 了~
					let scale: number = Math.random() > 0.5 ? 1.05 : 0.95;
					this.createTween(cell, { scaleX: scale, scaleY: scale }, 500, Laya.Ease.backInOut, null, 'from');
				});
				// 虽然很恶心~~但是因为离场时的tween控制的cell，运动过程中，因为离开了画布，可能被回收并拿来填充其他数据了，不这么做会有可能某些视图看不见
				Laya.timer.once(210, this, () => {
					this.list.cells.forEach(element => {
						let cell = element as GameSubItemRender;
						if (cell.thisIndex < 4) {
							cell.setAlpha = 1;
							cell.mouseEnabled = true;
						}
						else
							cell.mouseEnabled = false;
					});
				})
			}
		}
	}

	/**
	 * 大厅入口 2 级list
	 */
	class GameSubItemRender extends ui.nqp.dating.component.HudOne_TUI {
		public thisIndex: number;
		private _page: HudMainPage;
		private _game: Game;
		private _data: string;
		private _index: number;
		private _avatar: AvatarUIShow;
		private _updateEffect: AnimationFrame;
		private _image: LImage;
		private _loadingTip: HudLoadingTip;
		private _waitingTip: ui.nqp.dating.component.Effect_dengdaiUI;

		constructor() {
			super();
		}
		setData(page: HudMainPage, game: Game, data: any, index: number, thisIndex: number) {
			if (!data) {
				this.visible = false;
				return;
			}
			if (data && data == this._data) return;
			this.visible = true;
			this._page = page;
			this._game = game;
			this._data = data;
			this._index = index;
			this.thisIndex = thisIndex;
			this.show();
		}

		destroy() {
			if (this._avatar) {
				this._avatar.clear(true);
				this._avatar.destroy();
				this._avatar = null;
			}
			if (this._image) {
				this._image.removeSelf();
				this._image.destroy();
				this._image = null;
			}
			this.clearWaiting();
			this.clearUpdate();
			this.clearProgress();
			this.off(LEvent.CLICK, this, this.onMouseHandle);
			super.destroy();
		}

		update(): void {
			if (!this._data || !this.alpha) return;
			if (this._avatar) {
				this._avatar.onDraw();
			}
			if (this._updateEffect) {
				this._updateEffect.onDraw();
			}
			if (!LoadingMgr.ins.isLoaded(this._data)) {
				if (this.getProgress(this._data) > 0.001) {
					this.showProgress(this.getProgress(this._data));
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
			if (this._avatar) {
				this._avatar.visible = v != 0;
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

		private show(): void {
			let offset_x: number = this.thisIndex % 2 == 0 ? 18 : 0;
			this.on(LEvent.CLICK, this, this.onMouseHandle);
			if (this._data == 'zoo') {
				if (!this._image)
					this._image = new LImage(DatingPath.ui_dating + 'dating/btn_fqzs.png');
				this.btn.addChild(this._image);
				this.btn.x = this.btn.width / 2 - 3 + offset_x;
				this.btn.y = this.btn.height / 2 + 20;
				return;
			}
			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this.btn.addChild(this._avatar);
			}
			let sk_url = DatingPath.sk_dating + "DZ_" + this._data;
			this._avatar.loadSkeleton(sk_url, this.btn.width / 2 + 5 + offset_x, this.btn.height / 2 + 18);
			// 是否显示更新标签
			if (!LoadingMgr.ins.isLoaded(this._data) && this.getProgress(this._data) <= 0.001)
				this.showUpdate(offset_x);
		}

		private getProgress(gameid: string) {
			return LoadingMgr.ins.getProgress(this._data) || JsLoader.ins.getProgress(this._data);
		}

		// 显示等待状态
		private showWaiting() {
			if (!this._waitingTip) {
				this._waitingTip = new ui.nqp.dating.component.Effect_dengdaiUI();
				// this._waitingTip.ani1.play(1, true);
			}
			let offset_x: number = this.thisIndex % 2 == 0 ? 18 : 0;
			this._waitingTip.x = this.width - 55 + offset_x;
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
			if (!this._updateEffect) {
				this._updateEffect = new AnimationFrame({
					source: 'update',
					fileName: '',
					interval: 12,
					frameCount: 12,
					start: 10000
				});
			}
			this._updateEffect.x = this.width - 70 + offset_x;
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
				let offset_x: number = this.thisIndex % 2 == 0 ? 18 : 0;
				this._loadingTip.x = this.width - 53 + offset_x;
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
			if (!this._data) return;
			if (this._data == 'zoo') {
				this._game.uiRoot.btnTween(this, this, () => {
					this._game.showTips("功能开发中，敬请期待...");
				})
				return;
			}
			if (LoadingMgr.ins.isLoaded(this._data)) {
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
			this._game.uiRoot.btnTween(this._avatar, this, () => {
				if (LoadingMgr.ins.isLoaded(this._data)) {
					JsLoader.ins.startLoad(this._data, Handler.create(this, (assets) => {
						this.openPage();
					}))
				} else {
					this.showWaiting();
					JsLoader.ins.startLoad(this._data, Handler.create(this, (assets) => {
						LoadingMgr.ins.load(this._data, assets);
					}))
				}
			})
		}

		private openPage() {
			let pageDef = getPageDef(this._data);
			//調試模式
			let CLOSE_LIST = isDebug ? [] : [];
			if (pageDef["__enterMapLv"]) {
				this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
				this._page.saveListStatus();
			}
			else if (CLOSE_LIST.indexOf(this._data) == -1) {
				this._page.saveListStatus();
				this._game.uiRoot.HUD.open(this._data + 1, (page: Page) => {
					page.dataSource = WebConfig.hudgametype = this._index;// 等于type
					this._game.uiRoot.HUD.closeAll([this._data + 1]);
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