
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

import { ICryptocompareCoin } from './coin.interface'

import { ISource } from '../source.interface'

import {
  ICoinListItem,
  ICoinList,
} from './coin-list.interfaces'

import {
  ICoinSnapshotItem,
  ICoinSnapshotFull,
} from './coin-snapshot-full.interfaces'

import {
  ICoinHistodayItem,
  ICoinHistoday
} from './coin-histoday.interfaces'

import {
  COIN_LIST_URL,
  COIN_SNAPSHOT_URL,
  COIN_HISTODAY_URL,

  UPDATE_LOOP_TIMEOUT,
  REQUEST_TIMEOUT,
} from './env'

export class CryptocompareSources implements ISource {

  static coinListToCoin(input?: ICoinListItem): ICryptocompareCoin | undefined {

    if (!input)
      return undefined

    const symbol = String(input.Symbol || '')
                   .trim()
                   .toUpperCase()

    const cryptocompareId = ~~input.Id

    if (!symbol || !cryptocompareId)
      return undefined

    const output: ICryptocompareCoin = { cryptocompareId, symbol }

    const title = String(input.CoinName || '').trim()
    if (title) output.title = title

    const algorithm = String(input.Algorithm || '').trim()
    if (algorithm) output.algorithm = algorithm

    const proofType = String(input.ProofType || '').trim()
    if (proofType) output.proofType = proofType

    const maxSupply = Math.max( parseFloat(input.TotalCoinSupply), 0)
    if (!Number.isNaN(maxSupply)) output.maxSupply = maxSupply

    output.cryptocompareSort = ~~input.SortOrder

    return output
  }


  static coinSnapshotToCoin(input?: ICoinSnapshotItem): ICryptocompareCoin | undefined {

    if (!input)
      return undefined

    const symbol = String(input.Symbol || '')
                   .trim()
                   .toUpperCase()

    const cryptocompareId = ~~input.Id

    if (!symbol || !cryptocompareId)
      return undefined

    const output: ICryptocompareCoin = { cryptocompareId, symbol }

    const title = String(input.Name || '').trim()
    if (title) output.title = title

    try {
      const startDate = new Timestamp(input.StartDate).UTC.dateString
      if (startDate) output.startDate = startDate
    } catch (_) {

    }

    const algorithm = String(input.Algorithm || '').trim()
    if (algorithm) output.algorithm = algorithm

    const proofType = String(input.ProofType || '').trim()
    if (proofType) output.proofType = proofType

    const url = String(input.AffiliateUrl || '').trim()
    if (url) output.url = url

    const maxSupply = Math.max( parseFloat(input.TotalCoinSupply), 0)
    if (!Number.isNaN(maxSupply)) output.maxSupply = maxSupply

    const availableSupply = Math.max(input.TotalCoinsMined, 0)
    if (availableSupply) output.availableSupply = availableSupply

    const blockReward = Math.max(input.BlockReward, 0)
    if (blockReward) output.blockReward = blockReward

    const lastBlockTS = new Date(input.LastBlockExplorerUpdateTS).getTime()
    if (lastBlockTS) output.lastBlockTS = lastBlockTS

    const lastBlockNumber = Math.max(input.BlockNumber, 0)
    if (lastBlockNumber) output.lastBlockNumber = lastBlockNumber

    const hashRate = Math.max(input.NetHashesPerSecond, 0)
    if (hashRate) output.hashRate = hashRate

    return output
  }


  static coinHistodayToHistoday(input: Array<ICoinHistodayItem>): IHistoday | undefined {
    const histodayList = (Array.isArray(input) ? input : [])
                         .filter( item => typeof item === 'object' && item !== null)
                         .map( item => {

                           let ts: Timestamp | undefined

                           try {
                             ts = item.time && new Timestamp(item.time*1000) || undefined
                           } catch(_) {
                             ts = undefined
                           }

                           if (ts) ts.UTC.setMidnight()

                           const value = item.high && item.high > 0 && item.low  && item.low > 0
                                       ? (item.high + item.low) / 2
                                       : 0

                           return { ts: ts && ts.time || 0, value }
                         })
                         .filter( item => item.ts && item.value )

    if (histodayList.length === 0)
      return undefined

    return histodayList.reduce( (prev, item) =>
                                Object.assign(prev, { [item.ts]: item.value }),
                                {} as { [key: number]: number }
                              )
  }


