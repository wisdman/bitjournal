
import { Observable } from 'rxjs/Observable'
import { ICoin } from '@common/models'

export interface ISource {
  readonly coin: Observable< Partial<ICoin> >
}
