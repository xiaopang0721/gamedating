/**
* 输入文本组件
*/
module gamedating.page {
	export class ApiSxList extends ui.ajqp.dating.component.List_Sx_API1UI {
		private _game: Game;

		constructor(game: Game) {
			super();
			this._game = game;

			this.list.dataSource = [];
			this.list.hScrollBarSkin = "";
			this.list.scrollBar.autoHide = true;
			this.list.scrollBar.elasticDistance = 100;
			this.list.itemRender = ListApiRender;
			this.list.renderHandler = new Handler(this, this.renderHandler);
		}
		/**
		* 
		* @param data 二维数组[[大图标,[小图标1,小图标2..]],[...]]
		*/
		setdata(data: any) {
			this.list.dataSource = data;
			// Laya.timer.frameOnce(3, this, () => {
			// 	if (data) {
			// 		let maxVal = 0
			// 		for (let i = 0; i < data.length; i++) {
			// 			let num = data[i][1].length;
			// 			let real_width = 314 + 297 * num + 10 * (num - 1);
			// 			maxVal += real_width + 15;
			// 		}
			// 		this.list.scrollBar.max = maxVal;
			// 	}
			// })
		}

		//把屏幕实际宽度设进来
		layout(clientRealWidth: number) {
			this.list.width = clientRealWidth ? clientRealWidth : 1280;
		}

		private _real_width: number[] = [];
		private renderHandler(cell: ListApiRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
				let real_x: number = 0;
				if (this._real_width.length > 0) {
					for (let i = 0; i < this._real_width.length; i++) {
						if (index > i) {
							real_x += this._real_width[i];
						}
					}
				}
				let realwidth = cell.resizeList(index, real_x);
				this._real_width[index] = realwidth
			};
		}

		destroy(): void {
			this.list.dataSource = [];
			Laya.timer.clearAll(this);
			super.destroy();
		}
	}


	class ListApiRender extends ui.ajqp.dating.component.Hud_Sx_APIUI {
		private _game: Game;
		private _data_img: any;
		private _data_list: any;

		constructor() {
			super();
		}

		setData(game: Game, data: any) {
			this._game = game;
			this._data_img = data[0];
			this._data_list = data[1];
			this.img_sx.skin = DatingPath.sk_dating + "SX/SX_zr.png"//this._data_img;

			this.list_sx.hScrollBarSkin = "";
			this.list_sx.scrollBar.autoHide = true;
			this.list_sx.scrollBar.elasticDistance = 100;
			this.list_sx.itemRender = HudSxApiRender;
			this.list_sx.renderHandler = new Handler(this, this.renderHandler);
			this.list_sx.dataSource = this._data_list;

		}

		private renderHandler(cell: HudSxApiRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		private _real_x: number = 0;
		resizeList(index: number, real_x: number) {
			let num = Math.ceil(this._data_list.length / 2); //列数，每两个一列，单数也算一列
			let real_width = 297 * num + 10 * (num - 1);
			this.list_sx.width = real_width;
			this.width = 314 + real_width;
			this.x = real_x;
			console.log("index=", index, "cell.x=", this.x, "cell.width", this.width)
			return this.width + 15
		}

		destroy() {
			super.destroy();
		}
	}

	class HudSxApiRender extends ui.ajqp.dating.component.Hud_Sx1_APIUI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any) {
			this._game = game;
			this._data = data;
			this.img.skin = DatingPath.sk_dating + "SX/SX_bjl.png"//data;
			this.on(LEvent.CLICK, this, this.onClickHandle);
		}

		private onClickHandle(e: LEvent) {

		}

		destroy() {
			super.destroy();
		}
	}
}