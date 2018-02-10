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

    let q = String(ctx.route.query.q)
            .toLowerCase()
            .replace(/[^a-zа-я0-9_-]+/,' ')
            .replace(/\s+/,' ')
            .trim()

    if (q.length === 0) {
      ctx.set([])
      return
    }

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where(`(tsv @@ plainto_tsquery($1))`, q)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where(`enable AND ts <= timezone('UTC', now()) AND (tsv @@ plainto_tsquery($1))`, q)

    query = query.order({'ts': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    query = query.limit(limit > 0 ? limit : 100)

    const result = await query.exec<IPartialPublication>(ctx.db)
    ctx.set(result)
  }


  @Get(`${PUBLICATIONS_API_PATH}`, 'tag')
  async tag(ctx: Context, next: INext) {
    let tag = String(ctx.route.query.tag)
              .toLowerCase()
              .replace(/[^a-zа-я0-9]+/,' ')
              .replace(/\s+/,' ')
              .trim()

    if (tag.length === 0) {
      ctx.set([])
      return
    }

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where(`tags @> ARRAY[$1]::text[]`, tag)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where(`enable AND ts <= timezone('UTC', now()) AND tags @> ARRAY[$1]::text[]`, tag)

    query = query.order({'ts': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    query = query.limit(limit > 0 ? limit : 100)

    const result = await query.exec<IPartialPublication>(ctx.db)
    ctx.set(result)
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

    const ts = Math.max(~~( new Array<string>().concat(ctx.route.query['ts']).pop() || '' ) || 0, 0)
    const tsWhere = ts > 0 ? ` AND (extract(epoch from ts at time zone 'utc') * 100000) < ${ts} ` : ''

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_ADMINS)
                    .where(weightWhere + sectionsWhere + tsWhere)

              : new Query(PUBLICATIONS_DATATABLE)
                    .select(FIELDS_FOR_EVERYONE)
                    .where(`enable AND ts <= timezone('UTC', now())` + weightWhere + sectionsWhere + tsWhere)

    query = query.order({'ts': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    if (limit > 0)
      query = query.limit(limit)

    const result = await query.exec<IPartialPublication>(ctx.db)
    ctx.set(result)

  }
}
