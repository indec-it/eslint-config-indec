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
        'plugin:lodash/recommended',
        './airbnbBaseOverrides.js',
        './lodashOverrides.js'
    ],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        'prefer-const': ['error'],
        quotes: ['error', 'single'],

        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }]
    }
};
