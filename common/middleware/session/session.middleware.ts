/*
 * Auth context
 */

import { Client } from 'pg'
import { SessionMiddleware, Context, INext } from '@core/service'
import { UUID } from '@core/uuid'

import { UserSession } from './session'

const SESSION_ID_REGEXP = /token\s+([0-9a-f]{128})/

export class UserSessionMiddleware extends SessionMiddleware {

  constructor(){
    super(UserSession)
  }

  async get(ctx: Context) {
    const id = SESSION_ID_REGEXP.exec(ctx.request.getHeader('Authorization') || '')
    ctx.session.id = id && id[1] || ''
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

    ctx.session.setUser(result.rows[0])
  }
}
