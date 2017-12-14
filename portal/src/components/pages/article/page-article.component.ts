import { Component, ViewEncapsulation, PLATFORM_ID, Inject, HostBinding } from '@angular/core'
import { TransferState, makeStateKey } from '@angular/platform-browser'
import { isPlatformServer } from '@angular/common'
import { ActivatedRoute, } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

import { IPublication } from '@common/models'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

const API_PUBLICATIONS = 'publications'

const ITEM_KEY = makeStateKey<string>('page-article-item')
const PUBLICATIONS_KEY = makeStateKey<string>('page-article-publications')

@Component({
  selector: 'page-article.page',
  templateUrl: './page-article.component.html',
  styleUrls: [ './page-article.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageArticleComponent {

  @HostBinding('class.page--loading') showLoader: boolean = false

  private isServer: boolean

  item: Observable<IPublication>

  publications: Observable < Array<IPublication> >

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _tstate: TransferState,
    private readonly _route: ActivatedRoute,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {
    this.isServer = isPlatformServer(platformId)

    _route.params.subscribe( params => {
      this.initData(params)
    })
  }

  setMetaTags(item: IPublication) {
    this._meta.setMetaTags({
      title: item.title,
      description: item.description,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      ogImage: item.ogImage || item.image || undefined
    })
  }

  initData(params: { [key:string]: any }) {
    this._loaderService.show()

    const date = String( params['date'] ).trim()
    const url  = String( params['url']  ).trim()

    // Item
    if ( this._tstate.hasKey( ITEM_KEY ) ) {
      const item = this._tstate.get( ITEM_KEY, null as any )
      this.item = Observable.of(item)
      this._loaderService.hide()
      this._tstate.remove(ITEM_KEY)
    } else {
      this.item = this._api
                      .get< IPublication >(`/${API_PUBLICATIONS}/${date}/${url}`)
                      .map( item => {
                        this.setMetaTags(item)

                        if (this.isServer)
                          this._tstate.set(ITEM_KEY, item)

                        this._loaderService.hide()

                        return item
                      })
    }

    // Weight 0 news
    if ( this._tstate.hasKey( PUBLICATIONS_KEY ) ) {
      const items = this._tstate.get( PUBLICATIONS_KEY, new Array<IPublication>() )
      this.publications = Observable.of(items)
      this._tstate.remove(PUBLICATIONS_KEY)
    } else {
      this.publications = this._api
                              .get< Array<IPublication> >(`/${API_PUBLICATIONS}?limit=12`)
                              .map( items => {
                                if (this.isServer)
                                  this._tstate.set(PUBLICATIONS_KEY, items)

                                return items
                              })
    }
  }
}
