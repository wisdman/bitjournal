import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { UserService } from '../user'
import { DialogService } from '../dialog'

import { DOMAIN_API } from '../../environment'

@Injectable()
export class APIService {
  static buildURL(value: string = ''): string {
    const path = ('/' + value).replace(/\/+/g,'/')
                              .replace(/\/+$/,'')
    return `https://${DOMAIN_API}${path}`
  }

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _user: UserService,
    private readonly _dialog: DialogService
  ) {}

  private _handleError(error: Response | any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 403:
          this._dialog.open({ title: 'Ошибка 403', message: 'Доступ запрещен' })
          break

        case 404:
          this._dialog.open({ title: 'Ошибка 404', message: 'Элемент не найден' })
          break

        case 409:
          this._dialog.open({ title: 'Ошибка 409', message: 'Конфликт идентификаторов' })
          break

        default:
           this._dialog.open({ title: `Ошибка ${error.status}`, message: error.message })
      }
    } else
      this._dialog.open({ title: 'Ошибка приложения', message: String(error) })

    return Observable.of(null)
  }

  get<T>(path: string, inputParams: { [param: string]: string | string[] } = {}): Observable<T> {
    const url = APIService.buildURL(path)
    const params = new HttpParams({ fromObject: inputParams })
    return this._http.get<T>(url, {
                              headers: this._user.authHeaders,
                              params
                            })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
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
