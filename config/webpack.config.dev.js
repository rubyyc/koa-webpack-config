const webpackMerge  = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  stats: {children: false}
})

module.exports = webpackConfig