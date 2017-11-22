/*
 * Session store middleware
 */

import { Middleware, INext } from '../middleware'
import { Context } from '../context'
import { Session } from './session'

import { SESSION_ID_REGEXP } from './pattern'

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

  async get(ctx: Context) {
    const id = SESSION_ID_REGEXP.exec(ctx.request.getHeader('Cookie') || '')
    ctx.session.id = id && id[0] || ''
  }

  async before(ctx: Context) {}

  async after(ctx: Context) {}

  async set(ctx: Context) {
    if (ctx.session.isValid)
      ctx.response.setHeader('Set-Cookie', `session=${ctx.session.id}; path=/; expires=Thu, 31 Dec 3000 00:00:00 GMT`)
    else
      ctx.response.setHeader('Set-Cookie', 'session=closed; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')

  }
}
