import { RouteMiddleware, Context, INext, Put, ACL } from '@core/service'

import { Client, LargeObjectManager } from '@core/db'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}`

export class AddAPI extends RouteMiddleware {

  @Put(ROUTE_PATH)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {

    const buffer = await ctx.request.raw()

    ctx.debug(`=== Large object [ PUT ${ROUTE_PATH} ] ===`)

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
      ctx.throw(new Error('Large object empty oid error'))
      return
    }

    ctx.set({ oid })
  }
}
