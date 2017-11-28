
export interface IPublication {
  id: string
  enable: boolean

  weight: number
  sections: Array<string>

  bigTitle: string
  title: string
  ogTitle: string

  description: string
  ogDescription: string

  image: number
  ogImage: number

  rss: boolean
  ia: boolean
  yandex: boolean
  zen: boolean
}
