/*
 * === Ads blocks ===
 */

export class Block {
  static A1 = new Block('a1', 'A1')
  static A2 = new Block('a2', 'A2')
  static A3 = new Block('a3', 'A3')
  static B1 = new Block('b1', 'B1')
  static B2 = new Block('b2', 'B2')
  static B3 = new Block('b3', 'B3')
  static M1 = new Block('m1', 'M1')
  static M2 = new Block('m2', 'M2')
  static M3 = new Block('m3', 'M3')

  static *[Symbol.iterator](): IterableIterator<Block> {
    const keys = Object.keys(this)
    for (let key of keys)
      yield (this as any)[key] as Block
  }

  static get(input: any): Block | undefined {
    let id = String(input && input.id || input)

    for (let item of this)
      if (item.id === id)
        return item

    return undefined
  }

  static getArray(value: any): Array<Block> {
    return new Array<any>().concat(value)
                           .map( item => this.get(item) )
                           .filter( item => item !== undefined )
                           .filter((item, i, self) => self.indexOf(item) === i) as Array<Block>

  }

  private constructor(
    readonly id: string,
    readonly title: string
  ) {}

  valueOf(): any {
    return this.id
  }

  toNumber(): number {
    return Array.prototype.indexOf.call(Block, this)
  }

  toString(): string {
    return this.id
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
        throw new TypeError('Cannot convert Block value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Block'
  }
}
