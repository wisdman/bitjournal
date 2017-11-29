
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

export class Publication {
  static MainFields = [
    'id',
    'ts',
    'url',
    'enable',
    'lastModified',
    'weight',
    'title',
  ]

  id: UUID

  ts: Timestamp
  url: string

  enable: boolean

  lastModified: Timestamp

  weight: number

  sections: Array<string>

  bigTitle: string
  title: string
  ogTitle: string

  description: string
  ogDescription: string

  image: number | null
  ogImage: number | null

  authors: Array<string>
  tags: Array<string>

  sharing: boolean
  comments: boolean
  advertising: boolean

  rss: boolean

  yandexNews: boolean
  yandexZen: boolean

  facebookIA: boolean

  branding: object

  content: string

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.ts = new Timestamp(value.ts)

    this.url = String(value.url || '')

    this.enable = !!value.enable

    this.lastModified = new Timestamp(value.lastModified)

    this.weight = Math.max(~~value.weight, 0)

    this.sections = new Array<string>()

    this.bigTitle = String(value.bigTitle || '')
    this.title = String(value.title || '')
    this.ogTitle = String(value.ogTitle || '')

    this.description = String(value.description || '')
    this.ogDescription = String(value.ogDescription || '')

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.authors = new Array<string>()
    this.tags = new Array<string>()

    this.sharing = !!value.sharing
    this.comments = !!value.comments
    this.advertising = !!value.advertising

    this.rss = !!value.rss

    this.yandexNews = !!value.yandexNews
    this.yandexZen = !!value.yandexZen

    this.facebookIA = !!value.facebookIA

    this.branding = {}

    this.content = String(value.content || '')
  }

  [Symbol.toStringTag]() {
    return 'Publication'
  }
}
