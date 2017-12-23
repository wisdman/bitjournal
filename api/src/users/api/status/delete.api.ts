import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  STATUSES_DATATABLE,
  STATUSES_API_PATH,
  IPartialStatus,
} from '@common/status'

export class DeleteAPI extends RouteMiddleware {

  @Delete(`${ STATUSES_API_PATH}/:id`)
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

    const query = new Query(STATUSES_DATATABLE)
                      .delete()
                      .where('id = $1', id)
                      .returning('id')

    let result = await query.exec<IPartialStatus>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
