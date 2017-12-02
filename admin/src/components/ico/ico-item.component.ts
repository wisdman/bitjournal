import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router'
import { UUID } from '@core/uuid'

import {
  APIService,
  DialogService,
} from '../../services'

const ROUTE_BASE = 'ico'

@Component({
  selector: 'ico-item',
  templateUrl: './ico-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ICOItemComponent {

  private _id: UUID = new UUID(null)

  get isNew() {
    return this._id.version === null
  }

  itemForm: FormGroup

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _apiService: APIService,
    private readonly _dialog: DialogService
  ) {
    this.itemForm = this._fb.group({
      enable:        [true, Validators.required],

      title:         ['', Validators.required ],
      description:   [''],
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      try {
        this._id = new UUID(params['id'])
      } catch (error) {
        this._dialog.open({ title: 'Оштбка', message: 'Неверный ID' })
        this._router.navigate([ROUTE_BASE])
        return
      }

      if (!this.isNew)
        this._apiService.get<any>(`/${ROUTE_BASE}/${this._id}`).subscribe( (item: any) => {
          this.itemForm.patchValue(item)
        })
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${ROUTE_BASE}` : `/${ROUTE_BASE}/${this._id}`

    this._apiService.post<any>(postURL, this.itemForm.value)
                    .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
  }

  delete() {
    if (this.isNew)
      return

    this._dialog.open({
      title: 'Удалить ICO?',
      message: `Вы уверены, что хотите удалить ICO "${this.itemForm.value.title}"?`,
      buttons: {
        'Отмена': false,
        'Удалить': true
      }
    }).subscribe( result => {
      if (result === true)
        this._apiService.delete(`/${ROUTE_BASE}/${this._id}`)
                        .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
    })
  }
}
