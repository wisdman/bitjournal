
import { Timestamp } from '@core/timestamp'
import { IPartialPublication } from '@common/publication'
import { DOMAIN_PORTAL, DOMAIN_RAW } from '@common/environment'

export class RSSItem {

  rss: boolean
  facebook: boolean
  twitter: boolean

  private readonly _ts: Timestamp
  private readonly _url: string

  readonly title: string

  private readonly _description: string

  readonly content: string

  private readonly _image: number | null

  author: string = 'Редакция BitJournal'

  get link():string {
    return `https://${DOMAIN_PORTAL}/${this._ts.UTC.dateString}/${this._url}`
  }

  get pubDate(): string {
    return this._ts.UTC.toString()
  }

  get clearText(): string {
    return this.content.replace(/<[^>]+>/g,' ') // Remove tags
                       .replace(/(\r|\n|\t)/g, ' ') // Remove new line and tabs
                       .replace(/&[a-z0-9#]+;/g, ' ') // Remove escaped symbols
                       .replace(/[<>]+/g, ' ') // Remove bad characters
                       .replace(/\s+/g,' ') // Remove doblespaces
                       .trim()
  }

  get description(): string {
    if (this._description)
      return this._description

    const match = this.clearText
                      .match(/^([^\.]+)/)

    const description = (match && match[0] || '').trim()

    if (description.length <= 160)
      return description

    return description.slice(0,160) + '...'
  }

  get image(): string {
    return `https://${DOMAIN_RAW}/${this._image}`
  }

  constructor(item: IPartialPublication) {
    this.rss      = item.rss      || false
    this.facebook = item.facebook || false
    this.twitter  = item.twitter  || false

    this._ts = new Timestamp(item.ts)
    this._url = item.url || ''

    this.title = String(item.title || '').trim()

    this._description = String(item.description || '').trim()

    this.content = String(item.content || '').trim()

    this._image = item.image || null
  }

}
