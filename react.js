module.exports = {
    extends: [
        'airbnb',
        'indec',
        'indec/overrides/airbnb',
        'indec/overrides/react'
    ],
    rules: {
        'no-param-reassign': ['error', {props: false}],

        'lodash/prefer-lodash-method': ['error', {
            ignoreMethods: ['assign', 'find', 'map']
        }],

        'react/jsx-filename-extension': ["warn", {
            extensions: ['.js']
        }]
    }
};
