import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css'],
})
export class AuthDialogComponent implements OnInit {
  authForm: FormGroup

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required ] ],
      totp:     ['', [ Validators.required ] ],
    })

    console.dir(this.authForm)
  }

  ngOnInit() {
    this.dialogRef.disableClose = true
  }

  onSubmit() {
    console.log(this.authForm.value)
    this.dialogRef.disableClose = false
    this.dialogRef.close()
  }
}

