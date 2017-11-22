/*
 * Path route parser
 */

import {
  ANY_SYMBOLS,
  ANY_SYMBOLS_PATTERN,
  ANY_SYMBOLS_KEY_PATTERN,
  KEY_SYMBOLS,
  KEY_PATTERN,
  START_PATTERN,
  END_PATTERN,
} from './pattern'

import { escapeRegExpString } from './escape-regexp'

export class PathRoute {

  private keys: Array<string> = ['*']
  private pattern: RegExp

  constructor(path: string = '') {
    let patternString = path.split(/\s*\/\s*/)
                            .filter(item => item.length)
                            .map( item => {
                              if (ANY_SYMBOLS.test(item))
                                return ANY_SYMBOLS_PATTERN

                              let key = KEY_SYMBOLS.exec(item)

                              if (!key)
                                return escapeRegExpString(item) // Escape

                              let id = key[1]

                              if (!KEY_PATTERN.test(id))
                                throw TypeError(`Key name "${id}" does not match "${KEY_PATTERN.source}" pattern`)

                              this.keys.push(id)

                              return ANY_SYMBOLS_KEY_PATTERN
                            })
                            .join('(?:\/+)')

    this.pattern = new RegExp(START_PATTERN + patternString + END_PATTERN)
  }

  exec(path: string = ''): { [key: string]: string } | undefined {
    let result = this.pattern.exec(path)
    if (!result)
      return undefined

    return result.reduce( (prev: { [key: string]: string }, item, i) => {
      prev[ this.keys[ i ] ] = item
      return prev
    }, {})
  }
}
