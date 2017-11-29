import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { MatDialog } from '@angular/material'
import { ErrorDialogComponent } from '../../components'

import { CurrentUserService } from '../user'

import { API_SERVER } from '../../enveroments'

const PATH_REGEXP = /^\/?(.*)/

@Injectable()
export class APIService {

  static getPath(value: string = ''): string {
    let match = PATH_REGEXP.exec(value.trim())
    return API_SERVER + '/' + ( match && match[1] || '' )
  }

  static getParams(value: { [param: string]: string | string[] }): HttpParams {
    return new HttpParams({ fromObject: value })
  }

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _dialog: MatDialog,
    private readonly _user: CurrentUserService
  ) {}

  private _handleError(error: Response | any) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403)
        this._dialog.open(ErrorDialogComponent, { data: 'Доступ запрещен!' })

      else if (error.status === 404)
        this._dialog.open(ErrorDialogComponent, { data: 'Элемент не найден!' })

      else
        this._dialog.open(ErrorDialogComponent, { data: error })
    } else
      this._dialog.open(ErrorDialogComponent, { data: error })

    return Observable.of(null)
  }

  get<T>(path: string, params: { [param: string]: string | string[] } = {}): Observable<T> {
    return this._http.get<T>(APIService.getPath(path), {
                              headers: this._user.authHeaders,
                              params: APIService.getParams(params)
                            })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  post<T>(path: string, data: T): Observable<T> {
    return this._http.post<T>(APIService.getPath(path),
                              data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  put<T>(path: string, data: T): Observable<T> {
    return this._http.put<T>(APIService.getPath(path),
                             data, { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  delete<T>(path: string): Observable<T> {
    return this._http.delete<T>(APIService.getPath(path), { headers: this._user.authHeaders })
                     .catch(error => this._handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

}
