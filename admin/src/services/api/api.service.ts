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

import { API_SERVER } from './enveroments'

const PATH_REGEXP = /^\/?(.*)/

@Injectable()
export class APIService {

  static buildPath(value: string = ''): string {
    let match = PATH_REGEXP.exec(value.trim())
    return API_SERVER + '/' + ( match && match[1] || '' )
  }

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _user: UserService,
    private readonly _dialog: DialogService
  ) {}

  private _handleError(error: Response | any) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403)
        this._dialog.open({ title: 'Ошибка', message: 'Доступ запрещен' })

      else if (error.status === 404)
        this._dialog.open({ title: 'Ошибка', message: 'Элемент не найден' })

      else
        this._dialog.open({ title: 'Ошибка', message: error.message })
    } else
      this._dialog.open({ title: 'Ошибка', message: String(error) })

    return Observable.of(null)
  }

  get<T>(path: string, inputParams: { [param: string]: string | string[] } = {}): Observable<T> {
    const params = new HttpParams({ fromObject: inputParams })
    return this._http.get<T>(APIService.buildPath(path), {
                              headers: this._user.authHeaders,
                              params
                            })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  post<T>(path: string, data: T): Observable<T> {
    return this._http.post<T>(APIService.buildPath(path),
                              data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  put<T>(path: string, data: T): Observable<T> {
    return this._http.put<T>(APIService.buildPath(path),
                             data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  delete<T>(path: string): Observable<T> {
    return this._http.delete<T>(APIService.buildPath(path), { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

}
