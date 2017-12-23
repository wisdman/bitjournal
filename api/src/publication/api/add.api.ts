import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  PUBLICATIONS_DATATABLE,
  PUBLICATIONS_API_PATH,
  IPartialPublication,
} from '@common/publication'

import { PublicationModel } from './publication.model'
import { IModelResult } from '@core/model'

const CAN_ENABLE_ROLES = [
  Role.Publisher,
  Role.Administrator,
  Role.Su
]

const FIELDS = [
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
  "rss",
  "facebook",
  "twitter",
  "content",
]


export class AddAPI extends RouteMiddleware {

  @Post(`${PUBLICATIONS_API_PATH}`)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = PublicationModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialPublication

    if (value.enanle !== undefined)
      value.enable = ctx.session.roles.checkAny(CAN_ENABLE_ROLES) ? value.enanle : false

    const query = new Query(PUBLICATIONS_DATATABLE)
                      .insert(value)
                      .returning(FIELDS)

    const result = await query.exec<IPartialPublication>(ctx.db)

    ctx.set(result[0])
  }
}
