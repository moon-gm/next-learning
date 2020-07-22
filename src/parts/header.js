import React from 'react';
import Styles from './../sass/parts/header.module.scss';

const Header = ({func, states, allData}) => {

	return (
		<header className="header">
			<ul className={Styles.headerList}>

				{/* ヘッダーロゴ - start - */}
					<li className={`${Styles.headerLogo} ${Styles.item}`}>
						<img
							src="/nextjs.svg"
							alt="logo"
							className={`${Styles.animation} ${Styles.logo}`}
						/>
					</li>
				{/* ヘッダーロゴ - end - */}

				{/* ヘッダータイトル - start - */}
					<li className={`${Styles.headerTitle} ${Styles.item}`}>
						{ // 全ページ設定情報（allData）をループして表示するヘッダータイトルを設定
							allData.map(pageData => {
								// pageDataに子リスト(children)がない場合のルーティング
								if (pageData.children === void 0) {
									return (
										<React.Fragment key={`page${pageData.state.page}`}>
											{states.page === pageData.state.page && pageData.name}
										</React.Fragment>
									);
								}

								// pageDataに子リスト(children)がある場合のルーティング
								else {
									return (
										<React.Fragment key={`page${pageData.state.page}`}>
											{ // 子リスト(children)がある個別ページ設定情報（pageData）をループして表示するヘッダータイトルを設定
												pageData.children.map(pageDataWithC => {
													return (
														<React.Fragment key={`page${pageDataWithC.state.page}`}>
															{states.page === pageDataWithC.state.page && pageDataWithC.name}
														</React.Fragment>
													);
												})
											}
										</React.Fragment>
									);
								}
							})
						}
					</li>
				{/* ヘッダータイトル - end - */}

				{/* メニューボタンPC - start - */}
					{
						states.menu === "show" && (
							<li
								className={Styles.menuBtnPC}
								onClick={func[0].Menu}
								id="menuBtnPC"
								disabled
							>
								Close Menu ▲
							</li>
						)
					}
					{
						states.menu === "hide" && (
							<li
								className={Styles.menuBtnPC}
								onClick={func[0].Menu}
								id="menuBtnPC"
							>
								Open Menu ▼
							</li>
						)
					}
				{/* メニューボタン - end - */}

				{/* メニューボタンSP - start - */}
					<li
						className={Styles.menuBtnSP}
						id="menuBtnSP"
						onClick={func[0].Menu}
					>
						≡
					</li>
				{/* メニューボタンSP - end - */}

			</ul>
		</header>
);
}

export default Header;
