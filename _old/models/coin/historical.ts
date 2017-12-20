
import { IPrice } from './price.interface'
import { Price } from './price'

import { IHistorical } from './historical.interface'

export class Historical implements IHistorical {

  ts: number
  readonly price: Price

  constructor(value: any = {}) {
    this.ts = value && value.ts && new Date(value.ts).getTime() || Date.now()
    this.price = new Price(value && value.price || value)
  }

  valueOf(): IHistorical {
    return {
      ts: this.ts,
      price: this.price,
    }
  }

  toJSON(): IHistorical {
    return {
      ts: this.ts,
      price: this.price,
    }
  }

  toNumber(): number {
    return this.price.toNumber()
  }

  toString(): string {
    return this.price.toString()
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
