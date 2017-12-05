import { RouteMiddleware, Context, INext, Get, Post, Delete, Route } from '@core/service'

import { Query, DBError } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { OTP } from '@core/otp'
import { ACL } from '@common/middleware'

import {
  RoleEnum,
  User,
} from '@common/models'

const ROUTE_BASE = 'users'
const DATATABLE = 'users'

export class UsersAPI extends RouteMiddleware {

  @Get(`/${ROUTE_BASE}`)
  @ACL([
    RoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query(DATATABLE).select(User.MainFields)

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}] ===\n%s`, result.rows)

    const resultItems = result.rows.map( item => new User(item) )

    ctx.set(resultItems)
  }

  @Get(`/${ROUTE_BASE}/me`)
  async getMe(ctx: Context, next: INext) {
    if (!ctx.session.valid) {
      ctx.set(403)
      return
    }

    const db = ctx.db as Client

    const user = ctx.session.user as User

    const query = new Query(DATATABLE).select()
                                      .where('id = $1 AND enable', String(user.id))

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/me] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/me] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(403)
      return
    }

    const resultItem = new User(result.rows[0])

    ctx.set(resultItem)
  }

  @Get(`/${ROUTE_BASE}/:id`)
  @ACL([
    RoleEnum.Su,
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

    const resultItem = new User(result.rows[0])

    ctx.set(resultItem)
  }

  @Get(`/${ROUTE_BASE}/:id/toggle`)
  @ACL([
    RoleEnum.Su,
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

  @Post(`/${ROUTE_BASE}/:id/otp`)
  @ACL([
    RoleEnum.Su,
  ])
  async resetOTP(ctx: Context, next: INext) {
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
      text: `UPDATE
               ${DATATABLE}
             SET
               totp = encode(digest(uuid_generate_v4()::text, 'sha256'), 'hex')
             WHERE
               id = $1
             RETURNING
               totp`,
      values: [String(id)]
    }

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/:id/otp] ===\n%s`, query)

    const result = await db.query(query)

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/:id/otp] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const secret = result.rows[0].totp

    if (!secret) {
      ctx.set(204)
      return
    }

    const otp = new OTP({ secret })
    ctx.set({ secret: otp.base32Secret })
  }

  @Post(`/${ROUTE_BASE}/:id/password`)
  @ACL([
    RoleEnum.Su,
  ])
  async password(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json() as { password: string, password1: string }

    const password = data.password || data.password1

    if (!password) {
      ctx.set(400, 'Password is empty')
      return
    }

    const query = {
      text: `UPDATE ${DATATABLE} SET password = encode(digest($1, 'sha512'), 'hex') WHERE id = $2 RETURNING id`,
      values: [password, String(id)]
    }

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/:id/password] ===\n%s`, query)

    const result = await db.query(query)

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/:id/password] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    ctx.set({ success: true })
  }

  @Post(`/${ROUTE_BASE}`)
  @ACL([
    RoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = await ctx.request.json()

    const item = new User(data)

    const query = new Query(DATATABLE).insert(item.valueOf())
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}] ===\n%s`, query)

    let result

    try {
      result = await db.query(query.valueOf())
    } catch (error) {
      if (DBError.parseError(error) === DBError.UNIQUE_VIOLATION) {
        ctx.set(409)
        return
      }

      ctx.throw(error)
      return
    }

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new User(result.rows[0])

    ctx.set( resultItem )
  }

  @Post(`/${ROUTE_BASE}/:id`)
  @ACL([
    RoleEnum.Su,
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

    const query = new Query(DATATABLE).update(item.valueOf())
                                      .where('id = $1', String(id))
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/:id] ===\n%s`, query)

    let result

    try {
      result = await db.query(query.valueOf())
    } catch (error) {
      if (DBError.parseError(error) === DBError.UNIQUE_VIOLATION) {
        ctx.set(409)
        return
      }

      ctx.throw(error)
      return
    }

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/:id] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new User(result.rows[0])

    ctx.set( resultItem )
  }

  @Delete(`/${ROUTE_BASE}/:id`)
  @ACL([
    RoleEnum.Su,
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

    const resultItem = new User(result.rows[0])

    ctx.set( resultItem )
  }

  @Get(`/${ROUTE_BASE}/:id/otp`)
  @ACL([
    RoleEnum.Su,
  ])
  async getOTP(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    let id: UUID

    try {
      id = new UUID(route.data.id)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const query = new Query(DATATABLE).select(['totp'])
                                      .where('id = $1', String(id))

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:id/otp] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:id/otp] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
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
