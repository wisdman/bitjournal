
import { UUID } from '@core/uuid'
import { Timestamp } from '@core/timestamp'

import { BlockEnum } from './block.enum'

import { IAds } from './ads.interface'
import { ILimits } from './limits.interface'
import { IStats } from './stats.interface'

const ENUM_PG_ARRAY_PATTERN = /^\{([a-z0-9,]+)\}$/
const DATE_REGEXP = /^\d{4}-\d{2}-\d{3}$/

export class Ads implements IAds {
  static MainFields = [
    'id',
    'enable',
    'blocks',
    'title',
    'startDate',
    'endDate',
  ]

  readonly id: UUID
  readonly enable: boolean

  readonly blocks: Array<BlockEnum>

  readonly title: string
  readonly description: string

  readonly url: string

  readonly startDate: Timestamp
  readonly endDate: Timestamp

  readonly content: string
  readonly files: Array<number>

  readonly limits: ILimits
  readonly stats: IStats

  constructor(value: any = {}) {
    if (!value)
      value = {}

    this.id = new UUID(value.id || null)

    this.enable = value.enable === undefined ? true : !!value.enable

    if (value.blocks) {
      const match = ENUM_PG_ARRAY_PATTERN.exec(value.blocks)
      const blocks = match && match[1].split(',') || value.blocks
      this.blocks = BlockEnum.getArray(blocks) as Array<BlockEnum>
    } else
      this.blocks = new Array<BlockEnum>()

    this.title = String(value.title || '').trim()
    this.description = String(value.description || '').trim()

    this.url = String(value.url || '').trim()

    this.startDate = new Timestamp(value.startDate)
    this.endDate = new Timestamp(value.endDate)

    this.content = String(value.content || '').trim()

    this.files = Array.isArray(value.files) ? value.files
                                                   .map( (item:any) => Math.max(~~value.collected, 0) )
                                                   .filter( (item: number) => item > 0 )
                                            : new Array<number>()

    this.limits =
      typeof value.limits === 'object' ? {
        show:         Math.max(~~value.limits.show,         0),
        showPerDay:   Math.max(~~value.limits.showPerDay,   0),
        showPerUser:  Math.max(~~value.limits.showPerUser,  0),
        click:        Math.max(~~value.limits.click,        0),
        clickPerDay:  Math.max(~~value.limits.clickPerDay,  0),
        clickPerUser: Math.max(~~value.limits.clickPerUser, 0),
      } : {
        show:         0,
        showPerDay:   0,
        showPerUser:  0,
        click:        0,
        clickPerDay:  0,
        clickPerUser: 0,
      }

    this.stats = {}

    if (value.stats === 'object')
      for( let key in value.stats) {
        key = String(key).trim()
        if (DATE_REGEXP.test(key))
          this.stats[key] = {
            show:  Math.max(~~value.stats[key].show,  0),
            click: Math.max(~~value.stats[key].click, 0),
          }
      }
  }

  valueOf() {
    return {
      enable: this.enable,

      blocks: this.blocks.map( item => item.valueOf() ),

      title: this.title,
      description: this.description,

      url: this.url,

      startDate: this.startDate,
      endDate: this.startDate,

      content: this.content,
      files: this.files,

      limits: this.limits,
    }
  }

  toJSON(): any {
    return {
      id: this.id,

      enable: this.enable,

      blocks: this.blocks,

      title: this.title,
      description: this.description,

      url: this.url,

      startDate: this.startDate,
      endDate: this.startDate,

      content: this.content,
      files: this.files,

      limits: this.limits,
      stats: this.stats,
    }
  }

  toNumber(): number {
    return NaN
  }

  toString(): string {
    return this.title
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
        throw new TypeError('Cannot convert Ads value to unknown value')
    }
  }

  [Symbol.toStringTag]() {
    return 'Ads'
  }
}
