import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { CoinModel } from './coin.model'
import { IModelResult } from '@core/model'

import {
  COINS_API_PATH,
  COINS_DATATABLE,
  IPartialCoin,
} from '@common/coin'

export class UpdateAPI extends RouteMiddleware {

  @Post(`${COINS_API_PATH}/:symbol`)
  @ACL(
    Role.Administrator,
    Role.Su
  )
  async update(ctx: Context, next: INext) {

    const symbol = ctx.route.data.symbol

    if (!symbol) {
      ctx.set(404)
      return
    }

    const data = await ctx.request.json()

    const model = CoinModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialCoin

    const query = new Query(COINS_DATATABLE)
                      .update(value)
                      .where('symbol = $1', symbol)
                      .returning(value)

    const result = await query.exec<IPartialCoin>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
