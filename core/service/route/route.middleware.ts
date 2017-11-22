
/*
 * Route middleware
 */

import { Middleware, INext, Compose } from '../middleware'
import { Context } from '../context'
import { Route } from './route'

import { Methods } from './methods'

const RouteFunction = Symbol('Route')

export class RouteMiddleware extends Middleware {

  constructor(readonly BaseClass: new (ctx: Context) => Route = Route){
    super()
    ;(this as any)[RouteFunction] = Compose( Methods.get(this.constructor) )
  }

  async main(ctx: Context, next: INext): Promise<void> {
    ctx.route = new this.BaseClass(ctx)
    return (this as any)[RouteFunction].call(this, ctx, next)
  }
}
