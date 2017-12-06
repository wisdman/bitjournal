
import { Timestamp } from '@core/timestamp'

import { IPrice } from './price.interface'
import { Price } from './price'

import { IHistorical } from './historical.interface'

export class Historical implements IHistorical {

  readonly ts: Timestamp

  readonly price: Price = new Price()

  updatePrice(value: Partial<IPrice> = {}) {
    this.price.update(value)
  }

  constructor(value: Partial<IHistorical> = {}) {
    this.ts = new Timestamp(value.ts)
    this.updatePrice(value.price)
  }

  valueOf() {
    return {
      ts: this.ts,
      price: this.price,
    }
  }

  toJSON(): any {
    return {
      ts: this.ts,
      price: this.price,
    }
  }

  toNumber(): number {
    return this.price.toNumber()
  }

  toString(): string {
    return String(this.ts)
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
        throw new TypeError('Cannot convert Historical value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Historical'
  }
}
