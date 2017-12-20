import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { MetrikaInit } from './metrika-init'

@Injectable()
export class MetrikaService {
  private isServer: boolean

  private _ya : Promise<any> | undefined = undefined

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isServer = isPlatformServer(platformId)
    this.init()
  }

  private init() {
    if ( this.isServer)
      return

    this._ya = MetrikaInit()
  }

  ya(): Promise<any> {
    return this._ya || Promise.resolve(undefined)
  }

  async hit(url: string, referer: string) {
    const ya = await this.ya()
    if (!ya)
      return

    ya.hit(url)
  }
}
