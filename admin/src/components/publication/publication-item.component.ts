import { Component, ViewEncapsulation, OnInit, isDevMode, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { ENTER, COMMA } from '@angular/cdk/keycodes'

import QRious from 'qrious'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  IPublication,
  IRating,

  ISection,
  ICurrency,
  IExchange,
  IICO,
  IMarket,
  IUser,
} from '@common/models'

const API_BASE = 'publications'

const API_SECTIONS   = 'sections'
const API_CURRENCIES = 'currencies'
const API_EXCHANGES  = 'exchanges'
const API_ICO        = 'ico'
const API_MARKETS    = 'markets'
const API_USERS      = 'users'

@Component({
  selector: 'publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationItemComponent implements OnInit {

  sections   = new Array<ISection>()
  currencies = new Array<ICurrency>()
  exchanges  = new Array<IExchange>()
  ico        = new Array<IICO>()
  markets    = new Array<IMarket>()
  authors    = new Array<IUser>()

  get DEBUG(): boolean {
    return isDevMode()
  }

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup

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

      ts:            [ new Date(), [
                       Validators.required,
                     ] ],

      weight:        [ 0, [
                       Validators.min(0),
                       Validators.max(2)
                     ] ],

      rss:           [ true, [
                       Validators.required
                     ] ],

      url:           [{ value: '', disabled: true }],

      bigTitle:      [ '', [
                       Validators.maxLength(160)
                     ] ],

      title:         [ '', [
                       Validators.maxLength(160),
                       Validators.required
                     ] ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],

      image:         [ null ],

      tags:          [ new Array<string>() ],

      sections:      [ new Array<string>() ],
      currencies:    [ new Array<string>() ],
      exchanges:     [ new Array<string>() ],
      ico:           [ new Array<string>() ],
      markets:       [ new Array<string>() ],
      authors:       [ new Array<string>() ],

      sharing:       [ true, [
                       Validators.required
                     ] ],

      ogTitle:       [ '', [
                       Validators.maxLength(160)
                     ] ],

      ogDescription: [ '', [
                       Validators.maxLength(160)
                     ] ],

      ogImage:       [ null ],

      ads:           [ true, [
                       Validators.required
                     ] ],

      comments:      [ true, [
                       Validators.required
                     ] ],
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

      // Add sections
      this._apiService
          .get< Array<ISection> >(`/${API_SECTIONS}`)
          .subscribe( items => this.sections = items )

      // Add currencies
      this._apiService
          .get< Array<ICurrency> >(`/${API_CURRENCIES}`)
          .subscribe( items => this.currencies = items )

      // Add currencies
      this._apiService
          .get< Array<IExchange> >(`/${API_EXCHANGES}`)
          .subscribe( items => this.exchanges = items )

      // Add currencies
      this._apiService
          .get< Array<IICO> >(`/${API_ICO}`)
          .subscribe( items => this.ico = items )

      // Add markets
      this._apiService
          .get< Array<IMarket> >(`/${API_MARKETS}`)
          .subscribe( items => this.markets = items )

      // Add authors
      this._apiService
          .get< Array<IUser> >(`/${API_USERS}`)
          .subscribe( items => this.authors = items )

      if (!this.isNew)
        this._apiService
            .get<IPublication>(`/${API_BASE}/${this._id}`)
            .subscribe( item => {

              // Get rating
              this.rating = item.rating

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

    this._dialog.open({
      title: 'Необратимая операция',
      message: `Вы уверены, что хотите заменить ссылку. Это может сказаться на SEO?`,
      buttons: {
        'Отмена': false,
        'Заменить': true
      }
    }).subscribe( result => {
      // if (result === true)
      //   this._apiService
      //       .post<{url: string}>(`/${API_BASE}/${this._id}/reseturl`, {})
      //       .subscribe(item => {
      //         this.otpSecret = item.secret
      //         this.reloadOTPCanvas()
      //       })
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._id}`

    this._apiService
        .post<IPublication>(postURL, this.itemForm.value)
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
        this._apiService.delete<IPublication>(`/${API_BASE}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
