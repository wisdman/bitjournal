
import { Context } from '../context'
import { IMiddleware, INext } from '../middleware'

import { Route } from './route'
import { PathRoute } from './path-route'

import { Methods } from './methods'

type IMethod = 'DELETE' | 'GET' | 'POST' | 'PUT'

function generateRouteFunction(method: string, pattern: string, propertyKey: string): IMiddleware {

  const pathRoute = new PathRoute(pattern)

  return async function(this: any, ctx: Context, next: INext): Promise<void> {
    const route = ctx.route as Route

    if (route.finished)
      return await next()

    if (route.method !== method || (route.method === 'HEAD' && method !== 'GET') )
      return await next()

    const match = pathRoute.exec(route.path)

    if (!match)
      return await next()

    route.data = match

    ctx.debug('=== Route [%s] ===\n%s => %s\n%s', route.path, pattern, propertyKey, route.data )

    return await this[propertyKey](ctx, next)
  }
}

function Method(method: IMethod, pattern: string = ''): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    if (typeof propertyKey === 'symbol')
      throw new TypeError('Property name must be a string')

    let methods = Methods.get(target.constructor)
    methods.push( generateRouteFunction(method, pattern, propertyKey) )
    Methods.set(target.constructor, methods)
  }
}

export const Delete = (pattern?: string) => Method('DELETE' , pattern)
export const Get    = (pattern?: string) => Method('GET'    , pattern)
export const Post   = (pattern?: string) => Method('POST'   , pattern)
export const Put    = (pattern?: string) => Method('PUT'    , pattern)
