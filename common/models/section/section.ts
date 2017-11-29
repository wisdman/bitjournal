
import { UUID } from '@core/uuid'

export class Section {
  static MainFields = [
    'id',
    'enable',
    'url',
    'title',
  ]

  readonly id: UUID
  enable: boolean

  url: string | null

  title: string
  description: string

  ogTitle: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  branding: object

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = !!value.enable

    this.url = String(value.url || '')

    this.title = String(value.title || '')
    this.ogTitle = String(value.ogTitle || '')

    this.description = String(value.description || '')
    this.ogDescription = String(value.ogDescription || '')

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.branding = {}
  }

  [Symbol.toStringTag]() {
    return 'Sections'
  }
}
