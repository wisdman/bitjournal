
import { Timestamp } from './timestamp'

export class UTC {
  get fullYear(): number {
    return this._this.getUTCFullYear()
  }

  set fullYear(value: number) {
    this._this.setUTCFullYear(value)
  }

  get month(): number  {
    return this._this.getUTCMonth()
  }

  set month(value: number) {
    this._this.setUTCMonth(value)
  }

  get date(): number {
    return this._this.getUTCDate()
  }

  set date(value: number) {
    this._this.setUTCDate(value)
  }

  get day(): number {
    return this._this.getUTCDay()
  }

  get hours(): number {
    return this._this.getUTCHours()
  }

  set hours(value: number) {
    this._this.setUTCHours(value)
  }

  get minutes(): number {
    return this._this.getUTCMinutes()
  }

  set minutes(value: number) {
    this._this.setUTCMinutes(value)
  }

  get seconds(): number {
    return this._this.getUTCSeconds()
  }

  set seconds(value: number) {
    this._this.setUTCSeconds(value)
  }

  get milliseconds(): number {
    return this._this.getUTCMilliseconds()
  }

  set milliseconds(value: number) {
    this._this.setUTCMilliseconds(value)
  }

  get monthString(): string {
    return this._this.locale.getMonthString(this.month)
  }

  get genitiveMonthString(): string {
    return this._this.locale.getMonthString(this.month, true)
  }

  get dayString(): string {
    return this._this.locale.getDayString(this.day)
  }

  get dateString(): string {
    const year  = String(this.fullYear)
    const month = ('00' + String(this.month + 1)).slice(-2)
    const date  = ('00' + String(this.date).padStart(2, '0')).slice(-2)

    return `${year}-${month}-${date}`
  }

  get timeString(): string {
    const hours   = ('00' + String(this.hours)).slice(-2)
    const minutes = ('00' + String(this.minutes)).slice(-2)
    const seconds = ('00' + String(this.seconds)).slice(-2)

    return `${hours}:${minutes}:${seconds}`
  }

  setMidnight() {
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.milliseconds = 0
  }

  constructor(private _this: Timestamp) {}
}
