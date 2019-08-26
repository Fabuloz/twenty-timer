module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'prettier',
    'import',
    'jsx-a11y'
  ],
  env: {
    'react-native/react-native': true,
    node: true
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [
    {
      files: ['screens/HomeScreen.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['screens/SettingsScreen.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['babel.config.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
