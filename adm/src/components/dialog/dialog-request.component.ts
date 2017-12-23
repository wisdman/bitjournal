import { Component, Inject } from '@angular/core'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import {
  IDialogRequestType,
  IDialogRequestOptions,
} from '../../services'

@Component({
  selector: 'dialog-request',
  templateUrl: './dialog-request.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogRequestComponent {

  public readonly title: string
  public readonly placeholder: string
  public readonly message: string
  public readonly type: IDialogRequestType
  public readonly default: string | number

  constructor(
    private dialogRef: MatDialogRef<DialogRequestComponent>,
    @Inject(MAT_DIALOG_DATA) data: IDialogRequestOptions
  ) {
    this.title = data.title && String(data.title).trim() || ''
    this.placeholder = data.placeholder && String(data.placeholder).trim() || ''
    this.message = data.message && String(data.message).trim() || ''
    this.type = data.type || 'text'
    this.default = data.default === undefined ? '' : data.default
  }
}
