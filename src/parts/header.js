import React from 'react';
import Router from './../config/routes';
import Styles from './../sass/parts/header.module.scss';

const Header = ({allData, states, func}) => {
	return (
		<header className="header">
			<ul className={Styles.headerList}>

				{/* ヘッダーロゴ - start - */}
					<li className={`${Styles.headerLogo} ${Styles.item}`}>
						{states.page === "0" && (
							<img
								src="/vercel.svg"
								alt="logo"
								className={`${Styles.animation} ${Styles.logo}`}
								// onClick={func[0].Back}
							/>
						)}
					</li>
				{/* ヘッダーロゴ - end - */}

				{/* ヘッダータイトル - start - */}
					<li className={`${Styles.headerTitle} ${Styles.item}`}>
						<Router.Header
							allData={allData}
							states={states}
						/>
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
								// onClick={func[0].Menu}
								id="menuBtnPC"
							>
								Open Menu ▼
							</li>
						)
					}
				{/* メニューボタン - end - */}

				{/* メニューボタンSP - start - */}
					{
						states.menu === "show" && (
							<li
								className={Styles.menuBtnSP}
								// onClick={func[0].Menu}
								id="menuBtnSP"
								disabled
							>
								≡
							</li>
						)
					}
					{
						states.menu === "hide" && (
							<li
								className={Styles.menuBtnSP}
								// onClick={func[0].Menu}
								id="menuBtnSP"
							>
								≡
							</li>
						)
					}
				{/* メニューボタンSP - end - */}

			</ul>
		</header>
);
}

export default Header;
