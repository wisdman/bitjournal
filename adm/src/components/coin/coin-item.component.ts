import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { UUID } from '@core/uuid'

import { DEBUG } from '../../environment'

import {
  APIService,
  DialogService,
  FileService,
} from '../../services'

import {
  IPartialCoin,
  COINS_API_PATH,
} from '@common/coin'

import { Rating } from '@common/rating'

@Component({
  selector: 'coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoinItemComponent implements OnInit {

  DEBUG = DEBUG

  private _symbol: string = ''

  get isNew() {
    return !this._symbol
  }

  itemForm: FormGroup
  rating: Rating

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

      symbol:        [{ value: '', disabled: true }],

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

      founder:       [ '' ],

      startDate:     [ null ],

      url:           [ '', [
                       Validators.maxLength(256)
                     ] ],

      algorithm:     [ '' ],

      proofType:     [ '' ],

      maxSupply:     [ 0, [
                       Validators.min(0)
                     ] ],

      blockReward:   [ 0, [
                       Validators.min(0)
                     ] ]
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      this._symbol = params['symbol']

      this._apiService
          .get<IPartialCoin>(`${COINS_API_PATH}/${this._symbol}`)
          .subscribe( item => {
            this.itemForm.patchValue(item)
            this.rating = new Rating(item.rating)
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

  save() {
    if (this.isNew)
      return

    if (this.itemForm.invalid)
      return

    this._apiService
        .post<IPartialCoin>(`${COINS_API_PATH}/${this._symbol}`, this.itemForm.value)
        .subscribe( _ => this._location.back() )
  }
}
