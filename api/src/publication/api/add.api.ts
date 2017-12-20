import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { PublicationModel } from './publication.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

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
  "rss",
  "facebook",
  "twitter",
  "content",
]

export class AddAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
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

    if (model.value.enanle !== undefined)
      model.value.enable = ctx.session.roles.checkAny(CAN_ENABLE_ROLES) ? model.value.enanle : false

    const query = new Query(DATATABLE)
                      .insert(model.value)
                      .returning(FIELDS)

    const result = await query.exec<object>(ctx.db)

    ctx.set(result[0])
  }
}
