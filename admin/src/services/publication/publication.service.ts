import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { APIService } from '../api'
import { Publication } from '@common/models'

import { UUID } from '@core/uuid'

@Injectable()
export class PublicationService {
  static BaseURL = 'publications'

  constructor(private readonly _api: APIService) {}

  list() {
    return this._api.get<Array< Partial<Publication> >>(`/${PublicationService.BaseURL}`)
                    .map( items => items.map( item => new Publication(item) ) )
  }

  get(id: UUID) {
    return this._api.get< Partial<Publication> >(`/${PublicationService.BaseURL}/${id}`)
                    .map( item => new Publication(item) )
  }

  add(data: Publication) {
    return this._api.post< Partial<Publication> >(`/${PublicationService.BaseURL}`, data)
                    .map( item => new Publication(item) )
  }

  update(data: Publication) {
    return this._api.post< Partial<Publication> >(`/${PublicationService.BaseURL}/${data.id}`, data)
                    .map( item => new Publication(item) )
  }

  delete(data: Publication) {
    return this._api.delete(`/${PublicationService.BaseURL}/${data.id}`)
  }
}
