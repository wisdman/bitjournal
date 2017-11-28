/*
 * Enum
 */

const ENUM_ID_REGEXP = /^[a-z][a-z0-9]*$/

export abstract class Enum {

  static *[Symbol.iterator](): IterableIterator<Enum> {
    const keys = Object.keys(this)
    for (let key of keys) {
      yield (this as any)[key] as Enum
    }
  }

  static get(value: any): Enum | undefined {
    let id = String(value && value.id || value)

    for (let item of this)
      if (item.id === id)
        return item

    return undefined
  }

  static getArray(value: any): Array<Enum> {
    return new Array<any>().concat(value)
                           .map( item => this.get(item) )
                           .filter( item => item !== undefined ) as Array<Enum>
  }

  constructor(
    readonly id: string,
    readonly value: string
  ) {
    if ( !ENUM_ID_REGEXP.test(id) )
      throw new TypeError(`Enum ID "${id}" does not matc the pattern "${ENUM_ID_REGEXP.source}"`)
  }

  valueOf(): any {
    return this.id
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.value
  }

  toJSON(): any {
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
        throw new TypeError('Cannot convert Enum value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Enum'
  }
}
