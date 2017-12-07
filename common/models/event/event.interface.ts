
import { IRating } from '../rating'

import { Timestamp } from '@core/timestamp'
import { UUID } from '@core/uuid'

export interface IEvent {
  id: string | UUID
  enable: boolean

  url: string

  extUrl: string

  title: string
  description: string

  ogTitle: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  startDate: Timestamp

  content: string

  rating: IRating

  bjr: number

  branding: object
}