/*
 * === User role ===
 */

import { UTC } from './utc'

import { ILocale, Locale}  from './locale'

export class Timestamp extends Date {
  static Locale = Locale

  constructor(value?: any, public locale: ILocale = Timestamp.Locale.EN){
    super(value)
    if ( Number.isNaN(this.getTime()) )
      throw new TypeError('Date is invalid')

  }

  get fullYear(): number {
    return this.getFullYear()
  }

  set fullYear(value: number) {
    this.setFullYear(value)
  }

  get month(): number  {
    return this.getMonth()
  }

  set month(value: number) {
    this.setMonth(value)
  }

  get date(): number {
    return this.getDate()
  }

  set date(value: number) {
    this.setDate(value)
  }

  get day(): number {
    return this.getDay()
  }

  get hours(): number {
    return this.getHours()
  }

  set hours(value: number) {
    this.setHours(value)
  }

  get minutes(): number {
    return this.getMinutes()
  }

  set minutes(value: number) {
    this.setMinutes(value)
  }

  get seconds(): number {
    return this.getSeconds()
  }

  set seconds(value: number) {
    this.setSeconds(value)
  }

  get milliseconds(): number {
    return this.getMilliseconds()
  }

  set milliseconds(value: number) {
    this.setMilliseconds(value)
  }

  get UTC(): UTC {
    return new UTC(this)
  }

  get monthString(): string {
    return this.locale.getMonthString(this.month)
  }

  get genitiveMonthString(): string {
    return this.locale.getMonthString(this.month, true)
  }

  get dayString(): string {
    return this.locale.getDayString(this.day)
  }

  get dateString(): string {
    const year  = String(this.fullYear)
    const month = String(this.month + 1).padStart(2, '0')
    const date  = String(this.date).padStart(2, '0')

    return `${year}-${month}-${date}`
  }

  get timeString(): string {
    const hours   = String(this.hours).padStart(2, '0')
    const minutes = String(this.minutes).padStart(2, '0')
    const seconds = String(this.seconds).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  get time(): number {
    return this.getTime()
  }

  set time(value: number) {
    this.setTime(value)
  }

  get unux(): number {
    return this.getTime()/1000|0
  }

  set unix(value: number) {
    this.setTime(value * 1000)
  }

  get timezoneOffset(): number {
    return this.getTimezoneOffset()
  }

  get timezone(): string {
    let offset = this.timezoneOffset
    let str = '+'

    if (offset < 0) {
      offset = -1 * offset
      str = '-'
    }

    str += String( Math.floor(offset/60) ).padStart(2, '0')

    str += ':'

    str += String( Math.round( (offset % 60) * 100 ) ).padStart(2, '0')

    return str
  }

  get iso():string {
    return this.toISOString()
  }

  setMidnight() {
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.milliseconds = 0
  }

  compare(input: Date, {
    ignoreTime = false,
    ignoreMilliseconds = true,
  }:{
    ignoreTime?: boolean
    ignoreMilliseconds?: boolean
  } = {}): number {

    const other = new Date(input)

    if (Number.isNaN(other.getTime()))
      throw new TypeError('Comparable date is invalid')

    let a = this.getUTCFullYear()
    let b = other.getUTCFullYear()

    if (a > b)
      return 1

    if (a < b)
      return -1

    a = this.getUTCMonth()
    b = other.getUTCMonth()

    if (a > b)
      return 1

    if (a < b)
      return -1

    a = this.getUTCDate()
    b = other.getUTCDate()

    if (a > b)
      return 1

    if (a < b)
      return -1

    if (ignoreTime)
      return 0

    a = this.getUTCHours()
    b = other.getUTCHours()

    if (a > b)
      return 1

    if (a < b)
      return -1

    a = this.getUTCMinutes()
    b = other.getUTCMinutes()

    if (a > b)
      return 1

    if (a < b)
      return -1

    a = this.getUTCSeconds()
    b = other.getUTCSeconds()

    if (a > b)
      return 1

    if (a < b)
      return -1

    if (ignoreMilliseconds)
      return 0

    a = this.getUTCMilliseconds()
    b = other.getUTCMilliseconds()

    if (a > b)
      return 1

    if (a < b)
      return -1

    return 0
  }

  toHRString(atDateInput: Date = new Date()): string {
    const atDate = new Date(atDateInput)

    let out: string = ''

    // Set date
    if ( this.compare(atDate, { ignoreTime: true}) )
      out += 'Сегодня'
    else {
      atDate.setDate( atDate.getDate() - 1 )

      if (  this.compare(atDate, { ignoreTime: true}) )
        out += 'Вчера'
      else {
        out += String( this.getDate() )
        out += ' ' + this.genitiveMonthString

        const year = this.getFullYear()
        if (year !== atDate.getFullYear())
          out += ' ' + String(year)
      }
    }

    // Set time
    out += ' ' + String(this.getHours())
    out += ':' + String(this.getMinutes()).padStart(2, '0')

    return out
  }

  get HRString():  string {
    return this.toHRString()
  }

  valueOf(): any {
    return new Date(this.time)
  }

  toNumber(): number {
    return this.time
  }

  toString(): string {
    return this.iso
  }

  toJSON(): any {
    return this.iso
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
        throw new TypeError('Cannot convert Timestamp value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Timestamp'
  }
}
