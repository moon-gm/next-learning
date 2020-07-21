// 戻るボタン押下時処理
function backPage() {

	/** sessionStorageに入っている値を取得 **/
	// ページのStateの取得
	var getBack = [];
	for (var i = 0; i <= 5; i++) {getBack.push(sessionStorage.getItem('back' + i + 'Page'));}
	// 値がなかった時の処理
	if (getBack[1] === null) {
		for (var j = 0; j <= 5; j++) {sessionStorage.setItem('back' + j + 'Page', this.state.page);}
	}

	// バックカウントの取得
	var backCount = sessionStorage.getItem('backCount');
	// 値がなかった時の処理
	if (backCount === null) {
		sessionStorage.setItem('backCount', "1");
	}

	// Top画面ではボタンが効かないように制御
	if (this.state.page !== "0") {
		// backCountの値により条件分岐し、5ページ分のバックを可能にする
		if (backCount === "1") {
			this.setState({page: getBack[1]});
			sessionStorage.setItem('backCount', "2");

		} else if (backCount === "2") {
			this.setState({page: getBack[2]});
			sessionStorage.setItem('backCount', "3");

		} else if (backCount === "3") {
			this.setState({page: getBack[3]});
			sessionStorage.setItem('backCount', "4");

		} else if (backCount === "4") {
			this.setState({page: getBack[4]});
			sessionStorage.setItem('backCount', "5");

		} else if (backCount === "5") {
			this.setState({page: getBack[5]});
			sessionStorage.setItem('backCount', "1");

		}
	}
}

export default backPage;
