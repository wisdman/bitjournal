/*
 * Get RAW data
 */

import { Middleware, Context, INext, RouteMiddleware, Get, Route } from '@core/service'

import { Client } from 'pg'
import { LargeObjectManager } from 'pg-large-object'

import { DBError } from '@core/pg-query'

export class RAW extends RouteMiddleware {

  async getData(ctx: Context): Promise<Buffer | undefined> {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const oid = Math.max(parseInt(route.data.id), 0)

    if (!oid) {
      ctx.set(404)
      return
    }

    const lom = new LargeObjectManager({ pg: db })

    await db.query('BEGIN')

    let buffer: Buffer

    try {

      const lo = await lom.openAsync(oid, LargeObjectManager.READ)

      const length = await lo.sizeAsync()

      buffer = await lo.readAsync(length)

      await lo.closeAsync()

    } catch (error) {

      await db.query('ROLLBACK')

      if (DBError.parseError(error) === DBError.UNDEFINED_OBJECT) {
        ctx.set(404)
        return
      }

      ctx.throw(error)
      return
    }

    await db.query('COMMIT')

    return buffer
  }

  @Get(`/img/:id`)
  async getIMG(ctx: Context, next: INext) {
    const buffer = await this.getData(ctx)

    if (!buffer)
      return

    ctx.set(buffer)
  }

  @Get(`/:id`)
  async getRAW(ctx: Context, next: INext) {
    const buffer = await this.getData(ctx)

    if (!buffer)
      return

    ctx.set(buffer)
  }
}
