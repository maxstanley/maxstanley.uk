module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
	"prettier/@typescript-eslint"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "semi": ["error", "always"],
	"quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"]  }]
  },
};
