module.exports = {
    extends: ['airbnb', 'indec'],
    rules: {
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'warn',
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find']
        }],
        'react/jsx-space-before-closing': ['error', 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {
            beforeSelfClosing: 'never'
        }],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js']
        }]
    }
};
