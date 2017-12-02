import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

import { MatTableDataSource } from '@angular/material'

import { APIService } from '../../services'

const ROUTE_BASE = 'currencies'

@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CurrencyListComponent {

constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  displayedColumns = [
    'enable',
    'image',
    'symbol',
    'title',
    'btc',
    'usd',
    'rub'
  ]

  dataSource = new MatTableDataSource(new Array<any>())

  ngOnInit(){
    // this._apiService.get<any>(`/${ROUTE_BASE}`).subscribe( items => this.dataSource.data = items )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  add() {
    this._router.navigate([ROUTE_BASE, '000'])
  }

  select(element: any) {
    this._router.navigate([ROUTE_BASE, element.symbol])
  }

}




