import { RouteMiddleware, Context, INext, HttpError, Get, Put, Delete, Route } from '@core/service'

import { DBError } from '@core/pg-query'
import { Client } from 'pg'
import { LargeObjectManager } from 'pg-large-object'

import { UUID } from '@core/uuid'
import { ACL } from '@common/middleware'

import {
  RoleEnum,
} from '@common/models'

const ROUTE_BASE = 'raw'
const DATATABLE = 'raw'

const BUFFER_SIZE = 16384

export class rawAPI extends RouteMiddleware {

  @Get(`/${ROUTE_BASE}/:id`)
  @ACL([
    RoleEnum.Administrator,
    RoleEnum.Su,
  ])
  async getOne(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const strOid = route.data.id

    if (!/^[0-9]+&/.test(strOid)) {
      ctx.set(404)
      return
    }

    const oid = parseInt(strOid)

    if (!oid) {
      ctx.set(404)
      return
    }

    ctx.debug(`=== GET /${ROUTE_BASE}/:id] LO [%s] ===`, oid)

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

    ctx.set(buffer)
  }

  @Put(`/${ROUTE_BASE}`)
  @ACL([
    RoleEnum.Administrator,
    RoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const buffer = await ctx.request.raw()

    ctx.debug(`=== PUT [/${ROUTE_BASE}] LO ===`)

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
      ctx.throw(new Error('LO empty oid error'))
      return
    }

    ctx.set({ oid })
  }

  @Delete(`/${ROUTE_BASE}/:id`)
  @ACL([
    RoleEnum.Administrator,
    RoleEnum.Su,
  ])
  async delete(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const strOid = route.data.id

    if (!/^[0-9]+$/.test(strOid)) {
      ctx.set(404)
      return
    }

    const oid = parseInt(strOid)

    if (!oid) {
      ctx.set(404)
      return
    }

    ctx.debug(`=== DELETE /${ROUTE_BASE}/:id] LO [%s] ===`, oid)

    const lom = new LargeObjectManager({ pg: db })

    await db.query('BEGIN')

    try {

      await lom.unlinkAsync(oid)

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

    ctx.set({ oid })
  }
}
