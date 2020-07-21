import States from "./../../config/states";

// 子リストのページの表示処理
function showPageSection(section) {
	// sessionStorageに保存されている値を取得
	var getBack = [this.state.page];
	for (var i = 1; i <= 4; i++) {getBack.push(sessionStorage.getItem('back' + i + 'Page'));}

	// sessionStorageに保存されている値を書き換え
	for (var j = 0; j <=4; j++) {
		sessionStorage.setItem('back' + (j+1) + 'Page', getBack[j]);
	}
	// 値がなかった時の処理
	if (getBack.includes(null)) {
		for (var k = 1; k <= 5; k++) {sessionStorage.setItem('back' + k + 'Page', this.state.page);}
	}

	// ページコンポーネントを表示してメニューを非表示
	this.setState({page: section});
	this.setState({menu: States.menu.hide});

	// 画面の最上部を表示
	window.scrollTo(0, 0);
}

export default showPageSection;
