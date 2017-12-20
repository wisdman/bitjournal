
import { IPrice } from './price.interface'

export interface IHistorical {
  ts: number
  readonly price: IPrice
}
