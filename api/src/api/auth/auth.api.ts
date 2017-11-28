import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { OTP } from '@core/otp'

export class AuthAPI extends RouteMiddleware {

  @Post('/auth/login')
  async login(ctx: Context, next: INext) {
    const body = await ctx.request.json() as { email?: string, password?: string, totp?: string }

    if (typeof body !== 'object' || !body.email || !body.password) { // Email or password is empty
      ctx.set(403)
      return
    }

    const db = ctx.db as Client

    const query = new Query('users').select()
                                    .where("email = $1 AND password = encode(digest($2, 'sha512'), 'hex')",
                                           body.email, body.password)

    ctx.debug('=== SQL Query [/auth/login] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/auth/login] ===\n%s', result.rows)

    if (result.rowCount !== 1) { // User not found or password incorrect
      ctx.set(403)
      return
    }

    const secret = result.rows[0].totp

    if (secret) { // Usee TPTP auth

      if (!body.totp) { // TOTP is empty
        ctx.set(403)
        return
      }

      const otp = new OTP({ secret })

      if (!otp.totpCheck(body.totp, 2)) { // bad TOTP key
        ctx.set(403)
        return
      }

    }

    // Allow
    ctx.session.setUserId(result.rows[0].id)
    ctx.session.setRoles(result.rows[0].roles)
    ctx.set(204)
  }


  @Get('/auth/logout')
  async logout(ctx: Context, next: INext) {
    if (ctx.session.isValid) {

      const userId = ctx.session.userId as UUID

      const db = ctx.db as Client

      const query = new Query('sessions').delete()
                                         .where('owner = $1', String(userId))

      ctx.debug('=== SQL Query [/auth/login] ===\n%s', query)

      const result = await db.query(query.valueOf())

      ctx.debug('=== SQL Result [/auth/login] ===\n%s', result.rows)
    }

    ctx.session.setUserId(undefined)
    ctx.session.setRoles([])
    ctx.set(204)
  }


  @Get('/auth')
  async getOne(ctx: Context, next: INext) {
    if (ctx.session.isValid)
      ctx.set(204)
    else
      ctx.set(403)
  }
}
