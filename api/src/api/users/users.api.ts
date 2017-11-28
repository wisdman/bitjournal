import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'

import { ACL } from '@common/middleware'
import {
  IUser_MAIN_FIELDS,
  IUser_ALL_FIELDS,
  UserRoleEnum,
} from '@common/models'

import { OTP } from '@core/otp'

export class UsersAPI extends RouteMiddleware {

  @Get('/users', 'q')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async find(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    const q = route.query

    ctx.set({})
  }

  @Get('/users')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('users').select(IUser_MAIN_FIELDS)

    ctx.debug('=== SQL Query [/users] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users] ===\n%s', result.rows)

    ctx.set(result.rows)
  }

  @Get('/users/me')
  async getMe(ctx: Context, next: INext) {
    if (!ctx.session.isValid) {
      ctx.set(403)
      return
    }

    const db = ctx.db as Client

    const id = ctx.session.userId as UUID

    const query = new Query('users').select(IUser_ALL_FIELDS)
                                    .where('id = $1', String(id))

    ctx.debug('=== SQL Query [/users/me] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/me] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      ctx.set(result.rows[0])
      return
    }

    ctx.set(403)
  }

  @Get('/users/:id')
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

    const query = new Query('users').select(IUser_ALL_FIELDS)
                                    .where('id = $1', String(id))

    ctx.debug('=== SQL Query [/users/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      ctx.set(result.rows[0])
      return
    }

    ctx.set(404)
  }

  @Get('/users/:id/otp')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getTOTP(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query('users').select(['email', 'totp'])
                                    .where('id = $1', String(id))

    ctx.debug('=== SQL Query [/users/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/:id] ===\n%s', result.rows)

    if (result.rowCount === 0) {
      ctx.set(404)
      return
    }

    let secret = result.rows[0].totp

    if (!secret) {
      ctx.set(204)
      return
    }

    const otp = new OTP({ secret })
    ctx.set(otp.keyuri(result.rows[0].email, 'BitJournal'))
  }

  @Post('/users')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async create(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = ctx.request.json()

    ctx.set({})
  }

  @Post('/users/:id')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async update(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    const id = route.data.id
    const data = ctx.request.json()

    ctx.set({})
  }

  @Post('/users/:id/password')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async setPassword(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    const id = route.data.id
    const data = ctx.request.json()

    ctx.set({})
  }
}
