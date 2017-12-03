import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
} from '../../services'

import { ISection } from '@common/models'
import { ISectionListItem } from './section-list-item.interface'

const API_BASE = 'sections'
const ROUTE_BASE = 'sections'

@Component({
  selector: 'section-list',
  templateUrl: './section-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SectionListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'url',
    'title',
    'view'
  ]

  dataSource = new MatTableDataSource(new Array<ISectionListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  updateStatistic(item?: ISectionListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<ISection> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: ISection) {
    this._router.navigate([ROUTE_BASE, String(item.id)])
  }

  toggle(item: ISection) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }
}
