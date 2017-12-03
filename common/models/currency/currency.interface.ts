
import { IRating } from '../rating'

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

  content: string

  rating: IRating

  branding: object
}
