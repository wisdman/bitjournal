import { Component, ViewEncapsulation, OnInit, isDevMode, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { DEBUG } from '../../environment'

import { ENTER, COMMA } from '@angular/cdk/keycodes'

import QRious from 'qrious'

import { UUID } from '@core/uuid'
import { HURL } from '@core/hurl'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  Section
} from '@common/section'

import {
  IPartialPublication,
  PUBLICATIONS_API_PATH,
} from '@common/publication'

import {
  IPartialCoin,
  COINS_API_PATH,
} from '@common/coin'

import {
  IPartialUser,
  USERS_API_PATH,
} from '@common/user'

import { Rating } from '@common/rating'

@Component({
  selector: 'publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationItemComponent implements OnInit {
  DEBUG = DEBUG

  sections   = Section
  coins      = new Array<IPartialCoin>()
  authors    = new Array<IPartialUser>()

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup

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

      ts:            [ new Date(), [
                       Validators.required,
                     ] ],

      url:           [{ value: '', disabled: true }],

      weight:        [ 0, [
                       Validators.min(0),
                       Validators.max(2)
                     ] ],

      rss:           [ true, [
                       Validators.required
                     ] ],

      facebook:      [ true, [
                       Validators.required
                     ] ],

      twitter:       [ true, [
                       Validators.required
                     ] ],

      bigTitle:      [ '', [
                       Validators.maxLength(160)
                     ] ],

      title:         [ '', [
                       Validators.maxLength(160),
                       Validators.required
                     ] ],

      ogTitle:       [ '', [
                       Validators.maxLength(160)
                     ] ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],

      ogDescription: [ '', [
                       Validators.maxLength(160)
                     ] ],

      image:         [ null ],
      ogImage:       [ null ],

      tags:          [ new Array<string>() ],

      sections:      [ new Array<Section>() ],

      bind:          [ 0, [
                       Validators.min(0),
                       Validators.max(20)
                     ] ],

      coins:         [ new Array<string>() ],

      allCoins:      [ true, [
                       Validators.required
                     ] ],

      authors:       [ new Array<string>() ],

      sharing:       [ true, [
                       Validators.required
                     ] ],

      comments:      [ true, [
                       Validators.required
                     ] ],

      ads:           [ true, [
                       Validators.required
                     ] ],



      content:       [ '' ]
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

      // Add coins
      this._apiService
          .get< Array<IPartialCoin> >(`${COINS_API_PATH}`)
          .subscribe( items => this.coins = items )

      // Add authors
      this._apiService
          .get< Array<IPartialUser> >(`${USERS_API_PATH}`)
          .subscribe( items => this.authors = items )

      if (!this.isNew)
        this._apiService
            .get<IPartialPublication>(`${PUBLICATIONS_API_PATH}/${this._id}`)
            .subscribe( item => {
              // Get rating
              this.rating = new Rating(item.rating)

              item.sections = Section.getArray(item.sections)

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

  resetUrl() {
    if (this.isNew)
      return

    const title = String(this.itemForm.value.title).trim()

    if (!title) {
      this._dialog.message('Не заполнен заголовок')
      return
    }

    this._dialog.open({
      title: 'Необратимая операция',
      message: `Вы уверены, что хотите заменить ссылку. Это может сказаться на SEO?`,
      buttons: {
        'Отмена': false,
        'Заменить': true
      }
    }).subscribe( result => {
      if (result === true)
        this.itemForm.patchValue({ url: new HURL(128, title).toString() })
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `${PUBLICATIONS_API_PATH}` : `${PUBLICATIONS_API_PATH}/${this._id}`

    this._apiService
        .post<IPartialPublication>(postURL, this.itemForm.value)
        .subscribe( _ => this._location.back() )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить публикацию?',
      message: `Вы уверены, что хотите удалить публикацию "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete<IPartialPublication>(`${PUBLICATIONS_API_PATH}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
