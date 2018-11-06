module.exports = {
    plugins: [
        'lodash',
        'promise'
    ],
    env: {
        es6: true
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:lodash/recommended',
        'plugin:promise/recommended',
        'indec/overrides/airbnb-base',
        'indec/overrides/lodash',
        'indec/overrides/promise'
    ],
    rules: {
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }]
    }
};
