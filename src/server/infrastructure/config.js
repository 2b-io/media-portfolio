import path from 'path'

const rootDir = path.join(__dirname, '..')

export default {
  _root: rootDir,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  assetManifest: path.resolve(rootDir, process.env.ASSET_MANIFEST),
  gaTrackingId: process.env.GA_TRACKING_ID
}
