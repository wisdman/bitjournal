
import { RouteMiddleware, Context, INext, Get, Route } from '@core/service'

import { ICoin, Coin } from '@common/models'

import {
  ISource,
  CoinMarketCapSource,
} from './sources'

import { getSymbols } from './currencies'

const ROUTE_BASE = 'ticker'

export class TickerAPI extends RouteMiddleware {

  private _symbols: Array<string> = new Array<string>()

  private readonly _coins: Array< Coin > = new Array<Coin>()

  private readonly _sources: Array< ISource > = new Array< ISource >()

  private readonly _updateSymbolsInterval: number = 30000
  private readonly _updateTickerInterval: number = 30000

  constructor({
    updateSymbolsInterval =  600000,
    updateTickerInterval = 600000,
  }: {
    updateSymbolsInterval?: number
    updateTickerInterval?: number
  } = {}) {
    super()

    this._updateSymbolsInterval = updateSymbolsInterval
    this._updateTickerInterval  = updateTickerInterval

    this._sources.push( new CoinMarketCapSource() )

    this.updateSymbolsLoop()
        .then( () => this.updateLoop())
  }

  private updateItem(value: ICoin): Coin {
    const newItem = new Coin(value)

    const currentItem = this._coins.find( item => item.symbol === newItem.symbol )
    if (!currentItem) {
      this._coins.push(newItem)
      return newItem
    }

    currentItem.update(newItem)
    return currentItem
  }

  private async updateSymbolsLoop(): Promise<void> {
    const symbols = await getSymbols()

    if (symbols.length > 0)
      this._symbols = symbols

    setTimeout( () => this.updateSymbolsLoop(), this._updateSymbolsInterval )
  }

  private async updateLoop(): Promise<void> {

    for (let source of this._sources) {
      let result: Array<ICoin> = new Array<ICoin>()
      try {
        result = await source.update(this._symbols)
      } catch (error) {
        console.error('Update error', error)
      }

      result.forEach( item => this.updateItem(item) )
    }

    setTimeout( () => this.updateLoop(), this._updateSymbolsInterval )

    // Debuglog
    console.log('UpdateLoop complite')
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
