module.exports = {
    plugins: [
        'lodash'
    ],
    env: {
        es6: true
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:lodash/recommended'
    ],
    rules: {
        'eol-last': ['error'],
        indent: ['error', 4, {SwitchCase: 1}],
        'linebreak-style': ['error', 'unix'],
        'no-var': ['error'],
        'prefer-const': ['error'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],

        'lodash/import-scope': ['error', 'member'],
        'lodash/prop-shorthand': ['error', 'never'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }],

        // Override Airbnb rules
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        'max-len': ['error', {code: 120, ignoreStrings: true, ignoreTemplateLiterals: true}],
        'max-statements-per-line': 'error',
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'no-underscore-dangle': ['error', {allow: ['_id']}],
        'object-curly-spacing': ['error', 'never'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
};
