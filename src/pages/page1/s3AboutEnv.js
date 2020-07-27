import React from 'react';
import SEO from './../../parts/SEO'
import urls from './../../config/outerUrls'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const AboutEnv = ({allData}) => {
	return (
		<>
			<SEO pageName={allData[1].children[2].name} />
			<div className="page-layout">

				<h2 className="h2">
					1. envファイルの作成
				</h2>
					<p className="p">
						環境に合わせてルートディレクトリに以下のようなファイル作成する
					</p>
					<p className="p">
						.env.development・・・開発環境<br/>
						.env.production・・・本番環境
					</p>
					<p className="p">
						※git管理している場合、.gitignoreに入れておく方が良い
					</p>

				<h2 className="h2">
					2. KEYの設定ルール
				</h2>
					<p className="p">
						作成したファイルに記載するKEYは必ず「NEXT_PUBLIC_」を頭につけること
					</p>
					<div className="p">
						Ex.)
					</div>
					<Parts.CodeHighlighter
						language={codes.languages.javascript}
						codeString={codes.pages.Page1.Section3.code1}
					/>


				<h2 className="h2">
					3. 呼び出し方
				</h2>
					<p className="p">
						以下のような記述で呼び出せる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.javascript}
						codeString={codes.pages.Page1.Section3.code2}
					/>

					<p className="p">
						上記の設定を利用すると、以下で「Next Learning」を取得できる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.javascript}
						codeString={codes.pages.Page1.Section3.code3}
					/>

				<h2 className="h2">
					※ next.config.jsを利用した場合
				</h2>
					<p className="p">
						next.config.jsで以下のようにエクスポートすることでも環境変数の設定ができる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.javascript}
						codeString={codes.pages.Page1.Section3.code4}
					/>

					<p className="p">
						使用する側では通常通りと同様に指定したKey名(上記の場合、customKey)で取得できる
					</p>
					<p className="p">
						<Parts.OuterLink
							url={urls.NextOfficial.EnvironmentVariables}
							linkText="? next.config.jsでの環境変数の設定"
						/>
					</p>

			</div>
		</>
	);
}
export default AboutEnv;
