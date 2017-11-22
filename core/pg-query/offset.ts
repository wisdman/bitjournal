export class Offset {

  readonly text: string

  constructor(offset: number = 0) {
    if (Number.isNaN(offset))
      throw new TypeError('offset is not a number')

    if (offset < 0)
      throw new TypeError('offset is less than zero')

    if (offset === Infinity)
      throw new TypeError('offset is Infinity')

    if (offset > 0)
      this.text = ' OFFSET ${offset}'
    else
      this.text = ''
  }
}
