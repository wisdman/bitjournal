import { Pipe, PipeTransform } from '@angular/core'

import { COIN_IMG } from '@common/coin'
import { DOMAIN_PORTAL } from '@common/environment'

@Pipe({
  name: 'ccimg'
})
export class CoinImagePipe implements PipeTransform {
  static transform(input: number | string): string {
    return `https://${DOMAIN_PORTAL}/coins/${COIN_IMG(String(input))}.png`

  }

  transform(input: number | string): string {
    return CoinImagePipe.transform(input)
  }
}
