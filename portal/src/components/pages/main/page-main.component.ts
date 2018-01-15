import { Component, ViewEncapsulation, OnInit, ViewChildren, QueryList, ViewContainerRef } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/operator/map'

import { PubCardComponent } from  '../../pub-card'

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
                                       limit: '20'
                                     })

    this.publications_weight_12 = this._api
                                      .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, {
                                        weight: '1,2',
                                        limit: '9'
                                      })

    this.publications = Observable.forkJoin(this.publications_weight_0, this.publications_weight_12)
                                  .map( ([s1, s2]) => {
                                    this._loaderService.hide()
                                    const result = [...s1, ...s2]
                                    result.forEach( item => console.dir(item) )
                                    return result
                                  })
  }

  @ViewChildren('publicationsList', { read: ViewContainerRef }) publicationsList: QueryList<PubCardComponent>

  ngAfterViewInit() {
    this.publicationsList.changes.subscribe(t => {
      console.dir(t)
      console.dir(this.publicationsList)
    })
  }

}
