
export class Rating {
  private _like: number

  get like(): number {
    return this._like
  }

  set like(value: number) {
    this._like = Math.max(~~value, 0)
  }

  private _dislike: number

  get dislike(): number {
    return this._dislike
  }

  set dislike(value: number) {
    this._dislike = Math.max(~~value, 0)
  }

  private _bjr: number

  get bjr(): number {
    return this._bjr
  }

  set bjr(value: number) {
    this._bjr = Math.min(Math.max(~~value, 0), 10)
  }

  get value(): number {
    return this.like/(this.like + this.dislike)
  }

  get stars(): number {
    return 10 * this.value
  }

  constructor(value: any = {}) {
    this.like = Math.max(~~value.like, 0)
    this.dislike = Math.max(~~value.dislike, 0)
    this.bjr = Math.max(~~value.bjr, 10)
  }

  toNumber(): number {
    return this.value
  }

  toString(): string {
    return String(this.value)
  }

  valueOf() {
    return {
      like: this.like,
      dislike: this.dislike,
      bjr: this.bjr
    }
  }

  toJSON(): any {
    return this.valueOf()
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
        throw new TypeError('Cannot convert Raiting value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Raiting'
  }
}
