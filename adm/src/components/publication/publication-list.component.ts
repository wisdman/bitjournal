import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { APIService } from '../../services'

import { Rating } from '@common/rating'

import {
  IPartialPublication,
  PUBLICATIONS_API_PATH,
} from '@common/publication'

@Component({
  selector: 'publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent implements OnInit, AfterViewInit {
  static PATH = '/publications'

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'weight',
    'ts',
    'title',
    'sections',
    'view',
    'rating',
    'lastModified'
  ]

  dataSource = new MatTableDataSource(new Array<IPartialPublication>())

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

  updateStatistic(item?: IPartialPublication) {

  }

  ngOnInit(){
    this._apiService
        .get< Array<IPartialPublication> >(`${PUBLICATIONS_API_PATH}`)
        .subscribe( items => {
          this.dataSource.data = items.map(item => {
            item.rating = new Rating(item.rating)
            return item
          })
          this.updateStatistic()
        })
  }

  add() {
    this._router.navigate([PublicationListComponent.PATH, new UUID(null).value])
  }

  select(item: IPartialPublication) {
    this._router.navigate([PublicationListComponent.PATH, item.id])
  }

  toggle(item: IPartialPublication) {
    this._apiService
        .post<{ enable: boolean }>(`${PUBLICATIONS_API_PATH}/${item.id}`, { enable: !item.enable })
        .subscribe( result => item.enable = result.enable )
  }

}
