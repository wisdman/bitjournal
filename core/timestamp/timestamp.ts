/*
 * === User role ===
 */

const GENITIVE_MONTHS = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
]

export class Timestamp extends Date {
  static fromUnux(value: any): Timestamp {
    const uts = ~~value
    return new Timestamp(uts*1000)
  }

  constructor(value?: any){
    super(value)
  }

  get isValid(): boolean {
    return !Number.isNaN(this.getTime())
  }

  get isInvalid(): boolean {
    return !this.isValid
  }

  toURLString(): string {
    const year  = String(this.getUTCFullYear())
    const month = String(this.getUTCMonth() + 1).padStart(2, '0')
    const date  = String(this.getUTCDate()).padStart(2, '0')

    return `${year}-${month}-${date}`
  }

  compareDateWithOutTime(other: Date): boolean {
    return this.getFullYear() === other.getFullYear()
        && this.getMonth()    === other.getMonth()
        && this.getDate()     === other.getDate()
  }

  toHRString(): string {
    const now = new Date()

    let out: string = ''

    // Set date
    if ( this.compareDateWithOutTime(now) )
      out += 'Сегодня'
    else {
      now.setDate( now.getDate() - 1 )

      if ( this.compareDateWithOutTime(now) )
        out += 'Вчера'
      else {
        out += String(this.getDate())
        out += ' ' + GENITIVE_MONTHS[ this.getMonth() ]

        const year = this.getFullYear()
        if (year !== now.getFullYear())
          out += ' ' + String(year)
      }
    }

    // Set time
    out += ' ' + String(this.getHours())
    out += ':' + String(this.getMinutes()).padStart(2, '0')

    return out
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
