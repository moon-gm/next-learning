import React from 'react';
import SEO from './../../parts/SEO'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const EnvironmentManual = ({allData}) => {
	return (
		<>
			<SEO pageName={allData[1].children[1].name} />
			<div className="page-layout">

				<h2 className="h2">
					1. ディレクトリ作成
				</h2>
					<p className="p">
						プロジェクト用のディレクトリを作成し、以下のコマンドを実行し、package.jsonを作成
					</p>
					<p className="p">
						<span className="command">
							$ npm init -y
						</span>
					</p>
					<p className="p">
						作成したプロジェクトのディレクトリに移動し、以下のコマンドで必要なフォルダを作成
					</p>
					<p className="p">
						<span className="command">
							$ mkdir pages(src/pagesでも可)
						</span>
					</p>
					<p className="p">
						このpages(src/pages)フォルダは、ページコンポーネントを格納し、ルーティングをするために必須
					</p>

				<h2 className="h2">
					2. nextとreactとreact-domのインストール
				</h2>
					<p className="p">
						NextとReactを使えるようにする
					</p>
					<p className="p">
						以下のコマンドを実行するとプロジェクト配下にnode_modulesフォルダが作成され、package.jsonのdependenciesにnextとreactとreact-domが記載される
					</p>
					<p className="p">
						<span className="command">
							$ npm install --save react react-dom next
						</span>
					</p>

				<h2 className="h2">
					3. npm-scriptsの設定
				</h2>
					<p className="p">
						ファイルのビルド関連の設定をする
					</p>
					<p className="p">
						以下のようにpackage.jsonに追加する
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page1.Section2.code1}
					/>
					<p className="p">
						以下のコマンドを実行することでnextの開発環境が立ち上がり、404のエラー画面が表示されればOK（まだindex.jsを作成していないため）
					</p>
					<p className="p">
						<span className="command">
							$ npm run dev
						</span>
					</p>

			</div>
		</>
	);
}
export default EnvironmentManual;
