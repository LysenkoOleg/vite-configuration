
import eslint from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		// config with just ignores is the replacement for `.eslintignore`
		ignores: ['**/build/**', '**/dist/**', 'src/some/file/to/ignore.ts'],
	},
	eslint.configs.recommended,
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			jest: jestPlugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			'@typescript-eslint/no-floating-promises': 'error',
			// ...
		},
	},
	{
		// disable type-aware linting on JS files
		files: ['*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		// enable jest rules on test files
		files: ['test/**'],
		extends: [jestPlugin.configs['flat/recommended']],
	},
);
