import path from 'path'

const rootDir = path.join(__dirname, '..')

export default {
  _root: rootDir,
  port: process.env.PORT,
  assetManifest: path.resolve(rootDir, process.env.ASSET_MANIFEST)
}
