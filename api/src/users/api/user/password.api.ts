import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

export class PasswordAPI extends RouteMiddleware {

  @Post(`${USERS_API_PATH}/:id/password`)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async password(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json<{password1: string,  password2: string}>()

    const password1 = String(data.password1)
    const password2 = String(data.password1)

    if (password1 !== password2) {
      ctx.set(400, 'Paswords mismatch')
      return
    }

    const query = new Query(USERS_DATATABLE)
                      .update("password = encode(digest($1, 'sha512'), 'hex')", password1)
                      .where('id = $1', id)
                      .returning('id')

    const result = await query.exec<IPartialUser>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(204)
  }
}
