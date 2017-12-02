import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router'

import {
  APIService,
  DialogService,
} from '../../services'

const ROUTE_BASE = 'currencies'

@Component({
  selector: 'currency-item',
  templateUrl: './currency-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CurrencyItemComponent implements OnInit {

  private _symbol: string = '000'

  get isNew() {
    return /^0+$/.test(this._symbol)
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

      symbol:        ['', Validators.required],

      title:         ['', Validators.required ],
      description:   [''],
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {

      this._symbol = params['symbol']

      if (!this.isNew)
        this._apiService.get<any>(`/${ROUTE_BASE}/${this._symbol}`)
                        .subscribe( (item: any) => this.itemForm.patchValue(item) )
    })
  }

  save() {
    if (this.itemForm.invalid)
      return

    const postURL = this.isNew ? `/${ROUTE_BASE}` : `/${ROUTE_BASE}/${this._symbol}`

    this._apiService.post<any>(postURL, this.itemForm.value)
                    .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
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
        this._apiService.delete(`/${ROUTE_BASE}/${this._symbol}`)
                        .subscribe( _ => this._router.navigate([ROUTE_BASE]) )
    })
  }
}
