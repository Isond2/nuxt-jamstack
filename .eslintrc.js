module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    "eslint:recommended",
  ],
  plugins: ['vue'],
  // add your custom rules here
  ignorePatterns: [""],
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        quoteProps: "preserve",
        tabWitdth: 2,
        vueIndentScriptAndStyle: false,
      },
    ],
  },
}
