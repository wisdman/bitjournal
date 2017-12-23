import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  PUBLICATIONS_DATATABLE,
  PUBLICATIONS_API_PATH,
  IPartialPublication,
} from '@common/publication'

const FULL_ACCES_ROLES = [
  Role.Author,
  Role.Publisher,
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "id",
  "enable",
  "ts",
  "url",
  "weight",
  "sections",
  "bind",
  "coins",
  "allCoins",
  "markets",
  "allMarkets",
  "exchanges",
  "allExchanges",
  "ico",
  "allICO",
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
  "rating",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "rss",
  "facebook",
  "twitter",
  "lastModified",
])

export class GetOneAPI extends RouteMiddleware {

  @Get(`${PUBLICATIONS_API_PATH}/:id`)
  async getById(ctx: Context, next: INext) {
    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where('id = $1', id)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where("id = $1 AND enable AND ts <= timezone('UTC', now())", id)

    const result = await query.exec<IPartialPublication>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }

  @Get(`${PUBLICATIONS_API_PATH}/:date/:url`)
  async getByUrl(ctx: Context, next: INext) {

    const date = String(ctx.route.data.date)
    const url = String(ctx.route.data.url)

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where("ts::date = $1 AND url = $2", date, url)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where("ts::date = $1 AND url = $2 AND enable AND ts <= timezone('UTC', now())", date, url)

    const result = await query.exec<IPartialPublication>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
