import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ADS_DATATABLE,
  ADS_API_PATH,
  IPartialAds,
} from '@common/ads'

const FULL_ACCES_ROLES = [
  Role.Ads,
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "id",
  "enable",
  "blocks",
  "url",
  "content",
  "files",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "title",
  "description",
  "startDate",
  "endDate",
])

export class GetOneAPI extends RouteMiddleware {

  @Get(`${ADS_API_PATH}/:id`)
  async get(ctx: Context, next: INext) {
    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

                ? new Query(ADS_DATATABLE)
                      .select(FIELDS_FOR_ADMINS)
                      .where('id = $1', id)

                : new Query(ADS_DATATABLE)
                      .select(FIELDS_FOR_EVERYONE)
                      .where("id = $1 AND enable AND startDate >= timezone('UTC', now()) AND endDate <= timezone('UTC', now())", id)

    const result = await query.exec<IPartialAds>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
