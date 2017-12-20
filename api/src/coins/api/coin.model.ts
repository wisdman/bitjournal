
import { Model } from '@core/model'
import { Timestamp } from '@core/timestamp'

export const CoinModel = new Model({
  enable: input => ({ enable: !!input }),

  hot: input => ({ hot: !!input }),

  title: input => ({ title: String(input || '').trim() }),

  description: input => ({ description: String(input || '').trim() }),

  ogTitle: input => ({ ogTitle: String(input || '').trim() }),

  ogDescription: input => ({ ogDescription: String(input || '').trim() }),

  founder: input => ({ founder: String(input || '').trim() }),

  startDate: input => {
    let ts
    try {
      ts = new Timestamp(input)
      ts.UTC.setMidnight()
      ts = ts.UTC.dateString
    } catch (_) {
      ts = undefined
    }
    return ts && { startDate: ts } || undefined
  },

  url: input => ({ url: String(input || '').trim() }),

  algorithm: input => ({ algorithm: String(input || '').trim() }),

  proofType: input => ({ proofType: String(input || '').trim() }),

  maxSupply: input => ({ maxSupply: Math.max(parseFloat(input) || 0, 0) }),

  blockReward: input => ({ blockReward: Math.max(parseFloat(input) || 0, 0) }),

})
