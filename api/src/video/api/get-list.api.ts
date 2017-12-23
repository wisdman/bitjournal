import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  VIDEO_DATATABLE,
  VIDEO_API_PATH,
  IPartialVideo,
} from '@common/video'

const ROUTE_PATH = `${VIDEO_API_PATH}`

const FULL_ACCES_ROLES = [
  Role.Publisher,
  Role.Administrator,
  Role.Su
]

const FIELDS = [
  "id",
  "enable",
]

export class GetListAPI extends RouteMiddleware {

  @Get(`${VIDEO_API_PATH}`)
  async get(ctx: Context, next: INext) {

    let query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

              ? new Query(VIDEO_DATATABLE)
                    .select(FIELDS)

              : new Query(VIDEO_DATATABLE)
                    .select(FIELDS)
                    .where('enable')

    const result = await query.exec<IPartialVideo>(ctx.db)

    ctx.set(result)
  }
}
