import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'

import { ACL } from '@common/middleware'
import { User, UserRole } from '@common/models'

export class UsersAPI extends RouteMiddleware {

  @Get('/users', 'q')
  @ACL([
    UserRole.Administrator,
    UserRole.Su,
  ])
  async find(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    const q = route.query

    ctx.set({})
  }

  @Get('/users')
  @ACL([
    UserRole.Administrator,
    UserRole.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('users').select(User.fields.mainKeyList)

    ctx.debug('=== SQL Query [/users] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users] ===\n%s', result.rows)

    ctx.set(result.rows)
  }

  @Get('/users/:id')
  @ACL([
    UserRole.Administrator,
    UserRole.Su,
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

    const query = new Query('users').select(User.fields.inputKeyList)
                                    .where('id = $1', id.toString())

    ctx.debug('=== SQL Query [/users/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      ctx.set(result.rows[0])
      return
    }

    ctx.set(404)
  }

  @Post('/users')
  @ACL([
    UserRole.Administrator,
    UserRole.Su,
  ])
  async create(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = ctx.request.json()

    ctx.set({})
  }

  @Post('/users/:id')
  @ACL([
    UserRole.Administrator,
    UserRole.Su,
  ])
  async update(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    const id = route.data.id
    const data = ctx.request.json()

    ctx.set({})
  }
}
