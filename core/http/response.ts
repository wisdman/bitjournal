/*
 * HTTP Request wrapper
 */

import { Socket } from 'net'
import { IncomingMessage } from 'http'
import { StringDecoder, NodeStringDecoder } from 'string_decoder'
import { parse as QuerystringParse } from 'querystring'

export class Response {

  constructor(private res: IncomingMessage) {}

  getHeader(key: string): string | undefined {
    let value = this.res.headers[key.toLowerCase()]
    return Array.isArray(value) ? value.join(';') : value
  }

  get socket(): Socket {
    return this.res.socket
  }

  get ip(): string {
    return this.res.connection.remoteAddress || ''
  }

  get status(): number | undefined {
    return this.res.statusCode
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
        reject(new Error('Request aborted'))
      }

      const onError = (error: Error) => {
        cleanup()
        reject(new Error('Receive data error'))
      }

      const onData = (chunk: Buffer) => {
        buffer = Buffer.concat([buffer, chunk])
      }

      const onEnd = () => {
        cleanup()
        if (contentLength > 0 && buffer.length !== contentLength) {
          reject(new Error('Request size did not match content length'))
        }
        resolve(buffer)
      }

      const onClose = () => {
        cleanup()
      }

      // === Cleanup stream ===
      var cleanup = () => {
        this.res.removeListener('aborted', onAborted)
        this.res.removeListener('end',     onError)
        this.res.removeListener('data',    onData)
        this.res.removeListener('error',   onEnd)
        this.res.removeListener('close',   onClose)
        this.res.unpipe()
      }

      // === Bind stream events ===
      this.res.on('aborted', onAborted)
      this.res.on('error',   onError)
      this.res.on('data',    onData)
      this.res.on('end',     onEnd)
      this.res.on('close',   onClose)

    })
  }

  async text(): Promise<string> {
    let raw = await this.raw()

    try {
      let decoder = new StringDecoder('utf8')
      return decoder.end(raw)
    } catch (error) {
      throw new Error('Receive data is not a UTF8 string')
    }
  }

  async json(): Promise<object> {
    if (this.type !== 'application/json') {
      throw new Error('Only application/json data are allowed')
    }

    let text = await this.text()

    try {
      return JSON.parse(text)
    } catch (err) {
      throw new Error('Invalid json received')
    }
  }

  valueOf() {
    return {
      ip:       this.ip,
      type:     this.type,
      length:   this.length
    }
  }

  toJSON() {
    return this.valueOf()
  }
}
