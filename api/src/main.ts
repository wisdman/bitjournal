/*
 * API service
 */

import { Service, Context, INext, Middleware } from '@core/service'

import { UserSessionMiddleware } from '@common/middleware'
import { PgDBMiddleware } from './pgdb'

import * as API from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new PgDBMiddleware(), // Add database to context

  new UserSessionMiddleware(), // Add session to context

  ...Object.values(API).map( api => new api() ), // Api routing and execute

)
