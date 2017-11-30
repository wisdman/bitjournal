/*
 * Auth context
 */
import { Middleware, Context, INext } from '@core/service'
import { Client } from 'pg'

import { Session } from './session'
import { User } from '@common/models'

export class SessionMiddleware extends Middleware {

  async main(ctx: Context, next: INext): Promise<void> {
    // === Create new session ===
    const session = new Session(ctx)

     // === Get user from DB by session ===
    const db = ctx.db as Client
    const result = await db.query({
      text: 'SELECT "users".* FROM "sessions" LEFT JOIN "users" ON "sessions"."owner" = "users"."id" WHERE "sessions"."id" = $1 AND "users"."enable"',
      values: [ctx.session.id]
    })

    if (result.rowCount !== 1)
      return

    session.user = new User(result.rows[0])

    ctx.debug('=== Input session ===\n%s', ctx.session)

    await next()

    ctx.debug('=== Output session ===\n%s', ctx.session)
  }
}
