import path from 'path'
import WebpackAssetsManifest from 'webpack-assets-manifest'

const rootDir = path.join(__dirname, '..')
const resourceDir = path.join(rootDir, './src/resources')

const cdn = 'http://d-14:3008'

export default {
  mode: 'production',
  entry: {
    home: [
      path.join(resourceDir, 'js/home.js')
    ]
  },
  output: {
    path: path.join(rootDir, 'dist/assets'),
    publicPath: `${ cdn }/assets`,
    filename: 'js/[name].[hash:6].js'
  },
  plugins: [
    new WebpackAssetsManifest({
      output: path.resolve(__dirname, '../dist/manifest.json'),
      publicPath: `${ cdn }/assets/`,
      writeToDisk: true
    })
  ],
  module: {
    rules: [ {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      }
    } ]
  }
}
