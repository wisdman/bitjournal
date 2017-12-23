import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { Subject } from 'rxjs/Subject'

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<boolean>()

  loaderState = this.loaderSubject.asObservable()

  private readonly _isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this._isServer = isPlatformServer(platformId)
  }

  show() {
    if (this._isServer)
      return

    this.loaderSubject.next(true)
  }

  hide() {
    if (this._isServer)
      return

    this.loaderSubject.next(false)
  }
}
