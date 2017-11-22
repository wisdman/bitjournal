/*
 * Debug context
 */

const DEBUGER_NAME = 'service'

import { DEBUG } from '../environments'

import { Context } from '../context'
import { INext, Middleware } from '../middleware'

import { inspect, debuglog } from 'util'

export class DebugMiddleware extends Middleware {

  enable: boolean = DEBUG.includes( DEBUGER_NAME.toLowerCase() )

  log(...args: Array<any>) {
    let first = args.shift()
    args = args.map(item => inspect(item.valueOf instanceof Function ? item.valueOf() : item, {depth: 3, colors: true}))
    console.log(first, ...args)
  }

  async main(ctx: Context, next: INext): Promise<void> {
    // Add debug to context
    ctx.debug = this.enable ? (...args: Array<any>) => this.log(...args) : () => void 1

    ctx.debug('=== Input context ===\n%s', ctx)
    await next()
    ctx.debug('=== Output context ===\n%s', ctx)
  }

}
