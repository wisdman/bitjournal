import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { APIService } from '../../services'

import { ICurrency } from '@common/models'
import { ICurrencyListItem } from './currency-list-item.interface'

const API_BASE = 'currencies'
const ROUTE_BASE = 'currencies'

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyListComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'symbol',
    'title',
    'like',
    'dislike',
    'rating',
    'btc',
    'usd',
    'rub',
    'bjr',
  ]

  dataSource = new MatTableDataSource(new Array<ICurrencyListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  updateRates(item?: ICurrencyListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<ICurrency> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateRates()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, '000'])
  }

  select(item: ICurrency) {
    this._router.navigate([ROUTE_BASE, item.symbol])
  }

  toggle(item: ICurrency) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.symbol}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}




