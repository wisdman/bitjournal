/*
 * === User role ===
 */

import { Enum } from '@core/enum'

export class BlockEnum extends Enum {
  static A1 = new BlockEnum('A1', 'A1', 'Вершний')
  static A2 = new BlockEnum('A2', 'A2', 'Под видео')
  static A3 = new BlockEnum('A3', 'A3', 'Под новостью')
  static B1 = new BlockEnum('B1', 'B1', 'Башня')
  static B2 = new BlockEnum('B2', 'B2', 'Башня')
  static B3 = new BlockEnum('B3', 'B3', 'Башня')
  static M1 = new BlockEnum('M1', 'M1', 'Мобильный')
  static M2 = new BlockEnum('M2', 'M2', 'Мобильный')
  static M3 = new BlockEnum('M3', 'M3', 'Мобильный')

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
