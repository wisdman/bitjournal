import { RouteMiddleware, Context, INext, Get } from '@core/service'

import { Query } from '@core/db'

import { ROUTE_BASE } from './env'
const ROUTE_PATH = `${ROUTE_BASE}`

export class RootAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async auth(ctx: Context, next: INext) {
    if (!!ctx.session.data.user)
      ctx.set(204)
    else
      ctx.set(403)
  }
}
