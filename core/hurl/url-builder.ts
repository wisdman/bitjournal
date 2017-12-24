
const RUS = 'щ  ш  ч  ц  ю  я  ё ж  ы э а б в г д е з и й к л м н о п р с т у ф х'.split(/\s+/)
const ENG = 'sh sh ch cz yu ya e zh y e a b v g d e z i j k l m n o p r s t u f x'.split(/\s+/)

export class HURL {

  private _value: string

  get value(): string {
    return this._value
  }

  set value(input: string) {
    let value = String(input).toLowerCase()
                             .replace(/\s+/g, '_')

    // translit
    value = value.split('')
                 .map(char => {
                   let i = RUS.indexOf( char )
                   return i < 0 ? char : ENG[i]
                 }).join('')

    // Clear
    value = value.replace(/[^0-9a-z_-]/g, '')
                 .replace(/_+/g, '_')
                 .slice(0, this._maxLength)
                 .replace(/(^[_-]+|[_-]+$)/g, '')

    this._value = value
  }

  constructor(private _maxLength: number = 128, input: any = '') {
    this.value = input
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
        throw new TypeError('Cannot convert HURL value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'HURL'
  }

}
