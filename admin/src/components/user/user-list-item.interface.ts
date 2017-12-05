
import { Timestamp } from '@core/timestamp'
import { IUser } from '@common/models'

export interface IUserListItem extends IUser {
  lastsLogin?: Timestamp
}
