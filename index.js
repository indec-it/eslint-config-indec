const newRules = {
    common: {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'max-len': ['error', 120],
        'max-statements-per-line': 'error',
        'no-param-reassign': 'off',
        'no-return-assign': 'off',
        'no-underscore-dangle': [
            'error', {
                allow: ['_id']
            }
        ],
        'object-curly-spacing': ['error', 'never']
    },
    lodash: {
        'lodash/import-scope': ['error', 'member'],
        'lodash/prop-shorthand': ['error', 'never'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }]
    }
};

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
        ...newRules.common,
        ...newRules.lodash
    }
};
