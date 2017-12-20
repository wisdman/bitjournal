
import { IHistoday } from './histoday.interface'

export interface ICoin {
  // === Static ===
  symbol: string

  enable: boolean
  hot: boolean

  title: string

  founder: string
  startDate: string
  algorithm: string
  proofType: string
  maxSupply: number
  url: string

  // === Dinamic ===
  availableSupply: number
  blockReward: number

  lastBlockTS: number
  lastBlockNumber: number

  hashRate: number

  priceUSD: number
  priceBTC: number
  priceRUB: number

  volume24h: number

  histoday: IHistoday
}
