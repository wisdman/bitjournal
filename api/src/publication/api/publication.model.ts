
import { Model } from '@core/model'
import { Timestamp } from '@core/timestamp'
import { UUID } from '@core/uuid'

import { Section } from '@common/section'

const URL_REGEXP   = /^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$/

export const PublicationModel = new Model({
  enable: input => ({ enable: !!input }),

  ts: input => ({ ts: new Timestamp(input).iso }),

  url: input => {
    const result = String(input || '')
                   .trim()

    if (result && !URL_REGEXP.test(result))
      throw new Error('incorrect url')

    return { url: result }
  },

  weight: input => ({ weight: Math.min( Math.max(~~input, 0), 2) }),

  sections: input => {
    const result = Section.getArray(input)
                   .map( item => String(item) )

    if (result.length === 0)
      throw new Error('sections is empty')

    return { sections: result }
  },

  bind: input => ({ bind: Math.min( Math.max(~~input, 0), 20) }),

  coins: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => item.trim() )
                   .filter( item => !!item )

    return { coins: result }
  },

  allCoins: input => ({ allCoins: !!input }),

  markets: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => new UUID(item) )
                   .filter( item => item.version === 1 )
                   .map( item => String(item) )

    return { markets: result }
  },

  allMarkets: input => ({ allMarkets: !!input }),

  exchanges: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => new UUID(item) )
                   .filter( item => item.version === 1 )
                   .map( item => String(item) )

    return { exchanges: result }
  },

  allExchanges: input => ({ allExchanges: !!input }),

  ico: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => new UUID(item) )
                   .filter( item => item.version === 1 )
                   .map( item => String(item) )

    return { ico: result }
  },

  allICO: input => ({ allICO: !!input }),

  bigTitle: input => ({ bigTitle: String(input || '') .trim() }),

  title: input => {
    const result = String(input || '')
                   .trim()

    if (result.length === 0)
      throw new Error('title is empty')

    return { title: result }
  },

  ogTitle: input => ({ ogTitle: String(input || '') .trim() }),

  description: input => ({ description: String(input || '').trim() }),

  ogDescription: input => ({ ogDescription: String(input || '').trim() }),

  image: input => {
    const result = parseInt(input)
    return { image: result > 0 ? result : null }
  },

  ogImage: input => {
    const result = parseInt(input)
    return { ogImage: result > 0 ? result : null }
  },

  authors: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => new UUID(item) )
                   .filter( item => item.version === 1 )
                   .map( item => String(item) )

    return { authors: result }
  },

  tags: input => {
    const result = new Array<any>()
                   .concat(input)
                   .map( item => String(item).trim() )

    return { tags: result }
  },

  sharing: input => ({ sharing: !!input }),
  comments: input => ({ comments: !!input }),
  ads: input => ({ ads: !!input }),

  rss: input => ({ rss: !!input }),
  facebook: input => ({ facebook: !!input }),
  twitter: input => ({ twitter: !!input }),

  content: input => ({ content: String(input || '') }),
})
