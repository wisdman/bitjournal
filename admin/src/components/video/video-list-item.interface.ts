
import { IVideo } from '@common/models'

export interface IVideoListItem extends IVideo {
  thumb: string
  date: Date,
  title: string
  duration: string
  view: number
  like: number
  dislike: number
  comment: number
}
