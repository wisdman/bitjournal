import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { UserModel } from './user.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

export class UpdateAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
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

    const model = UserModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const query = new Query(DATATABLE)
                      .update(model.value)
                      .where('id = $1', id)
                      .returning(model.value)

    const result = await query.exec<object>(ctx.db)
                              .catch( error => error as DBError )

    // Result is error
    if ( !Array.isArray(result) ) {
      if (result.code === DBError.UNIQUE_VIOLATION ) {
        ctx.set(409)
        return
      }

      ctx.throw(result)
      return
    }

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
