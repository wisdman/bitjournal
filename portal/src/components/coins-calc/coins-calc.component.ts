import { Component, ViewEncapsulation } from '@angular/core'

import {
  CoinService
} from '../../services'

@Component({
  selector: '.bj-coins-calc',
  templateUrl: './coins-calc.component.html',
  styleUrls: [ './coins-calc.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class CoinsCalcComponent {

  constructor(
    private readonly _coin: CoinService
  ) {}
}
