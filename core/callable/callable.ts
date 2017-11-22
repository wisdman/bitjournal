/*
 * Create callable class
 */

export abstract class CallableClass extends Function {
  constructor(fn: (...args:Array<any>) => any) {
    super('throw new TypeError("CallableClass was called")')
    return Object.setPrototypeOf(fn, new.target.prototype)
  }
}
