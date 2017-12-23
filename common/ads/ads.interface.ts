
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { Rating } from '@common/rating'
import { Block } from '@common/block'

export interface IAds {
  id: string | UUID

  enable: boolean

  blocks: Array<string | Block>

  title       : string
  description : string

  url: string | null

  startDate : string | Timestamp
  endDate   : string | Timestamp

  content : string
  files   : Array<number>

  stats: {
    [date: string]: {
      view: number
      click: number
      ctr?: number // Calculating feeld
    }
  }

  // Calculating feelds
  view?: number
  click?: number
  ctr?: number
}

export interface IPartialAds extends Partial<IAds> {
  [key: string]: any
}

