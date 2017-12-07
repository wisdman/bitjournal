import { Pipe, PipeTransform } from '@angular/core'

import { Timestamp } from '@core/timestamp'

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  transform(input: any, type: 'ISO' | 'HR' | 'URL' = 'ISO'): string {

    const ts = new Timestamp(input)
    if (ts.isInvalid)
      return ''

    switch (type) {
      case 'ISO':
        return ts.toISOString()

      case 'HR':
        return ts.toHRString()

      case 'URL':
        return ts.toURLString()

      default:
        return ts.toISOString()
    }
  }
}
