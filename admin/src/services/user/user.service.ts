import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { APIService } from '../api'
import {  User } from '@common/models'

import { UUID } from '@core/uuid'

@Injectable()
export class UserService {
  static BaseURL = 'users'

  constructor(private readonly _api: APIService) {}

  list() {
    return this._api.get<Array< Partial<User> >>(`/${UserService.BaseURL}`)
                    .map( items => items.map( item => new User(item) ) )
  }

  get(id: UUID) {
    return this._api.get< Partial<User> >(`/${UserService.BaseURL}/${id}`)
                    .map( item => new User(item) )
  }

  add(data: User) {
    return this._api.post< Partial<User> >(`/${UserService.BaseURL}`, data)
                    .map( item => new User(item) )
  }

  update(data: User) {
    return this._api.post< Partial<User> >(`/${UserService.BaseURL}/${data.id}`, data)
                    .map( item => new User(item) )
  }

  delete(data: User) {
    return this._api.delete(`/${UserService.BaseURL}/${data.id}`)
  }

  otp(data: User) {
    return this._api.get<{secret: string}>(`/${UserService.BaseURL}/${data.id}/otp`)
  }

  resetOTP(data: User) {
    return this._api.post<{secret: string}>(`/${UserService.BaseURL}/${data.id}/otp`, { secret: '' })
  }

  password(data: User, password: string) {
    return this._api.post<{password: string}>(`/${UserService.BaseURL}/${data.id}/password`, { password })
  }
}

