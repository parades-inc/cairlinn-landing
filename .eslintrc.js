module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2],
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0
  }
};
