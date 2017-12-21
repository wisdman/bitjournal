
export interface IVideo {
  id: string
  enable: boolean
}

export interface IPartialVideo extends Partial<IVideo> {
  [key: string]: any
}
