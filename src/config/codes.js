// react-syntax-highlighterのstyleをインポート
import { dark, coy, funky, okaidia, solarizedlight, tomorrow, twilight, prism, atomDark, base16AteliersulphurpoolLight, cb, darcula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, ghcolors, hopscotch, pojoaque, vs, xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

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
				code1: "",
				code2: "",
				code3: "",
				code4: "",
			},
			Section3: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
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
	},
	styles: {
		"dark": dark,
		"coy": coy,
		"funky": funky,
		"okaidia": okaidia,
		"solarizedlight": solarizedlight,
		"tomorrow": tomorrow,
		"twilight": twilight,
		"prism": prism,
		"atomDark": atomDark,
		"base16AteliersulphurpoolLight": base16AteliersulphurpoolLight,
		"cb": cb,
		"darcula": darcula,
		"duotoneDark": duotoneDark,
		"duotoneEarth": duotoneEarth,
		"duotoneForest": duotoneForest,
		"duotoneLight": duotoneLight,
		"duotoneSea": duotoneSea,
		"duotoneSpace": duotoneSpace,
		"ghcolors": ghcolors,
		"hopscotch": hopscotch,
		"pojoaque": pojoaque,
		"vs": vs,
		"xonokai": xonokai,
	}
}
