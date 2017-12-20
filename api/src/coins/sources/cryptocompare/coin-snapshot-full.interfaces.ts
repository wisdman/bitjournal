export interface ICoinSnapshotItem {
  Id: string
  Symbol: string
  Name: string

  TotalCoinSupply: string

  Algorithm: string
  ProofType: string

  StartDate: string

  AffiliateUrl: string

  LastBlockExplorerUpdateTS: number
  BlockNumber: number
  NetHashesPerSecond: number
  TotalCoinsMined: number
  BlockReward: number
}

export interface ICoinSnapshotFull {
  Response: 'Success' | 'Error'
  Message: string
  Data: {
    General: ICoinSnapshotItem
  }
}
