/*
 * API service
 */

import { Service } from '@core/service'

import {
  PgDBMiddleware,
  SessionMiddleware,
} from '@common/middleware'

import {
  AuthAPI,
  CurrenciesAPI,
  ExchangesAPI,
  ICOAPI,
  MarketsAPI,
  PublicationsAPI,
  SectionsAPI,
  StatusesAPI,
  UsersAPI,
  VideoAPI,
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new PgDBMiddleware(), // Add database to context

  new SessionMiddleware(), // Add session to context

  // === API ===
  new AuthAPI(),
  new CurrenciesAPI(),
  new ExchangesAPI(),
  new ICOAPI(),
  new MarketsAPI(),
  new PublicationsAPI(),
  new SectionsAPI(),
  new StatusesAPI(),
  new UsersAPI(),
  new VideoAPI(),
)
