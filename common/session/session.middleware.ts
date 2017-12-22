/*
 * Auth context
 */
import { Middleware, Context, INext, SessionMiddleware, ISession } from '@core/service'
import { CustomQuery } from '@core/db'

const SESSION_TOKEN_REGEXP = /token\s+([0-9a-f]{128})/

const ROLES_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/

export class CustomSessionMiddleware extends SessionMiddleware {

  async init(ctx: Context): Promise<ISession> {
    const matchId = SESSION_TOKEN_REGEXP.exec(ctx.request.getHeader('Authorization') || '')
    const id = matchId && matchId[1] || ''

    if (!id)
      return {}

    const query = new CustomQuery(`SELECT
                                     "users".id,
                                     "users".roles
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
                                     "sessions"."expires" > timezone('UTC', now())`, id)

    const result = await query.exec<{id: string, roles: string}>(ctx.db)

    if (result.length !== 1)
      return {}

    return {
      id: id,
      roles: result[0].roles,
      data: { user: result[0].id }
    }
  }
}
