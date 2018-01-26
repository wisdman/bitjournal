import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { SearchService } from '../../services'

@Component({
  selector: '.bj-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  navBarVisibility: boolean = false

  constructor(
    private readonly _router: Router,
    private readonly _search: SearchService,
  ) {

  }

  ngOnInit() {

  }

  showSearch() {
    this._search.show()
  }
}
