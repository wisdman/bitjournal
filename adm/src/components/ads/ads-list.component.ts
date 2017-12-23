import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { DEBUG } from '../../environment'

import { APIService } from '../../services'

import {
  IPartialAds,
  ADS_API_PATH,
} from '@common/ads'

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdsListComponent {
  static PATH = '/ads'

  DEBUG = DEBUG

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

  dataSource = new MatTableDataSource(new Array<IPartialAds>())

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
        .get< Array<IPartialAds> >(`${ADS_API_PATH}`)
        .subscribe( items => this.dataSource.data = items)
  }

  add() {
    this._router.navigate([AdsListComponent.PATH, new UUID(null).value])
  }

  select(item: IPartialAds) {
    this._router.navigate([AdsListComponent.PATH, item.id])
  }

  toggle(item: IPartialAds) {
    this._apiService
        .post<{ enable: boolean }>(`${ADS_API_PATH}/${item.id}`, { enable: !item.enable })
        .subscribe( result => item.enable = result.enable )
  }

}
