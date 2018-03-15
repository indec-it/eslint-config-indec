module.exports = {
    extends: ['airbnb', 'indec'],
    rules: {
        'no-param-reassign': ['error', {props: false}],
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'warn',
        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],
        'react/jsx-filename-extension': ["warn", {
            extensions: ['.js']
        }]
    }
};
