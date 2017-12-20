import { Client } from 'pg'

import { AbstractQuery } from './abstract'

import { Select, ISelectValue } from './select'
import { Insert, IInsertValue } from './insert'
import { Update, IUpdateValue } from './update'
import { Delete } from './delete'

export class Query {

  readonly scheme:string

  constructor(readonly table: string, {
    scheme
  }: {
    readonly scheme?:string
  } = {}) {
    this.scheme = scheme || 'public'
  }

  select(value?: ISelectValue): Select {
    return new Select(this, value)
  }

  insert(value: IInsertValue): Insert {
    return new Insert(this, value)
  }

  update(value: IUpdateValue, ...inputValues: Array<any>): Update {
    return new Update(this, value, inputValues)
  }

  delete(): Delete {
    return new Delete(this)
  }
}
