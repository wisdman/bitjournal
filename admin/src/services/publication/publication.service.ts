import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { APIService } from '../api'
import { IPublication } from './publication.interface'

@Injectable()
export class PublicationService {

  constructor(private readonly _api: APIService) {}

  list() {
    return this._api.get<IPublication>('/publications')
                    // .map( item => cons )
  }
}
