module.exports = {
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        'max-len': ['error', 120, {
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-statements-per-line': 'error',
        'no-underscore-dangle': ['error', {allow: ['_id']}],
        'object-curly-spacing': ['error', 'never'],
        'prefer-const': ['error'],
        quotes: ['error', 'single'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
};
