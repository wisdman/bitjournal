/*
 * Auth API service
 */

import { Service } from '@core/service'
import { DBMiddleware } from '@core/db'

import { CustomSessionMiddleware } from '@common/session'

import {
  AddAPI,
  DeleteAPI,
  GetListAPI,
  UpdateAPI,
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new DBMiddleware(), // Add database to context
  new CustomSessionMiddleware(), // Add custom session to context

  // === API ===
  new GetListAPI(),
  new AddAPI(),
  new UpdateAPI(),
  new DeleteAPI,
)
