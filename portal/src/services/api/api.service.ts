import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { TransferState, makeStateKey } from '@angular/platform-browser'
import { isPlatformServer, isPlatformBrowser } from '@angular/common'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'

import { Hash } from '@core/hash'

import { UserService } from '../user'
import { MessageService } from '../message'

import { DOMAIN_API } from '@common/environment'

@Injectable()
export class APIService {

  static buildURL(value: string = ''): string {
    const path = ('/' + value).replace(/\/+/g,'/')
                              .replace(/\/+$/,'')
    return `https://${DOMAIN_API}${path}`
  }

  private readonly _isServer: boolean
  private readonly _isBrowser: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _tstate: TransferState,
    private readonly _http: HttpClient,
    private readonly _user: UserService,
    private readonly _message: MessageService
  ) {
    this._isServer = isPlatformServer(platformId)
    this._isBrowser = isPlatformBrowser(platformId)
  }

  private _transferStateKey(url: string) {
    const pathHash = Hash.hashString(url)
    const itemKey = makeStateKey<object>( pathHash )
    return itemKey
  }

  private _transferStateGet(url: string): any {
    if (this._isServer)
      return undefined

    const itemKey = this._transferStateKey(url)

    if (!this._tstate.hasKey(itemKey))
      return undefined

    const result = this._tstate.get(itemKey, null as any)
    this._tstate.remove(itemKey)
    return result
  }

  private _transferStateSet(url: string, item: any) {
    if (this._isBrowser)
      return

    if (item === undefined || item === null)
      return

    const itemKey = this._transferStateKey(url)
    this._tstate.set(itemKey, item)
  }

  private _handleError(error: Response | any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 403:
          this._message.message('403: Доступ запрещен')
          break

        case 404:
          this._message.message('404: Элемент не найден')
          break

        default:
           this._message.message(`Ошибка ${error.status}: ${error.message}`)
      }
    } else
      this._message.message('Ошибка приложения')

    return Observable.of(null)
  }

  get<T>(path: string, inputParams: { [param: string]: string | string[] } = {}): Observable<T> {

    const url = APIService.buildURL(path)
    const urlAndParams = url + JSON.stringify(inputParams)

    // Check transfer state data
    const result = this._transferStateGet(urlAndParams)
    if (result !== undefined && result !== null)
      return Observable.of(result) as Observable<T>

    // Transfer state is not set
    const params = new HttpParams({ fromObject: inputParams })

    return this._http.get<T>(url, {
                              headers: this._user.authHeaders,
                              params
                            })
                     .catch(error => this._handleError(error))
                     .filter( (item:any) => item !== null
                                         && item !== undefined
                                         && ( item.enable === undefined || item.enable === true ) )
                     .map(item => {
                       this._transferStateSet(urlAndParams, item)
                       return item
                     }) as Observable<T>
  }

  post<T>(path: string, data: Partial<T>): Observable<T> {
    const url = APIService.buildURL(path)
    return this._http.post<T>(url,
                              data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  put<T>(path: string, data: Blob | ArrayBuffer): Observable<T> {
    const url = APIService.buildURL(path)
    return this._http.put(url,
                             data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  delete<T>(path: string): Observable<T> {
    const url = APIService.buildURL(path)
    return this._http.delete<T>(url, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

}
