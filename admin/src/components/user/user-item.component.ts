import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material'

import { ErrorDialogComponent } from '../error'
import { QuestionDialogComponent } from '../question'

import { UUID } from '@core/uuid'

import { User } from '@common/models'
import { UserService } from '../../services'

import QRious from 'qrious'

const TOTP_SERVICE_NAME = 'BitJournal'

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  item: User = new User()

  get isNew() {
    return this.item.id.version === null
  }

  itemForm: FormGroup
  passwordForm: FormGroup

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _fb: FormBuilder
  ) {
    this.itemForm = this._fb.group({
      enable:        [true, Validators.required],

      url:           [''],

      email:         [''],
      phone:         [''],

      title:         ['', Validators.required ],
      description:   [''],
    })

    this.passwordForm = this._fb.group({
      password1: ['', Validators.required ],
      password2: ['', Validators.required ],
    })
  }

  totp: string = ''

  get keyuri(): string {
    if (!this.totp)
      return ''
    return `otpauth://totp/${TOTP_SERVICE_NAME}:${this.item.email}?secret=${this.totp}&issuer=${TOTP_SERVICE_NAME}`
  }

  reloadTOTPCanvas() {
    if (!this.qrCanvasRef)
      return

    let canvas = this.qrCanvasRef.nativeElement
    const qr = new QRious({
      element: canvas,
      value: this.keyuri,
      size: 250,
    })
  }

  @ViewChild('qrCanvas') qrCanvasRef: ElementRef;

  ngOnInit() {
    const id = this._route.params.subscribe(params => {

      let id: UUID

      try {
        id = new UUID(params['id'])
      } catch (error) {
        this._dialog.open(ErrorDialogComponent, { data: error })
        this._router.navigate([UserService.BaseURL])
        return
      }

      if (id.version !== null)
        this._userService.get(id).subscribe(item => {
          this.item = item
          this.itemForm.patchValue(this.item)

          this._userService.otp(this.item).subscribe(item => {
            this.totp = item.secret
            this.reloadTOTPCanvas()
          })
        })
    })
  }

  setPassword() {
    if (this.isNew)
      return

    if (this.passwordForm.invalid)
      return

    if (this.passwordForm.value.password1 !== this.passwordForm.value.password2)
      return

    this._userService.password(this.item, this.passwordForm.value.password1)
                     .subscribe( item => console.log('password set') )
  }

  resetTOTP() {
    if (this.isNew)
      return

    this._userService.resetOTP(this.item).subscribe(item => {
      this.totp = item.secret
      this.reloadTOTPCanvas()
    })
  }

  save() {
    this.itemForm.updateValueAndValidity()
    console.log(this.itemForm.invalid)

    if (this.itemForm.invalid)
      return

    Object.assign(this.item, this.itemForm.value)

    if (this.isNew)
      this._userService.add(this.item).subscribe( item => this._router.navigate([UserService.BaseURL]) )
    else
      this._userService.update(this.item).subscribe( item => this._router.navigate([UserService.BaseURL]) )
  }

  delete() {
    const dialogRef = this._dialog.open(QuestionDialogComponent, {
      data: {
        title: 'Удалить публикацию?',
        message: `Вы уверены, что хотите удалить публикацию "${this.item.title}"?`
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this._userService.delete(this.item).subscribe( item => this._router.navigate([UserService.BaseURL]) )
    })
  }
}
