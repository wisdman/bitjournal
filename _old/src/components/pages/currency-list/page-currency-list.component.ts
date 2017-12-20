import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

import { DATA } from './data'

@Component({
  selector: '.page.page-currency-list',
  templateUrl: './page-currency-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageCurrencyListComponent {

  public data: any = DATA

  constructor(private router: Router) {

  }

  redirect() {
    this.router.navigate(['/currency/btc'])
  }
}
