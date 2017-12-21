import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-ico',
  templateUrl: './page-ico.component.html',
  styleUrls: [ './page-ico.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageICOComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
