
const browserSync = require('browser-sync')
const historyFallback = require('connect-history-api-fallback')

browserSync({
  ui: false,
  server: {
    baseDir: ['adm/dist'],
    index: 'index.htm'
  },
  port: 8080,
  middleware: [
    historyFallback()
  ]
})
