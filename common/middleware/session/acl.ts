
import { Context, INext } from '@core/service'
import { UserRoleEnum } from '@common/models'

import { Session } from './session'

export function ACL(roles: Array<UserRoleEnum> = []): MethodDecorator {
  const rolesIds = roles.map( item => item.id)

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {

    if (!descriptor)
      return descriptor

    const originalFunction = descriptor.value

    descriptor.value = async function(ctx: Context, next: INext): Promise<void> {
      const session = ctx.session as Session

      if (!ctx.session) {
        ctx.debug('=== ACL %s Denied ===\nSession is undefined', rolesIds)
        ctx.set(403)
        return await next()
      }

      if (!ctx.session.valid) {
        ctx.debug('=== ACL %s Denied ===\nSession: %s', rolesIds, ctx.session)
        ctx.set(403)
        return await next()
      }

      if (!ctx.session.user.checkRole(roles)) {
        ctx.debug('=== ACL %s Denied ===\nSession: %s', rolesIds, ctx.session)
        ctx.set(403)
        return await next()
      }

      ctx.debug('=== ACL %s Allow ===\nSession: %s', rolesIds, ctx.session)

      await originalFunction.call(this, ctx, next)
    }

    return descriptor
  }
}
