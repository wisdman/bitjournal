import { RouteMiddleware, Context, INext, Get } from '@core/service'

import { AUTH_API_PATH } from './env'

export class RootAPI extends RouteMiddleware {

  @Get(`${AUTH_API_PATH}`)
  async auth(ctx: Context, next: INext) {
    if (!!ctx.session.data.user)
      ctx.set(204)
    else
      ctx.set(403)
  }
}
