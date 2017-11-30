/*
 * Extend session clas with used data
 */

import { Context } from '@core/service'
import { UUID } from '@core/uuid'

import {
  UserRoleEnum,
  User,
} from '@common/models'

const SESSION_ID_REGEXP = /^[0-9a-z]{128}$/
const SESSION_TOKEN_REGEXP = /token\s+([0-9a-f]{128})/

export class Session  {

  private _id: string = ''

  get id(): string {
    return this._id
  }

  set id(id: string) {
    this._id = SESSION_ID_REGEXP.test(id) ? id : ''
  }

  private _user: User | null = null

  get user(): User | null {
    return this._user
  }

  set user(value: User | null) {
    if (!value)
      this._user = null
    else
      this._user = value instanceof User ? value : new User(value)
  }

  get ip() {
    return this._ctx.request.ip
  }

  get valid(): boolean {
    return this.id.length > 0
        && this._user instanceof User
        && this._user.id !== null
        && this._user.enable
  }

  get invalid(): boolean {
    return !this.valid
  }

  constructor(private _ctx: Context) {
    const id = SESSION_TOKEN_REGEXP.exec(_ctx.request.getHeader('Authorization') || '')
    this._id = id && id[1] || ''
  }

  valueOf() {
    return {
      id: this._id,
      user: this._user
    }
  }

  toJSON(): any {
    return this.valueOf()
  }
}
