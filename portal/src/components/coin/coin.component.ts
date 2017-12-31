import { Component, ViewEncapsulation, Input, PLATFORM_ID, Inject, ViewChild } from '@angular/core'
import { isPlatformServer } from '@angular/common'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatTableDataSource, MatSort } from '@angular/material'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'

import { ICoin } from '@common/coin'

const COLUMNS = [
  'title',
  'price',
  'high24Hour',
  'low24Hour',
]

const COINSNAPSHOT_USD_URL = (symbol:string) =>
  `/cc/?fsym=${symbol}&tsym=USD`

@Component({
  selector: '.bj-coin',
  templateUrl: './coin.component.html',
  styleUrls: [ './coin.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class CoinComponent {

  private readonly _isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _http: HttpClient,
    private readonly _sanitizationService: DomSanitizer,
  ) {
    this._isServer = isPlatformServer(platformId)
  }

  showPrice: 'USD' | 'RUB' = 'USD'

  private _value: ICoin | null = null

  @Input() set value(value: ICoin | null){
    this._value = value
    this.updateMarketsTable()
  }

  get value(): ICoin | null {
    return this._value
  }

  get displayedColumns() {
    return COLUMNS
  }

  chartURL: SafeResourceUrl


  // get chartURL(): SafeUrl {
  //   if (!this._value)
  //     return this._sanitizationService.bypassSecurityTrustUrl('')

  //   return this._sanitizationService.bypassSecurityTrustUrl(`/chart.html#${this._value}`)
  // }

  marketsSource = new MatTableDataSource(new Array<any>())

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.marketsSource.sort = this.sort
  }

  updateMarketsTable() {
    if (!this._value)
      return

    this.chartURL = this._sanitizationService.bypassSecurityTrustResourceUrl(`/chart.html#${this._value.symbol}`)

    if (this._isServer)
      return

    const symbol = this._value.symbol
    const url = COINSNAPSHOT_USD_URL(symbol)

    this._http
        .get< any >(url)
        .catch(error => Observable.of(null))
        .filter(item => item !== null)
        .subscribe( result => {
          if (!result.Data || !Array.isArray(result.Data.Exchanges))
            return

          this.marketsSource.data = result.Data
                                          .Exchanges
                                          .filter( (item:any) => {
                                            return item.TOSYMBOL === 'USD'
                                                && parseInt(item.LASTUPDATE) > 1514000000
                                          })
                                          .map( (item:any) => ({
                                            title: item.MARKET,
                                            price: Math.round(parseFloat(item.PRICE)*1000)/1000,
                                            high24Hour: Math.round(parseFloat(item.HIGH24HOUR)*1000)/1000,
                                            low24Hour: Math.round(parseFloat(item.LOW24HOUR)*1000)/1000,
                                          }))
        })
  }
}
