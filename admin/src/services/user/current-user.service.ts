import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { MatDialog } from '@angular/material'
import { AuthDialogComponent } from '../../components'
import { ErrorDialogComponent } from '../../components'
import { MatSnackBar } from '@angular/material'

import { APIService } from '../api'
import { User, UserRoleEnum } from '@common/models'

const AUTH_TOKEN_LS_ID = 'auth-token'

@Injectable()
export class CurrentUserService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _dialog: MatDialog,
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
    return this._http.get< Partial<User> >(APIService.getPath('/users/me'), { headers: this.authHeaders })
                     .catch(error => {
                        if (error instanceof HttpErrorResponse) {
                          if (error.status === 403)
                            this._dialog.open(AuthDialogComponent, { data: this })
                          else
                            this._dialog.open(ErrorDialogComponent, { data: error })
                        } else
                          this._dialog.open(ErrorDialogComponent, { data: error })

                        return Observable.of(null)
                     })
                     .filter(item => item !== null)
                     .map( item => new User(item) ) as Observable<User>
  }

  login(data: { email: string, password: string, totp: string }): Promise<boolean> {
    return this._http.post<{token: string} | null>(APIService.getPath('/auth/login'), data, { headers: this.authHeaders })
                     .catch( error => Observable.of(null) )
                     .map( item => {
                        if (item !== null) {
                          this._authToken = item.token
                          window.location.reload()
                          return true
                        }

                        this._snackBar.open('Неверное имя пользователя, пароль или OTP', undefined, {
                          duration: 2000
                        })

                        return false
                     })
                     .toPromise()
  }

  logout(): void {
    this._http.get<void>(APIService.getPath('/auth/logout'), { headers: this.authHeaders })
              .catch( error => Observable.of(null) )
              .subscribe( item => {
                this._authToken = null
                window.location.reload()
              })
  }
}
