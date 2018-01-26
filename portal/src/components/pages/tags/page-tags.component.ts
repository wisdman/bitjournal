import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import {
  PUBLICATIONS_API_PATH
} from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

import { META } from './meta'

@Component({
  selector: 'page-tags.page',
  templateUrl: './page-tags.component.html',
  styleUrls: [ './page-tags.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageTagsComponent implements OnInit {

  tags: Observable < Array<string> >

  constructor(
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {}

  ngOnInit() {
    this._loaderService.show()
    this._meta.setMetaTags(META)
    this.tags = this._api
                    .get< Array<string> >(`${PUBLICATIONS_API_PATH}/tags`)
                    .map( result => {
                      this._loaderService.hide()
                      return result
                    })
  }
}
