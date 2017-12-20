/*
 * Coins ubdate utility
 */

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/map'

import { ICoin } from '@common/coin'

import {
  ISource,
  CoinmarketcapSources,
  CryptocompareSources,
} from './sources'

import { DBUpdater } from './update-db'

const items: Observable< Partial<ICoin> > = Observable.merge(
                                            new CryptocompareSources().coin,
                                            new CoinmarketcapSources().coin,
                                          )

new DBUpdater(items)
