import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import {
  FBInit,
  GoogleInit,
  MetrikaInit,
  TwitterInit,
  VKInit,
} from './init'

@Injectable()
export class ExternalService {
  private readonly _isServer: boolean

  private _fb      : Promise<any> | undefined = undefined
  private _google  : Promise<any> | undefined = undefined
  private _twitter : Promise<any> | undefined = undefined
  private _vk      : Promise<any> | undefined = undefined
  private _ya      : Promise<any> | undefined = undefined

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this._isServer = isPlatformServer(platformId)
  }

  init() {
    if ( this._isServer)
      return

    this._fb      = FBInit()     .then(api => api || undefined).catch( error => console.error(error))
    this._google  = GoogleInit() .then(api => api || undefined).catch( error => console.error(error))
    this._twitter = TwitterInit().then(api => api || undefined).catch( error => console.error(error))
    this._vk      = VKInit()     .then(api => api || undefined).catch( error => console.error(error))
    this._ya      = MetrikaInit().then(api => api || undefined).catch( error => console.error(error))
  }

  get fb(): Promise<any> {
    return this._fb || Promise.resolve(undefined)
  }

  get google(): Promise<any> {
    return this._google || Promise.resolve(undefined)
  }

  get twitter(): Promise<any> {
    return this._twitter || Promise.resolve(undefined)
  }

  get vk(): Promise<any> {
    return this._vk || Promise.resolve(undefined)
  }

  get ya(): Promise<any> {
    return this._ya || Promise.resolve(undefined)
  }

  load(): Promise<void> {
    return Promise.resolve()
  }
}

export function ExternalServiceFactory(externalService: ExternalService): Function {
  return () => externalService.load()
}
