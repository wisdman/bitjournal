
export class DBError {
  static UNIQUE_VIOLATION = 23505

  static *[Symbol.iterator](): IterableIterator<number> {
    const keys = Object.keys(this)
    for (let key of keys) {
      yield (this as any)[key] as number
    }
  }

  static parseError(error: any): number {
    const code: number = error && parseInt(error.code) || NaN

    if (!code)
      return NaN

    for (let item of this)
      if (item === code)
        return item

    return NaN
  }

  private constructor(){}
}
