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
    extends: [
        'indec',
        'indec/overrides/react'
    ],
    rules: {
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }],

        'jsx-a11y/anchor-is-valid': ['error', {
            aspects: ['invalidHref', 'noHref', 'preferButton'],
            specialLink: []
        }],

        'react/descructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
};
