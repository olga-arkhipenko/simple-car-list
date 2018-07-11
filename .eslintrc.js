module.exports = {
    extends: 'react-app',
    rules: {
        'no-new': 'off',
        'indent': ['error', 4],
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'comma-dangle': ['error', 'never'],
        'func-names': 'off',
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': ['error', 'never', {
            'packages': 'always' 
        }]
    }
}