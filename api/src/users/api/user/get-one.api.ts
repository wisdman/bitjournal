import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

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
  "url",
  "title",
  "image",
  "statuses",
  "rating",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "enable",
  "roles",
  "description",
  "email",
  "phone",
])

export class GetOneAPI extends RouteMiddleware {

  @Get(`${USERS_API_PATH}/:id`)
  async get(ctx: Context, next: INext) {
    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

                ? new Query(USERS_DATATABLE)
                      .select(FIELDS_FOR_ADMINS)
                      .where('id = $1', id)

                : new Query(USERS_DATATABLE)
                      .select(FIELDS_FOR_EVERYONE)
                      .where('id = $1 AND enable', id)

    const result = await query.exec<IPartialUser>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
