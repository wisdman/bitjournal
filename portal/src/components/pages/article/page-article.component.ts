import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { IPublication } from '@common/models'

import {
  APIService,
} from '../../../services'

const API_PUBLICATIONS = 'publications'

@Component({
  selector: 'page-article',
  templateUrl: './page-article.component.html',
  styleUrls: [ './page-article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageArticleComponent implements OnInit {

  item: Observable < IPublication >

  publications: Observable < Array<IPublication> >

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: APIService,
  ) {}

  ngOnInit() {

    this.item = this._route
                    .params
                    .map( params => {
                      const date = String( params['date'] ).trim()
                      const url  = String( params['url']  ).trim()

                      return this._api
                                 .get<IPublication>(`/${API_PUBLICATIONS}/${date}/${url}`)
                    }).mergeAll()

    this.publications = this._api
                            .get< Array<IPublication> >(`/${API_PUBLICATIONS}?limit=12`)
  }
}
