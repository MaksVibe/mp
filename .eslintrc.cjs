module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
  ],
  overrides: [],
  plugins: ['react', 'simple-import-sort'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react'],
          ['^@?\\w'],
          ['@/(.*)'],
          ['^~'],
          ['^[./]'],
          ['^~assets'],
          ['@.+.(sc|sa|c)ss$'],
          ['.(sc|sa|c)ss$'],
          ['.module.(sc|sa|c)ss$'],
        ],
      },
    ],
  },
};
