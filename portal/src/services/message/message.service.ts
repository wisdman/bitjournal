import { Injectable } from '@angular/core'

import { MatSnackBar } from '@angular/material'

@Injectable()
export class MessageService {

  constructor(
    private readonly _snackBar: MatSnackBar
  ) {}

  message(message: string, duration: number = 2000): void {
    this._snackBar.open(message, undefined, { duration })
  }
}
