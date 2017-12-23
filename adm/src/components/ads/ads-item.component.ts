import { Component, ViewEncapsulation, OnInit, isDevMode } from '@angular/core'
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

import { IPartialAds, ADS_API_PATH } from '@common/ads'
import { Block } from '@common/block'

@Component({
  selector: 'ads-item',
  templateUrl: './ads-item.component.html',
  styleUrls: ['./ads-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdsItemComponent implements OnInit {

  DEBUG = DEBUG

  blocks = Block

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup

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

      title:         [ '', [
                       Validators.required,
                       Validators.maxLength(160)
                     ] ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],

      blocks:        [ new Array<Block>() ],

      startDate:     [ new Date(), [
                       Validators.required,
                     ] ],

      endDate:       [ new Date(), [
                       Validators.required,
                     ] ],

      url:           [ '', [
                       Validators.maxLength(256),
                     ] ],

      content:       [ '' ],
      files:         [ new Array<number>() ]
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

      if (!this.isNew)
        this._apiService
            .get<IPartialAds>(`${ADS_API_PATH}/${this._id}`)
            .subscribe( item => {
              item.blocks = Block.getArray(item.blocks)
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

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `${ADS_API_PATH}` : `${ADS_API_PATH}/${this._id}`

    this._apiService
        .post<IPartialAds>(postURL, this.itemForm.value)
        .subscribe( _ => this._location.back() )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить рекламу?',
      message: `Вы уверены, что хотите удалить рекламный блок "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete<IPartialAds>(`${ADS_API_PATH}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
