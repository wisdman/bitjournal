import { Component, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core'
import { isPlatformServer } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: '.layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

  private isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _router: Router,
  ) {
    this.isServer = isPlatformServer(platformId)

    this._router
        .events
        .filter( event => (event instanceof NavigationEnd) )
        .subscribe( event => {
          if (this.isServer)
            return

          window.scrollTo(0,0)

          console.log(document.title)
        })

  }
}
