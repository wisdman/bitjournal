

import { IRating } from './rating.interface'

export class Rating implements IRating {
  static MainFields = [
    'like',
    'dislike',
  ]

  readonly like: number

  readonly dislike: number

  get value(): number {
    return this.like/(this.like + this.dislike)
  }

  get stars(): number {
    return 5 * this.value
  }

  constructor(value: any = {}) {
    this.like = Math.max(~~value.like, 0)
    this.dislike = Math.max(~~value.dislike, 0)
  }

  valueOf() {
    return {
      like: this.like,
      dislike: this.dislike,
    }
  }

  toJSON(): any {
    return {
      like: this.like,
      dislike: this.dislike,
    }
  }

  toNumber(): number {
    return this.value
  }

  toString(): string {
    return String(this.value)
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
        throw new TypeError('Cannot convert Raiting value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Raiting'
  }
}
