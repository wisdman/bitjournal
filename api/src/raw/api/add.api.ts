import { RouteMiddleware, Context, INext, Put, ACL, HttpError } from '@core/service'

import { Client } from '@core/db'
import { LargeObjectManager } from 'pg-large-object'

import { Role } from '@common/role'

import { RAW_API_PATH } from './env'

export class AddAPI extends RouteMiddleware {

  @Put(`${RAW_API_PATH}`)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {

    const buffer = await ctx.request.raw()

    ctx.debug(`=== Large object [ PUT ${RAW_API_PATH} ] ===`)

    const db = ctx.db as Client

    const lom = new LargeObjectManager({ pg: db })

    await db.query('BEGIN')

    let oid: number

    try {

      oid = await lom.createAsync()

      const lo = await lom.openAsync(oid, LargeObjectManager.WRITE)

      await lo.writeAsync(buffer)

      await lo.closeAsync()

    } catch (error) {

      await db.query('ROLLBACK')

      ctx.throw(error)
      return
    }

    await db.query('COMMIT')

    if (!oid) {
      ctx.throw(new HttpError(500, 'Large object empty oid error'))
      return
    }

    ctx.set({ oid })
  }
}
