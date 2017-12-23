import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

import { ImagePipe } from '../../pipes'

import {
  META_DEFAULT_TITLE,
  META_DEFAULT_DESCRIPTION,
  META_DEFAULT_KEYWORDS,
} from '@common/environment'

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
    this._title.setTitle(title || META_DEFAULT_TITLE)
    this._meta.addTag({ name: 'title', content: title || META_DEFAULT_TITLE })

    // Ser description
    this._meta.addTag({ name: 'description', content: description || META_DEFAULT_DESCRIPTION })
    this._meta.addTag({ name: 'keywords', content: keywords || META_DEFAULT_KEYWORDS })

    const ogImagePath = ImagePipe.transform(ogImage, true)

    // Set Og
    this._meta.addTag({ property: 'og:type', content: 'website' })
    this._meta.addTag({ property: 'og:title', content: ogTitle || title || META_DEFAULT_TITLE })
    this._meta.addTag({ property: 'og:description', content: ogDescription || description || META_DEFAULT_DESCRIPTION })
    this._meta.addTag({ property: 'og:image', content: ogImagePath })

    // Set twitter
    this._meta.addTag({ name: 'twitter:card',        content: 'summary_large_image' })
    this._meta.addTag({ name: 'twitter:site',        content: '@bitjournal_io' })
    this._meta.addTag({ name: 'twitter:creator',     content: '@bitjournal_io' })
    this._meta.addTag({ name: 'twitter:title',       content: ogTitle || title || META_DEFAULT_TITLE })
    this._meta.addTag({ name: 'twitter:description', content: ogDescription || description || META_DEFAULT_DESCRIPTION })
    this._meta.addTag({ name: 'twitter:image',       content: ogImagePath })
  }
}
