import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
} from '../../services'

import { IStatus } from '@common/models'

const API_BASE = 'statuses'

@Component({
  selector: 'status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusListComponent {

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'title',
    'delete'
  ]

  dataSource = new MatTableDataSource(new Array<IStatus>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  ngOnInit(){
    this._apiService
        .get< Array<IStatus> >(`/${API_BASE}`)
        .subscribe( items => this.dataSource.data = items )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    this._dialog.request({
      title: 'Новый статус',
      placeholder: 'Название',
    }).subscribe( result => {
      if (!result)
        return

      this._apiService
          .post< Partial<IStatus> >(`/${API_BASE}`, { title: result })
          .subscribe( item => this.dataSource.data = this.dataSource.data.concat(<IStatus>item) )
    })
  }

  delete(deletedItem: IStatus) {
    this._dialog.open({
      title: 'Удалить статус?',
      message: `Вы уверены, что хотите удалить статус "${deletedItem.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result !== true)
        return

      this._apiService
        .delete<IStatus>(`/${API_BASE}/${deletedItem.id}`)
        .subscribe( _ => this.dataSource.data = this.dataSource.data.filter( item => item !== deletedItem ) )
    })
  }

  toggle(item: IStatus) {
    this._apiService
        .post<IStatus>(`/${API_BASE}/${item.id}`, Object.assign({}, item, { enable: !item.enable } ))
        .subscribe( newItem => item.enable = newItem.enable )
  }

  editTitle(item: IStatus) {
    this._dialog.request({
      title: 'Изменить статус',
      placeholder: 'Название',
      default: item.title
    }).subscribe( result => {
      if (!result)
        return

      this._apiService
          .post<IStatus>(`/${API_BASE}/${item.id}`, Object.assign({}, item, { title: result }))
          .subscribe( newItem => Object.assign(item, newItem) )
    })
  }

}
