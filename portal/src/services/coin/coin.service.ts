import { Injectable, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeAll'
import 'rxjs/add/operator/concatMap'

import { IPartialCoin } from '@common/coin'

import { APIService } from '../api'

const HOT_COINS_UPDATE_INTERVAL = 30000

const COUNS_PATH = '/coins'

@Injectable()
export class CoinService {

  hot: Observable< IPartialCoin >

  constructor(
    private readonly _api: APIService
  ) {
    this.hot = this._api
                   .get< Array<IPartialCoin> >(COUNS_PATH, { hot: 'true' })
                   .map( item => {
                     const result = Observable.of(item)

                     if (this.isServer)
                       return result

                     return Observable.merge(result, this.tiker())
                   })
                   .mergeAll()
  }

  get isServer(): boolean {
    return this._api.isServer
  }

  get isBrowser(): boolean {
    return this._api.isBrowser
  }

  tiker() {
    return Observable
           .interval(HOT_COINS_UPDATE_INTERVAL)
           .concatMap( () => this._api.get< Array<IPartialCoin> >(COUNS_PATH, { hot: 'true' }) )
  }
}
