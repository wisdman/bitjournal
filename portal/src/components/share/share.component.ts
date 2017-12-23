import { Component, ViewEncapsulation, Input } from '@angular/core'

import {
  SHARE_FB,
  SHARE_GOOGLE,
  SHARE_TELEGRAM,
  SHARE_TWITTER,
  SHARE_VIBER,
  SHARE_VK,
  SHARE_WHATSAPP,
  DOMAIN_PORTAL,
} from '@common/environment'

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
    return SHARE_FB.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get googleUrl():string {
    return SHARE_GOOGLE.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get telegramUrl():string {
    return SHARE_TELEGRAM.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get twitterUrl():string {
    return SHARE_TWITTER.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get viberUrl():string {
    return SHARE_VIBER.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get vkUrl():string {
    return SHARE_VK.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get whatsappUrl():string {
    return SHARE_WHATSAPP.replace(/\{\{\s*URL\s*\}\}/, this.url)
  }

  get url(): string {
    let url = Array.isArray(this.value) ? this.value.join('/') : String(this.value)

    const match = /^(?:[\/\s]+)?(.*)/.exec(url)
    url = match && match[1] || ''

    if ( !/^http/i.test(url) )
      url = `https://${DOMAIN_PORTAL}/${url}`

    return encodeURIComponent(url)
  }

  @Input() value: string | Array<string>
}
