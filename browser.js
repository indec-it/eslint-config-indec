module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'jsx-a11y',
        'react'
    ],
    extends: 'indec',
    rules: {
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }],

        'jsx-a11y/anchor-is-valid': ['error', {
            specialLink: [],
            aspects: ['invalidHref', 'noHref', 'preferButton']
        }],

        'react/descructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
};
