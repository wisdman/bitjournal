
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'
import { Role } from '@common/role'
import { Rating } from '@common/rating'


export interface IUser {
  id: string | UUID
  enable: boolean

  roles: Array< string | Role>

  url: string | null

  title: string
  description: string

  email: string
  phone: string | null

  image: number | null

  statuses: Array<string | UUID>

  rating: Rating

  lastsLogin?: string | Timestamp
}

export interface IPartialUser extends Partial<IUser> {
  [key: string]: any
}

