import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource, MatPaginator } from '@angular/material'

import { UUID } from '@core/uuid'

import { Publication } from '@common/models'
import { PublicationService } from '../../services'

@Component({
  selector: 'publication-list',
  templateUrl: './publication-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly _router: Router,
    private readonly _publicationService: PublicationService
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

  dataSource = new MatTableDataSource(new Array<Publication>())

  ngOnInit(){
    this._publicationService.list().subscribe( list => this.dataSource.data = list )
  }

  @ViewChild(MatPaginator) paginator: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue;
  }

  add() {
    this._router.navigate([PublicationService.BaseURL, new UUID(null).value])
  }

  select(element: Publication) {
    this._router.navigate([PublicationService.BaseURL, String(element.id)])
  }
}
