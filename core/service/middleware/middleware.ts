/*
 * Middleware
 */

import { CallableClass } from '@core/callable'

import { Context } from '../context'

// Next function type
export interface INext {
  (): Promise<void>
}

// Middleware function type
export interface IMiddleware {
  (ctx: Context, next: INext): Promise<void>
}

// Parent midleware classs
// Extend of it for create middleware
export abstract class Middleware extends CallableClass {

  constructor() {
    super( async (ctx: Context, next: INext): Promise<void> => await this.main(ctx, next) )
  }

  // Default main function
  async main(ctx: Context, next: INext): Promise<void> {
    await next()
  }
}
