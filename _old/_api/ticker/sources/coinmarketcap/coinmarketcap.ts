
import { Subject } from 'rxjs/Subject'
import { HTTP, Response } from '@core/http'

import { ICoin, Historical } from '@common/models'

import { ITickerItem } from './ticker-item.interface'
import { IHistoricalData } from './historical-data.interface'

import { ISource } from '../source.interface'

const TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=0'
const HISTORICAL_URL = (id: string) => `https://graphs.coinmarketcap.com/currencies/${id}/`

const TICKE_UPDATE_TIMEOUT = 60000
const HISTORICAL_UPDATE_TIMEOUT = 10000

export class CoinMarketCapSource implements ISource {
  static buildTimestamp(value: any): number {
    const uts = ~~value
    return uts*1000
  }

  static compileHistoricaData(items: Array< Array<number> >, type: 'btc' | 'usd'): Array<Historical> {
    return items.map(item => new Historical({
                      ts: parseInt(<any>item[0]),
                      price: { [type]: item[1] },
                    })).filter( item => item.ts > 0)
  }

  private _http: HTTP = new HTTP()

  private _coinSubject = new Subject< Partial<ICoin> >()
  coin = this._coinSubject.asObservable()

  private _updateHistoricaQueue: Array<{ id: string, symbol: string }> = new Array<{ id: string, symbol: string }>()

  constructor() {
    this._updateStart()
  }

  async _updateStart(): Promise<void> {
    try {
      await this._updateTickerLoop()
      await this._updateHistoricalLoop()
    } catch (error) {
      console.log('CoinMarketCapSource CRITICAL', error)
    }
  }

  private _newTickerData(data: Array<ITickerItem>) {
    data.sort((a, b) => parseInt(a.rank) - parseInt(b.rank))
        .forEach( item => {
          const symbol = item.symbol

          if (this._updateHistoricaQueue.find(item => item.symbol === symbol) === undefined)
            this._updateHistoricaQueue.push({ id: item.id, symbol })

          const available = parseInt( item['available_supply'] )
          const volume24 = parseInt( item['24h_volume_usd'] )

          const lastPrice = new Historical({
            ts: CoinMarketCapSource.buildTimestamp( item['last_updated'] ),
            price: {
              btc: item['price_btc'],
              usd: item['price_usd'],
            }
          })

          const coin = { symbol, available, volume24, lastPrice }

          this._coinSubject.next(coin)

          console.log('[CoinMarketCapSource] Upadate Coin: %s', JSON.stringify(coin))
        })
  }

  private async _updateTickerLoop() {

    let data: Array<ITickerItem> = new Array<ITickerItem>()

    try {
      data = await this._http.json< Array<ITickerItem> >(TICKER_URL)
    } catch( error ) {
      console.error('CoinMarketCapSource', error)
    }

    if (data.length > 0)
      this._newTickerData(data)

    setTimeout( () => this._updateTickerLoop(), TICKE_UPDATE_TIMEOUT)
  }

  private async _updateHistoricalLoop() {
    const item = this._updateHistoricaQueue.shift()
    if (!item) {
      setTimeout( () => this._updateHistoricalLoop(), HISTORICAL_UPDATE_TIMEOUT)
      return
    }

    const url = HISTORICAL_URL(item.id)

    let data: IHistoricalData = {
      'price_btc': Array< Array<number> >(),
      'price_usd': Array< Array<number> >(),
    }

    try {
      data = await this._http.json< IHistoricalData >(url)
    } catch( error ) {
      console.error('CoinMarketCapSource', error)
    }

    if (Array.isArray(data['price_btc'])) {
      const btcHistorical = CoinMarketCapSource.compileHistoricaData(data['price_btc'], 'btc')
      this._coinSubject.next({ symbol: item.symbol, historical: btcHistorical })
    }

    if (Array.isArray(data['price_usd'])) {
      const usdHistorical = CoinMarketCapSource.compileHistoricaData(data['price_usd'], 'usd')
      this._coinSubject.next({ symbol: item.symbol, historical: usdHistorical })
    }

    console.log('[CoinMarketCapSource] Upadate Historical [%s] - ', url)


    setTimeout( () => this._updateHistoricalLoop(), HISTORICAL_UPDATE_TIMEOUT)
  }
}
