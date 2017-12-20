
import { IRating } from '../rating'

import { Timestamp } from '@core/timestamp'
import { UUID } from '@core/uuid'

export interface IPublication {

  id: string | UUID

  ts: Timestamp
  url: string

  enable: boolean

  sections: Array<string | UUID>
  currencies: Array<string>
  exchanges: Array<string | UUID>
  ico: Array<string | UUID>
  markets: Array<string | UUID>

  weight: number

  bigTitle: string
  title: string
  ogTitle: string

  description: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  authors: Array<string | UUID>
  tags: Array<string>

  sharing: boolean
  comments: boolean
  ads: boolean

  rss: boolean

  content: string

  rating: IRating

  branding: object

  lastModified: Timestamp
}
