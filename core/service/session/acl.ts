
import { Context, INext } from '@core/service'

import { Session } from './session'
import { Roles } from './roles'

export function ACL(...args: Array<any>): MethodDecorator {
  const roles = Roles.clearInput(args)

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {

    if (!descriptor)
      return descriptor

    const originalFunction = descriptor.value

    descriptor.value = async function(ctx: Context, next: INext): Promise<void> {
      const session = ctx.session as Session

      if (!ctx.session) {
        ctx.debug('=== ACL Denied ===\nSession is undefined')
        ctx.set(403)
        return await next()
      }

      if (!ctx.session.roles.checkAny(roles)) {
        ctx.debug('=== ACL [%o] Denied ===\nSession roles: %o\nProperty key: %s', roles, ctx.session.roles, propertyKey)
        ctx.set(403)
        return await next()
      }

      ctx.debug('=== ACL [%o] Allow ===\nSession roles: %o\nProperty key: %s', roles, ctx.session.roles, propertyKey)

      await originalFunction.call(this, ctx, next)
    }

    return descriptor
  }
}
