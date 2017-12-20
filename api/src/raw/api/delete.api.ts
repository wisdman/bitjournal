import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Client, LargeObjectManager, DBError } from '@core/db'

import { Role } from '@common/role'

import {
  ROUTE_BASE,
  DATATABLE
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

const DELETE_FOREVER_ROLES = [
  Role.Administrator,
  Role.Su,
]

export class DeleteAPI extends RouteMiddleware {

  @Delete(ROUTE_PATH)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async delete(ctx: Context, next: INext) {
    const oid = parseInt(ctx.route.data.id)

    if (!oid || oid < 0) {
      ctx.set(404)
      return
    }

    if (ctx.session.roles.checkAny(DELETE_FOREVER_ROLES) !== true) {
      ctx.set({ oid })
      return
    }

    ctx.debug(`=== Large object [ DELETE ${ROUTE_PATH} ] %s ===`, oid)

    const db = ctx.db as Client

    const lom = new LargeObjectManager({ pg: db })

    await db.query('BEGIN')

    try {

      await lom.unlinkAsync(oid)

    } catch (error) {

      await db.query('ROLLBACK')

      if (error.code === DBError.UNDEFINED_OBJECT) {
        ctx.set(404)
        return
      }

      ctx.throw(error)
      return
    }

    await db.query('COMMIT')

    ctx.set({ oid })
  }
}
