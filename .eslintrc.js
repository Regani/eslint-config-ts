/* eslint-env node */
module.exports = {
    root: true,
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended'
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': [ 'error' ],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
        'no-debugger': 'off',
        'no-console': 'off',
        semi: [ 'error', 'never' ],
        quotes: [ 'error', 'single' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'always' ],
        '@typescript-eslint/no-var-requires': 0,
        indent: [ 'error', 4, { SwitchCase: 1 } ],
        'quote-props': [ 'error', 'as-needed' ],
        'object-property-newline': [ 'error' ],
        'key-spacing': [ 'error', { afterColon: true } ]
    },
    env: {
        es2021: true,
        node: true
    }
}
