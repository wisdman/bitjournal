import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IEvent } from '@common/models'
import { IEventListItem } from './event-list-item.interface'

const API_BASE = 'events'
const ROUTE_BASE = 'events'

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventListComponent {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'title',
    'like',
    'dislike',
    'rating',
    'bjr',
  ]

  dataSource = new MatTableDataSource(new Array<IEventListItem>())

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
    // this._apiService
    //     .get< Array<IEvent> >(`/${API_BASE}`)
    //     .subscribe( items => {
    //       this.dataSource.data = items
    //     })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IEvent) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IEvent) {
    // this._apiService
    //     .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
    //     .subscribe( result => item.enable = result.enable )
  }

}
