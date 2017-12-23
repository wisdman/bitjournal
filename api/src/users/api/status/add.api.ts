import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  STATUSES_DATATABLE,
  STATUSES_API_PATH,
  IPartialStatus,
} from '@common/status'

import { StatusModel } from './status.model'
import { IModelResult } from '@core/model'

const FIELDS = [
  "id",
  "enable",
  "title",
  "image",
]

export class AddAPI extends RouteMiddleware {

  @Post(`${STATUSES_API_PATH}`)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = StatusModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialStatus

    const query = new Query(STATUSES_DATATABLE)
                      .insert(value)
                      .returning(FIELDS)

    const result = await query.exec<IPartialStatus>(ctx.db)

    ctx.set(result[0])
  }
}
