import { Injectable } from '@angular/core'

import { MatDialog, MatSnackBar } from '@angular/material'
import { DialogComponent } from '../../components'

import { Observable } from 'rxjs/Observable'

import { IDialogOptions } from './dialog-options.interface'

@Injectable()
export class DialogService {

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _snackBar: MatSnackBar
  ) {}

  open(data: IDialogOptions): Observable<any> {
    const dialogRef = this._matDialog.open(DialogComponent, { data })
    return dialogRef.afterClosed()
  }

  message(message: string, duration: number = 2000): void {
    this._snackBar.open(message, undefined, { duration })
  }
}
