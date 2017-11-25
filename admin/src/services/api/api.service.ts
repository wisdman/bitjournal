import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { AuthService } from '../auth'

import {
 API_SERVER
} from '../../app.enveroments'

const PATH_REGEXP = /^\/?(.*)/

@Injectable()
export class APIService {

  constructor(private readonly _http: HttpClient, private readonly _auth: AuthService) {}

  private getPath(value: string = ''): string {
    let match = PATH_REGEXP.exec(value.trim())
    return API_SERVER + '/' + ( match && match[1] || '' )
  }

  private getHeaders(): HttpHeaders {
    let authToken = this._auth.token
    return new HttpHeaders(authToken ? { 'Authorization': 'token ' + authToken } : { })
  }

  private getParams(value: { [param: string]: string | string[] }): HttpParams {
    return new HttpParams({ fromObject: value })
  }

  private handleError(error: Response | any) {
    if (error instanceof HttpErrorResponse) {
      this._auth.openDialog()
    }
    console.dir(error)
    return Observable.of(null)
  }

  get<T>(path: string, params: { [param: string]: string | string[] } = {}): Observable<T> {
    return this._http.get<T>(this.getPath(path), {
                              headers: this.getHeaders(),
                              params: this.getParams(params)
                            })
                     .catch(error => this.handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  post<T>(path: string, data: T): Observable<T> {
    return this._http.post<T>(this.getPath(path),
                              data, {
                                headers: this.getHeaders()
                              })
                     .catch(error => this.handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  put<T>(path: string, data: T): Observable<T> {
    return this._http.put<T>(this.getPath(path),
                             data, {
                               headers: this.getHeaders()
                             })
                     .catch(error => this.handleError(error))
                     .filter(item => item !== null) as Observable<T>
  }

  delete(path: string): Observable<boolean> {
    return this._http.delete<boolean>(this.getPath(path), {
                                  headers: this.getHeaders()
                                })
                     .catch(error => this.handleError(error))
                     .map(item => !!item) as Observable<boolean>
  }

}
