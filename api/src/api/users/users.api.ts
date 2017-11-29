import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'

import { ACL } from '@common/middleware'
import {
  User,
  UserRoleEnum,
} from '@common/models'

import { OTP } from '@core/otp'

export class UsersAPI extends RouteMiddleware {

  @Get('/users')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('users').select(User.MainFields)

    ctx.debug('=== SQL Query [/users] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users] ===\n%s', result.rows)

    const items = result.rows.map(item => new User(item))
    ctx.set(items)
  }

  @Get('/users/me')
  async getMe(ctx: Context, next: INext) {
    if (!ctx.session.isValid) {
      ctx.set(403)
      return
    }

    const db = ctx.db as Client

    const id = ctx.session.user.id as UUID

    const query = new Query('users').select()
                                    .where('id = $1 AND enable', String(id))

    ctx.debug('=== SQL Query [/users/me] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/me] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new User(result.rows[0])
      ctx.set( item )
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

    const query = new Query('users').select()
                                    .where('id = $1', String(id))

    ctx.debug('=== SQL Query [/users/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/users/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new User(result.rows[0])
      ctx.set( item )
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

    const query = new Query('users').select(['totp'])
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
    ctx.set({ secret: otp.base32Secret })
  }

  @Post('/users')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = await ctx.request.json()

    const item = new User(data)
    delete item.id

    const query = new Query('users').insert(item)
                                    .returning()

    ctx.debug('=== SQL Query [POST /users] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [POST /users] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new User(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }

  @Post('/users/:id')
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

    const item = new User(data)
    delete item.id

    const query = new Query('user').update(item)
                                   .where('id = $1', String(id))
                                   .returning()

    ctx.debug('=== SQL Query [POST /user/:id] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [POST /user/:id] ===\n%s', result.rows)

    if (result.rowCount > 0) {
      const item = new User(result.rows[0])
      ctx.set( item )
      return
    }

    ctx.set(404)
  }

  @Post('/users/:id/password')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async setPassword(ctx: Context, next: INext) {
    const route = ctx.route as Route
    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json() as { password: string }

    const password = data.password

    if (!password) {
      ctx.set(400, 'Password is empty')
      return
    }

    const query = {
      text: "UPDATE users SET password = encode(digest($1, 'sha512'), 'hex') WHERE id = $2 RETURNING id",
      values: [password, String(id)]
    }

    ctx.debug('=== SQL Query [POST /users/:id/password] ===\n%s', query)

    const result = await db.query(query)

    ctx.debug('=== SQL Result [POST /users/:id/password] ===\n%s', result.rows)

    if (result.rowCount === 0) {
      ctx.set(404)
      return
    }

    ctx.set(204)
  }

  @Post('/users/:id/otp')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async resetTOTP(ctx: Context, next: INext) {
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
      text: "UPDATE users SET totp = encode(digest(uuid_generate_v4()::text, 'sha256'), 'hex') WHERE id = $1 RETURNING totp",
      values: [String(id)]
    }

    ctx.debug('=== SQL Query [POST /users/:id/otp] ===\n%s', query)

    const result = await db.query(query)

    ctx.debug('=== SQL Result [POST /users/:id/otp] ===\n%s', result.rows)

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
    ctx.set({ secret: otp.base32Secret })
  }
}
