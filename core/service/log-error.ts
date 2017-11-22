
import { inspect } from 'util'
import { Context } from './context'

export function logError(error: any, ctx?: Context) {
  if (!error.status || error.status >= 500)
    console.error(
      '\x1b[31m=== Internal context error ===\n',
      error,
      '\x1b[0m\n=== with Context ===\n',
      ctx === undefined ? undefined : inspect(ctx.valueOf(), {
        depth: 3,
        colors: true
      })
    )
}