  private _http: HTTP = new HTTP()

  private _coinSubject = new Subject< ICryptocompareCoin >()
  coin = this._coinSubject.asObservable()


  private async _getCoinsList(): Promise< Array<ICryptocompareCoin> > {

    let data: ICoinList

    try {
      data = await this._http.json< ICoinList >(COIN_LIST_URL)
    } catch( error ) {
      console.error('Cryptocompare ERREOR [ getCoinsList http ]', error)
      return []
    }

    if (data.Response !== 'Success') {
      console.error('Cryptocompare ERREOR [ getCoinsList data ]', data.Message)
      return []
    }

    return Object.keys(data.Data)
                 .map( key => {
                   const item = data.Data[key]

                   if (item.Symbol !== key) {
                     console.error('Cryptocompare ERREOR [ getCoinsList symbol ]', item)
                     return undefined
                   }

                   return item
                 })
                 .map( item => CryptocompareSources.coinListToCoin(item) as ICryptocompareCoin )
                 .filter( item => typeof item === 'object' && item !== null)
                 .sort( (a ,b) => (a.cryptocompareSort || 0) - (b.cryptocompareSort || 0) )
  }


  private async _getCoinSnapshot(id?: number): Promise< ICryptocompareCoin | undefined > {

    if (!id || id <= 0)
      return undefined

    const url = COIN_SNAPSHOT_URL(id)

    let data: ICoinSnapshotFull

    try {
      data = await this._http.json< ICoinSnapshotFull >(url)
    } catch( error ) {
      console.error(`Cryptocompare ERREOR [ getCoinSnapshot http ${id} ]`, error)
      return undefined
    }

    if (data.Response !== 'Success') {
      console.error(`Cryptocompare ERREOR [ getCoinsList data ${id} ]`, data.Message)
      return undefined
    }

    const snapshot = data.Data && data.Data.General

    if (!snapshot) {
      console.error(`Cryptocompare ERREOR [ getCoinsList data.Data.General ${id} ]`, data.Message)
      return undefined
    }

    return CryptocompareSources.coinSnapshotToCoin(snapshot)

  }


  private async _getCoinHistoday(symbol?: string): Promise< ICryptocompareCoin | undefined > {

    if (!symbol)
      return undefined

    const url = COIN_HISTODAY_URL(symbol)

    let data: ICoinHistoday

    try {
      data = await this._http.json< ICoinHistoday >(url)
    } catch( error ) {
      console.error(`Cryptocompare ERREOR [ getCoinHistoday http ${symbol} ]`, error)
      return undefined
    }

    if (data.Response !== 'Success') {
      console.error(`Cryptocompare ERREOR [ getCoinHistoday data ${symbol} ]`, data.Message)
      return undefined
    }

    const histodayList = data.Data && data.Data

    if (!histodayList || histodayList.length === 0) {
      console.error(`Cryptocompare ERREOR [ getCoinHistoday data.Data ${symbol} ]`, data.Message)
      return undefined
    }

    const histoday = CryptocompareSources.coinHistodayToHistoday(histodayList)

    return histoday && { cryptocompareId: 0, symbol, histoday }
  }

  // Manual update
  async update() {

    console.log('Cryptocompare START [ update ]')

    const list = await this._getCoinsList()

    list.forEach( item => this._coinSubject.next(item) )

    Observable
    .interval(REQUEST_TIMEOUT)
    .take(list.length)
    .map(i => list[i] )
    .map( item => {
      const id = item.cryptocompareId
      const symbol = item.symbol
      return Observable.merge(
        Observable.fromPromise( this._getCoinSnapshot(id) ),
        // Observable.fromPromise( this._getCoinHistoday(symbol) ),
      )
    })
    .mergeAll()
    .filter( item => item !== undefined)
    .subscribe(
      item => this._coinSubject.next(item),
      error => console.error('Cryptocompare ERREOR [ update Observable error ]', error),
      () => {
        console.log('Cryptocompare FINISH [ update ]')
        setTimeout(() => this.update(), UPDATE_LOOP_TIMEOUT)
      }
    )
  }

  constructor() {
    this.update()
  }
}
