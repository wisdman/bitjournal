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

import { IEvent, IRating } from '@common/models'

const API_BASE = 'events'

const URL_PATTERN = /^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$/

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventItemComponent {

  // get DEBUG(): boolean {
  //   return isDevMode()
  // }

  // private _id: UUID = new UUID(null)

  // get isNew() {
  //   return this._id.version === null
  // }

  // itemForm: FormGroup
  // rating: IRating

  // constructor(
  //   private readonly _fb: FormBuilder,
  //   private readonly _route: ActivatedRoute,
  //   private readonly _apiService: APIService,
  //   private readonly _dialog: DialogService,
  //   private readonly _location: Location,
  //   private readonly _fileService: FileService
  // ) {
  //   this.itemForm = this._fb.group({
  //     enable:        [ true, [
  //                      Validators.required
  //                    ] ],

  //     url:           [ '', [
  //                      Validators.required,
  //                      Validators.maxLength(256),
  //                      Validators.pattern(URL_PATTERN)
  //                    ] ],

  //     title:         [ '', [
  //                      Validators.maxLength(160),
  //                      Validators.required
  //                    ] ],

  //     startDate:     [ new Date(), [
  //                      Validators.required,
  //                    ] ],

  //     goal:          [ 0, [
  //                      Validators.min(0)
  //                    ] ],

  //     collected:     [ 0, [
  //                      Validators.min(0)
  //                    ] ],

  //     status:        [ '' ],

  //     extUrl:        [ '', [
  //                      Validators.maxLength(256)
  //                    ] ],

  //     description:   [ '', [
  //                      Validators.maxLength(160)
  //                    ] ],

  //     ogTitle:       [ '', [
  //                      Validators.maxLength(160)
  //                    ] ],

  //     ogDescription: [ '', [
  //                      Validators.maxLength(160)
  //                    ] ],

  //     image:         [ null ],
  //     ogImage:       [ null ],

  //     content:       [ '' ],
  //   })
  // }

  // ngOnInit() {
  //   this._route.params.subscribe(params => {

  //     try {
  //       this._id = new UUID(params['id'])
  //     } catch (error) {
  //       this._dialog.open({ title: 'Оштбка', message: 'Неверный ID' })
  //       this._location.back()
  //       return
  //     }

  //     if (!this.isNew)
  //       this._apiService
  //           .get<IICO>(`/${API_BASE}/${this._id}`)
  //           .subscribe( item => {
  //             this.itemForm.patchValue(item)
  //             this.rating = item.rating
  //           })
  //   })
  // }

  // back() {
  //   if (this.itemForm.pristine) {
  //     this._location.back()
  //     return
  //   }

  //   this._dialog.open({
  //     title: 'Форма была изменена',
  //     message: `Возможна потеря данных. Покинуть раздел?`,
  //     buttons: {
  //       'Отмена': false,
  //       'Да': true
  //     }
  //   }).subscribe( result => {
  //     if (result === true)
  //       this._location.back()
  //   })
  // }

  // replaceImage() {
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

  // save() {
  //   if (this.itemForm.invalid)
  //     return

  //   const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._id}`

  //   this._apiService
  //       .post<IICO>(postURL, this.itemForm.value)
  //       .subscribe( _ => this._location.back() )
  // }

  // delete() {
  //   if (this.isNew)
  //     return

  //   this._dialog.open({
  //     title: 'Удалить ICO?',
  //     message: `Вы уверены, что хотите удалить ICO "${this.itemForm.value.title}"?`,
  //     buttons: {
  //       'Отмена': false,
  //       'Удалить': true
  //     }
  //   }).subscribe( result => {
  //     if (result === true)
  //       this._apiService.delete<IICO>(`/${API_BASE}/${this._id}`)
  //                       .subscribe( _ => this._location.back() )
  //   })
  // }
}