import { Component, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {
  IPartialCoin,
  COINS_API_PATH,
} from '@common/coin'

import {
  IPartialPublication,
  PUBLICATIONS_API_PATH,
} from '@common/publication'

import {
  APIService,
  MetaService,
  LoaderService,
} from '../../../services'

@Component({
  selector: 'page-coin.page',
  templateUrl: './page-coin.component.html',
  styleUrls: [ './page-coin.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageCoinComponent {

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {
    _route.params.subscribe( params => {
      this.onRoute(params)
    })
  }

  publications: Observable<Array<IPartialPublication>>

  item: Observable<IPartialCoin>

  onRoute(params: { [key:string]: any }) {
    const symbol = params.symbol

    this.item =  this._api
                     .get<IPartialCoin>(`${COINS_API_PATH}/${symbol}`)

    this.publications = this._api
                            .get<Array<IPartialPublication>>(`${PUBLICATIONS_API_PATH}?limit=50`)
  }
}
