module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:vue/base', 'plugin:vue/vue3-essential'],
  rules: {
    'vue/max-attributes-per-line': 0,
  },
};
