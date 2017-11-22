export class Limit {

  readonly text: string

  constructor(limit: number = Infinity) {
    if (Number.isNaN(limit))
      throw new TypeError('limit is not a number')

    if (limit <= 0)
      throw new TypeError('limit is less than or equal to zero')

    if (limit < Infinity)
      this.text = ' LIMIT ${limit}'
    else
      this.text = ''
  }
}
