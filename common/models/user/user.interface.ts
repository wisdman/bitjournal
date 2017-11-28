/*
 * === User ===
 */

export interface IUser {

  id: string
  enable: boolean
  roles: Array<string>

  url: string | null

  title: string
  description: string

  email: string
  phone: string

  image: number
}

export const IUser_MAIN_FIELDS = [
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

export const IUser_ALL_FIELDS = IUser_MAIN_FIELDS.concat([
  'card'
])
