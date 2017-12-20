
import { Client, DBError } from '../pg'

import { Debug } from '@core/debug'
const debug = new Debug('DB')

export abstract class AbstractQuery {
  text: string
  values: Array<any>

  constructor(readonly name: string) {}

  valueOf() {
    return {
      text: this.text,
      values: this.values,
    }
  }

  async exec<T>(client: Client): Promise< Array<T> > {
    if ( !(client instanceof Client) )
      throw new TypeError('client is not an instanceof PG Client')

    debug(`=== SQL Query ===\n%O`, this)

    let result

    try {
      result = await client.query( this.valueOf() )
    } catch (error) {

      debug(`=== SQL Query Error ===\n%O`, error)

      throw new DBError(error)
    }

    debug(`=== SQL Query Successful ===\n%O`, result.rows)

    return result.rows as Array<T>
  }
}
