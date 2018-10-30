import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebpackAssetsManifest from 'webpack-assets-manifest'

const rootDir = path.join(__dirname, '..')
const resourceDir = path.join(rootDir, './src/resources')
const outDir = path.join(rootDir, 'dist/assets')

const devMode = process.env.NODE_ENV !== 'production'
const cdn = devMode ?
  process.env.DEV_SERVER :
  process.env.CDN_SERVER

export default {
  mode: 'production',
  entry: {
    home: [
      path.join(resourceDir, 'pages/home')
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
      output: path.join(outDir, '../manifest.json'),
      publicPath: `${ cdn }/assets/`,
      writeToDisk: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css'
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
    }, {
      test: /\.styl$/,
      use: [ {
        loader: devMode ?
          'style-loader' :
          MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }, {
        loader: 'stylus-loader',
        options: {
          import: [
            '~kouto-swiss/index.styl'
          ]
        }
      } ]
    } ]
  },
  resolve: {
    extensions: [ '.js', '.styl' ],
    modules: [
      'node_modules',
      'src/resources'
    ]
  }
}
