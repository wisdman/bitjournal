
import { Model } from '@core/model'
import { Timestamp } from '@core/timestamp'

import { Block } from '@common/block'

export const AdsModel = new Model({
  enable: input => ({ enable: !!input }),

  blocks: input => {
    const result = Block.getArray(input)
                   .map( item => String(item) )

    if (result.length === 0)
      throw new Error('blocks is empty')

    return { blocks: result }
  },

  title: input => {
    const result = String(input || '')
                   .trim()

    if (result.length === 0)
      throw new Error('title is empty')

    return { title: result }
  },

  description: input => ({ description: String(input || '').trim() }),

  url: input => {
    const result = String(input || '')
                   .trim()

    return { url: result || null }
  },

  startDate: input => ({ startDate: new Timestamp(input).iso }),
  endDate: input => ({ endDate: new Timestamp(input).iso }),

  content: input => ({ content: String(input || '') }),

  files: input => {

    if (!Array.isArray(input))
      throw new Error('files is not array')

    const result = input.map( item => Number(item) )
                        .filter( item => item > 0)

    return { files: result }
  }
})
