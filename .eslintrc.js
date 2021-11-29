module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "vue/max-attributes-per-line": ["error", {
      singleline: { max: 1 },
      multiline: { max: 1 }
    }],
    "arrow-parens": ["error", "as-needed"],
    "no-extend-native": ["error", { exceptions: ["Array", "Object"] }]
  }
}
