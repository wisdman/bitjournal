import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'currencies-ribbon',
  templateUrl: './currencies-ribbon.component.html',
  styleUrls: [ './currencies-ribbon.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class CurrenciesRsibbonComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
