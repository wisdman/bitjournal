/*
 * === User ===
 */

import { Model, Main, Input, Output, ToJSON } from '@core/model'

import { UUID } from '@core/uuid'

import { UserRole } from './user-role'

export class User extends Model {

  @Main()
  @Input(value => new UUID(value))
  @Output()
  @ToJSON()
  id: UUID

  @Main()
  @Input(value => typeof value === 'boolean' ? value : true)
  @Output()
  @ToJSON()
  enable: boolean

  @Main()
  @Input(value => {
    if (typeof value === 'string' && value[0] === '{')
      return UserRole.parsePgArray(value)

    return [].concat(value)
      .map( (item: any) => UserRole.get(item) )
      .filter( item => item instanceof UserRole )
  })
  @Output()
  @ToJSON()
  roles: Array<UserRole>

  @Main()
  @Input(value => String(value || ''))
  @Output()
  @ToJSON()
  title: string

  @Input(value => String(value || ''))
  @Output()
  @ToJSON()
  description: string

  @Main()
  @Input(value => String(value || ''))
  @Output()
  @ToJSON()
  email: string

  @Main()
  @Input(value => String(value || ''))
  @Output()
  @ToJSON()
  phone: string

  toString(): string {
    return this.title
  }
}
