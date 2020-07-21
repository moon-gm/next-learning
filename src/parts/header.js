import React from 'react';
import Styles from './../sass/parts/header.module.scss';

const Header = ({func}) => {
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
						Next Learning
					</li>
				{/* ヘッダータイトル - end - */}

				{/* メニューボタンPC - start - */}
					<li
						className={Styles.menuBtnPC}
						id="menuBtnPC"
						onClick={func[0].Menu}
					>
						Open Menu ▼
					</li>
				{/* メニューボタン - end - */}

				{/* メニューボタンSP - start - */}
					<li
						className={Styles.menuBtnSP}
						id="menuBtnSP"
					>
						≡
					</li>
				{/* メニューボタンSP - end - */}

			</ul>
		</header>
);
}

export default Header;
