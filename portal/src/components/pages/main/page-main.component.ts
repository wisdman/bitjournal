import { Component, ViewEncapsulation, OnInit, ViewChildren, QueryList, ViewContainerRef, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer, isPlatformBrowser } from '@angular/common'

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

  publications: Array<IPublication>

  isMoreNews: boolean = false
  isMorePublications: boolean = true

  private readonly _isServer: boolean
  private readonly _isBrowser: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {
    this._isServer = isPlatformServer(platformId)
    this._isBrowser = isPlatformBrowser(platformId)
  }

  ngOnInit() {
    this._loaderService.show()

    this._meta.setMetaTags()

    Observable.forkJoin(
      this._api
          .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { weight: '0', limit: '40' }),
      this._api
          .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { weight: '1,2', limit: '19' })
    ).map( ([s1, s2]) => [...s1, ...s2].sort( (a, b) => a.ts < b.ts ? 1 : -1 ))
     .subscribe( result => {
      this._loaderService.hide()
      this.publications = result
    })
  }

  more() {
    const lastTS = this.publications.length > 0
                   ? new Date( <string>(this.publications[ this.publications.length - 1].ts) )
                   : new Date()

    const lastIntTS = String(Number(lastTS)*100)

    this._api
        .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { limit: '20', ts: lastIntTS })
        .subscribe( result => {

          this.publications = this.publications
                                  .concat(result.map( item => {
                                                        item.weight = 1
                                                        return item
                                                 })
                                  )
        })
  }

}
