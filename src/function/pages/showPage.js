import States from "../../config/states";

// ページ(子リストなし)の表示処理
function showPage(pageState) {
	this.setState({page: pageState});
	this.setState({menu: States.menu.hide});
}

export default showPage;
