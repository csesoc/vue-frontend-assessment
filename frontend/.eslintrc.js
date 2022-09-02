module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/require-v-for-key': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': 'error',
    'vue/html-indent': ['error', 2],
    'vue/html-quotes': ['error', 'single'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2020,
    "sourceType": "module"
  }
}