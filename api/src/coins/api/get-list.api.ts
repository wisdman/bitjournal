import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

import { Role } from '@common/role'
import { IPartialCoin } from '@common/coin'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

const FULL_ACCES_ROLES = [
  Role.Ads,
  Role.Administrator,
  Role.Su
]

const FIELDS_FOR_EVERYONE = [
  "symbol",
  "title",
  "availableSupply",
  "priceUSD",
  "priceBTC",
  "priceRUB",
  "volume24h",
  "change24h",
  "rating",
]

const FIELDS_FOR_ADMINS = FIELDS_FOR_EVERYONE.concat([
  "enable",
  "hot",
])

export class GetListAPI extends RouteMiddleware {

  @Get(ROUTE_PATH)
  async get(ctx: Context, next: INext) {

    const hot = !!ctx.route.query['hot']

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true ) {
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_ADMINS)

      if (hot)
        query = query.where('hot')
    } else {
      query = new Query(DATATABLE)
                  .select(FIELDS_FOR_EVERYONE)
                  .where(hot ? 'hot AND enable' : 'enable')
    }

    query = query.order({'priceUSD': 'DESC'})

    let result = await query.exec<IPartialCoin>(ctx.db)

    result = result.map( item =>
                     Object.assign(
                       item,
                       { capitalizationUSD: (item.availableSupply || 0) * (item.priceUSD || 0) },
                       { capitalizationRUB: (item.availableSupply || 0) * (item.priceRUB || 0) },
                     )
                   ).filter( item => item.capitalizationUSD > 0 )

    ctx.set(result)
  }
}
