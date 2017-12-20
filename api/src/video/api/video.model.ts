
import { Model } from '@core/model'

export const VideoModel = new Model({
  enable: input => ({ enable: !!input }),
})
