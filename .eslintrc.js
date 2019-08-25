module.exports =  {
  parser: '@typescript-eslint/parser',
  extends: [
    // Configuration is documented here: https://github.com/airbnb/javascript
    // Rules can be found here:
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/array-type': ['error', 'array'],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowTypedFunctionExpressions': true
      },
    ],

    // note you must disable the base rule as it can report incorrect errors
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // note you must disable the base rule as it can report incorrect errors
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'ignore',
      'exports': 'ignore',
      'functions': 'ignore',
    }],
    'complexity': ['warn', 10],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          "**/*.test.*",
          '**/*.spec.*',
        ],
      },
    ],
    'max-depth': ['warn', 3],
    'max-lines-per-function': ['warn', 30],
    'no-await-in-loop': 'error',
    'no-shadow': 'error',
    'no-useless-rename': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.ts', '.tsx'] },
    ],
  },
};
