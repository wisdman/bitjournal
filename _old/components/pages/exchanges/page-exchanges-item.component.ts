import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-exchanges-item',
  templateUrl: './page-exchanges-item.component.html',
  styleUrls: [ './page-exchanges-item.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageExchangesItemComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
