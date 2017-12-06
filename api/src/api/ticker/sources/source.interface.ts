
import { ICoin } from '@common/models'

export interface ISource {
  readonly coins: Array<ICoin>
  update: (symbols: Array<string>) => Promise< Array<ICoin> >
}
