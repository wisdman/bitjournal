/*
 * === User ===
 */

import { UUID } from '@core/uuid'
import { RoleEnum } from './role.enum'

import { IUser } from './user.interface'

import { Rating } from '../rating'

const ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/

export class User implements IUser {
  static AnonymousFields = [
    'id',
    'title',
    'url',
    'image',
    'statuses',
    'rating',
    'bjr',
  ]

  static MainFields = [
    'id',
    'enable',
    'title',
    'email',
    'phone',
    'url',
    'roles',
    'image',
    'statuses',
    'rating',
    'bjr',
  ]

  readonly id: UUID
  readonly enable: boolean

  readonly roles: Array<RoleEnum>

  readonly url: string | null

  readonly title: string
  readonly description: string

  readonly email: string
  readonly phone: string | null

  readonly oauth: object

  readonly image: number | null

  readonly statuses: Array<string | UUID>

  readonly rating: Rating

  readonly bjr: number

  readonly card: object

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = !!value.enable

    if (value.roles) {
      const match = ENUM_PG_ARRAY_PATTERN.exec(value.roles)
      const roles = match && match[1].split(',') || value.roles
      this.roles = RoleEnum.getArray(roles) as Array<RoleEnum>
    } else
      this.roles = new Array<RoleEnum>()

    this.url = String(value.url || '').trim() || null

    this.title = String(value.title || '').trim()
    this.description = String(value.description || '').trim()

    this.email = String(value.email || '').trim()
    this.phone = String(value.phone || '').trim() || null

    this.oauth = {}

    this.image = Math.max(~~value.image, 0) || null

    this.statuses = UUID.getArray(value.statuses)

    this.rating = new Rating(value.rating)

    this.bjr = Math.min(Math.max(~~value.bjr, 0), 5)

    this.card = {}
  }

  checkRole(roles: Array<RoleEnum>): boolean {
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

      roles: this.roles.map( item => item.valueOf() ),

      url: this.url,

      title: this.title,
      description: this.description,

      email: this.email,
      phone: this.phone,

      image: this.image,

      statuses: this.statuses.map( item => item.valueOf() ),

      bjr: this.bjr,

      card: this.card
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

      oauth: this.oauth,

      image: this.image,

      statuses: this.statuses,

      rating: this.rating,

      bjr: this.bjr,

      card: this.card
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
