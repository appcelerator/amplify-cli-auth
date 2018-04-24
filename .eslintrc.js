const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
	env: {
		'node': true,
		'es6': true
	},

	extends: 'eslint:recommended',
	parserOptions: {
		'ecmaVersion': 2017,
		'sourceType': 'module',
	},
	rules: {
		'brace-style': [ERROR, '1tbs', {'allowSingleLine': true}],
		'comma-spacing': [ERROR, {'before': false, 'after': true}],
		'indent': [ERROR, 'tab', {'SwitchCase': 1, 'FunctionExpression': {'body': 1}}],
		'keyword-spacing': ERROR,
		'linebreak-style': [ERROR, 'unix'],
		'no-cond-assign': OFF,
		'no-console': OFF,
		'no-control-regex': OFF,
		'no-fallthrough': OFF,
		'no-unused-vars': OFF,
		'no-useless-escape': OFF,
		'no-undef': OFF,
		'no-octal': OFF,
		'quotes': [ERROR, 'single', {'avoidEscape': true, allowTemplateLiterals: true}],
		'space-before-blocks': [ERROR, 'always'],
		'space-infix-ops': [ERROR, {'int32Hint': false}],
		'semi': [ERROR, 'always'],
		'valid-typeof': OFF
	}
};
