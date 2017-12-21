
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { Rating } from '@common/rating'

export interface IPublication {
  id: string | UUID

  enable: boolean

  ts  : string | Timestamp
  url : string

  weight: 0 | 1 | 2

  sections  : Array<string>
  coins     : Array<string>
  markets   : Array<string | UUID>
  exchanges : Array<string | UUID>
  ico       : Array<string | UUID>

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
}

export interface IPartialPublication extends Partial<IPublication> {
  [key: string]: any
}
