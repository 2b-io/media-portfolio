import fs from 'fs-extra'
import path from 'path'

import config from '../infrastructure/config'

export default (app) => {
  const webpackOutputFile = path.join(config.assetManifest)

  const manifest = fs.readJsonSync(webpackOutputFile)

  app.use((req, res, next) => {
    res.locals.__config = config
    res.locals.__asset = (path) => manifest[path]

    next()
  })
}
