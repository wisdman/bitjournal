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
  selector: 'page-tags.page',
  templateUrl: './page-tags.component.html',
  styleUrls: [ './page-tags.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageTagsComponent implements OnInit {

  publications: Observable < Array<IPublication> >

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

    this.publications = Observable.forkJoin(
                          this._api
                              .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { weight: '0', limit: '40' }),
                          this._api
                              .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { weight: '1,2', limit: '19' })
                        ).map( ([s1, s2]) => {
                          const result = [...s1, ...s2].sort( (a, b) => a.ts < b.ts ? 1 : -1 )
                          this._loaderService.hide()
                          return result
                        })
  }

  // more() {
  //   this.publications
  //       .subscribe( value => {
  //         console.dir(value)
  //       })
  // }

}
