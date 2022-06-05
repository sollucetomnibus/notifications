/* global module */
module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'no-multi-spaces': 'error',
    'object-curly-spacing': [2, 'always'],
    'keyword-spacing': ['error'],
    'block-spacing': ['error'],
    'space-infix-ops': ['error'],
    'semi-spacing': ['error'],
    'space-in-parens': ['error'],
  },
  settings: {
    'react': {
      'version': 'detect',
    },
  },
};
