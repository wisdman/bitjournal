
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

import { Timestamp } from '@core/timestamp'
import { Pool, createPool, Query } from '@core/db'

import { IPartialCoin } from '@common/coin'

import { CoinModel } from './coin.model'
import { IModelResult } from '@core/model'

import {
  DATATABLE,
  QUEUE_WAIT_TIMEOUT,
  DB_REQUEST_TIMEOUT,
} from './env'

const STATIC_FIELDS = [
  'title',
  'founder',
  'startDate',
  'algorithm',
  'proofType',
  'maxSupply',
  'url',
]

const DYNAMIC_FIELDS = [
  'availableSupply',
  'blockReward',
  'lastBlockTS',
  'lastBlockNumber',
  'hashRate',
  'priceUSD',
  'priceBTC',
  'priceRUB',
  'volume24h',
  'change1h',
  'change24h',
  'change7d',
]

export class DBUpdater {

  private _pool: Pool = createPool({ max: 10 })

  private _queue: Array< IPartialCoin > = []

  constructor(items: Observable< IPartialCoin >) {
    items.subscribe( item => this._queue.push(item) )
    this._updateLoop()
  }

  private async _updateLoop() {
    const item = this._queue.shift()

    if (!item) {
      setTimeout(() => this._updateLoop(), QUEUE_WAIT_TIMEOUT)
      return
    }

    await this._update(item)
    setTimeout(() => this._updateLoop(), DB_REQUEST_TIMEOUT)
  }

  private async _update(item: IPartialCoin) {

    const result = CoinModel(item) as IModelResult

    if (result.errors.length > 0) {
      console.error(`DBUpdater ERREOR [ make coin by model ]`, item)
      return
    }

    const coin = result.value as IPartialCoin
    const symbol = coin.symbol

    if (!symbol) {
      console.error(`DBUpdater ERREOR [ symbol not found ]`, item, coin)
      return
    }

    const staticFields:  IPartialCoin = { symbol }
    const dynamicFields: IPartialCoin = { symbol }
    const histoday:      IPartialCoin = { symbol }

    Object.keys(coin)
          .map(key => {
            if (STATIC_FIELDS.includes(key)) {
              staticFields[key] = coin[key]
              return
            }

            if (DYNAMIC_FIELDS.includes(key)) {
              dynamicFields[key] = coin[key]
              return
            }

            if (key === 'histoday') {
              histoday[key] = coin[key]
              return
            }
          })

    try {

      if ( Object.keys(staticFields).length > 1 )
        await this._staticFieldsUpdate(staticFields)

      if ( Object.keys(dynamicFields).length > 1 )
        await this._dynamicFieldsUpdate(dynamicFields)

      // if ( Object.keys(histoday).length > 1 )
      //   await this._histodayUpdate(histoday)

    } catch(error) {
      console.error(`DBUpdater ERREOR [ ${symbol} ]`, item, error)
    }
  }


  private async _staticFieldsUpdate(item: IPartialCoin) {
    const client = await this._pool.connect()
    const symbol = item.symbol

    const query = new Query(DATATABLE)
                      .select(STATIC_FIELDS)
                      .where('symbol = $1', symbol)

    const result = await query.exec< IPartialCoin >(client)


    if (result.length > 1) {
      client.release()
      throw new Error('More then one symbol in datatable')
    }


    if (result.length === 0) {
      client.release()
      await this._createNewFeeld(item)
      return
    }


    // === Update ===
    delete item.symbol

    const oldFields = CoinModel(result[0]).value as IPartialCoin
    const newFields: IPartialCoin = {}

    Object.keys(item)
          .map( key => {

            let newValue = item[key]
            let oldValue = oldFields[key]

            if (!oldValue)
              newFields[key] = newValue
          })

    if (Object.keys(newFields).length === 0){
      client.release()
      return
    }

    const updateQuery = new Query(DATATABLE)
                            .update(newFields)
                            .where('symbol = $1', symbol)
                            .returning('symbol')

    const updateResult = await updateQuery.exec<{symbol:string}>(client)

    console.log('=== DBUpdater UPDATE STATIC RECORD [%s] ===\n', updateResult[0].symbol, newFields)

    client.release()
  }


  private async _createNewFeeld(item: IPartialCoin) {
    const client = await this._pool.connect()

    const query = new Query(DATATABLE)
                      .insert(item)
                      .returning('symbol')

    const result = await query.exec<{ symbol:string }>(client)

    console.log('=== DBUpdater NEW RECORD [%s] ===\n', result[0].symbol, item)

    client.release()
  }


  private async _dynamicFieldsUpdate(item: IPartialCoin) {
    const client = await this._pool.connect()
    const symbol = item.symbol

    const query = new Query(DATATABLE)
                      .select(DYNAMIC_FIELDS)
                      .where('symbol = $1', symbol)

    const result = await query.exec< IPartialCoin >(client)

    if (result.length > 1) {
      client.release()
      throw new Error('More then one symbol in datatable')
    }

    if (result.length === 0) {
      client.release()
      console.log('=== DBUpdater ERREOR [%s] Dynamic update unknown record ===\n', symbol)
      return
    }

    // === Update ===
    delete item.symbol

    const oldFields = CoinModel(result[0]).value as IPartialCoin
    const newFields: IPartialCoin = {}

    Object.keys(item)
          .map( key => {

            let newValue = item[key]
            let oldValue = oldFields[key]

            if (oldValue !== newValue)
              newFields[key] = newValue
          })

    if (Object.keys(newFields).length === 0){
      client.release()
      return
    }

    const updateQuery = new Query(DATATABLE)
                            .update(newFields)
                            .where('symbol = $1', symbol)
                            .returning('symbol')

    const updateResult = await updateQuery.exec<{symbol:string}>(client)

    // console.log('=== DBUpdater DYNAMIC RECORD [%s] ===\n', updateResult[0].symbol, newFields)

    client.release()
  }

  // private async _histodayUpdate(item: IPartialCoin) {
  //   const client = await this._pool.connect()
  //   const symbol = item.symbol

  //   const query = new Query(DATATABLE)
  //                     .select(['histoday'])
  //                     .where('symbol = $1', symbol)

  //   client.release()
  // }
}
