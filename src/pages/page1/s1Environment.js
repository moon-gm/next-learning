import React from 'react';
import Layout from './../../layout'

const Environment = ({state, allData, funcs}) => {
	return (
		<Layout
			allData={allData}
			state={state}
			funcs={funcs}
			pageName={allData[1].children[0].name}
		>
			<div className="page-layout">

				<h2 className="h2">
					1. create-react-appをインストール
				</h2>
					<p className="p">
						{console.log(allData)}
						以下をターミナルに入力してインストール
					</p>
					<p className="p">
						<span className="command">
							$ npm install -g create-react-app
						</span>
					</p>
					<p className="p">
						以下でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>
					<p className="p">
						<span className="command">
							$ create-react-app -v
						</span>
					</p>

				<h2 className="h2">
					2. プロジェクトを作成
				</h2>
					<p className="p">
						プロジェクトを作成するディレクトリに移動し、以下のコマンドを実行
					</p>
					<p className="p">
						以下でインストールされているか確認（プロジェクトを作成するようにコンソールメッセージが出ればOK）
					</p>
					<p className="p">
						<span className="command">
							$ create-react-app [作成するプロイジェクト名]
						</span>
					</p>
					<p className="p">
						※ 以下を入力した場合、create-react-appをローカルインストールせずにプロジェクト作成できる
					</p>
					<p className="p">
						<span className="command">
							$ npx create-react-app [作成するプロイジェクト名]
						</span>
					</p>

				<h2 className="h2">
					3. サーバを起動
				</h2>
					<p className="p">
						プロジェクトのディレクトリに移動し以下のコマンドを実行
					</p>
					<p className="p">
						<span className="command">
							$ npm start
						</span>
					</p>
					<p className="p">
						サーバを停止するときは、「Ctrl + C」を押す
					</p>

				<h2 className="h2">
					4. 画面表示確認
				</h2>
					<p className="p">
						「http://localhost:3000」にアクセスして以下の画面表示ができていれば成功
					</p>
					<div className="img-box">
						<img src="/environment_react-start.png" alt="初期表示画面" />
					</div>

				<h2 className="h2">
					5. +α 〜 Sassを導入 〜
				</h2>
					<p className="p">
						<span className="command">
							$ npm i -D node-sass
						</span>
					</p>
					<p className="p">
						上記コマンド入力のみで、Sassの使用が可能になる
					</p>

				<h2 className="h2">
					6. サーバにデプロイ
				</h2>
					<h3 className="h3">
						1. プロダクション用をビルド
					</h3>
						<p className="p">
							以下のコマンドを実行で、プロダクション用ビルドがプロジェクトディレクトリに「build」フォルダの中に作成される
						</p>
						<p className="p">
							<span className="command">
								$ npm run-script build
							</span>
						</p>
						<p className="p">
							※ファイルの参照が絶対パスになっている場合
						</p>
						<p className="p">
							「build」フォルダのindex.htmlにアクセスしても何も表示されない場合はファイルの参照が絶対パスになっている可能性があるので、package.jsonに以下のコードを追加し、ビルドし直すことで解決する
						</p>

					<h3 className="h3">
						2.ローカルで確認
					</h3>
						<p className="p">
							以下のコマンドを実行し、http://localhost:5000 にアクセスすることでプロダクション用ビルドの内容を確認できる
						</p>
						<p className="p">
							<span className="command">
								$ serve -s build
							</span>
						</p>
					<h3 className="h3">
						3.サーバにデプロイ
					</h3>
						<p className="p">
							確認して問題がなければ、「build」フォルダ内をサーバにアップすることでそのまま表示できる
						</p>

			</div>
		</Layout>
	);
}

export default Environment;
