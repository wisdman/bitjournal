import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

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
  "email",
  "phone",
])

export class GetListAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true )
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_ADMINS)
                  .order({'url': 'DESC'})

    else
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_EVERYONE)
                  .where('enable')
                  .order({'url': 'DESC'})

    const limit = Math.max(~~(new Array<string>().concat(ctx.route.query['limit']).join('')) || 0, 0)

    if (limit > 0)
      query = query.limit(limit)

    const result = await query.exec<object>(ctx.db)

    ctx.set(result)
  }
}
