import asset from './asset'
import routing from './routing'
import viewEngine from './view-engine'

export default (app) => {
  // load helpers
  asset(app)
  viewEngine(app)

  // at last
  routing(app)

  return app
}
