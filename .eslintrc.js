module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'vuepress',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-extra-semi': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-empty-function': 'off',
  },
}
