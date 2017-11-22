import { AbstractQuery } from './abstract'
import { Query } from './query'
import { Returning, IReturningValue } from './returning'

export type IInsertValue =  { [key: string]: any }

export class Insert extends AbstractQuery {

  private readonly _command: string

  private _returning: Returning = new Returning()

  constructor(query: Query, value: IInsertValue = {}) {
    super('INSERT')

    // Get all keya of value
    let feelds: Array<string> = Object.keys(value)

    if (feelds.length === 0)
      throw new TypeError('filtred value is an empty object')

    this.values = []
    let values: Array<string> = []
    feelds.forEach( item => {

      if ( value[item] === undefined ) {
        values.push('DEFAULT')
        return
      }

      let i = this.values.push( value[item] )
      values.push(`$${i}`)

    })

    // escape feels
    feelds = feelds.map( item => `"${item}"` )

    this._command = `INSERT INTO TABLE "${ query.scheme }"."${ query.table }" (${ feelds.join(', ') }) VALUES (${ values.join(', ') })`
  }

  returning(value: IReturningValue) {
    this._returning = new Returning(value)
    return this
  }

  get text(): string {
    return this._command
         + this._returning.text
  }
}
