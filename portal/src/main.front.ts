/*
 * Frontend entrypoint
 */

// === Polyfills ===
import 'zone.js/dist/zone'

import { ApplicationRef, enableProdMode } from '@angular/core'
import { platformBrowser, enableDebugTools, disableDebugTools } from '@angular/platform-browser'

import { AppModuleNgFactory } from './app.front.module.ngfactory'

console.log(`${process.env.APP_NAME} v${process.env.APP_VERSION}`)

let decorateModuleRef = <T>(value: T): T => value

if (process.env.DEBUG) {
  decorateModuleRef = (modRef: any) => {
    const appRef = modRef.injector.get(ApplicationRef)
    const cmpRef = appRef.components[0]

    let ng = (<any> window).ng

    enableDebugTools(cmpRef)

    ;(<any> window).ng.probe = ng.probe
    ;(<any> window).ng.coreTokens = ng.coreTokens
    return modRef
  }
} else {
  enableProdMode()

  decorateModuleRef = (modRef: any) => {
    disableDebugTools()
    return modRef
  }
}

function main(): Promise<any> {
  return platformBrowser()
          .bootstrapModuleFactory(AppModuleNgFactory)
          .then(decorateModuleRef)
          .catch((err) => console.error(err))
}

const domReadyHandler = () => {
  document.removeEventListener('DOMContentLoaded', domReadyHandler)
  main()
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', domReadyHandler)
    break
  case 'interactive':
  case 'complete':
  default:
    main()
}
