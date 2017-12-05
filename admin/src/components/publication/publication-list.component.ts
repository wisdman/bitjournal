import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IPublication } from '@common/models'
import { IPublicationListItem } from './publication-list-item.interface'

const API_BASE = 'publications'
const ROUTE_BASE = 'publications'

@Component({
  selector: 'publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'weight',
    'ts',
    'title',
    'view',
    'like',
    'dislike',
    'rating',
    'lastModified'
  ]

  dataSource = new MatTableDataSource(new Array<IPublicationListItem>())

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

  updateStatistic(item?: IPublicationListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IPublication> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IPublication) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IPublication) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}
