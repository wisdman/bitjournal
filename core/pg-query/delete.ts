import { AbstractQuery } from './abstract'
import { Query } from './query'

import { Where, IWhereValue } from './where'
import { Returning, IReturningValue } from './returning'

export class Delete extends AbstractQuery {

  private readonly _command: string

  private _where:     Where     = new Where()
  private _returning: Returning = new Returning()

  constructor(query: Query) {
    super('DELETE')
    this._command = `DELETE FROM "${ query.scheme }"."${ query.table }"`
  }

  where(value: IWhereValue, ...values: Array<any>) {
    this._where = new Where(value, 0, values)
    return this
  }

  returning(value: IReturningValue) {
    this._returning = new Returning(value)
    return this
  }

  get text(): string {
    return this._command
         + this._where.text
         + this._returning.text
  }

  get values(): Array<any> {
    return this._where.values
  }
}
