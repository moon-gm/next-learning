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
