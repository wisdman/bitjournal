import { Component, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core'
import { isPlatformServer } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'

import {
  ExternalService
} from '../../services'

@Component({
  selector: '.layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

  private readonly _isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _router: Router,
    private readonly _ext: ExternalService,
  ) {
    this._isServer = isPlatformServer(platformId)

    this._router
        .events
        .filter( event => (event instanceof NavigationEnd) )
        .subscribe( async event => {
          if (this._isServer)
            return

          window.scrollTo(0,0)
          this._ext.ya.then( ya => {
            console.dir(ya)

            if (!ya)
              return

            ya.hit(document.location.href)
          })
        })

  }
}
