import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

import { UserModel } from './user.model'
import { IModelResult } from '@core/model'

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

  @Post(`${USERS_API_PATH}`)
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

    const value = model.value as IPartialUser

    const query = new Query(USERS_DATATABLE)
                      .insert(value)
                      .returning(FIELDS)

    const result = await query.exec<IPartialUser>(ctx.db)
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
