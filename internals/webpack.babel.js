import glob from 'glob'
import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
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
    home: glob.sync(
      path.join(resourceDir, 'pages/home/index.*')
    ),
    img: glob.sync(
      path.join(resourceDir, 'img/**/*')
    )
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
    }),
    new OptimizeCssAssetsPlugin()
  ],
  module: {
    rules: [ {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-runtime'
          ]
        }
      }
    }, {
      test: /\.css/,
      use: [ {
        loader: devMode ?
          'style-loader' :
          MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      } ]
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
          ],
          preferPathResolver: 'webpack'
        }
      } ]
    }, {
      test: /\.(ico|jpg|png|gif|svg|bmp|webp|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:6].[ext]',
            publicPath: `${ cdn }/assets`,
            emitFile: true
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:6].[ext]',
            publicPath: `${ cdn }/assets`,
            emitFile: true
          }
        }
      ]
    } ]
  },
  resolve: {
    extensions: [ '.css', '.js', '.styl' ],
    modules: [
      'node_modules',
      'src/resources'
    ]
  }
}
