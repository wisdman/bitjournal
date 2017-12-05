

import { IAds } from '@common/models'

export interface IAdsListItem extends IAds {
  view?: number
  click?: number
  ctr?: number
}
