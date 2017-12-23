
import { Context, INext, RouteMiddleware, Get } from '@core/service'
import { Query, Client } from '@core/db'

import { Timestamp } from '@core/timestamp'

import { IPartialPublication, PUBLICATIONS_DATATABLE } from '@common/publication'

import { Template } from '../../template'
import sitemapTemplate from './sitemap.tpl'

import { DOMAIN_PORTAL } from '@common/environment'

export class SitemapMiddleware extends RouteMiddleware {

  private _sitemapTpl = new Template(sitemapTemplate)

  async getItems(client:Client): Promise< Array<IPartialPublication> > {
    const query = new Query(PUBLICATIONS_DATATABLE)
                      .select(["ts", "url"])
                      .where(`enable AND ts <= timezone('UTC', now())`)
                      .order({'ts': 'DESC'})
                      .limit(100)

    let result = await query.exec<IPartialPublication>(client)

    result = result.map(item => {
      const ts = new Timestamp(item)
      item.loc = `https://${DOMAIN_PORTAL}/${ts.UTC.dateString}/${item.url}`
      item.lastmod = ts.iso
      return item
    })

    return result
  }

  @Get(`/sitemap.xml`)
  async getRSS(ctx: Context, next: INext) {
    const items = await this.getItems(ctx.db)
    const result = this._sitemapTpl( items )
    ctx.set(result)
  }
}
