
import { UUID } from '@core/uuid'

export class Status {
  static MainFields = [
    'id',
    'enable',
    'title',
    'description',
    'image',
  ]

  readonly id: UUID

  readonly enable: boolean

  readonly title: string
  readonly description: string

  readonly image: number | null

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = !!value.enable

    this.title = String(value.title || '').trim()
    this.description = String(value.description || '').trim()

    this.image = Math.max(~~value.image, 0) || null
  }

  valueOf() {
    return {
      enable: this.enable,

      title: this.title,

      description: this.description,

      image: this.image,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      enable: this.enable,

      title: this.title,

      description: this.description,

      image: this.image,
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
        throw new TypeError('Cannot convert Status value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Status'
  }
}
