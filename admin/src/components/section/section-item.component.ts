import { Component, ViewEncapsulation, OnInit, isDevMode } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
} from '../../services'

import { ISection } from '@common/models'

const API_BASE = 'sections'
const ROUTE_BASE = 'sections'

const URL_PATTERN = /^[a-z0-9]([a-z0-9_-]*[a-z0-9])?(\/[a-z0-9]([a-z0-9_-]*[a-z0-9])?)?$/

@Component({
  selector: 'section-item',
  templateUrl: './section-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SectionItemComponent implements OnInit {

  get DEBUG(): boolean {
    return isDevMode()
  }

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
    private readonly _location: Location
  ) {
    this.itemForm = this._fb.group({
      enable:        [ true, [
                       Validators.required
                     ] ],

      url:           [ '', [
                       Validators.required,
                       Validators.maxLength(256),
                       Validators.pattern(URL_PATTERN)
                     ] ],

      title:         [ '', [
                       Validators.required
                     ] ],

      description:   [ '' ],

      ogTitle:       [ '' ],
      ogDescription: [ '' ],

      image:         [ null ],
      ogImage:       [ null ],
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
            .get<ISection>(`/${API_BASE}/${this._id}`)
            .subscribe( item => {
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

    const postURL = this.isNew ? `/${API_BASE}` : `/${API_BASE}/${this._id}`

    this._apiService
        .post<ISection>(postURL, this.itemForm.value)
        .subscribe( _ => this._location.back() )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить раздел?',
      message: `Вы уверены, что хотите удалить раздел "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete<ISection>(`/${ROUTE_BASE}/${this._id}`)
                        .subscribe( _ => this._location.back() )
    })
  }
}
