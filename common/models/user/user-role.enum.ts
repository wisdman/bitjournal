/*
 * === User role ===
 */

import { Enum } from '@core/enum'

export class UserRoleEnum extends Enum {
  static User          = new UserRoleEnum('user'          , 'Пользователь'  , null)
  static Author        = new UserRoleEnum('author'        , 'Автор'         , null)
  static Publisher     = new UserRoleEnum('publisher'     , 'Публикатор'    , null)
  static Chief         = new UserRoleEnum('chief'         , 'Редактор'      , null)
  static Administrator = new UserRoleEnum('administrator' , 'Администратор' , null)
  static Su            = new UserRoleEnum('su'            , 'Super user'    , null)

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
