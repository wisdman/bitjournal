import { RouteMiddleware, Context, INext, Get } from '@core/service'

import { CustomQuery } from '@core/db'

import {
  PUBLICATIONS_DATATABLE,
  PUBLICATIONS_API_PATH,
} from '@common/publication'

export class GetTagsAPI extends RouteMiddleware {

  @Get(`${PUBLICATIONS_API_PATH}/tags`)
  async get(ctx: Context, next: INext) {
    const query = new CustomQuery('SELECT DISTINCT UNNEST("tags") AS "tag" FROM "publications" ORDER BY "tag"')
    const result = await query.exec<string>(ctx.db)
    ctx.set(result)
  }
}
