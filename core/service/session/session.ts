/*
 * HTTP Session context
 */

import { Context } from '../context'

import { Roles } from './roles'
import { ISession } from './session.interface'

const SESSION_ID_REGEXP = /^[0-9a-z]+$/

export class Session {

  get ip(): string {
    return this._ctx.request.ip
  }

  private _id: string = ''

  get id(): string {
    return this._id
  }

  set id(input: string) {
    const value = String(input).toLowerCase().trim()

    if ( !SESSION_ID_REGEXP.test(value) )
      throw new TypeError('Incorrect session id value')

    this._id = value
  }

  readonly data: { [key: string]: any } = {}

  readonly roles: Roles = new Roles()

  constructor(private _ctx: Context) {}

  set({
    id,
    roles,
    data,
  } : ISession = {}){
    if (id !== undefined)
      this.id = id

    if (roles !== undefined)
      this.roles.set(roles)

    if (data !== undefined) {

      for (let key in this.data)
        delete this.data[key]

      Object.assign(this.data, data)
    }
  }

  reset() {
    this.set()
  }

  valueOf() {
    return {
      ip: this.ip,
      id: this.id,
      data: this.data,
      roles: this.roles.valueOf(),
    }
  }

  toJSON(): any {
    return this.valueOf()
  }
}
