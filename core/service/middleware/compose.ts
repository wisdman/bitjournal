/*
 * Compose list of middleware into runable function chain
 */

import { Context } from '../context'
import { IMiddleware, INext, Middleware } from './middleware'

export function Compose(middlewareList: Array<IMiddleware>): IMiddleware {
  return async function(this: any, ctx: Context, next: INext = () => Promise.resolve() ): Promise<void>  {

    let index: number = -1

    const dispatch = (i: number) => async () => {
      if (i <= index) {
        throw new Error('next() called multiple times')
      }

      index = i

      if (i >= middlewareList.length) {
        return await next()
      }

      await middlewareList[i].call(this, ctx, dispatch(i + 1))
    }

    await dispatch(0)()
  }
}
