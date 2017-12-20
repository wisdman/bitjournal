import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import { PublicationModel } from './publication.model'
import { IModelResult } from '@core/model'

import {
  ROUTE_BASE,
  DATATABLE,
} from './env'

const ROUTE_PATH = `${ROUTE_BASE}/:id`

const FULL_ACCESS_ROLES = [
  Role.Publisher,
  Role.Administrator,
  Role.Su
]

export class UpdateAPI extends RouteMiddleware {

  @Post(ROUTE_PATH)
  @ACL(
    Role.Author,
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async update(ctx: Context, next: INext) {

    let id: string

    try {
      const uuid = new UUID(ctx.route.data.id)
      id = String(uuid)
    } catch (error) {
      ctx.set(400, error.message)
      return
    }

    const data = await ctx.request.json()

    const model = PublicationModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    let query

    if ( ctx.session.roles.checkAny(FULL_ACCESS_ROLES) === true )
      query = new Query(DATATABLE)
                  .update(model.value)
                  .where('id = $1', id)
                  .returning(model.value)

    else {

      const getAuthorsQuery = new Query(DATATABLE)
                                  .select(['authors'])
                                  .where('id = $1', id)

      let getAuthorsResult = await getAuthorsQuery.exec<{ authors: Array<string> }>(ctx.db)

      if (getAuthorsResult.length !== 1) {
        ctx.set(404)
        return
      }

      const isAuthor = getAuthorsResult[0].authors.includes(ctx.session.data.user)

      if ( !isAuthor ) {
        ctx.set(403)
        return
      }

      if (model.value.enanle !== undefined)
        delete model.value.enanle

      query = new Query(DATATABLE)
                  .update(model.value)
                  .where('id = $1', id)
                  .returning(model.value)
    }

    const result = await query.exec<object>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
