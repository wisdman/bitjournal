import { AbstractQuery } from './abstract'
import { Query } from './query'

import { Where, IWhereValue } from './where'
import { Returning, IReturningValue } from './returning'

export class CustomQuery extends AbstractQuery {

  constructor(input: string, ...inputValues: Array<any>) {
    super('CUSTOM')

    this.values = []

    this.text = String(input).replace(/\$\d+/g, (match: string) => {
                                                  let j: number = ~~((/\d+/.exec(match) as any)[0]) - 1

                                                  if (inputValues[j] === undefined)
                                                    return 'DEFAULT'

                                                  let i = this.values.push( inputValues[j] )
                                                  return `$${i}`
                                                })
  }
}
