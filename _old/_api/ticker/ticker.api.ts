
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeAll'

import { RouteMiddleware, Context, INext, Get, Route } from '@core/service'

import {
  ICoin, Coin,
  IHistorical
} from '@common/models'

import {
  ISource,

  CoinMarketCapSource,
} from './sources'

const ROUTE_BASE = 'ticker'

export class TickerAPI extends RouteMiddleware {

  private readonly _coins: Array<Coin> = Array.from(Coin)

  private readonly _sources: Array< ISource > = [
    new CoinMarketCapSource()
  ]

  constructor() {
    super()

    Observable.from( this._sources )
              .map( item => item.coin )
              .mergeAll()
              .subscribe( item => this.updateItem(item))
  }

  updateItem(value: Partial<ICoin>) {
    const coin = this._coins.find( item => item.symbol === value.symbol)
    if (!coin)
      return

    coin.update(value)

    console.dir(coin, { depth: 5 })
  }

  @Get(`/${ROUTE_BASE}`)
  async tickers(ctx: Context, next: INext) {
    ctx.set(this._coins)
  }

  @Get(`/${ROUTE_BASE}/:symbol`)
  async ticker(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const symbol = String(route.data.symbol).toUpperCase()

    const item = this._coins.find( item => item.symbol === symbol )

    if (!item) {
      ctx.set(404)
      return
    }

    ctx.set(item)
  }

  @Get(`/${ROUTE_BASE}/:symbol/historical`)
  async historical(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const symbol = String(route.data.symbol).toUpperCase()

    const item = this._coins.find( item => item.symbol === symbol )

    if (!item) {
      ctx.set(404)
      return
    }

    ctx.set(item.historical)
  }
}
