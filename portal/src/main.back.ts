/*
 * Bakend service
 */

import { promisify } from 'util'
import fs from 'fs'
const fs_readFile = promisify(fs.readFile)

import path from 'path'

import { Service, Context, INext } from '@core/service'

// === Polyfills ===
import 'zone.js/dist/zone-node'

import { enableProdMode, InjectionToken } from '@angular/core'
import { renderModuleFactory, INITIAL_CONFIG } from '@angular/platform-server'

import { AppModuleNgFactory } from './app.back.module.ngfactory'
// import { CONTEXT } from './app.tokens'

// Global date timezone
process.env.TZ = 'UTC'

// Enable production mode
enableProdMode()

const INDEX_HTML = fs.readFileSync( path.resolve(__dirname, 'index.html'), 'utf8' )

// HTTP service
new Service(

  async (ctx: Context, next: INext) => {
    let html = await renderModuleFactory(AppModuleNgFactory, {
      document: INDEX_HTML,
      url: ctx.request.path,
      // extraProviders: [{
        // provide: CONTEXT,
        // useValue: ctx
      // }]
    })

    ctx.set(html)
    await next()
  }
)
