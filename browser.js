const rules = {
    lodash: {
        'lodash/prop-shorthand': ['error', 'never'],
        'lodash/matches-prop-shorthand': ['error', 'never'],
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }]
    },
    react: {
        'react/descructuring-assignment': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],
    }
};

module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'jsx-a11y',
        'lodash',
        'react'
    ],
    extends: 'airbnb',
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'max-len': ['error', 120],
        'no-underscore-dangle': ['error', {allow: ['_id']}],
        'jsx-a11y/anchor-is-valid': ['error', {
            specialLink: [],
            aspects: ['invalidHref', 'noHref', 'preferButton']
        }],
        ...rules.lodash,
        ...rules.react
    }
};
