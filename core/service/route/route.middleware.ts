
/*
 * Route middleware
 */

import { Middleware, INext, Compose } from '../middleware'
import { Context } from '../context'

import { Methods } from './methods'

const RouteFunction = Symbol('RouteFunction')

export class RouteMiddleware extends Middleware {

  constructor(){
    super()
    ;(this as any)[RouteFunction] = Compose( Methods.get(this.constructor) )
  }

  async main(ctx: Context, next: INext): Promise<void> {
    return (this as any)[RouteFunction].call(this, ctx, next)
  }
}
