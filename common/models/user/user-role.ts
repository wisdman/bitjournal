/*
 * === User role ===
 */

import { Enum } from '@core/enum'

export class UserRole extends Enum {
  static User          = new UserRole('user'          , 'Пользователь'  , null)
  static Author        = new UserRole('author'        , 'Автор'         , null)
  static Publisher     = new UserRole('publisher'     , 'Публикатор'    , null)
  static Chief         = new UserRole('chief'         , 'Редактор'      , null)
  static Administrator = new UserRole('administrator' , 'Администратор' , null)
  static Su            = new UserRole('su'            , 'Super user'    , null)

  private constructor(
    id: string,
    value: string,
    readonly icon: string | null
  ) {
    super(id, value)
  }

  [Symbol.toStringTag]() {
    return 'UserRole'
  }
}
