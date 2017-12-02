import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

const ROUTE_BASE = 'statuses'

@Component({
  selector: 'status-list',
  templateUrl: './status-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class StatusListComponent {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'url',
    'title',
    'rating',
  ]

  dataSource = new MatTableDataSource(new Array<any>())

  ngOnInit(){
    this._apiService.get<any>(`/${ROUTE_BASE}`).subscribe( items => this.dataSource.data = items )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    // this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(element: any) {
    this._router.navigate([ROUTE_BASE, String(element.id)])
  }

}
