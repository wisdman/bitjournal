import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IExchange } from '@common/models'
import { IExchangeListItem } from './exchange-list-item.interface'

const API_BASE = 'exchanges'
const ROUTE_BASE = 'exchanges'

@Component({
  selector: 'exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExchangeListComponent {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'url',
    'title',
    'like',
    'dislike',
    'rating',
    'volume',
    'pairs',
    'bjr',
  ]

  dataSource = new MatTableDataSource(new Array<IExchangeListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  updateStatistic(item?: IExchangeListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IExchange> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IExchange) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IExchange) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}
