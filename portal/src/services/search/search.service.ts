import { Injectable, Injector } from '@angular/core'
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay'
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal'

import { SearchComponent } from '../../components'

@Injectable()
export class SearchService {

  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector,
  ) {}

  private _createOverlay(): OverlayRef {

    const positionStrategy = this._overlay
                                 .position()
                                 .global()
                                 .centerHorizontally()
                                 .top()

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'bj-backdrop',
      panelClass: 'bj-panel',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy
    })

    return this._overlay.create(overlayConfig)
  }

  show() {
    const overlayRef = this._createOverlay()

    const injectionTokens = new WeakMap()
    injectionTokens.set(OverlayRef, overlayRef)

    const injector = new PortalInjector(this._injector, injectionTokens)

    // Create ComponentPortal that can be attached to a PortalHost
    const searchComponentPortal = new ComponentPortal(SearchComponent, null, injector)

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(searchComponentPortal)
  }
}
