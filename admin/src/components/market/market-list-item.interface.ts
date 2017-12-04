
import { IMarket } from '@common/models'

export interface IMarketListItem extends IMarket {
  volume?: number
  pairs?: number
}
