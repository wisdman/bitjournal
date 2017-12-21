
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mergeAll'

import { HTTP, Response } from '@core/http'
import { Timestamp } from '@core/timestamp'

import { IHistoday } from '@common/coin'

import { ICoinmarketcapCoin } from './coin.interface'

import { ISource } from '../source.interface'

import {
  ICoinTickerItem,
  ICoinTicker
} from './coin-ticker.interfaces'

import {
  COIN_TICKER_URL,
  UPDATE_LOOP_TIMEOUT,
} from './env'


export class CoinmarketcapSources implements ISource {

  static coinTickerToCoin(input?: ICoinTickerItem): ICoinmarketcapCoin | undefined {

    if (!input)
      return undefined

    const symbol = String(input.symbol || '')
                   .trim()
                   .toUpperCase()

    if (!symbol)
      return undefined

    const output: ICoinmarketcapCoin = { symbol }

    const title = String(input.name || '').trim()
    if (title) output.title = title

    const priceUSD = Math.max( parseFloat(input.price_usd), 0)
    if (!Number.isNaN(priceUSD) && priceUSD > 0) output.priceUSD = priceUSD

    const priceBTC = Math.max( parseFloat(input.price_btc), 0)
    if (!Number.isNaN(priceBTC) && priceBTC > 0) output.priceBTC = priceBTC

    const priceRUB = Math.max( parseFloat(input.price_rub), 0)
    if (!Number.isNaN(priceRUB) && priceRUB > 0) output.priceRUB = priceRUB

    const volume24h = Math.max( parseFloat(input['24h_volume_usd']), 0)
    if (!Number.isNaN(volume24h) && volume24h > 0) output.volume24h = volume24h

    const availableSupply = Math.max( parseFloat(input.available_supply), 0)
    if ( !Number.isNaN(availableSupply)) output.availableSupply = availableSupply

    const maxSupply = Math.max( parseFloat(input.max_supply), 0)
    if (!Number.isNaN(maxSupply)) output.maxSupply = maxSupply

    const change1h = parseFloat(input.percent_change_1h)
    if (!Number.isNaN(change1h)) output.change1h = change1h

    const change24h = parseFloat(input.percent_change_24h)
    if (!Number.isNaN(change24h)) output.change24h = change24h

    const change7d = parseFloat(input.percent_change_7d)
    if (!Number.isNaN(change7d)) output.change7d = change7d

    output.coinmarketcapRank = ~~input.rank

    return output
  }


  private _http: HTTP = new HTTP()

  private _coinSubject = new Subject< ICoinmarketcapCoin >()
  coin = this._coinSubject.asObservable()


  private async _getCoinsTicker(): Promise< Array<ICoinmarketcapCoin> > {

    let data: ICoinTicker

    try {
      data = await this._http.json< ICoinTicker >(COIN_TICKER_URL)
    } catch( error ) {
      console.error('Coinmarketcape ERREOR [ getCoinsTicker http ]', error)
      return []
    }

    if (data.length === 0) {
      console.error('Coinmarketcap ERREOR [ getCoinsTicker data ]', data)
      return []
    }

    return data
           .map( item => CoinmarketcapSources.coinTickerToCoin(item) as ICoinmarketcapCoin )
           .filter( item => typeof item === 'object' && item !== null)
           .sort( (a ,b) => (a.coinmarketcapRank || 0) - (b.coinmarketcapRank || 0) )
  }


  // Manual update
  async update() {

    const list = await this._getCoinsTicker()

    list.forEach( item => this._coinSubject.next(item) )

    setTimeout(() => this.update(), UPDATE_LOOP_TIMEOUT)
  }

  constructor() {
    this.update()
  }
}
