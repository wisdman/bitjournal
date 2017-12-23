/*
 * Auth API service
 */

import { Service } from '@core/service'
import { DBMiddleware } from '@core/db'

import { CustomSessionMiddleware } from '@common/session'

import {
  Status,
  User
} from './api'

// Set global timezone
process.env.TZ = 'UTC'

// HTTP service
new Service(

  new DBMiddleware(), // Add database to context
  new CustomSessionMiddleware(), // Add custom session to context

  // === Status API ===
  new Status.GetListAPI(),
  new Status.AddAPI(),
  new Status.UpdateAPI(),
  new Status.DeleteAPI(),

  // === Users API ===
  new User.GetMeAPI(),
  new User.GetListAPI(),
  new User.GetOneAPI(),
  new User.AddAPI(),
  new User.UpdateAPI(),
  new User.DeleteAPI(),
  new User.PasswordAPI(),
  new User.GetOTPAPI(),
  new User.SetOTPAPI(),
  new User.DeleteOTPAPI(),

)
