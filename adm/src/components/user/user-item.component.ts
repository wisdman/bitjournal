import { Component, ViewEncapsulation, OnInit, isDevMode, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import QRious from 'qrious'

import { UUID } from '@core/uuid'

import {
  DEBUG,
  TOTP_SERVICE_NAME,
  TOTP_URI
} from '../../environment'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  IPartialUser,
  USERS_API_PATH,
} from '@common/user'

import {
  IPartialStatus,
  STATUSES_API_PATH
} from '@common/status'

import { Role } from '@common/role'

import { Rating } from '@common/rating'

import { PATTERN_URL } from '@common/pattern'

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  DEBUG = DEBUG

  roles = Role
  statuses = new Array<IPartialStatus>()

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup
  passwordForm: FormGroup

  rating: Rating

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
                       Validators.pattern(PATTERN_URL)
                     ] ],

      roles:         [ new Array<Role>() ],

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

    return TOTP_URI(this.itemForm.value.email, this.otpSecret)
  }

  @ViewChild('qrCanvas') qrCanvasRef: ElementRef

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
          .get< Array<IPartialStatus> >(`${STATUSES_API_PATH}`)
          .subscribe( items => this.statuses = items )

      if (!this.isNew)
        this._apiService
            .get<IPartialUser>(`${USERS_API_PATH}/${this._id}`)
            .subscribe( item => {

              // Get rating
              this.rating = new Rating(item.rating)

              // Get otp data
              this._apiService
                  .get<{secret: string}>(`${USERS_API_PATH}/${this._id}/otp`)
                  .subscribe(item => {
                    this.otpSecret = item.secret
                    this.reloadOTPCanvas()
                  })

              // Fix null values
              item.url = item.url || ''
              item.phone = item.phone || ''

              // Get roles
              item.roles = Role.getArray(item.roles) as Array<Role>

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
        .post<{ success: true }>(`${USERS_API_PATH}/${this._id}/password`, this.passwordForm.value)
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
            .post<{secret: string}>(`${USERS_API_PATH}/${this._id}/otp`, {})
            .subscribe(item => {
              this.otpSecret = item.secret
              this.reloadOTPCanvas()
            })
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `${USERS_API_PATH}` : `${USERS_API_PATH}/${this._id}`

    this._apiService
        .post<IPartialUser>(postURL, this.itemForm.value)
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
        this._apiService.delete<IPartialUser>(`${USERS_API_PATH}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
