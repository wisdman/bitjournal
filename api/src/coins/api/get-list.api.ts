import { RouteMiddleware, Context, INext, Get, ACL } from '@core/service'

import { Query } from '@core/db'

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
  "availableSupply",
  "priceUSD",
  "priceBTC",
  "priceRUB",
  "change24h",
  "rating",
]

const CHECK_TRUE = (str:string = '') => /^(true|on|enable|1|yes)$/i.test(str)

export class GetListAPI extends RouteMiddleware {

  @Get(`${COINS_API_PATH}`)
  async get(ctx: Context, next: INext) {

    const symbols = new Array<string>()
                        .concat(ctx.route.query.symbols)
                        .join(',').split(',')
                        .map( item => item.replace(/[^A-Z0-9*@$]+/g, '').trim() )
                         .filter( item => !!item)
                         .map( item => `'${item}'`)

    const where = ctx.session.roles.checkAny(FULL_ACCES_ROLES) === true
                ? ( symbols.length > 0 ? `symbol IN (${ symbols.join(',') })` : '' )
                : ( symbols.length > 0 ? `symbol IN (${ symbols.join(',') }) AND enable` : 'enable' )

    let query = new Query(COINS_DATATABLE)
                    .select(FIELDS)
                    .where(where)

    query = query.order({'priceUSD': 'DESC'})

    const limit = Math.max(~~( new Array<string>().concat(ctx.route.query['limit']).pop() || '' ) || 0, 0)
    if (limit > 0)
      query = query.limit(limit)

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
