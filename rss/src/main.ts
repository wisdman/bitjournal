/*
 * RAW service
 */

import { Service } from '@core/service'
import { DBMiddleware } from '@core/db'

import {
  RSSMiddleware,
  SitemapMiddleware,
} from './engine'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(
  new DBMiddleware(), // Add database to context

  // === Engine ===
  new RSSMiddleware(),
  new SitemapMiddleware()
)
