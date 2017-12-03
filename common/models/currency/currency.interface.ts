
import { IRating } from '../rating'

import { Timestamp } from '@core/timestamp'

export interface ICurrency {
  symbol: string

  enable: boolean

  extUrl: string

  title: string
  description: string

  ogTitle: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  startDate: Timestamp

  founder: string

  maxCoin: number

  algorithm: string

  system: string

  content: string

  rating: IRating

  bjr: number

  branding: object
}
