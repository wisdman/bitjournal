
import { IVideo } from './video.interface'

export class Video implements IVideo {
  static MainFields = [
    'id',
    'enable',
  ]

  readonly id: string
  readonly enable: boolean

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = String(value.id || '').trim()
    this.enable = value.enable === undefined ? true : !!value.enable
  }

  valueOf() {
    return {
      id: this.id,
      enable: this.enable,
    }
  }

  toJSON(): any {
    return {
      id: this.id,
      enable: this.enable,
    }
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.id
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
        throw new TypeError('Cannot convert Video value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Video'
  }
}
