
import { IPrice } from './price.interface'

export class Price implements IPrice {

  private _btc: number = 0

  get btc(): number {
    return this._btc
  }

  private _usd: number = 0

  get usd(): number {
    return this._usd
  }

  update(value: Partial<IPrice> = {}) {
    const btc = value.btc !== undefined && Math.max( parseFloat(<any>value.btc), 0)
    this._btc = btc || this.btc

    const usd = value.usd !== undefined && Math.max( parseFloat(<any>value.usd), 0)
    this._usd = usd || this.usd
  }

  constructor(value?: any) {
    this.update(value)
  }

  valueOf() {
    return {
      btc: this.btc,
      usd: this.usd,
    }
  }

  toJSON(): any {
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
