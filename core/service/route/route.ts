/*
 * HTTP Route context
 */

import { Context } from '../context'

export class Route {
  constructor(private ctx: Context) {}

  get method(): string {
    return this.ctx.request.method
  }

  get path(): string {
    return this.ctx.request.path
  }

  get pathname(): Array<string> {
    return this.ctx.request.pathname
  }

  get query(): { [key: string]: string | Array<string> } {
    return this.ctx.request.query
  }

  finished: boolean = false

  data: { [key: string]: string } = {}

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
