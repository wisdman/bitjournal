/*
 * === User role ===
 */

import { Enum } from '@core/enum'

export class RoleEnum extends Enum {
  static User          = new RoleEnum('user'          , 'Пользователь'  , null)
  static Author        = new RoleEnum('author'        , 'Автор'         , null)
  static Publisher     = new RoleEnum('publisher'     , 'Публикатор'    , null)
  static Chief         = new RoleEnum('chief'         , 'Редактор'      , null)
  static Administrator = new RoleEnum('administrator' , 'Администратор' , null)
  static Su            = new RoleEnum('su'            , 'Super user'    , null)

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
