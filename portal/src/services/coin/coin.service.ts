import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeAll'
import 'rxjs/add/operator/concatMap'

import {
  COINS_API_PATH,
  COINS_HOT,
  IPartialCoin,
} from '@common/coin'

import { APIService } from '../api'

const COINS_UPDATE_INTERVAL = 30000

@Injectable()
export class CoinService {

  hot: Observable< IPartialCoin >

  private readonly _isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _api: APIService
  ) {
    this._isServer = isPlatformServer(platformId)
    this.hot = this._api
                   .get< Array<IPartialCoin> >(COINS_API_PATH, { symbols: COINS_HOT.join(',') })
                   .map( item => {
                     const result = Observable.of(item)

                     if (this._isServer)
                       return result

                     return Observable.merge(result, this.tiker())
                   })
                   .mergeAll()
  }

  tiker() {
    return Observable
           .interval(COINS_UPDATE_INTERVAL)
           .concatMap( () => this._api.get< Array<IPartialCoin> >(COINS_API_PATH, { symbols: COINS_HOT.join(',') }) )
  }
}
