import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-currencies-item',
  templateUrl: './page-currencies-item.component.html',
  styleUrls: [ './page-currencies-item.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageCurrenciesItemComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
