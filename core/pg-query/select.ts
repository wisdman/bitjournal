import { AbstractQuery } from './abstract'
import { Query } from './query'
import { Where, IWhereValue } from './where'
import { Order, IOrderValue } from './order'
import { Limit  } from './limit'
import { Offset } from './offset'

export type ISelectValue = Array<string> | { [key: string]: any }

export class Select extends AbstractQuery {

  private readonly _command: string

  private _where:  Where  = new Where()
  private _order:  Order  = new Order()
  private _limit:  Limit  = new Limit()
  private _offset: Offset = new Offset()

  constructor(query: Query, value: ISelectValue = []) {
    super('SELECT')
    let feelds: Array<string> = Array.isArray(value) ? value : Object.keys(value)

    // escape feelds
    feelds = feelds.map( item => `"${item}"` )

    this._command = `SELECT ${ feelds.join(', ') || '*' } FROM "${ query.scheme }"."${ query.table }"`
  }

  where(value: IWhereValue, ...values: Array<any>) {
    this._where = new Where(value, 0, values)
    return this
  }

  order(value: IOrderValue) {
    this._order = new Order(value)
    return this
  }

  limit(limit: number) {
    this._limit = new Limit(limit)
    return this
  }

  offset(offset: number) {
    this._offset = new Offset(offset)
    return this
  }

  get text(): string {
    return this._command
         + this._where.text
         + this._order.text
         + this._limit.text
         + this._offset.text
  }

  get values(): Array<any> {
    return this._where.values
  }
}
