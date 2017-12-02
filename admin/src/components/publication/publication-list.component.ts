import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

const ROUTE_BASE = 'publications'

@Component({
  selector: 'publication-list',
  templateUrl: './publication-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'date',
    'weight',
    'title',
    'author',
    'views',
    'liks',
  ]

  dataSource = new MatTableDataSource(new Array<any>())

  ngOnInit(){
    this._apiService.get<any>(`/${ROUTE_BASE}`).subscribe( items => this.dataSource.data = items )
  }

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(element: any) {
    this._router.navigate([ROUTE_BASE, String(element.id)])
  }

}
