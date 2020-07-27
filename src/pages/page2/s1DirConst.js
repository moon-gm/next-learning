import React from 'react';
import Link from 'next/link'
import SEO from './../../parts/SEO'
import urls from './../../config/outerUrls'
import codes from './../../config/codes'
import Parts from './../../config/parts'

const DirConst = ({allData}) => {
	return (
		<>
			<SEO pageName={allData[2].children[0].name} />
			<div className="page-layout">

				<h2 className="h2">
					1. ディレクトリツリー
				</h2>
					<p className="p">
						create-next-appを用い、Next.jsをインストールした場合のプロジェクト構成
					</p>
					<Parts.CodeHighlighter
						language={codes.languages.unset}
						codeString={codes.pages.Page2.Section1.code1}
					/>

				<h2 className="h2">
					2. .next
				</h2>
					<p className="p">
						以下のコマンドを実行した際に作成され、プロダクション・開発用ファイルが格納されるディレクトリ
					</p>
					<p className="p">
						プロダクション用をビルドの場合<br/>
						<span className="command">
							$ npm run build / $ yarn build
						</span>
					</p>
					<p className="p">
						※ビルドは行ったごとにユニークな名前でフォルダ分けされ、「BUILD_ID」ファイルに記載されたユニークな名前のフォルダを監視
					</p>
					<p className="p">
						開発用をビルドの場合<br/>
						<span className="command">
							$ npm run dev / $ yarn dev
						</span>
					</p>
					<p className="p">
						※ビルドは「development」フォルダに格納される
					</p>

				<h2 className="h2">
					3. out
				</h2>
					<p className="p">
						ビルドされたファイルをエクスポートした際に作成されるディレクトリ<br/>
						以下のコマンドを実行し、「.next」配下のプロダクション用のファイルが格納されたディレクトリをコピーする
					</p>
					<p className="p">
						<span className="command">
							$ npm run export
						</span>
					</p>
					<p className="p">
						※サーバーサイドの処理がないものであれば、このフォルダ内をデプロイすればそのまま公開できる<br/>
						※サーバーサイドの処理がある場合は、Vercelの公式デプロイ（旧ZEITのNow）を活用すると良い
					</p>
					<p className="p">
						<Parts.OuterLink
							url={urls.NextOfficial.Deploy}
							linkText="? Vercel公式デプロイ"
						/>
					</p>

				<h2 className="h2">
					4. public
				</h2>
					<p className="p">
						画像ファイルを格納するディレクトリ
					</p>
					<p className="p">
						※画像を使用する場合、{"<img src=\"/画像名\"/>"}で使用できる
					</p>

				<h2 className="h2">
					4. pages
				</h2>
					<p className="p">
						このディレクトリに配置したファイルがページとしてルーティングされる<br/>
						「src/pages」として「src」ディレクトリ配下においても認識してくれるので、その方が運用しやすい<br/>
						次セクション
						<Link
							href={allData[2].children[1].path}
						>
							<a>
								<span className="page-jump" onClick={allData[2].children[1].func}>
									[ {allData[2].children[1].name} ]
								</span>
							</a>
						</Link>
						でファイル構成を確認
					</p>

				<h2 className="h2">
					5. node_modules
				</h2>
					<p className="p">
						以下のコマンドを実行することで、package.jsonに基づいて作成されるディレクトリ<br/>
						※プロジェクト作成時には自動で作成される
					</p>
					<p className="p">
						<span className="command">
							$ npm install
						</span>
					</p>
			</div>
		</>
	);
}

export default DirConst;
