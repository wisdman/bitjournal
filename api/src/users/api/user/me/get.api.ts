import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from '../env'

const ROUTE_PATH = `${ROUTE_BASE}/me`

const FIELDS_FOR_ME = [
  "id",
  "url",
  "title",
  "email",
  "phone",
  "image",
  "statuses",
  "rating",
  "card",
]

export class GetMeAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    const id = ctx.session.data.user

    if (!id) {
      ctx.set(403)
      return
    }

    const query = new Query(DATATABLE)
                      .select(FIELDS_FOR_ME)
                      .where('id = $1 AND enable', id)

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(403)
      return
    }

    ctx.set(result[0])
  }
}
