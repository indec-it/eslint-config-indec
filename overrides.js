module.exports = {
    rules: {
        // [dberr] airbnb-base plugin overrides
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': 'off',
        'max-len': ['error', 120, {
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-statements-per-line': 'error',
        'no-underscore-dangle': ['error', {allow: ['_id']}],
        'object-curly-spacing': ['error', 'never'],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],

        // [dberr] lodash plugin overrides
        'lodash/import-scope': ['error', 'member'],
        'lodash/prop-shorthand': ['error', 'never'],
        'lodash/matches-prop-shorthand': ['error', 'never'],

        // [dberr] promise plugin overrides
        'promise/no-callback-in-promise': 'off',
        'promise/no-nesting': 'off',
        'promise/prefer-await-to-then': 'error'
    }
};
