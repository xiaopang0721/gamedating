/**
* 大厅页面定义枚举
*/
module gamedating.page {
	export class DatingPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string = "dating";
		//主界面
		static PAGE_HUD: string = "1";
		//登录界面
		static PAGE_LOGIN: string = "2";
		//消息
		static PAGE_XIAOXI: string = "3";
		//消息
		static PAGE_CHONGZHI_RECORD: string = "4";
		//游客提示
		static PAGE_GUEST_TIP: string = "5";
		//取款
		static PAGE_QUKUAN: string = "6";
		//客服
		static PAGE_KEFU: string = "7";
		//红包
		static PAGE_HONGBAO: string = "8";
		//绑定送钱
		static PAGE_BINDMONEY: string = "10";
		//打开邮件
		static PAGE_NEW_OPEN: string = "11";
		//个人信息
		static PAGE_XINXI: string = "12";
		//充值列表
		static PAGE_CHONGZHI: string = "13";
		//绑定银行卡
		static PAGE_BINDYHK: string = "15";
		//绑定支付宝
		static PAGE_BINDZFB: string = "16";
		//活动
		static PAGE_HUODONG: string = "17";
		//全民代理
		static PAGE_QUANMINDAILI: string = "18";
		//推广2
		static PAGE_TUIGUANG1: string = "19";

		//大转盘
		static PAGE_ZHUANPAN: string = "21";

		//签到
		static PAGE_QIANDAO: string = "24";
		//祈福动画
		static PAGE_QIFU_ANI: string = "25";
		//祈福界面
		static PAGE_QIFU: string = "26";
		//创建房间
		static PAGE_CREATE_CARD_ROOM: string = "27";
		//修改头像
		static PAGE_CHANGGE_HEAD: string = "28";
		//加入房间
		static PAGE_JOIN_CARD_ROOM: string = "29";
		//公告
		static PAGE_GONGGAO: string = "30";
		//通用领取
		static PAGE_GET_REWARD: string = "31";
		//创建房间-跑得快
		static PAGE_PDK_CREATE_CARDROOM: string = "32";
		//加入房间-跑得快
		static PAGE_PDK_JOIN_CARDROOM: string = "33";

		//更改昵称
		static PAGE_GENGGAINC: string = "35";
		//首充
		static PAGE_FIRST_RECHARGE: string = "36";
		//兑换所需打码量
		static PAGE_QUKUANSXDML: string = "37";
		//提取明细
		static PAGE_TIQUJILU: string = "38";
		//推广帮助
		static PAGE_TUIGUANGHELP: string = "39";
		//HUD分享
		static PAGE_HUD_SHARE: string = "40";

		//余额宝
		static PAGE_YUEBAO: string = "44";
		//余额宝帮助
		static PAGE_YUEBAO_HELP: string = "45";

		//键盘
		static PAGE_JIANPAN: string = "48";
		//VIP界面
		static PAGE_VIP: string = "52";

		//VIP提升界面
		static PAGE_VIP_UP: string = "54";
		//登录注册绑定界面
		static PAGE_BINDPHONE: string = "55";
		//提示
		static PAGE_TIP: string = "100";
		//提示
		static PAGE_TIPS: string = "101";
		//退出提示
		static PAGE_QUIT_TIPS: string = "102";
		//取款密码设置
		static PAGE_SHEZHI_MIMA: string = "103";
		//取款密码提示
		static PAGE_MIMA_TISHI: string = "104";
		//输入取款密码
		static PAGE_SHURU_MIMA: string = "105";
		//gm
		static PAGE_GM: string = "999";

