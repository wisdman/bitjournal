import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core'

import { MatTableDataSource, MatSort } from '@angular/material'

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

import { META } from './meta'

const COLUMNS = [
  'icon',
  'title',
  'priceUSD',
  'capitalizationUSD',
  'priceRUB',
  'capitalizationRUB',
  'priceBTC',
  'change24h',
  'rating',
]

@Component({
  selector: 'page-coins.page',
  templateUrl: './page-coins.component.html',
  styleUrls: [ './page-coins.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageCoinsComponent implements OnInit {

  filtredPrice: 'USD' | 'RUB' = 'RUB'

  get displayedColumns() {
    return COLUMNS.filter( item => item.indexOf(this.filtredPrice) < 0 )
  }

  dataSource = new MatTableDataSource(new Array<IPartialCoin>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  publications: Observable<Array<IPartialPublication>>

  constructor(
    private readonly _api: APIService,
    private readonly _meta: MetaService,
    private readonly _loaderService: LoaderService
  ) {}

  ngOnInit() {
    this._loaderService.show()

    this._meta.setMetaTags(META)

    this._api
        .get<Array<IPartialCoin>>(`${COINS_API_PATH}`)
        .subscribe( items => {

          this.dataSource.data = items
                                 .map( item => {
                                   item.capitalizationUSD = (item.availableSupply || 0) * (item.priceUSD || 0)
                                   return item
                                 })

          this._loaderService.hide()
        })

    this.publications = this._api
                            .get<Array<IPartialPublication>>(`${PUBLICATIONS_API_PATH}?limit=50`)
  }
}
