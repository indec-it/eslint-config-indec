module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'jsx-a11y',
        'lodash',
        'react'
    ],
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:lodash/recommended',
        './airbnbBaseOverrides.js',
        './lodashOverrides.js'
    ],
    rules: {
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }],

        'jsx-a11y/anchor-is-valid': ['error', {
            specialLink: [],
            aspects: ['invalidHref', 'noHref', 'preferButton']
        }],

        'react/descructuring-assignment': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}]
    }
};
