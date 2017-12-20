/*
 * Auth context
 */
import { Middleware, Context, INext } from '@core/service'
import { Client } from 'pg'

import { Session } from './session'
import { ISession } from './session.interface'

export class SessionMiddleware extends Middleware {

  async main(ctx: Context, next: INext): Promise<void> {

    const newSession = await this.init(ctx)
    ctx.session.set(newSession)

    ctx.debug('=== Input session ===\n%O', ctx.session)

    await next()

    ctx.debug(`=== Output session ===\n%O`, ctx.session)

    await this.finally(ctx)
  }

  async init(ctx: Context): Promise<ISession> {
    return {}
  }

  async finally(ctx: Context): Promise<void> {

  }
}
