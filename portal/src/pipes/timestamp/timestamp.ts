import { Pipe, PipeTransform } from '@angular/core'

import { Timestamp } from '@core/timestamp'

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  transform(input: any, type: 'ISO' | 'HR' | 'DATE' = 'ISO'): string {

    let ts

    try {
      ts = new Timestamp(input)
    } catch (error) {
      console.error('TimestampPipe construct error', input)
      return ''
    }

    switch (type) {
      case 'HR':
        return ts.HRString

      case 'DATE':
        return ts.UTC.dateString

      case 'ISO':
      default:
        return ts.iso
    }
  }
}
