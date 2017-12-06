/*
 * API webpack config
 */

const path = require('path')
const PATH = (...p) => path.resolve(__dirname, ...p)

const isProduction = process.env.NODE_ENV === 'production'
const package = require('../package.json')

// === Webpack plugins ===
const {
  BannerPlugin,
  EnvironmentPlugin,
  IgnorePlugin,
  LoaderOptionsPlugin,
  NoEmitOnErrorsPlugin,
  ProgressPlugin,
} = require('webpack')

// === Webpack optimization plugins ===
const {
  ModuleConcatenationPlugin,
} = require('webpack').optimize

// === Webpack expernal plugins ===
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin
const MinifyPlugin  = require('babel-minify-webpack-plugin')

// === Webpack config ===
module.exports = {
  target: 'node',
  context: PATH('./src'),

  entry: {
    main: [ PATH('./src/main.ts') ],
    raw: [ PATH('./src/raw.ts') ],
    ticker: [ PATH('./src/ticker.ts') ]
  },

  output: {
    path: PATH('./dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main'],
    symlinks: true,
    alias: {
      '@core': PATH('../core'),
      '@common': PATH('../common')
    }
  },

  module: {
    rules: [{
      // === Typescript loader ===
      test: /\.ts$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: PATH('./tsconfig.json'),
          useCache: false
        }
      }]
    }]
  },

  plugins: [
    new ProgressPlugin(),

    new LoaderOptionsPlugin({
      debug: !isProduction,
      sourceMap: false,
      minimize: isProduction,
    }),

    new EnvironmentPlugin({
      NODE_ENV: isProduction ? 'production' : '',
      DEBUG: !isProduction,
      APP_NAME: package.name,
      APP_VERSION: package.version
    }),

    new NoEmitOnErrorsPlugin(),
    new CheckerPlugin(),
    new IgnorePlugin(/pg\-native/),
    new ModuleConcatenationPlugin(),

    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      entryOnly: true,
      test: /\.js$/,
    })
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
  devtool: false,
  stats: 'errors-only'
}
