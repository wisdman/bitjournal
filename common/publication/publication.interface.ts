
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { Rating } from '@common/rating'
import { Section } from '@common/section'

export interface IPublication {
  id: string | UUID

  enable: boolean

  ts  : string | Timestamp
  url : string

  weight: 0 | 1 | 2

  sections  : Array<string | Section>
  bind      : number

  coins     : Array<string>
  allCoins  : boolean

  markets    : Array<string | UUID>
  allMarkets : Boolean

  exchanges    : Array<string | UUID>
  allExchanges : boolean

  ico    : Array<string | UUID>
  allICO : boolean

  bigTitle : string
  title    : string
  ogTitle  : string

  description   : string
  ogDescription : string

  image   : number | null
  ogImage : number | null

  authors : Array<string | UUID>
  tags    : Array<string>

  sharing  : boolean
  comments : boolean
  ads      : boolean

  rss      : boolean
  facebook : boolean
  twitter  : boolean

  content: string

  rating: Rating

  branding: object

  lastModified: Timestamp

  // Calculating feelds
  view?: number
}

export interface IPartialPublication extends Partial<IPublication> {
  [key: string]: any
}
