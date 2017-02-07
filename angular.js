module.exports = {
    extends: ['indec', 'angular'],
    plugins: ['angular'],
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: false,
        node: true
    },
    globals: {
        window: false,
        angular: false
    },
    rules: {
        'global-require': 'off',
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'off',
        'promise/no-native': 'error',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'warn',
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'filter']
        }]
    }
};
