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

const AUTOSAVE_LS_ID = 'publication-draft'

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
      enable:        [ false, [
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

      sections:      [ [Section.Main] ],

      bind:          [ 0, [
                       Validators.min(0),
                       Validators.max(20)
                     ] ],

      coins:         [ new Array<string>() ],

      allCoins:      [ false, [
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

    // === Autoupdate url is empty ===
    this.itemForm.controls.title
        .valueChanges
        .subscribe( value => {
          if (this.isNew)
            this.setUrlByTitle(value)
        })

    // === Autosave form ===
    this.itemForm
        .valueChanges
        .subscribe( value => this.autosave(value))
  }

  setUrlByTitle(value:string | null = null){
    const title = value || this.itemForm.value.title
    this.itemForm.controls.url.patchValue(new HURL(128, title).toString())
  }

  autosave(value: any) {
    if (!this.isNew || this.itemForm.pristine)
      return

    window.localStorage.setItem(AUTOSAVE_LS_ID, JSON.stringify(this.itemForm.value))
  }

  getDraft() {
    const raw =  window.localStorage.getItem(AUTOSAVE_LS_ID) || null
    if (!raw)
      return

    let data: any
    try {
      data = JSON.parse(raw)
    } catch (_) {
      data = null
    }

    if (!data)
      return

    data.sections = Section.getArray(data.sections)
    this.itemForm.patchValue(data)
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

      if (this.isNew)
        this.getDraft()
      else
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
      window.localStorage.removeItem(AUTOSAVE_LS_ID)
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
      if (result === true) {
        window.localStorage.removeItem(AUTOSAVE_LS_ID)
        this._location.back()
      }
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
        this.setUrlByTitle()
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `${PUBLICATIONS_API_PATH}` : `${PUBLICATIONS_API_PATH}/${this._id}`

    const value = Object.assign({}, this.itemForm.value)
    value.url = this.itemForm.controls.url.value || new HURL(128, this.itemForm.value.title).toString()

    this._apiService
        .post<IPartialPublication>(postURL, value)
        .subscribe( _ => {
          window.localStorage.removeItem(AUTOSAVE_LS_ID)
          this._location.back()
        })
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
                        .subscribe( _ => {
                          window.localStorage.removeItem(AUTOSAVE_LS_ID)
                          this._location.back()
                        })
    })
  }
}
