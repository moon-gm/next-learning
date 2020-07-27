// ハイライトするコードの設定
export default {
	pages: {
		Top: null,
		Page1: {
			Section1: {
				code1: "const withSass = require('@zeit/next-sass');\nmodule.exports = withSass({\n	cssModules: true,\n});",
				code2: "\"scripts\": {\n    \"export\": \"next export\"\n},",
			},
			Section2: {
				code1: "\"scripts\": {\n    \"dev\": \"next\",\n    \"build\": \"next build\",\n    \"start\": \"next start\"\n}",
			},
			Section3: {
				code1: "NEXT_PUBLIC_NAME=\"Next Learning\"",
				code2: "process.env.{KEY名}",
				code3: "process.env.NEXT_PUBLIC_NAME",
				code4: "module.exports = {\n  env: {\n    customKey: 'my-value',\n  },\n}",
			},
		},
		Page2: {
			Section1: {
				code1: "Project\n    - .next\n    - out\n    - public\n        - favicon.ico\n    - pages\n        - index.js\n        - _app.js\n        - _document.js\n    - node_modules\n    - package.json\n    - next.config.json",
			},
			Section2: {
				code1: "import Head from 'next/head'\n\nexport default function Home() {\n  return (\n    <div className=\"container\">\n      <Head>\n        <title>Create Next App</title>\n        <link rel=\"icon\" href=\"/favicon.ico\" />\n      </Head>\n\n      <main>\n        <h1 className=\"title\">\n          Welcome to <a href=\"https://nextjs.org\">Next.js!</a>\n        </h1>\n        <div className=\"grid\">\n          <a href=\"https://nextjs.org/docs\" className=\"card\">\n            <h3>Documentation &rarr;</h3>\n            <p>Find in-depth information about Next.js features and API.</p>\n          </a>\n        </div>\n      </main>\n\n    </div>\n  )\n}\n",
				code2: "// Global-CSS設定\nimport './../sass/App.scss'\n\n// 各種コンポーネント取得\nimport Parts from './../config/parts';\n\n// 各種設定値取得\nimport AllData from './../config/allData';\nimport Functions from './../config/functions';\nimport States from './../config/states';\n\nclass Layout extends React.Component {\n\n	constructor(props) {\n		super(props);\n\n		/***** state初期値設定 *****/\n		this.state = {\n			// ページ表示設定\n			page: States.page.Top,\n			 // サイドエリア表示設定\n			menu: States.menu.hide,\n			// サイドエリアの子リスト表示\n			list: States.list.hide,\n		}\n\n		/***** functionの設定 *****/\n		this.funcs = [\n			{\n				\"Top\": Functions.Page.bind(this, States.page.Top),\n				\"Menu\": Functions.Menu.bind(this),\n			},\n			{\n				\"Page1\": {\n					\"L1\": Functions.List.bind(this, States.list.list1),\n					\"S1\": Functions.PageSection.bind(this, States.page.Page1.S1),\n					\"S2\": Functions.PageSection.bind(this, States.page.Page1.S2),\n					\"S3\": Functions.PageSection.bind(this, States.page.Page1.S3),\n				},\n			}\n		];\n\n		/***** ページデータ設定 *****/\n		this.allData = AllData(this.funcs);\n\n	}\n\n	render() {\n		/***** childrenの設定 *****/\n		// childrenに渡すPropsの設定\n		const additionalProps = {\n			allData: this.allData\n		}\n		// 子要素を再生成してPropsを渡す設定\n		const newChildren = React.cloneElement(this.props.children, additionalProps);\n\n		return (\n			<div className=\"flex-box\">\n\n				{/* サイドエリア */}\n				{this.state.menu === States.menu.show && (\n					<Parts.Aside\n						allData={this.allData}\n						states={this.state}\n					/>\n				)}\n\n				{/* コンテンツエリア */}\n				<div className=\"contents\">\n\n					{/* ヘッダーエリア */}\n					<Parts.Header\n						allData={this.allData}\n						states={this.state}\n						funcs={this.funcs}\n					/>\n\n					{/* メインエリア */}\n					<main className=\"main\">\n						{newChildren}\n					</main>\n\n				</div>\n\n			</div>\n		);\n	}\n\n}\n\nexport default function App({ Component, pageProps }) {\n    return (\n		<Layout>\n			<Component\n				{...pageProps}\n			/>\n		</Layout>\n	);\n  }\n",
				code3: "import Document, { Head, Main, NextScript } from 'next/document'\n\nexport default class MyDocument extends Document {\n  static async getInitialProps(ctx) {\n    const initialProps = await Document.getInitialProps(ctx)\n    return { ...initialProps }\n  }\n\n  render() {\n    return (\n      <html>\n        <Head>\n          <style>{`body { margin: 0 } /* custom!*/`}</style>\n        </Head>\n        <body className=\"custom_class\">\n          <Main />\n          <NextScript />\n        </body>\n      </html>\n    )\n  }\n}",
				code4: "const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')\n\nmodule.exports = (phase, { defaultConfig }) => {\n  if (phase === PHASE_DEVELOPMENT_SERVER) {\n    return {\n      /* development only config options here */\n    }\n  }\n\n  return {\n    /* config options for all phases except development here */\n  }\n}",
			},
		},
		Page3: {
			Section1: {
				code1: "",
				code2: "",
			},
			Section2: {
				code1: "",
			},
		},
	},
	languages: {
		jsx: "jsx",
		javascript: "javascript",
		html: "html",
		css: "css",
		sass: "sass",
		json: "json",
		unset: "unset",
	}
}
