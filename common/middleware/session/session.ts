/*
 * Extend session clas with used data
 */

import { Session } from '@core/service'
import { UUID } from '@core/uuid'

import {
  UserRoleEnum,
  User,
} from '@common/models'

export class UserSession extends Session {

  private _user: User | null = null

  get user(): User | null {
    return this._user
  }

  setUser(value: any): User | null {
    let user = new User(value)
    this._user = user.id.value !== null ? user : null
    return this._user
  }

  checkRole(roles: Array<UserRoleEnum>): boolean {
    if (!this._user)
      return false

    for (let role of roles)
      if (this._user.roles.includes(role))
        return true

    return false
  }

  get isValid(): boolean {
    return this.id.length > 0
        && this._user instanceof User
        && this._user.id.value !== null
  }

  valueOf() {
    return Object.assign(super.valueOf(), {
      user: this._user
    })
  }
}
