/*
 * === User ===
 */

import { UUID } from '@core/uuid'
import { UserRoleEnum } from './user-role.enum'

const ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/

export class User {
  static MainFields = [
    'id',
    'enable',
    'roles',
    'url',
    'title',
    'description',
    'email',
    'phone',
    'image',
    'statuses',
  ]

  readonly id: UUID
  readonly enable: boolean
  readonly roles: Array<UserRoleEnum>

  readonly url: string | null

  readonly title: string
  readonly description: string

  readonly email: string
  readonly phone: string | null

  readonly image: number | null

  readonly card: object
  readonly statuses: Array<UUID>

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = !!value.enable

    if (value.roles) {
      const match = ENUM_PG_ARRAY_PATTERN.exec(value.roles)
      const roles = match && match[1].split(',') || value.roles
      this.roles = UserRoleEnum.getArray(roles) as Array<UserRoleEnum>
    } else
      this.roles = new Array<UserRoleEnum>()

    this.url = String(value.url || '').trim() || null

    this.title = String(value.title || '').trim()
    this.description = String(value.description || '').trim()

    this.email = String(value.email || '').trim()
    this.phone = String(value.phone || '').trim() || null

    this.image = Math.max(~~value.image, 0) || null

    this.card = {}

    this.statuses = Array.isArray(value.statuses) ? value.statuses
                                                         .map( (item:any) => new UUID(value && value.id || value) )
                                                         .filter( (item: UUID) => item.version !== null )
                                                  : new Array<UUID>()
  }

  checkRole(roles: Array<UserRoleEnum>): boolean {
    for (let role of roles)
      if (this.roles.includes(role))
        return true

    return false
  }

  get valid(): boolean {
    return this.id !== null
        && this.id.version !== null
  }

  valueOf() {
    return {
      enable: this.enable,

      roles: this.roles,

      url: this.url,

      title: this.title,
      description: this.description,

      email: this.email,
      phone: this.phone,

      image: this.image,

      card: this.card,

      statuses: this.statuses,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      enable: this.enable,

      roles: this.roles,

      url: this.url,

      title: this.title,
      description: this.description,

      email: this.email,
      phone: this.phone,

      image: this.image,

      card: this.card,

      statuses: this.statuses,
    }
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.title
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert User value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'User'
  }
}
