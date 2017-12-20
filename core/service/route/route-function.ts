
import { Context } from '../context'
import { IMiddleware, INext } from '../middleware'

import { PathRoute } from './path-route'

import { Debug } from '@core/debug'
const debug = new Debug('Route')

export function generateRouteFunction(
                  method: string,
                  pattern: string,
                  queryKeyList: Array<string>,
                  propertyKey: string ): IMiddleware {

  const pathRoute = new PathRoute(pattern)

  return async function(this: any, ctx: Context, next: INext): Promise<void> {
    const route = ctx.route

    if (route.finished)
      return await next()

    if (route.method !== method || (route.method === 'HEAD' && method !== 'GET') )
      return await next()

    const match = pathRoute.exec(route.pathname)

    if (!match)
      return await next()

    for (let key of queryKeyList)
      if (!(key in route.query))
        return await next()

    route.data = match

    ctx.debug('=== Route [%s %s] ===\n%s %o -> %s', route.method, route.path, pattern, queryKeyList, propertyKey)

    await this[propertyKey](ctx, next)
  }
}
