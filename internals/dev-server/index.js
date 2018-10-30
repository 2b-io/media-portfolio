import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'


import webpackConfig from '../webpack.babel'

const app = express()
const port = 3008
let started = false

const compiler = webpack({
  ...webpackConfig,
  entry: Object.entries(webpackConfig.entry).reduce(
    (entry = {}, [ key, value ]) => ({
      ...entry,
      [ key ]: [
        ...value,
        'webpack-hot-middleware/client?reload=true'
      ]
    }),
    {}
  ),
  mode: 'development'
})

app.get('/alive', (req, res, next) => res.sendStatus(200))
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    watchOption: {
      ignored: /node_modules/
    },
    // logLevel: 'warn'
  }),
  webpackHotMiddleware(compiler)
)

compiler.hooks.emit.tap('done', () => {
  if (started) {
    return
  }

  app.listen(port, () => {
    started = true

    console.log(`dev-server started at :${port}`)
  })
})
