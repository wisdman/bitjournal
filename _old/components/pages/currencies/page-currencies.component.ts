import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-currencies',
  templateUrl: './page-currencies.component.html',
  styleUrls: [ './page-currencies.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageCurrenciesComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
