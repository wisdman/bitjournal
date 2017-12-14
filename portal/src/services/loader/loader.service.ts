import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { Subject } from 'rxjs/Subject'

import { ILoaderState } from './loader-state.interface'

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<ILoaderState>()

  loaderState = this.loaderSubject.asObservable()

  private isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isServer = isPlatformServer(platformId)
  }

  show() {
    if (this.isServer)
      return

    this.loaderSubject.next({show: true} as ILoaderState)
  }

  hide() {
    if (this.isServer)
      return

    this.loaderSubject.next({show: false} as ILoaderState)
  }
}
