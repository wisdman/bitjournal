
export interface ICoinTickerItem {
  id: string

  symbol: string

  name: string

  rank: string

  price_usd: string
  price_btc: string
  price_rub: string

  '24h_volume_usd': string
  percent_change_1h: string
  percent_change_24h: string
  percent_change_7d: string

  available_supply: string
  max_supply: string
}

export type ICoinTicker = Array<ICoinTickerItem>
