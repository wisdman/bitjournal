import { Component, Inject } from '@angular/core'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import {
  IDialogOptions
} from '../../services'

@Component({
  selector: 'message-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent {

  public readonly title: string
  public readonly message: string
  public readonly buttons: Array<{title: string, value: any}> = []

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: IDialogOptions
  ) {
    this.title = data.title && String(data.title).trim() || ''
    this.message = data.message && String(data.message).trim() || ''

    if (data.buttons)
      this.buttons = Object.keys(data.buttons).reduce( (prev, key) =>
        prev.concat({ title: key, value: data.buttons && data.buttons[key] }),
        new Array<{title: string, value: any}>()
      )

    if (this.buttons.length === 0)
      this.buttons.push({ title: 'OK', value: true })
  }
}
