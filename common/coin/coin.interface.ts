import { Rating } from '@common/rating'

import { IHistoday } from './histoday.interface'

export interface ICoin {
  // === Static ===
  symbol: string

  enable: boolean
  hot: boolean

  title: string
  ogTitle: string

  description: string
  ogDescription: string

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

  volume24hUSD: number
  volume24hRUB: number

  change1h: number
  change24h: number
  change7d: number

  histoday: IHistoday

  rating: Rating

  branding: object

  // === Calculating feelds ===
  capitalizationUSD: number
  capitalizationRUB: number
}

export interface IPartialCoin extends Partial<ICoin> {
  [key: string]: any
}
