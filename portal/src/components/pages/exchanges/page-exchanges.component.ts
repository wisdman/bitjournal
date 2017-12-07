import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-exchanges',
  templateUrl: './page-exchanges.component.html',
  styleUrls: [ './page-exchanges.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageExchangesComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
