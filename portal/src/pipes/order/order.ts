import { Pipe, PipeTransform } from '@angular/core'

import { Timestamp } from '@core/timestamp'

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform(input: Array<any>, key: string): Array<any> {
    if (Array.isArray(input))
      return input.sort( (a: any, b:any) => a[key] < b[key] ? 1 : -1 )

    return input

  }
}
