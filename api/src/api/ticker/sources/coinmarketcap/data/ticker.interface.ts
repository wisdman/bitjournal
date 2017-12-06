
export interface ITickerItem {
  'id': string

  'symbol': string

  'price_usd': string
  'price_btc': string
  'price_rub': string

  '24h_volume_usd': string

  'available_supply': string
  'max_supply': string

  'last_updated': string
}

export type ITickerData = Array<ITickerItem>
