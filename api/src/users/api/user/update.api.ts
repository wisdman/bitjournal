import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

import { UserModel } from './user.model'
import { IModelResult } from '@core/model'

export class UpdateAPI extends RouteMiddleware {

  @Post(`${USERS_API_PATH}/:id`)
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

    const value = model.value as IPartialUser

    console.dir(value)

    const query = new Query(USERS_DATATABLE)
                      .update(value)
                      .where('id = $1', id)
                      .returning(value)

    const result = await query.exec<IPartialUser>(ctx.db)
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
