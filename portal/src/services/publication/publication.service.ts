import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'

import { APIService } from '../api'

import { IPublication } from '@common/models'
import { IPublicationItem } from './publication-item.interface'

const API_BASE = 'publications'

@Injectable()
export class PublicationService {

  private isServer: boolean

  constructor(
    private readonly _api: APIService
  ) {}

  get(): Observable< Array <IPublicationItem> > {
    return this._api
               .get< Array<IPublication> >(`/${API_BASE}`)
               .map( items => items.filter( item => item.enable) )

  }
}
