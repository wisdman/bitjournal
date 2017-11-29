import { RouteMiddleware, Context, INext, HttpError, Get, Post, Delete, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { ACL } from '@common/middleware'

import {
  UserRoleEnum,
  Section,
} from '@common/models'

export class SectionsAPI extends RouteMiddleware {

  @Get('/sections')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAllAdmin(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('sections').select(Section.MainFields)

    ctx.debug('=== SQL Query [GET /sections] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [GET /sections] ===\n%s', result.rows)

    const items = result.rows.map(item => new Section(item))
    ctx.set(items)
  }

  @Get('/sections')
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('sections').select(Section.MainFields)
                                       .where('enable')

    ctx.debug('=== SQL Query [GET /sections] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [GET /sections] ===\n%s', result.rows)

    const items = result.rows.map(item => new Section(item))
    ctx.set(items)
  }

  @Get('/sections/:id')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getOneAdmin(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query('sections').select()
                                       .where('id = $1', String(id))

    ctx.debug('=== SQL Query [GET /sections/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [GET /sections/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new Section(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }

  @Get('/sections/:id')
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

    const query = new Query('sections').select()
                                       .where('id = $1 AND enable', String(id))

    ctx.debug('=== SQL Query [GET /sections/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [GET /sections/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new Section(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }


  @Post('/sections')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = await ctx.request.json()

    const item = new Section(data)
    delete item.id

    const query = new Query('sections').insert(item)
                                       .returning()

    ctx.debug('=== SQL Query [POST /sections] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [POST /sections] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new Section(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }

  @Post('/sections/:id')
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
    delete item.id

    const query = new Query('sections').update(item)
                                       .where('id = $1', String(id))
                                       .returning()

    ctx.debug('=== SQL Query [POST /sections/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [POST /sections/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new Section(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }

  @Delete('/sections/:id')
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

    const query = new Query('sections').delete()
                                       .where('id = $1', String(id))
                                       .returning()

    ctx.debug('=== SQL Query [DELETE /sections/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [DELETE /sections/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new Section(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }
}
