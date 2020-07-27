import React from 'react';
import SEO from './../../parts/SEO'
import urls from './../../config/outerUrls'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const FileConst = ({allData}) => {
	return (
		<>
			<SEO pageName={allData[2].children[1].name} />
			<div className="page-layout">
				<h2 className="h2">
					1. ディレクトリツリー
				</h2>
					{/* Page2のSection1から流用 */}
					<Parts.CodeHighlighter
						language={codes.languages.unset}
						codeString={codes.pages.Page2.Section1.code1}
					/>

				<h2 className="h2">
					2. pages内ファイル確認
				</h2>

					<h3 className="h3">
						index.js
					</h3>
					<p className="p">
						トップページを表示するページコンポーネントとなるファイル<br/>
						pagesディレクトリにファイルを追加していくと、以下のようにファイル名がそのままPath名となる
					</p>
					<p className="p">
						index.js → 「/」<br/>
						page1.js → 「/page1」<br/>
						page2/section1.js → 「/page2/section1」
					</p>
					<p className="p">
						初期では、一部カットしているが下記のような内容となっている。<br/>
						構成としては「Head」でheadタグ内の設定を記述し、mainタグ内で内容を表示するようになっている
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code1}
					/>

					<h3 className="h3">
						_app.js
					</h3>
					<p className="p">
						<Parts.OuterLink
							url={urls.AppDocument+"#_appjs"}
							linkText="? _app.jsについて"
						/>
					</p>
					<p className="p">
						インストール時には存在しないファイルだが、globalな設定を行える重要なファイルである<br/>
						固定のレイアウトや、ファンクション、グローバルCSSなどの全ページ共通の処理を設定できる
					</p>
					<p className="p">
						CSSなどはこちらにインポートするだけでglobalに反映させられる（※ただしインポートするファイル内では全てを「:global{"{}"}」で括っておく必要がある）
					</p>
					<p className="p">
						Next.jsはすべてのページにおいて、ページを初期化するためにAppコンポーネントを使用しているため、
						「export default」する際は、必ず「 function App...」を指定すること（「Component」にindex.jsなどのページコンポーネントがあてはまっていくイメージ）
					</p>
					<p className="p">
						以下のソースはこのサイトで使用しているものである。
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code2}
					/>

					<h3 className="h3">
						_document.js
					</h3>
					<p className="p">
						<Parts.OuterLink
							url={urls.AppDocument+"#_documentjs"}
							linkText="? _document.jsについて"
						/>
					</p>
					<p className="p">
						インストール時には存在しないファイルだが、HTMLの全体の文書構造をカスタマイズ設定できるファイル<br/>
						headにスクリプトを追加したい場合や、全体の構造を変えたり、共通部分のCSSを当てたりと、基本構造に関することを設定できる。
					</p>
					<p className="p">
						※_document.jsはサーバーサイドのみでレンダリングされ、クライアントサイドでは使われないため、onClickのようなイベントハンドラはここに追加しない
					</p>
					<p className="p">
						以下は、サンプルである
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code3}
					/>

				<h2 className="h2">
					3. ルートディレクトリのファイル確認
				</h2>
					<h3 className="h3">
						next.config.js
					</h3>
					<p className="p">
						公式：
						<Parts.OuterLink
							url={urls.NextOfficial.Config}
							linkText="? next.config.jsについて"
						/><br/>
						定義：
						<Parts.OuterLink
							url={urls.NextOfficial.Config}
							linkText="? next.config.jsで使用できる定義"
						/>
					</p>
					<p className="p">
						開発環境や、プロダクションビルド時に反映されるNode.jsモジュールの設定を行えるファイル
					</p>
					<p className="p">
						例えば、開発環境構築時にのみ適用させたい処理がある場合、以下のように設定できる
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.jsx}
						codeString={codes.pages.Page2.Section2.code4}
					/>
					<p className="p">
						「phase」には、現在のロードされた環境があてはまり、適用させたい「phase」は公式で次のリンクで定義されている（
						<Parts.OuterLink
							url={urls.NextOfficial.Phase}
							linkText="? 定義されたPhase"
						/>）
					</p>

			</div>
		</>
	);
}

export default FileConst;
