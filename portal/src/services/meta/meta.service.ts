import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

const DEFAULT_TITLE = 'BitJournal — издание про биткоин, криптовалюты, ICO, майнинг и блокчейн'
const DEFAULT_DESCRIPTION = 'На сайте BitJournal вы найдете оперативные новости из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромные майнинг-фермы про летящий на луну биткоин и многое другое'
const DEFAULT_KEYWORDS = 'биткоин, bitjournal, криптовалюты, ico, майнинг, блокчейн'

import { ImagePipe } from '../../pipes'

@Injectable()
export class MetaService {
  constructor(
    private readonly _meta: Meta,
    private readonly _title: Title
  ) {}

  setMetaTags({
    title = '',
    description = '',
    keywords = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = 0,
  }:{
    title?: string
    description?: string
    keywords?: string
    ogTitle?:string
    ogDescription?: string
    ogImage?: number
  } = {}) {
    // Set title
    this._title.setTitle(title || DEFAULT_TITLE)
    this._meta.addTag({ name: 'title', content: title || DEFAULT_TITLE })

    // Ser description
    this._meta.addTag({ name: 'description', content: description || DEFAULT_DESCRIPTION })
    this._meta.addTag({ name: 'keywords', content: keywords || DEFAULT_KEYWORDS })

    // Set Og
    this._meta.addTag({ property: 'og:type', content: 'website' })
    this._meta.addTag({ property: 'og:title', content: ogTitle || title || DEFAULT_TITLE })
    this._meta.addTag({ property: 'og:description', content: ogDescription || description || DEFAULT_DESCRIPTION })
    this._meta.addTag({ property: 'og:image', content: ImagePipe.ogURL(ogImage) })

    // Set twitter
    this._meta.addTag({ name: 'twitter:card',        content: 'summary_large_image' })
    this._meta.addTag({ name: 'twitter:site',        content: '@bitjournal_io' })
    this._meta.addTag({ name: 'twitter:creator',     content: '@bitjournal_io' })
    this._meta.addTag({ name: 'twitter:title',       content: ogTitle || title || DEFAULT_TITLE })
    this._meta.addTag({ name: 'twitter:description', content: ogDescription || description || DEFAULT_DESCRIPTION })
    this._meta.addTag({ name: 'twitter:image',       content: ImagePipe.ogURL(ogImage) })
  }
}
