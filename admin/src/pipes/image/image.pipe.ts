import { Pipe, PipeTransform } from '@angular/core'

import { RAW_SERVER } from './enveroments'

const PATH_REGEXP = /^\/?(.*)/

const EMPTY_PNG = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(value: number | string | null): string {
    if (!value)
      return EMPTY_PNG

    const match = PATH_REGEXP.exec( String(value).trim())

    if (!match)
      return EMPTY_PNG

    return RAW_SERVER + '/' + ( match && match[1] )
  }
}
