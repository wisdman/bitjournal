import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

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
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "title",
  "startDate",
  "endDate",
])

export class GetListAPI extends RouteMiddleware {

  @Get(`${ADS_API_PATH}`)
  async get(ctx: Context, next: INext) {

    const query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

                ? new Query(ADS_DATATABLE)
                      .select(FIELDS_FOR_ADMINS)

                : new Query(ADS_DATATABLE)
                      .select(FIELDS_FOR_EVERYONE)
                      .where("enable AND startDate >= timezone('UTC', now()) AND endDate <= timezone('UTC', now())")

    const result = await query.exec<IPartialAds>(ctx.db)

    ctx.set(result)
  }
}
