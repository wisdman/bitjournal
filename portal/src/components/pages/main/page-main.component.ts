import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/operator/map'

import {
  IPublication,
  PUBLICATIONS_API_PATH
} from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

@Component({
  selector: 'page-main.page',
  templateUrl: './page-main.component.html',
  styleUrls: [ './page-main.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  publications_weight_0: Observable < Array<IPublication> >
  publications_weight_12: Observable < Array<IPublication> >
  publications: Observable < Array<IPublication> >


  constructor(
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {}

  ngOnInit() {
    this._loaderService.show()

    this._meta.setMetaTags()

    this.publications_weight_0 = this._api
                                     .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, {
                                       weight: '0',
                                       limit: '30'
                                     })

    this.publications_weight_12 = this._api
                                      .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, {
                                        weight: '1,2',
                                        limit: '30'
                                      })
                                      .map(items => {
                                        this._loaderService.hide()
                                        return items
                                      })

    this.publications = Observable.forkJoin(this.publications_weight_0, this.publications_weight_12)
                                  .map( ([s1, s2]) => [...s1, ...s2] )
  }

}
