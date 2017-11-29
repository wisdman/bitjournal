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
  ]

  id: UUID
  enable: boolean
  roles: Array<UserRoleEnum>

  url: string | null

  title: string
  description: string

  email: string
  phone: string | null

  image: number | null

  card: object

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

    this.title = String(value.title || '')
    this.description = String(value.description || '')

    this.email = String(value.email || '').trim()
    this.phone = String(value.phone || '').trim() || null

    this.image = Math.max(~~value.image, 0) || null

    this.card = {}
  }

  [Symbol.toStringTag]() {
    return 'User'
  }
}
