import { RouteMiddleware, Context, INext, Get } from '@core/service'

import { Query } from '@core/db'

import { AUTH_API_PATH } from './env'

export class LogoutAPI extends RouteMiddleware {

  @Get(`${AUTH_API_PATH}/logout`)
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
