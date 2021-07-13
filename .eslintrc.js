module.exports = {
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'no-unused-vars': 'off',
  },
};
