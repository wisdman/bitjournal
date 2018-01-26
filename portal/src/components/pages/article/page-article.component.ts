import { Component, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {
  IPublication,
  PUBLICATIONS_API_PATH
} from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
  ContextService,
} from '../../../services'

@Component({
  selector: 'page-article.page',
  templateUrl: './page-article.component.html',
  styleUrls: [ './page-article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageArticleComponent {

  item: Observable<IPublication>
  publications: Observable < Array<IPublication> >

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {
    _route.params.subscribe( params => {
      this.onRoute(params)
    })
  }

  setMetaTags(item: IPublication) {
    this._meta.setMetaTags({
      title: item.title,
      description: item.description,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      ogImage: item.ogImage || item.image || undefined
    })
  }

  onRoute(params: { [key:string]: any }) {
    this._loaderService.show()

    const date = String( params['date'] ).trim()
    const url  = String( params['url']  ).trim()

    // Item
    this.item = this._api
                    .get< IPublication >(`${PUBLICATIONS_API_PATH}/${date}/${url}`)
                    .map( item => {
                      this.setMetaTags(item)
                      this._loaderService.hide()
                      return item
                    })

    this.publications = this._api
                             .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { limit: '12' })
  }
}
