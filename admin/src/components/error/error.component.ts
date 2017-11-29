import { Component, Inject } from '@angular/core'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: [ './error.component.css' ]
})
export class ErrorDialogComponent {

  errorText: string = ''

  constructor(
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) error: any
  ) {
    this.errorText = String(error && error.message || error)
  }
}
