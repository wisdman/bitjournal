
import { Model } from '@core/model'
import { Timestamp } from '@core/timestamp'

export const CoinModel = new Model({
  symbol: input => {
    const output = String(input || '')
                   .trim()
                   .toUpperCase()
                   .replace(/[\.]/g,'')
    return output && { symbol: output } || undefined
  },

  title: input => {
    const output = String(input || '').trim()
    return output && { title: output } || undefined
  },

  founder: input => {
    const output = String(input || '').trim()
    return output && { founder: output } || undefined
  },

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

  algorithm: input => {
    const output = String(input || '').trim()
    return output && { algorithm: output } || undefined
  },

  proofType: input => {
    const output = String(input || '').trim()
    return output && { proofType: output } || undefined
  },

  url: input => {
    const output = String(input || '').trim()
    return output && { url: output } || undefined
  },

  maxSupply: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { maxSupply: output } || undefined
  },

  availableSupply: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { availableSupply: output } || undefined
  },

  blockReward: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { blockReward: output } || undefined
  },

  lastBlockTS: input => {
    let ts
    try {
      ts = new Timestamp(input)
      ts.UTC.setMidnight()
      ts = ts.iso
    } catch (_) {
      ts = undefined
    }
    return ts && { lastBlockTS: ts } || undefined
  },

  lastBlockNumber: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { lastBlockNumber: output } || undefined
  },

  hashRate: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && output < Infinity && { hashRate: output } || undefined
  },

  priceUSD: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { priceUSD: output } || undefined
  },

  priceBTC: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { priceBTC: output } || undefined
  },

  priceRUB: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { priceRUB: output } || undefined
  },

  volume24hUSD: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { volume24hUSD: output } || undefined
  },

  volume24hRUB: input => {
    const output = Math.max(parseFloat(input) || 0, 0)
    return output && { volume24hRUB: output } || undefined
  },

  change1h: input => {
    const output = parseFloat(input) || 0
    return output && { change1h: output } || undefined
  },

  change24h: input => {
    const output = parseFloat(input) || 0
    return output && { change24h: output } || undefined
  },

  change7d: input => {
    const output = parseFloat(input) || 0
    return output && { change7d: output } || undefined
  },

  histoday: input => {

    if (typeof input !== 'object' || input === null)
      return undefined

    const output = Object.keys(input)
                         .map( key => {

                           let ts
                           try {
                             ts = new Timestamp(key)
                             ts.UTC.setMidnight()
                             ts = ts.UTC.dateString
                           } catch (_) {
                             ts = undefined
                           }

                           if (!ts)
                             return undefined

                           const value = Math.max(parseFloat(input[key]) || 0, 0)

                           if (!value)
                             return undefined

                           return { [ts]: value }
                         })
                         .filter( item => !!item )
                         .reduce( (prev, item) => Object.assign(prev, item), {}) as {}

    if (Object.keys(output).length === 0)
      return undefined

    return output
  }
})
