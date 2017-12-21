import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-ico-item',
  templateUrl: './page-ico-item.component.html',
  styleUrls: [ './page-ico-item.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageICOItemComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
