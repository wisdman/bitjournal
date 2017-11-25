
import { Context } from '../context'
import { IMiddleware, INext } from '../middleware'

import { Route } from './route'
import { PathRoute } from './path-route'

export function generateRouteFunction(
                  method: string,
                  pattern: string,
                  queryKeyList: Array<string>,
                  propertyKey: string ): IMiddleware {

  const pathRoute = new PathRoute(pattern)

  return async function(this: any, ctx: Context, next: INext): Promise<void> {
    const route = ctx.route as Route

    if (!route)
      return await next()

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

    ctx.debug('=== Route %s [%s] ===\n%s %s => %s\nData: %s\nQuery: %s',
              route.method, route.path, pattern, queryKeyList, propertyKey, route.data, route.query )

    await this[propertyKey](ctx, next)
  }
}
