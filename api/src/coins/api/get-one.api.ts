import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  COINS_API_PATH,
  COINS_DATATABLE,
  IPartialCoin,
} from '@common/coin'

const FULL_ACCES_ROLES = [
  Role.Administrator,
  Role.Su
]

const FIELDS = [
  "symbol",
  "enable",
  "title",
  "ogTitle",
  "description",
  "ogDescription",
  "founder",
  "startDate",
  "url",
  "algorithm",
  "proofType",
  "maxSupply",
  "availableSupply",
  "blockReward",
  "lastBlockTS",
  "lastBlockNumber",
  "hashRate",
  "priceUSD",
  "priceBTC",
  "priceRUB",
  "volume24h",
  "change1h",
  "change24h",
  "change7d",
  "histoday",
  "rating",
  "branding",
]

export class GetOneAPI extends RouteMiddleware {

  @Get(`${COINS_API_PATH}/:symbol`)
  async get(ctx: Context, next: INext) {

    const symbol = ctx.route.data.symbol

    if (!symbol) {
      ctx.set(404)
      return
    }

    const query = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true

                ? new Query(COINS_DATATABLE)
                      .select(FIELDS)
                      .where('symbol = $1', symbol)

                : new Query(COINS_DATATABLE)
                      .select(FIELDS)
                      .where('symbol = $1 AND enable', symbol)

    const result = await query.exec<IPartialCoin>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    const item = result[0]

    item.capitalizationUSD = (item.availableSupply || 0) * (item.priceUSD || 0)
    item.capitalizationRUB = (item.availableSupply || 0) * (item.priceRUB || 0)

    ctx.set(item)
  }
}
