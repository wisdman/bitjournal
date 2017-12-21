import { Component, ViewEncapsulation } from '@angular/core'

import {
  CoinService
} from '../../services'

@Component({
  selector: '.bj-coins-ribbon',
  templateUrl: './coins-ribbon.component.html',
  styleUrls: [ './coins-ribbon.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class CoinsRsibbonComponent {

  constructor(
    private readonly _coin: CoinService
  ) {}

  coins = this._coin.hot
}
