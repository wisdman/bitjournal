import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { User } from '@common/models'
import { UserService } from '../../services'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _userService: UserService
  ) {}

  displayedColumns = [
    'enable',
    'url',
    'title',
    'email',
    'phone',
    'roles'
  ]

  dataSource = new MatTableDataSource(new Array<User>())

  ngOnInit(){
    this._userService.list().subscribe( list => this.dataSource.data = list )
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
    this._router.navigate([UserService.BaseURL, new UUID(null).value])
  }

  select(element: User) {
    this._router.navigate([UserService.BaseURL, String(element.id)])
  }
}
