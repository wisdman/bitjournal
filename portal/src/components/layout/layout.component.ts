import { Component, ViewEncapsulation } from '@angular/core'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'

@Component({
  selector: 'body',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

  constructor(
    private readonly _router: Router,
  ) {

    // this._router
    //     .events
    //     .filter( event => (event instanceof NavigationEnd || event instanceof NavigationStart) )
    //     .subscribe( event => {
    //       console.log(event)
    //     })

  }
}
