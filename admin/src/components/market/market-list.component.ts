import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IMarket } from '@common/models'
import { IMarketListItem } from './market-list-item.interface'

const API_BASE = 'markets'
const ROUTE_BASE = 'markets'

@Component({
  selector: 'market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarketListComponent {

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

  dataSource = new MatTableDataSource(new Array<IMarketListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  updateStatistic(item?: IMarketListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IMarket> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IMarket) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IMarket) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}
