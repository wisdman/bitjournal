import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { DOMAIN_PORTAL } from '../../environment'

import { APIService } from '../../services'

import { Rating } from '@common/rating'

import {
  IPartialCoin,
  COINS_API_PATH,
} from '@common/coin'

@Component({
  selector: 'coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoinListComponent implements OnInit {
  static PATH = '/coins'

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'symbol',
    'title',
    'priceBTC',
    'priceUSD',
    'priceRUB',
    'rating',
  ]

  dataSource = new MatTableDataSource(new Array<IPartialCoin>())

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  ngOnInit(){
    this._apiService
        .get< Array<IPartialCoin> >(`${COINS_API_PATH}`)
        .subscribe( items => {
          this.dataSource.data = items.map( item => {
            item.rating = new Rating(item.rating)
            return item
          })
        })
  }

  select(item: IPartialCoin) {
    this._router.navigate([CoinListComponent.PATH, item.symbol])
  }

  toggle(item: IPartialCoin) {
    this._apiService
        .post<{ enable: boolean }>(`${COINS_API_PATH}/${item.symbol}`, { enable: !item.enable })
        .subscribe( result => item.enable = result.enable )
  }

}




