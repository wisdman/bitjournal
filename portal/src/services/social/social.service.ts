import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { VKInit } from './vk-init'
import { TwitterInit } from './twitter-init'
import { GoogleInit } from './google-init'

import { VK_SOCIAL_ID } from './enveroments'

@Injectable()
export class SocialService {
  static VK_SOCIAL_ID = VK_SOCIAL_ID

  private isServer: boolean

  private _vk: Promise<any> | undefined = undefined
  private _twitter: Promise<any> | undefined = undefined
  private _google : Promise<any> | undefined = undefined

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isServer = isPlatformServer(platformId)
    this.init()
  }

  private init() {
    if ( this.isServer)
      return

    this._vk = VKInit()
    this._twitter = TwitterInit()
    this._google = GoogleInit()
  }

  vk(): Promise<any> {
    return this._vk || Promise.resolve(undefined)
  }

  twitter(): Promise<any> {
    return this._twitter || Promise.resolve(undefined)
  }

  google(): Promise<any> {
    return this._google || Promise.resolve(undefined)
  }
}
