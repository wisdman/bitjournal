import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { MatDialog } from '@angular/material'

import { AuthDialogComponent } from '../../components'

import {
 API_SERVER
} from '../../enveroments'

const AUTH_TOKEN_LS_ID = 'auth-token'

@Injectable()
export class AuthService {

  constructor(private readonly _http: HttpClient, private readonly _dialog: MatDialog){}

  get token(): string | null {
    return window.localStorage.getItem(AUTH_TOKEN_LS_ID) || null
  }

  set token(value: string | null) {
    value = value && value.trim() || null
    if (value)
      window.localStorage.setItem(AUTH_TOKEN_LS_ID, value)
    else
      window.localStorage.removeItem(AUTH_TOKEN_LS_ID)
  }

  openDialog(): void {
    let dialogRef = this._dialog.open(AuthDialogComponent)


    dialogRef.beforeClose().subscribe(result => {
      console.log('=== Before close ===')

      console.dir(result)
      console.dir(dialogRef)
    });
  }
}
