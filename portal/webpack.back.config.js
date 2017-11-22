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
} = require('webpack')

// === Webpack optimization plugins ===
const {
  ModuleConcatenationPlugin
} = require('webpack').optimize

// === Angular webpack plugins ===
const { AotPlugin } = require('@ngtools/webpack')
const { NamedLazyChunksWebpackPlugin } = require('@angular/cli/plugins/webpack')

// === Webpack expernal plugins ===
const MinifyPlugin = require('babel-minify-webpack-plugin')

// === Webpack config ===
module.exports = {
  target: 'node',
  context: PATH('./src'),

  entry: {
    main: [ PATH('./src/main.back.ts') ]
  },

  output: {
    path: PATH('./dist/back'),
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main'],
    symlinks: true,
    alias: {
      '@core': PATH('../core')
    }
  },

  module: {
    rules: [{
      // === Null loader ===
      test: /\/node_modules\/(chartist)\/.*\.(js|ts)/,
      loader: 'null-loader'
    },{
      // === Load html and tpl files ===
      test: /\.(html|tpl)$/i,
      loader: 'raw-loader'
    },{
      // === Typescript loader ===
      test: /\.ts$/,
      loader: '@ngtools/webpack'
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
      APP_VERSION: package.version
    }),

    new NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),
    new NamedLazyChunksWebpackPlugin(),

    new AotPlugin({
      mainPath: 'main.back.ts',
      tsConfigPath: PATH('./tsconfig.back.json')
    }),

    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      entryOnly: true,
      test: 'main.js'
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
  devtool: isProduction ? false : 'inline-source-map',
  stats: 'errors-only'
}
