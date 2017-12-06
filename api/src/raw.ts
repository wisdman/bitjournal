/*
 * RAW service
 */

import { Service } from '@core/service'

import {
  PgDBMiddleware,
  SessionMiddleware,
} from '@common/middleware'

import {
  RawAPI
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new PgDBMiddleware(), // Add database to context

  new SessionMiddleware(), // Add session to context

  new RawAPI(),
)
