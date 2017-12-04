
import { IExchange } from '@common/models'

export interface IExchangeListItem extends IExchange {
  volume?: number
  pairs?: number
}
