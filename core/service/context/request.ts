/*
 * HTTP Request wrapper
 */

import { Socket } from 'net'
import { IncomingMessage, IncomingHttpHeaders } from 'http'
import { StringDecoder, NodeStringDecoder } from 'string_decoder'
import { parse as QuerystringParse } from 'querystring'

import { HttpError } from '../error'
import { Context } from './context'

export class Request {

  constructor(readonly req: IncomingMessage, private _ctx: Context) {}

  getHeader(key: string): string | undefined {
    let value = this.req.headers[key.toLowerCase()]
    return Array.isArray(value) ? value.join(';') : value
  }

  get socket(): Socket {
    return this.req.socket
  }

  get ip(): string {
    return this.getHeader('X-Real-IP') || this.getHeader('X-Forwarded-For') || this.req.connection.remoteAddress || ''
  }

  get host(): string {
    let host = this.getHeader('X-Forwarded-Host') || this.getHeader('Host')
    return host && host.split(/\s*,\s*/)[0] || ''
  }

  get hostname(): string {
    if (!this.host)
      return ''

    if (this.host[0] === '[') { // IPv6
      let hostname = /^\[[a-f0-9:]+\]/.exec(this.host)
      return hostname && hostname[0] || ''
    }

    return this.host.split(':')[0] || ''
  }

  get port(): number {
    let port = /\:([0-9]+)$/.exec(this.host)
    return port && ~~port[1] || 80
  }

  get method(): string {
    return (this.req.method || '').toUpperCase()
  }

  get path(): string {
    return this.req.url || ''
  }

  get pathname(): Array<string> {
    return (this.req.url || '').split('?')[0]
                               .split(/\/+/)
                               .filter( item => !!item )
  }

  get query(): { [key: string]: string | Array<string> } {
    let query = (this.req.url || '').split('?')
                                    .slice(1)
                                    .join('?')
    return QuerystringParse(query)
  }

  get type(): string | undefined {
    let type = this.getHeader('Content-Type')
    if (typeof type !== 'string')
      return undefined
    return type.split(';')[0].trim()
  }

  get length(): number {
    return ~~(this.getHeader('content-length') || '')
  }

  async raw(): Promise<Buffer> {
    const contentLength: number = this.length

    return new Promise<Buffer>( (resolve, reject) => {
      let buffer: Buffer = Buffer.alloc(0)

      // === Stream events ===
      const onAborted = () => {
        cleanup()
        reject(new HttpError(400, 'Request aborted'))
      }

      const onError = (error: Error) => {
        cleanup()
        reject(new HttpError(400, 'Receive data error'))
      }

      const onData = (chunk: Buffer) => {
        buffer = Buffer.concat([buffer, chunk])
      }

      const onEnd = () => {
        cleanup()
        if (contentLength > 0 && buffer.length !== contentLength) {
          reject(new HttpError(400, 'Request size did not match content length'))
        }
        resolve(buffer)
      }

      const onClose = () => {
        cleanup()
      }

      // === Cleanup stream ===
      var cleanup = () => {
        this.req.removeListener('aborted', onAborted)
        this.req.removeListener('end',     onError)
        this.req.removeListener('data',    onData)
        this.req.removeListener('error',   onEnd)
        this.req.removeListener('close',   onClose)
        this.req.unpipe()
      }

      // === Bind stream events ===
      this.req.on('aborted', onAborted)
      this.req.on('error',   onError)
      this.req.on('data',    onData)
      this.req.on('end',     onEnd)
      this.req.on('close',   onClose)

    })
  }

  async text(): Promise<string> {
    let raw = await this.raw()

    try {
      let decoder = new StringDecoder('utf8')
      return decoder.end(raw)
    } catch (error) {
      throw new HttpError(400, 'Receive data is not a UTF8 string', error)
    }
  }

  async json<T>(): Promise<T> {
    if (this.type !== 'application/json') {
      throw new HttpError(400, 'Only application/json data are allowed')
    }

    let text = await this.text()

    try {
      return JSON.parse(text) as T
    } catch (err) {
      throw new HttpError(400, 'Invalid json received')
    }
  }

  valueOf() {
    return {
      heders:   this.req.headers,
      ip:       this.ip,
      host:     this.host,
      hostname: this.hostname,
      port:     this.port,
      method:   this.method,
      path:     this.path,
      pathname: this.pathname,
      query:    this.query,
      type:     this.type,
      length:   this.length
    }
  }

  toJSON() {
    return this.valueOf()
  }
}
