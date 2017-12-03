import { RouteMiddleware, Context, INext, HttpError, Get, Post, Delete, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { ACL } from '@common/middleware'

import {
  UserRoleEnum,
  Section,
} from '@common/models'

const ROUTE_BASE = 'sections'
const DATATABLE = 'sections'

export class SectionsAPI extends RouteMiddleware {

  @Get(`/${ROUTE_BASE}`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query(DATATABLE).select(Section.MainFields)

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}] ===\n%s`, result.rows)

    const resultItems = result.rows.map( item => new Section(item) )

    ctx.set(resultItems)
  }

  @Get(`/${ROUTE_BASE}`)
  async getAllEnabled(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query(DATATABLE).select(Section.MainFields)
                                      .where('enable')

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}] ===\n%s`, result.rows)

    const resultItems = result.rows.map( item => new Section(item) )

    ctx.set(resultItems)
  }

  @Get(`/${ROUTE_BASE}/:id`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getOne(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(DATATABLE).select()
                                      .where('id = $1', String(id))

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:id] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:id] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Section(result.rows[0])

    ctx.set(resultItem)
  }

  @Get(`/${ROUTE_BASE}/:id`)
  async getOneEnabled(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(DATATABLE).select()
                                      .where('id = $1 AND enable', String(id))

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:id] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:id] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Section(result.rows[0])

    ctx.set(resultItem)
  }


  @Get(`/${ROUTE_BASE}/:id/toggle`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async toggle(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = {
      text: `UPDATE "${DATATABLE}" SET enable = NOT enable WHERE id = $1 RETURNING enable`,
      values: [String(id)]
    }

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:id/toggle] ===\n%s`, query)

    const result = await db.query(query)

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:id/toggle] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const enable = result.rows[0].enable

    ctx.set({ enable })
  }


  @Post(`/${ROUTE_BASE}`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = await ctx.request.json()

    const item = new Section(data)

    const query = new Query(DATATABLE).insert(item.valueOf())
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Section(result.rows[0])

    ctx.set( resultItem )
  }

  @Post(`/${ROUTE_BASE}/:id`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async update(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json()

    const item = new Section(data)

    const query = new Query(DATATABLE).update(item.valueOf())
                                      .where('id = $1', String(id))
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/:id] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/:id] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Section(result.rows[0])

    ctx.set( resultItem )
  }

  @Delete(`/${ROUTE_BASE}/:id`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async delete(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(DATATABLE).delete()
                                      .where('id = $1', String(id))
                                      .returning()

    ctx.debug(`=== SQL Query [DELETE /${ROUTE_BASE}/:id] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [DELETE /${ROUTE_BASE}/:id] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Section(result.rows[0])

    ctx.set( resultItem )
  }
}
