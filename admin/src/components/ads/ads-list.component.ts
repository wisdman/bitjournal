import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IAds } from '@common/models'
import { IAdsListItem } from './ads-list-item.interface'

const API_BASE = 'ads'
const ROUTE_BASE = 'ads'

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdsListComponent {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'blocks',
    'title',
    'startDate',
    'endDate',
    'like',
    'click',
    'ctr'
  ]

  dataSource = new MatTableDataSource(new Array<IAdsListItem>())

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

  updateRates(item?: IAdsListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IAds> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateRates()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IAds) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IAds) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}
