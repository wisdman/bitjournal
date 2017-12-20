/*
 * HTTP context
 */

import { Debug } from '@core/debug'

import { IncomingMessage, ServerResponse, } from 'http'

import { EventEmitter } from 'events'

import { HttpError } from '../error'
import { Request } from './request'
import { Response, IBody } from './response'
import { Route } from '../route'
import { Session } from '../session'

import { logError } from '../log-error'

export class Context {

  [key: string]: any

  readonly request  :  Request
  readonly response : Response
  readonly route    : Route
  readonly session  : Session

  readonly debug = new Debug('Service')

  constructor(req: IncomingMessage, res: ServerResponse) {
    try {
      this.request  = new Request(req, this)
      this.response = new Response(res, this)
      this.route    = new Route(this)
      this.session  = new Session(this)
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
      route:    this.route.valueOf(),
      session:  this.session.valueOf(),
    }
  }

  toJSON() {
    return this.valueOf()
  }
}
