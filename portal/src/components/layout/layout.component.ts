import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'body',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit() {

  }
}
