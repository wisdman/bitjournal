/*
 * Bakend SSR server
 */

// === Polyfills ===
import 'zone.js/dist/zone-node'

import { Socket } from 'net'
import { createServer, IncomingMessage, ServerResponse } from 'http'

import { enableProdMode, InjectionToken } from '@angular/core'
import { renderModuleFactory, INITIAL_CONFIG } from '@angular/platform-server'

import { AppBackModuleNgFactory } from './app.back.module.ngfactory'

import fs from 'fs'
import path from 'path'

// Set global timezone
process.env.TZ = 'UTC'

enableProdMode()

const INDEX_HTML = fs.readFileSync( path.resolve(__dirname, 'index.html'), 'utf8' )

const server = createServer( ( req: IncomingMessage, res: ServerResponse ) => {

  renderModuleFactory(AppBackModuleNgFactory, {
    document: INDEX_HTML,
    url: req.url || '',
      // extraProviders: [{
        // provide: CONTEXT,
        // useValue: ctx
      // }]
  }).then( html => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
  }).catch( error => {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal server error')
    console.error('Render error', error)
  })
})

server.on('clientError', (error: Error , socket: Socket ) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

// HTTP Server port, default '0.0.0.0'
const SERVICE_HOSTNAME = process.env.SERVICE_HOSTNAME || '0.0.0.0'
// HTTP Server port, default 80
const SERVICE_PORT = Math.max(~~(process.env.SERVICE_PORT || '') || 0, 0) || 80

server.listen(SERVICE_PORT, SERVICE_HOSTNAME, () => {
  const address = server.address()
  console.log(`Opened HTTP server on ${address.address}:${address.port}`)
})
