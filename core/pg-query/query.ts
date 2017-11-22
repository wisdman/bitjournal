import { AbstractQuery } from './abstract'

import { Select, ISelectValue } from './select'
import { Insert, IInsertValue } from './insert'
import { Update, IUpdateValue } from './update'
import { Delete } from './delete'

export class Query {

  readonly table: string
  readonly scheme: string

  constructor(table: string, scheme:string = 'public') {
    // === Table name ===
    this.table = table

    // === Scheme name ===
    this.scheme = scheme
  }

  select(value: ISelectValue): Select {
    return new Select(this, value)
  }

  insert(value: IInsertValue): Insert {
    return new Insert(this, value)
  }

  update(value: IUpdateValue): Update {
    return new Update(this, value)
  }

  delete(): Delete {
    return new Delete(this)
  }
}
