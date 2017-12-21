
export const COIN_LIST_URL =
  'https://www.cryptocompare.com/api/data/coinlist/'
export const COIN_SNAPSHOT_URL = (id: number) =>
  `https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${id}`
export const COIN_HISTODAY_URL = (from: string, to: string = 'USD') =>
  `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&allData=true`

export const UPDATE_LOOP_TIMEOUT = 600000
export const REQUEST_TIMEOUT = 15000
