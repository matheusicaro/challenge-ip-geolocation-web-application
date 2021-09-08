module.exports = {
  env: {
    browser: true,
    es6: true, // run prj >= es6
    jest: true, // global variables for jest
  },
  // rules for plugins em dev depedencies
  extends: ['react-app', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // utilizing jsx
    },
    ecmaVersion: 2018,
    sourceType: 'module', // using import and export
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'eslint-plugin-import-helpers'],
  rules: {
    'max-len': [2, { code: 140, tabWidth: 2, ignoreUrls: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    //disable required return for functions
    '@typescript-eslint/explicit-function-return-type': 'off',
    //disable public and privater for methods, react will define
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect,

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', ['module', '/^@/'], 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
