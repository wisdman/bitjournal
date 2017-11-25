
import {
  createHmac,
  randomBytes,
} from 'crypto'

import {
  encode as base32encode,
  decode as base32decode,
} from './base32'

export class OTP {

  private _digits: number
  private _step: number

  private readonly _secret: string

  constructor({
    digits = 6,
    step = 30,
    secret,
    length = 32,
  }:{
    digits?: number
    step?: number
    secret?: string
    length?: number
  } = {}) {
    this._digits = Math.max(Math.floor(digits), 1)
    this._step = Math.max(Math.floor(step), 1)
    this._secret = secret ? secret : randomBytes(Math.max(Math.floor(length), 1)).toString('hex')
  }

  hotpToken(counter: number): string {
    const hexCounter = Number(counter).toString(16).padStart(16, '0')

    const secret = base32decode(this.base32Secret).toString('hex')

    const digest = createHmac('sha1', new Buffer(secret, 'hex') )
                    .update( new Buffer(hexCounter, 'hex') )
                    .digest()

    const offset = digest[digest.length - 1] & 0xf

    const binary = ((digest[offset] & 0x7f) << 24)
                 | ((digest[offset + 1] & 0xff) << 16)
                 | ((digest[offset + 2] & 0xff) << 8)
                 | (digest[offset + 3] & 0xff)

    return String(binary % Math.pow(10, this._digits)).padStart(this._digits, '0')
  }

  hotpCheck(token: string, counter: number): boolean {
    const systemToken = this.hotpToken(counter)

    if (systemToken.length < 1)
      return false

    return Number.parseFloat(token) === Number.parseFloat(systemToken)
  }

  totpToken(): string {
    const counter = Math.floor(Date.now() / this._step / 1000)
    return this.hotpToken(counter)
  }

  totpCheck(token: string) {
    let systemToken = this.totpToken()

    if (systemToken.length < 1)
      return false

    return Number.parseFloat(token) === Number.parseFloat(systemToken)
  }

  get base32Secret(): string {
    return base32encode(this._secret).toString()
                                     .replace(/=/g, '')
  }

  keyuri(user: string = 'User', service: string = 'Service'): string {
    return `otpauth://totp/${service}:${user}?secret=${this.base32Secret}&issuer=${service}`
  }
}
