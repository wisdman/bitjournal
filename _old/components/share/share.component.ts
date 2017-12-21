import { Component, ViewEncapsulation, Input } from '@angular/core'

const SHARE_URL_BASE = 'https://bitjournal.io/'

const FB_BASE       = 'https://www.facebook.com/sharer/sharer.php?u={{URL}}'
const TWITTER_BASE  = 'https://twitter.com/home?status={{URL}}'
const VK_BASE       = 'https://vk.com/share.php?url={{URL}}'
const TELEGRAM_BASE = 'https://t.me/share/url?url={{URL}}'
const WHATSAPP_BASE = 'whatsapp://send?text={{URL}}'
const VIBER_BASE    = 'viber://forward?text={{URL}}'
const GOOGLE_BASE   = 'https://plus.google.com/share?url={{URL}}'


@Component({
  selector: '.share',
  templateUrl: './share.component.html',
  styleUrls: [ './share.component.css' ],
  encapsulation: ViewEncapsulation.None,
  host: {

  }
})
export class ShareComponent {

  get fbUrl():string {
    return FB_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get twitterUrl():string {
    return TWITTER_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get vkUrl():string {
    return VK_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get telegramUrl():string {
    return TELEGRAM_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get whatsappUrl():string {
    return WHATSAPP_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get viberUrl():string {
    return VIBER_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get googleUrl():string {
    return GOOGLE_BASE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get url(): string {
    let url = Array.isArray(this.value) ? this.value.join('/') : String(this.value)

    const match = /^(?:[\/\s]+)?(.*)/.exec(url)
    url = match && match[1] || ''

    if ( !/^http/i.test(url) )
      url = SHARE_URL_BASE + '/' + url

    return encodeURIComponent(url)
  }

  @Input() value: string | Array<string>
}
