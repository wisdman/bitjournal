import { RouteMiddleware, Context, INext, HttpError, Get, Post, Route } from '@core/service'

import { Query } from '@core/pg-query'
import { Client } from 'pg'

import { UUID } from '@core/uuid'
import { ACL } from '@common/middleware'

import { UserRoleEnum } from '@common/models'

export class PublicationsAPI extends RouteMiddleware {

  @Get('/publications')
  @ACL([
    UserRoleEnum.Administrator,
    UserRoleEnum.Su,
  ])
  async getAll(ctx: Context, next: INext) {
    const db = ctx.db as Client

    const query = new Query('publications').select()

    ctx.debug('=== SQL Query [/publications] ===\n%s', query)

    const result = await db.query(query.valueOf())

    ctx.debug('=== SQL Result [/publications] ===\n%s', result.rows)

    ctx.set(result.rows)
  }
}
