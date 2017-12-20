
import { Model } from '@core/model'
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { Role } from '@common/role'

const URL_REGEXP   = /^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$/
const EMAIL_REGEXP = /^[a-z0-9_\.%+-]+@[a-z0-9_\.-]+?[a-z0-9]$/
const PHONE_REGEXP = /^\+[0-9]{11,15}$/

export const UserModel = new Model({
  enable: input => ({ enable: !!input }),

  roles: input => {
    const result = Role.getArray(input)

    if (result.length === 0)
      throw new Error('roles is empty')

    return { roles: result }
  },

  url: input => {
    const result = String(input || '')
                   .trim()

    if (result && !URL_REGEXP.test(result))
      throw new Error('incorrect url')

    return { url: result || null }
  },

  title: input => {
    const result = String(input || '')
                   .trim()

    if (result.length === 0)
      throw new Error('title is empty')

    return { title: result }
  },

  description: input => ({ description: String(input || '').trim() }),

  email: input => {
    const result = String(input || '')
                   .trim()

    if (result.length === 0)
      throw new Error('email is empty')

    if (!EMAIL_REGEXP.test(result))
      throw new Error('incorrect email')

    return { email: result }
  },

  phone: input => {
    const result = String(input || '')
                   .trim()

    if (result && !PHONE_REGEXP.test(result))
      throw new Error('incorrect phone')

    return { title: result || null }
  },

  image: input => {
    const result = parseInt(input)
    return { image: result > 0 ? result : null }
  },

  statuses: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => new UUID(item) )
                   .filter( item => item.version !== 1 )
                   .map( item => String(item) )

    return { statuses: result }
  },

})
