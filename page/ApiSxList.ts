/**
* 输入文本组件
*/
module gamedating.page {
	export class ApiSxList extends ui.ajqp.dating.component.List_Sx_API1UI {
		private _game: Game;

		constructor(game: Game) {
			super();
			this._game = game;
			
			this.list.hScrollBarSkin = "";
			this.list.scrollBar.autoHide = true;
			this.list.scrollBar.elasticDistance = 100;
			this.list.itemRender = ListApiRender;
			this.list.renderHandler = new Handler(this, this.renderHandler);
			this.list.dataSource = [];
		}
		/**
		* 
		* @param data 二维数组[[大图标,[小图标1,小图标2..]],[...]]
		*/
		setdata(data: any) {
			this._real_width = 0;
			this._real_x = 0;
			this.list.dataSource = data;
		}

		//把屏幕实际宽度设进来
		layout(clientRealWidth: number) {
			this.list.width = clientRealWidth;
		}

		private _real_width: number = 0;
		private _real_x: number = 0;
		private renderHandler(cell: ListApiRender, index: number) {
			if (!cell) return;
			cell.setData(this._game, cell.dataSource);
			let real_width = cell.resizeList();
			cell.x = this._real_x;
			cell.width = real_width;
			this._real_x += this._real_width + 10;
		}

		destroy(): void {
			this.list.dataSource = [];
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
			if (!data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this._game = game;
			this._data_img = data[0];
			this._data_list = data[1];
			this.img_sx.skin = DatingPath.sk_dating + "SX/SX_zr.png"//this._data_img;

			this.list_sx.hScrollBarSkin = "";
			this.list_sx.scrollBar.autoHide = true;
			this.list_sx.scrollBar.elasticDistance = 100;
			this.list_sx.itemRender = HudSxApiRender;
			this.list_sx.renderHandler = new Handler(this, this.renderHandler);
			this.list_sx.dataSource = [];

		}

		private renderHandler(cell: HudSxApiRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		resizeList() {
			let num = Math.ceil(this._data_list / 2); //列数，每两个一列，单数也算一列
			let real_width = 296 * num + 10 * (num - 1);
			this.list_sx.width = real_width;
			return real_width;
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
			if (!this._data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this.img.skin = DatingPath.sk_dating + "SX/SX_bjl.png"//data;
		}
		destroy() {
			super.destroy();
		}
	}
}