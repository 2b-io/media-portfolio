import ect from 'ect'
import { minify } from 'html-minifier'
import path from 'path'

import config from '../infrastructure/config'

export default (app) => {
  const viewDir = path.resolve(config._root, 'views')

  const engine = ect({
    watch: true,
    root: viewDir,
    ext: '.ect'
  })

  app.set('view engine', 'ect')
  app.set('views', viewDir)
  app.engine('ect', (template, data, cb) => {
    engine.render(template, data, (error, html) => {
      if (error) {
        return cb(error)
      }

      const minified = minify(html, {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        sortAttributes: true,
        sortClassName: true
      })

      console.log(`MINIFIED HTML... ${ html.length } -> ${ minified.length }`)

      cb(null, minified)
    })
  })
}
