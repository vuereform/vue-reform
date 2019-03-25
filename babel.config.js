module.exports = {
  env: {
    production: {
      presets: [
        '@vue/app'
      ]
    },
    development: {
      presets: [
        '@vue/app'
      ]
    },
    test: {
      presets: [
        '@babel/env'
      ],
      plugins: [
        'transform-vue-jsx'
      ]
    }
  }
}
