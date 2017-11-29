import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { APIService } from '../api'
import { Section } from '@common/models'

import { UUID } from '@core/uuid'

@Injectable()
export class SectionService {
  static BaseURL = 'sections'

  constructor(private readonly _api: APIService) {}

  list() {
    return this._api.get<Array<Partial<Section>>>(`/${SectionService.BaseURL}`)
                    .map( items => items.map( item => new Section(item) ) )
  }

  get(id: UUID) {
    return this._api.get< Partial<Section> >(`/${SectionService.BaseURL}/${id}`)
                    .map( item => new Section(item) )
  }

  add(data: Section) {
    return this._api.post< Partial<Section> >(`/${SectionService.BaseURL}`, data)
                    .map( item => new Section(item) )
  }

  update(data: Section) {
    return this._api.post< Partial<Section> >(`/${SectionService.BaseURL}/${data.id}`, data)
                    .map( item => new Section(item) )
  }

  delete(data: Section) {
    return this._api.delete(`/${SectionService.BaseURL}/${data.id}`)
  }
}
