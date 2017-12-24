export const COINS_API_PATH = '/coins'
export const COINS_DATATABLE = 'coins'

export const COINS_HOT = [
  'BTC',
  'BCH',
  'DASH',
  'ETH',
  'ZEC',
  'XMR',
  'BTG',
  'LTC',
]

export const SYMBOL_CHARACTER_MAP = ['*','@','$']
export const COIN_IMG = (symbol: string) => symbol.replace(/[^a-z0-9]/gi, (match: string) => {
                                              let i = SYMBOL_CHARACTER_MAP.indexOf(match)
                                              return i >= 0 ? String(i) : ''
                                            }).toLowerCase()
