import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../webpack.babel'

const devServer = process.env.DEV_SERVER
const app = express()
const port = 3008
let started = false

const compiler = webpack({
  ...webpackConfig,
  // override things for development mode
  mode: 'development',
  entry: Object.entries(webpackConfig.entry).reduce(
    (entry = {}, [ key, value ]) => ({
      ...entry,
      [key]: [
        ...value,
        `webpack-hot-middleware/client?reload=true&path=${ devServer }/__hmr`
      ]
    }),
    {}
  ),
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
})

app.get('/alive', (req, res, next) => res.sendStatus(200))
app.use(
  morgan('dev'),
  cors(),
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    watchOption: {
      ignored: /node_modules/
    },
    logLevel: 'warn'
  }),
  webpackHotMiddleware(compiler, {
    path: '/__hmr'
  })
)

compiler.hooks.emit.tap('done', () => {
  if (started) {
    return
  }

  app.listen(port, () => {
    started = true

    console.log(`dev-server started at :${ port }`)
  })
})
