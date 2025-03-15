import Inspect from 'vite-plugin-inspect'

export default {
	esbuild: {
		jsxFactory: 'create',
		jsxInject: 'import create from \'./utils-js/01-utils.js\''
	},
	plugins: [
		Inspect()
	],
}
