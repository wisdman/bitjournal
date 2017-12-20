
import { Model } from '@core/model'

export const StatusModel = new Model({
  enable: input => ({ enable: !!input }),

  title: input => {
    const result = String(input || '')
                   .trim()

    if (result.length === 0)
      throw new Error('title is empty')

    return { title: result }
  },

  image: input => {
    const result = parseInt(input)
    return { image: result > 0 ? result : null }
  }

})
