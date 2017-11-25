export type IWhereValue = string | null

export class Where {

  readonly text: string = ''
  readonly values: Array<any> = []

  constructor(value: IWhereValue = null, index = 0, inputValues: Array<any> = []){

    // === Null value ===
    if (value === null) {
      this.values = []
      this.text = ''
      return this
    }


    // === String value ===
    if (typeof value === 'string') {

      let i: number = index

      this.values = []
      this.text = ' WHERE '
                + value.replace(/\$\d+/g, (match: string) => {
                                            let j: number = ~~match

                                            if (inputValues[j] === undefined)
                                              return 'DEFAULT'

                                            this.values.push(inputValues[j])
                                            return `$${ ++i }`
                                          })
      return this
    }

    throw new TypeError('value is not a null, array, object or string')
  }
}
