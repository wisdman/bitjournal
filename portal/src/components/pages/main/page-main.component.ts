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

  publications: Observable < Array<IPublication> >

  isMoreNews: boolean = false

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

    // this.publications_weight_0 = this._api
    //                                  .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, {
    //                                    weight: '0',
    //                                    limit: '20'
    //                                  })

    // this.publications_weight_12 = this._api
    //                                   .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, {
    //                                     weight: '1,2',
    //                                     limit: '9'
    //                                   })

    // this.publications = Observable.forkJoin(this.publications_weight_0, this.publications_weight_12)
    //                               .map( ([s1, s2]) => {
    //                                 const result = [...s1, ...s2].sort( (a, b) => a.weight < b.weight ? 1 : -1 )
    //                                 this._loaderService.hide()
    //                                 return result
    //                               })
  }

  // @ViewChildren('publicationsList', { read: ViewContainerRef }) publicationsList: QueryList<PubCardComponent>

  // ngAfterViewInit() {
  //   if (this._isServer)
  //     return

  //   console.log('code')
  //   // console.dir(this.publicationsList)

  //   this.publicationsList.forEach(t => {
  //     console.dir(t)
  //   //   console.dir(this.publicationsList)
  //   })
  // }

}
