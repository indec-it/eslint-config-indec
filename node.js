module.exports = {
    extends: 'indec',
    env: {
        'browser': false,
        'node': true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['find']
        }]
    }
};
