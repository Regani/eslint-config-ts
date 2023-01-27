/* eslint-env node */
module.exports = {
    root: true,
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended'
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': [ 'error' ],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
        'no-console': [ 'error', { allow: [ 'debug' ] } ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': [ 'error', 'never' ],
        'quotes': [ 'error', 'single' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'always' ],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/indent': [
            "error",
            4,
            {
                'ignoredNodes': [
                    'PropertyDefinition[decorators]'
                ]
            }
        ],
        'quote-props': [ 'error', 'as-needed' ]
    },
    env: {
        es2021: true,
        node: true
    }
}
