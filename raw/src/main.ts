/*
 * RAW service
 */

import { Service } from '@core/service'
import { DBMiddleware } from '@core/db'

import { RAW } from './raw'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(
  new DBMiddleware(), // Add database to context
  new RAW(),
)
