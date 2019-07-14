module.exports = {
  plugins: ["markdown"],
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
