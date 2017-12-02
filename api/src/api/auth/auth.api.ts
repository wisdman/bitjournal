import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { OTP } from '@core/otp'

import { User } from '@common/models'

const ROUTE_BASE = 'auth'

export class AuthAPI extends RouteMiddleware {

  @Get(`/${ROUTE_BASE}`)
  async auth(ctx: Context, next: INext) {
    if (ctx.session.valid)
      ctx.set(204)
    else
      ctx.set(403)
  }

  @Get(`/${ROUTE_BASE}/logout`)
  async logout(ctx: Context, next: INext) {
    if (ctx.session.valid) {

      const user = ctx.session.user as User

      const db = ctx.db as Client

      const query = new Query('sessions').delete()
                                         .where('owner = $1', String(user.id))

      ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/logout] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/logout] ===\n%s`, result.rows)
    }

    ctx.session.user = null
    ctx.session.id = ''

    ctx.set(204)
  }

  @Post(`/${ROUTE_BASE}/login`)
  async login(ctx: Context, next: INext) {
    const body = await ctx.request.json() as { email?: string, password?: string, otp?: string }

    if (typeof body !== 'object' || !body.email || !body.password) { // Email or password is empty
      ctx.set(403)
      return
    }

    const db = ctx.db as Client

    const query = {
      text: `SELECT
               *
             FROM
               "users"
             WHERE
               "users"."email" = $1
               AND
               "users"."password" = encode(digest($2, 'sha512'), 'hex')
               AND
               enable`,
      values: [body.email, body.password]
    }

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/login] ===\n%s`, query)

    const result = await db.query(query)

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/login] ===\n%s`, result.rows)

    if (result.rowCount !== 1) { // User not found or password incorrect
      ctx.set(403)
      return
    }

    const secret = result.rows[0].totp

    if (secret) { // Usee TOTP auth

      if (!body.otp) { // TOTP is empty
        ctx.set(403)
        return
      }

      const otp = new OTP({ secret })

      if (!otp.totpCheck(body.otp, 2)) { // bad TOTP key
        ctx.set(403)
        return
      }

    }

    ctx.session.user = new User(result.rows[0])

    if (!ctx.session.user) {
      ctx.set(403)
      return
    }

    const sessionQuery = {
      text: `INSERT INTO
               "sessions" ("owner", "ip")
             VALUES
               ($1, $2)
             RETURNING
               "id"`,
      values: [ String(ctx.session.user.id), ctx.session.ip ]
    }

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/login] NEW ===\n%s`, sessionQuery)

    const sessionResult = await db.query(sessionQuery)

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/login] NEW ===\n%s`, sessionResult.rows)

    ctx.session.id = sessionResult.rows[0] && sessionResult.rows[0].id || ''

    ctx.set({ token: ctx.session.id })
  }
}
