import fs from 'fs-extra'
import path from 'path'

import config from '../infrastructure/config'

export default (app) => {
  const webpackOutputFile = path.join(config._root, '../../dist/manifest.json')

  const manifest = fs.readJsonSync(webpackOutputFile)

  app.use((req, res, next) => {
    res.locals.__asset = (path) => manifest[path]

    next()
  })
}
