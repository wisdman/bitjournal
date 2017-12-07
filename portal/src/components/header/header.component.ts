import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {

  }

  ngOnInit() {

  }
}
