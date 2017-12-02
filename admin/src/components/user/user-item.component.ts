import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router'
import { UUID } from '@core/uuid'

import QRious from 'qrious'

import {
  APIService,
  DialogService,
} from '../../services'

const ROUTE_BASE = 'users'
const TOTP_SERVICE_NAME = 'BitJournal'

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup
  passwordForm: FormGroup

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService
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

  otpSecret: string = ''

  get keyuri(): string {
    if (!this.otpSecret)
      return ''
    return `otpauth://totp/${TOTP_SERVICE_NAME}:${this.itemForm.value.email}?secret=${this.otpSecret}&issuer=${TOTP_SERVICE_NAME}`
  }

  @ViewChild('qrCanvas') qrCanvasRef: ElementRef;

  reloadOTPCanvas() {
    if (!this.qrCanvasRef)
      return

    let canvas = this.qrCanvasRef.nativeElement
    const qr = new QRious({
      element: canvas,
      value: this.keyuri,
      size: 250,
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      try {
        this._id = new UUID(params['id'])
      } catch (error) {
        this._dialog.open({ title: 'Оштбка', message: 'Неверный ID' })
        this._router.navigate([ROUTE_BASE])
        return
      }

      if (!this.isNew)
        this._apiService.get<any>(`/${ROUTE_BASE}/${this._id}`).subscribe( (item: any) => {
          this.itemForm.patchValue(item)

          this._apiService.get<{secret: string}>(`/${ROUTE_BASE}/${this._id}/otp`).subscribe(item => {
            this.otpSecret = item.secret
            this.reloadOTPCanvas()
          })
        })
    })
  }

  setPassword() {
    if (this.isNew)
      return

    if (this.passwordForm.invalid) {
      this._dialog.message('Пароли не совпадают')
      return
    }

    if (this.passwordForm.value.password1 !== this.passwordForm.value.password2) {
      this._dialog.message('Пароли не совпадают')
      return
    }

    this._apiService.post<void>(`/${ROUTE_BASE}/${this._id}/password`, this.passwordForm.value)
                    .subscribe( _ => this._dialog.message('Пароль успешно изменен') )
  }

  resetOTP() {
    if (this.isNew)
      return

    this._apiService.post<{secret: string}>(`/${ROUTE_BASE}/${this._id}/password`, {secret: ''})
                    .subscribe(item => {
                        this.otpSecret = item.secret
                        this.reloadOTPCanvas()
                    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${ROUTE_BASE}` : `/${ROUTE_BASE}/${this._id}`

    this._apiService.post<any>(postURL, this.itemForm.value)
                    .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить пользователя?',
      message: `Вы уверены, что хотите удалить пользователя "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete(`/${ROUTE_BASE}/${this._id}`)
                        .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
    })
  }
}
