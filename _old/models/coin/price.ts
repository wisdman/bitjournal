
import { IPrice } from './price.interface'

export class Price implements IPrice {
  static parseValue(value: any): number {
     const num = value !== undefined && Math.max( parseFloat(value), 0)
     return num || NaN
  }

  private _btc: number = 0

  get btc(): number {
    return this._btc
  }

  set btc(value: number) {
    this._btc = Price.parseValue(value) || this._btc
  }

  private _usd: number = 0

  get usd(): number {
    return this._usd
  }

  set usd(value: number) {
    this._usd = Price.parseValue(value) || this._usd
  }

  update(value: Partial<IPrice> = {}) {
    if (typeof value !== 'object' || value === null)
      return

    if (value.btc !== undefined)
      this.btc = value.btc

    if (value.usd !== undefined)
      this.usd = value.usd
  }

  constructor(value?: Partial<IPrice>) {
    this.update(value)
  }

  valueOf(): IPrice {
    return {
      btc: this.btc,
      usd: this.usd,
    }
  }

  toJSON(): IPrice {
    return {
      btc: this.btc,
      usd: this.usd,
    }
  }

  toNumber(): number {
    return this.usd || 0
  }

  toString(): string {
    return String(this.toNumber())
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
        throw new TypeError('Cannot convert Price value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Price'
  }
}
