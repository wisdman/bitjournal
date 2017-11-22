/*
 * HTTP Response wrapper
 */

import { ServerResponse, OutgoingHttpHeaders, STATUS_CODES } from 'http'
import { FileType } from '@core/file-type'

export type IBody = null | undefined | string | Buffer | object

export class Response {

  private _body: null | undefined | string | Buffer

  constructor(readonly res: ServerResponse) {
    this.set(404)
  }

  get finished(): boolean {
    return this.res.finished
  }

  hasHeader(key: string): boolean {
    return this.res.hasHeader(key)
  }

  getHeader(key: string): string | number | undefined {
    let value = this.res.getHeader(key)
    return Array.isArray(value) ? value.join(';') : value
  }

  setHeader(key: string, value: string | number) {
    this.res.setHeader(key, value)
  }

  removeHeader(key: string) {
    return this.res.removeHeader(key)
  }

  flushHeaders() {
    return this.res.flushHeaders()
  }

  get type(): string | undefined {
    let type = this.getHeader('Content-Type')
    if (typeof type !== 'string')
      return undefined
    return type.split(';')[0].trim()
  }

  get length() {
    return ~~(this.getHeader('Content-Length') || '')
  }

  get status(): number {
    return this.res.statusCode
  }

  get body(): null | undefined | string | Buffer {
    return this._body
  }

  set(status?: number | IBody, value?: IBody): void {
    if (this.finished)
      return

    if (this.res.headersSent)
      throw new Error('Headears was sended')

    // If status is IBody value
    if (typeof status !== 'number') {
      value = status
      status = undefined
    }

    // Content is undefined
    if (value === undefined || value === null) {
      this.res.statusCode = status || 404
      this._body = STATUS_CODES[this.res.statusCode]
      this.removeHeader('Content-Type')
      this.removeHeader('Content-Length')
      this.removeHeader('Transfer-Encoding')
      return
    }

    // Content is null (empty response)
    if (value === null) {
      this.res.statusCode = status || 204
      this._body = null
      this.removeHeader('Content-Type')
      this.removeHeader('Content-Length')
      this.removeHeader('Transfer-Encoding')
      return
    }

    // Set default status
    this.res.statusCode = status || 200

    // string contenet (html or plain)
    if (typeof value === 'string') {
      this._body = value
      this.setHeader('Content-Type', (/^\s*</.test(value) ? 'text/html' : 'text/plain') + '; charset=utf-8' )
      this.setHeader('Content-Length', Buffer.byteLength(value))
      return
    }

    // buffer
    if (Buffer.isBuffer(value)) {
      let type = new FileType(value)
      this._body = value
      this.setHeader('Content-Type', type.mime || 'application/octet-stream' )
      this.setHeader('Content-Length', value.length)
      return
    }

    // JSON
    if (typeof value === 'object') {
      let jsonString = JSON.stringify(value)
      this._body = jsonString
      this.setHeader('Content-Type', 'application/json; charset=utf-8')
      this.setHeader('Content-Length', Buffer.byteLength(jsonString))
      return
    }

    throw TypeError('Unknown response body type')
  }

  respond(): void {
    if (this.finished)
      return

    if (this._body === null || this._body === undefined) {
      this.res.end()
      return
    } else {
      this.res.end(this._body)
    }
  }

  end(status?: number | IBody, value?: IBody): void {
    this.set(status, value)
    this.respond()
  }

  valueOf() {
    return {
      heders: this.res.getHeaders(),
      status: this.status,
      type:   this.type,
      length: this.length,
      body:   this.body
    }
  }

  toJSON() {
    return this.valueOf()
  }
}
