import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker';

export default {
	esbuild: {
		jsxFactory: 'create',
		jsxInject: 'import create from \'./utils-js/01-utils.js\''
	},
	plugins: [
		Inspect(),
		checker({
			typescript: true,
		})
	],
}
