import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { CoinModel } from './coin.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

export class UpdateAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
  @ACL(
    Role.Ads,
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

    const model = CoinModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const query = new Query(DATATABLE)
                      .update(model.value)
                      .where('id = $1', id)
                      .returning(model.value)

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
