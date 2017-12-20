import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

const FULL_ACCES_ROLES = [
  Role.Ads,
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "id",
  "ts",
  "url",
  "weight",
  "sections",
  "coins",
  "markets",
  "exchanges",
  "ico",
  "bigTitle",
  "title",
  "description",
  "image",
  "authors",
  "tags",
  "sharing",
  "comments",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "enable",
  "rss",
  "facebook",
  "twitter",
])


export class GetListAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    const qWeight = ctx.route.query['weight']

    const weight = (Array.isArray(qWeight) ? qWeight : [qWeight])
                   .filter( item => !!item)
                   .map( item => Math.min(Math.max(~~item, 0), 2) )

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true ){
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_ADMINS)

      if (weight.length > 0)
        query =  query.where(`weight IN (${ weight.join(',') })`)

    } else {
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_EVERYONE)

      if (weight.length > 0)
        query = query.where(`enable AND ts <= timezone('UTC', now()) AND weight IN (${ weight.join(',') })`)
      else
        query = query.where(`enable AND ts <= timezone('UTC', now())`)
    }

    query = query.order({'ts': 'DESC'})

    const limit = Math.max(~~(new Array<string>().concat(ctx.route.query['limit']).join('')) || 0, 0)

    if (limit > 0)
      query = query.limit(limit)

    const result = await query.exec<object>(ctx.db)

    ctx.set(result)
  }
}
