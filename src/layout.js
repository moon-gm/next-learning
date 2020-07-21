import React from 'react';
import Head from 'next/head'

// 各種コンポーネント取得
import Router from './config/routes'
import Parts from './config/parts';

// 各種設定値取得
import AllData from './config/allData';
import Functions from './config/functions';
import States from './config/states';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		/***** state初期値設定 *****/
		this.state = {
			// ページ表示設定
			page: States.page.Top,
			 // サイドエリア表示設定
			menu: States.menu.hide,
			// サイドエリアの子リスト表示
			list: States.list.hide,
		}

		/***** functionの初期値設定 *****/
		this.funcs = [
			{
				"Top": Functions.Page.bind(this, States.page.Top),
				"Menu": Functions.Menu.bind(this),
				"Back": Functions.Back.bind(this),
			},
			{
				"Page1": {
					"L1": Functions.List.bind(this, States.list.list1),
					"S1": Functions.PageSection.bind(this, States.page.Page1.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page1.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page1.S3),
				},
			},

		];

		/***** ページデータ設定 *****/
		this.allData = AllData(this.funcs);

	}

	render() {
		const additionalProps = {alldata: this.allData}
		const newChildren = React.cloneElement(this.props.children, additionalProps);
		return (
			<>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="flex-box">

					{/* サイドエリア */}
					{this.state.menu === States.menu.show && (
						<Parts.Aside
							allData={this.allData}
							states ={this.state}
						/>
					)}

					{/* コンテンツエリア */}
					<div className="contents">

						{/* ヘッダーエリア */}
						<Parts.Header
							allData={this.allData}
							states={this.state}
							func={this.funcs}
						/>

						{/* メインエリア */}
						<main className="main">
							{newChildren}
						</main>

					</div>
				</div>
			</>
		);
	}

}

export default Layout;
