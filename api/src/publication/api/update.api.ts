import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  PUBLICATIONS_DATATABLE,
  PUBLICATIONS_API_PATH,
  IPartialPublication,
} from '@common/publication'

import { PublicationModel } from './publication.model'
import { IModelResult } from '@core/model'

const FULL_ACCESS_ROLES = [
  Role.Publisher,
  Role.Administrator,
  Role.Su
]

export class UpdateAPI extends RouteMiddleware {

  @Post(`${PUBLICATIONS_API_PATH}/:id`)
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

    const value = model.value as IPartialPublication

    if ( ctx.session.roles.checkAny(FULL_ACCESS_ROLES) !== true ) {

      const getAuthorsQuery = new Query(PUBLICATIONS_DATATABLE)
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

      if (value.enanle !== undefined)
        delete value.enanle

    }

    const query = new Query(PUBLICATIONS_DATATABLE)
                      .update(value)
                      .where('id = $1', id)
                      .returning(value)

    const result = await query.exec<IPartialPublication>(ctx.db)
                              .catch( error => error as DBError )

    // Result is error
    if ( !Array.isArray(result) ) {
      if (result.code === DBError.UNIQUE_VIOLATION ) {
        ctx.set(409)
        return
      }

      ctx.throw(result)
      return
    }

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
