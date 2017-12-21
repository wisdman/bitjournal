import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { VideoModel } from './video.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

const FIELDS = [
  "id",
  "enable",
]

export class AddAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
  @ACL(
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = VideoModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const query = new Query(DATATABLE)
                      .insert(model.value)
                      .returning(FIELDS)

    const result = await query.exec<object>(ctx.db)

    ctx.set(result[0])
  }
}