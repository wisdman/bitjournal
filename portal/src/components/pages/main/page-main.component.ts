import { Component, ViewEncapsulation, OnInit, PLATFORM_ID, Inject } from '@angular/core'
import { TransferState, makeStateKey } from '@angular/platform-browser'
import { isPlatformServer } from '@angular/common'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/concat'

import { IPublication } from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

const API_PUBLICATIONS = 'publications'

const PUBLICATIONS_WEIGHT_0_KEY = makeStateKey<string>('page-main-publications_weight_0')
const PUBLICATIONS_WEIGHT_12_KEY = makeStateKey<string>('page-main-publications_weight_12')

@Component({
  selector: 'page-main.page',
  templateUrl: './page-main.component.html',
  styleUrls: [ './page-main.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMainComponent implements OnInit {

  private isServer: boolean

  publications_weight_0: Observable < Array<IPublication> >
  publications_weight_12: Observable < Array<IPublication> >
  publications: Observable < Array<IPublication> >

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _tstate: TransferState,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {
    this.isServer = isPlatformServer(platformId)
  }

  setMetaTags() {
    this._meta.setMetaTags()
  }

  ngOnInit() {
    this._loaderService.show()

    // Weight 0 news
    if ( this._tstate.hasKey( PUBLICATIONS_WEIGHT_0_KEY ) ) {
      const items = this._tstate.get( PUBLICATIONS_WEIGHT_0_KEY, new Array<IPublication>() )
      this.publications_weight_0 = Observable.of(items)
      this._tstate.remove(PUBLICATIONS_WEIGHT_0_KEY)
    } else {
      this.publications_weight_0 = this._api
                                       .get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=0&limit=30`)
                                       .map( items => {
                                         if (this.isServer)
                                           this._tstate.set(PUBLICATIONS_WEIGHT_0_KEY, items)

                                         return items
                                       })
    }


    // Weight 1,2 news
    if ( this._tstate.hasKey( PUBLICATIONS_WEIGHT_12_KEY ) ) {
      const items = this._tstate.get( PUBLICATIONS_WEIGHT_12_KEY, new Array<IPublication>() )
      this.publications_weight_12 = Observable.of(items)
      this._loaderService.hide()
      this._tstate.remove(PUBLICATIONS_WEIGHT_12_KEY)
    } else {
      this.publications_weight_12 = this._api.get< Array<IPublication> >(`/${API_PUBLICATIONS}?weight=1,2&limit=30`)
                                        .map( items => {
                                          if (this.isServer)
                                            this._tstate.set(PUBLICATIONS_WEIGHT_12_KEY, items)

                                          this._loaderService.hide()

                                          return items
                                        })
    }

    this.publications = Observable.concat(this.publications_weight_0, this.publications_weight_12)
                                  .map( items => {

                                     console.log(items)

                                     return items
                                  })

    this._meta.setMetaTags()
  }

}
