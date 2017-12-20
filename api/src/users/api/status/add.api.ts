import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import { StatusModel } from './status.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

const FIELDS = [
  "id",
  "enable",
  "title",
  "image",
]

export class AddAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
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

    const query = new Query(DATATABLE)
                      .insert(model.value)
                      .returning()

    const result = await query.exec<object>(ctx.db)

    ctx.set(result[0])
  }
}
