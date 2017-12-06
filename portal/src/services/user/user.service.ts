import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

import { MatDialog } from '@angular/material'
import { MatSnackBar } from '@angular/material'

import { AuthDialogComponent } from '../../components'

import { User, RoleEnum } from '@common/models'

import { APIService } from '../api'
import { MessageService } from '../message'

const AUTH_TOKEN_LS_ID = 'auth-token'

@Injectable()
export class UserService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _message: MessageService,
    private readonly _snackBar: MatSnackBar) {}

  private get _authToken(): string | null {
    if (!window || !window.localStorage)
      return null

    return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null
  }

  private set _authToken(value: string | null) {
    if (!window || !window.localStorage)
      return

    value = value && value.trim() || null
    if (value)
      window.localStorage.setItem(AUTH_TOKEN_LS_ID, value)
    else
      window.localStorage.removeItem(AUTH_TOKEN_LS_ID)
  }

  get authToken(): string | null {
    return this._authToken
  }

  get authHeaders(): HttpHeaders {
    let authToken = this._authToken
    return new HttpHeaders({ 'Authorization': 'token ' + (authToken || 'null') })
  }

  me(): Observable<User> {
    return this._http.get< Partial<User> >(APIService.buildPath('/users/me'), { headers: this.authHeaders })
                     .catch(error => {
                        if (error instanceof HttpErrorResponse) {
                          if (error.status === 403)
                            this._matDialog.open(AuthDialogComponent, { data: this })

                          else
                            this._message.message(`Ошибка ${error.status}: ${error.message}`)

                        } else
                          this._message.message('Ошибка приложения')

                        return Observable.of(null)
                     })
                     .filter(item => item !== null)
                     .map( item => new User(item) ) as Observable<User>
  }

  login(data: { email: string, password: string, otp: string }): Observable<boolean> {
    return this._http.post<{token: string}>( APIService.buildPath('/auth/login'), data, { headers: this.authHeaders })
                     .catch( error => Observable.of(null) )
                     .map( item => {
                       if (item === null) {
                         this._message.message('Неверное имя пользователя или пароль')
                         return false
                       }

                       this._authToken = item.token
                       window.location.reload()
                       return true
                     })
  }

  logout(): void {
    this._http.get<void>(APIService.buildPath('/auth/logout'), { headers: this.authHeaders })
              .catch( error => Observable.of(null) )
              .subscribe( item => {
                this._authToken = null
                window.location.reload()
              })
  }
}
