
import { IHistorical } from './historical.interface'

export interface ICoin {
  readonly symbol: string,
  readonly title: string,

  readonly max: number,

  readonly algorithms: Array<string>,
  readonly systems: Array<string>,

  readonly founder: string,
  readonly start: string,

  readonly icon: string | null

  readonly historical: Array<IHistorical>

  readonly lastPrice: IHistorical

  available: number
  volume24: number
}
