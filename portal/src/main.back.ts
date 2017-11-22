/*
 * Bakend service
 */

import { promisify } from 'util'
import fs from 'fs'
const fs_readFile = promisify(fs.readFile)

import path from 'path'

import { EventEmitter } from '@core/event'
import { Service, Context, INext } from '@core/service'

// === Polyfills ===
import 'core-js/es7/reflect'
import 'zone.js/dist/zone-node'

import { enableProdMode, InjectionToken } from '@angular/core'
import { renderModuleFactory, INITIAL_CONFIG } from '@angular/platform-server'

import { AppModuleNgFactory } from './app.back.module.ngfactory'
// import { CONTEXT } from './app.tokens'

// Global date timezone
process.env.TZ = 'UTC'

// Enable production mode
if (!process.env.DEBUG) {
  enableProdMode()
}

// HTTP service
const service = new Service()

// === Async autocall main function ===
;(async () => {

  const INDEX_HTML = await fs_readFile( path.resolve(__dirname, 'index.html'), 'utf8' )

  service.use( async (ctx: Context, next: INext) => {
    let html = await renderModuleFactory(AppModuleNgFactory, {
      document: INDEX_HTML,
      url: ctx.request.path,
      // extraProviders: [{
        // provide: CONTEXT,
        // useValue: ctx
      // }]
    })

    ctx.end(html)
  })

  // Enable server
  await service.listen()
})()
