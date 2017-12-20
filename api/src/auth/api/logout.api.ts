import { RouteMiddleware, Context, INext, Get } from '@core/service'

import { Query } from '@core/db'

import { ROUTE_BASE } from './env'
const ROUTE_PATH = `${ROUTE_BASE}/logout`

export class LogoutAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async logout(ctx: Context, next: INext) {
    const user = ctx.session.data.user

    if (user) {
      const query = new Query('sessions').delete()
                                         .where('owner = $1', String(user))
      await query.exec(ctx.db)
    }

    ctx.session.reset()
    ctx.set(204)
  }
}
