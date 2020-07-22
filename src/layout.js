import React from 'react';
import Head from 'next/head'

// 各種コンポーネント取得
import Parts from './config/parts';

// State設定値取得
import States from './config/states';

const Layout = ({allData, state, funcs, children, pageName}) => {
	return (
		<>
			{/* SEO設定 */}
			<Head>
				<title>Next Learning | {pageName}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex-box">

				{/* サイドエリア */}
				{state.menu === States.menu.show && (
					<Parts.Aside
						allData={allData}
						states={state}
					/>
				)}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Parts.Header
						allData={allData}
						states={state}
						funcs={funcs}
					/>

					{/* メインエリア */}
					<main className="main">
						{children}
					</main>

				</div>
			</div>
		</>
	);
}

export default Layout;
