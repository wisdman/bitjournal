import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-markets',
  templateUrl: './page-markets.component.html',
  styleUrls: [ './page-markets.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMarketsComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
