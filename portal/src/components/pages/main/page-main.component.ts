import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { IPublication } from '@common/models'

import {
  APIService,
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
    private readonly _router: Router,
    private readonly _api: APIService,
  ) {}

  ngOnInit() {
    this.publications_weight_0 = this._api
                                     .get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=0&limit=10`)

    this.publications_weight_12 = this._api
                                      .get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=1,2&limit=9`)
  }


}
