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
		//api设置界面
		static PAGE_API_SETTING: string = "53";
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
		//洗码
		static PAGE_XM: string = "106";
		//洗码记录
		static PAGE_XM_RECORD: string = "107";
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
				PageDef._pageClassMap[DatingPageDef.PAGE_HUD] = HudMainPageQPAPI;
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
			PageDef._pageClassMap[DatingPageDef.PAGE_XM_RECORD] = XiMaRecordPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_XM] = XiMaPage;
			PageDef._pageClassMap[DatingPageDef.PAGE_API_SETTING] = ApiSettingPage;


			if (WebConfig.enterGameLocked) {
				this["__needLoadAsset"] = [
					DatingPath.atlas_dating_ui + "dating.atlas",
					DatingPath.atlas_dating_ui + "rk.atlas",
					DatingPath.atlas_dating_ui + "datinggg.atlas",
					DatingPath.atlas_dating_ui + "aeqp.atlas",
					DatingPath.atlas_dating_ui + "anniu.atlas",
					DatingPath.atlas_dating_ui + "tongyong.atlas",
					DatingPath.atlas_dating_ui + "update.atlas",
					DatingPath.atlas_dating_ui + "gxz.atlas",
					DatingPath.atlas_dating_ui + "dd.atlas",
					DatingPath.atlas_dating_ui + "zt.atlas",
					DatingPath.atlas_dating_ui + "fk.atlas",
					DatingPath.atlas_dating_ui + "tj.atlas",
					DatingPath.atlas_dating_ui + "huore.atlas",
					DatingPath.atlas_dating_ui + "new.atlas",
					//美女龙骨相关添加
					DatingPath.sk_dating + "fmqq.png",
					DatingPath.sk_dating + "jddw.png",
					DatingPath.sk_dating + "wrzx.png",
					DatingPath.sk_dating + "zrdz.png",
				]
			} else {
				this["__needLoadAsset"] = [
					DatingPath.atlas_dating_ui + 'bangding.atlas',
					DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
					DatingPath.atlas_dating_ui + 'chongzhi.atlas',
					DatingPath.atlas_dating_ui + 'dating.atlas',
					DatingPath.atlas_dating_ui + "datinggg.atlas",
					DatingPath.atlas_dating_ui + 'denglu.atlas',
					DatingPath.atlas_dating_ui + 'denglurk.atlas',
					DatingPath.atlas_dating_ui + 'fenxiang.atlas',
					DatingPath.atlas_dating_ui + "fk.atlas",
					DatingPath.atlas_dating_ui + 'geren.atlas',
					DatingPath.atlas_dating_ui + "hongbao.atlas",
					DatingPath.atlas_dating_ui + 'huode.atlas',
					DatingPath.atlas_dating_ui + 'huodong.atlas',
					DatingPath.atlas_dating_ui + "jiaru.atlas",
					DatingPath.atlas_dating_ui + 'kehu.atlas',
					DatingPath.atlas_dating_ui + 'qiandao.atlas',
					DatingPath.atlas_dating_ui + 'qukuan.atlas',
					DatingPath.atlas_dating_ui + 'shezhi.atlas',
					DatingPath.atlas_dating_ui + "shouchong.atlas",
					DatingPath.atlas_dating_ui + 'tongyong.atlas',
					DatingPath.atlas_dating_ui + 'tuiguang.atlas',
					DatingPath.atlas_dating_ui + 'vip.atlas',
					DatingPath.atlas_dating_ui + 'xima.atlas',
					DatingPath.atlas_dating_ui + 'xinxi.atlas',
					DatingPath.atlas_dating_ui + 'yuebao.atlas',
					DatingPath.atlas_dating_ui + 'zhuanpan.atlas',

					DatingPath.atlas_dating_ui_dating_effect + "anniu.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "cz.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "dd.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "gxz.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "huore.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "new.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "tj.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "tx.atlas",
					DatingPath.atlas_dating_ui_dating_effect + "update.atlas",

					DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
					DatingPath.atlas_dating_ui_tongyong + "di.atlas",
					DatingPath.atlas_dating_ui_tongyong + "huode.atlas",

					//单张图添加
					DatingPath.ui_dating + "tuiguang/tu_tg3.jpg",
					DatingPath.ui_dating + "kehu/kehu_1.png",
					DatingPath.ui_dating + "qifu/f_cs1.png",
					DatingPath.ui_dating + "qifu/f_gg1.png",
					DatingPath.ui_dating + "qifu/f_gsy1.png",
					DatingPath.ui_dating + "qifu/f_px1.png",
					DatingPath.ui_dating + "qifu/f_tdg1.png",
					DatingPath.ui_dating + "qifu/f_xs1.png",
					DatingPath.ui_dating_tongyong + "mask_bottom.png",
					DatingPath.ui_dating_tongyong + "mask_left.png",
					DatingPath.ui_dating_tongyong + "mask_middle.png",
					DatingPath.ui_dating_tongyong + "mask_right.png",
					DatingPath.ui_dating_tongyong + "mask_top.png",
					DatingPath.ui_dating_tongyong + "tu_hd.png",
					DatingPath.ui_dating + "touxiang/f_cs2.png",
					DatingPath.ui_dating + "touxiang/f_gg2.png",
					DatingPath.ui_dating + "touxiang/f_gsy2.png",
					DatingPath.ui_dating + "touxiang/f_px2.png",
					DatingPath.ui_dating + "touxiang/f_tdg2.png",
					DatingPath.ui_dating + "touxiang/f_xs2.png",
					DatingPath.ui_dating + "touxiang/tu_jb1.png",
					DatingPath.ui_dating + "touxiang/tu_jb2.png",
					DatingPath.ui_dating + "touxiang/tu_jb3.png",
					DatingPath.ui_dating + "touxiang/tu_jb4.png",
					DatingPath.ui_dating + "touxiang/tu_jb5.png",
					DatingPath.ui_dating + "touxiang/tu_jb6.png",
					DatingPath.ui_dating + "touxiang/tu_jb7.png",
					DatingPath.ui_dating + "touxiang/tu_jb8.png",
					DatingPath.ui_dating + "touxiang/tu_jb9.png",
					DatingPath.ui_dating + "touxiang/tu_jb10.png",
					DatingPath.ui_dating + "touxiang/tu_shou.png",
					DatingPath.ui_dating + "touxiang/tu_tx0.png",
					DatingPath.ui_dating + "touxiang/tu_tx1.png",
					DatingPath.ui_dating + "touxiang/tu_tx2.png",
					DatingPath.ui_dating + "touxiang/tu_tx3.png",
					DatingPath.ui_dating + "touxiang/tu_tx4.png",
					DatingPath.ui_dating + "touxiang/tu_tx5.png",
					DatingPath.ui_dating + "touxiang/tu_tx6.png",
					DatingPath.ui_dating + "touxiang/tu_tx7.png",
					DatingPath.ui_dating + "touxiang/tu_tx8.png",
					DatingPath.ui_dating + "touxiang/tu_tx9.png",
					DatingPath.ui_dating + "touxiang/tu_tx10.png",
					DatingPath.ui_dating + "touxiang/tu_tx11.png",
					DatingPath.ui_dating + "touxiang/tu_tx12.png",
					DatingPath.ui_dating + "touxiang/tu_tx13.png",
					DatingPath.ui_dating + "touxiang/tu_tx14.png",
					DatingPath.ui_dating + "touxiang/tu_tx15.png",
					DatingPath.ui_dating + "touxiang/tu_tx16.png",
					DatingPath.ui_dating + "touxiang/tu_tx17.png",
					DatingPath.ui_dating + "touxiang/tu_tx18.png",
					DatingPath.ui_dating + "touxiang/tu_tx19.png",
					DatingPath.ui_dating + "touxiang/tu_txcs.png",
					DatingPath.ui_dating + "touxiang/tu_txgg.png",
					DatingPath.ui_dating + "touxiang/tu_txgsy.png",
					DatingPath.ui_dating + "touxiang/tu_txpx.png",
					DatingPath.ui_dating + "touxiang/tu_txtdg.png",
					DatingPath.ui_dating + "touxiang/tu_txk0.png",
					DatingPath.ui_dating + "touxiang/tu_txk1.png",
					DatingPath.ui_dating + "touxiang/tu_txk2.png",
					DatingPath.ui_dating + "touxiang/tu_txk3.png",
					DatingPath.ui_dating + "touxiang/tu_txk4.png",
					DatingPath.ui_dating + "touxiang/tu_txk5.png",
					DatingPath.ui_dating + "touxiang/tu_txk6.png",
					DatingPath.ui_dating + "touxiang/tu_txk7.png",
					DatingPath.ui_dating + "touxiang/tu_txk8.png",
					DatingPath.ui_dating + "touxiang/tu_txk9.png",
					DatingPath.ui_dating + "touxiang/tu_txk10.png",
					DatingPath.ui_dating + "touxiang/tu_txk11.png",
					DatingPath.ui_dating + "vip/tu_vip0.png",
					DatingPath.ui_dating + "vip/tu_vip1.png",
					DatingPath.ui_dating + "vip/tu_vip2.png",
					DatingPath.ui_dating + "vip/tu_vip3.png",
					DatingPath.ui_dating + "vip/tu_vip4.png",
					DatingPath.ui_dating + "vip/tu_vip5.png",
					DatingPath.ui_dating + "vip/tu_vip6.png",
					DatingPath.ui_dating + "vip/tu_vip7.png",
					DatingPath.ui_dating + "vip/tu_vip8.png",
					DatingPath.ui_dating + "vip/tu_vip9.png",
					DatingPath.ui_dating + "vip/tu_vip10.png",
					DatingPath.ui_dating + "vip/tu_vip11.png",

					DatingPath.ui_dating + "sk/tu_jiazai.png",
					DatingPath.ui_dating + "sk/JDB/tu_jiazai3.png",
					DatingPath.ui_dating + "sk/QP/tu_jiazai1.png",
					DatingPath.ui_dating + "sk/SX/tu_jiazai2.png",
					DatingPath.ui_dating + "sk/SX/tu_jiazai4.png",

					//龙骨相关添加
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
					DatingPath.sk_dating + "DZ_rniuniu.png",
					DatingPath.sk_dating + "DZ_paijiu.png",
					DatingPath.sk_dating + "DZ_toubao.png",
					DatingPath.sk_dating + "DZ_sangong.png",
					DatingPath.sk_dating + "DZ_rshisanshui.png",
					DatingPath.sk_dating + "DZ_shuiguoji.png",
					DatingPath.sk_dating + "DZ_tbniuniu.png",
					DatingPath.sk_dating + "DZ_zjh.png",
					DatingPath.sk_dating + "DZ_rpaodekuai.png",
					DatingPath.sk_dating + "DZ_zoo.png",
					DatingPath.sk_dating + "DZ_mpniuniu.png",
					DatingPath.sk_dating + "DZ_wxsaoleihb.png",
					DatingPath.sk_dating + "qiandao.png",
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