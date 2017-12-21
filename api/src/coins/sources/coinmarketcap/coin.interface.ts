
import { ICoin } from '@common/coin'

export interface ICoinmarketcapCoin extends Partial<ICoin> {
  coinmarketcapRank?: number
}
