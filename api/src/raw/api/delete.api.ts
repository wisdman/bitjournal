import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Client, DBError } from '@core/db'
import { LargeObjectManager } from 'pg-large-object'

import { Role } from '@common/role'

import { RAW_API_PATH } from './env'

const DELETE_FOREVER_ROLES = [
  Role.Administrator,
  Role.Su,
]

export class DeleteAPI extends RouteMiddleware {

  @Delete(`${RAW_API_PATH}/:oid`)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Ads,
    Role.Administrator,
    Role.Su
  )
  async delete(ctx: Context, next: INext) {
    const oid = ~~ctx.route.data.oid

    if (!oid || oid < 0) {
      ctx.set(404)
      return
    }

    if (ctx.session.roles.checkAny(DELETE_FOREVER_ROLES) !== true) {
      ctx.set({ oid })
      return
    }

    ctx.debug(`=== Large object [ DELETE ${RAW_API_PATH} ] %s ===`, oid)

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
