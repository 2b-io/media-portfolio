import path from 'path'

const rootDir = path.join(__dirname, '..')

export default {
  _root: rootDir,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  cdnServer: process.env.CDN_SERVER,
  assetManifest: path.resolve(rootDir, process.env.ASSET_MANIFEST),
  gaTrackingId: process.env.GA_TRACKING_ID,
  ghost: {
    clientId: process.env.GHOST_CLIENT_ID,
    clientSecret: process.env.GHOST_CLIENT_SECRET,
    url: process.env.GHOST_URL
  }
}
