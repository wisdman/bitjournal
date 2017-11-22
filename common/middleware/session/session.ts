/*
 * Extend session clas with used data
 */

import { Session } from '@core/service'
import { User } from '@common/models'

export class UserSession extends Session {
  user: User | undefined = undefined

  get isValid(): boolean {
    return this.id.length > 0
        && !!this.user
  }

  valueOf() {
    return Object.assign(super.valueOf(), { user: this.user })
  }
}
