/*
 * Backend webpack config
 */

const path = require('path')
const PATH = (...p) => path.resolve(__dirname, ...p)

const isProduction = process.env.NODE_ENV === 'production'
const package = require('../package.json')

// === Webpack plugins ===
const {
  BannerPlugin,
  LoaderOptionsPlugin,
  NoEmitOnErrorsPlugin,
  ProgressPlugin,
  EnvironmentPlugin,
  ContextReplacementPlugin
} = require('webpack')

// === Webpack optimization plugins ===
const {
  ModuleConcatenationPlugin
} = require('webpack').optimize

// === Angular webpack plugins ===
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const { NamedLazyChunksWebpackPlugin } = require('@angular/cli/plugins/webpack')

// === Webpack expernal plugins ===
const MinifyPlugin = require('babel-minify-webpack-plugin')

// === Post css plugin modules ===
const PostcssAutoprefixer     = require('autoprefixer')
const PostcssCSSO             = require('postcss-csso')
const PostcssDiscardComments  = require('postcss-discard-comments')
const PostcssDiscardFontFace  = require('postcss-discard-font-face')
const PostcssSelectorMatches  = require('postcss-selector-matches')
const PostcssSelectorNot      = require('postcss-selector-not')

// === Loader plugins ===
const postcssPlugins = [
  PostcssSelectorNot(),
  PostcssSelectorMatches(),
  PostcssDiscardComments({
    removeAll: isProduction
  }),
  PostcssDiscardFontFace(['woff2']),
  PostcssAutoprefixer({
    browsers: package.browserslist
  }),
  PostcssCSSO({
    comments: false,
    sourceMap: !isProduction
  })
]

// === Webpack config ===
module.exports = {
  target: 'node',
  context: PATH('./src'),

  entry: {
    back: [ PATH('./src/main.back.ts') ]
  },

  output: {
    path: PATH('./dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main'],
    symlinks: true,
    alias: {
      '@core': PATH('../core'),
      '@common': PATH('../common'),
    }
  },

  module: {
    rules: [{
      // === Null loader ===
      test: /\/node_modules\/(chartist)\/.*\.(js|ts)/,
      loader: 'null-loader'
    },{
      // === Load html files ===
      test: /\.html$/i,
      loader: 'raw-loader'
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
          plugins: postcssPlugins
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

    new AngularCompilerPlugin({
      mainPath: 'main.back.ts',
      tsConfigPath: PATH('./tsconfig.back.json'),
      skipCodeGeneration: false,
      platform: 1
    }),

    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      entryOnly: true,
      test: 'back.js'
    }),

    new ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      PATH('./src'), // location of your src
      {} // a map of your routes
    ),
  ].concat( isProduction ? [
    // === Minify js ===
    // new MinifyPlugin({
    //   booleans: false,
    //   infinity: false,
    //   simplify: false,
    //   simplifyComparisons: false,
    //   typeConstructors: false,
    //   undefinedToVoid: false
    // },{
    //   comments: false,
    //   sourceMap: false
    // })
  ] : []),

  node: false,
  devtool: isProduction ? false : 'inline-source-map',
  stats: 'errors-only'
}
