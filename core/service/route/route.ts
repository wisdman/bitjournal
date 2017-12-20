/*
 * HTTP Route context
 */

import { Context } from '../context'

export class Route {

  finished: boolean = false

  data: { [key: string]: string } = {}

  get method(): string {
    return this._ctx.request.method
  }

  get path(): string {
    return this._ctx.request.path
  }

  get pathname(): string {
    return '/' + this._ctx.request.pathname.join('/')
  }

  get query(): { [key: string]: string | Array<string> } {
    return this._ctx.request.query
  }

  constructor(private _ctx: Context) {}

  valueOf() {
    return {
      finished: this.finished,
      data:     this.data,
      method:   this.method,
      path:     this.path,
      pathname: this.pathname,
      query:    this.query,
    }
  }

  toJSON(): any {
    return this.valueOf()
  }
}
