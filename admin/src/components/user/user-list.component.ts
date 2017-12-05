import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { IUser } from '@common/models'
import { IUserListItem } from './user-list-item.interface'

const API_BASE = 'users'
const ROUTE_BASE = 'users'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'title',
    'email',
    'phone',
    'url',
    'roles',
    'like',
    'dislike',
    'rating',
    'bjr',
    'lastsLogin'
  ]

  dataSource = new MatTableDataSource(new Array<IUserListItem>())

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

  updateStatistic(item?: IUserListItem) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IUser> >(`/${API_BASE}`)
        .subscribe( items => {
          this.dataSource.data = items
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([ROUTE_BASE, new UUID(null).value])
  }

  select(item: IUser) {
    this._router.navigate([ROUTE_BASE, item.id])
  }

  toggle(item: IUser) {
    this._apiService
        .get<{ enable: boolean }>(`/${API_BASE}/${item.id}/toggle`)
        .subscribe( result => item.enable = result.enable )
  }
}
