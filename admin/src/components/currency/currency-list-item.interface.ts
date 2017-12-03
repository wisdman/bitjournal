
import { ICurrency } from '@common/models'

export interface ICurrencyListItem extends ICurrency {
  btc?: number
  usd?: number
  rub?: number
}
