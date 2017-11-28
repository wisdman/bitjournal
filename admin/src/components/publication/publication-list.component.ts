import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource } from '@angular/material'

import { UUID } from '@core/uuid'

@Component({
  selector: 'publication-list',
  templateUrl: './publication-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent {

  constructor(private _router: Router) {}

  displayedColumns = [
    'date',
    'weight',
    'title',
    'author',
    'views',
    'liks',
    'icons'
   ];

  dataSource = new MatTableDataSource([])

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue;
  }

  add() {
    this._router.navigate(['publications', new UUID(null).value])
  }

  select(element: Element) {
    console.log(element)
  }

  delete(element: Element) {
    this.dataSource.data = this.dataSource.data.filter(item => item !== element)
  }

}
