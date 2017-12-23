/*
 * Frontend webpack config
 */

const path = require('path')
const PATH = (...p) => path.resolve(__dirname, ...p)

const isProduction = process.env.NODE_ENV === 'production'
const package = require('../package.json')

// === Webpack plugins ===
const {
  EnvironmentPlugin,
  LoaderOptionsPlugin,
  NoEmitOnErrorsPlugin,
  ProgressPlugin,
} = require('webpack')

// === Webpack optimization plugins ===
const {
  CommonsChunkPlugin,
  ModuleConcatenationPlugin,
} = require('webpack').optimize

// === Angular webpack plugins ===
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const { NamedLazyChunksWebpackPlugin } = require('@angular/cli/plugins/webpack')

// === Webpack expernal plugins ===
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin      = require('babel-minify-webpack-plugin')

// === Custom webpack plugins ===
const WebpackIndexHTMLPlugin = require('../webpack/indexhtml')
const WebpackManifestPlugin  = require('../webpack/manifest')
const WebpackPostCSSPlugin   = require('../webpack/postcss')
const WebpackSupressPlugin   = require('../webpack/suppress')

// === Post css plugin modules ===
const PostcssAutoprefixer     = require('autoprefixer')
const PostcssCSSO             = require('postcss-csso')
const PostcssDiscardComments  = require('postcss-discard-comments')
const PostcssDiscardFontFace  = require('postcss-discard-font-face')
const PostcssSelectorMatches  = require('postcss-selector-matches')
const PostcssSelectorNot      = require('postcss-selector-not')

// === Loader plugins ===
const postcssLoaderPlugins = [
  PostcssSelectorNot(),
  PostcssSelectorMatches(),
  PostcssDiscardComments({
    removeAll: isProduction
  }),
  PostcssDiscardFontFace(['woff2']),
]

// === Final plugins ===
const postcssFinalPlugins = [
  PostcssAutoprefixer({
    browsers: package.browserslist
  }),
  PostcssCSSO({
    comments: false,
    sourceMap: !isProduction
  })
]

// === Extract css chunks plugins
const ExtractStylesCSS = new ExtractTextPlugin('css/[name].[hash:10].css')

// === Webpack config ===
module.exports = {
  target: 'web',
  context: PATH('./src'),

  entry: {
    main:      [ PATH('./src/main.front.ts') ],
    'core-js': [ PATH('./src/core-js.ts') ],
    styles:    [ PATH('./src/styles/index.ts') ],
  },

  output: {
    path: PATH('./dist/front'),
    publicPath: '/',
    filename: 'js/[name].[hash:10].js',
    chunkFilename: 'js/[id].[hash:10].chunk.js',
    crossOriginLoading: false,
  },

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['browser', 'module', 'main'],
    symlinks: true,
    alias: {
      '@core': PATH('../core'),
      '@common': PATH('../common'),
    }
  },

  module: {
    rules: [{
      // === Load html files ===
      test: /\.html$/i,
      loader: 'raw-loader'
    },{
      // === Load fonts files ===
      test: /\.(woff|woff2)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'fonts/',
        name: '[name].[ext]'
      }
    },{
      // === Load images files ===
      test: /\.(png|jpg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'img/',
        name: '[name].[ext]'
      }
    },{
      // === Load SVG files
      test: /\.svg$/i,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'svg/',
          name: '[name].[ext]'
        }
      },{
        loader: 'svgo-loader',
        options: {
          plugins: [
            { cleanupIDs:        false },
            { convertPathData:   false },
            { removeUselessDefs: false },
            { removeXMLProcInst: false },
          ]
        }
      }]
    },{
      // === Global css styles ===
      test: /\.(css|scss)$/i,
      include: [
        PATH('./src/styles'),
        PATH('../common/styles'),
        PATH('../node_modules/font-awesome'),
        PATH('../node_modules/@angular/material/theming'),
      ],
      loader: ExtractStylesCSS.extract({
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },{
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: postcssLoaderPlugins
          }
        },{
          loader: 'sass-loader'
        }]
      })
    },{
      // === Modules css styles ===
      test: /\.(css|scss)$/i,
      exclude: [
        PATH('./src/styles'),
        PATH('../common/styles'),
        PATH('../node_modules/font-awesome'),
        PATH('../node_modules/@angular/material/theming'),
      ],
      use: [{
        loader: 'exports-loader',
        options: 'module.exports.toString()'
      },{
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      },{
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            ...postcssLoaderPlugins,
            ...postcssFinalPlugins,
          ]
        }
      },{
          loader: 'sass-loader'
        }]
    },{
      test: /\.js$/,
      use: [{
        loader: '@angular-devkit/build-optimizer/webpack-loader'
      }]
    },{
      // === Typescript loader ===
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      use: [{
        loader: '@angular-devkit/build-optimizer/webpack-loader'
      },{
        loader: '@ngtools/webpack'
      }]
    }]
  },

  plugins: [
    new ProgressPlugin(),

    new LoaderOptionsPlugin({
      debug: !isProduction,
      sourceMap: !isProduction,
      minimize: isProduction,
    }),

    new EnvironmentPlugin({
      NODE_ENV: isProduction ? 'production' : '',
      DEBUG: !isProduction,
      APP_NAME: package.name,
      APP_VERSION: package.version,
      PRODUCTION: isProduction,
    }),

    new NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),
    new NamedLazyChunksWebpackPlugin(),

    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: [ 'main' ],
      minChunks: module => /node_modules/.test(module.resource)
    }),

    ExtractStylesCSS,
    new WebpackPostCSSPlugin({
      plugins: postcssFinalPlugins
    }),

    new WebpackSupressPlugin({
      pattern: /(styles|material|svg)\.([a-z0-9\.]+)?js$/
    }),

    new WebpackManifestPlugin(),

    new WebpackIndexHTMLPlugin({
      output: PATH('./dist/index.html'),
      minify: isProduction ? {
        caseSensitive: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true
      } : {}
    }),

    new AngularCompilerPlugin({
      mainPath: 'main.front.ts',
      tsConfigPath: PATH('./tsconfig.front.json'),
      platform: 0
    }),

    new CopyWebpackPlugin([{
      from: PATH('./assets')
    }],{
      debug: 'warning'
    }),

  ].concat( isProduction ? [
    // === Minify js ===
    new MinifyPlugin({
      booleans: false,
      infinity: false,
      simplify: false,
      simplifyComparisons: false,
      typeConstructors: false,
      undefinedToVoid: false
    },{
      comments: false,
      sourceMap: false
    })
  ] : []),

  node: false,
  devtool: isProduction ? false : 'inline-source-map',
  stats: 'errors-only'
}
