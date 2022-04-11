module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/script-setup-uses-vars': 'error',
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    'eslint:recommended',
    '@vue/typescript',
  ],
}
