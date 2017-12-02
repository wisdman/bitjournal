
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

export class Publication {
  static MainFields = [
    'id',
    'ts',
    'url',
    'enable',
    'weight',
    'title',
    'lastModified',
  ]

  readonly id: UUID

  readonly ts: Timestamp
  readonly url: string

  readonly enable: boolean

  readonly currencies: Array<UUID>
  readonly exchanges: Array<UUID>
  readonly ico: Array<UUID>
  readonly markets: Array<UUID>
  readonly sections: Array<UUID>

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
  readonly advertising: boolean

  readonly rss: boolean

  readonly yandexNews: boolean
  readonly yandexZen: boolean

  readonly facebookIA: boolean

  readonly content: string

  readonly branding: object

  readonly lastModified: Timestamp

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.ts = new Timestamp(value.ts)

    this.url = String(value.url || '').trim()

    this.enable = !!value.enable

    this.currencies = Array.isArray(value.currencies) ? value.currencies
                                                             .map( (item:any) => new UUID(value && value.id || value) )
                                                             .filter( (item: UUID) => item.version !== null)
                                                      : new Array<UUID>()

    this.exchanges = Array.isArray(value.exchanges) ? value.exchanges
                                                           .map( (item:any) => new UUID(value && value.id || value) )
                                                           .filter( (item: UUID) => item.version !== null)
                                                    : new Array<UUID>()

    this.ico = Array.isArray(value.ico) ? value.ico
                                               .map( (item:any) => new UUID(value && value.id || value) )
                                               .filter( (item: UUID) => item.version !== null)
                                        : new Array<UUID>()

    this.markets = Array.isArray(value.markets) ? value.markets
                                                       .map( (item:any) => new UUID(value && value.id || value) )
                                                       .filter( (item: UUID) => item.version !== null)
                                                : new Array<UUID>()

    this.sections = Array.isArray(value.sections) ? value.sections
                                                         .map( (item:any) => new UUID(value && value.id || value) )
                                                         .filter( (item: UUID) => item.version !== null)
                                                  : new Array<UUID>()

    this.weight = Math.max(~~value.weight, 0)

    this.bigTitle = String(value.bigTitle || '').trim()
    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.authors = Array.isArray(value.authors) ? value.authors
                                                       .map( (item:any) => new UUID(value && value.id || value) )
                                                       .filter( (item: UUID) => item.version !== null)
                                                : new Array<UUID>()

    this.tags = Array.isArray(value.tags) ? value.tags.map( (item:any) => String(item).trim().toLowerCase() )
                                                      .filter( (item:string) => !!item )
                                          : new Array<string>()

    this.sharing = !!value.sharing
    this.comments = !!value.comments
    this.advertising = !!value.advertising

    this.rss = !!value.rss

    this.yandexNews = !!value.yandexNews
    this.yandexZen = !!value.yandexZen

    this.facebookIA = !!value.facebookIA

    this.content = String(value.content || '').trim()

    this.branding = {}

    this.lastModified = new Timestamp(value.lastModified)
  }

  valueOf() {
    return {
      ts: this.ts,

      url: this.url,
      enable: this.enable,

      currencies: this.currencies,
      exchanges: this.exchanges,
      ico: this.ico,
      markets: this.markets,
      sections: this.sections,

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
      advertising: this.advertising,

      rss: this.rss,

      yandexNews: this.yandexNews,
      yandexZen: this.yandexZen,

      facebookIA: this.facebookIA,

      branding: this.branding,

      content: this.content,

      lastModified: this.lastModified,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      ts: this.ts,

      url: this.url,
      enable: this.enable,

      currencies: this.currencies,
      exchanges: this.exchanges,
      ico: this.ico,
      markets: this.markets,
      sections: this.sections,

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
      advertising: this.advertising,

      rss: this.rss,

      yandexNews: this.yandexNews,
      yandexZen: this.yandexZen,

      facebookIA: this.facebookIA,

      branding: this.branding,

      content: this.content,

      lastModified: this.lastModified,
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
