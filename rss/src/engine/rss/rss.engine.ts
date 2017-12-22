
import { Context, INext, RouteMiddleware, Get } from '@core/service'
import { Query, Client } from '@core/db'

import { IPartialPublication, PUBLICATIONS_DATATABLE } from '@common/publication'

import { RSSItem } from './rss-item'

import { Template } from '../../template'
import RSSTemplate from './rss.tpl'

const FEELDS = [
  "ts",
  "url",
  "title",
  "description",
  "image",
  "authors",
  "content",
  "rss",
  "facebook",
  "twitter",
]

export class RSSMiddleware extends RouteMiddleware {

  private _rssTpl = new Template(RSSTemplate)

  async getItems(client:Client): Promise<Array<RSSItem>> {
    const query = new Query(PUBLICATIONS_DATATABLE)
                      .select(FEELDS)
                      .where(`enable AND ts <= timezone('UTC', now())`)
                      .order({'ts': 'DESC'})
                      .limit(100)

    const result = await query.exec<IPartialPublication>(client)

    return result.map(item => new RSSItem(item))
  }

  @Get(`/rss`)
  async getRSS(ctx: Context, next: INext) {
    const items = await this.getItems(ctx.db)
    const result = this._rssTpl( items.filter(item => item.rss) )
    ctx.set(result)
  }
}
