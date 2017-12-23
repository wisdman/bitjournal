import { Injectable } from '@angular/core'

import { MatDialog, MatSnackBar } from '@angular/material'
import {
  DialogMessageComponent,
  DialogRequestComponent,
} from '../../components'

import { Observable } from 'rxjs/Observable'

import { IDialogMessageOptions } from './dialog-message-options.interface'
import { IDialogRequestOptions } from './dialog-request-options.interface'

@Injectable()
export class DialogService {

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _snackBar: MatSnackBar
  ) {}

  open(data: IDialogMessageOptions): Observable<any> {
    const dialogRef = this._matDialog.open(DialogMessageComponent, { data })
    return dialogRef.afterClosed()
  }

  request(data: IDialogRequestOptions): Observable<any> {
    const dialogRef = this._matDialog.open(DialogRequestComponent, { data })
    return dialogRef.afterClosed()
  }

  message(message: string, duration: number = 2000): void {
    this._snackBar.open(message, undefined, { duration })
  }
}
