import { AbstractQuery } from './abstract'
import { Query } from './query'

import { Where,     IWhereValue     } from './where'
import { Returning, IReturningValue } from './returning'

export type IUpdateValue = string | { [key: string]: any }

export class Update extends AbstractQuery {

  private readonly _command: string
  private readonly _values: Array<any> = []

  private _returning: Returning = new Returning()
  private _where:     Where     = new Where()

  constructor(query: Query, input: IUpdateValue = {}, inputValues: Array<any> = []) {
    super('UPDATE')

    this._command = `UPDATE "${ query.scheme }"."${ query.table }" SET `

    // Qustom SET string
    if (typeof input === 'string') {
      this._command += input.replace(/\$\d+/g, (match: string) => {
                                      let j: number = ~~((/\d+/.exec(match) as any)[0]) - 1

                                      if (inputValues[j] === undefined)
                                        return 'DEFAULT'

                                      let i = this._values.push(inputValues[j])
                                      return `$${i}`
                                    })
      return this
    }

    const value: { [key: string]: any } = input.valueOf instanceof Function ? input.valueOf() : input

    // Get all keya of value
    let feelds: Array<string> = Object.keys(value)

    if (feelds.length === 0)
      throw new TypeError('updated value is an empty object')

    feelds = feelds.map( item => {

      let set = `"${item}" = `

      if (value[item] === undefined) {
        return set + 'DEFAULT'
      }

      let i = this._values.push( value[item] )
      return set + `$${i}`
    })

    this._command += `${ feelds.join(', ') }`
  }

  where(value: IWhereValue, ...values: Array<any>) {
    this._where = new Where(value, this._values.length, values)
    return this
  }

  returning(value?: IReturningValue) {
    this._returning = new Returning(value)
    return this
  }

  get text(): string {
    return this._command
         + this._where.text
         + this._returning.text
  }

  get values(): Array<any> {
    return [...this._values, ...this._where.values]
  }
}
