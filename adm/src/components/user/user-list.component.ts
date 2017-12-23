import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { Rating } from '@common/rating'

import {
  IPartialUser,
  USERS_API_PATH,
} from '@common/user'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit, AfterViewInit {
  static PATH = 'users'

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
    'rating',
    'lastsLogin'
  ]

  dataSource = new MatTableDataSource(new Array<IPartialUser>())

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
        .get< Array<IPartialUser> >(`${USERS_API_PATH}`)
        .subscribe( items => {
          this.dataSource.data = items.map(item => {
            item.rating = new Rating(item.rating)
            return item
          })
        })
  }

  add() {
    this._router.navigate([UserListComponent.PATH, new UUID(null).value])
  }

  select(item: IPartialUser) {
    this._router.navigate([UserListComponent.PATH, item.id])
  }

  toggle(item: IPartialUser) {
    this._apiService
        .post<{ enable: boolean }>(`${USERS_API_PATH}/${item.id}`, { enable: !item.enable })
        .subscribe( result => item.enable = result.enable )
  }
}
