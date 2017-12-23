import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  VIDEO_DATATABLE,
  VIDEO_API_PATH,
  IPartialVideo,
} from '@common/video'

import { VideoModel } from './video.model'
import { IModelResult } from '@core/model'

export class UpdateAPI extends RouteMiddleware {

  @Post(`${VIDEO_API_PATH}/:id`)
  @ACL(
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async update(ctx: Context, next: INext) {

    const id = ctx.route.data.id

    if (!id) {
      ctx.set(404)
      return
    }

    const data = await ctx.request.json()

    const model = VideoModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialVideo

    if (value.id !== undefined)
      delete value.id

    const query = new Query(VIDEO_DATATABLE)
                      .update(value)
                      .where('id = $1', id)
                      .returning(value)

    const result = await query.exec<IPartialVideo>(ctx.db)

    if (result.length !== 1) {
      ctx.set(404)
      return
    }

    ctx.set(result[0])
  }
}
