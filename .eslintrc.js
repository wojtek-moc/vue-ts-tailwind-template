module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  rules: {},

  extends: [
    "plugin:vue/vue3-essential",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/typescript",
  ],
};
