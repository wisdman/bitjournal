import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IICO } from '@common/models'
import { IICOListItem } from './ico-list-item.interface'

const API_BASE = 'ico'
const ROUTE_BASE = 'ico'

@Component({
  selector: 'ico-list',
  templateUrl: './ico-list.component.html',
  styleUrls: ['./ico-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ICOListComponent {

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
    'bjr',
  ]

  dataSource = new MatTableDataSource(new Array<IICOListItem>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  ngOnInit(){
    this._apiService
        .get< Array<IICO> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IICO) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IICO) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }

}
