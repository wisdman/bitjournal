
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { Rating } from '../rating'

import { IICO } from './ico.interface'

export class ICO implements IICO {
  static MainFields = [
    'id',
    'enable',
    'url',
    'title',
    'image',
    'rating',
    'bjr',
  ]

  readonly id: UUID
  readonly enable: boolean

  readonly url: string

  readonly extUrl: string

  readonly title: string
  readonly description: string

  readonly ogTitle: string
  readonly ogDescription: string

  readonly image: number | null
  readonly ogImage: number | null

  readonly startDate: Timestamp

  readonly goal: number
  readonly collected: number

  readonly status: string

  readonly content: string

  readonly rating: Rating

  readonly bjr: number

  readonly branding: object

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = value.enable === undefined ? true : !!value.enable

    this.url = String(value.url || '').trim()

    this.extUrl = String(value.extUrl || '').trim()

    this.title = String(value.title || '').trim()
    this.ogTitle = String(value.ogTitle || '').trim()

    this.description = String(value.description || '').trim()
    this.ogDescription = String(value.ogDescription || '').trim()

    this.image = Math.max(~~value.image, 0) || null
    this.ogImage = Math.max(~~value.ogImage, 0) || null

    this.startDate = new Timestamp(value.startDate)

    this.goal = Math.max(~~value.goal, 0)
    this.collected = Math.max(~~value.collected, 0)

    this.status = String(value.status || '').trim()

    this.content = String(value.content || '').trim()

    this.rating = new Rating(value.rating)

    this.bjr = Math.min(Math.max(~~value.bjr, 0), 5)

    this.branding = {}
  }

  valueOf() {
    return {
      enable: this.enable,

      url: this.url,

      extUrl: this.extUrl,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      startDate: this.startDate,

      goal: this.goal,
      collected: this.collected,

      status: this.status,

      content: this.content,

      bjr: this.bjr,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      enable: this.enable,

      url: this.url,

      extUrl: this.extUrl,

      title: this.title,
      ogTitle: this.ogTitle,

      description: this.description,
      ogDescription: this.ogDescription,

      image: this.image,
      ogImage: this.ogImage,

      startDate: this.startDate.isValid ? this.startDate : undefined,

      goal: this.goal,
      collected: this.collected,

      status: this.status,

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
        throw new TypeError('Cannot convert ICO value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'ICO'
  }
}
