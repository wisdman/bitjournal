import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort } from '@angular/material'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  IPartialStatus,
  STATUSES_API_PATH
} from '@common/status'

@Component({
  selector: 'status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusListComponent {
  static PATH = 'statuses'

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService,
    private readonly _fileService: FileService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'title',
    'delete'
  ]

  dataSource = new MatTableDataSource(new Array<IPartialStatus>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  ngOnInit(){
    this._apiService
        .get< Array<IPartialStatus> >(`${STATUSES_API_PATH}`)
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
          .post< Partial<IPartialStatus> >(`${STATUSES_API_PATH}`, { title: result })
          .subscribe( item => this.dataSource.data = this.dataSource.data.concat(<IPartialStatus>item) )
    })
  }

  delete(deletedItem: IPartialStatus) {
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
        .delete<IPartialStatus>(`${STATUSES_API_PATH}/${deletedItem.id}`)
        .subscribe( _ => this.dataSource.data = this.dataSource.data.filter( item => item !== deletedItem ) )
    })
  }

  toggle(item: IPartialStatus) {
    this._apiService
        .post<{ enable: boolean }>(`${STATUSES_API_PATH}/${item.id}`, { enable: !item.enable })
        .subscribe( result => item.enable = result.enable )
  }

  editTitle(item: IPartialStatus) {
    this._dialog.request({
      title: 'Изменить статус',
      placeholder: 'Название',
      default: item.title
    }).subscribe( result => {
      if (!result)
        return

      this._apiService
          .post<{ title: string }>(`${STATUSES_API_PATH}/${item.id}`, { title: result })
          .subscribe( result => item.title = result.title )
    })
  }

  replaceImage(item: IPartialStatus) {
    this._fileService
        .upload({
          accept: 'image/svg+xml'
        })
        .subscribe( result => {
          this._apiService
              .post<{ image: number }>(`${STATUSES_API_PATH}/${item.id}`, { image: result.oid })
              .subscribe( result => {
                let old = item.image
                item.image = result.image

                if (!old)
                  return

                this._fileService
                    .delete(old)
                    .subscribe(_ => _)
              })
        })
  }

}
