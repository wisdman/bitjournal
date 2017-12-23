import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { AdsModel } from './ads.model'
import { IModelResult } from '@core/model'

import {
  ADS_DATATABLE,
  ADS_API_PATH,
  IPartialAds,
} from '@common/ads'

export class UpdateAPI extends RouteMiddleware {

  @Post(`${ADS_API_PATH}/:id`)
  @ACL(
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async update(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json()

    const model = AdsModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialAds

    const query = new Query(ADS_DATATABLE)
                      .update(value)
                      .where('id = $1', id)
                      .returning(value)

    const result = await query.exec<IPartialAds>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
