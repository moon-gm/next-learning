import React from 'react';
import Styles from './../sass/parts/aside.module.scss';
import Router from './../config/routes';

class Aside extends React.Component {

	constructor(props) {
		super(props);
		this.wrapper = React.createRef();

		// 変数初期値定義
		this.listNeeds = {};
	}

	render() {
		return (
			<aside ref={this.wrapper}　className="aside">
				<ul className={Styles.asideScroll}>
					{console.log({"AllPages": this.props.allData})}
					{ //サイドメニュー一覧をループで作成
						this.props.allData.map((pageData) => {

							// 子リストがなければ以下で作成
							if (pageData.children === void 0) {
								// 親リスト
								return (
									<li
										className={Styles.sideList}
										onClick={pageData.func}
										id={pageData.state.page}
										key={`key${pageData.state.page}`}
									>
										<span className={Styles.sideListText}>
											{pageData.name}
										</span>
									</li>
								);
							}

							// 子リストがあれば以下で作成
							else {
								// 親リスト
								return (
									<React.Fragment key={`flag${pageData.state.page}`}>
										<li
											className={Styles.sideList}
											onClick={pageData.func}
											id={pageData.state.page}
											key={`key${pageData.state.page}`}
										>
											<span className={Styles.sideListText}>
												{pageData.name}
											</span>
										</li>

										{ /* 子リストをループで作成 */
											pageData.children.map((item) => {

												// 子リストコンポーネントに渡すのに必要な情報の抽出
												this.listNeeds = {
													"sideList": Styles.sideList,
													"sideListChildren": Styles.sideListChildren,
													"sideListText": Styles.sideListText,
													"func": item.func,
													"state": {
														"page": item.state.page,
														"list": item.state.list,
													},
													"name": item.name,
												};
												// 子リストのルート設定
												return (
													<Router.LittleList
														listNeeds={this.listNeeds}
														states={this.props.states}
														key={`key${this.listNeeds.state.page}`}
													/>
												);
											})
										}
									</React.Fragment>
								);
							}
						})
					}
				</ul>
			</aside>
		);
	}
}

export default Aside;
