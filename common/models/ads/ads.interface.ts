
import { Timestamp } from '@core/timestamp'
import { UUID } from '@core/uuid'

import { BlockEnum } from './block.enum'
import { ILimits } from './limits.interface'
import { IStats } from './stats.interface'

export interface IAds {
  id: string | UUID
  enable: boolean

  blocks: Array<BlockEnum>

  title: string
  description: string

  url: string

  startDate: Timestamp
  endDate: Timestamp

  content: string
  files: Array<number>

  limits: ILimits
  stats: IStats
}
