
import { ICoin } from './coin.interface'

import { Timestamp } from '@core/timestamp'

import { IPrice } from './price.interface'
import { Price } from './price'

import { IHistorical  } from './historical.interface'
import { Historical  } from './historical'

const SYMBOL_PATTERN = /^[A-Z0-9@$]+$/

export class Coin implements ICoin {

  readonly symbol: string

  private _max: number = 0

  get max(): number {
    return this._max
  }

  private _available: number = 0

  get available(): number {
    return this._available
  }

  readonly price: Price = new Price()

  get capitalization(): IPrice {
    return {
      btc: this.price.btc * this.available,
      usd: this.price.usd * this.available,
    }
  }

  private _volume24: number = 0

  get volume24(): number {
    return this._volume24
  }

  private _ts: Timestamp

  get ts(): Timestamp {
    return this._ts
  }

  private _historical: Array<Historical> = new Array<Historical>()

  get historical(): Array<Historical> {
    return this._historical.sort( (a, b) => a.ts < b.ts ? -1 : 1 )
  }

  get lastHistorical(): Timestamp | undefined {
    const historical = this.historical
    if (historical.length === 0)
      return undefined

    return historical[historical.length - 1].ts
  }

  updatePrice(value: Partial<IPrice> = {}) {
    this.price.update(value)
  }

  updateHistorical(value: Array< Partial<IHistorical> > = []) {
    if (!Array.isArray(value))
      return

    value.map( item => new Historical(item) )
         .forEach( newItem => {
            const currentItem = this._historical.find( item => Number(item.ts) === Number(newItem.ts) )

            if (!currentItem) {
              this._historical.push(newItem)
              return
            }

            currentItem.updatePrice(newItem.price)
         })
  }

  update(value: Partial<ICoin> = {}) {
    if (!value)
      return

    if (value.symbol !== this.symbol)
      return

    this._max       = value.max       !== undefined ? Math.max( parseFloat(<any>value.max),       0) : 0
    this._available = value.available !== undefined ? Math.max( parseFloat(<any>value.available), 0) : 0
    this._volume24  = value.volume24  !== undefined ? Math.max( parseFloat(<any>value.volume24),  0) : 0

    this._ts = new Timestamp(value.ts)

    this.updatePrice(value.price)
    this.updateHistorical(value.historical)
  }


  constructor(value: any = {}) {

    const symbol = String(value.symbol || '').trim().toUpperCase()

    if (!SYMBOL_PATTERN.test(symbol))
      throw new TypeError(`Symbol "${symbol} not match to pattern ${SYMBOL_PATTERN.source}`)

    this.symbol = symbol

    this.update(value)
  }

  valueOf() {
    return {
      symbol: this.symbol,

      max: this.max,
      available: this.available,

      price: this.price.valueOf(),

      capitalization: this.capitalization,

      volume24: this.volume24,

      ts: this.ts,

      historical: this.historical,
    }
  }

  toJSON(): any {
    return {
      symbol: this.symbol,

      max: this.max,
      available: this.available,

      price: this.price,

      capitalization: this.capitalization,

      volume24: this.volume24,

      ts: this.ts,
    }
  }

  equal(item: Coin | ICoin) {
    return JSON.stringify(item) === JSON.stringify(this)
  }

  toNumber(): number {
    return this.capitalization.usd
  }

  toString(): string {
    return this.symbol
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
        throw new TypeError('Cannot convert Coin value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Coin'
  }
}
