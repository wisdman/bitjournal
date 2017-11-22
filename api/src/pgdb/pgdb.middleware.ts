/*
 * MongoDB context
 */

import { Middleware, Context, INext } from '@core/service'
import { Pool, PoolConfig, Client } from 'pg'

import { POSTGRES_POOL_CONFIG } from './environments'

// Postgres Pool
const pool = new Pool(POSTGRES_POOL_CONFIG)

export class PgDBMiddleware extends Middleware {

  private pool: Pool

  constructor(config: PoolConfig = POSTGRES_POOL_CONFIG) {
    super()
    this.pool = new Pool(config)
  }

  async main(ctx: Context, next: INext): Promise<void> {
    ctx.db = await pool.connect()
    await next()
    ctx.db.release()
  }
}
