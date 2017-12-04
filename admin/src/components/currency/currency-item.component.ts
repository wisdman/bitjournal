import { Component, ViewEncapsulation, OnInit, isDevMode } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import { ICurrency, IRating } from '@common/models'

const API_BASE = 'currencies'

const SYMBOL_PATTERN = /^[A-Z]+$/

@Component({
  selector: 'currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyItemComponent implements OnInit {

  get DEBUG(): boolean {
    return isDevMode()
  }

  private _symbol: string = '000'

  get isNew() {
    return /^0+$/.test(this._symbol)
  }

  itemForm: FormGroup
  rating: IRating

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _route: ActivatedRoute,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService,
    private readonly _location: Location,
    private readonly _fileService: FileService
  ) {
    this.itemForm = this._fb.group({
      enable:        [ true, [
                       Validators.required
                     ] ],

      symbol:        [ '', [
                       Validators.required,
                       Validators.maxLength(6),
                       Validators.pattern(SYMBOL_PATTERN)
                     ] ],

      extUrl:        [ '', [
                       Validators.maxLength(256)
                     ] ],

      title:         [ '', [
                       Validators.maxLength(160),
                       Validators.required
                     ] ],

      startDate:     [ new Date(), [
                       Validators.required,
                     ] ],

      founder:       [ '' ],

      maxCoin:       [ Infinity, [
                       Validators.min(0)
                     ] ],

      algorithm:     [ '' ],
      system:        [ '' ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],

      ogTitle:       [ '', [
                       Validators.maxLength(160)
                     ] ],

      ogDescription: [ '', [
                       Validators.maxLength(160)
                     ] ],

      image:         [ null ],
      ogImage:       [ null ],

      content:       [ '' ],
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      this._symbol = params['symbol']

      if (!this.isNew)
        this._apiService
            .get<ICurrency>(`/${API_BASE}/${this._symbol}`)
            .subscribe( item => {
              this.itemForm.patchValue(item)
              this.rating = item.rating
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

  replaceImage() {
    this._fileService
        .upload({
          accept: 'image/svg+xml'
        })
        .subscribe( result => {
          let oldOid = this.itemForm.value.image

          this.itemForm.patchValue({ image: result.oid })

          if (!oldOid)
            return

          this._fileService
              .delete(oldOid)
              .subscribe(_ => {})
        })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._symbol}`

    this._apiService
        .post<ICurrency>(postURL, this.itemForm.value)
        .subscribe( _ => this._location.back() )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить валюту?',
      message: `Вы уверены, что хотите удалить валюту "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete<ICurrency>(`/${API_BASE}/${this._symbol}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
