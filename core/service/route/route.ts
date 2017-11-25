/*
 * HTTP Route context
 */

import { Context } from '../context'

export class Route {

  readonly method: string
  readonly path: string
  readonly pathname: string
  readonly query: { [key: string]: string | Array<string> }

  finished: boolean = false

  data: { [key: string]: string } = {}

  constructor(ctx: Context) {
    this.method   = ctx.request.method
    this.path     = ctx.request.path
    this.pathname = '/' + ctx.request.pathname.join('/')
    this.query    = ctx.request.query
  }

  valueOf() {
    return {
      method:   this.method,
      path:     this.path,
      pathname: this.pathname,
      query:    this.query,
      finished: this.finished,
      data:     this.data,
    }
  }

  toJSON(): any {
    return this.valueOf()
  }
}
