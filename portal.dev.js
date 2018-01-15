
const browserSync = require('browser-sync')
const historyFallback = require('connect-history-api-fallback')

browserSync({
  ui: false,
  server: {
    baseDir: ['portal/dist/front', 'portal/dist'],
    index: 'index.htm'
  },
  port: 8080,
  middleware: [
    historyFallback()
  ]
})
