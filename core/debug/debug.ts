
import { CallableClass } from '../callable'

import { isEnable, log } from './log'

export class Debug extends CallableClass {

  public readonly enable: boolean

  constructor(name: string) {
    const enable = process.env.DEBUG ? true : isEnable( name.toLowerCase() )

    super( (str: string, ...args: Array<any>) => {
      if (!enable)
        return

      log(`${name}: ${str}`, args.map(item => item && item.valueOf instanceof Function ? item.valueOf() : item) )
    })

    this.enable = enable
  }
}
