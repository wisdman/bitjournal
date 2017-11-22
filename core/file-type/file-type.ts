/*
 * Detect the file type of a Buffer/Uint8Array, use magic number
 */

import MAGIC from './magic'

export class FileType {
  readonly extension: string
  readonly mime: string

  constructor(input: Buffer | Uint8Array) {
    const buffer = (input instanceof Uint8Array) ? input : new Uint8Array(input)

    if (buffer.length <= 1)
      return this

    for (let pattern of MAGIC)
      if (this.check(buffer, pattern.header, pattern.offset)) {
        this.mime = pattern.mime
        this.extension = pattern.extension
        return this
      }

    this.mime = 'application/octet-stream'
    this.extension = ''
  }

  private check(buffer: Uint8Array, header: Uint8Array, offset: number = 0) {
    for (let i = 0; i < header.length; i++)
      if (header[i] !== buffer[i + offset])
        return false

    return true
  }

  toJSON() {
    return {
      extension: this.extension,
      mime: this.mime,
    }
  }

  toString() {
    return this.mime
  }

  [Symbol.toPrimitive](hint : 'default' | 'string' | 'number') {
    switch (hint) {
      case 'number':
        throw new TypeError('Cannot convert a FileType value to a number value')
      case 'string':
      case 'default':
        return this.mime
      default:
        throw new TypeError('Cannot convert a FileType value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'FileType'
  }
}
