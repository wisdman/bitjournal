import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

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

export class GetByIdAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {
    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true )
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_ADMINS)
                  .where('id = $1', id)

    else
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_EVERYONE)
                  .where('id = $1 AND enable', id)

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
