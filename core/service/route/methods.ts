
import { IMiddleware } from '../middleware'

export class Methods extends Array<IMiddleware> {
  static List = new WeakMap<Object, Methods>()

  static get(target: Object): Methods {
    return this.List.get(target) || new Methods()
  }

  static set(target: Object, fields: Methods) {
    this.List.set(target, fields)
  }
}
