import { Pipe, PipeTransform } from '@angular/core'

import {
  RAW_SERVER,
  PORTAL_SERVER
} from './enveroments'

const PATH_REGEXP = /^\/?(.*)/

const EMPTY_PNG = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  static ogURL(input: number | string | null): string {
    if (!input)
      return PORTAL_SERVER + '/og.png'

    const match = PATH_REGEXP.exec( String(input).trim())

    if (!match)
      return PORTAL_SERVER + '/og.png'

    return RAW_SERVER + '/' + ( match && match[1] )
  }

  transform(input: number | string | null): string {
    if (!input)
      return EMPTY_PNG

    const match = PATH_REGEXP.exec( String(input).trim())

    if (!match)
      return EMPTY_PNG

    return RAW_SERVER + '/' + ( match && match[1] )
  }
}
