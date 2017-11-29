import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { CurrentUserService } from '../../services'

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css'],
})
export class AuthDialogComponent implements OnInit {
  authForm: FormGroup

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public user: CurrentUserService
  ) {
    this.dialogRef.disableClose = true
    this.authForm = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required ] ],
      totp:     ['', [ Validators.required ] ],
    })
  }

  ngOnInit() {
    this.authForm.setValue({
      email: '',
      password: '',
      totp: '',
    })
  }

  async onSubmit() {
    if (!this.authForm.valid)
      return

    let result = await this.user.login(this.authForm.value)

    if (result)
      return

    this.authForm.setValue({
      email: '',
      password: '',
      totp: '',
    })
  }
}

