import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { UserService } from '../../services'

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css'],
})
export class AuthDialogComponent {
  authForm: FormGroup

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public user: UserService
  ) {
    this.dialogRef.disableClose = true
    this.authForm = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required ] ],
    })
  }

  async onSubmit() {
    if (!this.authForm.valid)
      return

    this.user.login(this.authForm.value).subscribe( result => {
      if (!result)
        this.authForm.patchValue({ password: '' })
    })
  }
}

