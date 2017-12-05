/*
 * === User role ===
 */

import { Enum } from '@core/enum'

export class BlockEnum extends Enum {
  static A1 = new BlockEnum('a1', 'A1', 'Вершний')
  static A2 = new BlockEnum('a2', 'A2', 'Под видео')
  static A3 = new BlockEnum('a3', 'A3', 'Под новостью')
  static B1 = new BlockEnum('b1', 'B1', 'Башня')
  static B2 = new BlockEnum('b2', 'B2', 'Башня')
  static B3 = new BlockEnum('b3', 'B3', 'Башня')
  static M1 = new BlockEnum('m1', 'M1', 'Мобильный')
  static M2 = new BlockEnum('m2', 'M2', 'Мобильный')
  static M3 = new BlockEnum('m3', 'M3', 'Мобильный')

  private constructor(
    id: string,
    value: string,
    readonly description: string
  ) {
    super(id, value)
  }

  [Symbol.toStringTag]() {
    return 'BlockEnum'
  }
}
