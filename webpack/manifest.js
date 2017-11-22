/*
 * Generate WEB manifest
 */

const path = require('path')

const { promisify } = require('util')
const fs = require('fs')
const fs_writeFile = promisify(fs.writeFile)

// const mkdir = require('./lib/mkdir')

// === Webpack plugin ===
module.exports = class WebpackManifestJSONPlugin {
  constructor({
    template = null,
    output = null
  } = {}) {
    this.template = template
    this.output = output
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      const template = path.resolve(compiler.context, this.template ? this.template : 'manifest.json' )
      const filename = path.resolve(compiler.outputPath, this.output ? this.output : 'manifest.json' )

      // Create output dir
      // await mkdir( path.dirname(filename) )

      let manifest = require(template)

      await fs_writeFile(filename, JSON.stringify(manifest), 'utf8')
      callback()
    })
  }
}
