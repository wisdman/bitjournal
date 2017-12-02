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

    const db = ctx.db as Client

    const query = {
      text: `SELECT
               "users".*
             FROM
               "sessions"
               LEFT JOIN
               "users"
               ON "sessions"."owner" = "users"."id"
             WHERE
               "sessions"."id" = $1
               AND
               "users"."enable"
               AND
               "sessions"."expires" > timezone('UTC', now())`,
      values: [session.id]
    }

    ctx.debug(`=== SQL Query SESSION ===\n%s`, query)

    const result = await db.query(query)

    ctx.debug(`=== SQL Result SESSION ===\n%s`, result.rows)

    if (result.rowCount === 1)
      session.user = new User(result.rows[0])

    ctx.session = session

    ctx.debug('=== Input session ===\n%s', ctx.session)

    await next()

    ctx.debug('=== Output session ===\n%s', ctx.session)
  }
}
