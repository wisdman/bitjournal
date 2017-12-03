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

import { User, UserRoleEnum } from '@common/models'

import { APIService } from '../api'
import { DialogService } from '../dialog'

const AUTH_TOKEN_LS_ID = 'auth-token'

@Injectable()
export class UserService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _dialog: DialogService,
    private readonly _snackBar: MatSnackBar) {}

  private get _authToken(): string | null {
    return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null
  }

  private set _authToken(value: string | null) {
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
                            this._dialog.open({ title: `Ошибка ${error.status}`, message: error.message })

                        } else
                          this._dialog.open({ title: 'Ошибка приложения', message: String(error) })

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
                         this._dialog.message('Неверные учетные данные')
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
