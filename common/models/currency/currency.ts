
import { ICurrency } from './currency.interface'

import { Rating } from '../rating'

import { Timestamp } from '@core/timestamp'

export class Currency implements ICurrency {
  static MainFields = [
    'symbol',
    'enable',
    'title',
    'image',
    'rating',
    'bjr',
  ]

  readonly symbol: string

  readonly enable: boolean

  readonly extUrl: string

  readonly title: string
  readonly description: string

  readonly ogTitle: string
  readonly ogDescription: string

  readonly image: number | null
  readonly ogImage: number | null

  readonly startDate: Timestamp

  readonly founder: string

  readonly maxCoin: number

  readonly algorithm: string

  readonly system: string

  readonly content: string

  readonly rating: Rating

  readonly bjr: number

  readonly branding: object

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.symbol = String(value.symbol || '').trim()

    this.enable = value.enable === undefined ? true : !!value.enable

    this.extUrl = String(value.extUrl || '').trim()

    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.startDate = new Timestamp(value.startDate)

    this.founder = String(value.founder || '').trim()
    this.maxCoin = Math.max(~~value.maxCoin, 0)

    this.algorithm = String(value.algorithm || '').trim()
    this.system = String(value.system || '').trim()

    this.content = String(value.content || '').trim()

    this.rating = new Rating(value.rating)

    this.bjr = Math.min(Math.max(~~value.bjr, 0), 5)

    this.branding = {}
  }

  valueOf() {
    return {
      symbol: this.symbol,

      enable: this.enable,

      extUrl: this.extUrl,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      startDate: this.startDate,

      founder: this.founder,
      maxCoin: this.maxCoin,
      algorithm: this.algorithm,
      system: this.system,

      content: this.content,

      bjr: this.bjr,
    }
  }

  toJSON(): any {
    return {
      symbol: this.symbol,

      enable: this.enable,

      extUrl: this.extUrl,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      startDate: this.startDate.isValid ? this.startDate : undefined,

      founder: this.founder,
      maxCoin: this.maxCoin,
      algorithm: this.algorithm,
      system: this.system,

      content: this.content,

      rating: this.rating,
      bjr: this.bjr,

      branding: this.branding,
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
        throw new TypeError('Cannot convert Currency value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Currency'
  }
}
