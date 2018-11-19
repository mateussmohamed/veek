const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Copy = require('copy-webpack-plugin')

module.exports = {
  entry: common.entry,
  output: common.output,
  mode: 'production',

  plugins: [
    new CleanPlugin(['build'], { root: common.paths.root }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new HtmlPlugin(
      Object.assign({}, common.htmlPluginConfig, {
        minify: { collapseWhitespace: true },
      }),
    ),
    new Copy(common.copyLoader),
  ].concat(process.env.ANALYZER ? new BundleAnalyzerPlugin() : []),

  module: {
    rules: [common.jsLoader, common.fileLoader, common.urlLoader],
  },
  resolve: common.resolve,
}
