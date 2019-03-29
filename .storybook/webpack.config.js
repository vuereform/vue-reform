const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = ({ config }) => {
  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.scss',
    '.sass',
    '.html'
  )

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@vue/app'
          ]
        }
      },
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  })
  
  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  })

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      require.resolve('@storybook/addon-storysource/loader')
    ],
    enforce: 'pre'
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
