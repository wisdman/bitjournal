import { Pipe, PipeTransform } from '@angular/core'

import { DOMAIN_RAW } from '../../environment'

const EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

const PATH_OG = `https://${DOMAIN_RAW}/og.png`

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  static transform(input: number | string | null, og: boolean = false): string {
    if (!input)
      return og ? PATH_OG : EMPTY_GIF

    const path = ('/' + String(input))
                 .trim()
                 .replace(/\/+/g,'/')
                 .replace(/\/+$/,'')

    if (!path)
      return og ? PATH_OG : EMPTY_GIF

    return `https://${DOMAIN_RAW}${path}`
  }

  transform(input: number | string | null, og: boolean = false): string {
    return ImagePipe.transform(input, og)
  }
}
