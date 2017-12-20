/*
 * DB context injection middleware
 */

import { Middleware, Context, INext } from '@core/service'
import { Pool, createPool } from '../pg'

export class DBMiddleware extends Middleware {

  private _pool: Pool = createPool()

  async main(ctx: Context, next: INext): Promise<void> {
    ctx.db = await this._pool.connect()
    await next()
    ctx.db.release()
  }
}
