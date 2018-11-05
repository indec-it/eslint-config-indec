module.exports = {
    plugins: [
        'lodash',
        'promise'
    ],
    env: {
        es6: true
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:lodash/recommended',
        'plugin:promise/recommended',
        'indec/overrides'
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
