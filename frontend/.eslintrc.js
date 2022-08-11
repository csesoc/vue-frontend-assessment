module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/require-v-for-key': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': 'error',
    'vue/html-quotes': ['error', 'single']
  }
}