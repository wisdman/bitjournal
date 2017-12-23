import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  USERS_DATATABLE,
  USERS_API_PATH,
  IPartialUser,
} from '@common/user'

const FULL_ACCES_ROLES = [
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "id",
  "enable",
  "url",
  "title",
  "image",
  "statuses",
  "rating",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "roles",
  "email",
  "phone",
])

export class GetListAPI extends RouteMiddleware {

  @Get(`${USERS_API_PATH}`)
  async get(ctx: Context, next: INext) {

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(USERS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)

              : new Query(USERS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where('enable')

    query = query.order({'url': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    if (limit > 0)
      query = query.limit(limit)

    const result = await query.exec<IPartialUser>(ctx.db)

    ctx.set(result)
  }
}
