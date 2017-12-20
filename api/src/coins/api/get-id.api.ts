import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:symbol`

const FULL_ACCES_ROLES = [
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "symbol",
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
  "histoday",
  "rating",
  "branding",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "enable",
  "hot",
])


export class GetByIdAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    const symbol = ctx.route.data.symbol

    if (!symbol) {
      ctx.set(404)
      return
    }

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true )
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_ADMINS)
                  .where('symbol = $1', symbol)

    else
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_EVERYONE)
                  .where('symbol = $1 AND enable', symbol)

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
