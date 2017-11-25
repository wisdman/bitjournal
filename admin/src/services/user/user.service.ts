import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { APIService } from '../api'
import { IUser } from './user.interface'

@Injectable()
export class UserService {

  constructor(private readonly _api: APIService) {}

  list() {
    return this._api.get<IUser>('/users')
                    // .map( item => cons )
  }
}
