module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'react/jsx-key': 'error',
        'array-element-newline': 0,
        'default-case': 'error',
        'no-loop-func': 'error',
        camelcase: [2, { properties: 'always' }],
    },
    settings: {
        react: { version: 'detect' },
    },
};
