import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ADS_DATATABLE,
  ADS_API_PATH,
  IPartialAds,
} from '@common/ads'

export class DeleteAPI extends RouteMiddleware {

  @Delete(`${ADS_API_PATH}/:id`)
  @ACL(
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async delete(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(ADS_DATATABLE)
                      .delete()
                      .where('id = $1', id)
                      .returning('id')

    let result = await query.exec<IPartialAds>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
