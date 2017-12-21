import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-events-item',
  templateUrl: './page-events-item.component.html',
  styleUrls: [ './page-events-item.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageEventsItemComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
