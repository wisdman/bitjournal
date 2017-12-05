import { Component, ViewEncapsulation, OnInit, isDevMode, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import QRious from 'qrious'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  IUser,
  IRating,
  RoleEnum,
  IStatus,
} from '@common/models'

const API_BASE = 'users'
const API_STATUSES = 'statuses'

const TOTP_SERVICE_NAME = 'BitJournal'
const URL_PATTERN = /^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$/

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  roles = RoleEnum

  statuses = new Array<IStatus>()

  get DEBUG(): boolean {
    return isDevMode()
  }

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup
  passwordForm: FormGroup

  rating: IRating

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _route: ActivatedRoute,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService,
    private readonly _location: Location
  ) {
    this.itemForm = this._fb.group({
      enable:        [ true, [
                       Validators.required
                     ] ],

      url:           [ '', [
                       Validators.maxLength(256),
                       Validators.pattern(URL_PATTERN)
                     ] ],

      roles:         [ new Array<RoleEnum>() ],

      title:         [ '', [
                       Validators.maxLength(160),
                       Validators.required
                     ] ],

      statuses:      [ new Array<string>() ],

      email:         [ '', [
                       Validators.maxLength(256),
                       Validators.email,
                       Validators.required
                     ] ],

      phone:         [ '', [
                       Validators.maxLength(18)
                     ] ],

      image:         [ null ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],
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
      size: 200,
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      try {
        this._id = new UUID(params['id'])
      } catch (error) {
        this._dialog.open({ title: 'Оштбка', message: 'Неверный ID' })
        this._location.back()
        return
      }

      // Add statuses
      this._apiService
          .get< Array<IStatus> >(`/${API_STATUSES}`)
          .subscribe( items => this.statuses = items )

      if (!this.isNew)
        this._apiService
            .get<IUser>(`/${API_BASE}/${this._id}`)
            .subscribe( item => {

              // Get rating
              this.rating = item.rating

              // Get otp data
              this._apiService
                  .get<{secret: string}>(`/${API_BASE}/${this._id}/otp`)
                  .subscribe(item => {
                    this.otpSecret = item.secret
                    this.reloadOTPCanvas()
                  })

              // Fix null url
              item.url = item.url || ''

              // Fix phone url
              item.phone = item.phone || ''

              // Get roles
              item.roles = RoleEnum.getArray(item.roles) as Array<RoleEnum>

              this.itemForm.patchValue(item)
            })
    })
  }

  back() {
    if (this.itemForm.pristine) {
      this._location.back()
      return
    }

    this._dialog.open({
      title: 'Форма была изменена',
      message: `Возможна потеря данных. Покинуть раздел?`,
      buttons: {
        'Отмена': false,
        'Да': true
      }
    }).subscribe( result => {
      if (result === true)
        this._location.back()
    })
  }

  setPassword() {
    if (this.isNew)
      return

    if (this.passwordForm.invalid || this.passwordForm.value.password1 !== this.passwordForm.value.password2) {
      this._dialog.message('Пароли не совпадают')
      return
    }

    this._apiService
        .post<{ success: true }>(`/${API_BASE}/${this._id}/password`, this.passwordForm.value)
        .subscribe( _ => this._dialog.message('Пароль успешно изменен') )
  }

  resetOTP() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Необратимая операция',
      message: `Вы уверены, что хотите заменить OTP для пользователя "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Заменить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService
            .post<{secret: string}>(`/${API_BASE}/${this._id}/otp`, {})
            .subscribe(item => {
              this.otpSecret = item.secret
              this.reloadOTPCanvas()
            })
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._id}`

    this._apiService
        .post<IUser>(postURL, this.itemForm.value)
        .subscribe( _ => this._location.back() )
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
        this._apiService.delete<IUser>(`/${API_BASE}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
