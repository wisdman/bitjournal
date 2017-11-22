import v1 from './v1'
import v4 from './v4'

import {
  UUIDv1_REGEXP,
  UUIDv4_REGEXP,
  UUIDnil_REGEXP,
  UUIDnil_PATTERN,
} from './patterns'

export class UUID {

  readonly version: null | 1 | 4
  readonly uuid: string

  constructor(uuid: UUID | string | null | 1 | 4  = null) {

    if (uuid instanceof UUID) {
      this.version = uuid.version
      this.uuid = uuid.uuid
      return this
    }

    if (typeof uuid === 'string') {
      let value = uuid.toLowerCase()

      if ( UUIDnil_REGEXP.test(value) ) {
        this.version = null
        this.uuid = value
        return this
      }

      if ( UUIDv1_REGEXP.test(value) ) {
        this.version = 1
        this.uuid = value
        return this
      }

      if ( UUIDv4_REGEXP.test(value) ) {
        this.version = 4
        this.uuid = value
        return this
      }

      throw new Error(`UUID "${uuid}" does not match the UUID string`)
    }

    if (uuid === null) {
      this.version = null
      this.uuid = UUIDnil_PATTERN
      return this
    }

    if (uuid === 1) {
      this.version = 1
      this.uuid = v1()
      return this
    }

    if (uuid === 4) {
      this.version = 4
      this.uuid = v1()
      return this
    }

    throw new Error(`Illegal UUID version of "${uuid}"`)
  }

  get value(): string {
    return this.uuid
  }

  valueOf(): any {
    return this.uuid
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.uuid
  }

  toJSON(): any {
    return this.uuid
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'default':
        return this.valueOf()
      case 'number':
        return this.toNumber()
      case 'string':
        return this.toString()
      default:
        throw new TypeError('Cannot convert UUID value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'UUID'
  }
}
