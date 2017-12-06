import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { APIService } from '../../services'

import { IPublication, ICurrency } from '@common/models'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  publications: Array<IPublication> = new Array<IPublication>()

  currencies: Array<ICurrency> = new Array<ICurrency>()

  videos: Array<string> = []

  constructor(
    private readonly _router: Router,
    private readonly _apiService: APIService
  ) {}

  ngOnInit() {
    this._apiService
        .get< Array<IPublication> >('/publications')
        .subscribe( items => {
          this.publications = items
          // this.updateStatistic()
        })

    this._apiService
        .get< Array<ICurrency> >('/currencies')
        .subscribe( items => {
          this.currencies = items
        })

    this.videos = ['1','2','3']
  }
}
