module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'jsx-a11y',
        'lodash',
        'react'
    ],
    extends: 'airbnb',
    rules: {
        'lodash/prop-shorthand': ['error', 'never'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
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
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],

        // Override Airbnb rules
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        'max-len': ['error', {code: 120, ignoreStrings: true, ignoreTemplateLiterals: true}],
        'max-statements-per-line': 'error',
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'no-underscore-dangle': ['error', {allow: ['_id']}],
        'object-curly-spacing': ['error', 'never'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
};
