import path from 'path'

import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const rootDir = path.resolve(__dirname, '..')

const htmlMinifyOptions = {
  collapseWhitespace: true,
  decodeEntities: true,
  removeComments: true,
  removeEmptyAttributes: true,
  sortAttributes: true,
  sortClassName: true
}

export default {
  mode: 'development',
  context: rootDir,
  entry: {
    home: [ path.join(rootDir, 'src/js/home.js') ],
    features: [ path.join(rootDir, 'src/js/features.js') ],
    'about-us': [ path.join(rootDir, 'src/js/about-us.js') ],
    'contact-us': [ path.join(rootDir, 'src/js/contact-us.js') ],
    'coming-soon': [ path.join(rootDir, 'src/js/coming-soon.js') ],
    'knowledge-base': [ path.join(rootDir, 'src/js/knowledge-base.js') ],
    'knowledge-base/getting-started': [ path.join(rootDir, 'src/js/knowledge-base/getting-started.js') ],
    'knowledge-base/developer-guide': [ path.join(rootDir, 'src/js/knowledge-base/developer-guide.js') ],
    'knowledge-base/faq': [ path.join(rootDir, 'src/js/knowledge-base/faq.js') ],
  },
  output: {
    path: path.join(rootDir, 'public/assets'),
    publicPath: '/assets/',
    filename: 'js/[name].[hash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin([
      path.join(rootDir, './public')
    ], {
      verbose: true,
      watch: false,
      allowExternal: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/coming-soon'),
      filename: path.join(rootDir, 'public/coming-soon.html'),
      chunks: [ 'coming-soon' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/home'),
      filename: path.join(rootDir, 'public/index.html'),
      chunks: [ 'home' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/about-us'),
      filename: path.join(rootDir, 'public/about-us.html'),
      chunks: [ 'about-us' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/contact-us'),
      filename: path.join(rootDir, 'public/contact-us.html'),
      chunks: [ 'contact-us' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/features'),
      filename: path.join(rootDir, 'public/features.html'),
      chunks: [ 'features' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/knowledge-base'),
      filename: path.join(rootDir, 'public/knowledge-base.html'),
      chunks: [ 'knowledge-base' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/knowledge-base/getting-started'),
      filename: path.join(rootDir, 'public/knowledge-base/getting-started.html'),
      chunks: [ 'knowledge-base/getting-started' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/knowledge-base/developer-guide'),
      filename: path.join(rootDir, 'public/knowledge-base/developer-guide.html'),
      chunks: [ 'knowledge-base/developer-guide' ],
      minify: htmlMinifyOptions
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(rootDir, 'src/views/pages/knowledge-base/faq'),
      filename: path.join(rootDir, 'public/knowledge-base/faq.html'),
      chunks: [ 'knowledge-base/faq' ],
      minify: htmlMinifyOptions
    }),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.join(rootDir, 'src/views/pages/coming-soon'),
    //   filename: path.join(rootDir, 'public/coming-soon.html'),
    //   chunks: [ 'coming-soon' ],
    //   minify: htmlMinifyOptions
    // }),
    new ExtractTextPlugin('css/[name].[hash:5].css')
  ],
  resolve: {
    extensions: [ '.js', '.json', '.styl' ],
    modules: [ 'src', 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [ 'env', {
                  target: {
                    browser: [ 'last 2 versions', 'safari >=7' ]
                  }
                } ],
                'stage-2'
              ],
              plugins: [
                'transform-runtime'
              ]
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                import: [ '~kouto-swiss/index.styl' ]
              }
            }
          ]
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              attrs: false
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:5].[ext]',
              publicPath: '/assets/',
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
              name: 'fonts/[name].[hash:5].[ext]',
              publicPath: '/assets/'
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              rootRelative: path.join(rootDir, 'src/views/') + '/'
            }
          }
        ]
      }
    ]
  }
}
