// import webpackMerge from 'webpack-merge'
// import TerserPlugin from 'terser-webpack-plugin'

const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          ecma: undefined,
          parse: {},
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: {
            comments: false,
            beautify: false
          },
          // parallel: true,
          sourceMap: false,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  },
  stats: {
    children: false,
    warnings: false
  }
})

module.exports = webpackConfig