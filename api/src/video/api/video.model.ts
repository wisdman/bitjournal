
import { Model } from '@core/model'

const YOUTUBE_VIDEO_REGEXP = /^[a-zA-Z0-9_-]{6,11}$/

export const VideoModel = new Model({
  id: input => {
    const result = String(input || '')
                   .trim()

    if (!result || !YOUTUBE_VIDEO_REGEXP.test(result))
      throw new Error('Incorrect YouTube video id')

    return { id: result }
  },

  enable: input => ({ enable: !!input }),
})
