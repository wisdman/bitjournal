
import { UUID } from '@core/uuid'
import { URLBuilder } from '@core/url-builder'
import { Timestamp } from '@core/timestamp'

import { Rating } from '../rating'

import { IPublication } from './publication.interface'

export class Publication implements IPublication {
  static MainFields = [
    'id',

    'ts',
    'url',

    'enable',

    'sections',
    'currencies',
    'exchanges',
    'ico',
    'markets',

    'weight',

    'bigTitle',
    'title',

    'description',

    'image',

    'authors',
    'tags',

    'rss',

    'rating',

    'branding',

    'lastModified',
  ]



  readonly id: UUID

  readonly ts: Timestamp
  readonly url: string

  readonly enable: boolean

  readonly sections: Array<UUID>
  readonly currencies: Array<string>
  readonly exchanges: Array<UUID>
  readonly ico: Array<UUID>
  readonly markets: Array<UUID>

  readonly weight: number

  readonly bigTitle: string
  readonly title: string
  readonly ogTitle: string

  readonly description: string
  readonly ogDescription: string

  readonly image: number | null
  readonly ogImage: number | null

  readonly authors: Array<UUID>
  readonly tags: Array<string>

  readonly sharing: boolean
  readonly comments: boolean
  readonly ads: boolean

  readonly rss: boolean

  readonly content: string

  readonly rating: Rating

  readonly branding: object

  readonly lastModified: Timestamp

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.ts = new Timestamp(value.ts)
    this.url = String(value.url || '').trim()

    this.enable = !!value.enable

    this.sections = UUID.getArray(value.sections)

    this.currencies = Array.isArray(value.currencies) ? value.currencies
                                                             .map( (item:any) => String(item).trim().toLowerCase() )
                                                             .filter( (item:string) => !!item )
                                                      : new Array<string>()

    this.exchanges = UUID.getArray(value.exchanges)
    this.ico = UUID.getArray(value.ico)
    this.markets = UUID.getArray(value.markets)

    this.weight = value.weight === undefined ? 1 : Math.min(Math.max(~~value.weight, 0), 3)

    this.bigTitle = String(value.bigTitle || '').trim()
    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.authors = UUID.getArray(value.authors)

    this.tags = Array.isArray(value.tags) ? value.tags
                                                 .map( (item:any) => String(item).trim().toLowerCase() )
                                                 .filter( (item:string) => !!item )
                                          : new Array<string>()

    this.sharing    = value.sharing    === undefined ? true : !!value.sharing
    this.comments   = value.comments   === undefined ? true : !!value.comments
    this.ads        = value.ads        === undefined ? true : !!value.ads

    this.rss        = value.rss        === undefined ? true : !!value.rss

    this.content = String(value.content || '').trim()

    this.rating = new Rating(value.rating)

    this.branding = {}

    this.lastModified = new Timestamp(value.lastModified)

    // === Replace url if empty ===
    if (!this.url)
      this.url = URLBuilder.build(this.title)
  }

  valueOf() {
    return {
      ts: this.ts,
      url: this.url,

      enable: this.enable,

      sections:   this.sections.map( item => item.valueOf() ),
      currencies: this.currencies,
      exchanges:  this.exchanges.map( item => item.valueOf() ),
      ico:        this.ico.map( item => item.valueOf() ),
      markets:    this.markets.map( item => item.valueOf() ),

      weight: this.weight,

      bigTitle: this.bigTitle,
      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      authors: this.authors.map( item => item.valueOf() ),
      tags: this.tags,

      sharing: this.sharing,
      comments: this.comments,
      ads: this.ads,

      rss: this.rss,

      content: this.content
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      ts: this.ts,
      url: this.url,

      enable: this.enable,

      sections: this.sections,
      currencies: this.currencies,
      exchanges: this.exchanges,
      ico: this.ico,
      markets: this.markets,

      weight: this.weight,

      bigTitle: this.bigTitle,
      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      authors: this.authors,
      tags: this.tags,

      sharing: this.sharing,
      comments: this.comments,
      ads: this.ads,

      rss: this.rss,

      content: this.content,

      rating: this.rating,

      branding: this.branding,

      lastModified: this.lastModified.isValid ? this.lastModified : undefined,
    }
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.title
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert Publication value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Publication'
  }
}
