import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ADS_DATATABLE,
  ADS_API_PATH,
  IPartialAds,
} from '@common/ads'

import { AdsModel } from './ads.model'
import { IModelResult } from '@core/model'

const FIELDS = [
  "id",
  "enable",
  "blocks",
  "title",
  "description",
  "url",
  "startDate",
  "endDate",
  "content",
  "files",
]

export class AddAPI extends RouteMiddleware {

  @Post(`${ADS_API_PATH}`)
  @ACL(
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = AdsModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialAds

    const query = new Query(ADS_DATATABLE)
                      .insert(model.value)
                      .returning(FIELDS)

    const result = await query.exec<IPartialAds>(ctx.db)

    ctx.set(result[0])
  }
}
