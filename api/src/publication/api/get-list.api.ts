import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
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
  "description",
  "image",
  "authors",
  "tags",
  "sharing",
  "comments",
  "rating",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "rss",
  "facebook",
  "twitter",
  "lastModified",
])

export class GetListAPI extends RouteMiddleware {

  @Get(`${PUBLICATIONS_API_PATH}`, 'q')
  async search(ctx: Context, next: INext) {
    ctx.set([])
    return
  }

  @Get(`${PUBLICATIONS_API_PATH}`)
  async get(ctx: Context, next: INext) {

    const weight = new Array<string>()
                       .concat(ctx.route.query.weight)
                       .join(',').split(',')
                       .map( item => item.replace(/[^0-9]+/g, '').trim() )
                       .filter( item => !!item)
                       .map( item => Math.min(~~item, 2) )


    const weightWhere = weight.length > 0 ? ` AND weight IN (${ weight.join(',') }) ` : ''

    const sections = new Array<string>()
                         .concat(ctx.route.query.sections)
                         .join(',').split(',')
                         .map( item => item.replace(/[^a-z0-9_-]+/g, '').trim() )
                         .filter( item => !!item)

    const sectionsWhere = sections.length > 0 ? ` AND sections <@ '{${ sections.join(',') }}' ` : ''

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where(weightWhere + sectionsWhere)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where(`enable AND ts <= timezone('UTC', now())` + weightWhere + sectionsWhere)

    query = query.order({'ts': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    if (limit > 0)
      query = query.limit(limit)

    const result = await query.exec<IPartialPublication>(ctx.db)
    ctx.set(result)

  }
}
