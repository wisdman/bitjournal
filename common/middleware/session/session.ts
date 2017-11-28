/*
 * Extend session clas with used data
 */

import { Session } from '@core/service'
import { UUID } from '@core/uuid'

import { UserRoleEnum } from '@common/models'

const ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/

export class UserSession extends Session {

  private _userId: UUID | undefined = undefined

  get userId(): UUID | undefined {
    return this._userId
  }

  setUserId(value: any): UUID | undefined {
    this._userId = value && new UUID(value) || undefined
    return this._userId
  }

  private _roles: Array<UserRoleEnum> = []

  get roles(): Array<UserRoleEnum> {
    return this._roles
  }

  setRoles(value: any): Array<UserRoleEnum> {
    let match = ENUM_PG_ARRAY_PATTERN.exec(value)

    if (match)
      value = match[1].split(',')

    this._roles = UserRoleEnum.getArray(value) as Array<UserRoleEnum>
    return this._roles
  }

  checkRole(roles: Array<UserRoleEnum>): boolean {
    for (let role of roles)
      if (this._roles.includes(role))
        return true

    return false
  }

  get isValid(): boolean {
    return this.id.length > 0
        && this._userId instanceof UUID
  }

  valueOf() {
    return Object.assign(super.valueOf(), {
      userId: this._userId,
      roles: this._roles
    })
  }
}
