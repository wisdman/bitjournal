import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:date/:url`

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
  "ogTitle",
  "description",
  "ogDescription",
  "image",
  "ogImage",
  "authors",
  "tags",
  "sharing",
  "comments",
  "ads",
  "content",
]

export class GetByUrlAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    const date = String(ctx.route.data.date)
    const url = String(ctx.route.data.url)

    const query = new Query(DATATABLE)
                      .select(FIELDS_FOR_EVERYONE)
                      .where("ts::date = $1 AND url = $2 AND enable AND ts <= timezone('UTC', now())", date, url)

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
