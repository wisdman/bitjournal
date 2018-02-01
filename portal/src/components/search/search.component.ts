import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { OverlayRef } from '@angular/cdk/overlay'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/switchMap'

import { APIService } from '../../services'

import {
  IPublication,
  PUBLICATIONS_API_PATH
} from '@common/publication'

@Component({
  selector: '.bj-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {

  searchForm: FormGroup

  query = new FormControl()
  publications: Observable< Array<IPublication> >

  inProgress: boolean = false

  constructor(
    private readonly _overlayRef: OverlayRef,
    private readonly _api: APIService,
  ) {
    this.searchForm = new FormGroup({
       query: new FormControl()
    })

    this.publications = this.searchForm
                            .controls
                            .query
                            .valueChanges
                            .debounceTime(500)
                            .switchMap( (query: string) => {
                              if (query.length < 3) {
                                this.inProgress = false
                                return Observable.of([])
                              }

                              this.inProgress = true

                              return this._api
                                         .get< Array<IPublication> >(`${PUBLICATIONS_API_PATH}`, { q:query })
                                         .map( result => {
                                           this.inProgress = false
                                           return result
                                         })

                            }) as Observable< Array<IPublication> >

  }

  close() {
    this._overlayRef.dispose()
  }
}

