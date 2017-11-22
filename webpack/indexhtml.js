/*
 * Generate index.html from template
 */

const path = require('path')

const { promisify } = require('util')
const fs = require('fs')
const fs_readFile  = promisify(fs.readFile)
const fs_writeFile = promisify(fs.writeFile)

const { minify } = require('html-minifier')
const toposort = require('./lib/toposort')
// const mkdir = require('./lib/mkdir')

// === File patterns ===
const CSS_PATTERN = /\.css$/
const JS_PATTERN = /\.js$/

// === Webpack plugin ===
module.exports =  class WebpackIndexHTMLPlugin {
  constructor({
    template = null,
    output = null,
    minify = {}
  } = {}) {
    this.template = template
    this.output = output
    this.minify = minify
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      const template = path.resolve(compiler.context, this.template ? this.template : 'index.html' )
      const filename = path.resolve(compiler.outputPath, this.output ? this.output : 'index.html' )

      // Create output dir
      // await mkdir( path.dirname(filename) )

      let data = await fs_readFile(template, 'utf8')

      // === Prepare chunks links ===
      // Add an edge for each parent relationship into the graph
      const edges = []
      compilation.chunks.forEach(chunk => {
        chunk.parents.forEach(parent => {
          edges.push([parent, chunk])
        })
      })

      let CSS = []
      let JS = []

      const publicPath = compilation.options.output.publicPath || ''

      toposort(compilation.chunks, edges).forEach( chunk => {
        chunk.files.forEach( file => {
          if (CSS_PATTERN.test(file)) {
            CSS.push(`<link type="text/css" href="${publicPath}${file}" rel="stylesheet">`)
            return
          }

          if (JS_PATTERN.test(file)) {
            JS.push(`<script type="text/javascript" src="${publicPath}${file}" defer="defer"></script>`)
            return
          }
        })
      })

      data = data.replace(/{{\s*CSS\s*}}/, CSS.join(''))
                 .replace(/{{\s*JS\s*}}/, JS.join(''))

      data = minify(data, this.minify)

      await fs_writeFile(filename, data, 'utf8')

      callback()
    })
  }
}
