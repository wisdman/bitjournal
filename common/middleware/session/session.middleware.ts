/*
 * Auth context
 */

import { Client } from 'pg'
import { SessionMiddleware, Context, INext } from '@core/service'
import { UUID } from '@core/uuid'

import { UserSession } from './session'

const SESSION_ID_REGEXP = /[0-9a-f]{128}/

export class UserSessionMiddleware extends SessionMiddleware {

  constructor(){
    super(UserSession)
  }

  async get(ctx: Context) {
    const id = SESSION_ID_REGEXP.exec(ctx.request.getHeader('Authorization') || '')
    ctx.session.id = id && id[0] || ''
  }

  async before(ctx: Context) {
    if (!ctx.session.id)
      return

    const db = ctx.db as Client
    const result = await db.query({
      text: 'SELECT id, roles FROM sessions__get_user($1)',
      values: [ctx.session.id]
    })

    if (result.rowCount === 0)
      return

    ctx.session.setUserId(result.rows[0].id)
    ctx.session.setRoles(result.rows[0].roles)
  }

  async after(ctx: Context) {
    const userId = ctx.session.userId

    // User is empty, clear session
    if (!(userId instanceof UUID) || !userId.version) {
      ctx.session.id = ''
      return
    }

    const db = ctx.db as Client
    const result = await db.query({
      text: 'SELECT sessions__save($1, $2, $3) AS id',
      values: [ ctx.session.id || null, String(userId), ctx.session.ip ]
    })

    ctx.session.id = result.rows[0] && result.rows[0].id || ''
  }

  async set(ctx: Context) {
    if (ctx.session.isValid)
      ctx.response.setHeader('Authorization', 'token ' + ctx.session.id)
  }
}
