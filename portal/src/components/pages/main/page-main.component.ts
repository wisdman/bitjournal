import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { IPublication } from '@common/models'

import {
  APIService,
  MetaService
} from '../../../services'

const API_PUBLICATIONS = 'publications'

@Component({
  selector: 'page-main',
  templateUrl: './page-main.component.html',
  styleUrls: [ './page-main.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  publications_weight_0: Observable < Array<IPublication> >
  publications_weight_12: Observable < Array<IPublication> >

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
  ) {}

  setMetaTags() {}

  ngOnInit() {
    this.publications_weight_0 = this._api
                                     .get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=0&limit=30`)

    this.publications_weight_12 = this._api
                                      .get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=1,2&limit=30`)

    this._meta.setMetaTags()
  }


}

