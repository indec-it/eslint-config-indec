## ESLint-config-indec

To use this ESLint config file follow these instructions:

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    $ npm install eslint --save-dev

If you installed `ESLint` globally, you have to install the Indec configuration globally too. Otherwise, install it locally.

    $ npm install eslint-config-indec --save-dev

# Configuration

Create a **.eslintrc.json** file in the root folder of your project then add the following code:
```json
{
  "extends": "indec"
}
```

# Configuration for React

If you work with React you can use the ``react`` configuration:
```json
{
  "parser": "babel-eslint",
  "extends": "indec/react"
}
```
