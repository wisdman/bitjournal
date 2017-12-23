import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

export class DeleteAPI extends RouteMiddleware {

  @Delete(`${USERS_API_PATH}/:id`)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async delete(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(USERS_DATATABLE)
                      .delete()
                      .where('id = $1', id)
                      .returning('id')

    let result = await query.exec<IPartialUser>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
