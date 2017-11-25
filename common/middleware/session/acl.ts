
import { Context, INext } from '@core/service'
import { User, UserRole } from '@common/models'

import { UserSession } from './session'

export function ACL(roles: Array<UserRole> = []): MethodDecorator {
  const rolesIds = roles.map( item => item.id)

  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {

    if (!descriptor)
      return descriptor

    const originalMethod = descriptor.value

    descriptor.value = async function(ctx: Context, next: INext): Promise<void> {

      if (!ctx.session) {
        ctx.debug('=== ACL %s Denied ===\nSession is undefined', rolesIds)
        ctx.set(403)
        return await next()
      }

      const user = ctx.session.user as User

      if (!user) {
        ctx.debug('=== ACL %s Denied ===\nUser: %s', rolesIds, user)
        ctx.set(403)
        return await next()
      }

      if ( !user.hasRole(roles) ) {
        ctx.debug('=== ACL %s Denied ===\nUser: %s', rolesIds, user)
        ctx.set(403)
        return await next()
      }

      ctx.debug('=== ACL %s Allow ===\nUser: %s', rolesIds, user)

      await originalMethod.call(this, ctx, next)
    }

    return descriptor
  }
}
