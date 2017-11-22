/*
 * === User role ===
 */

export class Timestamp extends Date {

  constructor(value: any){
    super(value)
  }

  get isValid(): boolean {
    return !Number.isNaN(this.getTime())
  }

  get isInvalid(): boolean {
    return !this.isValid
  }

  valueOf(): any {
    return new Date(this)
  }

  toNumber(): number {
    return this.getTime()
  }

  toString(): string {
    return this.toISOString()
  }

  toJSON(): any {
    return this.toISOString()
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
        throw new TypeError('Cannot convert Model value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Timestamp'
  }
}
