import { Component, ViewEncapsulation } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: '.layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

  constructor(
    private readonly _router: Router,
  ) {

    this._router
        .events
        .filter( event => (event instanceof NavigationEnd) )
        .subscribe( event => {
          console.log(event)
        })

  }
}
