// Global-CSS設定
import './../sass/App.scss'

// 各種コンポーネント取得
import Parts from './../config/parts';

// 各種設定値取得
import AllData from './../config/allData';
import Functions from './../config/functions';
import States from './../config/states';

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

		/***** functionの設定 *****/
		this.funcs = [
			{
				"Top": Functions.Page.bind(this, States.page.Top),
				"Menu": Functions.Menu.bind(this),
			},
			{
				"Page1": {
					"L1": Functions.List.bind(this, States.list.list1),
					"S1": Functions.PageSection.bind(this, States.page.Page1.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page1.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page1.S3),
				},
			},
			{
				"Page2": {
					"L2": Functions.List.bind(this, States.list.list2),
					"S1": Functions.PageSection.bind(this, States.page.Page2.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page2.S2),
				},
			},
			{
				"Page3": {
					"L3": Functions.List.bind(this, States.list.list3),
					"S1": Functions.PageSection.bind(this, States.page.Page3.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page3.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page3.S3),
					"S4": Functions.PageSection.bind(this, States.page.Page3.S4),
				},
			},
			{
				"Page4": {
					"L4": Functions.List.bind(this, States.list.list4),
					"S1": Functions.PageSection.bind(this, States.page.Page4.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page4.S2),
				},
			},
			{
				"Page5": {
					"L5": Functions.List.bind(this, States.list.list5),
					"S1": Functions.PageSection.bind(this, States.page.Page5.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page5.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page5.S3),
					"S4": Functions.PageSection.bind(this, States.page.Page5.S4),
					"S5": Functions.PageSection.bind(this, States.page.Page5.S5),
					"S6": Functions.PageSection.bind(this, States.page.Page5.S6),
					"S7": Functions.PageSection.bind(this, States.page.Page5.S7),
					"S8": Functions.PageSection.bind(this, States.page.Page5.S8),
					"S9": Functions.PageSection.bind(this, States.page.Page5.S9),
					"S10": Functions.PageSection.bind(this, States.page.Page5.S10),
					"S11": Functions.PageSection.bind(this, States.page.Page5.S11),
					"S12": Functions.PageSection.bind(this, States.page.Page5.S12),
					"S13": Functions.PageSection.bind(this, States.page.Page5.S13),
					"S14": Functions.PageSection.bind(this, States.page.Page5.S14),
					"S15": Functions.PageSection.bind(this, States.page.Page5.S15),
					"S16": Functions.PageSection.bind(this, States.page.Page5.S16),
					"S17": Functions.PageSection.bind(this, States.page.Page5.S17),
					"S18": Functions.PageSection.bind(this, States.page.Page5.S18),
					"S19": Functions.PageSection.bind(this, States.page.Page5.S19),
					"S20": Functions.PageSection.bind(this, States.page.Page5.S20),
				},
			},
			{
				"Page6": {
					"L6": Functions.List.bind(this, States.list.list6),
					"S1": Functions.PageSection.bind(this, States.page.Page6.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page6.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page6.S3),
					"S4": Functions.PageSection.bind(this, States.page.Page6.S4),
				},
			},
			{
				"Page7": {
					"L7": Functions.List.bind(this, States.list.list7),
					"S1": Functions.PageSection.bind(this, States.page.Page7.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page7.S2),
				},
			},
			{
				"Page8": {
					"L8": Functions.List.bind(this, States.list.list8),
					"S1": Functions.PageSection.bind(this, States.page.Page8.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page8.S2),
				},
			},
			{
				"Page9": {
					"L9": Functions.List.bind(this, States.list.list9),
					"S1": Functions.PageSection.bind(this, States.page.Page9.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page9.S2),
				},
			},
			{
				"Page10": {
					"L10": Functions.List.bind(this, States.list.list10),
					"S1": Functions.PageSection.bind(this, States.page.Page10.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page10.S2),
				},
			},

		];

		/***** ページデータ設定 *****/
		this.allData = AllData(this.funcs);

	}

	render() {
		/***** childrenの設定 *****/
		// childrenに渡すPropsの設定
		const additionalProps = {
			allData: this.allData
		}
		// 子要素を再生成してPropsを渡す設定
		const newChildren = React.cloneElement(this.props.children, additionalProps);

		return (
			<div className="flex-box">

				{/* サイドエリア */}
				{this.state.menu === States.menu.show && (
					<Parts.Aside
						allData={this.allData}
						states={this.state}
					/>
				)}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Parts.Header
						allData={this.allData}
						states={this.state}
						funcs={this.funcs}
					/>

					{/* メインエリア */}
					<main className="main">
						{newChildren}
					</main>

				</div>

			</div>
		);
	}

}

export default function App({ Component, pageProps }) {
    return (
		<Layout>
			<Component
				{...pageProps}
			/>
		</Layout>
	);
  }
