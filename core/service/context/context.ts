/*
 * HTTP context
 */

import { IncomingMessage, ServerResponse, } from 'http'

import { EventEmitter } from 'events'

import { HttpError } from '../error'
import { Request } from './request'
import { Response, IBody } from './response'

import { logError } from '../log-error'

export class Context {

  [key: string]: any

  readonly request:  Request
  readonly response: Response

  constructor(req: IncomingMessage, res: ServerResponse) {
    try {
      this.request  = new Request(req)
      this.response = new Response(res)
    } catch (error) {
      this.throw(error)
    }
  }

  get finished(): boolean {
    return this.response.finished
  }

  set(status?: number | IBody, value?: IBody): void {
    this.response.set(status, value)
  }

  respond(): void {
    this.response.respond()
  }

  end(status?: number | IBody, value?: IBody): void {
    this.response.end(status, value)
  }

  throw(error: Error) {
    if (error instanceof HttpError)
      this.end(error.status, error.message)
    else
      this.end(500)

    logError(error, this)
  }

  valueOf() {
    return {
      request:  this.request.valueOf(),
      response: this.response.valueOf(),
    }
  }

  toJSON() {
    return this.valueOf()
  }
}
