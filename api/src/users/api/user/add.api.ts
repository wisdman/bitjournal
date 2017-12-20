import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'

import { Role } from '@common/role'

import { UserModel } from './user.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

const FIELDS = [
  "id",
  "enable",
  "roles",
  "url",
  "title",
  "description",
  "email",
  "phone",
  "image",
  "statuses",
]

export class AddAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = UserModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const query = new Query(DATATABLE)
                      .insert(model.value)
                      .returning(FIELDS)

    const result = await query.exec<object>(ctx.db)
                              .catch( error => error as DBError )


    if ( !Array.isArray(result) ) {
      if (result.code === DBError.UNIQUE_VIOLATION ) {
        ctx.set(409)
        return
      }

      ctx.throw(result)
      return
    }

    ctx.set(result[0])
  }
}
