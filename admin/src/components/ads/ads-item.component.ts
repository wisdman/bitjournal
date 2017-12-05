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

import {
  IAds,
  IStats,
  BlockEnum,
} from '@common/models'

const API_BASE = 'ads'

@Component({
  selector: 'ads-item',
  templateUrl: './ads-item.component.html',
  styleUrls: ['./ads-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdsItemComponent implements OnInit {

  blocks = BlockEnum

  get DEBUG(): boolean {
    return isDevMode()
  }

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup
  stats: IStats

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

      blocks:        [ new Array<BlockEnum>() ],

      startDate:     [ new Date(), [
                       Validators.required,
                     ] ],

      endDate:       [ new Date(), [
                       Validators.required,
                     ] ],


      url:           [ '', [
                       Validators.required,
                       Validators.maxLength(256),
                     ] ],

      description:   [ '', [
                       Validators.maxLength(160)
                     ] ],

      content:       [ '' ],
      files:         [ new Array<number>() ],

      limits:        this._fb.group({
                       show:         [ 0, [ Validators.min(0) ] ],
                       showPerDay:   [ 0, [ Validators.min(0) ] ],
                       showPerUser:  [ 0, [ Validators.min(0) ] ],
                       click:        [ 0, [ Validators.min(0) ] ],
                       clickPerDay:  [ 0, [ Validators.min(0) ] ],
                       clickPerUser: [ 0, [ Validators.min(0) ] ],
                     })
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
            .get<IAds>(`/${API_BASE}/${this._id}`)
            .subscribe( item => {

              item.blocks = BlockEnum.getArray(item.blocks) as Array<BlockEnum>

              this.itemForm.patchValue(item)
              this.stats = item.stats
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

  // replaceBlock() {
  //   this._fileService
  //       .upload({
  //         accept: 'image/*'
  //       })
  //       .subscribe( result => {
  //         let oldOid = this.itemForm.value.image

  //         this.itemForm.patchValue({ image: result.oid })

  //         if (!oldOid)
  //           return

  //         this._fileService
  //             .delete(oldOid)
  //             .subscribe(_ => {})
  //       })
  // }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._id}`

    this._apiService
        .post<IAds>(postURL, this.itemForm.value)
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
        this._apiService.delete<IAds>(`/${API_BASE}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
