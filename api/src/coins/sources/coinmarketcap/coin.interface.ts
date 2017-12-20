
import { ICoin } from '@common/coin'

export interface ICoinmarketcapCoin extends Partial<ICoin> {
  coinmarketcapId: string
  coinmarketcapRank?: number
}
