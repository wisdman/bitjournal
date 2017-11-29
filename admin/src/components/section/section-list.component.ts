import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource } from '@angular/material'

import { UUID } from '@core/uuid'

import { Section } from '@common/models'
import { SectionService } from '../../services'

@Component({
  selector: 'section-list',
  templateUrl: './section-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SectionListComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _sectionService: SectionService
  ) {}

  displayedColumns = [
    'enable',
    'url',
    'title'
  ]

  dataSource = new MatTableDataSource(new Array<Section>())

  ngOnInit(){
    this._sectionService.list().subscribe( list => this.dataSource.data = list )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    this._router.navigate([SectionService.BaseURL, new UUID(null).value])
  }

  select(element: Section) {
    this._router.navigate([SectionService.BaseURL, String(element.id)])
  }
}
