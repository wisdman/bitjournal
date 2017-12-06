
import { HTTP, Response } from '@core/http'
import { Timestamp } from '@core/timestamp'

import { Coin, ICoin, Price, Historical } from '@common/models'

import { ISource } from '../source.interface'
import { ITickerItem, ITickerData, IHistoricalData } from './data'

const TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=0'

const HISTORICAL_URL = (id: string) => `https://graphs.coinmarketcap.com/currencies/${id}/`

const TICKER_UPDATE_LIMIT = 60000
const HISTORICAL_UPDATE_LIMIT = 3600000

export class CoinMarketCapSource implements ISource {
  private _http: HTTP = new HTTP()

  readonly coins: Array<Coin> = new Array<Coin>()

  readonly _ids: { [key:string]: string } = {}

  private updateItem(newItem: Coin) {
    const currentItem = this.coins.find( item => item.symbol === newItem.symbol )
    if (!currentItem) {
      this.coins.push(newItem)
      return newItem
    }

    currentItem.update(newItem)
    return currentItem
  }

  private _tickerLastUpdateMoment: number = 0

  private async updateTicker(symbols: Array<string>): Promise< Array<Coin> > {

    const nextUpdateMoment = this._tickerLastUpdateMoment + TICKER_UPDATE_LIMIT
    const updateMoment = new Date().getTime()

    // Check update limit
    if ( nextUpdateMoment > updateMoment)
      return new Array<Coin>()

    this._tickerLastUpdateMoment = updateMoment

    // Get data
    const data = await this._http.json< ITickerData >(TICKER_URL)

    // Update data
    return data.filter( item => symbols.includes(item.symbol) )
                .map( item => {
                  this._ids[item.symbol] = item.id
                  return {
                    symbol: item.symbol,

                    max:       item['max_supply'],
                    available: item['available_supply'],
                    volume24:  item['24h_volume_usd'],

                    price: new Price({
                      btc: item['price_btc'],
                      usd: item['price_usd'],
                    }),

                    ts: Timestamp.fromUnux(item['last_updated'])
                  }
                })
                .map( item => new Coin(item) )
                .map( item => this.updateItem(item) )
  }

  private historicalDataItemToHistorical(items: Array< Array<number> >, type: 'btc' | 'usd'): Array<Historical> {
    return items.map( item => new Historical({
                                    ts: new Timestamp(item[0]),
                                    price: new Price({ [type]: item[1] })
                                  })
                    )
  }

  private async updateHistorical(coin: Coin): Promise< void > {
    const id = this._ids[coin.symbol]
    if (!id)
      return

    const lastUpdateMoment = Number(coin.lastHistorical) || 0

    const nextUpdateMoment = lastUpdateMoment + HISTORICAL_UPDATE_LIMIT

    const updateMoment = new Date().getTime()

    if ( nextUpdateMoment > updateMoment )
      return

    const url = HISTORICAL_URL(id)

    console.log('[CoinMarketCap] Upadate Historical [%s] - ', coin.symbol, url)

    // Get data
    const data = await this._http.json< IHistoricalData >( url )

    const btcHistorical = this.historicalDataItemToHistorical(data['price_btc'], 'btc')
    const usdHistorical = this.historicalDataItemToHistorical(data['price_usd'], 'usd')

    coin.updateHistorical([ ...btcHistorical, ...usdHistorical ])

    console.log('[CoinMarketCap] Upadate Historical [%s] - complite', coin.symbol)
  }

  async update(symbols: Array<string>): Promise< Array<ICoin> > {

    let updatedCoins = await this.updateTicker(symbols)

    // Debuglog
    console.log('[CoinMarketCap] Upadate Tickers [%s] - complite', updatedCoins.map(item => item.symbol).join(','))

    await Promise.all( updatedCoins.map( coin => this.updateHistorical(coin) ) )

    return updatedCoins
  }


}