		static myinit(str: string) {
			if (DatingPageDef["isinit"]) return;
			super.myinit(str);
			DatingClip.init();
			PageDef._pageClassMap[DatingPageDef.PAGE_VIP] = VipPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_TIP] = Tips;
			PageDef._pageClassMap[DatingPageDef.PAGE_TIPS] = TipsPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_GUEST_TIP] = GuestTipPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QUIT_TIPS] = TipsQuit;
			if (WebConfig.enterGameLocked) {
				PageDef._pageClassMap[DatingPageDef.PAGE_HUD] = HudMainPageQPAE;
			} else {
				PageDef._pageClassMap[DatingPageDef.PAGE_HUD] = HudMainPage;
			}
			PageDef._pageClassMap[DatingPageDef.PAGE_XIAOXI] = MessagePage;
			PageDef._pageClassMap[DatingPageDef.PAGE_GENGGAINC] = GengGaiNCPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_GET_REWARD] = RewardPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_CHANGGE_HEAD] = HeadChangePage;
			PageDef._pageClassMap[DatingPageDef.PAGE_GM] = GMPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_LOGIN] = LoginPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_BINDMONEY] = BindMoneyPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_NEW_OPEN] = MailOpenPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_HUD_SHARE] = HudSharePage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QUKUAN] = QuKuanPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_KEFU] = KeFuPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_XINXI] = GeRenXinXiPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI] = ChongZhiPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_BINDYHK] = QuKuanBindYHKPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_BINDZFB] = QuKuanBindZFBPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_HUODONG] = HuoDongPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QUANMINDAILI] = TuiGuangPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANG1] = TuiGuangSavePage;
			PageDef._pageClassMap[DatingPageDef.PAGE_TIQUJILU] = TiQuJiLvPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_TUIGUANGHELP] = TuiGuangHelpPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_ZHUANPAN] = ZhuanPanPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QIANDAO] = QianDaoPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_GONGGAO] = GongGaoPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO] = YuEBaoPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_YUEBAO_HELP] = YuEBaoHelpPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_JIANPAN] = JianPanPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_VIP_UP] = VipUpPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_BINDPHONE] = LoginBindPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_FIRST_RECHARGE] = FirstRechargePage;
			PageDef._pageClassMap[DatingPageDef.PAGE_SHEZHI_MIMA] = QuKuanSetPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_MIMA_TISHI] = QuKuanTishiPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_SHURU_MIMA] = QuKuanMimaPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QUKUANSXDML] = QuKuanSXDMLPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QIFU_ANI] = QiFuPlayAniPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_QIFU] = QiFuPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_CREATE_CARD_ROOM] = CreateCardRoomBase;
			PageDef._pageClassMap[DatingPageDef.PAGE_JOIN_CARD_ROOM] = JoinCardRoomBase;
			PageDef._pageClassMap[DatingPageDef.PAGE_PDK_CREATE_CARDROOM] = CreadRoomPDKPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_PDK_JOIN_CARDROOM] = RpaodekuaiJoinRoomPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_HONGBAO] = HongBaoPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_CHONGZHI_RECORD] = ChongZhiRecordPage;


			if (WebConfig.enterGameLocked) {
				this["__needLoadAsset"] = [
					DatingPath.atlas_dating_ui + 'dating.atlas',
					DatingPath.atlas_dating_ui + 'datinggg.atlas',
					DatingPath.atlas_dating_ui + 'fk.atlas',
					DatingPath.atlas_dating_ui + 'tongyong.atlas',
				]
			} else {
				this["__needLoadAsset"] = [
					DatingPath.atlas_dating_ui + 'bangding.atlas',
					DatingPath.atlas_dating_ui + 'chongzhi.atlas',
					DatingPath.atlas_dating_ui + 'dating.atlas',
					DatingPath.atlas_dating_ui + 'denglu.atlas',
					DatingPath.atlas_dating_ui + 'denglurk.atlas',
					DatingPath.atlas_dating_ui + 'fenxiang.atlas',
					DatingPath.atlas_dating_ui + 'geren.atlas',
					DatingPath.atlas_dating_ui + 'huode.atlas',
					DatingPath.atlas_dating_ui + 'huodong.atlas',
					DatingPath.atlas_dating_ui + 'kehu.atlas',
					DatingPath.atlas_dating_ui + 'qiandao.atlas',
					DatingPath.atlas_dating_ui + 'qukuan.atlas',
					DatingPath.atlas_dating_ui + 'tongyong.atlas',
					DatingPath.atlas_dating_ui + 'tuiguang.atlas',
					DatingPath.atlas_dating_ui + 'xinxi.atlas',
					DatingPath.atlas_dating_ui + 'zhuanpan.atlas',
					DatingPath.atlas_dating_ui + 'vip.atlas',
					DatingPath.atlas_dating_ui + 'shezhi.atlas',
					DatingPath.atlas_dating_ui + 'yuebao.atlas',
					DatingPath.atlas_dating_ui + "shouchong.atlas",
					DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
					DatingPath.atlas_dating_ui + "jiaru.atlas",
					DatingPath.atlas_dating_ui + "fk.atlas",
					DatingPath.atlas_dating_ui + "datinggg.atlas",
					DatingPath.atlas_dating_ui + "hongbao.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "cz.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "tx.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "anniu.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "gxz.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "tj.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "new.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "dd.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "huore.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "update.atlas",

					DatingPath.ui_dating + "tuiguang/tu_tg3.jpg",
					DatingPath.ui_dating_tongyong + "mask_top.png",
					DatingPath.ui_dating_tongyong + "mask_bottom.png",
					DatingPath.ui_dating_tongyong + "mask_middle.png",
					DatingPath.ui_dating_tongyong + "mask_left.png",
					DatingPath.ui_dating_tongyong + "mask_right.png",
					//龙骨相关添加
					DatingPath.sk_dating + "shouchang.png",
					DatingPath.sk_dating + "vip.png",
					DatingPath.sk_dating + "bangdingsongjin.png",
					//特效部分添加
					Path.ui_atlas_effect + "coin.atlas",
					Path.ui_atlas_effect + "flycoin.atlas",
					Path.ui_atlas_effect + "hongbao.atlas",
					Path.ui_atlas_effect + "loading.atlas",
					Path.ui_atlas_effect + "shuzi.atlas",
					//通用预加载
					Path.atlas_game_ui_tongyong + "dating.atlas",
					Path.atlas_game_ui_tongyong + "general.atlas",
					Path.atlas_game_ui_tongyong + "hud.atlas",
					Path.atlas_game_ui_tongyong + "logo.atlas",
					Path.atlas_game_ui_tongyong + "pai.atlas",
					Path.atlas_game_ui_tongyong + "qz.atlas",
					Path.atlas_game_ui_tongyong + "touxiang.atlas",
					Path.atlas_game_ui_tongyong + "yq.atlas",
					Path.atlas_game_ui_tongyong + "fk.atlas",
					Path.ui_tongyong_sk + "HeGuan.sk",
					Path.ui_tongyong_sk + "HeGuan.png",
				];

			}
		}

		/**
		 * 热门
		 */
		static TYPE_HOT: string | number = 0;
		/**
		 * 棋牌
		 */
		static TYPE_CHESS: string | number = 1;
		/**
		 *	百人
		 */
		static TYPE_BAIREN: string | number = 2;
		/**
		 * 电玩
		 */
		static TYPE_GAME: string | number = 3;
		/**
		 * 房卡
		 */
		static TYPE_CARD: string | number = 4;

		/**
		 * 登录弹窗界面列表
		 * 1：绑定送金
		 * 2：首充界面
		 * 3：热门活动
		 * 4：公告
		 * 5：游客绑定提示
		 * 6：推广官网气泡
		 * 7：推广活动气泡框
		 * 8：其他系统推广浮窗
		 */
		static get LOGIN_POPUP() {
			return {
				"bdsq": DatingPageDef.PAGE_BINDMONEY,     //绑定送钱
				"xsyd": "",//新手引导
				"schd": DatingPageDef.PAGE_FIRST_RECHARGE,//首充活动
				"rmhd": DatingPageDef.PAGE_HUODONG,//热门活动
				"yxgg": DatingPageDef.PAGE_XIAOXI,//游戏公告
			}
		};

		/**
		 * 活动跳转界面列表
		 */
		static get GONGGAO_GOTO() {
			return {
				"2": DatingPageDef.PAGE_ZHUANPAN,
				"3": DatingPageDef.PAGE_QIANDAO,
				"4": DatingPageDef.PAGE_QUANMINDAILI,
				"5": DatingPageDef.PAGE_CHONGZHI,
				"6": DatingPageDef.PAGE_HUODONG,
				"7": DatingPageDef.PAGE_YUEBAO,
			}
		};

		/**
		 * 充值跳转界面子标签
		 */
		static get CHONGZHI_GOTO() {
			return {
				"2": Web_operation_fields.GAME_PAYIMG_TYPE_VIP,
				"3": Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK,
				"4": Web_operation_fields.GAME_PAYIMG_TYPE_WXHK,
				"5": Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK,
				"6": Web_operation_fields.GAME_PAYIMG_TYPE_YSF,
			}
		};

		static GAME_CARD_TYPE_LIST = {
			"ddz": [
				DatingPageDef.TYPE_CARD
			],
			"niuniu": [
				DatingPageDef.TYPE_CARD,
			],
			"paodekuai": [
				DatingPageDef.TYPE_CARD,
			],
			"shisanshui": [
				DatingPageDef.TYPE_CARD,
			],
		}

		static GAME_TYPE_LIST = {
			"baijiale": [
				DatingPageDef.TYPE_BAIREN,
			],
			"bairendezhou": [
				DatingPageDef.TYPE_BAIREN,
			],
			"benchibaoma": [
				DatingPageDef.TYPE_GAME,
			],
			"blackjack": [
				DatingPageDef.TYPE_CHESS,
			],
			"brniuniu": [
				DatingPageDef.TYPE_BAIREN,
			],
			"buyu": [
				DatingPageDef.TYPE_GAME,
			],
			"dezhou": [
				DatingPageDef.TYPE_CHESS,
			],
			"ebgang": [
				DatingPageDef.TYPE_CHESS,
			],
			"honghei": [
				DatingPageDef.TYPE_BAIREN,
			],
			"longhu": [
				DatingPageDef.TYPE_BAIREN,
			],
			"niuniu": [
				DatingPageDef.TYPE_CHESS,
			],
			"paijiu": [
				DatingPageDef.TYPE_CHESS,
			],
			"sangong": [
				DatingPageDef.TYPE_CHESS,
			],
			"shuiguoji": [
				DatingPageDef.TYPE_GAME,
			],
			"tbniuniu": [
				DatingPageDef.TYPE_CHESS,
			],
			"toubao": [
				DatingPageDef.TYPE_BAIREN,
			],
			"zjh": [
				DatingPageDef.TYPE_CHESS,
			],
			"zoo": [
				DatingPageDef.TYPE_GAME,
			],
			"mpniuniu": [
				DatingPageDef.TYPE_CHESS,
			],
			"wxsaoleihb": [
				DatingPageDef.TYPE_GAME,
			],

		}
	}
}