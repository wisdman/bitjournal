export interface ICoinListItem {
  Id: string
  Symbol: string

  CoinName: string
  Algorithm: string
  ProofType: string

  TotalCoinSupply: string
  SortOrder: string
}

export interface ICoinList {
  Response: 'Success' | 'Error'
  Message: string
  Data: {
    [key: string]: ICoinListItem
  }
}
