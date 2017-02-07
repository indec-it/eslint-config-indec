module.exports = {
    env: {
        es6: true
    },
    plugins: [
        'promise',
        'lodash'
    ],
    extends: ['airbnb-base', 'plugin:lodash/recommended'],
    rules: {
        'max-len': ['error', 120],
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error'],
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'linebreak-style': ['error', 'unix'],
        'no-underscore-dangle': [
            'error', {
                allow: ['_id']
            }
        ],
        'object-curly-spacing': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-param-reassign': ['error', {props: false}],
        'max-statements-per-line': 'error',
        'no-return-assign': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'warn',
        'lodash/import-scope': ['error', 'member'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }],
        'lodash/prop-shorthand': ['error', 'never']
    }
};
