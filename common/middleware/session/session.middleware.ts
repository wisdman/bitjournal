/*
 * Auth context
 */

import { Client } from 'pg'
import { SessionMiddleware, Context, INext } from '@core/service'

import { Query } from '@core/pg-query'
import { User } from '@common/models'

import { UserSession } from './session'

const SESSION_ID_REGEXP = /[0-9a-f]{128}/

export class UserSessionMiddleware extends SessionMiddleware {

  constructor(){
    super(UserSession)
  }

  async get(ctx: Context) {
    const id = SESSION_ID_REGEXP.exec(
      ctx.request.getHeader('Authorization') ||
      ctx.request.getHeader('Cookie') ||
      ''
    )
    ctx.session.id = id && id[0] || ''
  }

  async before(ctx: Context) {
    if (ctx.session.isNULL)
      return

    const query = new Query('users', 'public').select(User.fields.inputKeyList)
                                              .where('sessions ? $1', ctx.session.id)
    const db = ctx.db as Client
    const result = await db.query(query)

    if (result.rowCount === 0)
      return

    ctx.session.user = new User(result.rows[0])
  }

  async after(ctx: Context) {
    const user = ctx.session.user as User

    // User is empty, clear session
    if (!(user instanceof User) || !user.id.version) {
      ctx.session.id = ''
      return
    }

    const db = ctx.db as Client
    const result = await db.query({
      text: 'SELECT public.sessions__save($1, $2, $3) AS id',
      values: [ ctx.session.id || null, String(user.id), ctx.session.ip ]
    })

    ctx.session.id = result.rows[0] && result.rows[0].id || ''
  }
}
