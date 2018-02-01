import { Component, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import {
  PUBLICATIONS_API_PATH,
  IPublication
} from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

@Component({
  selector: 'page-tag.page',
  templateUrl: './page-tag.component.html',
  styleUrls: [ './page-tag.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageTagComponent {

  publications: Observable < Array<IPublication> >
  tag: string

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

  onRoute(params: { [key:string]: any }) {
    this._loaderService.show()

    this.tag = params.tag
    this._meta.setMetaTags({ title: this.tag })

    this.publications = this._api
                            .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { tag: this.tag })
                            .map( item => {
                              this._loaderService.hide()
                              return item
                            })
  }
}
