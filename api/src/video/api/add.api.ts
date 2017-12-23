import { RouteMiddleware, Context, INext, Post, ACL } from '@core/service'

import { Query, DBError } from '@core/db'
import { UUID } from '@core/uuid'

import { Role } from '@common/role'

import {
  VIDEO_DATATABLE,
  VIDEO_API_PATH,
  IPartialVideo,
} from '@common/video'

import { VideoModel } from './video.model'
import { IModelResult } from '@core/model'

const FIELDS = [
  "id",
  "enable",
]

export class AddAPI extends RouteMiddleware {

  @Post(`${VIDEO_API_PATH}`)
  @ACL(
    Role.Publisher,
    Role.Administrator,
    Role.Su
  )
  async add(ctx: Context, next: INext) {
    const data = await ctx.request.json()

    const model = VideoModel(data) as IModelResult

    if (model.errors.length > 0) {
      ctx.set(400, model.errors)
      return
    }

    const value = model.value as IPartialVideo

    const query = new Query(VIDEO_DATATABLE)
                      .insert(value)
                      .returning(FIELDS)

    const result = await query.exec<IPartialVideo>(ctx.db)

    ctx.set(result[0])
  }
}
