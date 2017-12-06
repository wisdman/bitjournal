import { Component, ViewEncapsulation, OnInit } from '@angular/core'

import { APIService } from '../../services'

import { IPublication, ICurrency } from '@common/models'

import { Observable } from 'rxjs/Observable'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  // publications: Array<IPublication> = new Array<IPublication>()

  // currencies: Observable<Array<ICurrency>>

  // data: any

  req: Observable<any>

  constructor(
              // private _client: HttpClient
    private readonly _apiService: APIService
  ) {

    // this.currencies = this._apiService
                          // .get< Array<ICurrency> >('/currencies')

  }

  // ngOnInit() {
  //   this._apiService
  //       .get< Array<IPublication> >('/publications')
  //       .subscribe( items => {
  //         this.publications = items
  //         // this.updateStatistic()
  //       })




  //   this.videos = ['1','2','3']
  // }

  ngOnInit(){
    // this.req = Observable.create((obs:any) => {
    //   setTimeout(() => {
    //     obs.next([1, 2, 3]);
    //     obs.complete();
    //   }, 1000);
    // });


    // this.req = this._client.get('https://api.coinmarketcap.com/v1/ticker/')
                // .subscribe( item => this.data = item )

    this.req = this._apiService
                          .get< Array<ICurrency> >('/currencies')
  }
}
