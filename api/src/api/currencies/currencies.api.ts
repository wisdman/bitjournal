import { RouteMiddleware, Context, INext, HttpError, Get, Post, Delete, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { ACL } from '@common/middleware'

import {
  UserRoleEnum,
  Currency,
} from '@common/models'

const ROUTE_BASE = 'currencies'
const DATATABLE = 'currencies'

export class CurrenciesAPI extends RouteMiddleware {

  @Get(`/${ROUTE_BASE}`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query(DATATABLE).select(Currency.MainFields)

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}] ===\n%s`, result.rows)

    const resultItems = result.rows.map( item => new Currency(item) )

    ctx.set(resultItems)
  }

  @Get(`/${ROUTE_BASE}`)
  async getAllEnabled(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query(DATATABLE).select(Currency.MainFields)
                                      .where('enable')

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}] ===\n%s`, result.rows)

    const resultItems = result.rows.map( item => new Currency(item) )

    ctx.set(resultItems)
  }

  @Get(`/${ROUTE_BASE}/:symbol`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getOne(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const symbol = route.data.symbol.trim()

    if (!symbol) {
      ctx.set(404)
      return
    }

    const query = new Query(DATATABLE).select()
                                      .where('symbol = $1', symbol)

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:symbol] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:symbol] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Currency(result.rows[0])

    ctx.set(resultItem)
  }

  @Get(`/${ROUTE_BASE}/:symbol`)
  async getOneEnabled(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const symbol = route.data.symbol.trim()

    if (!symbol) {
      ctx.set(404)
      return
    }

    const query = new Query(DATATABLE).select()
                                      .where('symbol = $1 AND enable', symbol)

    ctx.debug(`=== SQL Query [GET /${ROUTE_BASE}/:symbol] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [GET /${ROUTE_BASE}/:symbol] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Currency(result.rows[0])

    ctx.set(resultItem)
  }


  @Post(`/${ROUTE_BASE}`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async add(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const data = await ctx.request.json()

    const item = new Currency(data)

    const query = new Query(DATATABLE).insert(item.valueOf())
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Currency(result.rows[0])

    ctx.set( resultItem )
  }

  @Post(`/${ROUTE_BASE}/:symbol`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async update(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const symbol = route.data.symbol.trim()

    if (!symbol) {
      ctx.set(404)
      return
    }

    const data = await ctx.request.json()

    const item = new Currency(data)

    const query = new Query(DATATABLE).update(item.valueOf())
                                      .where('symbol = $1', symbol)
                                      .returning()

    ctx.debug(`=== SQL Query [POST /${ROUTE_BASE}/:symbol] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [POST /${ROUTE_BASE}/:symbol] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Currency(result.rows[0])

    ctx.set( resultItem )
  }

  @Delete(`/${ROUTE_BASE}/:symbol`)
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async delete(ctx: Context, next: INext) {
    const route = ctx.route as Route

    const db = ctx.db as Client

    const symbol = route.data.symbol.trim()

    if (!symbol) {
      ctx.set(404)
      return
    }

    const query = new Query(DATATABLE).delete()
                                      .where('symbol = $1', symbol)
                                      .returning()

    ctx.debug(`=== SQL Query [DELETE /${ROUTE_BASE}/:symbol] ===\n%s`, query)

    const result = await db.query(query.valueOf())

    ctx.debug(`=== SQL Result [DELETE /${ROUTE_BASE}/:symbol] ===\n%s`, result.rows)

    if (result.rowCount !== 1) {
      ctx.set(404)
      return
    }

    const resultItem = new Currency(result.rows[0])

    ctx.set( resultItem )
  }
}
