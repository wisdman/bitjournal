/*
 * RAW service
 */

import { Service } from '@core/service'
import { DBMiddleware } from '@core/db'

import { CustomSessionMiddleware } from '@common/session'

import {
  AddAPI,
  DeleteAPI,
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new DBMiddleware(), // Add database to context
  new CustomSessionMiddleware(), // Add custom session to context

  // === API ===
  new AddAPI(),
  new DeleteAPI(),
)
