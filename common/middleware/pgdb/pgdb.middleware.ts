/*
 * MongoDB context
 */

import { Middleware, Context, INext } from '@core/service'
import { Pool } from 'pg'

import { pgPool } from '../../pg-pool'

export class PgDBMiddleware extends Middleware {

  private pool: Pool

  constructor() {
    super()
    this.pool = pgPool
  }

  async main(ctx: Context, next: INext): Promise<void> {
    ctx.db = await this.pool.connect()
    await next()
    ctx.db.release()
  }
}
