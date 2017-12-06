
import { Timestamp } from '@core/timestamp'
import { IPrice } from './price.interface'

export interface IHistorical {
  readonly ts: Timestamp
  readonly price: IPrice
}
