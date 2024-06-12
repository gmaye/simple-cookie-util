module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'prefer-template': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'spaced-comment': 'off',
    'lines-between-class-members': ['error', 'always', {
      'exceptAfterSingleLine': true
    }],
    'class-methods-use-this': 'off',
    'wrap-iife': ['error', 'inside'],
    'semi': ['error', 'always'],
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['warn', 'last', {
      'exceptions': {
        'ArrayPattern': true,
        'ObjectPattern': true
      }
    }],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-nested-ternary': 'off',
    'no-useless-escape': 'warn',
    'import/prefer-default-export': 'off',
  },
};
