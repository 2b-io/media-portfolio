import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import WebpackAssetsManifest from 'webpack-assets-manifest'

const rootDir = path.join(__dirname, '..')
const resourceDir = path.join(rootDir, './src/resources')
const outDir = path.join(rootDir, 'dist/assets')

const cdn = process.env.NODE_ENV === 'production' ?
  process.env.CDN_SERVER : process.env.DEV_SERVER

export default {
  mode: 'production',
  entry: {
    home: [
      path.join(resourceDir, 'js/home.js')
    ]
  },
  output: {
    path: outDir,
    publicPath: `${ cdn }/assets/`,
    filename: 'js/[name].[hash:6].js'
  },
  plugins: [
    new CleanWebpackPlugin([ outDir ], {
      verbose: true,
      watch: true,
      allowExternal: true
    }),
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
          presets: [ '@babel/preset-env' ],
          plugins: [ '@babel/plugin-transform-runtime' ]
        }
      }
    } ]
  }
}
