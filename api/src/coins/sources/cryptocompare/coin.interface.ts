
import { ICoin } from '@common/coin'

export interface ICryptocompareCoin extends Partial<ICoin> {
  cryptocompareId: number
  cryptocompareSort?: number
}
