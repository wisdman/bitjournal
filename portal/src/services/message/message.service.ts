import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformServer } from '@angular/common'

import { MatSnackBar } from '@angular/material'

@Injectable()
export class MessageService {

  private _isServer: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly _snackBar: MatSnackBar
  ) {
    this._isServer = isPlatformServer(platformId)
  }

  message(message: string, duration: number = 2000): void {
    if (this._isServer)
      console.log(message)
    else
      this._snackBar.open(message, undefined, { duration })
  }
}
