import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

export class DeleteAPI extends RouteMiddleware {

  @Delete(ROUTE_PATH)
  @ACL(
    Role.Ads,
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

    const query = new Query(DATATABLE)
                      .delete()
                      .where('id = $1', id)
                      .returning('id')

    let result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
