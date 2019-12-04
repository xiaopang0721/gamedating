/**
* name 主界面
*/
module gamedating.page {
	export class HudMainPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.DaTingUI;
		get viewUI() {
			return this._viewUI;
		}
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
				DatingPath.atlas_dating_ui_dating_effect + "cz.atlas",
				DatingPath.atlas_dating_ui_dating_effect + "tx.atlas",
				DatingPath.atlas_dating_ui_dating_effect + "anniu.atlas",

				Path.ui_atlas_effect + "coin.atlas",
				Path.ui_atlas_effect + "flycoin.atlas",
				Path.ui_atlas_effect + "loading.atlas",
				Path.ui_atlas_effect + "shuzi.atlas",
				Path.ui_atlas_effect + "update.atlas",
			];
			this._isNeedDuang = false;
			this._delta = 100;
		}

		private _tabItems: any[] = [];
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.DaTingUI");
			this.addChild(this._viewUI);
			for (let index = 0; index < this._viewUI.tab.numChildren; index++) {
				let item = this._viewUI.tab.getChildByName("item" + index);
				this._tabItems[index] = item;
				this._tabItems[index].on(LEvent.COMPLETE, this, this.onAni1Over, [index]);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			//官网二维码
			QRCodeSprite.createQRCodeBase64(WebConfig.downLoadUrl, this._viewUI.img_gw.width, this._viewUI.img_gw.height, Handler.create(this, (base64) => {
				this._viewUI.img_gw.skin = base64;
			}))
			//官网链接
			this._viewUI.txt_gw_url.text = EnumToString.getLimitUrl(WebConfig.gwUrl);
			this._viewUI.img_copy_gw.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.list_btns.hScrollBarSkin = "";
			this._viewUI.list_btns.scrollBar.elasticDistance = 100;
			this._viewUI.list_btns.itemRender = this.createChildren("dating.component.HudOne_TUI", GameItemRender);
			this._viewUI.list_btns.renderHandler = new Handler(this, this.renderHandler);

			// 标签按钮
			this._viewUI.tab.selectHandler = new Handler(this, this.onSelectTab);
			this._viewUI.tab.selectedIndex = 0;

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
			this._viewUI.btn_enterRoom.on(LEvent.CLICK, this, this.enTerClick);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onSelectTab);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.onFreeStyle);

			// this.initTabClickPoly();
			//hud弹窗逻辑
			this.alertPage();
			this.onUpdatePlayerInfo(true);

			this._game.playMusic(Path.music_bg);

			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_bangding, this, this.checkout, new Point(60, -15), 1, null, [this._viewUI.btn_bangding]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, new Point(55, -15), 1, null, [this._viewUI.btn_vip]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_xiaoxi, this, this.checkout, new Point(50, -15), 1, null, [this._viewUI.btn_xiaoxi]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_fenxiang, this, this.checkout, new Point(43, -15), 1, null, [this._viewUI.btn_fenxiang]);

			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_daili, this, this.checkout, new Point(70, -5), 1, null, [this._viewUI.btn_daili]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_qiandao, this, this.checkout, new Point(82, -5), 1, null, [this._viewUI.btn_qiandao]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_zhuanpan, this, this.checkout, new Point(80, -5), 1, null, [this._viewUI.btn_zhuanpan]);
			this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_shouchong, this, this.checkout, new Point(75, -5), 1, null, [this._viewUI.btn_shouchong]);

			this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);
		}

		/**按钮点击事件 带缓动 */
		protected onBtnClickWithTween(...agrs): void {
			super.onBtnClickWithTween.apply(this, agrs);
			let e = agrs[0];
			if (e instanceof LEvent && (e.currentTarget == this._viewUI.img_copy_gw || e.currentTarget == this._viewUI.btn_guanwang)) {
				e.stopPropagation();
			}
		}

		private onAni1Over(index: number) {
			this._tabItems[index].ani2.play(0, true);
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

		public close(): void {
			if (this._viewUI) {
				this._isFromRoom = false;
				this._viewUI.list_btns.renderHandler.recover();
				this._viewUI.list_btns.renderHandler = null;
				if (this._viewUI.list_btns.scrollBar) {
					//记录当前滚动位置
					WebConfig.scrollBarValue = this._viewUI.list_btns.scrollBar.value;
				} else {
					WebConfig.scrollBarValue = 0;
				}

				this._game.stopMusic();
				Laya.Tween.clearAll(this);
				this.clearTweens();
				this._viewUI.tab.selectHandler.recover();
				this._viewUI.tab.selectHandler = null;
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
				this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_qifu);
				this._box_btn_top = null;
				this._box_btn_bottom = null;
			}
			super.close();
		}

		//大厅标签页点击区域多边形
		private _polyPoint: any[] = [
			[-96, -86, [98, 87, 317, 113, 318, 180, 98, 163]],
			[-159, -143, [162, 144, 382, 157, 383, 222, 164, 222]],
			[-55, -188, [59, 195, 276, 192, 277, 257, 60, 274]],
			[-97, -141, [101, 166, 317, 143, 318, 207, 100, 241]],
			[-142, -155, [147, 195, 365, 159, 365, 222, 148, 270]]
		];
		private initTabClickPoly() {
			for (let index = 0; index < this._viewUI.tab.numChildren; index++) {
				let item = this._viewUI.tab.getChildByName("item" + index) as Laya.Button;
				let hitArea = new Laya.HitArea();
				let graphics = new Laya.Graphics();
				graphics.drawPoly(this._polyPoint[index][0], this._polyPoint[index][1], this._polyPoint[index][2], "");
				hitArea.hit = graphics;
				item.hitArea = hitArea;
			}
		}

		private checkout(btn: any) {
			if (!WebConfig.info) return;
			switch (btn) {
				case this._viewUI.btn_xiaoxi:
					return this._game.datingGame.mailMgr.isShowRed;
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
			if (!this._viewUI) return;
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
				this._clip_vip.centerX = this._viewUI.clip_vip.centerX;
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

		/**hud弹窗逻辑 */
		alertPage(): void {
			this._game.datingGame.popUpData;
			this._game.datingGame.firstAlertPage();
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

		private onFreeStyle() {
			if (!WebConfig.info) return;
			this._viewUI.btn_bangding.visible = !WebConfig.info.mobile && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney") > 0;
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
			this._viewUI.txt_gw_url.text = EnumToString.getLimitUrl(WebConfig.gwUrl);
			//分享按钮
			let daysharegivemoney = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney");
			if (!daysharegivemoney || Number(daysharegivemoney) <= 0) {
				this._viewUI.btn_fenxiang.visible = false;
			} else {
				this._viewUI.btn_fenxiang.visible = true;
			}
			this.updatePos();
		}

		protected layout(): void {
			super.layout();
			if (this._viewUI) {
				this._viewUI.list_btns.width = this._clientRealWidth;
				//因为异步调用，resize事件抛出后，当前帧还未全部改掉整体页面布局，只能延迟一帧去调用
				Laya.timer.frameOnce(1, this, () => {
					this.updatePos();
					this._viewUI.tab.selectedIndex = 1;
					this._viewUI.tab.selectedIndex = 0;
				});
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
				this._viewUI.box_tabs.right = -35;
			} else {
				this._viewUI.box_btn_top_left.left = 0;
				this._viewUI.box_btn_top.right = 0;
				this._viewUI.box_bottomLeft.left = 17;
				this._viewUI.box_bottomRight.right = 11;
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
				total_x1 -= item.width + 30;
			}
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
				case this._viewUI.btn_guanwang://官网
					this.updatePos();
					//显示气泡框
					this.gwQiPaoTween(!this._viewUI.img_copy_gw.visible);
					break;
				case this._viewUI.img_copy_gw:
					WebConfig.copyTxt(WebConfig.gwUrl);
					this._game.showTips("复制成功");
					//音效
					this._game.playSound(Path.music_copy);
					this.gwQiPaoTween(false);
					break;
			}
		}

		//官网气泡框tween运动
		private gwQiPaoTween(isOpen: boolean) {
			if (isOpen) {
				this._viewUI.img_copy_gw.visible = true;
				this._viewUI.img_copy_gw.scale(0.2, 0.2);
				this._viewUI.img_copy_gw.alpha = 0;
				this.createTween(this._viewUI.img_copy_gw, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, Laya.Ease.backInOut);
			} else {
				this.createTween(this._viewUI.img_copy_gw, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 500, Laya.Ease.backInOut, () => {
					this._viewUI.img_copy_gw.visible = false;
				});
			}
		}

		//--------------------游戏入口按钮列表相关---start------------------------------
		private listBtnChange(): void {
			if (!this._viewUI.list_btns.scrollBar) return;
			let value = this._viewUI.list_btns.scrollBar.value;
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
				// this._viewUI.tab.selectedIndex = tabIndex;
				Laya.timer.once(100, this, () => {
					this._viewUI.list_btns.scrollBar.value = value;
					this._isFromRoom = false;
				})
				if (tabIndex != index) {
					return;
				}
			}
			for (let i = 0; i < this._tabItems.length; i++) {
				if (i == index) {
					this._tabItems[i].ani1.play(0, false);
					this._tabItems[i].clip.index = 2;
					this._tabItems[i].img1.visible = true;
					this._tabItems[i].img2.visible = true;
				} else {
					this._tabItems[i].ani2.gotoAndStop(0);
					this._tabItems[i].clip.index = 1;
					this._tabItems[i].img1.visible = false;
					this._tabItems[i].img2.visible = false;
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
			// 如果从房间出来，不播放入场动画
			if (this._isFromRoom) {
				//重新校正一下滚动条最大值
				this._viewUI.list_btns.scrollBar.max = this._listBarMax;
				this._viewUI.list_btns.scrollTo(WebConfig.scrollBarValue || 0);
				return;
			}
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
			this._viewUI.list_btns.scrollTo(WebConfig.scrollBarValue || 0);
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
			if (listData) {
				listData.tabIndex = this._viewUI.tab.selectedIndex;
				listData.value = this._viewUI.list_btns.scrollBar.value;
			}
		}

		private renderHandler(cell: GameItemRender, index: number) {
			if (!cell) return;
			cell.setData(this, this._game, cell.dataSource[0], cell.dataSource[1], index);
		}

		//--------------------游戏入口按钮列表相关---end------------------------------
	}

	/**
	 * 大厅入口 2 级list
	 */
	class GameItemRender extends ui.ajqp.dating.component.HudOne_TUI {
		public index: number;
		private _page: HudMainPage;
		private _game: Game;
		private _gameStr: string;
		private _type: number;
		private _updateEffect: AnimationFrame;
		private _loadingTip: HudLoadingTip;
		private _waitingTip: ui.ajqp.dating.component.Effect_dengdaiUI;
		private _mainView: any;
		private _offset_x: number;
		private _isJqqd: boolean;
		private static _jqqdGames: string[] = ['zoo', 'rshisanshui', 'elslp'];
		constructor() {
			super();
		}
		setData(page: HudMainPage, game: Game, gameStr: any, type: number, index: number) {
			if (!gameStr) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this._page = page;
			this._game = game;
			this._type = type;
			this._gameStr = this._type == DatingPageDef.TYPE_CARD ? "r" + gameStr : gameStr;
			this.index = index;
			this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_JOIN_CARDROOM_GAME_UPDATE + this._gameStr, this, this.showWaiting);
			this._offset_x = 15;
			this._isJqqd = GameItemRender._jqqdGames.indexOf(this._gameStr) != -1;
			this.show();
			this.update();
		}

		destroy() {
			if (this._mainView instanceof LImage) {
				this._mainView.removeSelf();
				this._mainView.destroy();
				this._mainView = null;
			}
			this.clearWaiting();
			this.clearUpdate();
			this.clearProgress();
			Laya.Tween.clearAll(this);
			this.btn.off(LEvent.CLICK, this, this.onMouseHandle);
			this._game && this._game.sceneObjectMgr.off(SceneObjectMgr.__EVENT_JOIN_CARDROOM_GAME_UPDATE + this._gameStr, this, this.showWaiting);
			super.destroy();
		}

		update(): void {
			if (!this._gameStr || !this.alpha) return;
			if (this._updateEffect) {
				this._updateEffect.onDraw();
			}
			if (LoadingMgr.ins.isLoaded(this._gameStr) || this._isJqqd) {
				this.clearUpdate();
				this.clearProgress();
				this.clearWaiting();
			} else {
				let progress = this.getProgress(this._gameStr);
				if (progress > 0) {
					this.showProgress(progress);
					this.clearUpdate();
					this.clearWaiting();
				}
				else {
					if (JsLoader.ins.isWaitLoad(this._gameStr)) {
						this.showWaiting();
						this.clearUpdate();
						this.clearProgress();
					} else {
						this.clearProgress();
						this.clearWaiting();
						this.showUpdate();
					}
				}
			}
		}

		set setAlpha(v: number) {
			this.alpha = v;
			if (this._mainView instanceof LImage) {
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

		private show(): void {
			let offset_x = this._offset_x;
			this.btn.on(LEvent.CLICK, this, this.onMouseHandle);
			this.btn.x = 148 + offset_x;
			if (!this._mainView) {
				this._mainView = new LImage();
			}
			this._mainView.skin = DatingPath.sk_dating + "DZ_" + this._gameStr + '.png';
			this.box.addChild(this._mainView);
			this._mainView.anchorX = this._mainView.anchorY = 0.5;
			this._mainView.x = 85 + offset_x;
			this._mainView.y = 120;
		}

		private getProgress(gameid: string) {
			return LoadingMgr.ins.getProgress(this._gameStr) || JsLoader.ins.getProgress(this._gameStr);
		}

		// 显示等待状态
		private showWaiting() {
			// if (!this._waitingTip) {
			// 	let cla = Page.FindClass("dating.component.Effect_dengdaiUI");
			// 	this._waitingTip = new cla();
			// }
			// let offset_x: number = 15;
			// this._waitingTip.x = offset_x;
			// this.tip.addChild(this._waitingTip);
			// this.clearUpdate();
		}
		private clearWaiting() {
			if (this._waitingTip) {
				this._waitingTip.destroy();
				this._waitingTip = null;
			}
		}

		// 显示更新状态
		private showUpdate(): void {
			let offset_x = this._offset_x;
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
			this._updateEffect.x = -30;
			this._updateEffect.y = -15;
			this.tip.addChild(this._updateEffect);
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
				this.tip.addChild(this._loadingTip);
				let offset_x: number = 15;
				this._loadingTip.x = offset_x;
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

		private onMouseHandle(e?: LEvent) {
			if (!this._gameStr) return;
			if (this._isJqqd) {
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
					JsLoader.ins.startLoad(gameStr, false, Handler.create(this, (assets) => {
						this.openPage(gameStr);
					}))
				} else {
					JsLoader.ins.startLoad(gameStr, true);
					this._game.showTips(StringU.substitute("{0}已加入更新队列", PageDef.getNameById(gameStr)));
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

	class HudLoadingTip extends ui.ajqp.dating.component.LoadingTipTUI {
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