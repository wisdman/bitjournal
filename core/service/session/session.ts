
import { Context } from '../context'
import { SESSION_ID_STRONG_REGEXP } from './pattern'

export class Session {

  constructor(private ctx: Context) {}

  private _id: string = ''

  get id(): string {
    return this._id
  }

  set id(id: string) {
    this._id = SESSION_ID_STRONG_REGEXP.test(id) ? id : ''
  }

  get ip() {
    return this.ctx.request.ip
  }

  get isValid(): boolean {
    return this.id.length > 0
  }

  get isInvalid(): boolean {
    return !this.isValid
  }

  valueOf() {
    return {
      id: this.id,
      ip: this.ip,
      isValid: this.isValid
    }
  }

  toJSON(): any {
    return this.valueOf()
  }
}
