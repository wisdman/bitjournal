import { RouteMiddleware, Context, INext, Post, Route } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'
import { OTP } from '@core/otp'

import { AUTH_API_PATH } from './env'

export class LoginAPI extends RouteMiddleware {

  @Post(`${AUTH_API_PATH}/login`)
  async login(ctx: Context, next: INext) {
    const body = await ctx.request.json() as { email?: string, password?: string, otp?: string }

    if (typeof body !== 'object' || !body.email || !body.password) { // Email or password is empty
      ctx.set(403)
      return
    }

    const query = new Query('users')
                      .select(['id', 'totp', 'roles'])
                      .where("enable AND email = $1 AND password = encode(digest($2, 'sha512'), 'hex')",
                             body.email, body.password)

    const result = await query.exec<{id: string, totp: string, roles: string}>(ctx.db)

    if (result.length !== 1) { // User not found or password incorrect
      ctx.set(403)
      return
    }

    const user = result[0]
    const secret = user.totp

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

    const sessionQuery = new Query('sessions')
                             .insert({
                               owner:  String(user.id),
                               ip: ctx.session.ip,
                             }).returning(['id'])

    const sessionResult = await sessionQuery.exec<{id: string }>(ctx.db)

    const token = sessionResult[0] && sessionResult[0].id || ''

    ctx.session.set({
      id: token,
      data: { user: String(user.id) },
      roles: user.roles
    })

    ctx.set({ token })
  }
}
