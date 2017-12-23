import { RouteMiddleware, Context, INext, Delete, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  VIDEO_DATATABLE,
  VIDEO_API_PATH,
  IPartialVideo,
} from '@common/video'

export class DeleteAPI extends RouteMiddleware {

  @Delete(`${VIDEO_API_PATH}/:id`)
  @ACL(
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async delete(ctx: Context, next: INext) {

    const id = ctx.route.data.id

    if (!id) {
      ctx.set(404)
      return
    }

    const query = new Query(VIDEO_DATATABLE)
                      .delete()
                      .where('id = $1', id)
                      .returning('id')

    let result = await query.exec<IPartialVideo>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
