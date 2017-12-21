import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-markets-item',
  templateUrl: './page-markets-item.component.html',
  styleUrls: [ './page-markets-item.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageMarketsItemComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
