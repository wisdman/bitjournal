/*
 * Session store middleware
 */

import { Middleware, INext } from '../middleware'
import { Context } from '../context'
import { Session } from './session'

export class SessionMiddleware extends Middleware {
  constructor(readonly BaseClass: new (ctx: Context) => Session = Session, readonly readonly:boolean = false){
    super()
  }

  async main(ctx: Context, next: INext): Promise<void> {

    ctx.session = new this.BaseClass(ctx)

    await this.get(ctx)

    await this.before(ctx)

    ctx.debug('=== Input session ===\n%s', ctx.session )

    await next()

    if (this.readonly || !ctx.session)
      return

    ctx.debug('=== Output session ===\n%s', ctx.session )

    await this.after(ctx)

    if (ctx.finished || !ctx.session)
      return

    await this.set(ctx)
  }

  async get(ctx: Context) {}

  async before(ctx: Context) {}

  async after(ctx: Context) {}

  async set(ctx: Context) {}
}
