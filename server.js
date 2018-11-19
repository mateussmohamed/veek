const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./config/webpack/dev.config')

const PORT = 7171

const options = {
  contentBase: './public',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true },
  port: PORT,
  host: 'localhost',
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(PORT, err => {
  console.log('dev server listening on port: ', PORT)
  if (err) {
    console.error(err)
    process.exit(-1)
  }
})
