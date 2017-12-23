import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  STATUSES_DATATABLE,
  STATUSES_API_PATH,
  IPartialStatus,
} from '@common/status'

import { StatusModel } from './status.model'
import { IModelResult } from '@core/model'

export class UpdateAPI extends RouteMiddleware {

  @Post(`${STATUSES_API_PATH}/:id`)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async update(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json()

    const model = StatusModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialStatus

    const query = new Query(STATUSES_DATATABLE)
                      .update(value)
                      .where('id = $1', id)
                      .returning(value)

    const result = await query.exec<IPartialStatus>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
