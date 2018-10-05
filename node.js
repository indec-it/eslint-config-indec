module.exports = {
    plugins: [
        'promise'
    ],
    extends: './index.js',
    env: {
        'browser': false,
        'node': true
    },
    rules: {
        'lodash/prefer-lodash-method': ['error', {ignoreMethods: ['find']}],
        'promise/always-return': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error'
    }
};
