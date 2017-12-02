
import { UUID } from '@core/uuid'

export interface IStatus {
  id: string | UUID

  enable: boolean

  title: string

  image: number | null
}
