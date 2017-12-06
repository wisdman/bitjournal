
import { Timestamp } from '@core/timestamp'

import { IPrice } from './price.interface'
import { IHistorical  } from './historical.interface'

export interface ICoin {
  readonly symbol: string

  readonly max: number
  readonly available: number

  readonly price: IPrice

  readonly capitalization: IPrice

  readonly volume24: number

  readonly ts: Timestamp

  readonly historical: Array<IHistorical>
}
