import React from 'react';
import Head from 'next/head'
import pages from './../config/pages'

const SEO = ({pageName}) => {
	return (
		<>
			{/* SEO設定 */}
			<Head>
				<title>{pageName} | {pages.Top.Name}</title>
				<link rel="icon" href="/nextjs.svg" />
			</Head>
		</>
	);
}

export default SEO;
