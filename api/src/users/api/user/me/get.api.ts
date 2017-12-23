import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

const FIELDS_FOR_ME = [
  "id",
  "url",
  "title",
  "email",
  "phone",
  "image",
  "statuses",
  "rating",
  "card",
]

export class GetMeAPI extends RouteMiddleware {

  @Get(`${USERS_API_PATH}/me`)
  async get(ctx: Context, next: INext) {

    const id = ctx.session.data.user

    if (!id) {
      ctx.set(403)
      return
    }

    const query = new Query(USERS_DATATABLE)
                      .select(FIELDS_FOR_ME)
                      .where('id = $1 AND enable', id)

    const result = await query.exec<IPartialUser>(ctx.db)

    if (result.length !== 1) {
      ctx.set(403)
      return
    }

    ctx.set(result[0])
  }
}
