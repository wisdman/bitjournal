import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'page-events',
  templateUrl: './page-events.component.html',
  styleUrls: [ './page-events.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class PageEventsComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
