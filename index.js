module.exports = {
    env: {
        es6: true
    },
    plugins: [
        'promise',
        'lodash'
    ],
    extends: ['airbnb-base', 'plugin:lodash/recommended', 'plugin:promise/recommended'],
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
        'function-paren-newline': 'off',
        'no-param-reassign': 'off',
        'max-statements-per-line': 'error',
        'no-return-assign': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'lodash/import-scope': ['error', 'member'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }],
        'lodash/prop-shorthand': ['error', 'never']
    }
};
