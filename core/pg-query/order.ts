type ISortingDirection = 'ASC' | 'DESC'

export type IOrderValue = Array<string> | { [key: string]: ISortingDirection  } | string | null

export class Order {
  readonly text: string

  constructor(value: IOrderValue = null) {

    // === Null value ===
    if (value === null) {
      this.text = ''
      return this
    }


    // === Array value ===
    if (Array.isArray(value)) {

      this.text = ' ORDER BY '
                + value.map( item => `"${item}" ASC`)
                       .join(', ')

      return this
    }


    // === Object value ===
    if (typeof value === 'object') {
      let feelds = Object.keys(value)

      if (feelds.length === 0) {
        this.text = ''
        return this
      }

      this.text = ' ORDER BY '
                + feelds.map( item => `"${item}" ${value[item]}`)
                        .join(', ')
      return this
    }


    // === String value ===
    if (typeof value === 'string') {
      this.text = ` ORDER BY "${value}" ASC`
      return this
    }


    throw new TypeError('value is not a null, array, object or string')
  }
}
