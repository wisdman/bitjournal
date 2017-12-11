import { Pipe, PipeTransform } from '@angular/core'

import { Timestamp } from '@core/timestamp'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(input: Array<any>, key: string, value:any): Array<any> {
    if (Array.isArray(input))
      return input.filter( (item:any) => item[key] === value )

    return input
  }
}