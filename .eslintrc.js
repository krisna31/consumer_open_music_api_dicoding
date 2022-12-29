module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-shadow": "off",
    "linebreak-style": "off",
    quotes: "off",
    "no-underscore-dangle": "off",
  },
};
