module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    "jest/globals": true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script"
  },
  plugins: ["jest"],
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "warn"
  }
};
