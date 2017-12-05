

import { IRating } from '../rating'

import { RoleEnum } from './role.enum'

import { Timestamp } from '@core/timestamp'
import { UUID } from '@core/uuid'

export interface IUser {
  id: string | UUID
  enable: boolean

  roles: Array<RoleEnum>

  url: string | null

  title: string
  description: string

  email: string
  phone: string | null

  oauth: object

  image: number | null

  statuses: Array<string | UUID>

  rating: IRating

  bjr: number

  card: object
}
