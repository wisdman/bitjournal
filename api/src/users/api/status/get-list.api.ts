import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'

import {
  STATUSES_DATATABLE,
  STATUSES_API_PATH,
  IPartialStatus,
} from '@common/status'

const FULL_ACCES_ROLES = [
  Role.Administrator,
  Role.Su
]

const FIELDS = [
  "id",
  "enable",
  "title",
  "image",
]

export class GetListAPI extends RouteMiddleware {

  @Get(`${STATUSES_API_PATH}`)
  async get(ctx: Context, next: INext) {

    const query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

                ? new Query(STATUSES_DATATABLE)
                      .select(FIELDS)

                : new Query(STATUSES_DATATABLE)
                      .select(FIELDS)
                      .where('enable')

    const result = await query.exec<IPartialStatus>(ctx.db)

    ctx.set(result)
  }
}
