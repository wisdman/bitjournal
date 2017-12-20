
export class Rights {

  private _read  : boolean = false
  private _write : boolean = false
  private _list  : boolean = false

  get value(): string {
    return (this._read  ? 'r' : '-')
         + (this._write ? 'w' : '-')
         + (this._list  ? 'l' : '-')
  }

  set value(value: string) {
    this._read  = /r/i.test(value)
    this._write = /w/i.test(value)
    this._list  = /l/i.test(value)
  }

  check(value: string): boolean {
    const read  = /r/i.test(value)
    if (read && !this._read)
      return false

    const write = /w/i.test(value)
    if (write && !this._write)
      return false

    const list  = /l/i.test(value)
    if (list && !this._list)
      return false

    return true
  }

  constructor(value: string) {
    this.value = value
  }

  valueOf(): any {
    return this.value
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.value
  }

  toJSON(): any {
    return this.value
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
        throw new TypeError('Cannot convert Rights value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Rights'
  }

}
