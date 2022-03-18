module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'prettier'
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'airbnb-typescript',
      "plugin:import/recommended"
    ],
    "parserOptions": {
      project: './tsconfig.json'
    },
    rules: {
      "@typescript-eslint/return-await": "off",
      '@typescript-eslint/semi': 'off',
      "@typescript-eslint/comma-dangle": "off",
      "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'react/jsx-props-no-spreading': 0,
      'no-case-declarations': 0,
      'consistent-return': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'no-restricted-syntax': 0,
      'react/prop-types': 0,
      'react/require-default-props': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-filename-extension': 0,
      quotes: [2, 'single', { avoidEscape: true }],
      'no-console': 'warn',
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    }
  }