
import { Observable } from 'rxjs/Observable'
import { ICoin } from '@common/coin'

export interface ISource {
  readonly coin: Observable< Partial<ICoin> >
}

