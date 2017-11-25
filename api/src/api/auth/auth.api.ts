import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UserSession } from '@common/middleware'
import { User } from '@common/models'

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
                                    .where("email = $1 AND password = encode($2, 'sha512'), 'hex')",
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

      if (!otp.totpCheck(body.totp)) { // bad TOTP key
        ctx.set(403)
        return
      }

    }

    // Allow

    ctx.session.user = new User(result.rows[0])
    ctx.set(204)
  }


  @Get('/auth/logout')
  async logout(ctx: Context, next: INext) {
    if (ctx.session.isValid) {

      const user = ctx.session.user as User

      const db = ctx.db as Client

      const query = new Query('sessions').delete()
                                         .where('owner = $1', String(user.id))

      ctx.debug('=== SQL Query [/auth/login] ===\n%s', query)

      const result = await db.query(query.valueOf())

      ctx.debug('=== SQL Result [/auth/login] ===\n%s', result.rows)
    }

    ctx.session.user = undefined
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
