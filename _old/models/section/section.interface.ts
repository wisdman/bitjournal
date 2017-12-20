
import { UUID } from '@core/uuid'

export interface ISection {
  id: string | UUID

  enable: boolean

  url: string | null

  title: string
  description: string

  ogTitle: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  branding: object
}
