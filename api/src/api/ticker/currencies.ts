import { pgPool } from '@common/pg-pool'
import { Query } from '@core/pg-query'

const DATATABLE = 'currencies'

export async function getSymbols(): Promise< Array<string> > {
  const db = await pgPool.connect()

  const query = new Query(DATATABLE).select(['symbol'])
                                    .where('enable')

  // console.log(`=== SQL Query [Symbols] ===\n%O`, query.valueOf())

  const result = await db.query(query.valueOf())

  // console.log(`=== SQL Query [Symbols] ===\n%O`, result.rows)

  return result.rows.map( item => String(item.symbol) )
}
