
import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'
import { OTP } from '@core/otp'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

export class GetOTPAPI extends RouteMiddleware {

  @Get(`${USERS_API_PATH}/:id/otp`)
  @ACL(
    Role.Su
  )
  async get(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(USERS_DATATABLE)
                      .select(['totp'])
                      .where('id = $1', id)

    const result = await query.exec<{ totp: string }>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    const secret = result[0].totp

    if (!secret) {
      ctx.set(204)
      return
    }

    const otp = new OTP({ secret })
    ctx.set({ secret: otp.base32Secret })
  }
}
