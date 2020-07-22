import React from 'react';
import SEO from './../parts/SEO'
import urls from './../config/outerUrls'
import codes from './../config/codes'
import Parts from './../config/parts'

const Sample = ({allData}) => {

	const tableData = [
		{propsName: "enableMouseEvents", roll: "マウス操作でスワイプできるようになる",},
		{propsName: "action", roll: "コンポーネントがマウントされた時点で実行する関数を指定",},
	];

	return (
		<>
			<SEO pageName={allData[1].children[0].name} />
			<div className="page-layout">

				<h1 className="h1">
					1. タイトル１
				</h1>
				<h2 className="h2">
					1-1. タイトル２
				</h2>
				<h3 className="h3">
					1-1-1. タイトル３
				</h3>
				<p className="p">
					段落テキスト
				</p>
				<p className="p">
					<span className="command">
						＄コマンド
					</span>
					<br/>
					<Parts.OuterLink
						url={urls.NextOfficial.Deploy}
						linkText="? リンク"
					/>
				</p>
				<div className="img-box">
					<img src="/screen.png" alt="画像サンプル" />
				</div>
				<Parts.CodeHighlighter
					language={codes.languages.jsx}
					codeString={codes.pages.Page1.Section1.code1}
				/>
				<Parts.TableForProps tableData={tableData}/>
			</div>
		</>
	);
}

export default Sample;
